"use strict";

var kb = require("keyboardjs");
var lz = require("lz-string");
var $ = require("jquery");

var Renderer = require("./renderer");
var View = require("./view");
var System = require("./system");
var xyz = require("./xyz");
var shaders = require("./shaders");
var samples = require("./samples");
var elements = require("./elements");
var presets = require("./presets");
var mimetypes = require("./mimetypes");


window.onerror = function(e, url, line) {
    var error = document.getElementById("error");
    error.style.display = "block";
    var error = document.getElementById("error-text");
    error.innerHTML = "Sorry, an error happened:<br><br>Line #" + line + ": " + e;
}


kb.active = function(key) {
    var keys = kb.activeKeys();
    for (var i = 0; i < keys.length; i++) {
        if (key === keys[i]) {
            return true;
        }
    }
    return false;
}

var system = System.new();
var view = View.new();
var renderer = null;
var needReset = false;

var renderContainer;

function loadStructure(data) {
    system = System.new();
    for (var i = 0; i < data.length; i++) {
        var a = data[i];
        var x = a.position[0];
        var y = a.position[1];
        var z = a.position[2];
        System.addAtom(system, a.symbol, x,y,z);
    }
    System.center(system);
    System.calculateBonds(system);
    renderer.setSystem(system, view);
    View.center(view, system);
    needReset = true;
}

function loadSample() {
    var selector = document.getElementById("controls-sample");
    $.ajax({
        url: "static/samples/" + selector.value,
        success: function(data) {
            loadStructure(xyz(data)[0]);
        }
    });
}

