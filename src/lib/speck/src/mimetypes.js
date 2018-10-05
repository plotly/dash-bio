
"use strict";

var canvas = document.createElement("canvas");
canvas.width = canvas.height = 1;

var formats = ["png", "jpeg", "gif", "bmp", "webp"];

var mimetypes = module.exports = [];

for (var i = 0; i < formats.length; i++) {
    var f = formats[i];
    var imgurl = canvas.toDataURL("image/" + f);
    if (imgurl.indexOf("image/" + f) > -1) {
        mimetypes.push(f);
    }
}