window.onload = function() {

    renderContainer = document.getElementById("render-container");

    var imposterCanvas = document.getElementById("renderer-canvas");

    renderer = new Renderer(imposterCanvas, view.resolution, view.aoRes);

    var selector = document.getElementById("controls-sample");
    for (var i = 0; i < samples.length; i++) {
        var sample = samples[i];
        var option = document.createElement("option");
        option.value = sample.file;
        option.innerHTML = sample.name;
        if (i === 0) {
            option.selected = "selected";
        }
        selector.appendChild(option);
    }

    selector.addEventListener("change", loadSample);

    if (location.hash !== "") {
        var hash = location.hash.slice(1, location.hash.length);
        var data = lz.decompressFromEncodedURIComponent(hash);
        data = JSON.parse(data);
        system = data.system;
        view = data.view;
        renderer.setSystem(system, view);
        renderer.setResolution(view.resolution, view.aoRes);
        needReset = true;
    } else {
        loadSample();
    }

    var lastX = 0.0;
    var lastY = 0.0;
    var buttonDown = false;

    renderContainer.addEventListener("mousedown", function(e) {
        document.body.style.cursor = "none";
        if (e.button == 0) {
            buttonDown = true;
        }
        lastX = e.clientX;
        lastY = e.clientY;
    });

    window.addEventListener("mouseup", function(e) {
        document.body.style.cursor = "";
        if (e.button == 0) {
            buttonDown = false;
        }
    });

    setInterval(function() {
        if (!buttonDown) {
            document.body.style.cursor = "";
        }
    }, 10);

    window.addEventListener("mousemove", function(e) {
        if (!buttonDown) {
            return;
        }
        var dx = e.clientX - lastX;
        var dy = e.clientY - lastY;
        if (dx == 0 && dy == 0) {
            return;
        }
        lastX = e.clientX;
        lastY = e.clientY;
        if (e.shiftKey) {
            View.translate(view, dx, dy);
        } else {
            View.rotate(view, dx, dy);
        }
        needReset = true;
    });

    renderContainer.addEventListener("wheel", function(e) {
        var wd = 0;
        if (e.deltaY < 0) {
            wd = 1;
        }
        else {
            wd = -1;
        }
        if (kb.active("a")) {
            view.atomScale += wd/100;
            View.resolve(view);
            document.getElementById("atom-radius").value = Math.round(view.atomScale * 100);
            needReset = true;
        } else if (kb.active("z")) {
            var scale = view.relativeAtomScale;
            scale += wd/100;
            view.relativeAtomScale += wd/100;
            View.resolve(view);
            document.getElementById("relative-atom-radius").value = Math.round(view.relativeAtomScale * 100);
            needReset = true;
        } else if (kb.active("d")) {
            view.dofStrength += wd/100;
            View.resolve(view);
            document.getElementById("dof-strength").value = Math.round(view.dofStrength * 100);
        } else if (kb.active("p")) {
            view.dofPosition += wd/100;
            View.resolve(view);
            document.getElementById("dof-position").value = Math.round(view.dofPosition * 100);
        } else if (kb.active("b")) {
            view.bondScale += wd/100;
            View.resolve(view);
            document.getElementById("bond-radius").value = Math.round(view.bondScale * 100);
            needReset = true;
        } else if (kb.active("s")) {
            view.bondShade += wd/100;
            View.resolve(view);
            document.getElementById("bond-shade").value = Math.round(view.bondShade * 100);
            needReset = true;
        } else if (kb.active("w")) {
            view.atomShade += wd/100;
            View.resolve(view);
            document.getElementById("atom-shade").value = Math.round(view.atomShade * 100);
            needReset = true;
        } else if (kb.active("o")) {
            view.ao += wd/100;
            View.resolve(view);
            document.getElementById("ambient-occlusion").value = Math.round(view.ao * 100);
        } else if (kb.active("l")) {
            view.brightness += wd/100;
            View.resolve(view);
            document.getElementById("brightness").value = Math.round(view.brightness * 100);
        } else if (kb.active("q")) {
            view.outline += wd/100;
            View.resolve(view);
            document.getElementById("outline-strength").value = Math.round(view.outline * 100);
        } else {
            view.zoom = view.zoom * (wd === 1 ? 1/0.9 : 0.9);
            View.resolve(view);
            needReset = true;
        }
        e.preventDefault();
    });

    var buttonUpColor = "#bbb";
    var buttonDownColor = "#3bf";

    function hideAllControls() {
        document.getElementById("controls-structure").style.display = "none";
        document.getElementById("controls-render").style.display = "none";
        document.getElementById("controls-share").style.display = "none";
        document.getElementById("controls-help").style.display = "none";
        document.getElementById("controls-about").style.display = "none";
        document.getElementById("menu-button-structure").style.background = buttonUpColor;
        document.getElementById("menu-button-render").style.background = buttonUpColor;
        document.getElementById("menu-button-share").style.background = buttonUpColor;
        document.getElementById("menu-button-help").style.background = buttonUpColor;
        document.getElementById("menu-button-about").style.background = buttonUpColor;
    }

    function showControl(id) {
        hideAllControls();
        document.getElementById("controls-" + id).style.display = "block";
        document.getElementById("menu-button-" + id).style.background = buttonDownColor;
    }

    document.getElementById("menu-button-structure").addEventListener("click", function() {
        showControl("structure");
    });
    document.getElementById("menu-button-render").addEventListener("click", function() {
        showControl("render");
    });
    document.getElementById("menu-button-share").addEventListener("click", function() {
        showControl("share");
    });
    document.getElementById("menu-button-help").addEventListener("click", function() {
        showControl("help");
    });
    document.getElementById("menu-button-about").addEventListener("click", function() {
        showControl("about");
    });

    showControl("render");

    function reflow() {
        var menu = document.getElementById("controls-menu");
        var ccon = document.getElementById("controls-container");

        var ww = window.innerWidth;
        var wh = window.innerHeight;

        var rcw = Math.round(wh * 1);
        var rcm = Math.round((wh - rcw) / 2);

        renderContainer.style.height = rcw - 64 + "px";
        renderContainer.style.width = rcw - 64+ "px";
        renderContainer.style.left = rcm + 32 + "px";
        renderContainer.style.top = rcm + 32 + "px";

        menu.style.left = rcw + "px";
        menu.style.top = 32 + "px";

        ccon.style.top = 32 + $(menu).innerHeight() + 32 + "px";
        ccon.style.left = menu.style.left;
        ccon.style.bottom = "32px";
    }

    reflow();

    window.addEventListener("resize", reflow);

    document.getElementById("close-error").addEventListener("click", function() {
        document.getElementById("error").style.display = "none";
    });

    document.getElementById("xyz-button").addEventListener("click", function() {
        loadStructure(xyz(document.getElementById("xyz-data").value)[0]);
    });

    document.getElementById("atom-radius").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("atom-radius").value);
        view.atomScale = scale/100;
        View.resolve(view);
        needReset = true;
    });

    document.getElementById("relative-atom-radius").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("relative-atom-radius").value);
        view.relativeAtomScale = scale/100;
        View.resolve(view);
        needReset = true;
    });

    document.getElementById("dof-strength").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("dof-strength").value);
        view.dofStrength = scale/100;
        View.resolve(view);
    });

    document.getElementById("dof-position").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("dof-position").value);
        view.dofPosition = scale/100;
        View.resolve(view);
    });

    document.getElementById("bond-radius").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("bond-radius").value);
        view.bondScale = scale/100;
        View.resolve(view);
        needReset = true;
    });

    document.getElementById("bond-shade").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("bond-shade").value);
        view.bondShade = scale/100;
        View.resolve(view);
        needReset = true;
    });

    document.getElementById("atom-shade").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("atom-shade").value);
        view.atomShade = scale/100;
        View.resolve(view);
        needReset = true;
    });

    document.getElementById("ambient-occlusion").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("ambient-occlusion").value);
        view.ao = scale/100;
        View.resolve(view);
    });

    document.getElementById("brightness").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("brightness").value);
        view.brightness = scale/100;
        View.resolve(view);
    });

    document.getElementById("ao-resolution").addEventListener("change", function(e) {
        var resolution = parseInt(document.getElementById("ao-resolution").value);
        view.aoRes = resolution;
        View.resolve(view);
        renderer.setResolution(view.resolution, view.aoRes);
        needReset = true;
    });

    document.getElementById("outline-strength").addEventListener("input", function(e) {
        var scale = parseInt(document.getElementById("outline-strength").value);
        view.outline = scale/100;
        View.resolve(view);
    });

    document.getElementById("samples-per-frame").addEventListener("change", function(e) {
        var spf = parseInt(document.getElementById("samples-per-frame").value);
        view.spf = spf;
    });

    document.getElementById("resolution").addEventListener("change", function(e) {
        var resolution = parseInt(document.getElementById("resolution").value);
        view.resolution = resolution;
        View.resolve(view);
        renderer.setResolution(resolution, view.aoRes);
        needReset = true;
    });

    document.getElementById("view-preset").addEventListener("change", function(e) {
        var preset = document.getElementById("view-preset").value;
        View.override(view, presets[preset]);
        updateControls();
        renderer.setSystem(system, view);
        needReset = true;
    });

    document.getElementById("bonds").addEventListener("click", function(e) {
        view.bonds = document.getElementById("bonds").checked;
        View.resolve(view);
        renderer.setSystem(system, view);
        needReset = true;
    });

    document.getElementById("bond-threshold").addEventListener("change", function(e) {
        view.bondThreshold = parseFloat(document.getElementById("bond-threshold").value);
        View.resolve(view);
        renderer.setSystem(system, view);
        needReset = true;
    });

    document.getElementById("fxaa").addEventListener("change", function(e) {
        view.fxaa = parseInt(document.getElementById("fxaa").value);
        View.resolve(view);
    });

    document.getElementById("share-url-button").addEventListener("click", function(e) {
        var data = {
            view: view,
            system: system
        }
        data = lz.compressToEncodedURIComponent(JSON.stringify(data));
        document.getElementById("share-url").value = location.href.split("#")[0] + "#" + data;
    });

    document.getElementById("center-button").addEventListener("click", function(e) {
        View.center(view, system);
        needReset = true;
    });

    document.getElementById("share-url").addEventListener("click", function(e) {
        this.select();
    });

    var selector = document.getElementById("download-image-format-selector");
    for (var i = 0; i < mimetypes.length; i++) {
        var m = mimetypes[i];
        var opt = document.createElement("option");
        opt.value = m;
        opt.innerHTML = m.toUpperCase();
        selector.appendChild(opt);
    }

    document.getElementById("download-image-button").addEventListener("click", function(e) {
        var imageFormatBox = document.getElementById("download-image-format-selector");
        var mimetype = "image/" + imageFormatBox.value;
        var filename = "render." + imageFormatBox.value;
        renderer.render(view);
        var imgURL = document.getElementById("renderer-canvas").toDataURL(mimetype);
        document.getElementById("download-image-button").download = filename;
        document.getElementById("download-image-button").href = imgURL;
    });


    function updateControls() {
        document.getElementById("atom-radius").value = Math.round(view.atomScale * 100);
        document.getElementById("relative-atom-radius").value = Math.round(view.relativeAtomScale * 100);
        document.getElementById("bond-radius").value = Math.round(view.bondScale * 100);
        document.getElementById("bond-shade").value = Math.round(view.bondShade * 100);
        document.getElementById("atom-shade").value = Math.round(view.atomShade * 100);
        document.getElementById("bond-threshold").value = view.bondThreshold;
        document.getElementById("ambient-occlusion").value = Math.round(view.ao * 100);
        document.getElementById("brightness").value = Math.round(view.brightness * 100);
        document.getElementById("ao-resolution").value = view.aoRes;
        document.getElementById("samples-per-frame").value = view.spf;
        document.getElementById("outline-strength").value = Math.round(view.outline * 100);
        document.getElementById("bonds").checked = view.bonds;
        document.getElementById("fxaa").value = view.fxaa;
        document.getElementById("resolution").value = view.resolution;
        document.getElementById("dof-strength").value = Math.round(view.dofStrength * 100);
        document.getElementById("dof-position").value = Math.round(view.dofPosition * 100);
    }

    updateControls();

    function loop() {

        document.getElementById("atom-radius-text").innerHTML = Math.round(view.atomScale * 100) + "%";
        document.getElementById("relative-atom-radius-text").innerHTML = Math.round(view.relativeAtomScale * 100) + "%";
        document.getElementById("bond-radius-text").innerHTML = Math.round(view.bondScale * 100) + "%";
        document.getElementById("bond-shade-text").innerHTML = Math.round(view.bondShade * 100) + "%";
        document.getElementById("atom-shade-text").innerHTML = Math.round(view.atomShade * 100) + "%";
        document.getElementById("ambient-occlusion-text").innerHTML = Math.round(view.ao * 100) + "%";
        document.getElementById("brightness-text").innerHTML = Math.round(view.brightness * 100) + "%";
        document.getElementById("outline-strength-text").innerHTML = Math.round(view.outline * 100) + "%";
        document.getElementById("dof-strength-text").innerHTML = Math.round(view.dofStrength * 100) + "%";
        document.getElementById("dof-position-text").innerHTML = Math.round(view.dofPosition * 100) + "%";

        document.getElementById("ao-indicator").style.width = Math.min(100, (renderer.getAOProgress() * 100)) + "%";

        if (needReset) {
            renderer.reset();
            needReset = false;
        }
        renderer.render(view);
        requestAnimationFrame(loop);
    }

    loop();

}
