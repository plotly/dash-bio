(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[1],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/js/",t(0)}([function(e,t,r){e.exports=r(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ATOM:"Atom",RESIDUE:"Residue",CHAIN:"Chain"};t.default=r},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(9),d=o(u),c=r(11),f=o(c),p=r(10),h=o(p),m=r(5),y=o(m),b=r(6),v=o(b),S=r(1),g=o(S);window.$=d.default;var O=r(7),w=14,_=16711680,C=255,M=.8,A=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onClickAtom=function(e){var t=r.props.modelData.atoms,o=t[e.serial],n=r.props.selectionType,a=v.default.addSelection(t,r.state.selectedAtomIds,o,n);r.setState({selectedAtomIds:a}),r.props.onChangeSelection&&r.props.onChangeSelection(a)},r.state={selectedAtomIds:e.selectedAtomIds},r.lastOutline={width:0},r}return i(t,e),s(t,null,[{key:"isModelDataEmpty",value:function(e){return 0===e.atoms.length&&0===e.bonds.length}},{key:"render3dMolModel",value:function(e,r){e.clear(),t.isModelDataEmpty(r)||(e.addModel(v.default.modelDataToCDJSON(r),"json",{keepH:!0}),e.getModel().selectedAtoms().forEach(function(e){var t=e,o=(r.atoms[e.serial].residue_name||"").replace(/[0-9]+/,"");t.atom=r.atoms[e.serial].name,t.chain=r.atoms[e.serial].chain,t.resi=r.atoms[e.serial].residue_index,t.resn=o}))}},{key:"render3dMolShapes",value:function(e,t){e.removeAllShapes(),t.forEach(function(t){t.type&&e["add"+t.type](y.default.getShapeSpec(t))})}},{key:"render3dMolLabels",value:function(e,t){e.removeAllLabels(),t.forEach(function(t){e.addLabel(t.text,t)})}},{key:"render3dMolOrbital",value:function(e,t){if(t.cube_file){var r=new O.VolumeData(t.cube_file,"cube");e.addIsosurface(r,{isoval:t.iso_val,color:t.positiveVolumetricColor||_,opacity:t.opacity||M}),e.addIsosurface(r,{isoval:-t.iso_val,color:t.negativeVolumetricColor||C,opacity:t.opacity||M})}}}]),s(t,[{key:"componentDidMount",value:function(){this.render3dMol()}},{key:"componentWillReceiveProps",value:function(e){this.setState({selectedAtomIds:e.selectedAtomIds})}},{key:"componentDidUpdate",value:function(){this.render3dMol()}},{key:"render3dMol",value:function(){var e=this;if(this.glviewer||!t.isModelDataEmpty(this.props.modelData)){var r=this.glviewer||O.createViewer((0,d.default)(this.container),{defaultcolors:O.elementColors.rasmol}),o=v.default.modelDataEquivalent(this.oldModelData,this.props.modelData);o||(this.lastStylesByAtom=null,t.render3dMolModel(r,this.props.modelData)),this.props.outlineWidth===this.lastOutline.width&&this.props.outlineColor===this.lastOutline.color||(this.props.outlineWidth?this.lastOutline={style:"outline",width:this.props.outlineWidth,color:this.props.outlineColor}:this.lastOutline={},r.setViewStyle(this.lastOutline));var n=Object.create(null),a=Object.create(null);this.props.modelData.atoms.forEach(function(t,o){var i=e.state.selectedAtomIds.indexOf(t.serial)!==-1,l=y.default.getLibStyle(t,i,e.props.atomLabelsShown,e.props.styles[o]);e.props.atomLabelsShown&&r.addLabel(t.name,{fontSize:w,position:{x:t.positions[0],y:t.positions[1],z:t.positions[2]}});var s=JSON.stringify(l);a[t.serial]=s,e.lastStylesByAtom&&e.lastStylesByAtom[t.serial]===s||(n[s]||(n[s]=[]),n[s].push(t.serial))}),this.lastStylesByAtom=a,Object.entries(n).forEach(function(e){var t=l(e,2),o=t[0],n=t[1];r.setStyle({serial:n},JSON.parse(o))}),t.render3dMolShapes(r,this.props.shapes),t.render3dMolLabels(r,this.props.labels),t.render3dMolOrbital(r,this.props.orbital);var i=!1;if("number"==typeof this.props.nearClip&&"number"==typeof this.props.farClip&&(r.setSlab(this.props.nearClip,this.props.farClip),i=!0),r.setBackgroundColor(y.default.colorStringToNumber(this.props.backgroundColor),this.props.backgroundOpacity),r.setClickable({},!0,this.onClickAtom),r.render(),this.oldModelData||(r.zoom(),r.zoomTo(.8)),o||(i||r.fitSlab(),this.props.onRenderNewData(r)),!this.glviewer)var s=this,u=setInterval(function(){s.container.children.length>0&&s.container.children[0].offsetParent&&(r.resize(),clearInterval(u))},50);this.oldModelData=this.props.modelData,this.glviewer=r}}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:"molecule-3d",style:{width:this.props.width,height:this.props.height,position:"relative",margin:"0 auto"},ref:function(t){e.container=t}})}}]),t}(f.default.Component);A.defaultProps={atomLabelsShown:!1,backgroundOpacity:1,backgroundColor:"#73757c",height:"500px",onRenderNewData:function(){},orbital:{},selectedAtomIds:[],selectionType:g.default.ATOM,shapes:[],labels:[],styles:{},width:"500px",outlineWidth:0,outlineColor:"#000000",nearClip:null,farClip:null},A.propTypes={atomLabelsShown:h.default.bool,backgroundColor:h.default.string,backgroundOpacity:h.default.number,height:h.default.string,modelData:h.default.shape({atoms:h.default.array,bonds:h.default.array}).isRequired,onChangeSelection:h.default.func,onRenderNewData:h.default.func,orbital:h.default.shape({cube_file:h.default.string,iso_val:h.default.number,opacity:h.default.number,positiveVolumetricColor:h.default.string,negativeVolumetricColor:h.default.string}),selectedAtomIds:h.default.arrayOf(h.default.number),selectionType:h.default.oneOf([g.default.ATOM,g.default.RESIDUE,g.default.CHAIN]),shapes:h.default.arrayOf(h.default.object),labels:h.default.arrayOf(h.default.object),styles:h.default.objectOf(h.default.object),width:h.default.string,nearClip:h.default.number,farClip:h.default.number,outlineWidth:h.default.number,outlineColor:h.default.string},t.default=A},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ARROW:"Arrow",SPHERE:"Sphere",CYLINDER:"Cylinder"};t.default=r},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=r(3),i=o(a),l="stick",s={colorStringToNumber:function(e){if(4!==e.length&&7!==e.length)return e;if("#"!==e[0])return e;var t=parseInt(e.substr(1,e.length-1),16);return isNaN(t)?e:t},getShapeSpec:function(e,t){var r=void 0;e.color&&(r=s.colorStringToNumber(e.color));var o=Object.assign({},{alpha:.8,callback:t,clickable:!1,color:65027,radius:e.radius},e,{color:r});if(e.type===i.default.ARROW)o.start=e.start,o.end=e.end;else if(e.type===i.default.SPHERE)o.center=e.center;else{if(e.type!==i.default.CYLINDER)throw new Error("Invalid shape type.");o.fromCap=!0,o.toCap=!0,o.start=e.start,o.end=e.end}return o},getLibStyle:function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a={},i=o.visualization_type||l;return a[i]={},Object.entries(o).forEach(function(e){var t=n(e,2),r=t[0],o=t[1];"visualization_type"!==r&&(a[i][r]=o)}),t&&(a[i].color=2094078),"string"==typeof a[i].color&&(a[i].color=s.colorStringToNumber(a[i].color)),a}};t.default=s},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),a=r(1),i=o(a),l={modelDataToCDJSON:function(e){var t=e.atoms.map(function(e){return{l:e.elem,x:e.positions[0],y:e.positions[1],z:e.positions[2],mass:e.mass_magnitude}}),r=e.bonds.map(function(e){return{b:e.atom1_index,e:e.atom2_index,o:e.bond_order}});return{m:[{a:t,b:r}]}},addSelection:function(e,t,r,o){var n=t.slice(),a=t.indexOf(r.serial),s=a===-1;return o===i.default.ATOM?(s?n.push(r.serial):n.splice(a,1),n):(s?e.forEach(function(e){l.isSameGroup(r,e,o)&&n.push(e.serial)}):n=n.filter(function(t){var n=e[t];return!l.isSameGroup(r,n,o)}),n)},isSameGroup:function(e,t,r){if(r===i.default.RESIDUE)return e.residue_index===t.residue_index;if(r===i.default.CHAIN)return e.chain===t.chain;throw new Error("selectionType must be either residue or chain")},modelDataEquivalent:function(e,t){if(!e||!t)return!1;var r=new n.Set(e.atoms.map(function(e){return e.serial})),o=new n.Set(t.atoms.map(function(e){return e.serial})),a=new n.Set(e.bonds.map(function(e){return e.atom1_index+"=>"+e.atom2_index})),i=new n.Set(t.bonds.map(function(e){return e.atom1_index+"=>"+e.atom2_index})),l=r.equals(o),s=a.equals(i);if(!l||!s)return!1;var u=new Map,d=!0,c=!1,f=void 0;try{for(var p,h=e.atoms[Symbol.iterator]();!(d=(p=h.next()).done);d=!0){var m=p.value;u.set(m.serial,m.positions||[])}}catch(e){c=!0,f=e}finally{try{!d&&h.return&&h.return()}finally{if(c)throw f}}return t.atoms.every(function(e){return u.get(e.serial).every(function(t,r){var o=e.positions||[];return o[r]===t})})}};t.default=l},function(e,t){e.exports=__webpack_require__(140)},function(e,t){e.exports=__webpack_require__(141)},function(e,t){e.exports=__webpack_require__(64)},function(e,t){e.exports=__webpack_require__(0)},function(e,t){e.exports=__webpack_require__(1)}]);
//# sourceMappingURL=bundle.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 jQuery JavaScript Library v3.2.1
 https://jquery.com/

 Includes Sizzle.js
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://jquery.org/license

 Date: 2017-03-20T18:59Z
 Sizzle CSS Selector Engine v2.3.3
 https://sizzlejs.com/

 Copyright jQuery Foundation and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2016-08-08
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(n,C,A){n instanceof String&&(n=String(n));for(var G=n.length,B=0;B<G;B++){var la=n[B];if(C.call(A,la,B,n))return{i:B,v:la}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(n,C,A){n!=Array.prototype&&n!=Object.prototype&&(n[C]=A.value)};
$jscomp.getGlobal=function(n){return"undefined"!=typeof window&&window===n?n:"undefined"!=typeof global&&null!=global?global:n};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(n,C,A,G){if(C){A=$jscomp.global;n=n.split(".");for(G=0;G<n.length-1;G++){var B=n[G];B in A||(A[B]={});A=A[B]}n=n[n.length-1];G=A[n];C=C(G);C!=G&&null!=C&&$jscomp.defineProperty(A,n,{configurable:!0,writable:!0,value:C})}};
$jscomp.polyfill("Array.prototype.find",function(n){return n?n:function(n,A){return $jscomp.findInternal(this,n,A).v}},"es6","es3");
(function(n,C){ true&&"object"===typeof module.exports?module.exports=n.document?C(n,!0):function(n){if(!n.document)throw Error("jQuery requires a window with a document");return C(n)}:C(n)})("undefined"!==typeof window?window:this,function(n,C){function A(a,b){b=b||p;var d=b.createElement("script");d.text=a;b.head.appendChild(d).parentNode.removeChild(d)}function G(a){var b=!!a&&"length"in a&&a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:"array"===d||0===b||"number"===
typeof b&&0<b&&b-1 in a}function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}function la(a,b,d){if(c.isFunction(b))return c.grep(a,function(a,c){return!!b.call(a,c,a)!==d});if(b.nodeType)return c.grep(a,function(a){return a===b!==d});if("string"!==typeof b)return c.grep(a,function(a){return-1<va.call(b,a)!==d});if(Pb.test(b))return c.filter(b,a,d);b=c.filter(b,a);return c.grep(a,function(a){return-1<va.call(b,a)!==d&&1===a.nodeType})}function Za(a,b){for(;(a=a[b])&&1!==a.nodeType;);
return a}function Qb(a){var b={};c.each(a.match(S)||[],function(a,c){b[c]=!0});return b}function ma(a){return a}function na(a){throw a;}function $a(a,b,d,e){var f;try{a&&c.isFunction(f=a.promise)?f.call(a).done(b).fail(d):a&&c.isFunction(f=a.then)?f.call(a,b,d):b.apply(void 0,[a].slice(e))}catch(g){d.apply(void 0,[g])}}function ca(){p.removeEventListener("DOMContentLoaded",ca);n.removeEventListener("load",ca);c.ready()}function da(){this.expando=c.expando+da.uid++}function ab(a,b,d){if(void 0===d&&
1===a.nodeType)if(d="data-"+b.replace(Rb,"-$&").toLowerCase(),d=a.getAttribute(d),"string"===typeof d){try{var c=d;d="true"===c?!0:"false"===c?!1:"null"===c?null:c===+c+""?+c:Sb.test(c)?JSON.parse(c):c}catch(f){}M.set(a,b,d)}else d=void 0;return d}function bb(a,b,d,e){var f=1,g=20,h=e?function(){return e.cur()}:function(){return c.css(a,b,"")},l=h(),k=d&&d[3]||(c.cssNumber[b]?"":"px"),m=(c.cssNumber[b]||"px"!==k&&+l)&&oa.exec(c.css(a,b));if(m&&m[3]!==k){k=k||m[3];d=d||[];m=+l||1;do f=f||".5",m/=f,
c.style(a,b,m+k);while(f!==(f=h()/l)&&1!==f&&--g)}if(d){m=+m||+l||0;var t=d[1]?m+(d[1]+1)*d[2]:+d[2];e&&(e.unit=k,e.start=m,e.end=t)}return t}function pa(a,b){for(var d,e,f=[],g=0,h=a.length;g<h;g++)if(e=a[g],e.style)if(d=e.style.display,b){if("none"===d&&(f[g]=v.get(e,"display")||null,f[g]||(e.style.display="")),""===e.style.display&&wa(e)){d=g;var l=e.ownerDocument;e=e.nodeName;var k=cb[e];k||(l=l.body.appendChild(l.createElement(e)),k=c.css(l,"display"),l.parentNode.removeChild(l),"none"===k&&
(k="block"),cb[e]=k);l=k;f[d]=l}}else"none"!==d&&(f[g]="none",v.set(e,"display",d));for(g=0;g<h;g++)null!=f[g]&&(a[g].style.display=f[g]);return a}function H(a,b){var d="undefined"!==typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!==typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&B(a,b)?c.merge([a],d):d}function Na(a,b){for(var d=0,c=a.length;d<c;d++)v.set(a[d],"globalEval",!b||v.get(b[d],"globalEval"))}function db(a,b,d,e,f){for(var g,h,l,k=
b.createDocumentFragment(),m=[],t=0,n=a.length;t<n;t++)if((g=a[t])||0===g)if("object"===c.type(g))c.merge(m,g.nodeType?[g]:g);else if(Tb.test(g)){h=h||k.appendChild(b.createElement("div"));l=(eb.exec(g)||["",""])[1].toLowerCase();l=D[l]||D._default;h.innerHTML=l[1]+c.htmlPrefilter(g)+l[2];for(l=l[0];l--;)h=h.lastChild;c.merge(m,h.childNodes);h=k.firstChild;h.textContent=""}else m.push(b.createTextNode(g));k.textContent="";for(t=0;g=m[t++];)if(e&&-1<c.inArray(g,e))f&&f.push(g);else if(a=c.contains(g.ownerDocument,
g),h=H(k.appendChild(g),"script"),a&&Na(h),d)for(l=0;g=h[l++];)fb.test(g.type||"")&&d.push(g);return k}function Ba(){return!0}function Z(){return!1}function gb(){try{return p.activeElement}catch(a){}}function Oa(a,b,d,e,f,g){var h;if("object"===typeof b){"string"!==typeof d&&(e=e||d,d=void 0);for(h in b)Oa(a,h,d,e,b[h],g);return a}null==e&&null==f?(f=d,e=d=void 0):null==f&&("string"===typeof d?(f=e,e=void 0):(f=e,e=d,d=void 0));if(!1===f)f=Z;else if(!f)return a;if(1===g){var l=f;f=function(a){c().off(a);
return l.apply(this,arguments)};f.guid=l.guid||(l.guid=c.guid++)}return a.each(function(){c.event.add(this,b,f,e,d)})}function hb(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?c(">tbody",a)[0]||a:a}function Ub(a){a.type=(null!==a.getAttribute("type"))+"/"+a.type;return a}function Vb(a){var b=Wb.exec(a.type);b?a.type=b[1]:a.removeAttribute("type");return a}function ib(a,b){var d,e;if(1===b.nodeType){if(v.hasData(a)){var f=v.access(a);var g=v.set(b,f);if(f=f.events)for(e in delete g.handle,
g.events={},f)for(g=0,d=f[e].length;g<d;g++)c.event.add(b,e,f[e][g])}M.hasData(a)&&(a=M.access(a),a=c.extend({},a),M.set(b,a))}}function qa(a,b,d,e){b=jb.apply([],b);var f,g=0,h=a.length,l=h-1,k=b[0],m=c.isFunction(k);if(m||1<h&&"string"===typeof k&&!q.checkClone&&Xb.test(k))return a.each(function(c){var f=a.eq(c);m&&(b[0]=k.call(this,c,f.html()));qa(f,b,d,e)});if(h){var t=db(b,a[0].ownerDocument,!1,a,e);var n=t.firstChild;1===t.childNodes.length&&(t=n);if(n||e){n=c.map(H(t,"script"),Ub);for(f=n.length;g<
h;g++){var r=t;g!==l&&(r=c.clone(r,!0,!0),f&&c.merge(n,H(r,"script")));d.call(a[g],r,g)}if(f)for(t=n[n.length-1].ownerDocument,c.map(n,Vb),g=0;g<f;g++)r=n[g],fb.test(r.type||"")&&!v.access(r,"globalEval")&&c.contains(t,r)&&(r.src?c._evalUrl&&c._evalUrl(r.src):A(r.textContent.replace(Yb,""),t))}}return a}function kb(a,b,d){for(var e=b?c.filter(b,a):a,f=0;null!=(b=e[f]);f++)d||1!==b.nodeType||c.cleanData(H(b)),b.parentNode&&(d&&c.contains(b.ownerDocument,b)&&Na(H(b,"script")),b.parentNode.removeChild(b));
return a}function ra(a,b,d){var e=a.style;if(d=d||Ga(a)){var f=d.getPropertyValue(b)||d[b];""!==f||c.contains(a.ownerDocument,a)||(f=c.style(a,b));if(!q.pixelMarginRight()&&Pa.test(f)&&lb.test(b)){a=e.width;b=e.minWidth;var g=e.maxWidth;e.minWidth=e.maxWidth=e.width=f;f=d.width;e.width=a;e.minWidth=b;e.maxWidth=g}}return void 0!==f?f+"":f}function mb(a,b){return{get:function(){if(a())delete this.get;else return(this.get=b).apply(this,arguments)}}}function nb(a){var b=c.cssProps[a];if(!b){b=c.cssProps;
a:{var d=a;if(!(d in ob)){for(var e=d[0].toUpperCase()+d.slice(1),f=pb.length;f--;)if(d=pb[f]+e,d in ob)break a;d=void 0}}b=b[a]=d||a}return b}function qb(a,b,d){return(a=oa.exec(b))?Math.max(0,a[2]-(d||0))+(a[3]||"px"):b}function rb(a,b,d,e,f){var g=0;for(b=d===(e?"border":"content")?4:"width"===b?1:0;4>b;b+=2)"margin"===d&&(g+=c.css(a,d+ba[b],!0,f)),e?("content"===d&&(g-=c.css(a,"padding"+ba[b],!0,f)),"margin"!==d&&(g-=c.css(a,"border"+ba[b]+"Width",!0,f))):(g+=c.css(a,"padding"+ba[b],!0,f),"padding"!==
d&&(g+=c.css(a,"border"+ba[b]+"Width",!0,f)));return g}function sb(a,b,d){var e=Ga(a),f=ra(a,b,e),g="border-box"===c.css(a,"boxSizing",!1,e);if(Pa.test(f))return f;var h=g&&(q.boxSizingReliable()||f===a.style[b]);"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]);f=parseFloat(f)||0;return f+rb(a,b,d||(g?"border":"content"),h,e)+"px"}function I(a,b,d,c,f){return new I.prototype.init(a,b,d,c,f)}function Qa(){Ha&&(!1===p.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(Qa):n.setTimeout(Qa,
c.fx.interval),c.fx.tick())}function tb(){n.setTimeout(function(){sa=void 0});return sa=c.now()}function Ia(a,b){var d=0,c={height:a};for(b=b?1:0;4>d;d+=2-b){var f=ba[d];c["margin"+f]=c["padding"+f]=a}b&&(c.opacity=c.width=a);return c}function ub(a,b,d){for(var c,f=(T.tweeners[b]||[]).concat(T.tweeners["*"]),g=0,h=f.length;g<h;g++)if(c=f[g].call(d,b,a))return c}function Zb(a,b){var d,e;for(d in a){var f=c.camelCase(d);var g=b[f];var h=a[d];Array.isArray(h)&&(g=h[1],h=a[d]=h[0]);d!==f&&(a[f]=h,delete a[d]);
if((e=c.cssHooks[f])&&"expand"in e)for(d in h=e.expand(h),delete a[f],h)d in a||(a[d]=h[d],b[d]=g);else b[f]=g}}function T(a,b,d){var e,f=0,g=T.prefilters.length,h=c.Deferred().always(function(){delete l.elem}),l=function(){if(e)return!1;var b=sa||tb();b=Math.max(0,k.startTime+k.duration-b);for(var d=1-(b/k.duration||0),c=0,f=k.tweens.length;c<f;c++)k.tweens[c].run(d);h.notifyWith(a,[k,d,b]);if(1>d&&f)return b;f||h.notifyWith(a,[k,1,0]);h.resolveWith(a,[k]);return!1},k=h.promise({elem:a,props:c.extend({},
b),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},d),originalProperties:b,originalOptions:d,startTime:sa||tb(),duration:d.duration,tweens:[],createTween:function(b,d){b=c.Tween(a,k.opts,b,d,k.opts.specialEasing[b]||k.opts.easing);k.tweens.push(b);return b},stop:function(b){var d=0,c=b?k.tweens.length:0;if(e)return this;for(e=!0;d<c;d++)k.tweens[d].run(1);b?(h.notifyWith(a,[k,1,0]),h.resolveWith(a,[k,b])):h.rejectWith(a,[k,b]);return this}});d=k.props;for(Zb(d,k.opts.specialEasing);f<
g;f++)if(b=T.prefilters[f].call(k,a,d,k.opts))return c.isFunction(b.stop)&&(c._queueHooks(k.elem,k.opts.queue).stop=c.proxy(b.stop,b)),b;c.map(d,ub,k);c.isFunction(k.opts.start)&&k.opts.start.call(a,k);k.progress(k.opts.progress).done(k.opts.done,k.opts.complete).fail(k.opts.fail).always(k.opts.always);c.fx.timer(c.extend(l,{elem:a,anim:k,queue:k.opts.queue}));return k}function L(a){return(a.match(S)||[]).join(" ")}function ea(a){return a.getAttribute&&a.getAttribute("class")||""}function Ra(a,b,
d,e){var f;if(Array.isArray(b))c.each(b,function(b,c){d||$b.test(a)?e(a,c):Ra(a+"["+("object"===typeof c&&null!=c?b:"")+"]",c,d,e)});else if(d||"object"!==c.type(b))e(a,b);else for(f in b)Ra(a+"["+f+"]",b[f],d,e)}function vb(a){return function(b,d){"string"!==typeof b&&(d=b,b="*");var e=0,f=b.toLowerCase().match(S)||[];if(c.isFunction(d))for(;b=f[e++];)"+"===b[0]?(b=b.slice(1)||"*",(a[b]=a[b]||[]).unshift(d)):(a[b]=a[b]||[]).push(d)}}function wb(a,b,d,e){function f(l){var k;g[l]=!0;c.each(a[l]||[],
function(a,c){a=c(b,d,e);if("string"===typeof a&&!h&&!g[a])return b.dataTypes.unshift(a),f(a),!1;if(h)return!(k=a)});return k}var g={},h=a===Sa;return f(b.dataTypes[0])||!g["*"]&&f("*")}function Ta(a,b){var d,e,f=c.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((f[d]?a:e||(e={}))[d]=b[d]);e&&c.extend(!0,a,e);return a}var U=[],p=n.document,ac=Object.getPrototypeOf,fa=U.slice,jb=U.concat,Ua=U.push,va=U.indexOf,Ja={},xb=Ja.toString,Ka=Ja.hasOwnProperty,yb=Ka.toString,bc=yb.call(Object),q={},
c=function(a,b){return new c.fn.init(a,b)},cc=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,dc=/^-ms-/,ec=/-([a-z])/g,fc=function(a,b){return b.toUpperCase()};c.fn=c.prototype={jquery:"3.2.1",constructor:c,length:0,toArray:function(){return fa.call(this)},get:function(a){return null==a?fa.call(this):0>a?this[a+this.length]:this[a]},pushStack:function(a){a=c.merge(this.constructor(),a);a.prevObject=this;return a},each:function(a){return c.each(this,a)},map:function(a){return this.pushStack(c.map(this,function(b,
d){return a.call(b,d,b)}))},slice:function(){return this.pushStack(fa.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length;a=+a+(0>a?b:0);return this.pushStack(0<=a&&a<b?[this[a]]:[])},end:function(){return this.prevObject||this.constructor()},push:Ua,sort:U.sort,splice:U.splice};c.extend=c.fn.extend=function(){var a,b,d,e=arguments[0]||{},f=1,g=arguments.length,h=!1;"boolean"===typeof e&&(h=e,e=arguments[f]||{},f++);"object"===
typeof e||c.isFunction(e)||(e={});f===g&&(e=this,f--);for(;f<g;f++)if(null!=(a=arguments[f]))for(b in a){var l=e[b];var k=a[b];e!==k&&(h&&k&&(c.isPlainObject(k)||(d=Array.isArray(k)))?(d?(d=!1,l=l&&Array.isArray(l)?l:[]):l=l&&c.isPlainObject(l)?l:{},e[b]=c.extend(h,l,k)):void 0!==k&&(e[b]=k))}return e};c.extend({expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw Error(a);},noop:function(){},isFunction:function(a){return"function"===c.type(a)},isWindow:function(a){return null!=
a&&a===a.window},isNumeric:function(a){var b=c.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){if(!a||"[object Object]"!==xb.call(a))return!1;a=ac(a);if(!a)return!0;a=Ka.call(a,"constructor")&&a.constructor;return"function"===typeof a&&yb.call(a)===bc},isEmptyObject:function(a){for(var b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"===typeof a||"function"===typeof a?Ja[xb.call(a)]||"object":typeof a},globalEval:function(a){A(a)},
camelCase:function(a){return a.replace(dc,"ms-").replace(ec,fc)},each:function(a,b){var d,c=0;if(G(a))for(d=a.length;c<d&&!1!==b.call(a[c],c,a[c]);c++);else for(c in a)if(!1===b.call(a[c],c,a[c]))break;return a},trim:function(a){return null==a?"":(a+"").replace(cc,"")},makeArray:function(a,b){b=b||[];null!=a&&(G(Object(a))?c.merge(b,"string"===typeof a?[a]:a):Ua.call(b,a));return b},inArray:function(a,b,d){return null==b?-1:va.call(b,a,d)},merge:function(a,b){for(var d=+b.length,c=0,f=a.length;c<
d;c++)a[f++]=b[c];a.length=f;return a},grep:function(a,b,c){for(var d=[],f=0,g=a.length,h=!c;f<g;f++)c=!b(a[f],f),c!==h&&d.push(a[f]);return d},map:function(a,b,c){var d,f=0,g=[];if(G(a))for(d=a.length;f<d;f++){var h=b(a[f],f,c);null!=h&&g.push(h)}else for(f in a)h=b(a[f],f,c),null!=h&&g.push(h);return jb.apply([],g)},guid:1,proxy:function(a,b){if("string"===typeof b){var d=a[b];b=a;a=d}if(c.isFunction(a)){var e=fa.call(arguments,2);d=function(){return a.apply(b||this,e.concat(fa.call(arguments)))};
d.guid=a.guid=a.guid||c.guid++;return d}},now:Date.now,support:q});"function"===typeof Symbol&&(c.fn[Symbol.iterator]=U[Symbol.iterator]);c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){Ja["[object "+b+"]"]=b.toLowerCase()});var ka=function(a){function b(a,b,c,d){var e,f,g,E,h=b&&b.ownerDocument,w=b?b.nodeType:9;c=c||[];if("string"!==typeof a||!a||1!==w&&9!==w&&11!==w)return c;if(!d&&((b?b.ownerDocument||b:V)!==x&&xa(b),b=b||x,W)){if(11!==w&&
(E=va.exec(a)))if(e=E[1])if(9===w)if(f=b.getElementById(e)){if(f.id===e)return c.push(f),c}else return c;else{if(h&&(f=h.getElementById(e))&&A(b,f)&&f.id===e)return c.push(f),c}else{if(E[2])return ta.apply(c,b.getElementsByTagName(a)),c;if((e=E[3])&&J.getElementsByClassName&&b.getElementsByClassName)return ta.apply(c,b.getElementsByClassName(e)),c}if(!(!J.qsa||I[a+" "]||Q&&Q.test(a))){if(1!==w){h=b;var K=a}else if("object"!==b.nodeName.toLowerCase()){(g=b.getAttribute("id"))?g=g.replace(oa,ra):b.setAttribute("id",
g=y);f=ca(a);for(e=f.length;e--;)f[e]="#"+g+" "+v(f[e]);K=f.join(",");h=da.test(a)&&u(b.parentNode)||b}if(K)try{return ta.apply(c,h.querySelectorAll(K)),c}catch(Kc){}finally{g===y&&b.removeAttribute("id")}}}return Ba(a.replace(U,"$1"),b,c,d)}function c(){function a(c,d){b.push(c+" ")>F.cacheLength&&delete a[b.shift()];return a[c+" "]=d}var b=[];return a}function e(a){a[y]=!0;return a}function f(a){var b=x.createElement("fieldset");try{return!!a(b)}catch(w){return!1}finally{b.parentNode&&b.parentNode.removeChild(b)}}
function g(a,b){a=a.split("|");for(var c=a.length;c--;)F.attrHandle[a[c]]=b}function h(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function l(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function k(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function m(a){return function(b){return"form"in b?b.parentNode&&
!1===b.disabled?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&za(b)===a:b.disabled===a:"label"in b?b.disabled===a:!1}}function n(a){return e(function(b){b=+b;return e(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function u(a){return a&&"undefined"!==typeof a.getElementsByTagName&&a}function r(){}function v(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function Fa(a,b,
c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,E=M++;return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,h){var w,l=[ha,E];if(h)for(;b=b[d];){if((1===b.nodeType||g)&&a(b,c,h))return!0}else for(;b=b[d];)if(1===b.nodeType||g){var k=b[y]||(b[y]={});k=k[b.uniqueID]||(k[b.uniqueID]={});if(e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((w=k[f])&&w[0]===ha&&w[1]===E)return l[2]=w[2];k[f]=l;if(l[2]=a(b,c,h))return!0}}return!1}}function p(a){return 1<
a.length?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,b,c,d,e){for(var f,g=[],E=0,h=a.length,w=null!=b;E<h;E++)if(f=a[E])if(!c||c(f,d,e))g.push(f),w&&b.push(E);return g}function B(a,c,d,f,g,h){f&&!f[y]&&(f=B(f));g&&!g[y]&&(g=B(g,h));return e(function(e,E,h,w){var l,k=[],m=[],K=E.length,P;if(!(P=e)){P=c||"*";for(var n=h.nodeType?[h]:h,t=[],Ca=0,Ea=n.length;Ca<Ea;Ca++)b(P,n[Ca],t);P=t}P=!a||!e&&c?P:q(P,k,a,h,w);n=d?g||(e?a:K||f)?[]:E:P;d&&d(P,n,h,w);if(f){var u=
q(n,m);f(u,[],h,w);for(h=u.length;h--;)if(l=u[h])n[m[h]]=!(P[m[h]]=l)}if(e){if(g||a){if(g){u=[];for(h=n.length;h--;)(l=n[h])&&u.push(P[h]=l);g(null,n=[],u,w)}for(h=n.length;h--;)(l=n[h])&&-1<(u=g?L(e,l):k[h])&&(e[u]=!(E[u]=l))}}else n=q(n===E?n.splice(K,n.length):n),g?g(null,E,n,w):ta.apply(E,n)})}function z(a){var b,c,d=a.length,e=F.relative[a[0].type];var f=e||F.relative[" "];for(var g=e?1:0,h=Fa(function(a){return a===b},f,!0),E=Fa(function(a){return-1<L(b,a)},f,!0),l=[function(a,c,d){a=!e&&(d||
c!==N)||((b=c).nodeType?h(a,c,d):E(a,c,d));b=null;return a}];g<d;g++)if(f=F.relative[a[g].type])l=[Fa(p(l),f)];else{f=F.filter[a[g].type].apply(null,a[g].matches);if(f[y]){for(c=++g;c<d&&!F.relative[a[c].type];c++);return B(1<g&&p(l),1<g&&v(a.slice(0,g-1).concat({value:" "===a[g-2].type?"*":""})).replace(U,"$1"),f,g<c&&z(a.slice(g,c)),c<d&&z(a=a.slice(c)),c<d&&v(a))}l.push(f)}return p(l)}function gc(a,c){var d=0<c.length,f=0<a.length,g=function(e,g,h,E,w){var l,k,m=0,K="0",P=e&&[],n=[],t=N,Ca=e||
f&&F.find.TAG("*",w),u=ha+=null==t?1:Math.random()||.1,r=Ca.length;for(w&&(N=g===x||g||w);K!==r&&null!=(l=Ca[K]);K++){if(f&&l){var Ea=0;g||l.ownerDocument===x||(xa(l),h=!W);for(;k=a[Ea++];)if(k(l,g||x,h)){E.push(l);break}w&&(ha=u)}d&&((l=!k&&l)&&m--,e&&P.push(l))}m+=K;if(d&&K!==m){for(Ea=0;k=c[Ea++];)k(P,n,g,h);if(e){if(0<m)for(;K--;)P[K]||n[K]||(n[K]=T.call(E));n=q(n)}ta.apply(E,n);w&&!e&&0<n.length&&1<m+c.length&&b.uniqueSort(E)}w&&(ha=u,N=t);return P};return d?e(g):g}var O,N,R,Da,x,X,W,Q,ya,C,
A,y="sizzle"+1*new Date,V=a.document,ha=0,M=0,H=c(),zb=c(),I=c(),G=function(a,b){a===b&&(Da=!0);return 0},S={}.hasOwnProperty,D=[],T=D.pop,aa=D.push,ta=D.push,ba=D.slice,L=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ea=/[\x20\t\r\n\f]+/g,U=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,fa=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,ka=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,la=/=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,ma=/:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
pa=/^(?:\\.|[\w-]|[^\x00-\xa0])+$/,Z={ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,TAG:/^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,PSEUDO:/^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},qa=/^(?:input|select|textarea|button)$/i,sa=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,
va=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,da=/[+~]/,ia=/\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,ja=function(a,b,c){a="0x"+b-65536;return a!==a||c?b:0>a?String.fromCharCode(a+65536):String.fromCharCode(a>>10|55296,a&1023|56320)},oa=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ra=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},ua=function(){xa()},za=Fa(function(a){return!0===a.disabled&&("form"in a||"label"in a)},{dir:"parentNode",
next:"legend"});try{ta.apply(D=ba.call(V.childNodes),V.childNodes),D[V.childNodes.length].nodeType}catch(E){ta={apply:D.length?function(a,b){aa.apply(a,ba.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}var J=b.support={};var Aa=b.isXML=function(a){return(a=a&&(a.ownerDocument||a).documentElement)?"HTML"!==a.nodeName:!1};var xa=b.setDocument=function(a){var b;a=a?a.ownerDocument||a:V;if(a===x||9!==a.nodeType||!a.documentElement)return x;x=a;X=x.documentElement;W=!Aa(x);
V!==x&&(b=x.defaultView)&&b.top!==b&&(b.addEventListener?b.addEventListener("unload",ua,!1):b.attachEvent&&b.attachEvent("onunload",ua));J.attributes=f(function(a){a.className="i";return!a.getAttribute("className")});J.getElementsByTagName=f(function(a){a.appendChild(x.createComment(""));return!a.getElementsByTagName("*").length});J.getElementsByClassName=Y.test(x.getElementsByClassName);J.getById=f(function(a){X.appendChild(a).id=y;return!x.getElementsByName||!x.getElementsByName(y).length});J.getById?
(F.filter.ID=function(a){var b=a.replace(ia,ja);return function(a){return a.getAttribute("id")===b}},F.find.ID=function(a,b){if("undefined"!==typeof b.getElementById&&W)return(a=b.getElementById(a))?[a]:[]}):(F.filter.ID=function(a){var b=a.replace(ia,ja);return function(a){return(a="undefined"!==typeof a.getAttributeNode&&a.getAttributeNode("id"))&&a.value===b}},F.find.ID=function(a,b){if("undefined"!==typeof b.getElementById&&W){var c,d=b.getElementById(a);if(d){if((c=d.getAttributeNode("id"))&&
c.value===a)return[d];var e=b.getElementsByName(a);for(b=0;d=e[b++];)if((c=d.getAttributeNode("id"))&&c.value===a)return[d]}return[]}});F.find.TAG=J.getElementsByTagName?function(a,b){if("undefined"!==typeof b.getElementsByTagName)return b.getElementsByTagName(a);if(J.qsa)return b.querySelectorAll(a)}:function(a,b){var c=[],d=0;b=b.getElementsByTagName(a);if("*"===a){for(;a=b[d++];)1===a.nodeType&&c.push(a);return c}return b};F.find.CLASS=J.getElementsByClassName&&function(a,b){if("undefined"!==typeof b.getElementsByClassName&&
W)return b.getElementsByClassName(a)};ya=[];Q=[];if(J.qsa=Y.test(x.querySelectorAll))f(function(a){X.appendChild(a).innerHTML="<a id='"+y+"'></a><select id='"+y+"-\r\\' msallowcapture=''><option selected=''></option></select>";a.querySelectorAll("[msallowcapture^='']").length&&Q.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");a.querySelectorAll("[selected]").length||Q.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
a.querySelectorAll("[id~="+y+"-]").length||Q.push("~=");a.querySelectorAll(":checked").length||Q.push(":checked");a.querySelectorAll("a#"+y+"+*").length||Q.push(".#.+[+~]")}),f(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=x.createElement("input");b.setAttribute("type","hidden");a.appendChild(b).setAttribute("name","D");a.querySelectorAll("[name=d]").length&&Q.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");2!==a.querySelectorAll(":enabled").length&&
Q.push(":enabled",":disabled");X.appendChild(a).disabled=!0;2!==a.querySelectorAll(":disabled").length&&Q.push(":enabled",":disabled");a.querySelectorAll("*,:x");Q.push(",.*:")});(J.matchesSelector=Y.test(C=X.matches||X.webkitMatchesSelector||X.mozMatchesSelector||X.oMatchesSelector||X.msMatchesSelector))&&f(function(a){J.disconnectedMatch=C.call(a,"*");C.call(a,"[s!='']:x");ya.push("!=",":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")});
Q=Q.length&&new RegExp(Q.join("|"));ya=ya.length&&new RegExp(ya.join("|"));A=(b=Y.test(X.compareDocumentPosition))||Y.test(X.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a;b=b&&b.parentNode;return a===b||!!(b&&1===b.nodeType&&(c.contains?c.contains(b):a.compareDocumentPosition&&a.compareDocumentPosition(b)&16))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1};G=b?function(a,b){if(a===b)return Da=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(c)return c;c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;return c&1||!J.sortDetached&&b.compareDocumentPosition(a)===c?a===x||a.ownerDocument===V&&A(V,a)?-1:b===x||b.ownerDocument===V&&A(V,b)?1:R?L(R,a)-L(R,b):0:c&4?-1:1}:function(a,b){if(a===b)return Da=!0,0;var c=0,d=a.parentNode,e=b.parentNode,f=[a],g=[b];if(!d||!e)return a===x?-1:b===x?1:d?-1:e?1:R?L(R,a)-L(R,b):0;if(d===e)return h(a,b);for(;a=a.parentNode;)f.unshift(a);for(a=b;a=a.parentNode;)g.unshift(a);for(;f[c]===
g[c];)c++;return c?h(f[c],g[c]):f[c]===V?-1:g[c]===V?1:0};return x};b.matches=function(a,c){return b(a,null,null,c)};b.matchesSelector=function(a,c){(a.ownerDocument||a)!==x&&xa(a);c=c.replace(la,"='$1']");if(!(!J.matchesSelector||!W||I[c+" "]||ya&&ya.test(c)||Q&&Q.test(c)))try{var d=C.call(a,c);if(d||J.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(P){}return 0<b(c,x,null,[a]).length};b.contains=function(a,b){(a.ownerDocument||a)!==x&&xa(a);return A(a,b)};b.attr=function(a,
b){(a.ownerDocument||a)!==x&&xa(a);var c=F.attrHandle[b.toLowerCase()];c=c&&S.call(F.attrHandle,b.toLowerCase())?c(a,b,!W):void 0;return void 0!==c?c:J.attributes||!W?a.getAttribute(b):(c=a.getAttributeNode(b))&&c.specified?c.value:null};b.escape=function(a){return(a+"").replace(oa,ra)};b.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};b.uniqueSort=function(a){var b,c=[],d=0,e=0;Da=!J.detectDuplicates;R=!J.sortStable&&a.slice(0);a.sort(G);if(Da){for(;b=a[e++];)b===a[e]&&
(d=c.push(e));for(;d--;)a.splice(c[d],1)}R=null;return a};var na=b.getText=function(a){var b="",c=0;var d=a.nodeType;if(!d)for(;d=a[c++];)b+=na(d);else if(1===d||9===d||11===d){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)b+=na(a)}else if(3===d||4===d)return a.nodeValue;return b};var F=b.selectors={cacheLength:50,createPseudo:e,match:Z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},
"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=a[1].replace(ia,ja);a[3]=(a[3]||a[4]||a[5]||"").replace(ia,ja);"~="===a[2]&&(a[3]=" "+a[3]+" ");return a.slice(0,4)},CHILD:function(a){a[1]=a[1].toLowerCase();"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]);return a},PSEUDO:function(a){var b,c=!a[6]&&a[2];if(Z.CHILD.test(a[0]))return null;a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&
(b=ca(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b));return a.slice(0,3)}},filter:{TAG:function(a){var b=a.replace(ia,ja).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=H[a+" "];return b||(b=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+a+"([\\x20\\t\\r\\n\\f]|$)"),H(a,function(a){return b.test("string"===typeof a.className&&a.className||"undefined"!==typeof a.getAttribute&&a.getAttribute("class")||
"")}))},ATTR:function(a,c,d){return function(e){e=b.attr(e,a);if(null==e)return"!="===c;if(!c)return!0;e+="";return"="===c?e===d:"!="===c?e!==d:"^="===c?d&&0===e.indexOf(d):"*="===c?d&&-1<e.indexOf(d):"$="===c?d&&e.slice(-d.length)===d:"~="===c?-1<(" "+e.replace(ea," ")+" ").indexOf(d):"|="===c?e===d||e.slice(0,d.length+1)===d+"-":!1}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,l){var k,
m;c=f!==g?"nextSibling":"previousSibling";var E=b.parentNode,n=h&&b.nodeName.toLowerCase();l=!l&&!h;var w=!1;if(E){if(f){for(;c;){for(k=b;k=k[c];)if(h?k.nodeName.toLowerCase()===n:1===k.nodeType)return!1;var K=c="only"===a&&!K&&"nextSibling"}return!0}K=[g?E.firstChild:E.lastChild];if(g&&l){k=E;var t=k[y]||(k[y]={});t=t[k.uniqueID]||(t[k.uniqueID]={});w=t[a]||[];w=(m=w[0]===ha&&w[1])&&w[2];for(k=m&&E.childNodes[m];k=++m&&k&&k[c]||(w=m=0)||K.pop();)if(1===k.nodeType&&++w&&k===b){t[a]=[ha,m,w];break}}else if(l&&
(k=b,t=k[y]||(k[y]={}),t=t[k.uniqueID]||(t[k.uniqueID]={}),w=t[a]||[],w=m=w[0]===ha&&w[1]),!1===w)for(;(k=++m&&k&&k[c]||(w=m=0)||K.pop())&&((h?k.nodeName.toLowerCase()!==n:1!==k.nodeType)||!++w||(l&&(t=k[y]||(k[y]={}),t=t[k.uniqueID]||(t[k.uniqueID]={}),t[a]=[ha,w]),k!==b)););w-=e;return w===d||0===w%d&&0<=w/d}}},PSEUDO:function(a,c){var d=F.pseudos[a]||F.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);if(d[y])return d(c);if(1<d.length){var f=[a,a,"",c];return F.setFilters.hasOwnProperty(a.toLowerCase())?
e(function(a,b){for(var e,f=d(a,c),g=f.length;g--;)e=L(a,f[g]),a[e]=!(b[e]=f[g])}):function(a){return d(a,0,f)}}return d}},pseudos:{not:e(function(a){var b=[],c=[],d=wa(a.replace(U,"$1"));return d[y]?e(function(a,b,c,e){e=d(a,null,e,[]);for(var f=a.length;f--;)if(c=e[f])a[f]=!(b[f]=c)}):function(a,e,f){b[0]=a;d(b,null,f,c);b[0]=null;return!c.pop()}}),has:e(function(a){return function(c){return 0<b(a,c).length}}),contains:e(function(a){a=a.replace(ia,ja);return function(b){return-1<(b.textContent||
b.innerText||na(b)).indexOf(a)}}),lang:e(function(a){pa.test(a||"")||b.error("unsupported lang: "+a);a=a.replace(ia,ja).toLowerCase();return function(b){var c;do if(c=W?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===X},focus:function(a){return a===x.activeElement&&(!x.hasFocus||
x.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:m(!1),disabled:m(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(6>a.nodeType)return!1;return!0},parent:function(a){return!F.pseudos.empty(a)},header:function(a){return sa.test(a.nodeName)},input:function(a){return qa.test(a.nodeName)},
button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:n(function(){return[0]}),last:n(function(a,b){return[b-1]}),eq:n(function(a,b,c){return[0>c?c+b:c]}),even:n(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:n(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:n(function(a,b,c){for(b=
0>c?c+b:c;0<=--b;)a.push(b);return a}),gt:n(function(a,b,c){for(c=0>c?c+b:c;++c<b;)a.push(c);return a})}};F.pseudos.nth=F.pseudos.eq;for(O in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})F.pseudos[O]=l(O);for(O in{submit:!0,reset:!0})F.pseudos[O]=k(O);r.prototype=F.filters=F.pseudos;F.setFilters=new r;var ca=b.tokenize=function(a,c){var d,e,f,g,h;if(g=zb[a+" "])return c?0:g.slice(0);g=a;var k=[];for(h=F.preFilter;g;){if(!l||(d=fa.exec(g)))d&&(g=g.slice(d[0].length)||g),k.push(e=[]);var l=!1;
if(d=ka.exec(g))l=d.shift(),e.push({value:l,type:d[0].replace(U," ")}),g=g.slice(l.length);for(f in F.filter)!(d=Z[f].exec(g))||h[f]&&!(d=h[f](d))||(l=d.shift(),e.push({value:l,type:f,matches:d}),g=g.slice(l.length));if(!l)break}return c?g.length:g?b.error(a):zb(a,k).slice(0)};var wa=b.compile=function(a,b){var c,d=[],e=[],f=I[a+" "];if(!f){b||(b=ca(a));for(c=b.length;c--;)f=z(b[c]),f[y]?d.push(f):e.push(f);f=I(a,gc(e,d));f.selector=a}return f};var Ba=b.select=function(a,b,c,d){var e,f,g,h="function"===
typeof a&&a,k=!d&&ca(a=h.selector||a);c=c||[];if(1===k.length){var l=k[0]=k[0].slice(0);if(2<l.length&&"ID"===(f=l[0]).type&&9===b.nodeType&&W&&F.relative[l[1].type]){b=(F.find.ID(f.matches[0].replace(ia,ja),b)||[])[0];if(!b)return c;h&&(b=b.parentNode);a=a.slice(l.shift().value.length)}for(e=Z.needsContext.test(a)?0:l.length;e--;){f=l[e];if(F.relative[g=f.type])break;if(g=F.find[g])if(d=g(f.matches[0].replace(ia,ja),da.test(l[0].type)&&u(b.parentNode)||b)){l.splice(e,1);a=d.length&&v(l);if(!a)return ta.apply(c,
d),c;break}}}(h||wa(a,k))(d,b,!W,c,!b||da.test(a)&&u(b.parentNode)||b);return c};J.sortStable=y.split("").sort(G).join("")===y;J.detectDuplicates=!!Da;xa();J.sortDetached=f(function(a){return a.compareDocumentPosition(x.createElement("fieldset"))&1});f(function(a){a.innerHTML="<a href='#'></a>";return"#"===a.firstChild.getAttribute("href")})||g("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)});J.attributes&&f(function(a){a.innerHTML="<input/>";
a.firstChild.setAttribute("value","");return""===a.firstChild.getAttribute("value")})||g("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue});f(function(a){return null==a.getAttribute("disabled")})||g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null});return b}(n);c.find=ka;c.expr=
ka.selectors;c.expr[":"]=c.expr.pseudos;c.uniqueSort=c.unique=ka.uniqueSort;c.text=ka.getText;c.isXMLDoc=ka.isXML;c.contains=ka.contains;c.escapeSelector=ka.escape;var Y=function(a,b,d){for(var e=[],f=void 0!==d;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(f&&c(a).is(d))break;e.push(a)}return e},Ab=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},Bb=c.expr.match.needsContext,Cb=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Pb=/^.[^:#\[\.,]*$/;
c.filter=function(a,b,d){var e=b[0];d&&(a=":not("+a+")");return 1===b.length&&1===e.nodeType?c.find.matchesSelector(e,a)?[e]:[]:c.find.matches(a,c.grep(b,function(a){return 1===a.nodeType}))};c.fn.extend({find:function(a){var b,d=this.length,e=this;if("string"!==typeof a)return this.pushStack(c(a).filter(function(){for(b=0;b<d;b++)if(c.contains(e[b],this))return!0}));var f=this.pushStack([]);for(b=0;b<d;b++)c.find(a,e[b],f);return 1<d?c.uniqueSort(f):f},filter:function(a){return this.pushStack(la(this,
a||[],!1))},not:function(a){return this.pushStack(la(this,a||[],!0))},is:function(a){return!!la(this,"string"===typeof a&&Bb.test(a)?c(a):a||[],!1).length}});var ic=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(c.fn.init=function(a,b,d){if(!a)return this;d=d||jc;if("string"===typeof a){var e="<"===a[0]&&">"===a[a.length-1]&&3<=a.length?[null,a,null]:ic.exec(a);if(!e||!e[1]&&b)return!b||b.jquery?(b||d).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof c?b[0]:b,c.merge(this,c.parseHTML(e[1],b&&
b.nodeType?b.ownerDocument||b:p,!0)),Cb.test(e[1])&&c.isPlainObject(b))for(e in b)if(c.isFunction(this[e]))this[e](b[e]);else this.attr(e,b[e])}else if(a=p.getElementById(e[2]))this[0]=a,this.length=1;return this}return a.nodeType?(this[0]=a,this.length=1,this):c.isFunction(a)?void 0!==d.ready?d.ready(a):a(c):c.makeArray(a,this)}).prototype=c.fn;var jc=c(p);var kc=/^(?:parents|prev(?:Until|All))/,lc={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(a){var b=c(a,this),d=b.length;
return this.filter(function(){for(var a=0;a<d;a++)if(c.contains(this,b[a]))return!0})},closest:function(a,b){var d,e=0,f=this.length,g=[],h="string"!==typeof a&&c(a);if(!Bb.test(a))for(;e<f;e++)for(d=this[e];d&&d!==b;d=d.parentNode)if(11>d.nodeType&&(h?-1<h.index(d):1===d.nodeType&&c.find.matchesSelector(d,a))){g.push(d);break}return this.pushStack(1<g.length?c.uniqueSort(g):g)},index:function(a){return a?"string"===typeof a?va.call(c(a),this[0]):va.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?
this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});c.each({parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},parents:function(a){return Y(a,"parentNode")},parentsUntil:function(a,b,c){return Y(a,"parentNode",c)},next:function(a){return Za(a,"nextSibling")},prev:function(a){return Za(a,"previousSibling")},nextAll:function(a){return Y(a,
"nextSibling")},prevAll:function(a){return Y(a,"previousSibling")},nextUntil:function(a,b,c){return Y(a,"nextSibling",c)},prevUntil:function(a,b,c){return Y(a,"previousSibling",c)},siblings:function(a){return Ab((a.parentNode||{}).firstChild,a)},children:function(a){return Ab(a.firstChild)},contents:function(a){if(B(a,"iframe"))return a.contentDocument;B(a,"template")&&(a=a.content||a);return c.merge([],a.childNodes)}},function(a,b){c.fn[a]=function(d,e){var f=c.map(this,b,d);"Until"!==a.slice(-5)&&
(e=d);e&&"string"===typeof e&&(f=c.filter(e,f));1<this.length&&(lc[a]||c.uniqueSort(f),kc.test(a)&&f.reverse());return this.pushStack(f)}});var S=/[^\x20\t\r\n\f]+/g;c.Callbacks=function(a){a="string"===typeof a?Qb(a):c.extend({},a);var b,d,e,f,g=[],h=[],l=-1,k=function(){f=f||a.once;for(e=b=!0;h.length;l=-1)for(d=h.shift();++l<g.length;)!1===g[l].apply(d[0],d[1])&&a.stopOnFalse&&(l=g.length,d=!1);a.memory||(d=!1);b=!1;f&&(g=d?[]:"")},m={add:function(){g&&(d&&!b&&(l=g.length-1,h.push(d)),function u(b){c.each(b,
function(b,d){c.isFunction(d)?a.unique&&m.has(d)||g.push(d):d&&d.length&&"string"!==c.type(d)&&u(d)})}(arguments),d&&!b&&k());return this},remove:function(){c.each(arguments,function(a,b){for(var d;-1<(d=c.inArray(b,g,d));)g.splice(d,1),d<=l&&l--});return this},has:function(a){return a?-1<c.inArray(a,g):0<g.length},empty:function(){g&&(g=[]);return this},disable:function(){f=h=[];g=d="";return this},disabled:function(){return!g},lock:function(){f=h=[];d||b||(g=d="");return this},locked:function(){return!!f},
fireWith:function(a,c){f||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||k());return this},fire:function(){m.fireWith(this,arguments);return this},fired:function(){return!!e}};return m};c.extend({Deferred:function(a){var b=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},
always:function(){f.done(arguments).fail(arguments);return this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return c.Deferred(function(d){c.each(b,function(b,e){var g=c.isFunction(a[e[4]])&&a[e[4]];f[e[1]](function(){var a=g&&g.apply(this,arguments);if(a&&c.isFunction(a.promise))a.promise().progress(d.notify).done(d.resolve).fail(d.reject);else d[e[0]+"With"](this,g?[a]:arguments)})});a=null}).promise()},then:function(a,d,e){function f(a,b,d,e){return function(){var h=
this,l=arguments,k=function(){if(!(a<g)){var k=d.apply(h,l);if(k===b.promise())throw new TypeError("Thenable self-resolution");var m=k&&("object"===typeof k||"function"===typeof k)&&k.then;c.isFunction(m)?e?m.call(k,f(g,b,ma,e),f(g,b,na,e)):(g++,m.call(k,f(g,b,ma,e),f(g,b,na,e),f(g,b,ma,b.notifyWith))):(d!==ma&&(h=void 0,l=[k]),(e||b.resolveWith)(h,l))}},m=e?k:function(){try{k()}catch(z){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(z,m.stackTrace),a+1>=g&&(d!==na&&(h=void 0,l=[z]),b.rejectWith(h,
l))}};a?m():(c.Deferred.getStackHook&&(m.stackTrace=c.Deferred.getStackHook()),n.setTimeout(m))}}var g=0;return c.Deferred(function(g){b[0][3].add(f(0,g,c.isFunction(e)?e:ma,g.notifyWith));b[1][3].add(f(0,g,c.isFunction(a)?a:ma));b[2][3].add(f(0,g,c.isFunction(d)?d:na))}).promise()},promise:function(a){return null!=a?c.extend(a,e):e}},f={};c.each(b,function(a,c){var g=c[2],h=c[5];e[c[1]]=g.add;h&&g.add(function(){d=h},b[3-a][2].disable,b[0][2].lock);g.add(c[3].fire);f[c[0]]=function(){f[c[0]+"With"](this===
f?void 0:this,arguments);return this};f[c[0]+"With"]=g.fireWith});e.promise(f);a&&a.call(f,f);return f},when:function(a){var b=arguments.length,d=b,e=Array(d),f=fa.call(arguments),g=c.Deferred(),h=function(a){return function(c){e[a]=this;f[a]=1<arguments.length?fa.call(arguments):c;--b||g.resolveWith(e,f)}};if(1>=b&&($a(a,g.done(h(d)).resolve,g.reject,!b),"pending"===g.state()||c.isFunction(f[d]&&f[d].then)))return g.then();for(;d--;)$a(f[d],h(d),g.reject);return g.promise()}});var mc=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
c.Deferred.exceptionHook=function(a,b){n.console&&n.console.warn&&a&&mc.test(a.name)&&n.console.warn("jQuery.Deferred exception: "+a.message,a.stack,b)};c.readyException=function(a){n.setTimeout(function(){throw a;})};var Va=c.Deferred();c.fn.ready=function(a){Va.then(a).catch(function(a){c.readyException(a)});return this};c.extend({isReady:!1,readyWait:1,ready:function(a){(!0===a?--c.readyWait:c.isReady)||(c.isReady=!0,!0!==a&&0<--c.readyWait||Va.resolveWith(p,[c]))}});c.ready.then=Va.then;"complete"===
p.readyState||"loading"!==p.readyState&&!p.documentElement.doScroll?n.setTimeout(c.ready):(p.addEventListener("DOMContentLoaded",ca),n.addEventListener("load",ca));var aa=function(a,b,d,e,f,g,h){var l=0,k=a.length,m=null==d;if("object"===c.type(d))for(l in f=!0,d)aa(a,b,l,d[l],!0,g,h);else if(void 0!==e&&(f=!0,c.isFunction(e)||(h=!0),m&&(h?(b.call(a,e),b=null):(m=b,b=function(a,b,d){return m.call(c(a),d)})),b))for(;l<k;l++)b(a[l],d,h?e:e.call(a[l],l,b(a[l],d)));return f?a:m?b.call(a):k?b(a[0],d):
g},La=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};da.uid=1;da.prototype={cache:function(a){var b=a[this.expando];b||(b={},La(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0})));return b},set:function(a,b,d){var e;a=this.cache(a);if("string"===typeof b)a[c.camelCase(b)]=d;else for(e in b)a[c.camelCase(e)]=b[e];return a},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][c.camelCase(b)]},access:function(a,
b,c){if(void 0===b||b&&"string"===typeof b&&void 0===c)return this.get(a,b);this.set(a,b,c);return void 0!==c?c:b},remove:function(a,b){var d,e=a[this.expando];if(void 0!==e){if(void 0!==b)for(Array.isArray(b)?b=b.map(c.camelCase):(b=c.camelCase(b),b=b in e?[b]:b.match(S)||[]),d=b.length;d--;)delete e[b[d]];if(void 0===b||c.isEmptyObject(e))a.nodeType?a[this.expando]=void 0:delete a[this.expando]}},hasData:function(a){a=a[this.expando];return void 0!==a&&!c.isEmptyObject(a)}};var v=new da,M=new da,
Sb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Rb=/[A-Z]/g;c.extend({hasData:function(a){return M.hasData(a)||v.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return v.access(a,b,c)},_removeData:function(a,b){v.remove(a,b)}});c.fn.extend({data:function(a,b){var d,e=this[0],f=e&&e.attributes;if(void 0===a){if(this.length){var g=M.get(e);if(1===e.nodeType&&!v.get(e,"hasDataAttrs")){for(d=f.length;d--;)if(f[d]){var h=f[d].name;0===h.indexOf("data-")&&
(h=c.camelCase(h.slice(5)),ab(e,h,g[h]))}v.set(e,"hasDataAttrs",!0)}}return g}return"object"===typeof a?this.each(function(){M.set(this,a)}):aa(this,function(b){if(e&&void 0===b){var c=M.get(e,a);if(void 0!==c)return c;c=ab(e,a);if(void 0!==c)return c}else this.each(function(){M.set(this,a,b)})},null,b,1<arguments.length,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=v.get(a,b);d&&(!e||Array.isArray(d)?
e=v.access(a,b,c.makeArray(d)):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.length,f=d.shift(),g=c._queueHooks(a,b),h=function(){c.dequeue(a,b)};"inprogress"===f&&(f=d.shift(),e--);f&&("fx"===b&&d.unshift("inprogress"),delete g.stop,f.call(a,h,g));!e&&g&&g.empty.fire()},_queueHooks:function(a,b){var d=b+"queueHooks";return v.get(a,d)||v.access(a,d,{empty:c.Callbacks("once memory").add(function(){v.remove(a,[b+"queue",d])})})}});c.fn.extend({queue:function(a,b){var d=
2;"string"!==typeof a&&(b=a,a="fx",d--);return arguments.length<d?c.queue(this[0],a):void 0===b?this:this.each(function(){var d=c.queue(this,a,b);c._queueHooks(this,a);"fx"===a&&"inprogress"!==d[0]&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var d,e=1,f=c.Deferred(),g=this,h=this.length,l=function(){--e||f.resolveWith(g,[g])};"string"!==typeof a&&(b=a,a=void 0);for(a=a||"fx";h--;)(d=
v.get(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(l));l();return f.promise(b)}});var Db=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,oa=new RegExp("^(?:([+-])=|)("+Db+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],wa=function(a,b){a=b||a;return"none"===a.style.display||""===a.style.display&&c.contains(a.ownerDocument,a)&&"none"===c.css(a,"display")},Eb=function(a,b,c,e){var d,g={};for(d in b)g[d]=a.style[d],a.style[d]=b[d];c=c.apply(a,e||[]);for(d in b)a.style[d]=g[d];return c},cb={};
c.fn.extend({show:function(){return pa(this,!0)},hide:function(){return pa(this)},toggle:function(a){return"boolean"===typeof a?a?this.show():this.hide():this.each(function(){wa(this)?c(this).show():c(this).hide()})}});var Fb=/^(?:checkbox|radio)$/i,eb=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,fb=/^$|\/(?:java|ecma)script/i,D={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,
"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};D.optgroup=D.option;D.tbody=D.tfoot=D.colgroup=D.caption=D.thead;D.th=D.td;var Tb=/<|&#?\w+;/;(function(){var a=p.createDocumentFragment().appendChild(p.createElement("div")),b=p.createElement("input");b.setAttribute("type","radio");b.setAttribute("checked","checked");b.setAttribute("name","t");a.appendChild(b);q.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked;a.innerHTML="<textarea>x</textarea>";q.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue})();
var Ma=p.documentElement,nc=/^key/,oc=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Gb=/^([^.]*)(?:\.(.+)|)/;c.event={global:{},add:function(a,b,d,e,f){var g,h,l,k,m;if(l=v.get(a)){if(d.handler){var n=d;d=n.handler;f=n.selector}f&&c.find.matchesSelector(Ma,f);d.guid||(d.guid=c.guid++);(h=l.events)||(h=l.events={});(g=l.handle)||(g=l.handle=function(b){return"undefined"!==typeof c&&c.event.triggered!==b.type?c.event.dispatch.apply(a,arguments):void 0});b=(b||"").match(S)||[""];for(l=b.length;l--;){var u=
Gb.exec(b[l])||[];var r=k=u[1];var p=(u[2]||"").split(".").sort();r&&(u=c.event.special[r]||{},r=(f?u.delegateType:u.bindType)||r,u=c.event.special[r]||{},k=c.extend({type:r,origType:k,data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&c.expr.match.needsContext.test(f),namespace:p.join(".")},n),(m=h[r])||(m=h[r]=[],m.delegateCount=0,u.setup&&!1!==u.setup.call(a,e,p,g)||a.addEventListener&&a.addEventListener(r,g)),u.add&&(u.add.call(a,k),k.handler.guid||(k.handler.guid=d.guid)),f?m.splice(m.delegateCount++,
0,k):m.push(k),c.event.global[r]=!0)}}},remove:function(a,b,d,e,f){var g,h,l,k,m,n=v.hasData(a)&&v.get(a);if(n&&(l=n.events)){b=(b||"").match(S)||[""];for(k=b.length;k--;){var u=Gb.exec(b[k])||[];var r=m=u[1];var p=(u[2]||"").split(".").sort();if(r){var q=c.event.special[r]||{};r=(e?q.delegateType:q.bindType)||r;var B=l[r]||[];u=u[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)");for(h=g=B.length;g--;){var A=B[g];!f&&m!==A.origType||d&&d.guid!==A.guid||u&&!u.test(A.namespace)||e&&e!==A.selector&&
("**"!==e||!A.selector)||(B.splice(g,1),A.selector&&B.delegateCount--,q.remove&&q.remove.call(a,A))}h&&!B.length&&(q.teardown&&!1!==q.teardown.call(a,p,n.handle)||c.removeEvent(a,r,n.handle),delete l[r])}else for(r in l)c.event.remove(a,r+b[k],d,e,!0)}c.isEmptyObject(l)&&v.remove(a,"handle events")}},dispatch:function(a){var b=c.event.fix(a),d,e,f,g=Array(arguments.length);var h=(v.get(this,"events")||{})[b.type]||[];var l=c.event.special[b.type]||{};g[0]=b;for(d=1;d<arguments.length;d++)g[d]=arguments[d];
b.delegateTarget=this;if(!l.preDispatch||!1!==l.preDispatch.call(this,b)){var k=c.event.handlers.call(this,b,h);for(d=0;(f=k[d++])&&!b.isPropagationStopped();)for(b.currentTarget=f.elem,h=0;(e=f.handlers[h++])&&!b.isImmediatePropagationStopped();)if(!b.rnamespace||b.rnamespace.test(e.namespace))b.handleObj=e,b.data=e.data,e=((c.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,g),void 0!==e&&!1===(b.result=e)&&(b.preventDefault(),b.stopPropagation());l.postDispatch&&l.postDispatch.call(this,
b);return b.result}},handlers:function(a,b){var d,e=[],f=b.delegateCount,g=a.target;if(f&&g.nodeType&&!("click"===a.type&&1<=a.button))for(;g!==this;g=g.parentNode||this)if(1===g.nodeType&&("click"!==a.type||!0!==g.disabled)){var h=[];var l={};for(d=0;d<f;d++){var k=b[d];var m=k.selector+" ";void 0===l[m]&&(l[m]=k.needsContext?-1<c(m,this).index(g):c.find(m,this,null,[g]).length);l[m]&&h.push(k)}h.length&&e.push({elem:g,handlers:h})}f<b.length&&e.push({elem:this,handlers:b.slice(f)});return e},addProp:function(a,
b){Object.defineProperty(c.Event.prototype,a,{enumerable:!0,configurable:!0,get:c.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[c.expando]?a:new c.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==gb()&&this.focus)return this.focus(),!1},delegateType:"focusin"},
blur:{trigger:function(){if(this===gb()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};c.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)};c.Event=function(a,b){if(!(this instanceof c.Event))return new c.Event(a,
b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?Ba:Z,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a;b&&c.extend(this,b);this.timeStamp=a&&a.timeStamp||c.now();this[c.expando]=!0};c.Event.prototype={constructor:c.Event,isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,isSimulated:!1,
preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Ba;a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Ba;a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Ba;a&&!this.isSimulated&&a.stopImmediatePropagation();this.stopPropagation()}};c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,
eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&nc.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&oc.test(a.type)?b&1?1:b&2?3:b&4?2:0:a.which}},c.event.addProp);c.each({mouseenter:"mouseover",mouseleave:"mouseout",
pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){c.event.special[a]={delegateType:b,bindType:b,handle:function(a){var d=a.relatedTarget,f=a.handleObj;if(!d||d!==this&&!c.contains(this,d)){a.type=f.origType;var g=f.handler.apply(this,arguments);a.type=b}return g}}});c.fn.extend({on:function(a,b,c,e){return Oa(this,a,b,c,e)},one:function(a,b,c,e){return Oa(this,a,b,c,e,1)},off:function(a,b,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;c(a.delegateTarget).off(e.namespace?
e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if("object"===typeof a){for(e in a)this.off(e,b,a[e]);return this}if(!1===b||"function"===typeof b)d=b,b=void 0;!1===d&&(d=Z);return this.each(function(){c.event.remove(this,a,d,b)})}});var pc=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qc=/<script|<style|<link/i,Xb=/checked\s*(?:[^=]|=\s*.checked.)/i,Wb=/^true\/(.*)/,Yb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;c.extend({htmlPrefilter:function(a){return a.replace(pc,
"<$1></$2>")},clone:function(a,b,d){var e,f=a.cloneNode(!0),g=c.contains(a.ownerDocument,a);if(!(q.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||c.isXMLDoc(a))){var h=H(f);var l=H(a);var k=0;for(e=l.length;k<e;k++){var m=l[k],n=h[k],u=n.nodeName.toLowerCase();if("input"===u&&Fb.test(m.type))n.checked=m.checked;else if("input"===u||"textarea"===u)n.defaultValue=m.defaultValue}}if(b)if(d)for(l=l||H(a),h=h||H(f),k=0,e=l.length;k<e;k++)ib(l[k],h[k]);else ib(a,f);h=H(f,"script");0<h.length&&Na(h,!g&&
H(a,"script"));return f},cleanData:function(a){for(var b,d,e,f=c.event.special,g=0;void 0!==(d=a[g]);g++)if(La(d)){if(b=d[v.expando]){if(b.events)for(e in b.events)f[e]?c.event.remove(d,e):c.removeEvent(d,e,b.handle);d[v.expando]=void 0}d[M.expando]&&(d[M.expando]=void 0)}}});c.fn.extend({detach:function(a){return kb(this,a,!0)},remove:function(a){return kb(this,a)},text:function(a){return aa(this,function(a){return void 0===a?c.text(this):this.empty().each(function(){if(1===this.nodeType||11===this.nodeType||
9===this.nodeType)this.textContent=a})},null,a,arguments.length)},append:function(){return qa(this,arguments,function(a){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||hb(this,a).appendChild(a)})},prepend:function(){return qa(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=hb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return qa(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return qa(this,
arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(c.cleanData(H(a,!1)),a.textContent="");return this},clone:function(a,b){a=null==a?!1:a;b=null==b?a:b;return this.map(function(){return c.clone(this,a,b)})},html:function(a){return aa(this,function(a){var b=this[0]||{},e=0,f=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"===typeof a&&!qc.test(a)&&!D[(eb.exec(a)||["",
""])[1].toLowerCase()]){a=c.htmlPrefilter(a);try{for(;e<f;e++)b=this[e]||{},1===b.nodeType&&(c.cleanData(H(b,!1)),b.innerHTML=a);b=0}catch(g){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return qa(this,arguments,function(b){var d=this.parentNode;0>c.inArray(this,a)&&(c.cleanData(H(this)),d&&d.replaceChild(b,this))},a)}});c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=
function(a){for(var d=[],f=c(a),g=f.length-1,h=0;h<=g;h++)a=h===g?this:this.clone(!0),c(f[h])[b](a),Ua.apply(d,a.get());return this.pushStack(d)}});var lb=/^margin/,Pa=new RegExp("^("+Db+")(?!px)[a-z%]+$","i"),Ga=function(a){var b=a.ownerDocument.defaultView;b&&b.opener||(b=n);return b.getComputedStyle(a)};(function(){function a(){if(h){h.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";h.innerHTML="";Ma.appendChild(g);var a=
n.getComputedStyle(h);b="1%"!==a.top;f="2px"===a.marginLeft;d="4px"===a.width;h.style.marginRight="50%";e="4px"===a.marginRight;Ma.removeChild(g);h=null}}var b,d,e,f,g=p.createElement("div"),h=p.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",q.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h),c.extend(q,{pixelPosition:function(){a();
return b},boxSizingReliable:function(){a();return d},pixelMarginRight:function(){a();return e},reliableMarginLeft:function(){a();return f}}))})();var rc=/^(none|table(?!-c[ea]).+)/,Hb=/^--/,sc={position:"absolute",visibility:"hidden",display:"block"},Ib={letterSpacing:"0",fontWeight:"400"},pb=["Webkit","Moz","ms"],ob=p.createElement("div").style;c.extend({cssHooks:{opacity:{get:function(a,b){if(b)return a=ra(a,"opacity"),""===a?"1":a}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,
flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g=c.camelCase(b),h=Hb.test(b),l=a.style;h||(b=nb(g));var k=c.cssHooks[b]||c.cssHooks[g];if(void 0!==d){var m=typeof d;"string"===m&&(f=oa.exec(d))&&f[1]&&(d=bb(a,b,f),m="number");null!=d&&d===d&&("number"===m&&(d+=f&&f[3]||(c.cssNumber[g]?"":"px")),q.clearCloneStyle||""!==d||0!==
b.indexOf("background")||(l[b]="inherit"),k&&"set"in k&&void 0===(d=k.set(a,d,e))||(h?l.setProperty(b,d):l[b]=d))}else return k&&"get"in k&&void 0!==(f=k.get(a,!1,e))?f:l[b]}},css:function(a,b,d,e){var f;var g=c.camelCase(b);Hb.test(b)||(b=nb(g));(g=c.cssHooks[b]||c.cssHooks[g])&&"get"in g&&(f=g.get(a,!0,d));void 0===f&&(f=ra(a,b,e));"normal"===f&&b in Ib&&(f=Ib[b]);return""===d||d?(a=parseFloat(f),!0===d||isFinite(a)?a||0:f):f}});c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(a,
e,f){if(e)return!rc.test(c.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?sb(a,b,f):Eb(a,sc,function(){return sb(a,b,f)})},set:function(a,e,f){var d,h=f&&Ga(a);(f=f&&rb(a,b,f,"border-box"===c.css(a,"boxSizing",!1,h),h))&&(d=oa.exec(e))&&"px"!==(d[3]||"px")&&(a.style[b]=e,e=c.css(a,b));return qb(a,e,f)}}});c.cssHooks.marginLeft=mb(q.reliableMarginLeft,function(a,b){if(b)return(parseFloat(ra(a,"marginLeft"))||a.getBoundingClientRect().left-Eb(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+
"px"});c.each({margin:"",padding:"",border:"Width"},function(a,b){c.cssHooks[a+b]={expand:function(c){var d=0,f={};for(c="string"===typeof c?c.split(" "):[c];4>d;d++)f[a+ba[d]+b]=c[d]||c[d-2]||c[0];return f}};lb.test(a)||(c.cssHooks[a+b].set=qb)});c.fn.extend({css:function(a,b){return aa(this,function(a,b,f){var d,e={},l=0;if(Array.isArray(b)){f=Ga(a);for(d=b.length;l<d;l++)e[b[l]]=c.css(a,b[l],!1,f);return e}return void 0!==f?c.style(a,b,f):c.css(a,b)},a,b,1<arguments.length)}});c.Tween=I;I.prototype=
{constructor:I,init:function(a,b,d,e,f,g){this.elem=a;this.prop=d;this.easing=f||c.easing._default;this.options=b;this.start=this.now=this.cur();this.end=e;this.unit=g||(c.cssNumber[d]?"":"px")},cur:function(){var a=I.propHooks[this.prop];return a&&a.get?a.get(this):I.propHooks._default.get(this)},run:function(a){var b,d=I.propHooks[this.prop];this.pos=this.options.duration?b=c.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):b=a;this.now=(this.end-this.start)*b+this.start;
this.options.step&&this.options.step.call(this.elem,this.now,this);d&&d.set?d.set(this):I.propHooks._default.set(this);return this}};I.prototype.init.prototype=I.prototype;I.propHooks={_default:{get:function(a){return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(a=c.css(a.elem,a.prop,""))&&"auto"!==a?a:0},set:function(a){if(c.fx.step[a.prop])c.fx.step[a.prop](a);else 1!==a.elem.nodeType||null==a.elem.style[c.cssProps[a.prop]]&&!c.cssHooks[a.prop]?a.elem[a.prop]=
a.now:c.style(a.elem,a.prop,a.now+a.unit)}}};I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}};c.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"};c.fx=I.prototype.init;c.fx.step={};var sa,Ha,tc=/^(?:toggle|show|hide)$/,uc=/queueHooks$/;c.Animation=c.extend(T,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);bb(c.elem,a,oa.exec(b),c);return c}]},tweener:function(a,
b){c.isFunction(a)?(b=a,a=["*"]):a=a.match(S);for(var d,e=0,f=a.length;e<f;e++)d=a[e],T.tweeners[d]=T.tweeners[d]||[],T.tweeners[d].unshift(b)},prefilters:[function(a,b,d){var e;var f="width"in b||"height"in b;var g=this,h={},l=a.style,k=a.nodeType&&wa(a),m=v.get(a,"fxshow");if(!d.queue){var n=c._queueHooks(a,"fx");if(null==n.unqueued){n.unqueued=0;var u=n.empty.fire;n.empty.fire=function(){n.unqueued||u()}}n.unqueued++;g.always(function(){g.always(function(){n.unqueued--;c.queue(a,"fx").length||
n.empty.fire()})})}for(e in b){var r=b[e];if(tc.test(r)){delete b[e];var p=p||"toggle"===r;if(r===(k?"hide":"show"))if("show"===r&&m&&void 0!==m[e])k=!0;else continue;h[e]=m&&m[e]||c.style(a,e)}}if((b=!c.isEmptyObject(b))||!c.isEmptyObject(h)){if(f&&1===a.nodeType){d.overflow=[l.overflow,l.overflowX,l.overflowY];var q=m&&m.display;null==q&&(q=v.get(a,"display"));f=c.css(a,"display");"none"===f&&(q?f=q:(pa([a],!0),q=a.style.display||q,f=c.css(a,"display"),pa([a])));("inline"===f||"inline-block"===
f&&null!=q)&&"none"===c.css(a,"float")&&(b||(g.done(function(){l.display=q}),null==q&&(f=l.display,q="none"===f?"":f)),l.display="inline-block")}d.overflow&&(l.overflow="hidden",g.always(function(){l.overflow=d.overflow[0];l.overflowX=d.overflow[1];l.overflowY=d.overflow[2]}));b=!1;for(e in h)b||(m?"hidden"in m&&(k=m.hidden):m=v.access(a,"fxshow",{display:q}),p&&(m.hidden=!k),k&&pa([a],!0),g.done(function(){k||pa([a]);v.remove(a,"fxshow");for(e in h)c.style(a,e,h[e])})),b=ub(k?m[e]:0,e,g),e in m||
(m[e]=b.start,k&&(b.end=b.start,b.start=0))}}],prefilter:function(a,b){b?T.prefilters.unshift(a):T.prefilters.push(a)}});c.speed=function(a,b,d){var e=a&&"object"===typeof a?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};c.fx.off?e.duration=0:"number"!==typeof e.duration&&(e.duration=e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default);if(null==e.queue||!0===e.queue)e.queue="fx";e.old=e.complete;e.complete=function(){c.isFunction(e.old)&&
e.old.call(this);e.queue&&c.dequeue(this,e.queue)};return e};c.fn.extend({fadeTo:function(a,b,c,e){return this.filter(wa).css("opacity",0).show().end().animate({opacity:b},a,c,e)},animate:function(a,b,d,e){var f=c.isEmptyObject(a),g=c.speed(b,d,e);b=function(){var b=T(this,c.extend({},a),g);(f||v.get(this,"finish"))&&b.stop(!0)};b.finish=b;return f||!1===g.queue?this.each(b):this.queue(g.queue,b)},stop:function(a,b,d){var e=function(a){var b=a.stop;delete a.stop;b(d)};"string"!==typeof a&&(d=b,b=
a,a=void 0);b&&!1!==a&&this.queue(a||"fx",[]);return this.each(function(){var b=!0,g=null!=a&&a+"queueHooks",h=c.timers,l=v.get(this);if(g)l[g]&&l[g].stop&&e(l[g]);else for(g in l)l[g]&&l[g].stop&&uc.test(g)&&e(l[g]);for(g=h.length;g--;)h[g].elem!==this||null!=a&&h[g].queue!==a||(h[g].anim.stop(d),b=!1,h.splice(g,1));!b&&d||c.dequeue(this,a)})},finish:function(a){!1!==a&&(a=a||"fx");return this.each(function(){var b=v.get(this),d=b[a+"queue"];var e=b[a+"queueHooks"];var f=c.timers,g=d?d.length:0;
b.finish=!0;c.queue(this,a,[]);e&&e.stop&&e.stop.call(this,!0);for(e=f.length;e--;)f[e].elem===this&&f[e].queue===a&&(f[e].anim.stop(!0),f.splice(e,1));for(e=0;e<g;e++)d[e]&&d[e].finish&&d[e].finish.call(this);delete b.finish})}});c.each(["toggle","show","hide"],function(a,b){var d=c.fn[b];c.fn[b]=function(a,c,g){return null==a||"boolean"===typeof a?d.apply(this,arguments):this.animate(Ia(b,!0),a,c,g)}});c.each({slideDown:Ia("show"),slideUp:Ia("hide"),slideToggle:Ia("toggle"),fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(a,c,f){return this.animate(b,a,c,f)}});c.timers=[];c.fx.tick=function(){var a=0,b=c.timers;for(sa=c.now();a<b.length;a++){var d=b[a];d()||b[a]!==d||b.splice(a--,1)}b.length||c.fx.stop();sa=void 0};c.fx.timer=function(a){c.timers.push(a);c.fx.start()};c.fx.interval=13;c.fx.start=function(){Ha||(Ha=!0,Qa())};c.fx.stop=function(){Ha=null};c.fx.speeds={slow:600,fast:200,_default:400};c.fn.delay=function(a,b){a=c.fx?
c.fx.speeds[a]||a:a;return this.queue(b||"fx",function(b,c){var d=n.setTimeout(b,a);c.stop=function(){n.clearTimeout(d)}})};(function(){var a=p.createElement("input"),b=p.createElement("select").appendChild(p.createElement("option"));a.type="checkbox";q.checkOn=""!==a.value;q.optSelected=b.selected;a=p.createElement("input");a.value="t";a.type="radio";q.radioValue="t"===a.value})();var ua=c.expr.attrHandle;c.fn.extend({attr:function(a,b){return aa(this,c.attr,a,b,1<arguments.length)},removeAttr:function(a){return this.each(function(){c.removeAttr(this,
a)})}});c.extend({attr:function(a,b,d){var e,f,g=a.nodeType;if(3!==g&&8!==g&&2!==g){if("undefined"===typeof a.getAttribute)return c.prop(a,b,d);1===g&&c.isXMLDoc(a)||(f=c.attrHooks[b.toLowerCase()]||(c.expr.match.bool.test(b)?vc:void 0));if(void 0!==d){if(null===d){c.removeAttr(a,b);return}if(f&&"set"in f&&void 0!==(e=f.set(a,d,b)))return e;a.setAttribute(b,d+"");return d}if(f&&"get"in f&&null!==(e=f.get(a,b)))return e;e=c.find.attr(a,b);return null==e?void 0:e}},attrHooks:{type:{set:function(a,b){if(!q.radioValue&&
"radio"===b&&B(a,"input")){var c=a.value;a.setAttribute("type",b);c&&(a.value=c);return b}}}},removeAttr:function(a,b){var c=0,e=b&&b.match(S);if(e&&1===a.nodeType)for(;b=e[c++];)a.removeAttribute(b)}});var vc={set:function(a,b,d){!1===b?c.removeAttr(a,d):a.setAttribute(d,d);return d}};c.each(c.expr.match.bool.source.match(/\w+/g),function(a,b){var d=ua[b]||c.find.attr;ua[b]=function(a,b,c){var e=b.toLowerCase();if(!c){var f=ua[e];ua[e]=g;var g=null!=d(a,b,c)?e:null;ua[e]=f}return g}});var wc=/^(?:input|select|textarea|button)$/i,
xc=/^(?:a|area)$/i;c.fn.extend({prop:function(a,b){return aa(this,c.prop,a,b,1<arguments.length)},removeProp:function(a){return this.each(function(){delete this[c.propFix[a]||a]})}});c.extend({prop:function(a,b,d){var e,f=a.nodeType;if(3!==f&&8!==f&&2!==f){if(1!==f||!c.isXMLDoc(a)){b=c.propFix[b]||b;var g=c.propHooks[b]}return void 0!==d?g&&"set"in g&&void 0!==(e=g.set(a,d,b))?e:a[b]=d:g&&"get"in g&&null!==(e=g.get(a,b))?e:a[b]}},propHooks:{tabIndex:{get:function(a){var b=c.find.attr(a,"tabindex");
return b?parseInt(b,10):wc.test(a.nodeName)||xc.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}});q.optSelected||(c.propHooks.selected={get:function(a){(a=a.parentNode)&&a.parentNode&&a.parentNode.selectedIndex;return null},set:function(a){if(a=a.parentNode)a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex}});c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),function(){c.propFix[this.toLowerCase()]=
this});c.fn.extend({addClass:function(a){var b,d,e,f,g,h=0;if(c.isFunction(a))return this.each(function(b){c(this).addClass(a.call(this,b,ea(this)))});if("string"===typeof a&&a)for(b=a.match(S)||[];d=this[h++];){var l=ea(d);if(e=1===d.nodeType&&" "+L(l)+" "){for(g=0;f=b[g++];)0>e.indexOf(" "+f+" ")&&(e+=f+" ");e=L(e);l!==e&&d.setAttribute("class",e)}}return this},removeClass:function(a){var b,d,e,f,g,h=0;if(c.isFunction(a))return this.each(function(b){c(this).removeClass(a.call(this,b,ea(this)))});
if(!arguments.length)return this.attr("class","");if("string"===typeof a&&a)for(b=a.match(S)||[];d=this[h++];){var l=ea(d);if(e=1===d.nodeType&&" "+L(l)+" "){for(g=0;f=b[g++];)for(;-1<e.indexOf(" "+f+" ");)e=e.replace(" "+f+" "," ");e=L(e);l!==e&&d.setAttribute("class",e)}}return this},toggleClass:function(a,b){var d=typeof a;return"boolean"===typeof b&&"string"===d?b?this.addClass(a):this.removeClass(a):c.isFunction(a)?this.each(function(d){c(this).toggleClass(a.call(this,d,ea(this),b),b)}):this.each(function(){var b,
f;if("string"===d){var g=0;var h=c(this);for(f=a.match(S)||[];b=f[g++];)h.hasClass(b)?h.removeClass(b):h.addClass(b)}else if(void 0===a||"boolean"===d)(b=ea(this))&&v.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":v.get(this,"__className__")||"")})},hasClass:function(a){var b,c=0;for(a=" "+a+" ";b=this[c++];)if(1===b.nodeType&&-1<(" "+L(ea(b))+" ").indexOf(a))return!0;return!1}});var yc=/\r/g;c.fn.extend({val:function(a){var b,d,e=this[0];if(arguments.length){var f=
c.isFunction(a);return this.each(function(d){1===this.nodeType&&(d=f?a.call(this,d,c(this).val()):a,null==d?d="":"number"===typeof d?d+="":Array.isArray(d)&&(d=c.map(d,function(a){return null==a?"":a+""})),b=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,d,"value")||(this.value=d))})}if(e){if((b=c.valHooks[e.type]||c.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(d=b.get(e,"value")))return d;d=e.value;return"string"===typeof d?d.replace(yc,
""):null==d?"":d}}});c.extend({valHooks:{option:{get:function(a){var b=c.find.attr(a,"value");return null!=b?b:L(c.text(a))}},select:{get:function(a){var b=a.options,d=a.selectedIndex,e="select-one"===a.type,f=e?null:[],g=e?d+1:b.length;for(a=0>d?g:e?d:0;a<g;a++){var h=b[a];if(!(!h.selected&&a!==d||h.disabled||h.parentNode.disabled&&B(h.parentNode,"optgroup"))){h=c(h).val();if(e)return h;f.push(h)}}return f},set:function(a,b){for(var d,e=a.options,f=c.makeArray(b),g=e.length;g--;)if(b=e[g],b.selected=
-1<c.inArray(c.valHooks.option.get(b),f))d=!0;d||(a.selectedIndex=-1);return f}}}});c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=-1<c.inArray(c(a).val(),b)}};q.checkOn||(c.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var Jb=/^(?:focusinfocus|focusoutblur)$/;c.extend(c.event,{trigger:function(a,b,d,e){var f,g,h=[d||p],l=Ka.call(a,"type")?a.type:a;var k=Ka.call(a,"namespace")?a.namespace.split("."):
[];var m=f=d=d||p;if(3!==d.nodeType&&8!==d.nodeType&&!Jb.test(l+c.event.triggered)){-1<l.indexOf(".")&&(k=l.split("."),l=k.shift(),k.sort());var t=0>l.indexOf(":")&&"on"+l;a=a[c.expando]?a:new c.Event(l,"object"===typeof a&&a);a.isTrigger=e?2:3;a.namespace=k.join(".");a.rnamespace=a.namespace?new RegExp("(^|\\.)"+k.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;a.result=void 0;a.target||(a.target=d);b=null==b?[a]:c.makeArray(b,[a]);k=c.event.special[l]||{};if(e||!k.trigger||!1!==k.trigger.apply(d,b)){if(!e&&
!k.noBubble&&!c.isWindow(d)){var q=k.delegateType||l;Jb.test(q+l)||(m=m.parentNode);for(;m;m=m.parentNode)h.push(m),f=m;f===(d.ownerDocument||p)&&h.push(f.defaultView||f.parentWindow||n)}for(f=0;(m=h[f++])&&!a.isPropagationStopped();)a.type=1<f?q:k.bindType||l,(g=(v.get(m,"events")||{})[a.type]&&v.get(m,"handle"))&&g.apply(m,b),(g=t&&m[t])&&g.apply&&La(m)&&(a.result=g.apply(m,b),!1===a.result&&a.preventDefault());a.type=l;e||a.isDefaultPrevented()||k._default&&!1!==k._default.apply(h.pop(),b)||!La(d)||
!t||!c.isFunction(d[l])||c.isWindow(d)||((f=d[t])&&(d[t]=null),c.event.triggered=l,d[l](),c.event.triggered=void 0,f&&(d[t]=f));return a.result}}},simulate:function(a,b,d){a=c.extend(new c.Event,d,{type:a,isSimulated:!0});c.event.trigger(a,null,b)}});c.fn.extend({trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){var d=this[0];if(d)return c.event.trigger(a,b,d,!0)}});c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
function(a,b){c.fn[b]=function(a,c){return 0<arguments.length?this.on(b,null,a,c):this.trigger(b)}});c.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});q.focusin="onfocusin"in n;q.focusin||c.each({focus:"focusin",blur:"focusout"},function(a,b){var d=function(a){c.event.simulate(b,a.target,c.event.fix(a))};c.event.special[b]={setup:function(){var c=this.ownerDocument||this,f=v.access(c,b);f||c.addEventListener(a,d,!0);v.access(c,b,(f||0)+1)},teardown:function(){var c=this.ownerDocument||
this,f=v.access(c,b)-1;f?v.access(c,b,f):(c.removeEventListener(a,d,!0),v.remove(c,b))}}});var za=n.location,Kb=c.now(),Wa=/\?/;c.parseXML=function(a){if(!a||"string"!==typeof a)return null;try{var b=(new n.DOMParser).parseFromString(a,"text/xml")}catch(d){b=void 0}b&&!b.getElementsByTagName("parsererror").length||c.error("Invalid XML: "+a);return b};var $b=/\[\]$/,Lb=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;c.param=function(a,b){var d,e=[],f=function(a,
b){b=c.isFunction(b)?b():b;e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==b?"":b)};if(Array.isArray(a)||a.jquery&&!c.isPlainObject(a))c.each(a,function(){f(this.name,this.value)});else for(d in a)Ra(d,a[d],b,f);return e.join("&")};c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=c.prop(this,"elements");return a?c.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!c(this).is(":disabled")&&
Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!Fb.test(a))}).map(function(a,b){a=c(this).val();return null==a?null:Array.isArray(a)?c.map(a,function(a){return{name:b.name,value:a.replace(Lb,"\r\n")}}):{name:b.name,value:a.replace(Lb,"\r\n")}}).get()}});var Bc=/%20/g,Cc=/#.*$/,Dc=/([?&])_=[^&]*/,Ec=/^(.*?):[ \t]*([^\r\n]*)$/mg,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Mb={},Sa={},Nb="*/".concat("*"),Xa=p.createElement("a");Xa.href=za.href;c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:za.href,
type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(za.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,
"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ta(Ta(a,c.ajaxSettings),b):Ta(c.ajaxSettings,a)},ajaxPrefilter:vb(Mb),ajaxTransport:vb(Sa),ajax:function(a,b){function d(a,b,d,g){var k=b;if(!O){O=!0;h&&n.clearTimeout(h);e=void 0;f=g||"";z.readyState=0<a?4:0;g=200<=a&&300>a||304===a;if(d){var p=m;for(var u=z,r,x,N,y,C=p.contents,D=p.dataTypes;"*"===D[0];)D.shift(),void 0===r&&(r=p.mimeType||u.getResponseHeader("Content-Type"));if(r)for(x in C)if(C[x]&&C[x].test(r)){D.unshift(x);
break}if(D[0]in d)N=D[0];else{for(x in d){if(!D[0]||p.converters[x+" "+D[0]]){N=x;break}y||(y=x)}N=N||y}N?(N!==D[0]&&D.unshift(N),p=d[N]):p=void 0}a:{d=m;r=p;x=z;N=g;var I;u={};C=d.dataTypes.slice();if(C[1])for(H in d.converters)u[H.toLowerCase()]=d.converters[H];for(y=C.shift();y;){d.responseFields[y]&&(x[d.responseFields[y]]=r);!R&&N&&d.dataFilter&&(r=d.dataFilter(r,d.dataType));var R=y;if(y=C.shift())if("*"===y)y=R;else if("*"!==R&&R!==y){var H=u[R+" "+y]||u["* "+y];if(!H)for(I in u)if(p=I.split(" "),
p[1]===y&&(H=u[R+" "+p[0]]||u["* "+p[0]])){!0===H?H=u[I]:!0!==u[I]&&(y=p[0],C.unshift(p[1]));break}if(!0!==H)if(H&&d.throws)r=H(r);else try{r=H(r)}catch(hc){p={state:"parsererror",error:H?hc:"No conversion from "+R+" to "+y};break a}}}p={state:"success",data:r}}if(g)if(m.ifModified&&((k=z.getResponseHeader("Last-Modified"))&&(c.lastModified[G]=k),(k=z.getResponseHeader("etag"))&&(c.etag[G]=k)),204===a||"HEAD"===m.type)k="nocontent";else if(304===a)k="notmodified";else{k=p.state;var M=p.data;var L=
p.error;g=!L}else if(L=k,a||!k)k="error",0>a&&(a=0);z.status=a;z.statusText=(b||k)+"";g?v.resolveWith(t,[M,k,z]):v.rejectWith(t,[z,k,L]);z.statusCode(A);A=void 0;l&&q.trigger(g?"ajaxSuccess":"ajaxError",[z,m,g?M:L]);B.fireWith(t,[z,k]);l&&(q.trigger("ajaxComplete",[z,m]),--c.active||c.event.trigger("ajaxStop"))}}"object"===typeof a&&(b=a,a=void 0);b=b||{};var e,f,g,h,l,k,m=c.ajaxSetup({},b),t=m.context||m,q=m.context&&(t.nodeType||t.jquery)?c(t):c.event,v=c.Deferred(),B=c.Callbacks("once memory"),
A=m.statusCode||{},C={},D={},I="canceled",z={readyState:0,getResponseHeader:function(a){var b;if(O){if(!g)for(g={};b=Ec.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return O?f:null},setRequestHeader:function(a,b){null==O&&(a=D[a.toLowerCase()]=D[a.toLowerCase()]||a,C[a]=b);return this},overrideMimeType:function(a){null==O&&(m.mimeType=a);return this},statusCode:function(a){var b;if(a)if(O)z.always(a[z.status]);else for(b in a)A[b]=
[A[b],a[b]];return this},abort:function(a){a=a||I;e&&e.abort(a);d(0,a);return this}};v.promise(z);m.url=((a||m.url||za.href)+"").replace(Gc,za.protocol+"//");m.type=b.method||b.type||m.method||m.type;m.dataTypes=(m.dataType||"*").toLowerCase().match(S)||[""];if(null==m.crossDomain){a=p.createElement("a");try{a.href=m.url,a.href=a.href,m.crossDomain=Xa.protocol+"//"+Xa.host!==a.protocol+"//"+a.host}catch(N){m.crossDomain=!0}}m.data&&m.processData&&"string"!==typeof m.data&&(m.data=c.param(m.data,m.traditional));
wb(Mb,m,b,z);if(O)return z;(l=c.event&&m.global)&&0===c.active++&&c.event.trigger("ajaxStart");m.type=m.type.toUpperCase();m.hasContent=!Fc.test(m.type);var G=m.url.replace(Cc,"");m.hasContent?m.data&&m.processData&&0===(m.contentType||"").indexOf("application/x-www-form-urlencoded")&&(m.data=m.data.replace(Bc,"+")):(a=m.url.slice(G.length),m.data&&(G+=(Wa.test(G)?"&":"?")+m.data,delete m.data),!1===m.cache&&(G=G.replace(Dc,"$1"),a=(Wa.test(G)?"&":"?")+"_="+Kb++ +a),m.url=G+a);m.ifModified&&(c.lastModified[G]&&
z.setRequestHeader("If-Modified-Since",c.lastModified[G]),c.etag[G]&&z.setRequestHeader("If-None-Match",c.etag[G]));(m.data&&m.hasContent&&!1!==m.contentType||b.contentType)&&z.setRequestHeader("Content-Type",m.contentType);z.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+Nb+"; q=0.01":""):m.accepts["*"]);for(k in m.headers)z.setRequestHeader(k,m.headers[k]);if(m.beforeSend&&(!1===m.beforeSend.call(t,z,m)||O))return z.abort();
I="abort";B.add(m.complete);z.done(m.success);z.fail(m.error);if(e=wb(Sa,m,b,z)){z.readyState=1;l&&q.trigger("ajaxSend",[z,m]);if(O)return z;m.async&&0<m.timeout&&(h=n.setTimeout(function(){z.abort("timeout")},m.timeout));try{var O=!1;e.send(C,d)}catch(N){if(O)throw N;d(-1,N)}}else d(-1,"No Transport");return z},getJSON:function(a,b,d){return c.get(a,b,d,"json")},getScript:function(a,b){return c.get(a,void 0,b,"script")}});c.each(["get","post"],function(a,b){c[b]=function(a,e,f,g){c.isFunction(e)&&
(g=g||f,f=e,e=void 0);return c.ajax(c.extend({url:a,type:b,dataType:g,data:e,success:f},c.isPlainObject(a)&&a))}});c._evalUrl=function(a){return c.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})};c.fn.extend({wrapAll:function(a){this[0]&&(c.isFunction(a)&&(a=a.call(this[0])),a=c(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this));return this},
wrapInner:function(a){return c.isFunction(a)?this.each(function(b){c(this).wrapInner(a.call(this,b))}):this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){var b=c.isFunction(a);return this.each(function(d){c(this).wrapAll(b?a.call(this,d):a)})},unwrap:function(a){this.parent(a).not("body").each(function(){c(this).replaceWith(this.childNodes)});return this}});c.expr.pseudos.hidden=function(a){return!c.expr.pseudos.visible(a)};c.expr.pseudos.visible=
function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)};c.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(a){}};var Hc={0:200,1223:204},Aa=c.ajaxSettings.xhr();q.cors=!!Aa&&"withCredentials"in Aa;q.ajax=Aa=!!Aa;c.ajaxTransport(function(a){var b,c;if(q.cors||Aa&&!a.crossDomain)return{send:function(d,f){var e,h=a.xhr();h.open(a.type,a.url,a.async,a.username,a.password);if(a.xhrFields)for(e in a.xhrFields)h[e]=a.xhrFields[e];a.mimeType&&h.overrideMimeType&&h.overrideMimeType(a.mimeType);
a.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(e in d)h.setRequestHeader(e,d[e]);b=function(a){return function(){b&&(b=c=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!==typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hc[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!==typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}};h.onload=b();
c=h.onerror=b("error");void 0!==h.onabort?h.onabort=c:h.onreadystatechange=function(){4===h.readyState&&n.setTimeout(function(){b&&c()})};b=b("abort");try{h.send(a.hasContent&&a.data||null)}catch(l){if(b)throw l;}},abort:function(){b&&b()}}});c.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)});c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){c.globalEval(a);
return a}}});c.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1);a.crossDomain&&(a.type="GET")});c.ajaxTransport("script",function(a){if(a.crossDomain){var b,d;return{send:function(e,f){b=c("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",d=function(a){b.remove();d=null;a&&f("error"===a.type?404:200,a.type)});p.head.appendChild(b[0])},abort:function(){d&&d()}}}});var Ob=[],Ya=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ob.pop()||
c.expando+"_"+Kb++;this[a]=!0;return a}});c.ajaxPrefilter("json jsonp",function(a,b,d){var e,f=!1!==a.jsonp&&(Ya.test(a.url)?"url":"string"===typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ya.test(a.data)&&"data");if(f||"jsonp"===a.dataTypes[0]){var g=a.jsonpCallback=c.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback;f?a[f]=a[f].replace(Ya,"$1"+g):!1!==a.jsonp&&(a.url+=(Wa.test(a.url)?"&":"?")+a.jsonp+"="+g);a.converters["script json"]=function(){e||
c.error(g+" was not called");return e[0]};a.dataTypes[0]="json";var h=n[g];n[g]=function(){e=arguments};d.always(function(){void 0===h?c(n).removeProp(g):n[g]=h;a[g]&&(a.jsonpCallback=b.jsonpCallback,Ob.push(g));e&&c.isFunction(h)&&h(e[0]);e=h=void 0});return"script"}});q.createHTMLDocument=function(){var a=p.implementation.createHTMLDocument("").body;a.innerHTML="<form></form><form></form>";return 2===a.childNodes.length}();c.parseHTML=function(a,b,d){if("string"!==typeof a)return[];"boolean"===
typeof b&&(d=b,b=!1);if(!b)if(q.createHTMLDocument){b=p.implementation.createHTMLDocument("");var e=b.createElement("base");e.href=p.location.href;b.head.appendChild(e)}else b=p;e=Cb.exec(a);d=!d&&[];if(e)return[b.createElement(e[1])];e=db([a],b,d);d&&d.length&&c(d).remove();return c.merge([],e.childNodes)};c.fn.load=function(a,b,d){var e,f,g=this,h=a.indexOf(" ");if(-1<h){var l=L(a.slice(h));a=a.slice(0,h)}c.isFunction(b)?(d=b,b=void 0):b&&"object"===typeof b&&(e="POST");0<g.length&&c.ajax({url:a,
type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments;g.html(l?c("<div>").append(c.parseHTML(a)).find(l):a)}).always(d&&function(a,b){g.each(function(){d.apply(this,f||[a.responseText,b,a])})});return this};c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(a){return this.on(b,a)}});c.expr.pseudos.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.offset={setOffset:function(a,b,d){var e=
c.css(a,"position"),f=c(a),g={};"static"===e&&(a.style.position="relative");var h=f.offset();var l=c.css(a,"top");var k=c.css(a,"left");("absolute"===e||"fixed"===e)&&-1<(l+k).indexOf("auto")?(k=f.position(),l=k.top,k=k.left):(l=parseFloat(l)||0,k=parseFloat(k)||0);c.isFunction(b)&&(b=b.call(a,d,c.extend({},h)));null!=b.top&&(g.top=b.top-h.top+l);null!=b.left&&(g.left=b.left-h.left+k);"using"in b?b.using.call(a,g):f.css(g)}};c.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:
this.each(function(b){c.offset.setOffset(this,a,b)});var b;if(b=this[0]){if(!b.getClientRects().length)return{top:0,left:0};var d=b.getBoundingClientRect();var e=b.ownerDocument;b=e.documentElement;e=e.defaultView;return{top:d.top+e.pageYOffset-b.clientTop,left:d.left+e.pageXOffset-b.clientLeft}}},position:function(){if(this[0]){var a=this[0],b={top:0,left:0};if("fixed"===c.css(a,"position"))var d=a.getBoundingClientRect();else{var e=this.offsetParent();d=this.offset();B(e[0],"html")||(b=e.offset());
b={top:b.top+c.css(e[0],"borderTopWidth",!0),left:b.left+c.css(e[0],"borderLeftWidth",!0)}}return{top:d.top-b.top-c.css(a,"marginTop",!0),left:d.left-b.left-c.css(a,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"static"===c.css(a,"position");)a=a.offsetParent;return a||Ma})}});c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var d="pageYOffset"===b;c.fn[a]=function(e){return aa(this,function(a,e,h){if(c.isWindow(a))var f=
a;else 9===a.nodeType&&(f=a.defaultView);if(void 0===h)return f?f[b]:a[e];f?f.scrollTo(d?f.pageXOffset:h,d?h:f.pageYOffset):a[e]=h},a,e,arguments.length)}});c.each(["top","left"],function(a,b){c.cssHooks[b]=mb(q.pixelPosition,function(a,e){if(e)return e=ra(a,b),Pa.test(e)?c(a).position()[b]+"px":e})});c.each({Height:"height",Width:"width"},function(a,b){c.each({padding:"inner"+a,content:b,"":"outer"+a},function(d,e){c.fn[e]=function(f,g){var h=arguments.length&&(d||"boolean"!==typeof f),l=d||(!0===
f||!0===g?"margin":"border");return aa(this,function(b,d,f){return c.isWindow(b)?0===e.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(d=b.documentElement,Math.max(b.body["scroll"+a],d["scroll"+a],b.body["offset"+a],d["offset"+a],d["client"+a])):void 0===f?c.css(b,d,l):c.style(b,d,f,l)},b,h?f:void 0,h)}})});c.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,e){return this.on(b,a,
c,e)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});c.holdReady=function(a){a?c.readyWait++:c.ready(!0)};c.isArray=Array.isArray;c.parseJSON=JSON.parse;c.nodeName=B; true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return c}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Ic=n.jQuery,Jc=n.$;c.noConflict=function(a){n.$===c&&(n.$=Jc);a&&n.jQuery===c&&(n.jQuery=Ic);return c};C||(n.jQuery=n.$=c);return c});
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(g,l,m){g!=Array.prototype&&g!=Object.prototype&&(g[l]=m.value)};$jscomp.getGlobal=function(g){return"undefined"!=typeof window&&window===g?g:"undefined"!=typeof global&&null!=global?global:g};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(g){return $jscomp.SYMBOL_PREFIX+(g||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var g=$jscomp.global.Symbol.iterator;g||(g=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[g]&&$jscomp.defineProperty(Array.prototype,g,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(g){var l=0;return $jscomp.iteratorPrototype(function(){return l<g.length?{done:!1,value:g[l++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(g){$jscomp.initSymbolIterator();g={next:g};g[$jscomp.global.Symbol.iterator]=function(){return this};return g};$jscomp.iteratorFromArray=function(g,l){$jscomp.initSymbolIterator();g instanceof String&&(g+="");var m=0,n={next:function(){if(m<g.length){var q=m++;return{value:l(q,g[q]),done:!1}}n.next=function(){return{done:!0,value:void 0}};return n.next()}};n[Symbol.iterator]=function(){return n};return n};
$jscomp.polyfill=function(g,l,m,n){if(l){m=$jscomp.global;g=g.split(".");for(n=0;n<g.length-1;n++){var q=g[n];q in m||(m[q]={});m=m[q]}g=g[g.length-1];n=m[g];l=l(n);l!=n&&null!=l&&$jscomp.defineProperty(m,g,{configurable:!0,writable:!0,value:l})}};$jscomp.polyfill("Array.prototype.keys",function(g){return g?g:function(){return $jscomp.iteratorFromArray(this,function(g){return g})}},"es6","es3");
(function(g,l){l(g.MMTF=g.MMTF||{})})(this,function(g){function l(a,b,c){for(var d=0,f=c.length;d<f;d++){var e=c.charCodeAt(d);if(128>e)a.setUint8(b++,e>>>0&127|0);else if(2048>e)a.setUint8(b++,e>>>6&31|192),a.setUint8(b++,e>>>0&63|128);else if(65536>e)a.setUint8(b++,e>>>12&15|224),a.setUint8(b++,e>>>6&63|128),a.setUint8(b++,e>>>0&63|128);else if(1114112>e)a.setUint8(b++,e>>>18&7|240),a.setUint8(b++,e>>>12&63|128),a.setUint8(b++,e>>>6&63|128),a.setUint8(b++,e>>>0&63|128);else throw Error("bad codepoint "+
e);}}function m(a){for(var b=0,c=0,d=a.length;c<d;c++){var f=a.charCodeAt(c);if(128>f)b+=1;else if(2048>f)b+=2;else if(65536>f)b+=3;else if(1114112>f)b+=4;else throw Error("bad codepoint "+f);}return b}function n(a,b,c){var d=typeof a;if("string"===d){var f=m(a);if(32>f)return b.setUint8(c,f|160),l(b,c+1,a),1+f;if(256>f)return b.setUint8(c,217),b.setUint8(c+1,f),l(b,c+2,a),2+f;if(65536>f)return b.setUint8(c,218),b.setUint16(c+1,f),l(b,c+3,a),3+f;if(4294967296>f)return b.setUint8(c,219),b.setUint32(c+
1,f),l(b,c+5,a),5+f}if(a instanceof Uint8Array){f=a.byteLength;var e=new Uint8Array(b.buffer);if(256>f)return b.setUint8(c,196),b.setUint8(c+1,f),e.set(a,c+2),2+f;if(65536>f)return b.setUint8(c,197),b.setUint16(c+1,f),e.set(a,c+3),3+f;if(4294967296>f)return b.setUint8(c,198),b.setUint32(c+1,f),e.set(a,c+5),5+f}if("number"===d){if(!isFinite(a))throw Error("Number not finite: "+a);if(Math.floor(a)!==a)return b.setUint8(c,203),b.setFloat64(c+1,a),9;if(0<=a){if(128>a)return b.setUint8(c,a),1;if(256>a)return b.setUint8(c,
204),b.setUint8(c+1,a),2;if(65536>a)return b.setUint8(c,205),b.setUint16(c+1,a),3;if(4294967296>a)return b.setUint8(c,206),b.setUint32(c+1,a),5;throw Error("Number too big 0x"+a.toString(16));}if(-32<=a)return b.setInt8(c,a),1;if(-128<=a)return b.setUint8(c,208),b.setInt8(c+1,a),2;if(-32768<=a)return b.setUint8(c,209),b.setInt16(c+1,a),3;if(-2147483648<=a)return b.setUint8(c,210),b.setInt32(c+1,a),5;throw Error("Number too small -0x"+(-a).toString(16).substr(1));}if(null===a)return b.setUint8(c,192),
1;if("boolean"===d)return b.setUint8(c,a?195:194),1;if("object"===d){d=0;if(e=Array.isArray(a))f=a.length;else{var h=Object.keys(a);f=h.length}16>f?(b.setUint8(c,f|(e?144:128)),d=1):65536>f?(b.setUint8(c,e?220:222),b.setUint16(c+1,f),d=3):4294967296>f&&(b.setUint8(c,e?221:223),b.setUint32(c+1,f),d=5);if(e)for(e=0;e<f;e++)d+=n(a[e],b,c+d);else for(e=0;e<f;e++){var g=h[e];d+=n(g,b,c+d);d+=n(a[g],b,c+d)}return d}throw Error("Unknown type "+d);}function q(a){var b=typeof a;if("string"===b){var c=m(a);
if(32>c)return 1+c;if(256>c)return 2+c;if(65536>c)return 3+c;if(4294967296>c)return 5+c}if(a instanceof Uint8Array){c=a.byteLength;if(256>c)return 2+c;if(65536>c)return 3+c;if(4294967296>c)return 5+c}if("number"===b){if(Math.floor(a)!==a)return 9;if(0<=a){if(128>a)return 1;if(256>a)return 2;if(65536>a)return 3;if(4294967296>a)return 5;throw Error("Number too big 0x"+a.toString(16));}if(-32<=a)return 1;if(-128<=a)return 2;if(-32768<=a)return 3;if(-2147483648<=a)return 5;throw Error("Number too small -0x"+
a.toString(16).substr(1));}if("boolean"===b||null===a)return 1;if("object"===b){b=0;if(Array.isArray(a)){c=a.length;for(var d=0;d<c;d++)b+=q(a[d])}else{var f=Object.keys(a);c=f.length;for(d=0;d<c;d++){var e=f[d];b+=q(e)+q(a[e])}}if(16>c)return 1+b;if(65536>c)return 3+b;if(4294967296>c)return 5+b;throw Error("Array or object too long 0x"+c.toString(16));}throw Error("Unknown type "+b);}function H(a){var b=new ArrayBuffer(q(a)),c=new DataView(b);n(a,c,0);return new Uint8Array(b)}function k(a,b,c){return b?
new a(b.buffer,b.byteOffset,b.byteLength/(c||1)):void 0}function A(a,b){var c=a.length/2;b||(b=new Int16Array(c));for(var d=0,f=0;d<c;++d,f+=2)b[d]=a[f]<<8^a[f+1]<<0;return b}function r(a,b){var c=a.length/4;b||(b=new Int32Array(c));for(var d=0,f=0;d<c;++d,f+=4)b[d]=a[f]<<24^a[f+1]<<16^a[f+2]<<8^a[f+3]<<0;return b}function t(a,b){var c=a.length;b||(b=new Uint8Array(4*c));for(var d=k(DataView,b),f=0;f<c;++f)d.setInt32(4*f,a[f]);return k(Uint8Array,b)}function x(a,b,c){var d=a.length;b=1/b;c||(c=new Float32Array(d));
for(var f=0;f<d;++f)c[f]=a[f]*b;return c}function I(a,b,c){var d=a.length;c||(c=new Int32Array(d));for(var f=0;f<d;++f)c[f]=Math.round(a[f]*b);return c}function B(a,b){var c;if(!b){var d=b=0;for(c=a.length;d<c;d+=2)b+=a[d+1];b=new a.constructor(b)}var f=0;d=0;for(c=a.length;d<c;d+=2)for(var e=a[d],h=a[d+1],g=0;g<h;++g)b[f]=e,++f;return b}function D(a){if(0===a.length)return new Int32Array;var b,c=2;var d=1;for(b=a.length;d<b;++d)a[d-1]!==a[d]&&(c+=2);c=new Int32Array(c);var f=0,e=1;d=1;for(b=a.length;d<
b;++d)a[d-1]!==a[d]?(c[f]=a[d-1],c[f+1]=e,e=1,f+=2):++e;c[f]=a[a.length-1];c[f+1]=e;return c}function J(a,b){var c=a.length;b||(b=new a.constructor(c));c&&(b[0]=a[0]);for(var d=1;d<c;++d)b[d]=a[d]+b[d-1];return b}function K(a,b){var c=a.length;b||(b=new a.constructor(c));b[0]=a[0];for(var d=1;d<c;++d)b[d]=a[d]-a[d-1];return b}function y(a,b){var c=a instanceof Int8Array?127:32767,d=-c-1,f=a.length,e,h;if(!b){for(e=b=0;e<f;++e)a[e]<c&&a[e]>d&&++b;b=new Int32Array(b)}for(h=e=0;e<f;){for(var g=0;a[e]===
c||a[e]===d;)g+=a[e],++e;g+=a[e];++e;b[h]=g;++h}return b}function Y(a){var b=k(DataView,a),c=b.getInt32(0);b=b.getInt32(4);var d=a.subarray(8,12);a=a.subarray(12);return[c,a,b,d]}function u(a,b,c,d){var f=new ArrayBuffer(12+d.byteLength),e=new Uint8Array(f);f=new DataView(f);f.setInt32(0,a);f.setInt32(4,b);c&&e.set(c,8);e.set(d,12);return e}function O(a){var b=a.length;a=k(Uint8Array,a);return u(2,b,void 0,a)}function P(a){var b=a.length;a=t(a);return u(4,b,void 0,a)}function Q(a,b){var c=a.length/
b;b=t([b]);a=k(Uint8Array,a);return u(5,c,b,a)}function R(a){var b=a.length;a=t(D(a));return u(6,b,void 0,a)}function E(a){var b=a.length;a=t(D(K(a)));return u(8,b,void 0,a)}function Z(a,b){var c=a.length,d=t([b]);a=t(D(I(a,b)));return u(9,c,d,a)}function C(a,b){var c=a.length,d=t([b]);b=K(I(a,b),void 0);var f,e=b.length;for(f=a=0;f<e;++f){var h=b[f];0===h?++a:a=32767===h||-32768===h?a+2:0<h?a+Math.ceil(h/32767):a+Math.ceil(h/-32768)}a=new Int16Array(a);var g=0;for(f=0;f<e;++f){h=b[f];if(0<=h)for(;32767<=
h;)a[g]=32767,++g,h-=32767;else for(;-32768>=h;)a[g]=-32768,++g,h-=-32768;a[g]=h;++g}b=void 0;h=a.length;b||(b=new Uint8Array(2*h));f=k(DataView,b);for(e=0;e<h;++e)f.setInt16(2*e,a[e]);a=k(Uint8Array,b);return u(10,c,d,a)}function S(a){var b={};T.forEach(function(c){void 0!==a[c]&&(b[c]=a[c])});a.bondAtomList&&(b.bondAtomList=P(a.bondAtomList));a.bondOrderList&&(b.bondOrderList=O(a.bondOrderList));b.xCoordList=C(a.xCoordList,1E3);b.yCoordList=C(a.yCoordList,1E3);b.zCoordList=C(a.zCoordList,1E3);a.bFactorList&&
(b.bFactorList=C(a.bFactorList,100));a.atomIdList&&(b.atomIdList=E(a.atomIdList));a.altLocList&&(b.altLocList=R(a.altLocList));a.occupancyList&&(b.occupancyList=Z(a.occupancyList,100));b.groupIdList=E(a.groupIdList);b.groupTypeList=P(a.groupTypeList);a.secStructList&&(b.secStructList=O(a.secStructList,1));a.insCodeList&&(b.insCodeList=R(a.insCodeList));a.sequenceIndexList&&(b.sequenceIndexList=E(a.sequenceIndexList));b.chainIdList=Q(a.chainIdList,4);a.chainNameList&&(b.chainNameList=Q(a.chainNameList,
4));return b}function U(a){function b(a){for(var b={},c=0;c<a;c++){var d=e();b[d]=e()}return b}function c(b){var c=a.subarray(h,h+b);h+=b;return c}function d(b){var c=a.subarray(h,h+b);h+=b;if(65535<b){b=[];for(var d=0;d<c.length;d+=65535)b.push(String.fromCharCode.apply(null,c.subarray(d,d+65535)));return b.join("")}return String.fromCharCode.apply(null,c)}function f(a){for(var b=Array(a),c=0;c<a;c++)b[c]=e();return b}function e(){var e=a[h];if(0===(e&128))return h++,e;if(128===(e&240))return h++,
b(e&15);if(144===(e&240))return h++,f(e&15);if(160===(e&224))return h++,d(e&31);if(224===(e&224))return e=g.getInt8(h),h++,e;switch(e){case 192:return h++,null;case 194:return h++,!1;case 195:return h++,!0;case 196:return e=g.getUint8(h+1),h+=2,c(e);case 197:return e=g.getUint16(h+1),h+=3,c(e);case 198:return e=g.getUint32(h+1),h+=5,c(e);case 202:return e=g.getFloat32(h+1),h+=5,e;case 203:return e=g.getFloat64(h+1),h+=9,e;case 204:return e=a[h+1],h+=2,e;case 205:return e=g.getUint16(h+1),h+=3,e;case 206:return e=
g.getUint32(h+1),h+=5,e;case 208:return e=g.getInt8(h+1),h+=2,e;case 209:return e=g.getInt16(h+1),h+=3,e;case 210:return e=g.getInt32(h+1),h+=5,e;case 217:return e=g.getUint8(h+1),h+=2,d(e);case 218:return e=g.getUint16(h+1),h+=3,d(e);case 219:return e=g.getUint32(h+1),h+=5,d(e);case 220:return e=g.getUint16(h+1),h+=3,f(e);case 221:return e=g.getUint32(h+1),h+=5,f(e);case 222:return e=g.getUint16(h+1),h+=3,b(e);case 223:return e=g.getUint32(h+1),h+=5,b(e)}throw Error("Unknown type 0x"+e.toString(16));
}var h=0,g=new DataView(a.buffer);return e()}function aa(a,b,c,d){switch(a){case 1:d=void 0;c=b.length;d||(d=new Float32Array(c/4));a=k(DataView,d);b=k(DataView,b);var f=0,e=0;for(c/=4;f<c;++f,e+=4)a.setFloat32(e,b.getFloat32(e),!0);return d;case 2:return k(Int8Array,b);case 3:return A(b);case 4:return r(b);case 5:return k(Uint8Array,b);case 6:return B(r(b),new Uint8Array(c));case 7:return B(r(b));case 8:return d=r(b),J(B(d),void 0);case 9:return a=r(b),d=r(d)[0],x(B(a,k(Int32Array,void 0,4)),d,void 0);
case 10:return a=A(b),d=r(d)[0],a=y(a,k(Int32Array,void 0,4)),b=k(Float32Array,a,4),x(J(a,k(Int32Array,b,4)),d,b);case 11:return x(A(b),r(d)[0]);case 12:return a=A(b),d=r(d)[0],x(y(a,k(Int32Array,void 0,4)),d,void 0);case 13:return a=k(Int8Array,b),d=r(d)[0],x(y(a,k(Int32Array,void 0,4)),d,void 0);case 14:return y(A(b));case 15:return y(k(Int8Array,b))}}function V(a,b){b=b||{};var c=b.ignoreFields,d={};ba.forEach(function(b){var e=c?-1!==c.indexOf(b):!1,f=a[b];e||void 0===f||(d[b]=f instanceof Uint8Array?
aa.apply(null,Y(f)):f)});return d}function W(a,b){a instanceof ArrayBuffer&&(a=new Uint8Array(a));a=a instanceof Uint8Array?U(a):a;return V(a,b)}function X(a,b,c,d){var f=new XMLHttpRequest;f.addEventListener("load",function(){try{var a=W(f.response);c(a)}catch(h){d(h)}},!0);f.addEventListener("error",d,!0);f.responseType="arraybuffer";f.open("GET",b+a.toUpperCase());f.send()}var T="mmtfVersion mmtfProducer unitCell spaceGroup structureId title depositionDate releaseDate experimentalMethods resolution rFree rWork bioAssemblyList ncsOperatorList entityList groupList numBonds numAtoms numGroups numChains numModels groupsPerChain chainsPerModel".split(" "),
ba=T.concat("xCoordList yCoordList zCoordList groupIdList groupTypeList chainIdList bFactorList atomIdList altLocList occupancyList secStructList insCodeList sequenceIndexList chainNameList bondAtomList bondOrderList".split(" "));g.encode=function(a){return H(S(a))};g.decode=W;g.traverse=function(a,b,c){c=c||{};c=c.firstModelOnly;var d=b.onModel,f=b.onChain,e=b.onGroup,g=b.onAtom;b=b.onBond;var l=0,k=0,n=0,m=0,q,r=-1,t=a.chainNameList,u=a.secStructList,A=a.insCodeList,x=a.sequenceIndexList,y=a.atomIdList,
B=a.bFactorList,C=a.altLocList,D=a.occupancyList,L=a.bondAtomList,E=a.bondOrderList,H;var I=0;for(H=a.chainsPerModel.length;I<H&&!(c&&0<l);++I){var F=a.chainsPerModel[l];d&&d({chainCount:F,modelIndex:l});for(q=0;q<F;++q){var G=a.groupsPerChain[k];if(f){var M=String.fromCharCode.apply(null,a.chainIdList.subarray(4*k,4*k+4)).replace(/\0/g,"");var p=null;t&&(p=String.fromCharCode.apply(null,t.subarray(4*k,4*k+4)).replace(/\0/g,""));f({groupCount:G,chainIndex:k,modelIndex:l,chainId:M,chainName:p})}for(M=
0;M<G;++M){var v=a.groupList[a.groupTypeList[n]],N=v.atomNameList.length;if(e){p=null;u&&(p=u[n]);var w=null;a.insCodeList&&(w=String.fromCharCode(A[n]));var z=null;x&&(z=x[n]);e({atomCount:N,groupIndex:n,chainIndex:k,modelIndex:l,groupId:a.groupIdList[n],groupType:a.groupTypeList[n],groupName:v.groupName,singleLetterCode:v.singleLetterCode,chemCompType:v.chemCompType,secStruct:p,insCode:w,sequenceIndex:z})}for(p=0;p<N;++p){if(g){w=null;y&&(w=y[m]);z=null;B&&(z=B[m]);var J=null;C&&(J=String.fromCharCode(C[m]));
var K=null;D&&(K=D[m]);g({atomIndex:m,groupIndex:n,chainIndex:k,modelIndex:l,atomId:w,element:v.elementList[p],atomName:v.atomNameList[p],formalCharge:v.formalChargeList[p],xCoord:a.xCoordList[m],yCoord:a.yCoordList[m],zCoord:a.zCoordList[m],bFactor:z,altLoc:J,occupancy:K})}m+=1}if(b)for(z=v.bondAtomList,p=0,w=v.bondOrderList.length;p<w;++p)b({atomIndex1:m-N+z[2*p],atomIndex2:m-N+z[2*p+1],bondOrder:v.bondOrderList[p]});n+=1}k+=1}q=r+1;r=m-1;if(b&&L)for(p=0,w=L.length;p<w;p+=2)F=L[p],G=L[p+1],(F>=
q&&F<=r||G>=q&&G<=r)&&b({atomIndex1:F,atomIndex2:G,bondOrder:E?E[p/2]:null});l+=1}};g.fetch=function(a,b,c){X(a,"http://mmtf.rcsb.org/v1.0/full/",b,c)};g.fetchReduced=function(a,b,c){X(a,"http://mmtf.rcsb.org/v1.0/reduced/",b,c)};g.version="v1.0.0";g.fetchUrl="http://mmtf.rcsb.org/v1.0/full/";g.fetchReducedUrl="http://mmtf.rcsb.org/v1.0/reduced/";g.encodeMsgpack=H;g.encodeMmtf=S;g.decodeMsgpack=U;g.decodeMmtf=V;Object.defineProperty(g,"__esModule",{value:!0})});
(function(O){ true?module.exports=O():undefined})(function(){return function x(w,g,E){function z(h,d){if(!g[h]){if(!w[h]){var c="function"==typeof require&&require;if(!d&&c)return require(h,!0);if(m)return m(h,!0);d=Error("Cannot find module '"+h+"'");throw d.code="MODULE_NOT_FOUND",d;}d=g[h]=
{exports:{}};w[h][0].call(d.exports,function(c){var n=w[h][1][c];return z(n?n:c)},d,d.exports,x,w,g,E)}return g[h].exports}for(var m="function"==typeof require&&require,k=0;k<E.length;k++)z(E[k]);return z}({1:[function(x,w,g){x="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;g.assign=function(m){for(var k=Array.prototype.slice.call(arguments,1);k.length;){var h=k.shift();if(h){if("object"!==typeof h)throw new TypeError(h+"must be non-object");for(var d in h)h.hasOwnProperty(d)&&
(m[d]=h[d])}}return m};g.shrinkBuf=function(m,k){if(m.length===k)return m;if(m.subarray)return m.subarray(0,k);m.length=k;return m};var E={arraySet:function(m,k,h,d,c){if(k.subarray&&m.subarray)m.set(k.subarray(h,h+d),c);else for(var n=0;n<d;n++)m[c+n]=k[h+n]},flattenChunks:function(m){var k,h;var d=h=0;for(k=m.length;d<k;d++)h+=m[d].length;var c=new Uint8Array(h);d=h=0;for(k=m.length;d<k;d++){var n=m[d];c.set(n,h);h+=n.length}return c}},z={arraySet:function(m,k,h,d,c){for(var n=0;n<d;n++)m[c+n]=
k[h+n]},flattenChunks:function(m){return[].concat.apply([],m)}};g.setTyped=function(m){m?(g.Buf8=Uint8Array,g.Buf16=Uint16Array,g.Buf32=Int32Array,g.assign(g,E)):(g.Buf8=Array,g.Buf16=Array,g.Buf32=Array,g.assign(g,z))};g.setTyped(x)},{}],2:[function(x,w,g){function E(h,c){if(65537>c&&(h.subarray&&k||!h.subarray&&m))return String.fromCharCode.apply(null,z.shrinkBuf(h,c));for(var n="",d=0;d<c;d++)n+=String.fromCharCode(h[d]);return n}var z=x("./common"),m=!0,k=!0;try{String.fromCharCode.apply(null,
[0])}catch(d){m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(d){k=!1}var h=new z.Buf8(256);for(x=0;256>x;x++)h[x]=252<=x?6:248<=x?5:240<=x?4:224<=x?3:192<=x?2:1;h[254]=h[254]=1;g.string2buf=function(h){var c,n,m=h.length,d=0;for(c=0;c<m;c++){var y=h.charCodeAt(c);if(55296===(y&64512)&&c+1<m){var C=h.charCodeAt(c+1);56320===(C&64512)&&(y=65536+(y-55296<<10)+(C-56320),c++)}d+=128>y?1:2048>y?2:65536>y?3:4}var k=new z.Buf8(d);for(c=n=0;n<d;c++)y=h.charCodeAt(c),55296===(y&64512)&&c+
1<m&&(C=h.charCodeAt(c+1),56320===(C&64512)&&(y=65536+(y-55296<<10)+(C-56320),c++)),128>y?k[n++]=y:(2048>y?k[n++]=192|y>>>6:(65536>y?k[n++]=224|y>>>12:(k[n++]=240|y>>>18,k[n++]=128|y>>>12&63),k[n++]=128|y>>>6&63),k[n++]=128|y&63);return k};g.buf2binstring=function(h){return E(h,h.length)};g.binstring2buf=function(h){for(var c=new z.Buf8(h.length),n=0,m=c.length;n<m;n++)c[n]=h.charCodeAt(n);return c};g.buf2string=function(m,c){var n,k=c||m.length,d=Array(2*k);for(c=n=0;c<k;){var y=m[c++];if(128>y)d[n++]=
y;else{var C=h[y];if(4<C)d[n++]=65533,c+=C-1;else{for(y&=2===C?31:3===C?15:7;1<C&&c<k;)y=y<<6|m[c++]&63,C--;1<C?d[n++]=65533:65536>y?d[n++]=y:(y-=65536,d[n++]=55296|y>>10&1023,d[n++]=56320|y&1023)}}}return E(d,n)};g.utf8border=function(m,c){var n;c=c||m.length;c>m.length&&(c=m.length);for(n=c-1;0<=n&&128===(m[n]&192);)n--;return 0>n||0===n?c:n+h[m[n]]>c?n:c}},{"./common":1}],3:[function(x,w,g){w.exports=function(g,x,m,k){var h=g&65535|0;g=g>>>16&65535|0;for(var d;0!==m;){d=2E3<m?2E3:m;m-=d;do h=h+
x[k++]|0,g=g+h|0;while(--d);h%=65521;g%=65521}return h|g<<16|0}},{}],4:[function(x,w,g){w.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(x,
w,g){var E=function(){for(var g,m=[],k=0;256>k;k++){g=k;for(var h=0;8>h;h++)g=g&1?3988292384^g>>>1:g>>>1;m[k]=g}return m}();w.exports=function(g,m,k,h){k=h+k;for(g^=-1;h<k;h++)g=g>>>8^E[(g^m[h])&255];return g^-1}},{}],6:[function(x,w,g){w.exports=function(){this.os=this.xflags=this.time=this.text=0;this.extra=null;this.extra_len=0;this.comment=this.name="";this.hcrc=0;this.done=!1}},{}],7:[function(x,w,g){w.exports=function(g,x){var m=g.state;var k=g.next_in;var h=g.input;var d=k+(g.avail_in-5);var c=
g.next_out;var n=g.output;x=c-(x-g.avail_out);var A=c+(g.avail_out-257);var w=m.dmax;var y=m.wsize;var C=m.whave;var H=m.wnext;var L=m.window;var b=m.hold;var p=m.bits;var Q=m.lencode;var F=m.distcode;var E=(1<<m.lenbits)-1;var a=(1<<m.distbits)-1;a:do{15>p&&(b+=h[k++]<<p,p+=8,b+=h[k++]<<p,p+=8);var D=Q[b&E];b:for(;;){var u=D>>>24;b>>>=u;p-=u;u=D>>>16&255;if(0===u)n[c++]=D&65535;else if(u&16){var q=D&65535;if(u&=15)p<u&&(b+=h[k++]<<p,p+=8),q+=b&(1<<u)-1,b>>>=u,p-=u;15>p&&(b+=h[k++]<<p,p+=8,b+=h[k++]<<
p,p+=8);D=F[b&a];c:for(;;){u=D>>>24;b>>>=u;p-=u;u=D>>>16&255;if(u&16){D&=65535;u&=15;p<u&&(b+=h[k++]<<p,p+=8,p<u&&(b+=h[k++]<<p,p+=8));D+=b&(1<<u)-1;if(D>w){g.msg="invalid distance too far back";m.mode=30;break a}b>>>=u;p-=u;u=c-x;if(D>u){u=D-u;if(u>C&&m.sane){g.msg="invalid distance too far back";m.mode=30;break a}var t=0;var J=L;if(0===H){if(t+=y-u,u<q){q-=u;do n[c++]=L[t++];while(--u);t=c-D;J=n}}else if(H<u){if(t+=y+H-u,u-=H,u<q){q-=u;do n[c++]=L[t++];while(--u);t=0;if(H<q){u=H;q-=u;do n[c++]=
L[t++];while(--u);t=c-D;J=n}}}else if(t+=H-u,u<q){q-=u;do n[c++]=L[t++];while(--u);t=c-D;J=n}for(;2<q;)n[c++]=J[t++],n[c++]=J[t++],n[c++]=J[t++],q-=3;q&&(n[c++]=J[t++],1<q&&(n[c++]=J[t++]))}else{t=c-D;do n[c++]=n[t++],n[c++]=n[t++],n[c++]=n[t++],q-=3;while(2<q);q&&(n[c++]=n[t++],1<q&&(n[c++]=n[t++]))}}else if(0===(u&64)){D=F[(D&65535)+(b&(1<<u)-1)];continue c}else{g.msg="invalid distance code";m.mode=30;break a}break}}else if(0===(u&64)){D=Q[(D&65535)+(b&(1<<u)-1)];continue b}else{u&32?m.mode=12:
(g.msg="invalid literal/length code",m.mode=30);break a}break}}while(k<d&&c<A);q=p>>3;k-=q;p-=q<<3;g.next_in=k;g.next_out=c;g.avail_in=k<d?5+(d-k):5-(k-d);g.avail_out=c<A?257+(A-c):257-(c-A);m.hold=b&(1<<p)-1;m.bits=p}},{}],8:[function(x,w,g){function E(b){return(b>>>24&255)+(b>>>8&65280)+((b&65280)<<8)+((b&255)<<24)}function z(){this.mode=0;this.last=!1;this.wrap=0;this.havedict=!1;this.total=this.check=this.dmax=this.flags=0;this.head=null;this.wnext=this.whave=this.wsize=this.wbits=0;this.window=
null;this.extra=this.offset=this.length=this.bits=this.hold=0;this.distcode=this.lencode=null;this.have=this.ndist=this.nlen=this.ncode=this.distbits=this.lenbits=0;this.next=null;this.lens=new c.Buf16(320);this.work=new c.Buf16(288);this.distdyn=this.lendyn=null;this.was=this.back=this.sane=0}function m(b){if(!b||!b.state)return-2;var p=b.state;b.total_in=b.total_out=p.total=0;b.msg="";p.wrap&&(b.adler=p.wrap&1);p.mode=1;p.last=0;p.havedict=0;p.dmax=32768;p.head=null;p.hold=0;p.bits=0;p.lencode=
p.lendyn=new c.Buf32(852);p.distcode=p.distdyn=new c.Buf32(592);p.sane=1;p.back=-1;return 0}function k(b){if(!b||!b.state)return-2;var p=b.state;p.wsize=0;p.whave=0;p.wnext=0;return m(b)}function h(b,p){if(!b||!b.state)return-2;var c=b.state;if(0>p){var h=0;p=-p}else h=(p>>4)+1,48>p&&(p&=15);if(p&&(8>p||15<p))return-2;null!==c.window&&c.wbits!==p&&(c.window=null);c.wrap=h;c.wbits=p;return k(b)}function d(b,c){if(!b)return-2;var p=new z;b.state=p;p.window=null;c=h(b,c);0!==c&&(b.state=null);return c}
var c=x("../utils/common"),n=x("./adler32"),A=x("./crc32"),I=x("./inffast"),y=x("./inftrees"),C=!0,H,L;g.inflateReset=k;g.inflateReset2=h;g.inflateResetKeep=m;g.inflateInit=function(b){return d(b,15)};g.inflateInit2=d;g.inflate=function(b,p){var h,m=new c.Buf8(4),g=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!b||!b.state||!b.output||!b.input&&0!==b.avail_in)return-2;var a=b.state;12===a.mode&&(a.mode=13);var k=b.next_out;var u=b.output;var q=b.avail_out;var t=b.next_in;var d=b.input;var r=
b.avail_in;var f=a.hold;var e=a.bits;var x=r;var w=q;var z=0;a:for(;;)switch(a.mode){case 1:if(0===a.wrap){a.mode=13;break}for(;16>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}if(a.wrap&2&&35615===f){a.check=0;m[0]=f&255;m[1]=f>>>8&255;a.check=A(a.check,m,2,0);e=f=0;a.mode=2;break}a.flags=0;a.head&&(a.head.done=!1);if(!(a.wrap&1)||(((f&255)<<8)+(f>>8))%31){b.msg="incorrect header check";a.mode=30;break}if(8!==(f&15)){b.msg="unknown compression method";a.mode=30;break}f>>>=4;e-=4;var v=(f&15)+8;if(0===
a.wbits)a.wbits=v;else if(v>a.wbits){b.msg="invalid window size";a.mode=30;break}a.dmax=1<<v;b.adler=a.check=1;a.mode=f&512?10:12;e=f=0;break;case 2:for(;16>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.flags=f;if(8!==(a.flags&255)){b.msg="unknown compression method";a.mode=30;break}if(a.flags&57344){b.msg="unknown header flags set";a.mode=30;break}a.head&&(a.head.text=f>>8&1);a.flags&512&&(m[0]=f&255,m[1]=f>>>8&255,a.check=A(a.check,m,2,0));e=f=0;a.mode=3;case 3:for(;32>e;){if(0===r)break a;r--;f+=
d[t++]<<e;e+=8}a.head&&(a.head.time=f);a.flags&512&&(m[0]=f&255,m[1]=f>>>8&255,m[2]=f>>>16&255,m[3]=f>>>24&255,a.check=A(a.check,m,4,0));e=f=0;a.mode=4;case 4:for(;16>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.head&&(a.head.xflags=f&255,a.head.os=f>>8);a.flags&512&&(m[0]=f&255,m[1]=f>>>8&255,a.check=A(a.check,m,2,0));e=f=0;a.mode=5;case 5:if(a.flags&1024){for(;16>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.length=f;a.head&&(a.head.extra_len=f);a.flags&512&&(m[0]=f&255,m[1]=f>>>8&255,a.check=A(a.check,
m,2,0));e=f=0}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(a.flags&1024){var l=a.length;l>r&&(l=r);l&&(a.head&&(v=a.head.extra_len-a.length,a.head.extra||(a.head.extra=Array(a.head.extra_len)),c.arraySet(a.head.extra,d,t,l,v)),a.flags&512&&(a.check=A(a.check,d,l,t)),r-=l,t+=l,a.length-=l);if(a.length)break a}a.length=0;a.mode=7;case 7:if(a.flags&2048){if(0===r)break a;l=0;do v=d[t+l++],a.head&&v&&65536>a.length&&(a.head.name+=String.fromCharCode(v));while(v&&l<r);a.flags&512&&(a.check=A(a.check,
d,l,t));r-=l;t+=l;if(v)break a}else a.head&&(a.head.name=null);a.length=0;a.mode=8;case 8:if(a.flags&4096){if(0===r)break a;l=0;do v=d[t+l++],a.head&&v&&65536>a.length&&(a.head.comment+=String.fromCharCode(v));while(v&&l<r);a.flags&512&&(a.check=A(a.check,d,l,t));r-=l;t+=l;if(v)break a}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(a.flags&512){for(;16>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}if(f!==(a.check&65535)){b.msg="header crc mismatch";a.mode=30;break}e=f=0}a.head&&(a.head.hcrc=a.flags>>
9&1,a.head.done=!0);b.adler=a.check=0;a.mode=12;break;case 10:for(;32>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}b.adler=a.check=E(f);e=f=0;a.mode=11;case 11:if(0===a.havedict)return b.next_out=k,b.avail_out=q,b.next_in=t,b.avail_in=r,a.hold=f,a.bits=e,2;b.adler=a.check=1;a.mode=12;case 12:if(5===p||6===p)break a;case 13:if(a.last){f>>>=e&7;e-=e&7;a.mode=27;break}for(;3>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.last=f&1;f>>>=1;--e;switch(f&3){case 0:a.mode=14;break;case 1:v=a;if(C){H=new c.Buf32(512);
L=new c.Buf32(32);for(l=0;144>l;)v.lens[l++]=8;for(;256>l;)v.lens[l++]=9;for(;280>l;)v.lens[l++]=7;for(;288>l;)v.lens[l++]=8;y(1,v.lens,0,288,H,0,v.work,{bits:9});for(l=0;32>l;)v.lens[l++]=5;y(2,v.lens,0,32,L,0,v.work,{bits:5});C=!1}v.lencode=H;v.lenbits=9;v.distcode=L;v.distbits=5;a.mode=20;if(6===p){f>>>=2;e-=2;break a}break;case 2:a.mode=17;break;case 3:b.msg="invalid block type",a.mode=30}f>>>=2;e-=2;break;case 14:f>>>=e&7;for(e-=e&7;32>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}if((f&65535)!==
(f>>>16^65535)){b.msg="invalid stored block lengths";a.mode=30;break}a.length=f&65535;e=f=0;a.mode=15;if(6===p)break a;case 15:a.mode=16;case 16:if(l=a.length){l>r&&(l=r);l>q&&(l=q);if(0===l)break a;c.arraySet(u,d,t,l,k);r-=l;t+=l;q-=l;k+=l;a.length-=l;break}a.mode=12;break;case 17:for(;14>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.nlen=(f&31)+257;f>>>=5;e-=5;a.ndist=(f&31)+1;f>>>=5;e-=5;a.ncode=(f&15)+4;f>>>=4;e-=4;if(286<a.nlen||30<a.ndist){b.msg="too many length or distance symbols";a.mode=30;
break}a.have=0;a.mode=18;case 18:for(;a.have<a.ncode;){for(;3>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.lens[g[a.have++]]=f&7;f>>>=3;e-=3}for(;19>a.have;)a.lens[g[a.have++]]=0;a.lencode=a.lendyn;a.lenbits=7;l={bits:a.lenbits};z=y(0,a.lens,0,19,a.lencode,0,a.work,l);a.lenbits=l.bits;if(z){b.msg="invalid code lengths set";a.mode=30;break}a.have=0;a.mode=19;case 19:for(;a.have<a.nlen+a.ndist;){for(;;){var B=a.lencode[f&(1<<a.lenbits)-1];l=B>>>24;B&=65535;if(l<=e)break;if(0===r)break a;r--;f+=d[t++]<<
e;e+=8}if(16>B)f>>>=l,e-=l,a.lens[a.have++]=B;else{if(16===B){for(v=l+2;e<v;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}f>>>=l;e-=l;if(0===a.have){b.msg="invalid bit length repeat";a.mode=30;break}v=a.lens[a.have-1];l=3+(f&3);f>>>=2;e-=2}else if(17===B){for(v=l+3;e<v;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}f>>>=l;e-=l;v=0;l=3+(f&7);f>>>=3;e-=3}else{for(v=l+7;e<v;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}f>>>=l;e-=l;v=0;l=11+(f&127);f>>>=7;e-=7}if(a.have+l>a.nlen+a.ndist){b.msg="invalid bit length repeat";
a.mode=30;break}for(;l--;)a.lens[a.have++]=v}}if(30===a.mode)break;if(0===a.lens[256]){b.msg="invalid code -- missing end-of-block";a.mode=30;break}a.lenbits=9;l={bits:a.lenbits};z=y(1,a.lens,0,a.nlen,a.lencode,0,a.work,l);a.lenbits=l.bits;if(z){b.msg="invalid literal/lengths set";a.mode=30;break}a.distbits=6;a.distcode=a.distdyn;l={bits:a.distbits};z=y(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,l);a.distbits=l.bits;if(z){b.msg="invalid distances set";a.mode=30;break}a.mode=20;if(6===p)break a;case 20:a.mode=
21;case 21:if(6<=r&&258<=q){b.next_out=k;b.avail_out=q;b.next_in=t;b.avail_in=r;a.hold=f;a.bits=e;I(b,w);k=b.next_out;u=b.output;q=b.avail_out;t=b.next_in;d=b.input;r=b.avail_in;f=a.hold;e=a.bits;12===a.mode&&(a.back=-1);break}for(a.back=0;;){B=a.lencode[f&(1<<a.lenbits)-1];l=B>>>24;v=B>>>16&255;B&=65535;if(l<=e)break;if(0===r)break a;r--;f+=d[t++]<<e;e+=8}if(v&&0===(v&240)){var G=l;var M=v;for(h=B;;){B=a.lencode[h+((f&(1<<G+M)-1)>>G)];l=B>>>24;v=B>>>16&255;B&=65535;if(G+l<=e)break;if(0===r)break a;
r--;f+=d[t++]<<e;e+=8}f>>>=G;e-=G;a.back+=G}f>>>=l;e-=l;a.back+=l;a.length=B;if(0===v){a.mode=26;break}if(v&32){a.back=-1;a.mode=12;break}if(v&64){b.msg="invalid literal/length code";a.mode=30;break}a.extra=v&15;a.mode=22;case 22:if(a.extra){for(v=a.extra;e<v;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.length+=f&(1<<a.extra)-1;f>>>=a.extra;e-=a.extra;a.back+=a.extra}a.was=a.length;a.mode=23;case 23:for(;;){B=a.distcode[f&(1<<a.distbits)-1];l=B>>>24;v=B>>>16&255;B&=65535;if(l<=e)break;if(0===r)break a;
r--;f+=d[t++]<<e;e+=8}if(0===(v&240)){G=l;M=v;for(h=B;;){B=a.distcode[h+((f&(1<<G+M)-1)>>G)];l=B>>>24;v=B>>>16&255;B&=65535;if(G+l<=e)break;if(0===r)break a;r--;f+=d[t++]<<e;e+=8}f>>>=G;e-=G;a.back+=G}f>>>=l;e-=l;a.back+=l;if(v&64){b.msg="invalid distance code";a.mode=30;break}a.offset=B;a.extra=v&15;a.mode=24;case 24:if(a.extra){for(v=a.extra;e<v;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}a.offset+=f&(1<<a.extra)-1;f>>>=a.extra;e-=a.extra;a.back+=a.extra}if(a.offset>a.dmax){b.msg="invalid distance too far back";
a.mode=30;break}a.mode=25;case 25:if(0===q)break a;l=w-q;if(a.offset>l){l=a.offset-l;if(l>a.whave&&a.sane){b.msg="invalid distance too far back";a.mode=30;break}l>a.wnext?(l-=a.wnext,v=a.wsize-l):v=a.wnext-l;l>a.length&&(l=a.length);G=a.window}else G=u,v=k-a.offset,l=a.length;l>q&&(l=q);q-=l;a.length-=l;do u[k++]=G[v++];while(--l);0===a.length&&(a.mode=21);break;case 26:if(0===q)break a;u[k++]=a.length;q--;a.mode=21;break;case 27:if(a.wrap){for(;32>e;){if(0===r)break a;r--;f|=d[t++]<<e;e+=8}w-=q;
b.total_out+=w;a.total+=w;w&&(b.adler=a.check=a.flags?A(a.check,u,w,k-w):n(a.check,u,w,k-w));w=q;if((a.flags?f:E(f))!==a.check){b.msg="incorrect data check";a.mode=30;break}e=f=0}a.mode=28;case 28:if(a.wrap&&a.flags){for(;32>e;){if(0===r)break a;r--;f+=d[t++]<<e;e+=8}if(f!==(a.total&4294967295)){b.msg="incorrect length check";a.mode=30;break}e=f=0}a.mode=29;case 29:z=1;break a;case 30:z=-3;break a;case 31:return-4;default:return-2}b.next_out=k;b.avail_out=q;b.next_in=t;b.avail_in=r;a.hold=f;a.bits=
e;if(a.wsize||w!==b.avail_out&&30>a.mode&&(27>a.mode||4!==p))d=b.output,t=b.next_out,k=w-b.avail_out,q=b.state,null===q.window&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new c.Buf8(q.wsize)),k>=q.wsize?(c.arraySet(q.window,d,t-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(r=q.wsize-q.wnext,r>k&&(r=k),c.arraySet(q.window,d,t-k,r,q.wnext),(k-=r)?(c.arraySet(q.window,d,t-k,k,0),q.wnext=k,q.whave=q.wsize):(q.wnext+=r,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=r)));x-=b.avail_in;
w-=b.avail_out;b.total_in+=x;b.total_out+=w;a.total+=w;a.wrap&&w&&(b.adler=a.check=a.flags?A(a.check,u,w,b.next_out-w):n(a.check,u,w,b.next_out-w));b.data_type=a.bits+(a.last?64:0)+(12===a.mode?128:0)+(20===a.mode||15===a.mode?256:0);(0===x&&0===w||4===p)&&0===z&&(z=-5);return z};g.inflateEnd=function(b){if(!b||!b.state)return-2;var c=b.state;c.window&&(c.window=null);b.state=null;return 0};g.inflateGetHeader=function(b,c){if(!b||!b.state)return-2;b=b.state;if(0===(b.wrap&2))return-2;b.head=c;c.done=
!1;return 0};g.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(x,w,g){var E=x("../utils/common"),z=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],m=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],k=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=
[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];w.exports=function(d,c,g,w,x,y,C,H){var n=H.bits,b,p,A,F,K,a,D=0,u=new E.Buf16(16);var q=new E.Buf16(16);var t,J=0;for(b=0;15>=b;b++)u[b]=0;for(p=0;p<w;p++)u[c[g+p]]++;var r=n;for(A=15;1<=A&&0===u[A];A--);r>A&&(r=A);if(0===A)return x[y++]=20971520,x[y++]=20971520,H.bits=1,0;for(n=1;n<A&&0===u[n];n++);r<n&&(r=n);for(b=F=1;15>=b;b++)if(F<<=1,F-=u[b],0>F)return-1;if(0<F&&(0===d||1!==A))return-1;q[1]=0;for(b=
1;15>b;b++)q[b+1]=q[b]+u[b];for(p=0;p<w;p++)0!==c[g+p]&&(C[q[c[g+p]]++]=p);if(0===d){var f=t=C;var e=19}else 1===d?(f=z,D-=257,t=m,J-=257,e=256):(f=k,t=h,e=-1);p=K=0;b=n;var I=y;w=r;q=0;var P=-1;var N=1<<r;var v=N-1;if(1===d&&852<N||2===d&&592<N)return 1;for(var l=0;;){l++;var B=b-q;if(C[p]<e){var G=0;var M=C[p]}else C[p]>e?(G=t[J+C[p]],M=f[D+C[p]]):(G=96,M=0);F=1<<b-q;n=a=1<<w;do a-=F,x[I+(K>>q)+a]=B<<24|G<<16|M|0;while(0!==a);for(F=1<<b-1;K&F;)F>>=1;0!==F?(K&=F-1,K+=F):K=0;p++;if(0===--u[b]){if(b===
A)break;b=c[g+C[p]]}if(b>r&&(K&v)!==P){0===q&&(q=r);I+=n;w=b-q;for(F=1<<w;w+q<A;){F-=u[w+q];if(0>=F)break;w++;F<<=1}N+=1<<w;if(1===d&&852<N||2===d&&592<N)return 1;P=K&v;x[P]=r<<24|w<<16|I-y|0}}0!==K&&(x[I+K]=b-q<<24|4194304);H.bits=r;return 0}},{"../utils/common":1}],10:[function(x,w,g){w.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(x,w,g){w.exports=
function(){this.input=null;this.total_in=this.avail_in=this.next_in=0;this.output=null;this.total_out=this.avail_out=this.next_out=0;this.msg="";this.state=null;this.data_type=2;this.adler=0}},{}],"/lib/inflate.js":[function(x,w,g){function E(c,h){h=new I(h);h.push(c,!0);if(h.err)throw h.msg;return h.result}var z=x("./zlib/inflate.js"),m=x("./utils/common"),k=x("./utils/strings"),h=x("./zlib/constants"),d=x("./zlib/messages"),c=x("./zlib/zstream"),n=x("./zlib/gzheader"),A=Object.prototype.toString,
I=function(g){var k=this.options=m.assign({chunkSize:16384,windowBits:0,to:""},g||{});k.raw&&0<=k.windowBits&&16>k.windowBits&&(k.windowBits=-k.windowBits,0===k.windowBits&&(k.windowBits=-15));!(0<=k.windowBits&&16>k.windowBits)||g&&g.windowBits||(k.windowBits+=32);15<k.windowBits&&48>k.windowBits&&0===(k.windowBits&15)&&(k.windowBits|=15);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.strm=new c;this.strm.avail_out=0;g=z.inflateInit2(this.strm,k.windowBits);if(g!==h.Z_OK)throw Error(d[g]);
this.header=new n;z.inflateGetHeader(this.strm,this.header)};I.prototype.push=function(c,g){var d=this.strm,n=this.options.chunkSize;if(this.ended)return!1;g=g===~~g?g:!0===g?h.Z_FINISH:h.Z_NO_FLUSH;"string"===typeof c?d.input=k.binstring2buf(c):"[object ArrayBuffer]"===A.call(c)?d.input=new Uint8Array(c):d.input=c;d.next_in=0;d.avail_in=d.input.length;do{0===d.avail_out&&(d.output=new m.Buf8(n),d.next_out=0,d.avail_out=n);c=z.inflate(d,h.Z_NO_FLUSH);if(c!==h.Z_STREAM_END&&c!==h.Z_OK)return this.onEnd(c),
this.ended=!0,!1;if(d.next_out&&(0===d.avail_out||c===h.Z_STREAM_END||0===d.avail_in&&(g===h.Z_FINISH||g===h.Z_SYNC_FLUSH)))if("string"===this.options.to){var b=k.utf8border(d.output,d.next_out);var p=d.next_out-b;var w=k.buf2string(d.output,b);d.next_out=p;d.avail_out=n-p;p&&m.arraySet(d.output,d.output,b,p,0);this.onData(w)}else this.onData(m.shrinkBuf(d.output,d.next_out))}while(0<d.avail_in&&c!==h.Z_STREAM_END);c===h.Z_STREAM_END&&(g=h.Z_FINISH);if(g===h.Z_FINISH)return c=z.inflateEnd(this.strm),
this.onEnd(c),this.ended=!0,c===h.Z_OK;g===h.Z_SYNC_FLUSH&&(this.onEnd(h.Z_OK),d.avail_out=0);return!0};I.prototype.onData=function(c){this.chunks.push(c)};I.prototype.onEnd=function(c){c===h.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):m.flattenChunks(this.chunks));this.chunks=[];this.err=c;this.msg=this.strm.msg};g.Inflate=I;g.inflate=E;g.inflateRaw=function(c,d){d=d||{};d.raw=!0;return E(c,d)};g.ungzip=E},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,
"./zlib/inflate.js":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")});
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(b){var c=0;return $jscomp.iteratorPrototype(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.makeIterator=function(b){$jscomp.initSymbolIterator();var c=b[Symbol.iterator];return c?c.call(b):$jscomp.arrayIterator(b)};
$jscomp.polyfill=function(b,c,d,h){if(c){d=$jscomp.global;b=b.split(".");for(h=0;h<b.length-1;h++){var e=b[h];e in d||(d[e]={});d=d[e]}b=b[b.length-1];h=d[b];c=c(h);c!=h&&null!=c&&$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:c})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(b){function c(){this.batch_=null}function d(b){return b instanceof e?b:new e(function(c,g){c(b)})}if(b&&!$jscomp.FORCE_POLYFILL_PROMISE)return b;c.prototype.asyncExecute=function(b){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(b);return this};c.prototype.asyncExecuteBatch_=function(){var b=this;this.asyncExecuteFunction(function(){b.executeBatch_()})};var h=$jscomp.global.setTimeout;c.prototype.asyncExecuteFunction=function(b){h(b,
0)};c.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var b=this.batch_;this.batch_=[];for(var c=0;c<b.length;++c){var d=b[c];delete b[c];try{d()}catch(u){this.asyncThrow_(u)}}}this.batch_=null};c.prototype.asyncThrow_=function(b){this.asyncExecuteFunction(function(){throw b;})};var e=function(b){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var c=this.createResolveAndReject_();try{b(c.resolve,c.reject)}catch(p){c.reject(p)}};e.prototype.createResolveAndReject_=
function(){function b(b){return function(g){d||(d=!0,b.call(c,g))}}var c=this,d=!1;return{resolve:b(this.resolveTo_),reject:b(this.reject_)}};e.prototype.resolveTo_=function(b){if(b===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof e)this.settleSameAsPromise_(b);else{a:switch(typeof b){case "object":var c=null!=b;break a;case "function":c=!0;break a;default:c=!1}c?this.resolveToNonPromiseObj_(b):this.fulfill_(b)}};e.prototype.resolveToNonPromiseObj_=function(b){var c=
void 0;try{c=b.then}catch(p){this.reject_(p);return}"function"==typeof c?this.settleSameAsThenable_(c,b):this.fulfill_(b)};e.prototype.reject_=function(b){this.settle_(2,b)};e.prototype.fulfill_=function(b){this.settle_(1,b)};e.prototype.settle_=function(b,c){if(0!=this.state_)throw Error("Cannot settle("+b+", "+c|"): Promise already settled in state"+this.state_);this.state_=b;this.result_=c;this.executeOnSettledCallbacks_()};e.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var b=
this.onSettledCallbacks_,c=0;c<b.length;++c)b[c].call(),b[c]=null;this.onSettledCallbacks_=null}};var t=new c;e.prototype.settleSameAsPromise_=function(b){var c=this.createResolveAndReject_();b.callWhenSettled_(c.resolve,c.reject)};e.prototype.settleSameAsThenable_=function(b,c){var d=this.createResolveAndReject_();try{b.call(c,d.resolve,d.reject)}catch(u){d.reject(u)}};e.prototype.then=function(b,c){function d(b,c){return"function"==typeof b?function(c){try{g(b(c))}catch(x){m(x)}}:c}var g,m,l=new e(function(b,
c){g=b;m=c});this.callWhenSettled_(d(b,g),d(c,m));return l};e.prototype.catch=function(b){return this.then(void 0,b)};e.prototype.callWhenSettled_=function(b,c){function d(){switch(g.state_){case 1:b(g.result_);break;case 2:c(g.result_);break;default:throw Error("Unexpected state: "+g.state_);}}var g=this;null==this.onSettledCallbacks_?t.asyncExecute(d):this.onSettledCallbacks_.push(function(){t.asyncExecute(d)})};e.resolve=d;e.reject=function(b){return new e(function(c,d){d(b)})};e.race=function(b){return new e(function(c,
g){for(var h=$jscomp.makeIterator(b),m=h.next();!m.done;m=h.next())d(m.value).callWhenSettled_(c,g)})};e.all=function(b){var c=$jscomp.makeIterator(b),g=c.next();return g.done?d([]):new e(function(b,m){function l(c){return function(l){n[c]=l;h--;0==h&&b(n)}}var n=[],h=0;do n.push(void 0),h++,d(g.value).callWhenSettled_(l(n.length-1),m),g=c.next();while(!g.done)})};return e},"es6","es3");
$jscomp.checkStringArgs=function(b,c,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""};
$jscomp.polyfill("String.prototype.repeat",function(b){return b?b:function(b){var c=$jscomp.checkStringArgs(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var h="";b;)if(b&1&&(h+=c),b>>>=1)c+=c;return h}},"es6","es3");
$jscomp.polyfill("String.prototype.startsWith",function(b){return b?b:function(b,d){var c=$jscomp.checkStringArgs(this,b,"startsWith");b+="";var e=c.length,t=b.length;d=Math.max(0,Math.min(d|0,c.length));for(var g=0;g<t&&d<e;)if(c[d++]!=b[g++])return!1;return g>=t}},"es6","es3");
$jscomp.polyfill("String.prototype.endsWith",function(b){return b?b:function(b,d){var c=$jscomp.checkStringArgs(this,b,"endsWith");b+="";void 0===d&&(d=c.length);d=Math.max(0,Math.min(d|0,c.length));for(var e=b.length;0<e&&0<d;)if(c[--d]!=b[--e])return!1;return 0>=e}},"es6","es3");
$jscomp.polyfill("Array.prototype.fill",function(b){return b?b:function(b,d,h){var c=this.length||0;0>d&&(d=Math.max(0,c+d));if(null==h||h>c)h=c;h=Number(h);0>h&&(h=Math.max(0,c+h));for(d=Number(d||0);d<h;d++)this[d]=b;return this}},"es6","es3");
$jscomp.iteratorFromArray=function(b,c){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var d=0,h={next:function(){if(d<b.length){var e=d++;return{value:c(e,b[e]),done:!1}}h.next=function(){return{done:!0,value:void 0}};return h.next()}};h[Symbol.iterator]=function(){return h};return h};$jscomp.polyfill("Array.prototype.keys",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");
$jscomp.polyfill("Object.is",function(b){return b?b:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}},"es6","es3");$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(b,d){var c=this;c instanceof String&&(c=String(c));var e=c.length;for(d=d||0;d<e;d++)if(c[d]==b||Object.is(c[d],b))return!0;return!1}},"es7","es3");
$jscomp.polyfill("String.prototype.includes",function(b){return b?b:function(b,d){return-1!==$jscomp.checkStringArgs(this,b,"includes").indexOf(b,d||0)}},"es6","es3");$jscomp.polyfill("Number.isFinite",function(b){return b?b:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}},"es6","es3");$jscomp.polyfill("Number.isInteger",function(b){return b?b:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}},"es6","es3");$3Dmol=function(b){return b.$3Dmol||{}}(window);
 true&&"object"===typeof module.exports&&(module.exports=$3Dmol);$3Dmol.notrack||$.get("https://3dmol.csb.pitt.edu/track/report.cgi");String.prototype.startsWith||(String.prototype.startsWith=function(b){return 0===this.lastIndexOf(b,0)});String.prototype.endsWith||(String.prototype.endsWith=function(b){return-1!==this.indexOf(b,this.length-b.length)});
$.ajaxTransport("+binary",function(b,c,d){if(window.FormData&&(b.dataType&&"binary"==b.dataType||b.data&&(window.ArrayBuffer&&b.data instanceof ArrayBuffer||window.Blob&&b.data instanceof Blob)))return{send:function(c,d){var e=new XMLHttpRequest,g=b.url,h=b.type,p=b.async||!0,u=b.responseType||"blob",m=b.data||null,l=b.username||null,n=b.password||null,y=function(){var c={};c[b.dataType]=e.response;d(e.status,e.statusText,c,e.getAllResponseHeaders())};e.addEventListener("load",y);e.addEventListener("error",
y);e.addEventListener("abort",y);e.open(h,g,p,l,n);for(var f in c)e.setRequestHeader(f,c[f]);e.responseType=u;e.send(m)},abort:function(){d.abort()}}});$3Dmol.createViewer=function(b,c){"string"===$.type(b)&&(b=$("#"+b));if(b){c=c||{};try{return new $3Dmol.GLViewer(b,c)}catch(d){throw"error creating viewer: "+d;}}};
$3Dmol.createViewerGrid=function(b,c,d){"string"===$.type(b)&&(b=$("#"+b));if(b){c=c||{};d=d||{};var h=[],e=document.createElement("canvas");d.rows=c.rows;d.cols=c.cols;d.control_all=void 0!=c.control_all?c.control_all:!1;$(b).append($(e));try{for(var t=0;t<c.rows;t++){for(var g=[],q=0;q<c.cols;q++){d.row=t;d.col=q;d.canvas=e;d.viewers=h;d.control_all=c.control_all;var p=$3Dmol.createViewer(b,d);g.push(p)}h.unshift(g)}}catch(u){throw"error creating viewer grid: "+u;}return h}};$3Dmol.viewers={};
$3Dmol.getbin=function(b,c,d,h){var e=new Promise(function(c,g){d=void 0==d?"GET":d;$.ajax({url:b,dataType:"binary",method:d,data:h,responseType:"arraybuffer",processData:!1}).done(function(b,d,g){c(b)}).fail(function(b,c){console.log(c);g()})});return c?e.then(c):e};$3Dmol.base64ToArray=function(b){b=window.atob(b);for(var c=b.length,d=new Uint8Array(c),h=0;h<c;h++)d[h]=b.charCodeAt(h);return d};
$3Dmol.download=function(b,c,d,h){var e="",t="";t="";var g=c.addModel();if("mmtf:"===b.substr(0,5)){t=d&&d.pdbUri?d.pdbUri:"https://mmtf.rcsb.org/v1.0/full/";b=b.substr(5).toUpperCase();var q=t+b;d&&"undefined"===typeof d.noComputeSecondaryStructure&&(d.noComputeSecondaryStructure=!0);b=new Promise(function(b,m){$3Dmol.getbin(q).then(function(l){g.addMolData(l,"mmtf",d);c.zoomTo();c.render();b(g)})})}else{if("pdb:"===b.substr(0,4)){e="mmtf";d&&d.format&&(e=d.format);d&&"undefined"===typeof d.noComputeSecondaryStructure&&
(d.noComputeSecondaryStructure=!0);b=b.substr(4).toUpperCase();if(!b.match(/^[1-9][A-Za-z0-9]{3}$/)){alert("Wrong PDB ID");return}"mmtf"==e?(t=d&&d.mmtfUri?d.mmtfUri:"https://mmtf.rcsb.org/v1.0/full/",q=t+b.toUpperCase()):(t=d&&d.pdbUri?d.pdbUri:"https://files.rcsb.org/view/",q=t+b+"."+e)}else if("cid:"==b.substr(0,4)){e="sdf";b=b.substr(4);if(!b.match(/^[0-9]+$/)){alert("Wrong Compound ID");return}q="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/"+b+"/SDF?record_type=3d"}else"url:"==b.substr(0,
4)&&(e=q=b.substr(4));var p=function(b){g.addMolData(b,e,d);c.zoomTo();c.render()};b=new Promise(function(b,c){"mmtf"==e?$3Dmol.getbin(q).then(function(c){p(c);b(g)}):$.get(q,function(c){p(c);b(g)}).fail(function(b){console.log("fetch of "+q+" failed: "+b.statusText)})})}return h?(b.then(function(b){h(b)}),g):b};$3Dmol.SurfaceType={VDW:1,MS:2,SAS:3,SES:4};$3Dmol.mergeGeos=function(b,c){c=c.geometry;void 0!==c&&b.geometryGroups.push(c.geometryGroups[0])};
$3Dmol.multiLineString=function(b){return b.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"")};$3Dmol.syncSurface=!1;if(0<=window.navigator.userAgent.indexOf("MSIE ")||0<=window.navigator.userAgent.indexOf("Trident/"))$3Dmol.syncSurface=!0;
$3Dmol.specStringToObject=function(b){if("object"===typeof b||"undefined"===typeof b||null==b)return b;b=b.replace(/%7E/,"~");var c=function(b){return $.isNumeric(b)?Math.floor(parseFloat(b))==parseInt(b)?parseFloat(b):0<=b.indexOf(".")?parseFloat(b):parseInt(b):"true"===b?!0:"false"===b?!1:b},d={};if("all"===b)return d;b=b.split(";");for(var h=0;h<b.length;h++){var e=b[h].split(":"),t=e[0],g={};if(e=e[1])if(e=e.replace(/~/g,"="),-1!==e.indexOf("=")){e=e.split(",");for(var q=0;q<e.length;q++){var p=
e[q].split("=",2);g[p[0]]=c(p[1])}}else g=-1!==e.indexOf(",")?e.split(","):c(e);d[t]=g}return d};
$3Dmol.getExtent=function(b,c){var d,h,e,t,g,q,p,u=!c;c=d=h=9999;var m=e=t=-9999;var l=g=q=p=0;if(0===b.length)return[[0,0,0],[0,0,0],[0,0,0]];for(var n=0;n<b.length;n++){var y=b[n];if("undefined"!==typeof y&&isFinite(y.x)&&isFinite(y.y)&&isFinite(y.z)&&(p++,l+=y.x,g+=y.y,q+=y.z,c=c<y.x?c:y.x,d=d<y.y?d:y.y,h=h<y.z?h:y.z,m=m>y.x?m:y.x,e=e>y.y?e:y.y,t=t>y.z?t:y.z,y.symmetries&&u))for(var f=0;f<y.symmetries.length;f++)p++,l+=y.symmetries[f].x,g+=y.symmetries[f].y,q+=y.symmetries[f].z,c=c<y.symmetries[f].x?
c:y.symmetries[f].x,d=d<y.symmetries[f].y?d:y.symmetries[f].y,h=h<y.symmetries[f].z?h:y.symmetries[f].z,m=m>y.symmetries[f].x?m:y.symmetries[f].x,e=e>y.symmetries[f].y?e:y.symmetries[f].y,t=t>y.symmetries[f].z?t:y.symmetries[f].z}return[[c,d,h],[m,e,t],[l/p,g/p,q/p]]};$3Dmol.getAtomProperty=function(b,c){var d=null;b.properties&&"undefined"!=typeof b.properties[c]?d=b.properties[c]:"undefined"!=typeof b[c]&&(d=b[c]);return d};
$3Dmol.getPropertyRange=function(b,c){for(var d=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,e=0,t=b.length;e<t;e++){var g=$3Dmol.getAtomProperty(b[e],c);null!=g&&(g<d&&(d=g),g>h&&(h=g))}isFinite(d)||isFinite(h)?isFinite(d)?isFinite(h)||(h=d):d=h:d=h=0;return[d,h]}; true&&!(__WEBPACK_AMD_DEFINE_FACTORY__ = ($3Dmol),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
$3Dmol.createStereoViewer=function(b){var c=this;"string"===$.type(b)&&(b=$("#"+b));if(b){b=$3Dmol.createViewerGrid(b,{rows:1,cols:2,control_all:!0});this.glviewer1=b[0][0];this.glviewer2=b[0][1];this.glviewer1.setAutoEyeSeparation(!1);this.glviewer2.setAutoEyeSeparation(!0);this.glviewer1.linkViewer(this.glviewer2);this.glviewer2.linkViewer(this.glviewer1);b=Object.getOwnPropertyNames(this.glviewer1).filter(function(b){return"function"==typeof c.glviewer1[b]});for(var d=0;d<b.length;d++)this[b[d]]=
function(b){return function(){var c=this.glviewer1[b].apply(this.glviewer1,arguments),d=this.glviewer2[b].apply(this.glviewer2,arguments);return[c,d]}}(b[d]);this.setCoordinates=function(b,c,d){for(var g=0;g<b.length;g++)b[g].setCoordinates(c,d)};this.surfacesFinished=function(){return this.glviewer1.surfacesFinished()&&this.glviewer2.surfacesFinished()};this.isAnimated=function(){return this.glviewer1.isAnimated()||this.glviewer2.isAnimated()};this.render=function(b){this.glviewer1.render();this.glviewer2.render();
b&&b(this)};this.getCanvas=function(){return this.glviewer1.getCanvas()}}};var $3Dmol=$3Dmol||{};$3Dmol.Math={clamp:function(b,c,d){return Math.min(Math.max(b,c),d)},degToRad:function(){var b=Math.PI/180;return function(c){return c*b}}()};$3Dmol.Quaternion=function(b,c,d,h){this.x=b||0;this.y=c||0;this.z=d||0;this.w=void 0!==h?h:1};
$3Dmol.Quaternion.prototype={constructor:$3Dmol.Quaternion,set:function(b,c,d,h){this.x=b;this.y=c;this.z=d;this.w=h;return this},copy:function(b){this.x=b.x;this.y=b.y;this.z=b.z;this.w=b.w;return this},conjugate:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},inverse:function(){return this.conjugate().normalize()},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var b=this.length();0===b?(this.z=this.y=this.x=0,this.w=1):
(b=1/b,this.x*=b,this.y*=b,this.z*=b,this.w*=b);return this},multiply:function(b){return this.multiplyQuaternions(this,b)},multiplyScalar:function(b){this.x*=b;this.y*=b;this.z*=b;this.w*=b;return this},multiplyQuaternions:function(b,c){var d=b.x,h=b.y,e=b.z;b=b.w;var t=c.x,g=c.y,q=c.z;c=c.w;this.x=d*c+b*t+h*q-e*g;this.y=h*c+b*g+e*t-d*q;this.z=e*c+b*q+d*g-h*t;this.w=b*c-d*t-h*g-e*q;return this},sub:function(b){this.x-=b.x;this.y-=b.y;this.z-=b.z;this.w-=b.w;return this},clone:function(){return new $3Dmol.Quaternion(this.x,
this.y,this.z,this.w)},setFromEuler:function(b){var c=Math.cos(b.x/2),d=Math.cos(b.y/2),h=Math.cos(b.z/2),e=Math.sin(b.x/2),t=Math.sin(b.y/2);b=Math.sin(b.z/2);this.x=e*d*h+c*t*b;this.y=c*t*h-e*d*b;this.z=c*d*b+e*t*h;this.w=c*d*h-e*t*b;return this}};$3Dmol.Vector2=function(b,c){this.x=b||0;this.y=c||0};
$3Dmol.Vector2.prototype={constructor:$3Dmol.Vector2,set:function(b,c){this.x=b;this.y=c;return this},subVectors:function(b,c){this.x=b.x-c.x;this.y=b.y-c.y;return this},copy:function(b){this.x=b.x;this.y=b.y;return this},clone:function(){return new $3Dmol.Vector2(this.x,this.y)}};$3Dmol.Vector3=function(b,c,d){this.x=b||0;this.y=c||0;this.z=d||0};
$3Dmol.Vector3.prototype={constructor:$3Dmol.Vector3,set:function(b,c,d){this.x=b;this.y=c;this.z=d;return this},copy:function(b){this.x=b.x;this.y=b.y;this.z=b.z;return this},add:function(b){this.x+=b.x;this.y+=b.y;this.z+=b.z;return this},addVectors:function(b,c){this.x=b.x+c.x;this.y=b.y+c.y;this.z=b.z+c.z;return this},sub:function(b){this.x-=b.x;this.y-=b.y;this.z-=b.z;return this},subVectors:function(b,c){this.x=b.x-c.x;this.y=b.y-c.y;this.z=b.z-c.z;return this},multiplyScalar:function(b){this.x*=
b;this.y*=b;this.z*=b;return this},divideScalar:function(b){0!==b?(this.x/=b,this.y/=b,this.z/=b):this.z=this.y=this.x=0;return this},max:function(b){this.x=Math.max(this.x,b.x);this.y=Math.max(this.y,b.y);this.z=Math.max(this.z,b.z);return this},min:function(b){this.x=Math.min(this.x,b.x);this.y=Math.min(this.y,b.y);this.z=Math.min(this.z,b.z);return this},distanceTo:function(b){return Math.sqrt(this.distanceToSquared(b))},distanceToSquared:function(b){var c=this.x-b.x,d=this.y-b.y;b=this.z-b.z;
return c*c+d*d+b*b},applyMatrix4:function(b){var c=this.x,d=this.y,h=this.z;b=b.elements;this.x=b[0]*c+b[4]*d+b[8]*h+b[12];this.y=b[1]*c+b[5]*d+b[9]*h+b[13];this.z=b[2]*c+b[6]*d+b[10]*h+b[14];return this},applyProjection:function(b){var c=this.x,d=this.y,h=this.z;b=b.elements;var e=b[3]*c+b[7]*d+b[11]*h+b[15];this.x=(b[0]*c+b[4]*d+b[8]*h+b[12])/e;this.y=(b[1]*c+b[5]*d+b[9]*h+b[13])/e;this.z=(b[2]*c+b[6]*d+b[10]*h+b[14])/e;return this},applyQuaternion:function(b){var c=this.x,d=this.y,h=this.z,e=b.x,
t=b.y,g=b.z;var q=2*(d*g-h*t);var p=2*(h*e-c*g);var u=2*(c*t-d*e);this.x=c+b.w*q+(p*g-u*t);this.y=d+b.w*p+(u*e-q*g);this.z=h+b.w*u+(q*t-p*e);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(b){return this.x*b.x+this.y*b.y+this.z*b.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},normalize:function(){return this.divideScalar(this.length())},cross:function(b){var c=this.x,
d=this.y,h=this.z;this.x=d*b.z-h*b.y;this.y=h*b.x-c*b.z;this.z=c*b.y-d*b.x;return this},crossVectors:function(b,c){this.x=b.y*c.z-b.z*c.y;this.y=b.z*c.x-b.x*c.z;this.z=b.x*c.y-b.y*c.x;return this},getPositionFromMatrix:function(b){this.x=b.elements[12];this.y=b.elements[13];this.z=b.elements[14];return this},setEulerFromRotationMatrix:function(b,c){var d=b.elements;b=d[0];var h=d[4],e=d[8],t=d[5],g=d[9],q=d[6];d=d[10];void 0===c||"XYZ"===c?(this.y=Math.asin($3Dmol.Math.clamp(e,-1,1)),.99999>Math.abs(e)?
(this.x=Math.atan2(-g,d),this.z=Math.atan2(-h,b)):(this.x=Math.atan2(q,t),this.z=0)):console.error("Error with vector's setEulerFromRotationMatrix: Unknown order: "+c);return this},rotateAboutVector:function(b,c){b.normalize();var d=Math.cos(c),h=Math.sin(c);c=this.clone().multiplyScalar(d);h=b.clone().cross(this).multiplyScalar(h);b=b.clone().multiplyScalar(b.clone().dot(this)).multiplyScalar(1-d);b=c.add(h).add(b);this.x=b.x;this.y=b.y;this.z=b.z;return this},setFromMatrixPosition:function(b){b=
b.elements;this.x=b[12];this.y=b[13];this.z=b[14];return this},transformDirection:function(b){var c=this.x,d=this.y,h=this.z;b=b.elements;this.x=b[0]*c+b[4]*d+b[8]*h;this.y=b[1]*c+b[5]*d+b[9]*h;this.z=b[2]*c+b[6]*d+b[10]*h;return this.normalize()},clone:function(){return new $3Dmol.Vector3(this.x,this.y,this.z)}};$3Dmol.Matrix3=function(b,c,d,h,e,t,g,q,p){this.elements=new Float32Array(9);this.set(void 0!==b?b:1,c||0,d||0,h||0,void 0!==e?e:1,t||0,g||0,q||0,void 0!==p?p:1)};
$3Dmol.Matrix3.prototype={constructor:$3Dmol.Matrix3,set:function(b,c,d,h,e,t,g,q,p){var u=this.elements;u[0]=b;u[3]=c;u[6]=d;u[1]=h;u[4]=e;u[7]=t;u[2]=g;u[5]=q;u[8]=p;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(b){b=b.elements;this.set(b[0],b[3],b[6],b[1],b[4],b[7],b[2],b[5],b[8])},multiplyScalar:function(b){var c=this.elements;c[0]*=b;c[3]*=b;c[6]*=b;c[1]*=b;c[4]*=b;c[7]*=b;c[2]*=b;c[5]*=b;c[8]*=b;return this},getInverse:function(b,c){b=b.elements;var d=
this.elements;d[0]=b[10]*b[5]-b[6]*b[9];d[1]=-b[10]*b[1]+b[2]*b[9];d[2]=b[6]*b[1]-b[2]*b[5];d[3]=-b[10]*b[4]+b[6]*b[8];d[4]=b[10]*b[0]-b[2]*b[8];d[5]=-b[6]*b[0]+b[2]*b[4];d[6]=b[9]*b[4]-b[5]*b[8];d[7]=-b[9]*b[0]+b[1]*b[8];d[8]=b[5]*b[0]-b[1]*b[4];b=b[0]*d[0]+b[1]*d[3]+b[2]*d[6];if(0===b){if(c)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/b);return this},
getDeterminant:function(){var b=this.elements;return b[0]*b[4]*b[8]+b[1]*b[5]*b[6]+b[2]*b[3]*b[7]-b[2]*b[4]*b[6]-b[1]*b[3]*b[8]-b[0]*b[5]*b[7]},transpose:function(){var b=this.elements;var c=b[1];b[1]=b[3];b[3]=c;c=b[2];b[2]=b[6];b[6]=c;c=b[5];b[5]=b[7];b[7]=c;return this},clone:function(){var b=this.elements;return new $3Dmol.Matrix3(b[0],b[3],b[6],b[1],b[4],b[7],b[2],b[5],b[8])}};
$3Dmol.Matrix4=function(b,c,d,h,e,t,g,q,p,u,m,l,n,y,f,x){if("undefined"===typeof c&&"undefined"!==typeof b)this.elements=new Float32Array(b);else{var w=this.elements=new Float32Array(16);w[0]=void 0!==b?b:1;w[4]=c||0;w[8]=d||0;w[12]=h||0;w[1]=e||0;w[5]=void 0!==t?t:1;w[9]=g||0;w[13]=q||0;w[2]=p||0;w[6]=u||0;w[10]=void 0!==m?m:1;w[14]=l||0;w[3]=n||0;w[7]=y||0;w[11]=f||0;w[15]=void 0!==x?x:1}};
$3Dmol.Matrix4.prototype={constructor:$3Dmol.Matrix4,set:function(b,c,d,h,e,t,g,q,p,u,m,l,n,y,f,x){var w=this.elements;w[0]=b;w[4]=c;w[8]=d;w[12]=h;w[1]=e;w[5]=t;w[9]=g;w[13]=q;w[2]=p;w[6]=u;w[10]=m;w[14]=l;w[3]=n;w[7]=y;w[11]=f;w[15]=x;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(b){b=b.elements;this.set(b[0],b[4],b[8],b[12],b[1],b[5],b[9],b[13],b[2],b[6],b[10],b[14],b[3],b[7],b[11],b[15]);return this},matrix3FromTopLeft:function(){var b=this.elements;
return new $3Dmol.Matrix3(b[0],b[4],b[8],b[1],b[5],b[9],b[2],b[6],b[10])},setRotationFromEuler:function(b,c){var d=this.elements,h=b.x,e=b.y,t=b.z;b=Math.cos(h);h=Math.sin(h);var g=Math.cos(e);e=Math.sin(e);var q=Math.cos(t);t=Math.sin(t);if(void 0===c||"XYZ"===c){c=b*q;var p=b*t,u=h*q,m=h*t;d[0]=g*q;d[4]=-g*t;d[8]=e;d[1]=p+u*e;d[5]=c-m*e;d[9]=-h*g;d[2]=m-c*e;d[6]=u+p*e;d[10]=b*g}else console.error("Error with matrix4 setRotationFromEuler. Order: "+c);return this},setRotationFromQuaternion:function(b){var c=
this.elements,d=b.x,h=b.y,e=b.z,t=b.w,g=d+d,q=h+h,p=e+e;b=d*g;var u=d*q;d*=p;var m=h*q;h*=p;e*=p;g*=t;q*=t;t*=p;c[0]=1-(m+e);c[4]=u-t;c[8]=d+q;c[1]=u+t;c[5]=1-(b+e);c[9]=h-g;c[2]=d-q;c[6]=h+g;c[10]=1-(b+m);return this},lookAt:function(){var b=new $3Dmol.Vector3,c=new $3Dmol.Vector3,d=new $3Dmol.Vector3;return function(h,e,t){var g=this.elements;d.subVectors(h,e).normalize();0===d.length()&&(d.z=1);b.crossVectors(t,d).normalize();0===b.length()&&(d.x+=1E-4,b.crossVectors(t,d).normalize());c.crossVectors(d,
b);g[0]=b.x;g[4]=c.x;g[8]=d.x;g[1]=b.y;g[5]=c.y;g[9]=d.y;g[2]=b.z;g[6]=c.z;g[10]=d.z;return this}}(),multiplyMatrices:function(b,c){var d=b.elements,h=c.elements;c=this.elements;b=d[0];var e=d[4],t=d[8],g=d[12],q=d[1],p=d[5],u=d[9],m=d[13],l=d[2],n=d[6],y=d[10],f=d[14],x=d[3],w=d[7],R=d[11];d=d[15];var P=h[0],A=h[4],T=h[8],G=h[12],C=h[1],z=h[5],D=h[9],I=h[13],K=h[2],H=h[6],N=h[10],E=h[14],L=h[3],M=h[7],F=h[11];h=h[15];c[0]=b*P+e*C+t*K+g*L;c[4]=b*A+e*z+t*H+g*M;c[8]=b*T+e*D+t*N+g*F;c[12]=b*G+e*I+t*
E+g*h;c[1]=q*P+p*C+u*K+m*L;c[5]=q*A+p*z+u*H+m*M;c[9]=q*T+p*D+u*N+m*F;c[13]=q*G+p*I+u*E+m*h;c[2]=l*P+n*C+y*K+f*L;c[6]=l*A+n*z+y*H+f*M;c[10]=l*T+n*D+y*N+f*F;c[14]=l*G+n*I+y*E+f*h;c[3]=x*P+w*C+R*K+d*L;c[7]=x*A+w*z+R*H+d*M;c[11]=x*T+w*D+R*N+d*F;c[15]=x*G+w*I+R*E+d*h;return this},multiplyScalar:function(b){var c=this.elements;c[0]*=b;c[4]*=b;c[8]*=b;c[12]*=b;c[1]*=b;c[5]*=b;c[9]*=b;c[13]*=b;c[2]*=b;c[6]*=b;c[10]*=b;c[14]*=b;c[3]*=b;c[7]*=b;c[11]*=b;c[15]*=b;return this},makeTranslation:function(b,c,d){this.set(1,
0,0,b,0,1,0,c,0,0,1,d,0,0,0,1);return this},transpose:function(){var b=this.elements;var c=b[1];b[1]=b[4];b[4]=c;c=b[2];b[2]=b[8];b[8]=c;c=b[6];b[6]=b[9];b[9]=c;c=b[3];b[3]=b[12];b[12]=c;c=b[7];b[7]=b[13];b[13]=c;c=b[11];b[11]=b[14];b[14]=c;return this},getPosition:function(){var b=new $3Dmol.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");var c=this.elements;return b.set(c[12],c[13],c[14])}}(),setPosition:function(b){var c=
this.elements;c[12]=b.x;c[13]=b.y;c[14]=b.z;return this},getInverse:function(b,c){var d=this.elements;b=b.elements;var h=b[0],e=b[4],t=b[8],g=b[12],q=b[1],p=b[5],u=b[9],m=b[13],l=b[2],n=b[6],y=b[10],f=b[14],x=b[3],w=b[7],R=b[11],P=b[15];d[0]=u*f*w-m*y*w+m*n*R-p*f*R-u*n*P+p*y*P;d[4]=g*y*w-t*f*w-g*n*R+e*f*R+t*n*P-e*y*P;d[8]=t*m*w-g*u*w+g*p*R-e*m*R-t*p*P+e*u*P;d[12]=g*u*n-t*m*n-g*p*y+e*m*y+t*p*f-e*u*f;d[1]=m*y*x-u*f*x-m*l*R+q*f*R+u*l*P-q*y*P;d[5]=t*f*x-g*y*x+g*l*R-h*f*R-t*l*P+h*y*P;d[9]=g*u*x-t*m*x-
g*q*R+h*m*R+t*q*P-h*u*P;d[13]=t*m*l-g*u*l+g*q*y-h*m*y-t*q*f+h*u*f;d[2]=p*f*x-m*n*x+m*l*w-q*f*w-p*l*P+q*n*P;d[6]=g*n*x-e*f*x-g*l*w+h*f*w+e*l*P-h*n*P;d[10]=e*m*x-g*p*x+g*q*w-h*m*w-e*q*P+h*p*P;d[14]=g*p*l-e*m*l-g*q*n+h*m*n+e*q*f-h*p*f;d[3]=u*n*x-p*y*x-u*l*w+q*y*w+p*l*R-q*n*R;d[7]=e*y*x-t*n*x+t*l*w-h*y*w-e*l*R+h*n*R;d[11]=t*p*x-e*u*x-t*q*w+h*u*w+e*q*R-h*p*R;d[15]=e*u*l-t*p*l+t*q*n-h*u*n-e*q*y+h*p*y;d=b[0]*d[0]+b[1]*d[4]+b[2]*d[8]+b[3]*d[12];if(0===d){if(c)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/d);return this},isReflected:function(){return 0>this.matrix3FromTopLeft().getDeterminant()},compose:function(){var b=new $3Dmol.Matrix4,c=new $3Dmol.Matrix4;return function(d,h,e){var t=this.elements;b.identity();b.setRotationFromQuaternion(h);c.makeScale(e.x,e.y,e.z);this.multiplyMatrices(b,c);t[12]=d.x;t[13]=d.y;t[14]=d.z;return this}}(),decompose:function(){var b=new $3Dmol.Vector3,
c=new $3Dmol.Vector3,d=new $3Dmol.Vector3,h=new $3Dmol.Matrix4;return function(e,t,g){var q=this.elements;b.set(q[0],q[1],q[2]);c.set(q[4],q[5],q[6]);d.set(q[8],q[9],q[10]);e=e instanceof $3Dmol.Vector3?e:new $3Dmol.Vector3;t=t instanceof $3Dmol.Quaternion?t:new $3Dmol.Quaternion;g=g instanceof $3Dmol.Vector3?g:new $3Dmol.Vector3;g.x=b.length();g.y=c.length();g.z=d.length();e.x=q[12];e.y=q[13];e.z=q[14];h.copy(this);h.elements[0]/=g.x;h.elements[1]/=g.x;h.elements[2]/=g.x;h.elements[4]/=g.y;h.elements[5]/=
g.y;h.elements[6]/=g.y;h.elements[8]/=g.z;h.elements[9]/=g.z;h.elements[10]/=g.z;t.setFromRotationMatrix(h);return[e,t,g]}}(),scale:function(b){var c=this.elements,d=b.x,h=b.y;b=b.z;c[0]*=d;c[4]*=h;c[8]*=b;c[1]*=d;c[5]*=h;c[9]*=b;c[2]*=d;c[6]*=h;c[10]*=b;c[3]*=d;c[7]*=h;c[11]*=b;return this},getMaxScaleOnAxis:function(){var b=this.elements;return Math.sqrt(Math.max(b[0]*b[0]+b[1]*b[1]+b[2]*b[2],Math.max(b[4]*b[4]+b[5]*b[5]+b[6]*b[6],b[8]*b[8]+b[9]*b[9]+b[10]*b[10])))},makeFrustum:function(b,c,d,h,
e,t){var g=this.elements;g[0]=2*e/(c-b);g[4]=0;g[8]=(c+b)/(c-b);g[12]=0;g[1]=0;g[5]=2*e/(h-d);g[9]=(h+d)/(h-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(t+e)/(t-e);g[14]=-2*t*e/(t-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(b,c,d,h){b=d*Math.tan($3Dmol.Math.degToRad(.5*b));var e=-b;return this.makeFrustum(e*c,b*c,e,b,d,h)},makeOrthographic:function(b,c,d,h,e,t){var g=this.elements,q=1/(c-b),p=1/(d-h),u=1/(t-e);g[0]=2*q;g[4]=0;g[8]=0;g[12]=-((c+b)*q);g[1]=0;g[5]=2*p;g[9]=0;g[13]=-((d+
h)*p);g[2]=0;g[6]=0;g[10]=-2*u;g[14]=-((t+e)*u);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},isEqual:function(b){b=b.elements;var c=this.elements;return c[0]==b[0]&&c[4]==b[4]&&c[8]==b[8]&&c[12]==b[12]&&c[1]==b[1]&&c[5]==b[5]&&c[9]==b[9]&&c[13]==b[13]&&c[2]==b[2]&&c[6]==b[6]&&c[10]==b[10]&&c[14]==b[14]&&c[3]==b[3]&&c[7]==b[7]&&c[11]==b[11]&&c[15]==b[15]?!0:!1},clone:function(){var b=this.elements;return new $3Dmol.Matrix4(b[0],b[4],b[8],b[12],b[1],b[5],b[9],b[13],b[2],b[6],b[10],b[14],b[3],b[7],b[11],
b[15])},isIdentity:function(){var b=this.elements;return 1==b[0]&&0==b[4]&&0==b[8]&&0==b[12]&&0==b[1]&&1==b[5]&&0==b[9]&&0==b[13]&&0==b[2]&&0==b[6]&&1==b[10]&&0==b[14]&&0==b[3]&&0==b[7]&&0==b[11]&&1==b[15]?!0:!1}};$3Dmol.Vector3.prototype.unproject=function(){var b=new $3Dmol.Matrix4;return function(c){b.multiplyMatrices(c.matrixWorld,b.getInverse(c.projectionMatrix));return this.applyMatrix4(b)}}();$3Dmol.Ray=function(b,c){this.origin=void 0!==b?b:new $3Dmol.Vector3;this.direction=void 0!==c?c:new $3Dmol.Vector3};
$3Dmol.Ray.prototype={constructor:$3Dmol.Ray,set:function(b,c){this.origin.copy(b);this.direction.copy(c);return this},copy:function(b){this.origin.copy(b.origin);this.direction.copy(b.direction);return this},at:function(b,c){return(c||new $3Dmol.Vector3).copy(this.direction).multiplyScalar(b).add(this.origin)},recast:function(){var b=new $3Dmol.Vector3;return function(c){this.origin.copy(this.at(c,b));return this}}(),closestPointToPoint:function(b,c){c=c||new $3Dmol.Vector3;c.subVectors(b,this.origin);
b=c.dot(this.direction);return c.copy(this.direction).multiplyScalar(b).add(this.origin)},distanceToPoint:function(b){var c=new $3Dmol.Vector3;return function(b){var d=c.subVectors(b,this.origin).dot(this.direction);c.copy(this.direction).multiplyScalar(d).add(this.origin);return c.distanceTo(b)}}(),isIntersectionCylinder:function(){},isIntersectionSphere:function(b){return this.distanceToPoint(b.center)<=b.radius},isIntersectionPlane:function(b){return 0!==b.normal.dot(this.direction)||0===b.distanceToPoint(this.origin)?
!0:!1},distanceToPlane:function(b){var c=b.normal.dot(this.direction);if(0===c){if(0===b.distanceToPoint(this.origin))return 0}else return-(this.origin.dot(b.normal)+b.constant)/c},intersectPlane:function(b,c){b=this.distanceToPlane(b);if(void 0!==b)return this.at(b,c)},applyMatrix4:function(b){this.direction.add(this.origin).applyMatrix4(b);this.origin.applyMatrix4(b);this.direction.sub(this.origin);return this},equals:function(b){return b.origin.equals(this.origin)&&b.direction.equals(this.direction)},
clone:function(){return(new $3Dmol.Ray).copy(this)}};$3Dmol.Sphere=function(b,c){this.center=void 0!==b?b:new $3Dmol.Vector3;this.radius=void 0!==c?c:0};
$3Dmol.Sphere.prototype={constructor:$3Dmol.Sphere,set:function(b,c){this.center.copy(b);this.radius=c;return this},copy:function(b){this.center.copy(b.center);this.radius=b.radius;return this},applyMatrix4:function(b){this.center.applyMatrix4(b);this.radius*=b.getMaxScaleOnAxis();return this},translate:function(b){this.center.add(b);return this},equals:function(b){return b.center.equals(this.center)&&b.radius===this.radius},clone:function(){return(new $3Dmol.Sphere).copy(this)}};
$3Dmol.Cylinder=function(b,c,d){this.c1=void 0!==b?b:new $3Dmol.Vector3;this.c2=void 0!==c?c:new $3Dmol.Vector3;this.direction=(new $3Dmol.Vector3).subVectors(this.c2,this.c1).normalize();this.radius=void 0!==d?d:0};
$3Dmol.Cylinder.prototype={constructor:$3Dmol.Cylinder,copy:function(b){this.c1.copy(b.c1);this.c2.copy(b.c2);this.direction.copy(b.direction);this.radius=b.radius;return this},lengthSq:function(){var b=new $3Dmol.Vector3;return function(){return b.subVectors(this.c2,this.c1).lengthSq()}}(),applyMatrix4:function(b){this.direction.add(this.c1).applyMatrix4(b);this.c1.applyMatrix4(b);this.c2.applyMatrix4(b);this.direction.sub(this.c1).normalize();this.radius*=b.getMaxScaleOnAxis();return this}};
$3Dmol.Triangle=function(b,c,d){this.a=void 0!==b?b:new $3Dmol.Vector3;this.b=void 0!==c?c:new $3Dmol.Vector3;this.c=void 0!==d?d:new $3Dmol.Vector3};
$3Dmol.Triangle.prototype={constructor:$3Dmol.Triangle,copy:function(b){this.a.copy(b.a);this.b.copy(b.b);this.c.copy(b.c);return this},applyMatrix4:function(b){this.a.applyMatrix4(b);this.b.applyMatrix4(b);this.c.applyMatrix4(b);return this},getNormal:function(){var b=new $3Dmol.Vector3;return function(){var c=this.a.clone();c.sub(this.b);b.subVectors(this.c,this.b);c.cross(b);c.normalize();return c}}()};
$3Dmol.EventDispatcher=function(){var b={};this.addEventListener=function(c,d){void 0===b[c]&&(b[c]=[]);-1===b[c].indexOf(d)&&b[c].push(d)};this.removeEventListener=function(c,d){d=b[c].indexOf(d);-1!==d&&b[c].splice(d,1)};this.dispatchEvent=function(c){var d=b[c.type];if(void 0!==d){c.target=this;for(var h=0,e=d.length;h<e;h++)d[h].call(this,c)}}};$3Dmol.Color=function(b){return 1<arguments.length?(this.r=arguments[0]||0,this.g=arguments[1]||0,this.b=arguments[2]||0,this):this.set(b)};
$3Dmol.Color.prototype={constructor:$3Dmol.Color,r:0,g:0,b:0,set:function(b){if(b instanceof $3Dmol.Color)return b.clone();"number"===typeof b?this.setHex(b):"object"===typeof b&&"r"in b&&"g"in b&&"b"in b&&(this.r=b.r,this.g=b.g,this.b=b.b)},setHex:function(b){b=Math.floor(b);this.r=(b>>16&255)/255;this.g=(b>>8&255)/255;this.b=(b&255)/255;return this},getHex:function(){return Math.round(255*this.r)<<16|Math.round(255*this.g)<<8|Math.round(255*this.b)},clone:function(){return new $3Dmol.Color(this.r,
this.g,this.b)},copy:function(b){this.r=b.r;this.g=b.g;this.b=b.b;return this},scaled:function(){var b={};b.r=Math.round(255*this.r);b.g=Math.round(255*this.g);b.b=Math.round(255*this.b);b.a=1;return b}};
$3Dmol.Object3D=function(){this.id=$3Dmol.Object3DIDCount++;this.name="";this.parent=void 0;this.children=[];this.position=new $3Dmol.Vector3;this.rotation=new $3Dmol.Vector3;this.matrix=new $3Dmol.Matrix4;this.matrixWorld=new $3Dmol.Matrix4;this.quaternion=new $3Dmol.Quaternion;this.eulerOrder="XYZ";this.up=new $3Dmol.Vector3(0,1,0);this.scale=new $3Dmol.Vector3(1,1,1);this.rotationAutoUpdate=this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.useQuaternion=!1;this.visible=!0};
$3Dmol.Object3D.prototype={constructor:$3Dmol.Object3D,lookAt:function(b){this.matrix.lookAt(b,this.position,this.up);this.rotationAutoUpdate&&(!0===this.useQuaternion?this.quaternion.copy(this.matrix.decompose()[1]):this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder))},add:function(b){if(b===this)console.error("Can't add $3Dmol.Object3D to itself");else{b.parent=this;this.children.push(b);for(var c=this;void 0!==c.parent;)c=c.parent;void 0!==c&&c instanceof $3Dmol.Scene&&c.__addObject(b)}},
remove:function(b){var c=this.children.indexOf(b);if(-1!==c){b.parent=void 0;this.children.splice(c,1);for(c=this;void 0!==c.parent;)c=c.parent;void 0!==c&&c instanceof $3Dmol.Scene&&c.__removeObject(b)}},updateMatrix:function(){this.matrix.setPosition(this.position);!1===this.useQuaternion?this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder):this.matrix.setRotationFromQuaternion(this.quaternion);1===this.scale.x&&1===this.scale.y&&1===this.scale.z||this.matrix.scale(this.scale);this.matrixWorldNeedsUpdate=
!0},updateMatrixWorld:function(b){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===b)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1;for(b=0;b<this.children.length;b++)this.children[b].updateMatrixWorld(!0)},clone:function(b){void 0===b&&(b=new $3Dmol.Object3D);b.name=this.name;b.up.copy(this.up);b.position.copy(this.position);b.rotation.copy(this.rotation);
b.eulerOrder=this.eulerOrder;b.scale.copy(this.scale);b.rotationAutoUpdate=this.rotationAutoUpdate;b.matrix.copy(this.matrix);b.matrixWorld.copy(this.matrixWorld);b.quaternion.copy(this.quaternion);b.matrixAutoUpdate=this.matrixAutoUpdate;b.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;b.useQuaternion=this.useQuaternion;b.visible=this.visible;for(var c=0;c<this.children.length;c++)b.add(this.children[c].clone());return b},setVisible:function(b){this.visible=b;for(var c=0;c<this.children.length;c++)this.children[c].setVisible(b)}};
$3Dmol.Object3DIDCount=0;
$3Dmol.Geometry=function(){var b=function(b){this.id=b||0;this.lineArray=this.radiusArray=this.faceArray=this.normalArray=this.colorArray=this.vertexArray=null;this.lineidx=this.faceidx=this.vertices=0};b.prototype.setColors=function(b){var c=this.vertexArray,d=this.colorArray;if(c.length!=d.length)console.log("Cannot re-color geometry group due to mismatched lengths.");else for(var g=0;g<c.length;g+=3){var h=b(c[g],c[g+1],c[g+2]);h instanceof $3Dmol.Color||(h=$3Dmol.CC.color(h));d[g]=h.r;d[g+1]=
h.g;d[g+2]=h.b}};b.prototype.getNumVertices=function(){return this.vertices};b.prototype.getVertices=function(){return this.vertexArray};b.prototype.getCentroid=function(){for(var b=new $3Dmol.Vector3,c,d,g,q=0;q<this.vertices;++q)c=3*q,d=this.vertexArray[c],g=this.vertexArray[c+1],c=this.vertexArray[c+2],b.x+=d,b.y+=g,b.z+=c;b.divideScalar(this.vertices);return b};b.prototype.setNormals=function(){var b=this.faceArray,c=this.vertexArray,d=this.normalArray;if(this.vertices&&this.faceidx)for(var g,
q,p,u,m,l,n=0;n<b.length/3;++n)g=3*b[3*n],q=3*b[3*n+1],p=3*b[3*n+2],u=new $3Dmol.Vector3(c[g],c[g+1],c[g+2]),m=new $3Dmol.Vector3(c[q],c[q+1],c[q+2]),l=new $3Dmol.Vector3(c[p],c[p+1],c[p+2]),u.subVectors(u,m),l.subVectors(l,m),l.cross(u),u=l,u.normalize(),d[g]+=u.x,d[q]+=u.x,d[p]+=u.x,d[g+1]+=u.y,d[q+1]+=u.y,d[p+1]+=u.y,d[g+2]+=u.z,d[q+2]+=u.z,d[p+2]+=u.z};b.prototype.setLineIndices=function(){if(this.faceidx&&(!this.lineArray||this.lineArray.length!=2*this.faceidx||this.lineidx!=2*this.faceidx)){var b=
this.faceArray,c=this.lineArray=new Uint16Array(2*this.faceidx);this.lineidx=2*this.faceidx;for(var d=0;d<this.faceidx/3;++d){var g=3*d,q=2*g,p=b[g],u=b[g+1];g=b[g+2];c[q]=p;c[q+1]=u;c[q+2]=p;c[q+3]=g;c[q+4]=u;c[q+5]=g}}};b.prototype.truncateArrayBuffers=function(b,c){b=!0===b?!0:!1;var d=this.colorArray,g=this.normalArray,e=this.faceArray,h=this.lineArray,u=this.radiusArray;this.vertexArray=this.vertexArray.subarray(0,3*this.vertices);this.colorArray=d.subarray(0,3*this.vertices);b?(this.normalArray=
g.subarray(0,3*this.vertices),this.faceArray=e.subarray(0,this.faceidx),this.lineArray=0<this.lineidx?h.subarray(0,this.lineidx):new Uint16Array(0)):(this.normalArray=new Float32Array(0),this.faceArray=new Uint16Array(0),this.lineArray=new Uint16Array(0));u&&(this.radiusArray=u.subarray(0,this.vertices));c&&(this.normalArray&&(this.normalArray=new Float32Array(this.normalArray)),this.faceArray&&(this.faceArray=new Uint16Array(this.faceArray)),this.lineArray&&(this.lineArray=new Uint16Array(this.lineArray)),
this.vertexArray&&(this.vertexArray=new Float32Array(this.vertexArray)),this.colorArray&&(this.colorArray=new Float32Array(this.colorArray)),this.radiusArray&&(this.radiusArray=new Float32Array(this.radiusArray)));this.__inittedArrays=!0};var c=function(c){var d=new b(c.geometryGroups.length);c.geometryGroups.push(d);c.groups=c.geometryGroups.length;d.vertexArray=new Float32Array(196605);d.colorArray=new Float32Array(196605);c.mesh&&(d.normalArray=new Float32Array(196605),d.faceArray=new Uint16Array(393210),
d.lineArray=new Uint16Array(393210));c.radii&&(d.radiusArray=new Float32Array(65535));d.useOffset=c.offset;return d},d=function(b,c,d){$3Dmol.EventDispatcher.call(this);this.id=$3Dmol.GeometryIDCount++;this.name="";this.hasTangents=!1;this.dynamic=!0;this.mesh=!0===b?!0:!1;this.radii=c||!1;this.offset=d||!1;this.buffersNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1;this.geometryGroups=[];this.groups=0};d.prototype={constructor:d,updateGeoGroup:function(b){var d=
0<this.groups?this.geometryGroups[this.groups-1]:null;if(!d||d.vertices+(b||0)>d.vertexArray.length/3)d=c(this);return d},addGeoGroup:function(){return c(this)},setUpNormals:function(b){b=b||!1;for(var c=0;c<this.groups;c++)this.geometryGroups[c].setNormals(b)},setColors:function(b){for(var c=this.geometryGroups.length,d=0;d<c;d++)this.geometryGroups[d].setColors(b)},setUpWireframe:function(){for(var b=0;b<this.groups;b++)this.geometryGroups[b].setLineIndices()},initTypedArrays:function(){for(var b=
0;b<this.groups;b++){var c=this.geometryGroups[b];!0!==c.__inittedArrays&&c.truncateArrayBuffers(this.mesh,!1)}},dispose:function(){this.dispatchEvent({type:"dispose"})}};return d}();Object.defineProperty($3Dmol.Geometry.prototype,"vertices",{get:function(){for(var b=0,c=0;c<this.groups;c++)b+=this.geometryGroups[c].vertices;return b}});$3Dmol.GeometryIDCount=0;
$3Dmol.Raycaster=function(){var b=function(b,c,n,d){this.ray=new $3Dmol.Ray(b,c);0<this.ray.direction.lengthSq()&&this.ray.direction.normalize();this.near=d||0;this.far=n||Infinity},c=new $3Dmol.Sphere,d=new $3Dmol.Cylinder,h=new $3Dmol.Triangle,e=new $3Dmol.Vector3,t=new $3Dmol.Vector3,g=new $3Dmol.Vector3,q=new $3Dmol.Vector3;new $3Dmol.Ray;new $3Dmol.Vector3;var p=new $3Dmol.Vector3;new $3Dmol.Matrix4;var u=function(b,c){return b.distance-c.distance};b.prototype.precision=1E-4;b.prototype.linePrecision=
.2;b.prototype.set=function(b,c){this.ray.set(b,c)};b.prototype.setFromCamera=function(){var b=new $3Dmol.Matrix4;return function(c,n){n.ortho?(this.ray.origin.set(c.x,c.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld)):(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(c.x,c.y,c.z),n.projectionMatrixInverse.getInverse(n.projectionMatrix),b.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),this.ray.direction.applyProjection(b),
this.ray.direction.sub(this.ray.origin).normalize())}}();b.prototype.intersectObjects=function(b,l){for(var n=[],m=0,f=l.length;m<f;m++)a:{var x=b,w=l[m],R=n;p.getPositionFromMatrix(x.matrixWorld);if(void 0!==w.intersectionShape){var P=w.intersectionShape;var A=this.linePrecision;A*=x.matrixWorld.getMaxScaleOnAxis();var T=A*A;if(void 0!==w.boundingSphere&&w.boundingSphere instanceof $3Dmol.Sphere&&(c.copy(w.boundingSphere),c.applyMatrix4(x.matrixWorld),!this.ray.isIntersectionSphere(c)))break a;var G=
0;for(A=P.triangle.length;G<A;G++)if(P.triangle[G]instanceof $3Dmol.Triangle){h.copy(P.triangle[G]);h.applyMatrix4(x.matrixWorld);var C=h.getNormal();var z=this.ray.direction.dot(C);if(!(0<=z)){e.subVectors(h.a,this.ray.origin);var D=C.dot(e)/z;if(!(0>D)){t.copy(this.ray.direction).multiplyScalar(D).add(this.ray.origin);t.sub(h.a);g.copy(h.b).sub(h.a);q.copy(h.c).sub(h.a);z=g.dot(q);var I=g.lengthSq();C=q.lengthSq();C=(I*t.dot(q)-z*t.dot(g))/(I*C-z*z);0>C||1<C||(z=(t.dot(g)-C*z)/I,0>z||1<z||1<z+C||
R.push({clickable:w,distance:D}))}}}G=0;for(A=P.cylinder.length;G<A;G++)if(P.cylinder[G]instanceof $3Dmol.Cylinder){d.copy(P.cylinder[G]);d.applyMatrix4(x.matrixWorld);e.subVectors(d.c1,this.ray.origin);var K=e.dot(d.direction);I=e.dot(this.ray.direction);z=Math.min(Math.max(this.ray.direction.dot(d.direction),-1),1);C=1-z*z;if(0!==C){var H=(z*I-K)/C;var N=(I-z*K)/C;t.copy(d.direction).multiplyScalar(H).add(d.c1);g.copy(this.ray.direction).multiplyScalar(N).add(this.ray.origin);var E=q.subVectors(t,
g).lengthSq();H=d.radius*d.radius;E<=H&&(H=(z*K-I)*(z*K-I)-C*(e.lengthSq()-K*K-H),C=0>=H?D=Math.sqrt(E):D=(I-z*K-Math.sqrt(H))/C,z=z*C-K,0>z||z*z>d.lengthSq()||0>C||R.push({clickable:w,distance:D}))}}G=0;for(A=P.line.length;G<A;G+=2)t.copy(P.line[G]),t.applyMatrix4(x.matrixWorld),g.copy(P.line[G+1]),g.applyMatrix4(x.matrixWorld),q.subVectors(g,t),K=q.lengthSq(),q.normalize(),e.subVectors(t,this.ray.origin),E=e.dot(q),I=e.dot(this.ray.direction),z=Math.min(Math.max(this.ray.direction.dot(q),-1),1),
C=1-z*z,0!==C&&(H=(z*I-E)/C,N=(I-z*E)/C,t.add(q.multiplyScalar(H)),g.copy(this.ray.direction).multiplyScalar(N).add(this.ray.origin),E=q.subVectors(g,t).lengthSq(),E<T&&H*H<K&&R.push({clickable:w,distance:N}));G=0;for(A=P.sphere.length;G<A;G++)if(P.sphere[G]instanceof $3Dmol.Sphere&&(c.copy(P.sphere[G]),c.applyMatrix4(x.matrixWorld),this.ray.isIntersectionSphere(c))){t.subVectors(c.center,this.ray.origin);x=t.dot(this.ray.direction);H=x*x-(t.lengthSq()-c.radius*c.radius);if(0>x)break a;D=0>=H?x:x-
Math.sqrt(H);R.push({clickable:w,distance:D});break a}}}n.sort(u);return n};return b}();$3Dmol.Projector=function(){new $3Dmol.Matrix4;var b=new $3Dmol.Matrix4;this.projectVector=function(c,d){d.matrixWorldInverse.getInverse(d.matrixWorld);b.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse);return c.applyProjection(b)};this.unprojectVector=function(c,d){d.projectionMatrixInverse.getInverse(d.projectionMatrix);b.multiplyMatrices(d.matrixWorld,d.projectionMatrixInverse);return c.applyProjection(b)}};
$3Dmol.Camera=function(b,c,d,h,e){$3Dmol.Object3D.call(this);this.fov=void 0!==b?b:50;this.aspect=void 0!==c?c:1;this.near=void 0!==d?d:.1;this.far=void 0!==h?h:2E3;this.projectionMatrix=new $3Dmol.Matrix4;this.projectionMatrixInverse=new $3Dmol.Matrix4;this.matrixWorldInverse=new $3Dmol.Matrix4;this.right=this.position.z*Math.tan(Math.PI/180*b);this.left=-this.right;this.top=this.right/this.aspect;this.bottom=-this.top;this.ortho=!!e;this.updateProjectionMatrix()};$3Dmol.Camera.prototype=Object.create($3Dmol.Object3D.prototype);
$3Dmol.Camera.prototype.lookAt=function(b){this.matrix.lookAt(this.position,b,this.up);this.rotationAutoUpdate&&(!1===this.useQuaternion?this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder):this.quaternion.copy(this.matrix.decompose()[1]))};
$3Dmol.Camera.prototype.updateProjectionMatrix=function(){this.ortho?this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far):this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)};
$3Dmol.SpritePlugin=function(){function b(b,c){return b.z!==c.z?c.z-b.z:c.id-b.id}var c,d,h,e,t,g,q,p,u,m;this.init=function(b){c=b.context;d=b;h=b.getPrecision();e=new Float32Array(16);t=new Uint16Array(6);b=0;e[b++]=-1;e[b++]=-1;e[b++]=0;e[b++]=0;e[b++]=1;e[b++]=-1;e[b++]=1;e[b++]=0;e[b++]=1;e[b++]=1;e[b++]=1;e[b++]=1;e[b++]=-1;e[b++]=1;e[b++]=0;e[b++]=1;b=0;t[b++]=0;t[b++]=1;t[b++]=2;t[b++]=0;t[b++]=2;t[b++]=3;g=c.createBuffer();q=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,g);c.bufferData(c.ARRAY_BUFFER,
e,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,q);c.bufferData(c.ELEMENT_ARRAY_BUFFER,t,c.STATIC_DRAW);b=$3Dmol.ShaderLib.sprite;var n=h,l=c.createProgram(),f=c.createShader(c.FRAGMENT_SHADER),x=c.createShader(c.VERTEX_SHADER);n="precision "+n+" float;\n";c.shaderSource(f,n+b.fragmentShader);c.shaderSource(x,n+b.vertexShader);c.compileShader(f);c.compileShader(x);c.getShaderParameter(f,c.COMPILE_STATUS)&&c.getShaderParameter(x,c.COMPILE_STATUS)?(c.attachShader(l,f),c.attachShader(l,x),c.linkProgram(l),
c.getProgramParameter(l,c.LINK_STATUS)||console.error("Could not initialize shader"),b=l):(console.error(c.getShaderInfoLog(f)),console.error("could not initialize shader"),b=null);p=b;u={};m={};u.position=c.getAttribLocation(p,"position");u.uv=c.getAttribLocation(p,"uv");m.uvOffset=c.getUniformLocation(p,"uvOffset");m.uvScale=c.getUniformLocation(p,"uvScale");m.rotation=c.getUniformLocation(p,"rotation");m.scale=c.getUniformLocation(p,"scale");m.alignment=c.getUniformLocation(p,"alignment");m.color=
c.getUniformLocation(p,"color");m.map=c.getUniformLocation(p,"map");m.opacity=c.getUniformLocation(p,"opacity");m.useScreenCoordinates=c.getUniformLocation(p,"useScreenCoordinates");m.screenPosition=c.getUniformLocation(p,"screenPosition");m.modelViewMatrix=c.getUniformLocation(p,"modelViewMatrix");m.projectionMatrix=c.getUniformLocation(p,"projectionMatrix");m.fogType=c.getUniformLocation(p,"fogType");m.fogDensity=c.getUniformLocation(p,"fogDensity");m.fogNear=c.getUniformLocation(p,"fogNear");m.fogFar=
c.getUniformLocation(p,"fogFar");m.fogColor=c.getUniformLocation(p,"fogColor");m.alphaTest=c.getUniformLocation(p,"alphaTest")};this.render=function(l,n,y,f){var x=l.__webglSprites,w=x.length;if(w){var e=u,h=m,A=.5*y,T=.5*f;c.useProgram(p);c.enableVertexAttribArray(e.position);c.enableVertexAttribArray(e.uv);c.disable(c.CULL_FACE);c.enable(c.BLEND);c.bindBuffer(c.ARRAY_BUFFER,g);c.vertexAttribPointer(e.position,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(e.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,
q);c.uniformMatrix4fv(h.projectionMatrix,!1,n.projectionMatrix.elements);c.activeTexture(c.TEXTURE0);c.uniform1i(h.map,0);if(e=l.fog){c.uniform3f(h.fogColor,e.color.r,e.color.g,e.color.b);c.uniform1f(h.fogNear,e.near);c.uniform1f(h.fogFar,e.far);c.uniform1i(h.fogType,1);var G=e=1}else c.uniform1i(h.fogType,0),G=e=0;var t,z=[];for(t=0;t<w;t++){var D=x[t];var I=D.material;D.visible&&0!==I.opacity&&(I.useScreenCoordinates?D.z=-D.position.z:(D._modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,D.matrixWorld),
D.z=-D._modelViewMatrix.elements[14]))}x.sort(b);for(t=0;t<w;t++)D=x[t],I=D.material,D.visible&&0!==I.opacity&&I.map&&I.map.image&&I.map.image.width&&(c.uniform1f(h.alphaTest,I.alphaTest),n=I.map.image.height,z[0]=I.map.image.width*d.devicePixelRatio/y,z[1]=n*d.devicePixelRatio/f,!0===I.useScreenCoordinates?(c.uniform1i(h.useScreenCoordinates,1),c.uniform3f(h.screenPosition,(D.position.x*d.devicePixelRatio-A)/A,(T-D.position.y*d.devicePixelRatio)/T,Math.max(0,Math.min(1,D.position.z)))):(c.uniform1i(h.useScreenCoordinates,
0),c.uniformMatrix4fv(h.modelViewMatrix,!1,D._modelViewMatrix.elements)),n=l.fog&&I.fog?G:0,e!==n&&(c.uniform1i(h.fogType,n),e=n),n=1/(I.scaleByViewport?f:1),z[0]=z[0]*n*D.scale.x,z[1]=z[1]*n*D.scale.y,c.uniform2f(h.uvScale,I.uvScale.x,I.uvScale.y),c.uniform2f(h.uvOffset,I.uvOffset.x,I.uvOffset.y),c.uniform2f(h.alignment,I.alignment.x,I.alignment.y),c.uniform1f(h.opacity,I.opacity),c.uniform3f(h.color,I.color.r,I.color.g,I.color.b),c.uniform1f(h.rotation,D.rotation),c.uniform2fv(h.scale,z),d.setDepthTest(I.depthTest),
d.setDepthWrite(I.depthWrite),d.setTexture(I.map,0),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0));c.enable(c.CULL_FACE)}}};$3Dmol.Light=function(b,c){$3Dmol.Object3D.call(this);this.color=new $3Dmol.Color(b);this.position=new $3Dmol.Vector3(0,1,0);this.target=new $3Dmol.Object3D;this.intensity=void 0!==c?c:1;this.onlyShadow=this.castShadow=!1};$3Dmol.Light.prototype=Object.create($3Dmol.Object3D.prototype);
$3Dmol.Material=function(){$3Dmol.EventDispatcher.call(this);this.id=$3Dmol.MaterialIdCount++;this.name="";this.side=$3Dmol.FrontSide;this.opacity=1;this.transparent=!1;this.stencilTest=this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
$3Dmol.Material.prototype.setValues=function(b){if(void 0!==b)for(var c in b){var d=b[c];if(void 0===d)console.warn("$3Dmol.Material: '"+c+"' parameter is undefined.");else if(c in this){var h=this[c];h instanceof $3Dmol.Color&&d instanceof $3Dmol.Color?h.copy(d):h instanceof $3Dmol.Color?h.set(d):h instanceof $3Dmol.Vector3&&d instanceof $3Dmol.Vector3?h.copy(d):this[c]=d}}};
$3Dmol.Material.prototype.clone=function(b){void 0===b&&(b=new $3Dmol.Material);b.name=this.name;b.side=this.side;b.opacity=this.opacity;b.transparent=this.transparent;b.depthTest=this.depthTest;b.depthWrite=this.depthWrite;b.stencilTest=this.stencilTest;b.polygonOffset=this.polygonOffset;b.polygonOffsetFactor=this.polygonOffsetFactor;b.polygonOffsetUnits=this.polygonOffsetUnits;b.alphaTest=this.alphaTest;b.overdraw=this.overdraw;b.visible=this.visible;return b};
$3Dmol.Material.prototype.dispose=function(){this.dispatchEvent({type:"dispose"})};$3Dmol.MaterialIdCount=0;$3Dmol.LineBasicMaterial=function(b){$3Dmol.Material.call(this);this.color=new $3Dmol.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.shaderID="basic";this.setValues(b)};$3Dmol.LineBasicMaterial.prototype=Object.create($3Dmol.Material.prototype);
$3Dmol.LineBasicMaterial.prototype.clone=function(){var b=new $3Dmol.LineBasicMaterial;$3Dmol.Material.prototype.clone.call(this,b);b.color.copy(this.color);return b};
$3Dmol.MeshLambertMaterial=function(b){$3Dmol.Material.call(this);this.color=new $3Dmol.Color(16777215);this.ambient=new $3Dmol.Color(1048575);this.emissive=new $3Dmol.Color(0);this.wrapAround=!1;this.wrapRGB=new $3Dmol.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.shading=$3Dmol.SmoothShading;this.shaderID="lambert";
this.vertexColors=$3Dmol.NoColors;this.skinning=!1;this.setValues(b)};$3Dmol.MeshLambertMaterial.prototype=Object.create($3Dmol.Material.prototype);
$3Dmol.MeshLambertMaterial.prototype.clone=function(b){"undefined"===typeof b&&(b=new $3Dmol.MeshLambertMaterial);$3Dmol.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.ambient.copy(this.ambient);b.emissive.copy(this.emissive);b.wrapAround=this.wrapAround;b.wrapRGB.copy(this.wrapRGB);b.map=this.map;b.lightMap=this.lightMap;b.specularMap=this.specularMap;b.envMap=this.envMap;b.combine=this.combine;b.reflectivity=this.reflectivity;b.refractionRatio=this.refractionRatio;b.fog=this.fog;
b.shading=this.shading;b.shaderID=this.shaderID;b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;b.morphNormals=this.morphNormals;return b};$3Dmol.MeshDoubleLambertMaterial=function(b){$3Dmol.MeshLambertMaterial.call(this,b);this.shaderID="lambertdouble";this.side=$3Dmol.DoubleSide};$3Dmol.MeshDoubleLambertMaterial.prototype=Object.create($3Dmol.MeshLambertMaterial.prototype);
$3Dmol.MeshDoubleLambertMaterial.prototype.clone=function(){var b=new $3Dmol.MeshDoubleLambertMaterial;$3Dmol.MeshLambertMaterial.prototype.clone.call(this,b);return b};$3Dmol.MeshOutlineMaterial=function(b){$3Dmol.Material.call(this);b=b||{};this.fog=!0;this.shaderID="outline";this.wireframe=!1;this.outlineColor=b.color||new $3Dmol.Color(0,0,0);this.outlineWidth=b.width||.1;this.outlinePushback=b.pushback||1};$3Dmol.MeshOutlineMaterial.prototype=Object.create($3Dmol.Material.prototype);
$3Dmol.MeshOutlineMaterial.prototype.clone=function(b){"undefined"===typeof b&&(b=new $3Dmol.MeshOutlineMaterial);$3Dmol.Material.prototype.clone.call(this,b);b.fog=this.fog;b.shaderID=this.shaderID;b.wireframe=this.wireframe;return b};
$3Dmol.ImposterMaterial=function(b){$3Dmol.Material.call(this);this.color=new $3Dmol.Color(16777215);this.ambient=new $3Dmol.Color(1048575);this.emissive=new $3Dmol.Color(0);this.imposter=!0;this.wrapAround=!1;this.wrapRGB=new $3Dmol.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.shading=$3Dmol.SmoothShading;this.shaderID=
null;this.vertexColors=$3Dmol.NoColors;this.skinning=!1;this.setValues(b)};$3Dmol.ImposterMaterial.prototype=Object.create($3Dmol.Material.prototype);
$3Dmol.ImposterMaterial.prototype.clone=function(){var b=new $3Dmol.ImposterMaterial;$3Dmol.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.ambient.copy(this.ambient);b.emissive.copy(this.emissive);b.wrapAround=this.wrapAround;b.wrapRGB.copy(this.wrapRGB);b.map=this.map;b.lightMap=this.lightMap;b.specularMap=this.specularMap;b.envMap=this.envMap;b.combine=this.combine;b.reflectivity=this.reflectivity;b.refractionRatio=this.refractionRatio;b.fog=this.fog;b.shading=this.shading;b.shaderID=
this.shaderID;b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;b.morphNormals=this.morphNormals;return b};$3Dmol.SphereImposterMaterial=function(b){$3Dmol.ImposterMaterial.call(this);this.shaderID="sphereimposter";this.setValues(b)};$3Dmol.SphereImposterMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.SphereImposterMaterial.prototype.clone=function(){var b=new $3Dmol.SphereImposterMaterial;$3Dmol.ImposterMaterial.prototype.clone.call(this,b);return b};$3Dmol.SphereImposterOutlineMaterial=function(b){$3Dmol.ImposterMaterial.call(this);b=b||{};this.shaderID="sphereimposteroutline";this.outlineColor=b.color||new $3Dmol.Color(0,0,0);this.outlineWidth=b.width||.1;this.outlinePushback=b.pushback||1;this.setValues(b)};$3Dmol.SphereImposterOutlineMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.SphereImposterOutlineMaterial.prototype.clone=function(){var b=new $3Dmol.SphereImposterOutlineMaterial;$3Dmol.ImposterMaterial.prototype.clone.call(this,b);b.outlineColor=this.outlineColor;b.outlineWidth=this.outlineWidth;b.outlinePushback=this.outlinePushback;return b};$3Dmol.StickImposterMaterial=function(b){$3Dmol.ImposterMaterial.call(this);this.shaderID="stickimposter";this.setValues(b)};$3Dmol.StickImposterMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.StickImposterMaterial.prototype.clone=function(){var b=new $3Dmol.StickImposterMaterial;$3Dmol.ImposterMaterial.prototype.clone.call(this,b);return b};$3Dmol.StickImposterOutlineMaterial=function(b){$3Dmol.ImposterMaterial.call(this);b=b||{};this.shaderID="stickimposteroutline";this.outlineColor=b.color||new $3Dmol.Color(0,0,0);this.outlineWidth=b.width||.1;this.outlinePushback=b.pushback||1;this.setValues(b)};$3Dmol.StickImposterOutlineMaterial.prototype=Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.StickImposterOutlineMaterial.prototype.clone=function(){var b=new $3Dmol.StickImposterOutlineMaterial;$3Dmol.ImposterMaterial.prototype.clone.call(this,b);b.outlineColor=this.outlineColor;b.outlineWidth=this.outlineWidth;b.outlinePushback=this.outlinePushback;return b};
$3Dmol.InstancedMaterial=function(b){$3Dmol.Material.call(this);this.color=new $3Dmol.Color(16777215);this.ambient=new $3Dmol.Color(1048575);this.emissive=new $3Dmol.Color(0);this.wrapAround=!1;this.wrapRGB=new $3Dmol.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.shading=$3Dmol.SmoothShading;this.shaderID="instanced";
this.vertexColors=$3Dmol.NoColors;this.skinning=!1;this.sphere=null;this.setValues(b)};$3Dmol.InstancedMaterial.prototype=Object.create($3Dmol.Material.prototype);
$3Dmol.InstancedMaterial.prototype.clone=function(){var b=new $3Dmol.InstancedMaterial;$3Dmol.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.ambient.copy(this.ambient);b.emissive.copy(this.emissive);b.wrapAround=this.wrapAround;b.wrapRGB.copy(this.wrapRGB);b.map=this.map;b.lightMap=this.lightMap;b.specularMap=this.specularMap;b.envMap=this.envMap;b.combine=this.combine;b.reflectivity=this.reflectivity;b.refractionRatio=this.refractionRatio;b.fog=this.fog;b.shading=this.shading;b.shaderID=
this.shaderID;b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;b.morphNormals=this.morphNormals;b.sphere=this.sphere;return b};
$3Dmol.SpriteMaterial=function(b){$3Dmol.Material.call(this);this.color=new $3Dmol.Color(16777215);this.map=new $3Dmol.Texture;this.useScreenCoordinates=!0;this.depthTest=!this.useScreenCoordinates;this.sizeAttenuation=!this.useScreenCoordinates;this.scaleByViewPort=!this.sizeAttenuation;this.alignment=$3Dmol.SpriteAlignment.center.clone();this.fog=!1;this.uvOffset=new $3Dmol.Vector2(0,0);this.uvScale=new $3Dmol.Vector2(1,1);this.setValues(b);b=b||{};void 0===b.depthTest&&(this.depthTest=!this.useScreenCoordinates);
void 0===b.sizeAttenuation&&(this.sizeAttenuation=!this.useScreenCoordinates);void 0===b.scaleByViewPort&&(this.scaleByViewPort=!this.sizeAttenuation)};$3Dmol.SpriteMaterial.prototype=Object.create($3Dmol.Material.prototype);
$3Dmol.SpriteMaterial.prototype.clone=function(){var b=new $3Dmol.SpriteMaterial;$3Dmol.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.map=this.map;b.useScreenCoordinates=useScreenCoordinates;b.sizeAttenuation=this.sizeAttenuation;b.scaleByViewport=this.scaleByViewPort;b.alignment.copy(this.alignment);b.uvOffset.copy(this.uvOffset);return b};$3Dmol.SpriteAlignment={};$3Dmol.SpriteAlignment.topLeft=new $3Dmol.Vector2(1,-1);$3Dmol.SpriteAlignment.topCenter=new $3Dmol.Vector2(0,-1);
$3Dmol.SpriteAlignment.topRight=new $3Dmol.Vector2(-1,-1);$3Dmol.SpriteAlignment.centerLeft=new $3Dmol.Vector2(1,0);$3Dmol.SpriteAlignment.center=new $3Dmol.Vector2(0,0);$3Dmol.SpriteAlignment.centerRight=new $3Dmol.Vector2(-1,0);$3Dmol.SpriteAlignment.bottomLeft=new $3Dmol.Vector2(1,1);$3Dmol.SpriteAlignment.bottomCenter=new $3Dmol.Vector2(0,1);$3Dmol.SpriteAlignment.bottomRight=new $3Dmol.Vector2(-1,1);
$3Dmol.Texture=function(b){$3Dmol.EventDispatcher.call(this);this.id=$3Dmol.TextureIdCount++;this.name="";this.image=b;this.mipmaps=[];this.mapping=new $3Dmol.UVMapping;this.wrapT=this.wrapS=$3Dmol.ClampToEdgeWrapping;this.magFilter=$3Dmol.LinearFilter;this.minFilter=$3Dmol.LinearMipMapLinearFilter;this.anisotropy=1;this.format=$3Dmol.RGBAFormat;this.type=$3Dmol.UnsignedByteType;this.offset=new $3Dmol.Vector2(0,0);this.repeat=new $3Dmol.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;
this.flipY=!0;this.unpackAlignment=4;this.needsUpdate=!1;this.onUpdate=null};
$3Dmol.Texture.prototype={constructor:$3Dmol.Texture,clone:function(b){void 0===b&&(b=new $3Dmol.Texture);b.image=this.image;b.mipmaps=this.mipmaps.slice(0);b.mapping=this.mapping;b.wrapS=this.wrapS;b.wrapT=this.wrapT;b.magFilter=this.magFilter;b.minFilter=this.minFilter;b.anisotropy=this.anisotropy;b.format=this.format;b.type=this.type;b.offset.copy(this.offset);b.repeat.copy(this.repeat);b.generateMipmaps=this.generateMipmaps;b.premultiplyAlpha=this.premultiplyAlpha;b.flipY=this.flipY;b.unpackAlignment=
this.unpackAlignment;return b},dispose:function(){this.dispatchEvent({type:"dispose"})}};$3Dmol.TextureIdCount=0;$3Dmol.FrontSide=0;$3Dmol.BackSide=1;$3Dmol.DoubleSide=2;$3Dmol.NoShading=0;$3Dmol.FlatShading=1;$3Dmol.SmoothShading=2;$3Dmol.NoColors=0;$3Dmol.FaceColors=1;$3Dmol.VertexColors=2;$3Dmol.MultiplyOperation=0;$3Dmol.MixOperation=1;$3Dmol.AddOperation=2;$3Dmol.UVMapping=function(){};$3Dmol.ClampToEdgeWrapping=1001;$3Dmol.LinearFilter=1006;$3Dmol.LinearMipMapLinearFilter=1008;
$3Dmol.UnsignedByteType=1009;$3Dmol.RGBAFormat=1021;$3Dmol.Line=function(b,c,d){$3Dmol.Object3D.call(this);this.geometry=b;this.material=void 0!==c?c:new $3Dmol.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==d?d:$3Dmol.LineStrip};$3Dmol.LineStrip=0;$3Dmol.LinePieces=1;$3Dmol.Line.prototype=Object.create($3Dmol.Object3D.prototype);
$3Dmol.Line.prototype.clone=function(b){void 0===b&&(b=new $3Dmol.Line(this.geometry,this.material,this.type));$3Dmol.Object3D.prototype.clone.call(this,b);return b};$3Dmol.Mesh=function(b,c){$3Dmol.Object3D.call(this);this.geometry=b;this.material=void 0!==c?c:new $3Dmol.MeshBasicMaterial({color:16777215*Math.random(),wireframe:!0})};$3Dmol.Mesh.prototype=Object.create($3Dmol.Object3D.prototype);
$3Dmol.Mesh.prototype.clone=function(b){void 0===b&&(b=new $3Dmol.Mesh(this.geometry,this.material));$3Dmol.Object3D.prototype.clone.call(this,b);return b};$3Dmol.Sprite=function(b){$3Dmol.Object3D.call(this);this.material=void 0!==b?b:new $3Dmol.SpriteMaterial;this.rotation3d=this.rotation;this.rotation=0};$3Dmol.Sprite.prototype=Object.create($3Dmol.Object3D.prototype);
$3Dmol.Sprite.prototype.updateMatrix=function(){this.matrix.setPosition(this.position);this.rotation3d.set(0,0,this.rotation);this.matrix.setRotationFromEuler(this.rotation3d);1===this.scale.x&&1===this.scale.y||this.matrix.scale(this.scale);this.matrixWorldNeedsUpdate=!0};$3Dmol.Sprite.prototype.clone=function(b){void 0===b&&(b=new $3Dmol.Sprite(this.material));$3Dmol.Object3D.prototype.clone.call(this,b);return b};
$3Dmol.Renderer=function(b){function c(b){V[b]||(B.enableVertexAttribArray(b),V[b]=!0)}function d(b,c){var n;"fragment"===b?n=B.createShader(B.FRAGMENT_SHADER):"vertex"===b&&(n=B.createShader(B.VERTEX_SHADER));B.shaderSource(n,c);B.compileShader(n);return B.getShaderParameter(n,B.COMPILE_STATUS)?n:(console.error(B.getShaderInfoLog(n)),console.error("could not initialize shader"),null)}function h(b,c,n,l,d,f,g,m){if(c){var h=b.length-1;m=c=-1}else h=0,c=b.length,m=1;for(var e=h;e!==c;e+=m){var y=b[e];
if(y.render){h=y.object;var J=y.buffer;if(y=y[n]){g&&A.setBlending(!0);A.setDepthTest(y.depthTest);A.setDepthWrite(y.depthWrite);var p=y.polygonOffset;null!==p&&(p?B.enable(B.POLYGON_OFFSET_FILL):B.disable(B.POLYGON_OFFSET_FILL));p=h._modelViewMatrix.isReflected();A.setMaterialFaces(y,p);A.renderBuffer(l,d,f,y,J,h);if(P||y.outline)"sphereimposter"==y.shaderID?A.renderBuffer(l,d,f,w,J,h):"stickimposter"==y.shaderID?A.renderBuffer(l,d,f,R,J,h):y.wireframe||"basic"===y.shaderID||0===y.opacity||A.renderBuffer(l,
d,f,x,J,h)}}}}function e(b){return 0===(b&b-1)}function t(b){return b===$3Dmol.UnsignedByteType?B.UNSIGNED_BYTE:b===$3Dmol.RGBAFormat?B.RGBA:0}b=b||{};this.row=b.row;this.col=b.col;this.rows=b.rows;this.cols=b.cols;var g=void 0!==b.canvas?b.canvas:document.createElement("canvas"),q=void 0!==b.precision?b.precision:"highp",p=void 0!==b.alpha?b.alpha:!0,u=void 0!==b.premultipliedAlpha?b.premultipliedAlpha:!0,m=void 0!==b.antialias?b.antialias:!1,l=void 0!==b.stencil?b.stencil:!0,n=void 0!==b.preserveDrawingBuffer?
b.preserveDrawingBuffer:!1,y=void 0!==b.clearColor?new $3Dmol.Color(b.clearColor):new $3Dmol.Color(0),f=void 0!==b.clearAlpha?b.clearAlpha:0,x=new $3Dmol.MeshOutlineMaterial(b.outline),w=new $3Dmol.SphereImposterOutlineMaterial(b.outline),R=new $3Dmol.StickImposterOutlineMaterial(b.outline),P=!!b.outline;this.domElement=g;this.context=null;this.devicePixelRatio=void 0!==b.devicePixelRatio?b.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;g.id=b.id;this.autoUpdateScene=this.autoUpdateObjects=
this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var A=this,T=[],G=0,C=null,z=-1,D=null,I=null,K=0,H=-1,N=-1,E=-1,L=-1,M=null,F=0,J=0,Q=0,W=0,V={},U=new $3Dmol.Matrix4,ca=new $3Dmol.Vector3,S=new $3Dmol.Vector3,O=!0,Z=[],aa=[],B;try{if(!(B=g.getContext("experimental-webgl",{alpha:p,premultipliedAlpha:u,antialias:m,stencil:l,
preserveDrawingBuffer:n}))&&!(B=g.getContext("webgl",{alpha:p,premultipliedAlpha:u,antialias:m,stencil:l,preserveDrawingBuffer:n})))throw"Error creating WebGL context.";}catch(ja){console.error(ja)}B.clearColor(0,0,0,1);B.clearDepth(1);B.clearStencil(0);B.enable(B.DEPTH_TEST);B.depthFunc(B.LEQUAL);B.frontFace(B.CCW);B.cullFace(B.BACK);B.enable(B.CULL_FACE);B.enable(B.BLEND);B.blendEquation(B.FUNC_ADD);B.blendFunc(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA);B.clearColor(y.r,y.g,y.b,f);this.context=B;var Y=
B.getExtension("ANGLE_instanced_arrays"),X=B.getExtension("EXT_frag_depth");this.supportedExtensions=function(){return{supportsAIA:!!Y,supportsImposters:!!X}};this.getContext=function(){return B};this.getPrecision=function(){return q};this.setClearColorHex=function(b,c){y.setHex(b);f=c;B.clearColor(y.r,y.g,y.b,f)};this.enableOutline=function(b){x=new $3Dmol.MeshOutlineMaterial(b);w=new $3Dmol.SphereImposterOutlineMaterial(b);R=new $3Dmol.StickImposterOutlineMaterial(b);P=!0};this.disableOutline=function(){P=
!1};this.setViewport=function(){if(void 0!=this.rows&&void 0!=this.cols&&void 0!=this.row&&void 0!=this.col){var b=g.width/this.cols,c=g.height/this.rows;F=b*this.devicePixelRatio;J=c*this.devicePixelRatio;B.drawingBufferWidth=3*F;B.drawingBufferHeight=J;B.enable(B.SCISSOR_TEST);B.scissor(b*this.col,c*this.row,b,c);B.viewport(b*this.col,c*this.row,b,c)}};this.setSize=function(b,c){if(void 0!=this.rows&&void 0!=this.cols&&void 0!=this.row&&void 0!=this.col){var n=b/this.cols,l=c/this.rows;g.width=
b*this.devicePixelRatio;g.height=c*this.devicePixelRatio;F=n*this.devicePixelRatio;J=l*this.devicePixelRatio;g.style.width=b+"px";g.style.height=c+"px";this.setViewport()}else F=g.width=b*this.devicePixelRatio,J=g.height=c*this.devicePixelRatio,g.style.width=b+"px",g.style.height=c+"px",B.viewport(0,0,B.drawingBufferWidth,B.drawingBufferHeight)};this.clear=function(b,c,n){var l=0;if(void 0===b||b)l|=B.COLOR_BUFFER_BIT;if(void 0===c||c)l|=B.DEPTH_BUFFER_BIT;if(void 0===n||n)l|=B.STENCIL_BUFFER_BIT;
B.clear(l)};this.clearTarget=function(b,c,n){this.clear(b,c,n)};this.setMaterialFaces=function(b,c){var n=b.side===$3Dmol.DoubleSide;b=b.side===$3Dmol.BackSide;b=c?!b:b;H!==n&&(n?B.disable(B.CULL_FACE):B.enable(B.CULL_FACE),H=n);N!==b&&(b?B.frontFace(B.CW):B.frontFace(B.CCW),N=b)};this.setDepthTest=function(b){E!==b&&(b?B.enable(B.DEPTH_TEST):B.disable(B.DEPTH_TEST),E=b)};this.setDepthWrite=function(b){L!==b&&(B.depthMask(b),L=b)};this.setBlending=function(b){b?(B.enable(B.BLEND),B.blendEquationSeparate(B.FUNC_ADD,
B.FUNC_ADD),B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA)):B.disable(B.BLEND)};this.addPostPlugin=function(b){b.init(this);this.renderPluginsPost.push(b)};var da=function(b){b=b.target;b.removeEventListener("dispose",da);b.__webglInit=void 0;void 0!==b.__webglVertexBuffer&&B.deleteBuffer(b.__webglVertexBuffer);void 0!==b.__webglColorBuffer&&B.deleteBuffer(b.__webglColorBuffer);if(void 0!==b.geometryGroups)for(var c=0,n=b.groups;c<n;c++){var l=b.geometryGroups[c];
void 0!==l.__webglVertexBuffer&&B.deleteBuffer(l.__webglVertexBuffer);void 0!==l.__webglColorBuffer&&B.deleteBuffer(l.__webglColorBuffer);void 0!==l.__webglNormalBuffer&&B.deleteBuffer(l.__webglNormalBuffer);void 0!==l.__webglFaceBuffer&&B.deleteBuffer(l.__webglFaceBuffer);void 0!==l.__webglLineBuffer&&B.deleteBuffer(l.__webglLineBuffer)}A.info.memory.geometries--},ma=function(b){b=b.target;b.removeEventListener("dispose",ma);b.image&&b.image.__webglTextureCube?B.deleteTexture(b.image.__webglTextureCube):
b.__webglInit&&(b.__webglInit=!1,B.deleteTexture(b.__webglTexture));A.info.memory.textures--},qa=function(b){b=b.target;b.removeEventListener("dispose",qa);ha(b)},ha=function(b){var c=b.program;if(void 0!==c){b.program=void 0;var n,l=!1;b=0;for(n=T.length;b<n;b++){var d=T[b];if(d.program===c){d.usedTimes--;0===d.usedTimes&&(l=!0);break}}if(!0===l){l=[];b=0;for(n=T.length;b<n;b++)d=T[b],d.program!==c&&l.push(d);T=l;B.deleteProgram(c);A.info.memory.programs--}}};this.initMaterial=function(b,c,n,l){b.addEventListener("dispose",
qa);if(c=b.shaderID)c=$3Dmol.ShaderLib[c],b.vertexShader=c.vertexShader,b.fragmentShader=c.fragmentShader,b.uniforms=$3Dmol.ShaderUtils.clone(c.uniforms);a:{var f=b.fragmentShader;l=b.vertexShader;n=b.uniforms;var g={wireframe:b.wireframe,fragdepth:b.imposter},m;c=[];c.push(f);c.push(l);for(w in g)c.push(w),c.push(g[w]);c=c.join();var w=0;for(m=T.length;w<m;w++){var x=T[w];if(x.code===c){x.usedTimes++;var y=x.program;break a}}w=B.createProgram();x="precision "+q+" float;";m=""+x;g=[g.fragdepth?"#extension GL_EXT_frag_depth: enable":
"",g.wireframe?"#define WIREFRAME 1":"",x].join("\n");f=d("fragment",g+f);l=d("vertex",m+l);B.attachShader(w,l);B.attachShader(w,f);B.linkProgram(w);B.getProgramParameter(w,B.LINK_STATUS)||console.error("Could not initialize shader");w.uniforms={};w.attributes={};l=["viewMatrix","modelViewMatrix","projectionMatrix","normalMatrix"];for(y in n)l.push(y);for(y=0;y<l.length;y++)n=l[y],w.uniforms[n]=B.getUniformLocation(w,n);l="position normal color lineDistance offset radius".split(" ");for(y=0;y<l.length;y++)n=
l[y],w.attributes[n]=B.getAttribLocation(w,n);w.id=G++;T.push({program:w,code:c,usedTimes:1});A.info.memory.programs=T.length;y=w}b.program=y};this.renderBuffer=function(b,n,l,d,f,g){if(d.visible){d.needsUpdate&&(d.program&&ha(d),A.initMaterial(d,n,l,g),d.needsUpdate=!1);var w=!1,m=d.program,x=m.uniforms;var y=d.uniforms;m!=C&&(B.useProgram(m),C=m,w=!0);d.id!=z&&(z=d.id,w=!0);b!=I&&(I=b,w=!0);B.uniformMatrix4fv(x.projectionMatrix,!1,b.projectionMatrix.elements);B.uniformMatrix4fv(x.modelViewMatrix,
!1,g._modelViewMatrix.elements);B.uniformMatrix3fv(x.normalMatrix,!1,g._normalMatrix.elements);if(w){y.fogColor.value=l.color;y.fogNear.value=l.near;y.fogFar.value=l.far;if(d.shaderID.startsWith("lambert")||"instanced"===d.shaderID||d.shaderID.endsWith("imposter")){B.uniformMatrix4fv(x.viewMatrix,!1,b.matrixWorldInverse.elements);if(O){var h=0,e=0,J=0;b=0;for(l=n.length;b<l;b++){w=n[b];var p=w.color;var R=w.intensity;w instanceof $3Dmol.Light&&(h++,S.getPositionFromMatrix(w.matrixWorld),ca.getPositionFromMatrix(w.target.matrixWorld),
S.sub(ca),S.normalize(),0!==S.x||0!==S.y||0!==S.z)&&(aa[J]=S.x,aa[J+1]=S.y,aa[J+2]=S.z,Z[J]=p.r*R,Z[J+1]=p.g*R,Z[J+2]=p.b*R,J+=3,e++)}O=!1}y.directionalLightColor.value=Z;y.directionalLightDirection.value=aa}else d.shaderID.endsWith("outline")?(y.outlineColor.value=d.outlineColor,y.outlineWidth.value=d.outlineWidth,y.outlinePushback.value=d.outlinePushback):"sphereimposter"===d.shaderID&&(B.uniformMatrix4fv(x.viewMatrix,!1,b.matrixWorldInverse.elements),B.uniformMatrix3fv(x.normalMatrix,!1,g._normalMatrix.elements),
y.directionalLightColor.value=Z,y.directionalLightDirection.value=aa);y.opacity.value=d.opacity;for(var T in y)x[T]&&(n=y[T].type,b=y[T].value,l=x[T],"f"===n?B.uniform1f(l,b):"fv"===n?B.uniform3fv(l,b):"c"===n?B.uniform3f(l,b.r,b.g,b.b):"f4"===n&&B.uniform4f(l,b[0],b[1],b[2],b[3]))}y=m.attributes;x=!1;m=16777215*f.id+2*m.id+(d.wireframe?1:0);m!==D&&(D=m,x=!0);if(x){for(var P in V)V[P]&&(B.disableVertexAttribArray(P),V[P]=!1);0<=y.position&&(B.bindBuffer(B.ARRAY_BUFFER,f.__webglVertexBuffer),c(y.position),
B.vertexAttribPointer(y.position,3,B.FLOAT,!1,0,0));0<=y.color&&(B.bindBuffer(B.ARRAY_BUFFER,f.__webglColorBuffer),c(y.color),B.vertexAttribPointer(y.color,3,B.FLOAT,!1,0,0));0<=y.normal&&(B.bindBuffer(B.ARRAY_BUFFER,f.__webglNormalBuffer),c(y.normal),B.vertexAttribPointer(y.normal,3,B.FLOAT,!1,0,0));0<=y.offset&&(B.bindBuffer(B.ARRAY_BUFFER,f.__webglOffsetBuffer),c(y.offset),B.vertexAttribPointer(y.offset,3,B.FLOAT,!1,0,0));0<=y.radius&&(B.bindBuffer(B.ARRAY_BUFFER,f.__webglRadiusBuffer),c(y.radius),
B.vertexAttribPointer(y.radius,1,B.FLOAT,!1,0,0))}if(g instanceof $3Dmol.Mesh){if("instanced"===d.shaderID){var q=d.sphere.geometryGroups[0];x&&(B.bindBuffer(B.ARRAY_BUFFER,f.__webglVertexBuffer),B.bufferData(B.ARRAY_BUFFER,q.vertexArray,B.STATIC_DRAW),B.bindBuffer(B.ARRAY_BUFFER,f.__webglNormalBuffer),B.bufferData(B.ARRAY_BUFFER,q.normalArray,B.STATIC_DRAW),B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,f.__webglFaceBuffer),B.bufferData(B.ELEMENT_ARRAY_BUFFER,q.faceArray,B.STATIC_DRAW));q=q.faceidx;Y.vertexAttribDivisorANGLE(y.offset,
1);Y.vertexAttribDivisorANGLE(y.radius,1);Y.vertexAttribDivisorANGLE(y.color,1);Y.drawElementsInstancedANGLE(B.TRIANGLES,q,B.UNSIGNED_SHORT,0,f.radiusArray.length);Y.vertexAttribDivisorANGLE(y.offset,0);Y.vertexAttribDivisorANGLE(y.radius,0);Y.vertexAttribDivisorANGLE(y.color,0)}else d.wireframe?(g=f.lineidx,d=d.wireframeLinewidth,d!==M&&(B.lineWidth(d),M=d),x&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,f.__webglLineBuffer),B.drawElements(B.LINES,g,B.UNSIGNED_SHORT,0)):(q=f.faceidx,x&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,
f.__webglFaceBuffer),B.drawElements(B.TRIANGLES,q,B.UNSIGNED_SHORT,0));A.info.render.calls++;A.info.render.vertices+=q;A.info.render.faces+=q/3}else g instanceof $3Dmol.Line&&(g=f.vertices,f=d.linewidth,f!==M&&(B.lineWidth(f),M=f),B.drawArrays(B.LINES,0,g),A.info.render.calls++)}};this.render=function(b,c,n){if(!1===c instanceof $3Dmol.Camera)console.error("$3Dmol.Renderer.render: camera is not an instance of $3Dmol.Camera.");else{var l,d=b.__lights,g=b.fog;z=-1;O=!0;this.autoUpdateScene&&b.updateMatrixWorld();
void 0===c.parent&&c.updateMatrixWorld();c.matrixWorldInverse.getInverse(c.matrixWorld);U.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);this.autoUpdateObjects&&this.initWebGLObjects(b);A.info.render.calls=0;A.info.render.vertices=0;A.info.render.faces=0;A.info.render.points=0;Q=F;W=J;this.setViewport();if(this.autoClear||n)B.clearColor(y.r,y.g,y.b,f),this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);var w=b.__webglObjects;n=0;for(l=w.length;n<l;n++){var m=w[n];
var x=m.object;m.render=!1;if(x.visible){x._modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,x.matrixWorld);x._normalMatrix.getInverse(x._modelViewMatrix);x._normalMatrix.transpose();x=m;var e=x.object.material;e.transparent?(x.opaque=null,x.transparent=e,e.wireframe||(e=e.clone(),e.opacity=0,x.blank=e)):(x.opaque=e,x.transparent=null);m.render=!0}}this.setBlending(!1);h(b.__webglObjects,!0,"opaque",c,d,g,!1,null);h(b.__webglObjects,!0,"blank",c,d,g,!0,null);h(b.__webglObjects,!1,"transparent",
c,d,g,!0,null);d=this.renderPluginsPost;D=-1;I=C=null;N=z=H=E=L=-1;if(d.length)for(g=0,n=d.length;g<n;g++)O=!0,d[g].render(b,c,Q,W),D=-1,I=C=null,N=z=H=E=L=-1;this.setDepthTest(!0);this.setDepthWrite(!0)}};this.initWebGLObjects=function(b){b.__webglObjects||(b.__webglObjects=[],b.__webglObjectsImmediate=[],b.__webglSprites=[],b.__webglFlares=[]);if(b.__objectsAdded.length){for(;b.__objectsAdded.length;){var c,n=b.__objectsAdded[0],l=b;if(!n.__webglInit&&(n.__webglInit=!0,n._modelViewMatrix=new $3Dmol.Matrix4,
n._normalMatrix=new $3Dmol.Matrix3,void 0!==n.geometry&&void 0===n.geometry.__webglInit&&(n.geometry.__webglInit=!0,n.geometry.addEventListener("dispose",da)),n instanceof $3Dmol.Mesh||n instanceof $3Dmol.Line)){var d=n.geometry;var f=0;for(c=d.geometryGroups.length;f<c;f++){var g=d.geometryGroups[f];g.id=K++;g.__webglVertexBuffer||(n instanceof $3Dmol.Mesh?(g.radiusArray&&(g.__webglRadiusBuffer=B.createBuffer()),g.useOffset&&(g.__webglOffsetBuffer=B.createBuffer()),g.__webglVertexBuffer=B.createBuffer(),
g.__webglNormalBuffer=B.createBuffer(),g.__webglColorBuffer=B.createBuffer(),g.__webglFaceBuffer=B.createBuffer(),g.__webglLineBuffer=B.createBuffer(),A.info.memory.geometries++,d.elementsNeedUpdate=!0,d.normalsNeedUpdate=!0):n instanceof $3Dmol.Line&&(g.__webglVertexBuffer=B.createBuffer(),g.__webglColorBuffer=B.createBuffer(),A.info.memory.geometries++),d.verticesNeedUpdate=!0,d.colorsNeedUpdate=!0)}}if(!n.__webglActive){if(n instanceof $3Dmol.Mesh||n instanceof $3Dmol.Line)for(d=n.geometry,f=0,
c=d.geometryGroups.length;f<c;f++)g=d.geometryGroups[f],l.__webglObjects.push({buffer:g,object:n,opaque:null,transparent:null});else n instanceof $3Dmol.Sprite&&l.__webglSprites.push(n);n.__webglActive=!0}b.__objectsAdded.splice(0,1)}D=-1}for(;b.__objectsRemoved.length;){d=b.__objectsRemoved[0];c=b;if(d instanceof $3Dmol.Mesh||d instanceof $3Dmol.Line)for(c=c.__webglObjects,f=d,n=c.length-1;0<=n;--n)c[n].object===f&&c.splice(n,1);else if(d instanceof $3Dmol.Sprite)for(c=c.__webglSprites,f=d,n=c.length-
1;0<=n;--n)c[n]===f&&c.splice(n,1);d.__webglActive=!1;b.__objectsRemoved.splice(0,1)}d=0;for(c=b.__webglObjects.length;d<c;d++)if(n=b.__webglObjects[d].object,f=n.geometry,n instanceof $3Dmol.Mesh||n instanceof $3Dmol.Line){n=0;for(l=f.geometryGroups.length;n<l;n++)if(g=f.geometryGroups[n],f.verticesNeedUpdate||f.elementsNeedUpdate||f.colorsNeedUpdate||f.normalsNeedUpdate){var w=B.STATIC_DRAW,m=g.vertexArray,x=g.colorArray;void 0!==g.__webglOffsetBuffer?B.bindBuffer(B.ARRAY_BUFFER,g.__webglOffsetBuffer):
B.bindBuffer(B.ARRAY_BUFFER,g.__webglVertexBuffer);B.bufferData(B.ARRAY_BUFFER,m,w);B.bindBuffer(B.ARRAY_BUFFER,g.__webglColorBuffer);B.bufferData(B.ARRAY_BUFFER,x,w);g.normalArray&&void 0!==g.__webglNormalBuffer&&(m=g.normalArray,B.bindBuffer(B.ARRAY_BUFFER,g.__webglNormalBuffer),B.bufferData(B.ARRAY_BUFFER,m,w));g.radiusArray&&void 0!==g.__webglRadiusBuffer&&(B.bindBuffer(B.ARRAY_BUFFER,g.__webglRadiusBuffer),B.bufferData(B.ARRAY_BUFFER,g.radiusArray,w));g.faceArray&&void 0!==g.__webglFaceBuffer&&
(m=g.faceArray,B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,g.__webglFaceBuffer),B.bufferData(B.ELEMENT_ARRAY_BUFFER,m,w));g.lineArray&&void 0!==g.__webglLineBuffer&&(m=g.lineArray,B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,g.__webglLineBuffer),B.bufferData(B.ELEMENT_ARRAY_BUFFER,m,w))}f.verticesNeedUpdate=!1;f.elementsNeedUpdate=!1;f.normalsNeedUpdate=!1;f.colorsNeedUpdate=!1;f.buffersNeedUpdate=!1}};this.getXYRatio=function(){return void 0!=this.rows&&void 0!=this.cols&&void 0!=this.row&&void 0!=this.col?[this.cols,
this.rows]:[1,1]};this.getAspect=function(b,c){if(void 0==b||void 0==c)b=g.width,c=g.height;var n=b/c;void 0!=this.rows&&void 0!=this.cols&&void 0!=this.row&&void 0!=this.col&&(n=b/this.cols/(c/this.rows));return n};this.setTexture=function(b,c){if(b.needsUpdate){b.__webglInit||(b.__webglInit=!0,b.addEventListener("dispose",ma),b.__webglTexture=B.createTexture(),A.info.memory.textures++);B.activeTexture(B.TEXTURE0+c);B.bindTexture(B.TEXTURE_2D,b.__webglTexture);B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,
b.flipY);B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);B.pixelStorei(B.UNPACK_ALIGNMENT,b.unpackAlignment);c=b.image;c=e(c.width)&&e(c.height);var n=t(b.format),l=t(b.type),d=B.TEXTURE_2D;c?(B.texParameteri(d,B.TEXTURE_WRAP_S,t(b.wrapS)),B.texParameteri(d,B.TEXTURE_WRAP_T,t(b.wrapT)),B.texParameteri(d,B.TEXTURE_MAG_FILTER,t(b.magFilter)),B.texParameteri(d,B.TEXTURE_MIN_FILTER,t(b.minFilter))):(B.texParameteri(d,B.TEXTURE_WRAP_S,B.CLAMP_TO_EDGE),B.texParameteri(d,B.TEXTURE_WRAP_T,
B.CLAMP_TO_EDGE),B.texParameteri(d,B.TEXTURE_MAG_FILTER,B.LINEAR),B.texParameteri(d,B.TEXTURE_MIN_FILTER,B.LINEAR));var f=b.mipmaps;if(0<f.length&&c){for(var g=0,w=f.length;g<w;g++)d=f[g],B.texImage2D(B.TEXTURE_2D,g,n,n,l,d);b.generateMipmaps=!1}else B.texImage2D(B.TEXTURE_2D,0,n,n,l,b.image);b.generateMipmaps&&c&&B.generateMipmap(B.TEXTURE_2D);b.needsUpdate=!1;if(b.onUpdate)b.onUpdate()}else B.activeTexture(B.TEXTURE0+c),B.bindTexture(B.TEXTURE_2D,b.__webglTexture)};this.addPostPlugin(new $3Dmol.SpritePlugin)};
$3Dmol.Scene=function(){$3Dmol.Object3D.call(this);this.overrideMaterial=this.fog=null;this.matrixAutoUpdate=!1;this.__objects=[];this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};$3Dmol.Scene.prototype=Object.create($3Dmol.Object3D.prototype);
$3Dmol.Scene.prototype.__addObject=function(b){b instanceof $3Dmol.Light?(-1===this.__lights.indexOf(b)&&this.__lights.push(b),b.target&&void 0===b.target.parent&&this.add(b.target)):-1===this.__objects.indexOf(b)&&(this.__objects.push(b),this.__objectsAdded.push(b),-1!==this.__objectsRemoved.indexOf(b)&&this.__objectsRemoved.splice(c,1));for(var c=0;c<b.children.length;c++)this.__addObject(b.children[c])};
$3Dmol.Scene.prototype.__removeObject=function(b){if(b instanceof $3Dmol.Light){var c=this.__lights.indexOf(b);-1!==c&&this.__lights.splice(c,1)}else c=this.__objects.indexOf(b),-1!==c&&(this.__objects.splice(c,1),this.__objectsRemoved.push(b),-1!==this.__objectsAdded.indexOf(b)&&this.__objectsAdded.splice(c,1));for(c=0;c<b.children.length;c++)this.__removeObject(b.children[c])};$3Dmol.Fog=function(b,c,d){this.name="";this.color=new $3Dmol.Color(b);this.near=void 0!==c?c:1;this.far=void 0!==d?d:1E3};
$3Dmol.Fog.prototype.clone=function(){return new $3Dmol.Fog(this.color.getHex(),this.near,this.far)};$3Dmol.ShaderUtils={clone:function(b){var c,d={};for(c in b){d[c]={};d[c].type=b[c].type;var h=b[c].value;h instanceof $3Dmol.Color?d[c].value=h.clone():"number"===typeof h?d[c].value=h:h instanceof Array?d[c].value=[]:console.error("Error copying shader uniforms from ShaderLib: unknown type for uniform")}return d},stickimposterFragmentShader:"uniform float opacity;\nuniform mat4 projectionMatrix;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLight;\nvarying vec3 vColor;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\nvoid main() {\n    vec3 color = abs(vColor);\n    vec3 pos = cposition;\n    vec3 p = pos;\n    vec3 v = normalize(pos);\n    vec3 pa = p1;\n    vec3 va = normalize(p2-p1);\n    vec3 tmp1 = v-(dot(v,va)*va);\n    vec3 deltap = p-pa;\n    float A = dot(tmp1,tmp1);\n    if(A == 0.0) discard;\n    vec3 tmp2 = deltap-(dot(deltap,va)*va);\n    float B = 2.0*dot(tmp1, tmp2);\n    float C = dot(tmp2,tmp2)-r*r;\n    float det = (B*B) - (4.0*A*C);\n    if(det < 0.0) discard;\n    float sqrtDet = sqrt(det);\n    float posT = (-B+sqrtDet)/(2.0*A);\n    float negT = (-B-sqrtDet)/(2.0*A);\n    float intersectionT = min(posT,negT);\n    vec3 qi = p+v*intersectionT;\n    float dotp1 = dot(va,qi-p1);\n    float dotp2 = dot(va,qi-p2);\n    vec3 norm;\n    if( dotp1 < 0.0 || dotp2 > 0.0) {\n       vec3 cp;\n       if( dotp1 < 0.0) {        cp = p1;\n       } else {\n          cp = p2;\n       }\n       vec3 diff = p-cp;\n       A = dot(v,v);\n       B = dot(diff,v)*2.0;\n       C = dot(diff,diff)-r*r;\n       det = (B*B) - (4.0*C);\n       if(det < 0.0) discard;\n       sqrtDet = sqrt(det);\n       posT = (-B+sqrtDet)/(2.0);\n       negT = (-B-sqrtDet)/(2.0);\n       float t = min(posT,negT);\n       qi = p+v*t;\n       norm = normalize(qi-cp);\n    } else {\n       norm = normalize(qi-(dotp1*va + p1));\n    }\n    vec4 clipPos = projectionMatrix * vec4(qi, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    float depth = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    gl_FragDepthEXT = depth;"};
$3Dmol.ShaderLib={basic:{fragmentShader:"uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nattribute vec3 position;\nattribute vec3 color;\nvarying vec3 vColor;\nvoid main() {\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3}}},sphereimposter:{fragmentShader:"uniform mat4 viewMatrix;\nuniform float opacity;\nuniform mat4 projectionMatrix;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform float uDepth;\nuniform vec3 directionalLightColor[ 1 ];\nvarying vec3 vColor;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 vLight;\nvarying vec3 center;\nvoid main() {\n    float lensqr = dot(mapping,mapping);\n    float rsqr = rval*rval;\n    if(lensqr > rsqr)\n       discard;\n    float z = sqrt(rsqr-lensqr);\n    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z);\n    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    vec3 norm = normalize(vec3(mapping.x,mapping.y,z));\n    float dotProduct = dot( norm, vLight );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vec3 vLight = directionalLightColor[ 0 ] * directionalLightWeighting;\n    gl_FragColor = vec4(vLight*vColor, opacity*opacity );\n    float fogFactor = smoothstep( fogNear, fogFar, gl_FragDepthEXT/gl_FragCoord.w );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec2 mapping;\nvarying vec3 vColor;\nvarying float rval;\nvarying vec3 vLight;\nvarying vec3 center;\nvoid main() {\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    center = mvPosition.xyz;\n    vec4 projPosition = projectionMatrix * mvPosition;\n    vec4 adjust = projectionMatrix* vec4(normal,0.0); adjust.z = 0.0; adjust.w = 0.0;\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vLight = normalize( lDirection.xyz );\n    mapping = normal.xy;\n    rval = abs(normal.x);\n    gl_Position = projPosition+adjust;\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},lambert:{fragmentShader:"uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLightFront;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n    #ifndef WIREFRAME\n    gl_FragColor.xyz *= vLightFront;\n    #endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvoid main() {\n    vColor = color;\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vLightFront = vec3( 0.0 );\n    transformedNormal = normalize( transformedNormal );\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    gl_Position = projectionMatrix * mvPosition;\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},instanced:{fragmentShader:"uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLightFront;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n    #ifndef WIREFRAME\n    gl_FragColor.xyz *= vLightFront;\n    #endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 offset;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvoid main() {\n    vColor = color;\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position * radius + offset, 1.0 );\n    vLightFront = vec3( 0.0 );\n    transformedNormal = normalize( transformedNormal );\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    gl_Position = projectionMatrix * mvPosition;\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},outline:{fragmentShader:"uniform float opacity;\nuniform vec3 outlineColor;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvoid main() {\n    gl_FragColor = vec4( outlineColor, 1 );\n}",vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float outlineWidth;\nuniform float outlinePushback;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvoid main() {\n    vec4 norm = modelViewMatrix*vec4(normalize(normal),0.0);\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    mvPosition.xy += norm.xy*outlineWidth;\n    gl_Position = projectionMatrix * mvPosition;\n    mvPosition.z -= outlinePushback;\n    vec4 pushpos = projectionMatrix*mvPosition;\n    gl_Position.z = gl_Position.w*pushpos.z/pushpos.w;\n}",
uniforms:{opacity:{type:"f",value:1},outlineColor:{type:"c",value:new $3Dmol.Color(0,0,0)},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},outlineWidth:{type:"f",value:.1},outlinePushback:{type:"f",value:1}}},sphereimposteroutline:{fragmentShader:"uniform float opacity;\nuniform vec3 outlineColor;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform mat4 projectionMatrix;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 center;\nuniform float outlinePushback;\nvoid main() {\n    float lensqr = dot(mapping,mapping);\n    float rsqr = rval*rval;\n    if(lensqr > rsqr)\n       discard;\n    float z = sqrt(rsqr-lensqr);\n    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z-outlinePushback);\n    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    gl_FragColor = vec4(outlineColor, 1 );\n}",
vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float outlineWidth;\nuniform float outlinePushback;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 center;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    center = mvPosition.xyz;\n    vec4 projPosition = projectionMatrix * mvPosition;\n    vec2 norm = normal.xy + vec2(sign(normal.x)*outlineWidth,sign(normal.y)*outlineWidth);\n    vec4 adjust = projectionMatrix* vec4(norm,normal.z,0.0); adjust.z = 0.0; adjust.w = 0.0;\n    mapping = norm.xy;\n    rval = abs(norm.x);\n    gl_Position = projPosition+adjust;\n}",
uniforms:{opacity:{type:"f",value:1},outlineColor:{type:"c",value:new $3Dmol.Color(0,0,0)},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},outlineWidth:{type:"f",value:.1},outlinePushback:{type:"f",value:1}}},stickimposter:{fragmentShader:[$3Dmol.ShaderUtils.stickimposterFragmentShader,"    float dotProduct = dot( norm, vLight );\n    vec3 light = vec3( max( dotProduct, 0.0 ) );\n    gl_FragColor = vec4(light*color, opacity*opacity );\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}"].join("\n"),
vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\nvarying vec3 vColor;\nvarying vec3 vLight;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\nvoid main() {\n    vColor = color; vColor.z = abs(vColor.z);\n    r = abs(radius);\n    vec4 to = modelViewMatrix*vec4(normal, 1.0);\n    vec4 pt = modelViewMatrix*vec4(position, 1.0);\n    vec4 mvPosition = pt;\n    p1 = pt.xyz; p2 = to.xyz;\n    vec3 norm = to.xyz-pt.xyz;\n    float mult = 1.1;\n    if(length(p1) > length(p2)) {\n       mvPosition = to;\n    }\n    vec3 n = normalize(mvPosition.xyz);\n    if(color.z >= 0.0) {\n       vec3 pnorm = normalize(p1);\n       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);\n       mvPosition.xyz = p1+t*pnorm;\n    } else {\n       vec3 pnorm = normalize(p2);\n       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);\n       mvPosition.xyz = p2+t*pnorm;\n       mult *= -1.0;\n    }\n    vec3 cr = normalize(cross(mvPosition.xyz,norm))*radius;\n    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*radius;\n    mvPosition.xy +=  mult*(cr + doublecr).xy;\n    cposition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vLight = normalize( lDirection.xyz )*directionalLightColor[0];\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},stickimposteroutline:{fragmentShader:$3Dmol.ShaderUtils.stickimposterFragmentShader+"gl_FragColor = vec4(color,1.0);}",vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nuniform vec3 outlineColor;\nuniform float outlineWidth;\nuniform float outlinePushback;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\nvarying vec3 vColor;\nvarying vec3 vLight;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\nvoid main() {\n    vColor = outlineColor;\n    float rad = radius+sign(radius)*outlineWidth;\n    r = abs(rad);\n    vec4 to = modelViewMatrix*vec4(normal, 1.0);\n    vec4 pt = modelViewMatrix*vec4(position, 1.0);\n    to.xyz += normalize(to.xyz)*outlinePushback;\n    pt.xyz += normalize(pt.xyz)*outlinePushback;\n    vec4 mvPosition = pt;\n    p1 = pt.xyz; p2 = to.xyz;\n    vec3 norm = to.xyz-pt.xyz;\n    float mult = 1.1;\n    if(length(p1) > length(p2)) {\n       mvPosition = to;\n    }\n    vec3 n = normalize(mvPosition.xyz);\n    if(color.z >= 0.0) {\n       vec3 pnorm = normalize(p1);\n       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);\n       mvPosition.xyz = p1+t*pnorm;\n    } else {\n       vec3 pnorm = normalize(p2);\n       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);\n       mvPosition.xyz = p2+t*pnorm;\n       mult *= -1.0;\n    }\n    vec3 cr = normalize(cross(mvPosition.xyz,norm))*rad;\n    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*rad;\n    mvPosition.xy +=  mult*(cr + doublecr).xy;\n    cposition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    vLight = vec3(1.0,1.0,1.0);\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},outlineColor:{type:"c",value:new $3Dmol.Color(0,0,0)},outlineWidth:{type:"f",value:.1},outlinePushback:{type:"f",value:1}}},lambertdouble:{fragmentShader:"uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLightFront;\nvarying vec3 vLightBack;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n    #ifndef WIREFRAME\n    if ( gl_FrontFacing )\n       gl_FragColor.xyz *= vLightFront;\n    else\n       gl_FragColor.xyz *= vLightBack;\n    #endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
vertexShader:"uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvarying vec3 vLightBack;\nvoid main() {\n    vColor = color;\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vLightFront = vec3( 0.0 );\n    vLightBack = vec3( 0.0 );\n    transformedNormal = normalize( transformedNormal );\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    vLightBack += directionalLightColor[ 0 ] * directionalLightWeightingBack;\n    gl_Position = projectionMatrix * mvPosition;\n}",
uniforms:{opacity:{type:"f",value:1},fogColor:{type:"c",value:new $3Dmol.Color(1,1,1)},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},directionalLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]}}},sprite:{fragmentShader:"uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\n    vec4 texture = texture2D(map, vUV);\n    if (texture.a < alphaTest) discard;\n    gl_FragColor = vec4(color * texture.xyz, texture.a * opacity);\n    if (fogType > 0) {\n        float depth = gl_FragCoord.z / gl_FragCoord.w;\n        float fogFactor = 0.0;\n        if (fogType == 1) {\n            fogFactor = smoothstep(fogNear, fogFar, depth);\n        }\n        else {\n            const float LOG2 = 1.442695;\n            float fogFactor = exp2(- fogDensity * fogDensity * depth * depth * LOG2);\n            fogFactor = 1.0 - clamp(fogFactor, 0.0, 1.0);\n        }\n        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);\n    }\n}",
vertexShader:"uniform int useScreenCoordinates;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\n    vUV = uvOffset + uv * uvScale;\n    vec2 alignedPosition = position + alignment;\n    vec2 rotatedPosition;\n    rotatedPosition.x = ( cos(rotation) * alignedPosition.x - sin(rotation) * alignedPosition.y ) * scale.x;\n    rotatedPosition.y = ( sin(rotation) * alignedPosition.x + cos(rotation) * alignedPosition.y ) * scale.y;\n    vec4 finalPosition;\n    if(useScreenCoordinates != 0) {\n        finalPosition = vec4(screenPosition.xy + rotatedPosition, screenPosition.z, 1.0);\n    }\n    else {\n        finalPosition = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); finalPosition /= finalPosition.w;\n        finalPosition.xy += rotatedPosition; \n    }\n    gl_Position = finalPosition;\n}",
uniforms:{}}};
$3Dmol.autoload=function(b,c){void 0!==$(".viewer_3Dmoljs")[0]&&($3Dmol.autoinit=!0);if($3Dmol.autoinit){b=void 0!=b?b:null;$3Dmol.viewers={};var d=0;$(".viewer_3Dmoljs").each(function(){var h,e,t=$(this),g=[],q=[];"static"==t.css("position")&&t.css("position","relative");var p=null;if(t.data("pdb"))g.push("https://files.rcsb.org/view/"+t.data("pdb")+".pdb"),q.push("pdb");else if(t.data("cid"))q.push("sdf"),g.push("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/"+t.data("cid")+"/SDF?record_type=3d");
else if(t.data("href")||t.data("url")){var u=t.data("href");g.push(u);p=u.substr(u.lastIndexOf(".")+1);q.push(p)}p=t.data();for(h in p)"pdb"===h.substring(0,3)&&"pdb"!==h?(g.push("https://files.rcsb.org/view/"+p[h]+".pdb"),q.push("pdb")):"href"===h.substring(0,4)&&"href"!==h?(u=p[h],g.push(u),q.push(u.substr(u.lastIndexOf(".")+1))):"cid"===h.substring(0,3)&&"cid"!==h&&(g.push("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/"+p[h]+"/SDF?record_type=3d"),q.push("sdf"));var m={};t.data("options")&&
(m=$3Dmol.specStringToObject(t.data("options")));p=$3Dmol.CC.color(t.data("backgroundcolor"));var l={line:{}};t.data("style")&&(l=$3Dmol.specStringToObject(t.data("style")));var n={};t.data("select")&&(n=$3Dmol.specStringToObject(t.data("select")));var y=[],f=[],x=[],w=t.data(),R=/style(.+)/,P=/surface(.*)/,A=/labelres(.*)/,T=[];for(G in w)w.hasOwnProperty(G)&&T.push(G);T.sort();for(h=0;h<T.length;h++){var G=T[h];if(e=R.exec(G)){e="select"+e[1];var C=$3Dmol.specStringToObject(w[e]);e=$3Dmol.specStringToObject(w[G]);
y.push([C,e])}if(e=P.exec(G))e="select"+e[1],C=$3Dmol.specStringToObject(w[e]),e=$3Dmol.specStringToObject(w[G]),f.push([C,e]);if(e=A.exec(G))e="select"+e[1],C=$3Dmol.specStringToObject(w[e]),e=$3Dmol.specStringToObject(w[G]),x.push([C,e])}var z=function(b){b.setStyle(n,l);for(var c=0;c<y.length;c++){var d=y[c][0]||{};var g=y[c][1]||{line:{}};b.setStyle(d,g)}for(c=0;c<f.length;c++)d=f[c][0]||{},g=f[c][1]||{},b.addSurface($3Dmol.SurfaceType.VDW,g,d,d);for(c=0;c<x.length;c++)d=x[c][0]||{},g=x[c][1]||
{},b.addResLabels(d,g);b.zoomTo();b.render()},D=b;try{null==D&&(D=$3Dmol.viewers[this.id||d++]=$3Dmol.createViewer(t,{defaultcolors:$3Dmol.rasmolElementColors})),D.setBackgroundColor(p)}catch(K){console.log(K),window.location="http://get.webgl.org"}if(0!=g.length){h=0;var I=function(b){u=g[h];var n=t.data("type")||t.data("datatype")||q[h];D.addModel(b,n,m);h+=1;h<g.length?$.get(g[h],I,"text"):(z(D),t.data("callback")&&(b=eval(t.data("callback")),"function"==typeof b&&b(D)),c&&c(D))};$.get(g[0],I,
"text")}else t.data("element")&&(G=$("#"+t.data("element")).val()||"",p=t.data("type")||t.data("datatype"),p||(console.log("Warning: No type specified for embedded viewer with moldata from "+t.data("element")+"\n assuming type 'pdb'"),p="pdb"),D.addModel(G,p,m)),z(D),t.data("callback")&&(G=eval(t.data("callback")),"function"==typeof G&&G(D)),c&&c(D)})}};$(document).ready(function(){$3Dmol.autoload()});(function(){});
var htmlColors={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,
honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,
limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,
paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,
thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};
$3Dmol.CC={cache:{0:new $3Dmol.Color(0)},color:function color_(c){if(!c)return this.cache[0];if("undefined"!==typeof this.cache[c])return this.cache[c];if(c&&c.constructor===Array)return c.map(color_,this);c=this.getHex(c);if("number"===typeof c){var d=new $3Dmol.Color(c);return this.cache[c]=d}return c},getHex:function(b){return isNaN(parseInt(b))?"string"===typeof b?(b=b.trim(),4==b.length&&"#"==b[0]&&(b="#"+b[1]+b[1]+b[2]+b[2]+b[3]+b[3]),7==b.length&&"#"==b[0]?parseInt(b.substring(1),16):htmlColors[b.toLowerCase()]||
0):b:parseInt(b)}};$3Dmol.CC=$3Dmol.CC;$3Dmol.CC.color=$3Dmol.CC.color;$3Dmol.ssColors=$3Dmol.ssColors||{};$3Dmol.ssColors.pyMol={h:16711680,s:16776960,c:65280};$3Dmol.ssColors.Jmol={h:16711808,s:16762880,c:16777215};$3Dmol.elementColors=$3Dmol.elementColors||{};$3Dmol.elementColors.defaultColor=16716947;
$3Dmol.elementColors.Jmol={H:16777215,He:14286847,HE:14286847,Li:13402367,LI:13402367,Be:12779264,BE:12779264,B:16758197,C:9474192,N:3166456,O:16715021,F:9494608,Ne:11789301,NE:11789301,Na:11230450,NA:11230450,Mg:9109248,MG:9109248,Al:12560038,AL:12560038,Si:1578E4,SI:1578E4,P:16744448,S:16777008,Cl:2093087,CL:2093087,Ar:8442339,AR:8442339,K:9388244,Ca:4062976,CA:4062976,Sc:15132390,SC:15132390,Ti:12567239,TI:12567239,V:10921643,Cr:9083335,CR:9083335,Mn:10255047,MN:10255047,Fe:14706227,FE:14706227,
Co:15765664,CO:15765664,Ni:5296208,NI:5296208,Cu:13140019,CU:13140019,Zn:8224944,ZN:8224944,Ga:12750735,GA:12750735,Ge:6721423,GE:6721423,As:12419299,AS:12419299,Se:16752896,SE:16752896,Br:10889513,BR:10889513,Kr:6076625,KR:6076625,Rb:7351984,RB:7351984,Sr:65280,SR:65280,Y:9764863,Zr:9756896,ZR:9756896,Nb:7586505,NB:7586505,Mo:5551541,MO:5551541,Tc:3907230,TC:3907230,Ru:2396047,RU:2396047,Rh:687500,RH:687500,Pd:27013,PD:27013,Ag:12632256,AG:12632256,Cd:16767375,CD:16767375,In:10909043,IN:10909043,
Sn:6717568,SN:6717568,Sb:10380213,SB:10380213,Te:13924864,TE:13924864,I:9699476,Xe:4366E3,XE:4366E3,Cs:5707663,CS:5707663,Ba:51456,BA:51456,La:7394559,LA:7394559,Ce:16777159,CE:16777159,Pr:14286791,PR:14286791,Nd:13107143,ND:13107143,Pm:10747847,PM:10747847,Sm:9437127,SM:9437127,Eu:6422471,EU:6422471,Gd:4587463,GD:4587463,Tb:3211207,TB:3211207,Dy:2097095,DY:2097095,Ho:65436,HO:65436,Er:58997,ER:58997,Tm:54354,TM:54354,Yb:48952,YB:48952,Lu:43812,LU:43812,Hf:5096191,HF:5096191,Ta:5089023,TA:5089023,
W:2200790,Re:2522539,RE:2522539,Os:2516630,OS:2516630,Ir:1528967,IR:1528967,Pt:13684960,PT:13684960,Au:16765219,AU:16765219,Hg:12105936,HG:12105936,Tl:10900557,TL:10900557,Pb:5724513,PB:5724513,Bi:10375093,BI:10375093,Po:11230208,PO:11230208,At:7688005,AT:7688005,Rn:4358806,RN:4358806,Fr:4325478,FR:4325478,Ra:32E3,RA:32E3,Ac:7384058,AC:7384058,Th:47871,TH:47871,Pa:41471,PA:41471,U:36863,Np:33023,NP:33023,Pu:27647,PU:27647,Am:5528818,AM:5528818,Cm:7888099,CM:7888099,Bk:9064419,BK:9064419,Cf:10565332,
CF:10565332,Es:11739092,ES:11739092,Fm:11739066,FM:11739066,Md:11734438,MD:11734438,No:12389767,NO:12389767,Lr:13041766,LR:13041766,Rf:13369433,RF:13369433,Db:13697103,DB:13697103,Sg:14221381,SG:14221381,Bh:14680120,BH:14680120,Hs:15073326,HS:15073326,Mt:15400998,MT:15400998};
$3Dmol.elementColors.rasmol={H:16777215,He:16761035,HE:16761035,Li:11674146,LI:11674146,B:65280,C:13158600,N:9408511,O:15728640,F:14329120,Na:255,NA:255,Mg:2263842,MG:2263842,Al:8421520,AL:8421520,Si:14329120,SI:14329120,P:16753920,S:16762930,Cl:65280,CL:65280,Ca:8421520,CA:8421520,Ti:8421520,TI:8421520,Cr:8421520,CR:8421520,Mn:8421520,MN:8421520,Fe:16753920,FE:16753920,Ni:10824234,NI:10824234,Cu:10824234,CU:10824234,Zn:10824234,ZN:10824234,Br:10824234,BR:10824234,Ag:8421520,AG:8421520,I:10494192,
Ba:16753920,BA:16753920,Au:14329120,AU:14329120};$3Dmol.elementColors.defaultColors=$3Dmol.elementColors.rasmol;$3Dmol.elementColors.greenCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.greenCarbon.C=65280;$3Dmol.elementColors.cyanCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.cyanCarbon.C=65535;$3Dmol.elementColors.magentaCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.magentaCarbon.C=16711935;
$3Dmol.elementColors.yellowCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.yellowCarbon.C=16776960;$3Dmol.elementColors.whiteCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.whiteCarbon.C=16777215;$3Dmol.elementColors.orangeCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.orangeCarbon.C=16753920;$3Dmol.elementColors.purpleCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.purpleCarbon.C=8388736;
$3Dmol.elementColors.blueCarbon=$.extend({},$3Dmol.elementColors.defaultColors);$3Dmol.elementColors.blueCarbon.C=255;$3Dmol.residues={};$3Dmol.residues.amino={ALA:13158600,ARG:1334015,ASN:56540,ASP:15075850,CYS:15132160,GLN:56540,GLU:15075850,GLY:15461355,HIS:8553170,ILE:1016335,LEU:1016335,LYS:1334015,MET:15132160,PHE:3289770,PRO:14456450,SER:16422400,THR:16422400,TRP:11819700,TYR:3289770,VAL:1016335,ASX:16738740,GLX:16738740};
$3Dmol.residues.shapely={ALA:9240460,ARG:124,ASN:16743536,ASP:10485826,CYS:16777072,GLN:16731212,GLU:6684672,GLY:16777215,HIS:7368959,ILE:19456,LEU:4546117,LYS:4671416,MET:12099650,PHE:5459026,PRO:5395026,SER:16740418,THR:12078080,TRP:5195264,TYR:9203788,VAL:16747775,ASX:16711935,GLX:16711935};$3Dmol.residues.nucleic={A:10526975,G:16740464,I:8454143,C:16747595,T:10551200,U:16744576};$3Dmol.chains={};
$3Dmol.chains.atom={A:12636415,B:11599792,C:16761032,D:16777088,E:16761087,F:11596016,G:16765040,H:15761536,I:16113331,J:49151,K:13458524,L:6737322,M:10145074,N:15631086,O:52945,P:65407,Q:3978097,R:139,S:12433259,T:25600,U:8388608,V:8421376,W:8388736,X:32896,Y:12092939,Z:11674146};
$3Dmol.chains.hetatm={A:9478351,B:8441752,C:13602992,D:13619056,E:13603023,F:8437952,G:13607008,H:12603504,I:12955267,J:42959,K:11881548,L:5682578,M:9090346,N:12481214,O:46753,P:53103,Q:3447649,R:187,S:10854235,T:37888,U:11534336,V:11579392,W:11534512,X:45232,Y:15250963,Z:12726834};
$3Dmol.builtinColorSchemes={ssPyMol:{prop:"ss",map:$3Dmol.ssColors.pyMol},ssJmol:{prop:"ss",map:$3Dmol.ssColors.Jmol},Jmol:{prop:"elem",map:$3Dmol.elementColors.Jmol},greenCarbon:{prop:"elem",map:$3Dmol.elementColors.greenCarbon},"default":{prop:"elem",map:$3Dmol.elementColors.defaultColors},amino:{prop:"resn",map:$3Dmol.residues.amino},shapely:{prop:"resn",map:$3Dmol.residues.shapely},nucleic:{prop:"resn",map:$3Dmol.residues.nucleic},chain:{prop:"chain",map:$3Dmol.chains.atom},chainHetatm:{prop:"chain",
map:$3Dmol.chains.hetatm}};
$3Dmol.getColorFromStyle=function(b,c){var d=c.colorscheme;if("undefined"!=typeof $3Dmol.builtinColorSchemes[d])d=$3Dmol.builtinColorSchemes[d];else if("string"==typeof d&&d.endsWith("Carbon")){var h=d.substring(0,d.lastIndexOf("Carbon")).toLowerCase();if("undefined"!=typeof htmlColors[h]){var e=$.extend({},$3Dmol.elementColors.defaultColors);e.C=htmlColors[h];$3Dmol.builtinColorSchemes[d]={prop:"elem",map:e};d=$3Dmol.builtinColorSchemes[d]}}h=b.color;"undefined"!=typeof c.color&&"spectrum"!=c.color&&
(h=c.color);"undefined"!=typeof d?"undefined"!=typeof $3Dmol.elementColors[d]?(d=$3Dmol.elementColors[d],"undefined"!=typeof d[b[d.prop]]&&(h=d.map[b[d.prop]])):"undefined"!=typeof d[b[d.prop]]?h=d.map[b[d.prop]]:"undefined"!=typeof d.prop&&"undefined"!=typeof d.gradient?(e=d.prop,c=d.gradient,"undefined"!=typeof $3Dmol.Gradient.builtinGradients[c]&&(c=new $3Dmol.Gradient.builtinGradients[c](d.min,d.max,d.mid)),d=c.range()||[-1,1],b=$3Dmol.getAtomProperty(b,e),null!=b&&(h=c.valueToHex(b,d))):"undefined"!=
typeof d.prop&&"undefined"!=typeof d.map?(e=d.prop,b=$3Dmol.getAtomProperty(b,e),"undefined"!=typeof d.map[b]&&(h=d.map[b])):"undefined"!=typeof c.colorscheme[b.elem]?h=c.colorscheme[b.elem]:console.log("Could not interpret colorscheme "+d):"undefined"!=typeof c.colorfunc&&(h=c.colorfunc(b));return $3Dmol.CC.color(h)};$3Dmol=$3Dmol||{};
$3Dmol.subdivide_spline=function(b,c){var d=[];var h=[];h.push(b[0]);var e;var t=1;for(e=b.length-1;t<e;t++){var g=b[t];var q=b[t+1];g.smoothen?(q=new $3Dmol.Vector3((g.x+q.x)/2,(g.y+q.y)/2,(g.z+q.z)/2),q.atom=g.atom,h.push(q)):h.push(g)}h.push(b[b.length-1]);t=-1;for(b=h.length;t<=b-3;t++){e=h[-1===t?0:t];g=h[t+1];q=h[t+2];var p=h[t===b-3?b-1:t+3];e=(new $3Dmol.Vector3).subVectors(q,e).multiplyScalar(.5);p=(new $3Dmol.Vector3).subVectors(p,g).multiplyScalar(.5);if(!q.skip)for(var u=0;u<c;u++){var m=
1/c*u;m=new $3Dmol.Vector3(g.x+m*e.x+m*m*(-3*g.x+3*q.x-2*e.x-p.x)+m*m*m*(2*g.x-2*q.x+e.x+p.x),g.y+m*e.y+m*m*(-3*g.y+3*q.y-2*e.y-p.y)+m*m*m*(2*g.y-2*q.y+e.y+p.y),g.z+m*e.z+m*m*(-3*g.z+3*q.z-2*e.z-p.z)+m*m*m*(2*g.z-2*q.z+e.z+p.z));m.atom=u<c/2?g.atom:q.atom;d.push(m)}}d.push(h[h.length-1]);return d};
$3Dmol.drawCartoon=function(){var b=function(b,c,d,f,g,w){g=0;for(w=c.length;g<w;g++){var n=Math.round(g*(f.length-1)/w);var l=$3Dmol.CC.color(f[n]);geoGroup=b.updateGeoGroup(2);var m=geoGroup.vertexArray,x=geoGroup.colorArray;n=geoGroup.faceArray;var y=geoGroup.vertices;var e=3*y;m[e]=c[g].x;m[e+1]=c[g].y;m[e+2]=c[g].z;m[e+3]=d[g].x;m[e+4]=d[g].y;m[e+5]=d[g].z;for(m=0;6>m;++m)x[e+3*m]=l.r,x[e+1+3*m]=l.g,x[e+2+3*m]=l.b;0<g&&(y=[y,y+1,y-1,y-2],e=geoGroup.faceidx,n[e]=y[0],n[e+1]=y[1],n[e+2]=y[3],n[e+
3]=y[1],n[e+4]=y[2],n[e+5]=y[3],geoGroup.faceidx+=6);geoGroup.vertices+=2}},c=function(b,c,d,f,g){0!==c.length&&(g=void 0===g?5:g,f=new $3Dmol.Geometry,$3Dmol.subdivide_spline(c,g),c=new $3Dmol.LineBasicMaterial({linewidth:d}),c.vertexColors=!0,c=new $3Dmol.Line(f,c),c.type=$3Dmol.LineStrip,b.add(c))},d=function(c,n,d,f,g,w,m){m&&"default"!==m||(m="rectangle");if("edged"===m){if(!(2>n.length)){var l=n[0];n=n[n.length-1];var y=f||axisDIV;l=$3Dmol.subdivide_spline(l,y);n=$3Dmol.subdivide_spline(n,y);
if(g){y=[];var x,e,h,p;m=[[0,2,-6,-8],[-4,-2,6,4],[7,-1,-5,3],[-3,5,1,-7]];var R;var q=0;for(R=l.length;q<R;q++){var t=Math.round(q*(d.length-1)/R);t=$3Dmol.CC.color(d[t]);y.push(x=l[q]);y.push(x);y.push(e=n[q]);y.push(e);if(q<R-1){var H=l[q+1].clone().sub(l[q]);H=n[q].clone().sub(l[q]).cross(H).normalize().multiplyScalar(g)}y.push(h=l[q].clone().add(H));y.push(h);y.push(p=n[q].clone().add(H));y.push(p);if(void 0!==x.atom)var u=x.atom;f=c.updateGeoGroup(8);var E=f.vertexArray;var L=f.colorArray;var M=
f.faceArray;w=f.vertices;var F=3*w;E[F]=x.x;E[F+1]=x.y;E[F+2]=x.z;E[F+3]=x.x;E[F+4]=x.y;E[F+5]=x.z;E[F+6]=e.x;E[F+7]=e.y;E[F+8]=e.z;E[F+9]=e.x;E[F+10]=e.y;E[F+11]=e.z;E[F+12]=h.x;E[F+13]=h.y;E[F+14]=h.z;E[F+15]=h.x;E[F+16]=h.y;E[F+17]=h.z;E[F+18]=p.x;E[F+19]=p.y;E[F+20]=p.z;E[F+21]=p.x;E[F+22]=p.y;E[F+23]=p.z;for(E=0;8>E;++E)L[F+3*E]=t.r,L[F+1+3*E]=t.g,L[F+2+3*E]=t.b;if(0<q)for(L=void 0!==U&&void 0!==u&&U.serial!==u.serial,E=0;4>E;E++)if(F=[w+m[E][0],w+m[E][1],w+m[E][2],w+m[E][3]],e=f.faceidx,M[e]=
F[0],M[e+1]=F[1],M[e+2]=F[3],M[e+3]=F[1],M[e+4]=F[2],M[e+5]=F[3],f.faceidx+=6,u.clickable||U.clickable||u.hoverable||U.hoverable){p=y[F[3]].clone();e=y[F[0]].clone();var J=y[F[2]].clone();h=y[F[1]].clone();p.atom=y[F[3]].atom||null;J.atom=y[F[2]].atom||null;e.atom=y[F[0]].atom||null;h.atom=y[F[1]].atom||null;if(L){var Q=p.clone().add(e).multiplyScalar(.5),W=J.clone().add(h).multiplyScalar(.5),V=p.clone().add(h).multiplyScalar(.5);if(0===E%2){if(U.clickable||U.hoverable)F=new $3Dmol.Triangle(Q,V,p),
x=new $3Dmol.Triangle(W,J,V),p=new $3Dmol.Triangle(V,J,p),U.intersectionShape.triangle.push(F),U.intersectionShape.triangle.push(x),U.intersectionShape.triangle.push(p);if(u.clickable||u.hoverable)F=new $3Dmol.Triangle(e,h,V),x=new $3Dmol.Triangle(h,W,V),p=new $3Dmol.Triangle(e,V,Q),u.intersectionShape.triangle.push(F),u.intersectionShape.triangle.push(x),u.intersectionShape.triangle.push(p)}else{if(u.clickable||u.hoverable)F=new $3Dmol.Triangle(Q,V,p),x=new $3Dmol.Triangle(W,J,V),p=new $3Dmol.Triangle(V,
J,p),u.intersectionShape.triangle.push(F),u.intersectionShape.triangle.push(x),u.intersectionShape.triangle.push(p);if(U.clickable||U.hoverable)F=new $3Dmol.Triangle(e,h,V),x=new $3Dmol.Triangle(h,W,V),p=new $3Dmol.Triangle(e,V,Q),U.intersectionShape.triangle.push(F),U.intersectionShape.triangle.push(x),U.intersectionShape.triangle.push(p)}}else if(u.clickable||u.hoverable)F=new $3Dmol.Triangle(e,h,p),x=new $3Dmol.Triangle(h,J,p),u.intersectionShape.triangle.push(F),u.intersectionShape.triangle.push(x)}f.vertices+=
8;var U=u}d=y.length-8;f=c.updateGeoGroup(8);E=f.vertexArray;L=f.colorArray;M=f.faceArray;w=f.vertices;F=3*w;e=f.faceidx;for(q=0;4>q;q++)y.push(y[2*q]),y.push(y[d+2*q]),g=y[2*q],c=y[d+2*q],E[F+6*q]=g.x,E[F+1+6*q]=g.y,E[F+2+6*q]=g.z,E[F+3+6*q]=c.x,E[F+4+6*q]=c.y,E[F+5+6*q]=c.z,L[F+6*q]=t.r,L[F+1+6*q]=t.g,L[F+2+6*q]=t.b,L[F+3+6*q]=t.r,L[F+4+6*q]=t.g,L[F+5+6*q]=t.b;F=[w,w+2,w+6,w+4];x=[w+1,w+5,w+7,w+3];M[e]=F[0];M[e+1]=F[1];M[e+2]=F[3];M[e+3]=F[1];M[e+4]=F[2];M[e+5]=F[3];M[e+6]=x[0];M[e+7]=x[1];M[e+
8]=x[3];M[e+9]=x[1];M[e+10]=x[2];M[e+11]=x[3];f.faceidx+=12;f.vertices+=8}else b(c,l,n,d,y,w)}}else if("rectangle"===m||"oval"===m||"parabola"===m)if(t=m,u=n.length,!(2>u||2>n[0].length)){f=f||axisDIV;for(U=0;U<u;U++)n[U]=$3Dmol.subdivide_spline(n[U],f);H=n[0].length;if(g){w=[];f=[];m=[];for(E=0;E<u;E++)w.push(.25+1.5*Math.sqrt((u-1)*E-Math.pow(E,2))/(u-1)),f.push(.5),m.push(2*(Math.pow(E/u,2)-E/u)+.6);R=[];for(E=0;E<2*u-1;E++)R[E]=[E,E+1,E+1-2*u,E-2*u];R[2*u-1]=[E,E+1-2*u,E+1-4*u,E-2*u];c=c.updateGeoGroup(2*
u*H);for(U=0;U<H;U++){E=Math.round(U*(d.length-1)/H);x=$3Dmol.CC.color(d[E]);L=y;F=q;y=[];q=[];e=[];void 0!==n[0][U].atom&&(M=n[0][U].atom,"oval"===t?l=w:"rectangle"===t?l=f:"parabola"===t&&(l=m));l||(l=f);for(E=0;E<u;E++)h=U<H-1?n[E][U+1].clone().sub(n[E][U]):n[E][U-1].clone().sub(n[E][U]).negate(),p=E<u-1?n[E+1][U].clone().sub(n[E][U]):n[E-1][U].clone().sub(n[E][U]).negate(),e[E]=p.cross(h).normalize().multiplyScalar(g*l[E]);for(E=0;E<u;E++)y[E]=n[E][U].clone().add(e[E].clone().negate());for(E=
0;E<u;E++)q[E]=n[E][U].clone().add(e[E]);J=c.vertexArray;p=c.colorArray;e=c.faceArray;h=c.vertices;Q=3*h;for(E=0;E<u;E++)J[Q+3*E+0]=y[E].x,J[Q+3*E+1]=y[E].y,J[Q+3*E+2]=y[E].z;for(E=0;E<u;E++)J[Q+3*E+0+3*u]=q[u-1-E].x,J[Q+3*E+1+3*u]=q[u-1-E].y,J[Q+3*E+2+3*u]=q[u-1-E].z;for(E=0;E<2*u;++E)p[Q+3*E+0]=x.r,p[Q+3*E+1]=x.g,p[Q+3*E+2]=x.b;if(0<U){for(E=0;E<2*u;E++)x=[h+R[E][0],h+R[E][1],h+R[E][2],h+R[E][3]],p=c.faceidx,e[p]=x[0],e[p+1]=x[1],e[p+2]=x[3],e[p+3]=x[1],e[p+4]=x[2],e[p+5]=x[3],c.faceidx+=6;if(M.clickable||
M.hoverable)for(E in x=[],x.push(new $3Dmol.Triangle(L[0],y[0],y[u-1])),x.push(new $3Dmol.Triangle(L[0],y[u-1],L[u-1])),x.push(new $3Dmol.Triangle(L[u-1],y[u-1],q[u-1])),x.push(new $3Dmol.Triangle(L[u-1],q[u-1],F[u-1])),x.push(new $3Dmol.Triangle(q[0],F[0],F[u-1])),x.push(new $3Dmol.Triangle(q[u-1],q[0],F[u-1])),x.push(new $3Dmol.Triangle(y[0],L[0],F[0])),x.push(new $3Dmol.Triangle(q[0],y[0],F[0])),x)M.intersectionShape.triangle.push(x[E])}c.vertices+=2*u}e=c.faceArray;h=c.vertices;for(U=0;U<u-1;U++)x=
[U,U+1,2*u-2-U,2*u-1-U],p=c.faceidx,e[p]=x[0],e[p+1]=x[1],e[p+2]=x[3],e[p+3]=x[1],e[p+4]=x[2],e[p+5]=x[3],c.faceidx+=6;for(U=0;U<u-1;U++)x=[h-1-U,h-2-U,h-2*u+U+1,h-2*u+U],p=c.faceidx,e[p]=x[0],e[p+1]=x[1],e[p+2]=x[3],e[p+3]=x[1],e[p+4]=x[2],e[p+5]=x[3],c.faceidx+=6}else b(c,n[0],n[u-1],d,f,w)}},h=function(b,c){if(b&&c&&b.chain===c.chain){if(b.reschain===c.reschain&&(b.resi===c.resi||b.resi===c.resi-1))return!0;if(b.resi<c.resi){var n=b.x-c.x,d=b.y-c.y;b=b.z-c.z;if(16>n*n+d*d+b*b)return!0}}return!1},
e=function(b,c,d,f,g){null!=c&&0!=c.vertices&&(g&&(c.initTypedArrays(),c.setUpNormals()),g=new $3Dmol.MeshDoubleLambertMaterial,g.vertexColors=$3Dmol.FaceColors,"number"===typeof d&&0<=d&&1>d&&(g.transparent=!0,g.opacity=d),g.outline=f,c=new $3Dmol.Mesh(c,g),b.add(c))},t={C:!0,CA:!0,O:!0,P:!0,OP2:!0,O2P:!0,"O5'":!0,"O3'":!0,"C5'":!0,"C2'":!0,"O5*":!0,"O3*":!0,"C5*":!0,"C2*":!0,N1:!0,N3:!0},g={DA:!0,DG:!0,A:!0,G:!0},q={DT:!0,DC:!0,U:!0,C:!0,T:!0},p={DA:!0,DG:!0,A:!0,G:!0,DT:!0,DC:!0,U:!0,C:!0,T:!0},
u=function(b,n,y,f,x,w,R){w=w||5;R=R||5;var l,A,u=new $3Dmol.Geometry(!0),G=new $3Dmol.Geometry(!0),C=[],z=[],D=1,I=!1,K={};for(L in $3Dmol.Gradient.builtinGradients)$3Dmol.Gradient.builtinGradients.hasOwnProperty(L)&&(K[L]=new $3Dmol.Gradient.builtinGradients[L](y[1],y[0]));var H=function(b,c){return y&&"spectrum"===c.color?c.colorscheme in K?K[c.colorscheme].valueToHex(b.resi):K.sinebow.valueToHex(b.resi):$3Dmol.getColorFromStyle(b,c).getHex()};for(A=0;A<w;A++)z[A]=[];var N=l=!1;A=0;var E=[];for(A in n){var L=
n[A];if("C"===L.elem&&"CA"===L.atom){var M=h(J,L);M&&"s"===L.ss?l=!0:l&&(J&&F&&J.style.cartoon.arrows&&F.style.cartoon.arrows&&(J.ss="arrow end",F.ss="arrow start"),l=!1);M&&("h"===J.ss||"tube start"==J.ss)&&J.style.cartoon.tubes?!N&&"tube start"!=J.ss&&L.style.cartoon.tubes&&(L.ss="tube start",N=!0):N&&("tube start"===J.ss?J.ss="tube end":F&&F.style.cartoon.tubes&&(F.ss="tube end"),N=!1);var F=J;var J=L}L&&L.atom in t&&E.push(L)}N&&J.style.cartoon.tubes&&(J.ss="tube end",N=!1);n=function(n){for(var l,
g,m=0;!W&&m<w;m++)c(b,z[m],1,C,R,D);f&&0<z[0].length&&d(G,z,C,R,W,D,z.style);if(n){g=[];for(m=0;m<w;m++)g[m]=z[m][z[m].length-1];l=C[C.length-1]}z=[];for(m=0;m<w;m++)z[m]=[];C=[];if(n){for(m=0;m<w;m++)z[m].push(g[m]);C.push(l)}e(b,G,D,I,!0);e(b,u,D,I,!1);G=new $3Dmol.Geometry(!0);u=new $3Dmol.Geometry(!0)};J=void 0;for(F=0;F<E.length;F++)if(L=E[F],A=L.resn.trim(),N=A in p,D=1,l=L.style.cartoon,J&&J.style.cartoon&&(D=J.style.cartoon.opacity),J&&J.style.cartoon&&J.style.cartoon.outline&&(I=J.style.cartoon.outline),
!J||!J.style.cartoon||L.style.cartoon&&J.style.cartoon.opacity==L.style.cartoon.opacity||n(J.chain==L.chain),z.length&&z[0].length>3E4/w/R/2&&n(!0),"trace"===l.style){if(!L.hetflag&&("C"===L.elem&&"CA"===L.atom||N&&"P"===L.atom)){var Q=H(L,l);var W=$.isNumeric(l.thickness)?l.thickness:.4;if(h(J,L))if(Q==V){var V=$3Dmol.CC.color(Q);$3Dmol.GLDraw.drawCylinder(u,J,L,W,V,2,2)}else l=(new $3Dmol.Vector3).addVectors(J,L).multiplyScalar(.5),V=$3Dmol.CC.color(V),A=$3Dmol.CC.color(Q),$3Dmol.GLDraw.drawCylinder(u,
J,l,W,V,2,0),$3Dmol.GLDraw.drawCylinder(u,l,L,W,A,0,2);J=L;V=Q}}else{if(L&&"C"===L.elem&&"CA"===L.atom||N&&("P"===L.atom||0==L.atom.indexOf("O5"))){if(U)if("tube end"===L.ss){var U=!1;A=new $3Dmol.Vector3(L.x,L.y,L.z);$3Dmol.GLDraw.drawCylinder(u,ca,A,2,$3Dmol.CC.color(V),1,1);L.ss="h"}else if(J.chain!=L.chain||"tube end"===J.ss)U=!1,J.ss="h",A=new $3Dmol.Vector3(J.x,J.y,J.z),$3Dmol.GLDraw.drawCylinder(u,ca,A,2,$3Dmol.CC.color(V),1,1);else continue;if(J&&(!h(J,L)||"tube start"===J.ss)){if("tube start"===
J.ss){U=!0;var ca=new $3Dmol.Vector3(J.x,J.y,J.z);J.ss="h"}if(S){A=B?(new $3Dmol.Vector3).addVectors(J,B).multiplyScalar(.5):new $3Dmol.Vector3(J.x,J.y,J.z);$3Dmol.GLDraw.drawCylinder(u,A,S,.4,$3Dmol.CC.color(S.color),0,2);m(z,w,!x,B,aa,Y,J,E,F);C.push(Q);var S=A=null}for(A=0;!W&&A<w;A++)c(b,z[A],1,C,R,D);f&&0<z[0].length&&d(G,z,C,R,W,D,z.style);z=[];for(A=0;A<w;A++)z[A]=[];C=[]}if(void 0===J||J.rescode!=L.rescode||J.resi!=L.resi){S&&(A=(new $3Dmol.Vector3).addVectors(J,L).multiplyScalar(.5),J=A.clone().sub(S).multiplyScalar(.02),
A.add(J),$3Dmol.GLDraw.drawCylinder(u,A,S,.4,$3Dmol.CC.color(S.color),0,2),S=A=null);Q=H(L,l);C.push(Q);W=$.isNumeric(l.thickness)?l.thickness:.4;J=L;var O=new $3Dmol.Vector3(J.x,J.y,J.z);O.resi=J.resi;V=Q}!0!==L.clickable&&!0!==L.hoverable||void 0!==L.intersectionShape&&void 0!==L.intersectionShape.triangle||(L.intersectionShape={sphere:null,cylinder:[],line:[],triangle:[]})}else if(J&&"C"===J.elem&&"CA"===J.atom&&"O"===L.atom||N&&"P"===J.atom&&("OP2"===L.atom||"O2P"===L.atom)||N&&0==J.atom.indexOf("O5")&&
0==L.atom.indexOf("C5")){var Z=new $3Dmol.Vector3(L.x,L.y,L.z);Z.resi=L.resi;if("OP2"===L.atom||"O2P"===L.atom)var aa=new $3Dmol.Vector3(L.x,L.y,L.z)}else if(N&&0==L.atom.indexOf("O3"))var B=new $3Dmol.Vector3(L.x,L.y,L.z);else if("N1"===L.atom&&A in g||"N3"===L.atom&&A in q)S=new $3Dmol.Vector3(L.x,L.y,L.z),S.color=$3Dmol.getColorFromStyle(L,l).getHex();if(Z&&O&&Z.resi===O.resi){m(z,w,!x,O,Z,Y,J,E,F);var Y=Z;Z=O=null;C.push(Q)}}S&&(A=B?(new $3Dmol.Vector3).addVectors(J,B).multiplyScalar(.5):new $3Dmol.Vector3(J.x,
J.y,J.z),$3Dmol.GLDraw.drawCylinder(u,A,S,.4,$3Dmol.CC.color(S.color),0,2),m(z,w,!x,B,aa,Y,J,E,F),C.push(Q));n()},m=function(b,c,d,g,m,w,e,h,p){if(g&&m&&e){var n=m.sub(g);n.normalize();var l=h[p];for(p+=1;p<h.length&&(l=h[p],l.atom!=e.atom);p++);l=l?new $3Dmol.Vector3(l.x,l.y,l.z):new $3Dmol.Vector3(0,0,0);l.sub(g);"arrow start"===e.ss&&(p=l.clone().multiplyScalar(.3).cross(m),g.add(p),p=l.clone().cross(n).normalize(),n.rotateAboutVector(p,.43));if(e.style.cartoon.ribbon)p=e.style.cartoon.thickness||
.4;else if(e.style.cartoon.width)p=e.style.cartoon.width;else if("c"===e.ss)p="P"===e.atom?.8:.5;else if("arrow start"===e.ss){p=1.3;var f=!0}else p="arrow end"===e.ss?.5:"h"===e.ss&&e.style.cartoon.tubes||"tube start"===e.ss?.5:1.3;null!=w&&0>n.dot(w)&&n.negate();n.multiplyScalar(p);for(p=0;p<c;p++)w=-1+2*p/(c-1),w=new $3Dmol.Vector3(g.x+w*n.x,g.y+w*n.y,g.z+w*n.z),w.atom=e,d&&"s"===e.ss&&(w.smoothen=!0),b[p].push(w);if(f)for(n.multiplyScalar(2),p=0;p<c;p++)w=-1+2*p/(c-1),w=new $3Dmol.Vector3(g.x+
w*n.x,g.y+w*n.y,g.z+w*n.z),w.atom=e,w.smoothen=!1,w.skip=!0,b[p].push(w);c=e.style.cartoon.style||"default";b.style?b.style!=c&&(console.log("Warning: a cartoon chain's strand-style is ambiguous"),b.style="default"):b.style=c;if("arrow start"===e.ss||"arrow end"===e.ss)e.ss="s";return f}};return function(b,c,d,g){g=g||5;u(b,c,d,!0,!1,g,g)}}();$3Dmol=$3Dmol||{};$3Dmol.CAP={NONE:0,FLAT:1,ROUND:2};
$3Dmol.GLDraw=function(){var b={},c=function(){var b=new $3Dmol.Vector3;return function(c){b.set(c[0],c[1],c[2]);var d=b.x,g=b.y,m=b.z,l=Math.sqrt(d*d+g*g);1E-4>l?(c=0,l=1):(c=-d/l,l=g/l);g=-c*d+l*g;d=Math.sqrt(g*g+m*m);1E-4>d?(m=0,g=1):(m/=d,g/=d);d=new Float32Array(9);d[0]=l;d[1]=c;d[2]=0;d[3]=-c*g;d[4]=l*g;d[5]=m;d[6]=c*m;d[7]=-l*m;d[8]=g;return d}}(),d=function(){var b=[],c=Math.pow(2,4),d,e=Math.pow(2,2),m=c/e,l;b[0]=new $3Dmol.Vector3(-1,0,0);b[m]=new $3Dmol.Vector3(0,0,1);b[2*m]=new $3Dmol.Vector3(1,
0,0);b[3*m]=new $3Dmol.Vector3(0,0,-1);for(d=3;4>=d;d++){e=Math.pow(2,d-1);m=c/e;for(l=0;l<e-1;l++)b[m/2+l*m]=b[l*m].clone().add(b[(l+1)*m]).normalize();l=e-1;b[m/2+l*m]=b[l*m].clone().add(b[0]).normalize()}return b}(),h={cache:{},getVerticesForRadius:function(b,c,e){if(void 0!==this.cache[b]&&void 0!==this.cache[b][c+e])return this.cache[b][c+e];new $3Dmol.Vector3(0,1,0);for(var g=d.length,m=[],l=[],n,y=0;y<g;y++)m.push(d[y].clone().multiplyScalar(b)),m.push(d[y].clone().multiplyScalar(b)),n=d[y].clone().normalize(),
l.push(n),l.push(n);y=[];var f=2*Math.PI,x=Math.PI,w,h;for(h=0;10>=h;h++){var p=0===h||10===h?!0:!1;var q=5===h?!0:!1;var t=[],G=[];for(w=0;w<=g;w++)if(q){var C=w<g?2*w:0;G.push(C+1);t.push(C)}else{n=w/g;var z=h/10;p&&0!==w?p&&t.push(m.length-1):w<g?(C=new $3Dmol.Vector3,C.x=-b*Math.cos(0+n*f)*Math.sin(0+z*x),C.y=1==c?0:b*Math.cos(0+z*x),C.z=b*Math.sin(0+n*f)*Math.sin(0+z*x),1E-5>Math.abs(C.x)&&(C.x=0),1E-5>Math.abs(C.y)&&(C.y=0),1E-5>Math.abs(C.z)&&(C.z=0),n=c==$3Dmol.CAP.FLAT?new $3Dmol.Vector3(0,
Math.cos(0+z*x),0):new $3Dmol.Vector3(C.x,C.y,C.z),n.normalize(),m.push(C),l.push(n),t.push(m.length-1)):t.push(m.length-g)}q&&y.push(G);y.push(t)}g={vertices:m,normals:l,verticesRows:y,w:g,h:10};b in this.cache||(this.cache[b]={});return this.cache[b][c+e]=g}},e=0;b.drawCylinder=function(b,d,p,t,m,l,n){if(d&&p){e++;var g=n||l;m=m||{r:0,g:0,b:0};var f=[p.x,p.y,p.z];f[0]-=d.x;f[1]-=d.y;f[2]-=d.z;f=c(f);var x=h.getVerticesForRadius(t,n,"to"),w=x.w,q=x.h,P=g?q*w+2:2*w;b=b.updateGeoGroup(P);var A=x.vertices,
u=x.normals;x=x.verticesRows;var G=x[q/2],C=x[q/2+1],z=b.vertices,D,I=b.vertexArray,K=b.normalArray,H=b.colorArray,N=b.faceArray;for(D=0;D<w;++D){var E=2*D;var L=f[0]*A[E].x+f[3]*A[E].y+f[6]*A[E].z;var M=f[1]*A[E].x+f[4]*A[E].y+f[7]*A[E].z;var F=f[5]*A[E].y+f[8]*A[E].z;var J=3*(z+E);E=b.faceidx;I[J]=L+d.x;I[J+1]=M+d.y;I[J+2]=F+d.z;I[J+3]=L+p.x;I[J+4]=M+p.y;I[J+5]=F+p.z;K[J]=L;K[J+3]=L;K[J+1]=M;K[J+4]=M;K[J+2]=F;K[J+5]=F;H[J]=m.r;H[J+3]=m.r;H[J+1]=m.g;H[J+4]=m.g;H[J+2]=m.b;H[J+5]=m.b;N[E]=C[D]+z;N[E+
1]=C[D+1]+z;N[E+2]=G[D]+z;N[E+3]=G[D]+z;N[E+4]=C[D+1]+z;N[E+5]=G[D+1]+z;b.faceidx+=6}if(g)for(g=l?q+1:q/2+1,M=n?0:q/2;M<g;M++)if(M!==q/2)for(G=M<=q/2?p:d,L=h.getVerticesForRadius(t,n,"to"),E=h.getVerticesForRadius(t,l,"from"),G===p?(A=L.vertices,u=L.normals,x=L.verticesRows):G==d&&(A=E.vertices,u=E.normals,x=E.verticesRows),L=0;L<w;L++){E=b.faceidx;C=x[M][L+1];var Q=3*(C+z);D=x[M][L];var W=3*(D+z);F=x[M+1][L];var V=3*(F+z);J=x[M+1][L+1];var U=3*(J+z);var ca=f[0]*A[C].x+f[3]*A[C].y+f[6]*A[C].z;var S=
f[0]*A[D].x+f[3]*A[D].y+f[6]*A[D].z;var O=f[0]*A[F].x+f[3]*A[F].y+f[6]*A[F].z;var Z=f[0]*A[J].x+f[3]*A[J].y+f[6]*A[J].z;var aa=f[1]*A[C].x+f[4]*A[C].y+f[7]*A[C].z;var B=f[1]*A[D].x+f[4]*A[D].y+f[7]*A[D].z;var Y=f[1]*A[F].x+f[4]*A[F].y+f[7]*A[F].z;var X=f[1]*A[J].x+f[4]*A[J].y+f[7]*A[J].z;var da=f[5]*A[C].y+f[8]*A[C].z;var ma=f[5]*A[D].y+f[8]*A[D].z;var qa=f[5]*A[F].y+f[8]*A[F].z;var ha=f[5]*A[J].y+f[8]*A[J].z;I[Q]=ca+G.x;I[W]=S+G.x;I[V]=O+G.x;I[U]=Z+G.x;I[Q+1]=aa+G.y;I[W+1]=B+G.y;I[V+1]=Y+G.y;I[U+
1]=X+G.y;I[Q+2]=da+G.z;I[W+2]=ma+G.z;I[V+2]=qa+G.z;I[U+2]=ha+G.z;H[Q]=m.r;H[W]=m.r;H[V]=m.r;H[U]=m.r;H[Q+1]=m.g;H[W+1]=m.g;H[V+1]=m.g;H[U+1]=m.g;H[Q+2]=m.b;H[W+2]=m.b;H[V+2]=m.b;H[U+2]=m.b;ca=f[0]*u[C].x+f[3]*u[C].y+f[6]*u[C].z;S=f[0]*u[D].x+f[3]*u[D].y+f[6]*u[D].z;O=f[0]*u[F].x+f[3]*u[F].y+f[6]*u[F].z;Z=f[0]*u[J].x+f[3]*u[J].y+f[6]*u[J].z;aa=f[1]*u[C].x+f[4]*u[C].y+f[7]*u[C].z;B=f[1]*u[D].x+f[4]*u[D].y+f[7]*u[D].z;Y=f[1]*u[F].x+f[4]*u[F].y+f[7]*u[F].z;X=f[1]*u[J].x+f[4]*u[J].y+f[7]*u[J].z;da=f[5]*
u[C].y+f[8]*u[C].z;ma=f[5]*u[D].y+f[8]*u[D].z;qa=f[5]*u[F].y+f[8]*u[F].z;ha=f[5]*u[J].y+f[8]*u[J].z;0===M?(K[Q]=ca,K[V]=O,K[U]=Z,K[Q+1]=aa,K[V+1]=Y,K[U+1]=X,K[Q+2]=da,K[V+2]=qa,K[U+2]=ha,N[E]=C+z,N[E+1]=F+z,N[E+2]=J+z,b.faceidx+=3):M===g-1?(K[Q]=ca,K[W]=S,K[V]=O,K[Q+1]=aa,K[W+1]=B,K[V+1]=Y,K[Q+2]=da,K[W+2]=ma,K[V+2]=qa,N[E]=C+z,N[E+1]=D+z,N[E+2]=F+z,b.faceidx+=3):(K[Q]=ca,K[W]=S,K[U]=Z,K[Q+1]=aa,K[W+1]=B,K[U+1]=X,K[Q+2]=da,K[W+2]=ma,K[U+2]=ha,K[W]=S,K[V]=O,K[U]=Z,K[W+1]=B,K[V+1]=Y,K[U+1]=X,K[W+2]=
ma,K[V+2]=qa,K[U+2]=ha,N[E]=C+z,N[E+1]=D+z,N[E+2]=J+z,N[E+3]=D+z,N[E+4]=F+z,N[E+5]=J+z,b.faceidx+=6)}b.vertices+=P}};b.drawCone=function(b,e,h,t,m){if(e&&h){console.log(e);console.log(h);m=m||{r:0,g:0,b:0};var l=[h.x,h.y,h.z];l.x-=e.x;l.y-=e.y;l.z-=e.z;var n=c(l),g=d.length;b=b.updateGeoGroup(g+2);var f=b.vertices,x=b.vertexArray,w=b.normalArray,p=b.colorArray,q=b.faceArray;var A=3*f;l=(new $3Dmol.Vector3(l[0],l[1],l[2])).normalize();x[A]=e.x;x[A+1]=e.y;x[A+2]=e.z;w[A]=-l.x;w[A+1]=-l.y;w[A+2]=-l.z;
p[A]=m.r;p[A+1]=m.g;p[A+2]=m.b;x[A+3]=h.x;x[A+4]=h.y;x[A+5]=h.z;w[A+3]=l.x;w[A+4]=l.y;w[A+5]=l.z;p[A+3]=m.r;p[A+4]=m.g;p[A+5]=m.b;A+=6;for(h=0;h<g;++h){var u=d[h].clone();u.multiplyScalar(t);l=n[0]*u.x+n[3]*u.y+n[6]*u.z;var G=n[1]*u.x+n[4]*u.y+n[7]*u.z;u=n[5]*u.y+n[8]*u.z;x[A]=l+e.x;x[A+1]=G+e.y;x[A+2]=u+e.z;w[A]=l;w[A+1]=G;w[A+2]=u;p[A]=m.r;p[A+1]=m.g;p[A+2]=m.b;A+=3}b.vertices+=g+2;e=b.faceidx;for(h=0;h<g;h++)t=f+2+h,m=f+2+(h+1)%g,q[e]=t,q[e+1]=m,q[e+2]=f,e+=3,q[e]=t,q[e+1]=m,q[e+2]=f+1,e+=3;b.faceidx+=
6*g}};var t={cache:{},getVerticesForRadius:function(b){if("undefined"!==typeof this.cache[b])return this.cache[b];var c={vertices:[],verticesRows:[],normals:[]},d=16,g=10;1>b&&(d=10,g=8);var e=2*Math.PI,l=Math.PI,n,y;for(y=0;y<=g;y++){var f=[];for(n=0;n<=d;n++){var x=n/d,w=y/g,h={};h.x=-b*Math.cos(0+x*e)*Math.sin(0+w*l);h.y=b*Math.cos(0+w*l);h.z=b*Math.sin(0+x*e)*Math.sin(0+w*l);x=new $3Dmol.Vector3(h.x,h.y,h.z);x.normalize();c.vertices.push(h);c.normals.push(x);f.push(c.vertices.length-1)}c.verticesRows.push(f)}return this.cache[b]=
c}};b.drawSphere=function(b,c,d,e){new $3Dmol.Vector3(c.x,c.y,c.z);var g=t.getVerticesForRadius(d),l=g.vertices,n=g.normals;b=b.updateGeoGroup(l.length);for(var h=b.vertices,f=b.vertexArray,x=b.colorArray,w=b.faceArray,p=b.lineArray,q=b.normalArray,A=0,u=l.length;A<u;++A){var G=3*(h+A),C=l[A];f[G]=C.x+c.x;f[G+1]=C.y+c.y;f[G+2]=C.z+c.z;x[G]=e.r;x[G+1]=e.g;x[G+2]=e.b}b.vertices+=l.length;g=g.verticesRows;f=g.length-1;for(e=0;e<f;e++)for(x=g[e].length-1,c=0;c<x;c++){A=b.faceidx;u=b.lineidx;G=g[e][c+
1]+h;C=3*G;var z=g[e][c]+h,D=3*z,I=g[e+1][c]+h,K=3*I,H=g[e+1][c+1]+h,N=3*H,E=n[G-h],L=n[z-h],M=n[I-h],F=n[H-h];Math.abs(l[G-h].y)===d?(q[C]=E.x,q[K]=M.x,q[N]=F.x,q[C+1]=E.y,q[K+1]=M.y,q[N+1]=F.y,q[C+2]=E.z,q[K+2]=M.z,q[N+2]=F.z,w[A]=G,w[A+1]=I,w[A+2]=H,p[u]=G,p[u+1]=I,p[u+2]=G,p[u+3]=H,p[u+4]=I,p[u+5]=H,b.faceidx+=3,b.lineidx+=6):Math.abs(l[I-h].y)===d?(q[C]=E.x,q[D]=L.x,q[K]=M.x,q[C+1]=E.y,q[D+1]=L.y,q[K+1]=M.y,q[C+2]=E.z,q[D+2]=L.z,q[K+2]=M.z,w[A]=G,w[A+1]=z,w[A+2]=I,p[u]=G,p[u+1]=z,p[u+2]=G,p[u+
3]=I,p[u+4]=z,p[u+5]=I,b.faceidx+=3,b.lineidx+=6):(q[C]=E.x,q[D]=L.x,q[N]=F.x,q[C+1]=E.y,q[D+1]=L.y,q[N+1]=F.y,q[C+2]=E.z,q[D+2]=L.z,q[N+2]=F.z,q[D]=L.x,q[K]=M.x,q[N]=F.x,q[D+1]=L.y,q[K+1]=M.y,q[N+1]=F.y,q[D+2]=L.z,q[K+2]=M.z,q[N+2]=F.z,w[A]=G,w[A+1]=z,w[A+2]=H,w[A+3]=z,w[A+4]=I,w[A+5]=H,p[u]=G,p[u+1]=z,p[u+2]=G,p[u+3]=H,p[u+4]=z,p[u+5]=I,p[u+6]=I,p[u+7]=H,b.faceidx+=6,b.lineidx+=8)}};return b}();$3Dmol=$3Dmol||{};
$3Dmol.GLModel=function(){function b(e,h){var g=[],q=[],p=null,t=null,m=!1,l=null,n=null,y=null,f={},x=new $3Dmol.Matrix4,w=!0,R=$3Dmol.elementColors.defaultColor;h=h?h:{};var P=h.defaultcolors?h.defaultcolors:$3Dmol.elementColors.defaultColors,A=h.defaultSphereRadius?h.defaultSphereRadius:1.5,T=h.cartoonQuality?h.cartoonQuality:5,G=function(b,c){var n=A;"undefined"!=typeof c.radius?n=c.radius:d[b.elem]&&(n=d[b.elem]);"undefined"!=typeof c.scale&&(n*=c.scale);return n},C=function(b,c,d){var n=function(b,
c){for(var d=null,n=-1,y=0,p=b.bonds.length;y<p;y++)if(b.bonds[y]!=c.index){m=b.bonds[y];x=g[m];h=new $3Dmol.Vector3(x.x,x.y,x.z);w=h.clone();w.sub(l);e=w.clone();e.cross(f);var J=e.lengthSq();if(J>n&&(n=J,d=e,.1<n))break}return d},l=new $3Dmol.Vector3(b.x,b.y,b.z),f=(new $3Dmol.Vector3(c.x,c.y,c.z)).clone(),e=null;f.sub(l);if(1===b.bonds.length)if(1===c.bonds.length)e=f.clone(),1E-4<Math.abs(e.x)?e.y+=1:e.x+=1;else{b=(d+1)%c.bonds.length;var m=c.bonds[b];var x=g[m];var h=new $3Dmol.Vector3(x.x,x.y,
x.z);var w=h.clone();w.sub(l);e=w.clone();e.cross(f)}else e=n(b,c),.01>e.lengthSq()&&(c=n(c,b),null!=c&&(e=c));.01>e.lengthSq()&&(e=f.clone(),1E-4<Math.abs(e.x)?e.y+=1:e.x+=1);e.cross(f);e.normalize();return e},z=function(b,c,d,n,l,f){b[d]=n.x;b[d+1]=n.y;b[d+2]=n.z;c[d]=f.r;c[d+1]=f.g;c[d+2]=f.b;b[d+3]=l.x;b[d+4]=l.y;b[d+5]=l.z;c[d+3]=f.r;c[d+4]=f.g;c[d+5]=f.b},D=function(b,c){if(b.style.sphere){var d=b.style.sphere;if(!d.hidden){var n=$3Dmol.getColorFromStyle(b,d);d=G(b,d);if((!0===b.clickable||
b.hoverable)&&void 0!==b.intersectionShape){var l=new $3Dmol.Vector3(b.x,b.y,b.z);b.intersectionShape.sphere.push(new $3Dmol.Sphere(l,d))}$3Dmol.GLDraw.drawSphere(c,b,d,n)}}},I=function(b,c){if(b.style.sphere){var d=b.style.sphere;if(!d.hidden){var n=G(b,d);d=$3Dmol.getColorFromStyle(b,d);c=c.updateGeoGroup(1);var l=c.vertices,f=3*l,e=c.vertexArray,g=c.radiusArray;e[f]=b.x;e[f+1]=b.y;e[f+2]=b.z;e=c.colorArray;e[f]=d.r;e[f+1]=d.g;e[f+2]=d.b;g[l]=n;!0!==b.clickable&&!b.hoverable||void 0===b.intersectionShape||
(d=new $3Dmol.Vector3(b.x,b.y,b.z),b.intersectionShape.sphere.push(new $3Dmol.Sphere(d,n)));c.vertices+=1}}},K=function(b,c,d,n){b=b.updateGeoGroup(4);for(var l=b.vertices,f=3*l,e=b.vertexArray,g=0;4>g;g++)e[f+3*g]=c.x,e[f+3*g+1]=c.y,e[f+3*g+2]=c.z;e=b.normalArray;c=b.colorArray;for(g=0;4>g;g++)c[f+3*g]=n.r,c[f+3*g+1]=n.g,c[f+3*g+2]=n.b;e[f+0]=-d;e[f+1]=d;e[f+2]=0;e[f+3]=-d;e[f+4]=-d;e[f+5]=0;e[f+6]=d;e[f+7]=-d;e[f+8]=0;e[f+9]=d;e[f+10]=d;e[f+11]=0;b.vertices+=4;d=b.faceArray;n=b.faceidx;d[n+0]=l;
d[n+1]=l+1;d[n+2]=l+2;d[n+3]=l+2;d[n+4]=l+3;d[n+5]=l;b.faceidx+=6},H=function(b,c){if(b.style.sphere){var d=b.style.sphere;if(!d.hidden){var n=G(b,d);d=$3Dmol.getColorFromStyle(b,d);if((!0===b.clickable||b.hoverable)&&void 0!==b.intersectionShape){var l=new $3Dmol.Vector3(b.x,b.y,b.z);b.intersectionShape.sphere.push(new $3Dmol.Sphere(l,n))}K(c,b,n,d)}}},N=function(b,c,d,n,l,f,e){b=b.updateGeoGroup(4);f=b.vertices;e=b.vertexArray;var g=b.colorArray,m=b.radiusArray,x=b.normalArray,w=l.r,h=l.g;l=l.b;
for(var y=3*f,p=0;4>p;p++){e[y]=c.x;x[y]=d.x;g[y]=w;y++;e[y]=c.y;x[y]=d.y;g[y]=h;y++;e[y]=c.z;x[y]=d.z;if(2>p)g[y]=l;else{var q=y,A=-l;0==A&&(A=-1E-4);g[q]=A}y++}b.vertices+=4;m[f]=-n;m[f+1]=n;m[f+2]=-n;m[f+3]=n;c=b.faceArray;d=b.faceidx;c[d+0]=f;c[d+1]=f+1;c[d+2]=f+2;c[d+3]=f+2;c[d+4]=f+3;c[d+5]=f;b.faceidx+=6};this.getCrystData=function(){return f.cryst?f.cryst:null};this.getSymmetries=function(){"undefined"==typeof f.symmetries&&(f.symmetries=[x]);return f.symmetries};this.setSymmetries=function(b){f.symmetries=
"undefined"==typeof b?[x]:b};this.getID=function(){return e};this.getNumFrames=function(){return void 0!=q.numFrames?q.numFrames:q.length};var E=function(b,c,d,n){b=c-b;return b<-d?c+n:b>d?c-n:c};this.setFrame=function(b){var c=this.getNumFrames();return new Promise(function(d,n){0==c&&d();if(0>b||b>=c)b=c-1;void 0!=q.url?$3Dmol.getbin(q.url+"/traj/frame/"+b+"/"+q.path,null,"POST").then(function(b){b=new Float32Array(b,44);for(var c=0,n=0;n<g.length;n++)g[n].x=b[c++],g[n].y=b[c++],g[n].z=b[c++];if(p&&
t&&p&&t){b=p[0];c=p[1];n=p[2];for(var l=.9*b,f=.9*c,e=.9*n,m=0;m<t.length;m++)for(var x=t[m],w=1;w<x.length;w++){var h=g[x[w][0]],y=g[x[w][1]];h.x=E(y.x,h.x,l,b);h.y=E(y.y,h.y,f,c);h.z=E(y.z,h.z,e,n)}}d()}).catch(n):(g=q[b],d());l=null})};this.addFrame=function(b){q.push(b)};this.vibrate=function(b,c){c=c||1;b=b||10;b--;for(var d=1;d<=b;d++){for(var n=[],l=0;l<g.length;l++){var f=new $3Dmol.Vector3($3Dmol.getAtomProperty(g[l],"dx"),$3Dmol.getAtomProperty(g[l],"dy"),$3Dmol.getAtomProperty(g[l],"dz")),
e=new $3Dmol.Vector3(g[l].x,g[l].y,g[l].z);f.multiplyScalar(d*c/b);e.add(f);f={};for(var m in g[l])f[m]=g[l][m];f.x=e.x;f.y=e.y;f.z=e.z;n.push(f)}q.push(n)}q.unshift(g)};this.setAtomDefaults=function(b){for(var d=0;d<b.length;d++){var n=b[d];n&&(n.style=n.style||c,n.color=n.color||P[n.elem]||R,n.model=e,n.clickable||n.hoverable)&&(n.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]})}};this.addMolData=function(b,c,d){d=d||{};b=$3Dmol.GLModel.parseMolData(b,c,d);w=!d.duplicateAssemblyAtoms;
(c=b.modelData)&&(f=Array.isArray(c)?c[0]:c);p=b.box?b.box:null;if(0==q.length){for(c=0;c<b.length;c++)0!=b[c].length&&q.push(b[c]);q[0]&&(g=q[0])}else if(d.frames)for(c=0;c<b.length;c++)q.push(b[c]);else for(c=0;c<b.length;c++)this.addAtoms(b[c]);for(c=0;c<q.length;c++)this.setAtomDefaults(q[c],e);d.vibrate&&d.vibrate.frames&&d.vibrate.amplitude&&this.vibrate(d.vibrate.frames,d.vibrate.amplitude);d.style&&this.setStyle({},d.style)};this.setDontDuplicateAtoms=function(b){w=b};this.setModelData=function(b){f=
b};var L=function(b,c){if(b==c)return!0;if("string"==typeof c&&"number"==typeof b&&(c=c.match(/(-?\d+)\s*-\s*(-?\d+)/))){var d=parseInt(c[1]),n=parseInt(c[2]);if(c&&b>=d&&b<=n)return!0}return!1};this.atomIsSelected=function(b,c){var d;if("undefined"===typeof c)return!0;var n=!!c.invert,l=!0,f;for(f in c)if("and"==f||"or"==f||"not"==f)if("not"==f){if(this.atomIsSelected(b,c[f])){l=!1;break}}else if("and"==f){var e=c[f];for(d=0;d<e.length;d++)if(!this.atomIsSelected(b,e[d])){l=!1;break}}else{if("or"==
f){l=c[f];e=!0;for(d=0;d<l.length;d++)if(this.atomIsSelected(b,l[d])){e=!0;break}else e=!1;l=e}}else if("predicate"===f){if(!c.predicate(b)){l=!1;break}}else if("properties"==f&&b[f])for(var g in c.properties){if("undefined"===typeof b.properties[g]){l=!1;break}if(b.properties[g]!=c.properties[g]){l=!1;break}}else if(c.hasOwnProperty(f)&&"props"!=f&&"invert"!=f&&"model"!=f&&"byres"!=f&&"expand"!=f&&"within"!=f&&"and"!=f&&"or"!=f&&"not"!=f){if("undefined"===typeof b[f]){l=!1;break}e=!1;if("bonds"===
f){if(d=c[f],d!=b.bonds.length){l=!1;break}}else if($.isArray(c[f])){var m=c[f],x=b[f];for(d=0;d<m.length;d++)if(L(x,m[d])){e=!0;break}if(!e){l=!1;break}}else if(d=c[f],!L(b[f],d)){l=!1;break}}return n?!l:l};this.selectedAtoms=function(b,c){var d,n=[];b=b||{};c||(c=g);for(var l=c.length,f=0;f<l;f++)(d=c[f])&&this.atomIsSelected(d,b)&&n.push(d);if(b.hasOwnProperty("expand")){l=parseFloat(b.expand);if(0>=l)l=n;else{f=$3Dmol.getExtent(n);d=[[],[],[]];for(c=0;3>c;c++)d[0][c]=f[0][c]-l,d[1][c]=f[1][c]+
l,d[2][c]=f[2][c];l=[];for(c=0;c<g.length;c++){var e=g[c].x,m=g[c].y,x=g[c].z;e>=d[0][0]&&e<=d[1][0]&&m>=d[0][1]&&m<=d[1][1]&&x>=d[0][2]&&x<=d[1][2]&&(e>=f[0][0]&&e<=f[1][0]&&m>=f[0][1]&&m<=f[1][1]&&x>=f[0][2]&&x<=f[1][2]||l.push(g[c]))}}e=n.length;for(f=0;f<l.length;f++)for(var h=0;h<e;h++)c=M(l[f],n[h]),d=Math.pow(b.expand,2),c<d&&0<c&&n.push(l[f])}if(b.hasOwnProperty("within")&&b.within.hasOwnProperty("sel")&&b.within.hasOwnProperty("distance")){e=this.selectedAtoms(b.within.sel,g);l={};for(f=
0;f<e.length;f++)for(h=0;h<n.length;h++)c=M(e[f],n[h]),d=Math.pow(parseFloat(b.within.distance),2),c<d&&0<c&&(l[h]=1);f=[];if(b.within.invert)for(h=0;h<n.length;h++)l[h]||f.push(n[h]);else for(h in l)f.push(n[h]);n=f}if(b.hasOwnProperty("byres"))for(b={},c=[],l=[],f=0;f<n.length;f++)if(d=n[f],e=d.chain,m=d.resi,void 0===b[e]&&(b[e]={}),d.hasOwnProperty("resi")&&void 0===b[e][m])for(b[e][m]=!0,l.push(d);0<l.length;)if(d=l.pop(),e=d.chain,m=d.resi,void 0===c[d.index])for(c[d.index]=!0,h=0;h<d.bonds.length;h++)x=
g[d.bonds[h]],void 0===c[x.index]&&x.hasOwnProperty("resi")&&x.chain==e&&x.resi==m&&(l.push(x),n.push(x));return n};var M=function(b,c){return Math.pow(c.x-b.x,2)+Math.pow(c.y-b.y,2)+Math.pow(c.z-b.z,2)};this.addAtoms=function(b){l=null;var d=g.length,n=[],f;for(f=0;f<b.length;f++)"undefined"==typeof b[f].index&&(b[f].index=f),"undefined"==typeof b[f].serial&&(b[f].serial=f),n[b[f].index]=d+f;for(f=0;f<b.length;f++){d=b[f];var m=n[d.index],x=$.extend(!1,{},d);x.index=m;x.bonds=[];x.bondOrder=[];x.model=
e;x.style=x.style||c;"undefined"==typeof x.color&&(x.color=P[x.elem]||R);m=d.bonds?d.bonds.length:0;for(var h=0;h<m;h++){var w=n[d.bonds[h]];"undefined"!=typeof w&&(x.bonds.push(w),x.bondOrder.push(d.bondOrder?d.bondOrder[h]:1))}g.push(x)}};this.removeAtoms=function(b){l=null;var c=[],d;for(d=0;d<b.length;d++)c[b[d].index]=!0;b=[];for(d=0;d<g.length;d++){var n=g[d];c[n.index]||b.push(n)}g=[];this.addAtoms(b)};this.setStyle=function(c,d,n){"undefined"===typeof d&&"undefined"==typeof n&&(d=c,c={});
for(var f in c)b.validAtomSelectionSpecs.hasOwnProperty(f)||console.log("Unknown selector "+f);for(f in d)b.validAtomStyleSpecs.hasOwnProperty(f)||console.log("Unknown style "+f);var e=!1,m=function(b){for(var l=x.selectedAtoms(c,b),g=0;g<b.length;g++)b[g]&&(b[g].capDrawn=!1);for(g=0;g<l.length;g++){e=!0;if(l[g].clickable||l[g].hoverable)l[g].intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]};n||(l[g].style={});for(f in d)if(d.hasOwnProperty(f)){l[g].style[f]=l[g].style[f]||{};for(var m in d[f])l[g].style[f][m]=
d[f][m]}}},x=this;m(g);for(var h=0;h<q.length;h++)q[h]!==g&&m(q[h]);e&&(l=null)};this.setClickable=function(c,d,n){for(var f in c)b.validAtomSelectionSpecs.hasOwnProperty(f)||console.log("Unknown selector "+f);d=!!d;if(n&&"function"!=typeof n)console.log("Callback is not a function");else{f=this.selectedAtoms(c,g);var e=f.length;for(c=0;c<e;c++)f[c].intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]},f[c].clickable=d,n&&(f[c].callback=n);0<e&&(l=null)}};this.setHoverable=function(c,d,n,
f){for(var e in c)b.validAtomSelectionSpecs.hasOwnProperty(e)||console.log("Unknown selector "+e);d=!!d;if(n&&"function"!=typeof n)console.log("Hover_callback is not a function");else if(f&&"function"!=typeof f)console.log("Unhover_callback is not a function");else{e=this.selectedAtoms(c,g);var m=e.length;for(c=0;c<m;c++)e[c].intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]},e[c].hoverable=d,n&&(e[c].hover_callback=n),f&&(e[c].unhover_callback=f);0<m&&(l=null)}};this.setColorByElement=
function(b,c){var d;if(d=null!==l)d=y,d=c&&d?JSON.stringify(c)==JSON.stringify(d):c==d;if(!d){y=c;var n=this.selectedAtoms(b,n);0<n.length&&(l=null);for(b=0;b<n.length;b++)d=n[b],"undefined"!==typeof c[d.elem]&&(d.color=c[d.elem])}};this.setColorByProperty=function(b,c,d,n){var f=this.selectedAtoms(b,f);y=null;0<f.length&&(l=null);"undefined"!=typeof $3Dmol.Gradient.builtinGradients[d]&&(d=new $3Dmol.Gradient.builtinGradients[d]);n||(n=d.range());n||(n=$3Dmol.getPropertyRange(f,c));for(b=0;b<f.length;b++){var e=
f[b];null!=$3Dmol.getAtomProperty(e,c)&&(e.color=d.valueToHex(parseFloat(e.properties[c]),n))}};this.setColorByFunction=function(b,c){var d=this.selectedAtoms(b,d);if("function"===typeof c)for(y=null,0<d.length&&(l=null),i=0;i<d.length;i++)a=d[i],a.color=c(a)};this.toCDObject=function(b){var c={a:[],b:[]};b&&(c.s=[]);for(var d=0;d<g.length;d++){var n={},f=g[d];n.x=f.x;n.y=f.y;n.z=f.z;"C"!=f.elem&&(n.l=f.elem);if(b){for(var l=0;l<c.s.length&&JSON.stringify(f.style)!==JSON.stringify(c.s[l]);)l++;l===
c.s.length&&c.s.push(f.style);0!==l&&(n.s=l)}c.a.push(n);for(n=0;n<f.bonds.length;n++){l=d;var e=f.bonds[n];l>=e||(l={b:l,e:e},e=f.bondOrder[n],1!=e&&(l.o=e),c.b.push(l))}}return c};this.globj=function(b,c){if(null===l){var d=g,e=c;e=e||{};var x=new $3Dmol.Object3D,h=[],y={},p={},q=D;if(e.supportsImposters){q=H;var A=new $3Dmol.Geometry(!0);A.imposter=!0;var t=new $3Dmol.Geometry(!0,!0);t.imposter=!0;t.sphereGeometry=new $3Dmol.Geometry(!0);t.sphereGeometry.imposter=!0;t.drawnCaps={}}else e.supportsAIA?
(q=I,A=new $3Dmol.Geometry(!1,!0,!0),A.instanced=!0):A=new $3Dmol.Geometry(!0),t=new $3Dmol.Geometry(!0);var u,R,P={},E=[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];var J=0;for(R=d.length;J<R;J++){var F=d[J];if(F&&F.style){(F.clickable||F.hoverable)&&void 0===F.intersectionShape&&(F.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]});var L={line:void 0,cross:void 0,stick:void 0,sphere:void 0};for(u in L)L[u]=F.style[u]?F.style[u].opacity?parseFloat(F.style[u].opacity):1:void 0,P[u]?
void 0!=L[u]&&P[u]!=L[u]&&(console.log("Warning: "+u+" opacity is ambiguous"),P[u]=1):P[u]=L[u];q(F,A);var Q=F;if(Q.style.clicksphere){var M=Q.style.clicksphere;if(!M.hidden){var Ha=G(Q,M);if((!0===Q.clickable||Q.hoverable)&&void 0!==Q.intersectionShape){var Ia=new $3Dmol.Vector3(Q.x,Q.y,Q.z);Q.intersectionShape.sphere.push(new $3Dmol.Sphere(Ia,Ha))}}}var oa=F,Ja=p;if(oa.style.cross){var ea=oa.style.cross;if(!ea.hidden){var Va=ea.linewidth||1;Ja[Va]||(Ja[Va]=new $3Dmol.Geometry);var kb=Ja[Va].updateGeoGroup(6),
Qa=G(oa,ea),Ba=[[Qa,0,0],[-Qa,0,0],[0,Qa,0],[0,-Qa,0],[0,0,Qa],[0,0,-Qa]],qb=oa.clickable||oa.hoverable;qb&&void 0===oa.intersectionShape&&(oa.intersectionShape={sphere:[],cylinder:[],line:[]});for(var lb=$3Dmol.getColorFromStyle(oa,ea),Wa=kb.vertexArray,db=kb.colorArray,Xa=0;6>Xa;Xa++){var mb=3*kb.vertices;kb.vertices++;Wa[mb]=oa.x+Ba[Xa][0];Wa[mb+1]=oa.y+Ba[Xa][1];Wa[mb+2]=oa.z+Ba[Xa][2];db[mb]=lb.r;db[mb+1]=lb.g;db[mb+2]=lb.b;if(qb){var eb=new $3Dmol.Vector3(Ba[Xa][0],Ba[Xa][1],Ba[Xa][2]);eb.multiplyScalar(.1);
eb.set(eb.x+oa.x,eb.y+oa.y,eb.z+oa.z);oa.intersectionShape.line.push(eb)}}}}var Ya=void 0,Sa=void 0,Ca=void 0,Da=void 0,Ka=void 0,sa=void 0,ia=F,Cb=d,vb=y;if(ia.style.line){var wb=ia.style.line;if(!wb.hidden){var ob=wb.linewidth||1;vb[ob]||(vb[ob]=new $3Dmol.Geometry);for(var ta=vb[ob].updateGeoGroup(6*ia.bonds.length),ka=ta.vertexArray,ua=ta.colorArray,Za=0;Za<ia.bonds.length;Za++){var La=Cb[ia.bonds[Za]];if(La.style.line&&!(ia.serial>=La.serial)){var Ta=new $3Dmol.Vector3(ia.x,ia.y,ia.z),pb=new $3Dmol.Vector3(La.x,
La.y,La.z),rb=Ta.clone().add(pb).multiplyScalar(.5),Tb=!1,Ub=ia.clickable||ia.hoverable,Vb=La.clickable||La.hoverable;if(Ub||Vb)Ub&&(void 0===ia.intersectionShape&&(ia.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}),ia.intersectionShape.line.push(Ta),ia.intersectionShape.line.push(rb)),Vb&&(void 0===La.intersectionShape&&(La.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]}),La.intersectionShape.line.push(rb),La.intersectionShape.line.push(pb));var za=$3Dmol.getColorFromStyle(ia,
ia.style.line),$a=$3Dmol.getColorFromStyle(La,La.style.line);if(ia.bondStyles&&ia.bondStyles[Za]){var nb=ia.bondStyles[Za];if(!nb.iswire)continue;nb.radius&&(bondR=nb.radius);nb.singleBond&&(Tb=!0);"undefined"!=typeof nb.color1&&(za=$3Dmol.CC.color(nb.color1));"undefined"!=typeof nb.color2&&($a=$3Dmol.CC.color(nb.color2))}var va=3*ta.vertices;if(1<ia.bondOrder[Za]&&4>ia.bondOrder[Za]&&!Tb){var sb=C(ia,La,Za),Ua=pb.clone();Ua.sub(Ta);2==ia.bondOrder[Za]?(sb.multiplyScalar(.1),Da=Ta.clone(),Da.add(sb),
Ca=Ta.clone(),Ca.sub(sb),Sa=Da.clone(),Sa.add(Ua),Ya=Ca.clone(),Ya.add(Ua),za==$a?(ta.vertices+=4,z(ka,ua,va,Da,Sa,za),z(ka,ua,va+6,Ca,Ya,za)):(ta.vertices+=8,Ua.multiplyScalar(.5),Ka=Da.clone(),Ka.add(Ua),sa=Ca.clone(),sa.add(Ua),z(ka,ua,va,Da,Ka,za),z(ka,ua,va+6,Ka,Sa,$a),z(ka,ua,va+12,Ca,sa,za),z(ka,ua,va+18,sa,Ya,$a))):3==ia.bondOrder[Za]&&(sb.multiplyScalar(.1),Da=Ta.clone(),Da.add(sb),Ca=Ta.clone(),Ca.sub(sb),Sa=Da.clone(),Sa.add(Ua),Ya=Ca.clone(),Ya.add(Ua),za==$a?(ta.vertices+=6,z(ka,ua,va,
Ta,pb,za),z(ka,ua,va+6,Da,Sa,za),z(ka,ua,va+12,Ca,Ya,za)):(ta.vertices+=12,Ua.multiplyScalar(.5),Ka=Da.clone(),Ka.add(Ua),sa=Ca.clone(),sa.add(Ua),z(ka,ua,va,Ta,rb,za),z(ka,ua,va+6,rb,pb,$a),z(ka,ua,va+12,Da,Ka,za),z(ka,ua,va+18,Ka,Sa,$a),z(ka,ua,va+24,Ca,sa,za),z(ka,ua,va+30,sa,Ya,$a)))}else za==$a?(ta.vertices+=2,z(ka,ua,va,Ta,pb,za)):(ta.vertices+=4,z(ka,ua,va,Ta,rb,za),z(ka,ua,va+6,rb,pb,$a))}}}}var Ma=void 0,pa=void 0,Ea=void 0,fa=void 0,ab=void 0,fb=void 0,gb=void 0,Db=void 0,Eb=void 0,Fb=void 0,
Gb=void 0,tb=void 0,Na=void 0,ba=F,Zb=d,na=t;if(ba.style.stick){var Hb=ba.style.stick;if(!Hb.hidden){var Ib=Hb.radius||.25,Wb=Hb.singleBonds||!1,xb=0,yb=0,wa=$3Dmol.getColorFromStyle(ba,Hb);!ba.capDrawn&&4>ba.bonds.length&&(xb=2);var ra=$3Dmol.GLDraw.drawCylinder;na.imposter&&(ra=N);for(var ya=0;ya<ba.bonds.length;ya++){var la=Zb[ba.bonds[ya]];if(ba.serial<la.serial){var Mb=la.style;if(Mb.stick&&!Mb.stick.hidden){var bb=$3Dmol.getColorFromStyle(la,Mb.stick);Ea=Ib;tb=Wb;if(ba.bondStyles&&ba.bondStyles[ya]){Na=
ba.bondStyles[ya];if(Na.iswire)continue;Na.radius&&(Ea=Na.radius);Na.singleBond&&(tb=!0);"undefined"!=typeof Na.color1&&(wa=$3Dmol.CC.color(Na.color1));"undefined"!=typeof Na.color2&&(bb=$3Dmol.CC.color(Na.color2))}var Aa=new $3Dmol.Vector3(ba.x,ba.y,ba.z),Ra=new $3Dmol.Vector3(la.x,la.y,la.z);if(1===ba.bondOrder[ya]||tb){if(!la.capDrawn&&4>la.bonds.length&&(yb=2),wa!=bb?(pa=(new $3Dmol.Vector3).addVectors(Aa,Ra).multiplyScalar(.5),ra(na,Aa,pa,Ea,wa,xb,0),ra(na,pa,Ra,Ea,bb,0,yb)):ra(na,Aa,Ra,Ea,wa,
xb,yb),fb=ba.clickable||ba.hoverable,gb=la.clickable||la.hoverable,fb||gb){pa||(pa=(new $3Dmol.Vector3).addVectors(Aa,Ra).multiplyScalar(.5));if(fb){var $b=new $3Dmol.Cylinder(Aa,pa,Ea),ac=new $3Dmol.Sphere(Aa,Ea);ba.intersectionShape.cylinder.push($b);ba.intersectionShape.sphere.push(ac)}if(gb){var bc=new $3Dmol.Cylinder(Ra,pa,Ea),cc=new $3Dmol.Sphere(Ra,Ea);la.intersectionShape.cylinder.push(bc);la.intersectionShape.sphere.push(cc)}}}else if(1<ba.bondOrder[ya]){var hb=0,ib=0;Ea!=Ib&&(ib=hb=2);var ub=
Ra.clone();ub.sub(Aa);ab=C(ba,la,ya);if(2==ba.bondOrder[ya]){fa=Ea/2.5;ab=C(ba,la,ya);ab.multiplyScalar(1.5*fa);var Fa=Aa.clone();Fa.add(ab);var Ga=Aa.clone();Ga.sub(ab);var Oa=Fa.clone();Oa.add(ub);var Pa=Ga.clone();Pa.add(ub);wa!=bb?(pa=(new $3Dmol.Vector3).addVectors(Fa,Oa).multiplyScalar(.5),Ma=(new $3Dmol.Vector3).addVectors(Ga,Pa).multiplyScalar(.5),ra(na,Fa,pa,fa,wa,hb,0),ra(na,pa,Oa,fa,bb,0,ib),ra(na,Ga,Ma,fa,wa,hb,0),ra(na,Ma,Pa,fa,bb,0,ib)):(ra(na,Fa,Oa,fa,wa,hb,ib),ra(na,Ga,Pa,fa,wa,hb,
ib));fb=ba.clickable||ba.hoverable;gb=la.clickable||la.hoverable;if(fb||gb)pa||(pa=(new $3Dmol.Vector3).addVectors(Fa,Oa).multiplyScalar(.5)),Ma||(Ma=(new $3Dmol.Vector3).addVectors(Ga,Pa).multiplyScalar(.5)),fb&&(Db=new $3Dmol.Cylinder(Fa,pa,fa),Eb=new $3Dmol.Cylinder(Ga,Ma,fa),ba.intersectionShape.cylinder.push(Db),ba.intersectionShape.cylinder.push(Eb)),gb&&(Fb=new $3Dmol.Cylinder(Oa,pa,fa),Gb=new $3Dmol.Cylinder(Pa,Ma,fa),la.intersectionShape.cylinder.push(Fb),la.intersectionShape.cylinder.push(Gb))}else if(3==
ba.bondOrder[ya]&&(fa=Ea/4,ab.cross(ub),ab.normalize(),ab.multiplyScalar(3*fa),Fa=Aa.clone(),Fa.add(ab),Ga=Aa.clone(),Ga.sub(ab),Oa=Fa.clone(),Oa.add(ub),Pa=Ga.clone(),Pa.add(ub),wa!=bb?(pa=(new $3Dmol.Vector3).addVectors(Fa,Oa).multiplyScalar(.5),Ma=(new $3Dmol.Vector3).addVectors(Ga,Pa).multiplyScalar(.5),mp3=(new $3Dmol.Vector3).addVectors(Aa,Ra).multiplyScalar(.5),ra(na,Fa,pa,fa,wa,hb,0),ra(na,pa,Oa,fa,bb,0,ib),ra(na,Aa,mp3,fa,wa,xb,0),ra(na,mp3,Ra,fa,bb,0,yb),ra(na,Ga,Ma,fa,wa,hb,0),ra(na,Ma,
Pa,fa,bb,0,ib)):(ra(na,Fa,Oa,fa,wa,hb,ib),ra(na,Aa,Ra,fa,wa,xb,yb),ra(na,Ga,Pa,fa,wa,hb,ib)),fb=ba.clickable||ba.hoverable,gb=la.clickable||la.hoverable,fb||gb)){pa||(pa=(new $3Dmol.Vector3).addVectors(Fa,Oa).multiplyScalar(.5));Ma||(Ma=(new $3Dmol.Vector3).addVectors(Ga,Pa).multiplyScalar(.5));mp3||(mp3=(new $3Dmol.Vector3).addVectors(Aa,Ra).multiplyScalar(.5));if(fb){Db=new $3Dmol.Cylinder(Fa.clone(),pa.clone(),fa);Eb=new $3Dmol.Cylinder(Ga.clone(),Ma.clone(),fa);var dc=new $3Dmol.Cylinder(Aa.clone(),
mp3.clone(),fa);ba.intersectionShape.cylinder.push(Db);ba.intersectionShape.cylinder.push(Eb);ba.intersectionShape.cylinder.push(dc)}if(gb){Fb=new $3Dmol.Cylinder(Oa.clone(),pa.clone(),fa);Gb=new $3Dmol.Cylinder(Pa.clone(),Ma.clone(),fa);var ec=new $3Dmol.Cylinder(Ra.clone(),mp3.clone(),fa);la.intersectionShape.cylinder.push(Fb);la.intersectionShape.cylinder.push(Gb);la.intersectionShape.cylinder.push(ec)}}}}}}var Nb=!1,Ob=0,Xb=!1;for(ya=0;ya<ba.bonds.length;ya++)tb=Wb,ba.bondStyles&&ba.bondStyles[ya]&&
(Na=ba.bondStyles[ya],Na.singleBond&&(tb=!0),Na.radius&&Na.radius!=Ib&&(Xb=!0)),(tb||1==ba.bondOrder[ya])&&Ob++;Xb?0<Ob&&(Nb=!0):0==Ob&&0<ba.bonds.length&&(Nb=!0);Nb&&(Ea=Ib,na.imposter?K(na.sphereGeometry,ba,Ea,wa):$3Dmol.GLDraw.drawSphere(na,ba,Ea,wa))}}"undefined"===typeof F.style.cartoon||F.style.cartoon.hidden||("spectrum"!==F.style.cartoon.color||"number"!==typeof F.resi||F.hetflag||(F.resi<E[0]&&(E[0]=F.resi),F.resi>E[1]&&(E[1]=F.resi)),h.push(F))}}0<h.length&&$3Dmol.drawCartoon(x,h,E,T);if(A&&
0<A.vertices){A.initTypedArrays();if(A.imposter)var zb=new $3Dmol.SphereImposterMaterial({ambient:0,vertexColors:!0,reflectivity:0});else if(A.instanced){var Ab=new $3Dmol.Geometry(!0);$3Dmol.GLDraw.drawSphere(Ab,{x:0,y:0,z:0},1,new $3Dmol.Color(.5,.5,.5));Ab.initTypedArrays();zb=new $3Dmol.InstancedMaterial({sphereMaterial:new $3Dmol.MeshLambertMaterial({ambient:0,vertexColors:!0,reflectivity:0}),sphere:Ab})}else zb=new $3Dmol.MeshLambertMaterial({ambient:0,vertexColors:!0,reflectivity:0});1>P.sphere&&
0<=P.sphere&&(zb.transparent=!0,zb.opacity=P.sphere);Ab=new $3Dmol.Mesh(A,zb);x.add(Ab)}if(0<t.vertices){var cb=t.sphereGeometry;cb&&"undefined"!==typeof cb.vertices&&0!=cb.vertices||(cb=null);t.initTypedArrays();cb&&cb.initTypedArrays();var Jb={ambient:0,vertexColors:!0,reflectivity:0};if(t.imposter){var Bb=new $3Dmol.StickImposterMaterial(Jb);var Kb=new $3Dmol.SphereImposterMaterial(Jb)}else Bb=new $3Dmol.MeshLambertMaterial(Jb),Kb=new $3Dmol.MeshLambertMaterial(Jb),Bb.wireframe&&(t.setUpWireframe(),
cb&&cb.setUpWireframe());1>P.stick&&0<=P.stick&&(Bb.transparent=!0,Bb.opacity=P.stick,Kb.transparent=!0,Kb.opacity=P.stick);var fc=new $3Dmol.Mesh(t,Bb);x.add(fc);if(cb){var gc=new $3Dmol.Mesh(cb,Kb);x.add(gc)}}for(J in y)if(y.hasOwnProperty(J)){var Pb=J;var Qb=new $3Dmol.LineBasicMaterial({linewidth:Pb,vertexColors:!0});1>P.line&&0<=P.line&&(Qb.transparent=!0,Qb.opacity=P.line);y[J].initTypedArrays();var hc=new $3Dmol.Line(y[J],Qb,$3Dmol.LinePieces);x.add(hc)}for(J in p)if(p.hasOwnProperty(J)){Pb=
J;var Rb=new $3Dmol.LineBasicMaterial({linewidth:Pb,vertexColors:!0});1>P.cross&&0<=P.cross&&(Rb.transparent=!0,Rb.opacity=P.cross);p[J].initTypedArrays();var ic=new $3Dmol.Line(p[J],Rb,$3Dmol.LinePieces);x.add(ic)}if(w&&f.symmetries&&0<f.symmetries.length){var Yb=new $3Dmol.Object3D,Lb;for(Lb=0;Lb<f.symmetries.length;Lb++){new $3Dmol.Object3D;var Sb=x.clone();Sb.matrix.copy(f.symmetries[Lb]);Sb.matrixAutoUpdate=!1;Yb.add(Sb)}l=Yb}else l=x;n&&(b.remove(n),n=null);n=l.clone();m&&(n.setVisible(!1),
l.setVisible(!1));b.add(n)}};this.removegl=function(b){n&&(void 0!==n.geometry&&n.geometry.dispose(),void 0!==n.material&&n.material.dispose(),b.remove(n),n=null);l=null};this.hide=function(){m=!0;n&&n.setVisible(!1);l&&l.setVisible(!1)};this.show=function(){m=!1;n&&n.setVisible(!0);l&&l.setVisible(!0)};this.addPropertyLabels=function(b,c,d,n){var f=this.selectedAtoms(c,f);c=$.extend(!0,{},n);for(n=0;n<f.length;n++){var l=f[n],e=null;"undefined"!=typeof l[b]?e=String(l[b]):typeof("undefined"!=l.properties[b])&&
(e=String(l.properties[b]));null!=e&&(c.position=l,d.addLabel(e,c))}};this.addResLabels=function(b,c,d){var n=this.selectedAtoms(b,n);for(var f={},l=0;l<n.length;l++){b=n[l];var e=b.chain;var g=b.resn+""+b.resi;f[e]||(f[e]={});f[e][g]||(f[e][g]=[]);f[e][g].push(b)}d=$.extend(!0,{},d);for(e in f)if(f.hasOwnProperty(e)){var m=f[e];for(g in m)if(m.hasOwnProperty(g)){n=m[g];var x=new $3Dmol.Vector3(0,0,0);for(l=0;l<n.length;l++)b=n[l],x.x+=b.x,x.y+=b.y,x.z+=b.z;x.divideScalar(n.length);d.position=x;c.addLabel(g,
d)}}};var F=function(){t=[];var b=new Int8Array(g.length);b.fill(0);for(var c=function(d,n,f){f.push([d,n]);n=g[d];b[d]=1;for(var l=0;l<n.bonds.length;l++){var e=n.bonds[l];g[e]&&!b[e]&&c(e,d,f)}},d=0;d<g.length;d++)if(g[d]&&!b[d]){var n=[];c(d,-1,n);t.push(n)}};this.setCoordinatesFromURL=function(b,c){q=[];var d=this;p&&F();return new Promise(function(n,f){b.startsWith("http://")||(b="http://"+b);$.get(b+"/traj/numframes/"+c,function(l){isNaN(parseInt(l))||(q.push(g),q.numFrames=l,q.url=b,q.path=
c,d.setFrame(0).then(function(){n()}).catch(f))})})};this.setCoordinates=function(c,d){d=d||"";if(!c)return[];if(/\.gz$/.test(d)){d=d.replace(/\.gz$/,"");try{c=pako.inflate(c,{to:"string"})}catch(O){console.log(O)}}if({mdcrd:"",inpcrd:"",pdb:"",netcdf:""}.hasOwnProperty(d)){q=[];var n=g.length;c=b.parseCrd(c,d);for(d=0;d<c.length;){for(var f=[],l=0;l<n;l++){var e={},m;for(m in g[l])e[m]=g[l][m];f[l]=e;f[l].x=c[d++];f[l].y=c[d++];f[l].z=c[d++]}q.push(f)}g=q[0];return q}return[]};this.addAtomSpecs=
function(c){for(var d=0;d<c.length;d++)b.validAtomSelectionSpecs.hasOwnProperty(c[d])&&b.validAtomSelectionSpecs.push(c[d])}}var c={line:{}},d={H:1.2,Li:1.82,LI:1.82,Na:2.27,NA:2.27,K:2.75,C:1.7,N:1.55,O:1.52,F:1.47,P:1.8,S:1.8,CL:1.75,Cl:1.75,BR:1.85,Br:1.85,SE:1.9,Se:1.9,ZN:1.39,Zn:1.39,CU:1.4,Cu:1.4,NI:1.63,Ni:1.63};b.validElements="H Li LI Na NA K C N O F P S CL Cl BR Br SE Se ZN Zn CU Cu NI Ni".split(" ");b.validAtomSpecs={resn:{type:"string",valid:!0},x:{type:"number",valid:!1,step:.1},y:{type:"number",
valid:!1,step:.1},z:{type:"number",valid:!1,step:.1},color:{type:"color",gui:!0},surfaceColor:{type:"color",gui:!0},elem:{type:"element",gui:!0},hetflag:{type:"boolean",valid:!1},chain:{type:"string",gui:!0},resi:{type:"number",gui:!0},icode:{type:"number",valid:!1,step:.1},rescode:{type:"number",valid:!1,step:.1},serial:{type:"number",valid:!1,step:.1},atom:{type:"string",valid:!1},bonds:{type:"array",valid:!1},ss:{type:"string",valid:!1},singleBonds:{type:"boolean",valid:!1},bondOrder:{type:"array",
valid:!1},properties:{type:"properties",valid:!1},b:{type:"number",valid:!1,step:.1},pdbline:{type:"string",valid:!1},clickable:{type:"boolean",valid:!1},callback:{type:"function",valid:!1},invert:{type:"boolean",valid:!1},reflectivity:{type:"number",gui:!0,step:.1},altLoc:{type:"invalid",valid:!1}};b.validAtomSelectionSpecs=function(b,c){for(var d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);return b}(b.validAtomSpecs,{model:{type:"string",valid:!1},bonds:{type:"string",valid:!1},predicate:{type:"string",
valid:!1},invert:{type:"string",valid:!1},byres:{type:"string",valid:!1},expand:{type:"string",valid:!1},within:{type:"string",valid:!1},and:{type:"string",valid:!1},or:{type:"string",valid:!1},not:{type:"string",valid:!1}});var h={hidden:{type:"boolean",gui:!0},singleBonds:{type:"boolean",gui:!0},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},radius:{type:"number",gui:!0,step:.1,default:1.5,min:0}};b.validAtomStyleSpecs={line:{validItems:{hidden:{type:"boolean",gui:!0},linewidth:{type:"number",
gui:!0,step:.1,default:1},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0}},gui:!0},cross:{validItems:{hidden:{type:"boolean",gui:!0},linewidth:{type:"number",gui:!1,step:.1,default:1,min:0},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},radius:{type:"number",gui:!0,step:.1,default:1,min:.1},scale:{type:"number",gui:!0,step:.1,default:1,min:0}},gui:!0},stick:{validItems:{hidden:{type:"boolean",gui:!0},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",
gui:!0},radius:{type:"number",gui:!0,step:.1,default:.25,min:.1},singleBonds:{type:"boolean",gui:!0}},gui:!0},sphere:{validItems:h,gui:!0},cartoon:{validItems:{style:{validItems:["trace","oval","rectangle","parabola","edged"],gui:!0},color:{type:"color",gui:!0},arrows:{type:"boolean",gui:!0},ribbon:{type:"boolean",gui:!0},hidden:{type:"boolean",gui:!0},tubes:{type:"boolean",gui:!0},thickness:{type:"number",gui:!0,step:.1,default:1,min:0},width:{type:"number",gui:!0,step:.1,default:1,min:0},opacity:{type:"number",
gui:!0,step:.1,default:1,min:0,max:1}},gui:!0},colorfunc:{validItems:null,valid:!1},clicksphere:{validItems:h}};b.validSurfaceSpecs={opacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},colorscheme:{type:"colorscheme",gui:!0},color:{type:"color",gui:!0},voldata:{type:"number",gui:!1},volscheme:{type:"number",gui:!1},map:{type:"number",gui:!1}};b.validLabelResSpecs={font:{type:"string",gui:!0},fontSize:{type:"number",gui:!0,step:1,default:12,min:1},fontColor:{type:"color",gui:!0},fontOpacity:{type:"number",
gui:!0,step:.1,default:1,min:0,max:1},borderThickness:{type:"number",gui:!0,step:.1,default:1,min:0},borderColor:{type:"color",gui:!0},borderOpacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},backgroundColor:{type:"color",gui:!0},backgroundOpacity:{type:"number",gui:!0,step:.1,default:1,min:0,max:1},position:{type:"array",valid:!1},inFront:{type:"boolean",gui:!0},showBackground:{type:"boolean",gui:!0},fixed:{type:"boolean",gui:!0},alignment:{validItems:"topLeft topCenter topRight centerLeft center centerRight bottomLeft bottomCenter bottomRight".split(" "),
gui:!0},scale:{type:"boolean",gui:!1}};b.parseCrd=function(b,c){var d,e=[],h=0;if("pdb"==c)for(d=b.indexOf("\nATOM");-1!=d;){for(;"\nATOM"==b.slice(d,d+5)||"\nHETATM"==b.slice(d,d+7);)e[h++]=parseFloat(b.slice(d+31,d+39)),e[h++]=parseFloat(b.slice(d+39,d+47)),e[h++]=parseFloat(b.slice(d+47,d+55)),d=b.indexOf("\n",d+54),"\nTER"==b.slice(d,d+4)&&(d=b.indexOf("\n",d+5));d=b.indexOf("\nATOM",d)}else"netcdf"==c?(b=new netcdfjs(b),e=[].concat.apply([],b.getDataVariable("coordinates"))):(d=b.indexOf("\n"),
"inpcrd"==c&&(d=b.indexOf("\n",d+1)),b=b.slice(d+1),e=b.match(/\S+/g).map(parseFloat));return e};b.parseMolData=function(b,c,d){c=c||"";if(!b)return[];if(/\.gz$/.test(c)){c=c.replace(/\.gz$/,"");try{b=pako.inflate(b,{to:"string"})}catch(q){console.log(q)}}"undefined"==typeof $3Dmol.Parsers[c]&&(c=c.split(".").pop(),"undefined"==typeof $3Dmol.Parsers[c]&&(console.log("Unknown format: "+c),c=b instanceof Uint8Array?"mmtf":b.match(/^@<TRIPOS>MOLECULE/gm)?"mol2":b.match(/^HETATM/gm)||b.match(/^ATOM/gm)?
"pdb":b.match(/ITEM: TIMESTEP/gm)?"lammpstrj":b.match(/^.*\n.*\n.\s*(\d+)\s+(\d+)/gm)?"sdf":b.match(/^%VERSION\s+\VERSION_STAMP/gm)?"prmtop":"xyz",console.log("Best guess: "+c)));return(0,$3Dmol.Parsers[c])(b,d)};b.setAtomDefaults=function(b,d){for(var e=0;e<b.length;e++){var h=b[e];h&&(h.style=h.style||c,h.color=h.color||ElementColors[h.elem]||defaultColor,h.model=d,h.clickable||h.hoverable)&&(h.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]})}};return b}();
$3Dmol.GLShape=function(){function b(b){b=b||{};$3Dmol.ShapeIDCount++;this.boundingSphere=new $3Dmol.Sphere;this.intersectionShape={sphere:[],cylinder:[],line:[],triangle:[]};e(this,b);var g=[],q=null,p=null,u=new $3Dmol.Geometry(!0),m=new $3Dmol.Geometry(!0);this.updateStyle=function(c){for(var d in c)b[d]=c[d];e(this,b)};this.addCustom=function(b){b.vertexArr=b.vertexArr||[];b.faceArr=b.faceArr||[];b.normalArr=b.normalArr||[];d(this,u,b)};this.addSphere=function(b){b.center=b.center||{x:0,y:0,z:0};
b.radius=b.radius?$3Dmol.Math.clamp(b.radius,0,Infinity):1.5;b.color=$3Dmol.CC.color(b.color);this.intersectionShape.sphere.push(new $3Dmol.Sphere(b.center,b.radius));$3Dmol.GLDraw.drawSphere(u,b.center,b.radius,b.color);g.push({centroid:new $3Dmol.Vector3(b.center.x,b.center.y,b.center.z)});b=u.updateGeoGroup(0);h(this.boundingSphere,g,b.vertexArray,b.vertices)};this.addBox=function(b){var c=b.dimensions||{w:1,h:1,d:1},l=c.w;"number"==typeof c.w&&(l={x:c.w,y:0,z:0});var f=c.h;"number"==typeof c.h&&
(f={x:0,y:c.h,z:0});var e=c.d;"number"==typeof c.d&&(e={x:0,y:0,z:c.d});c=b.corner;void 0==c&&(c=void 0!==b.center?{x:b.center.x-.5*(l.x+f.x+e.x),y:b.center.y-.5*(l.y+f.y+e.y),z:b.center.z-.5*(l.z+f.z+e.z)}:{x:0,y:0,z:0});l=[{x:c.x,y:c.y,z:c.z},{x:c.x+l.x,y:c.y+l.y,z:c.z+l.z},{x:c.x+f.x,y:c.y+f.y,z:c.z+f.z},{x:c.x+l.x+f.x,y:c.y+l.y+f.y,z:c.z+l.z+f.z},{x:c.x+e.x,y:c.y+e.y,z:c.z+e.z},{x:c.x+l.x+e.x,y:c.y+l.y+e.y,z:c.z+l.z+e.z},{x:c.x+f.x+e.x,y:c.y+f.y+e.y,z:c.z+f.z+e.z},{x:c.x+l.x+f.x+e.x,y:c.y+l.y+
f.y+e.y,z:c.z+l.z+f.z+e.z}];f=[];e=[];f.splice(f.length,0,l[0],l[1],l[2],l[3]);e.splice(e.length,0,0,2,1,1,2,3);c=4;f.splice(f.length,0,l[2],l[3],l[6],l[7]);e.splice(e.length,0,c+0,c+2,c+1,c+1,c+2,c+3);c+=4;f.splice(f.length,0,l[4],l[5],l[0],l[1]);e.splice(e.length,0,c+0,c+2,c+1,c+1,c+2,c+3);c+=4;f.splice(f.length,0,l[6],l[7],l[4],l[5]);e.splice(e.length,0,c+0,c+2,c+1,c+1,c+2,c+3);c+=4;f.splice(f.length,0,l[3],l[1],l[7],l[5]);e.splice(e.length,0,c+0,c+2,c+1,c+1,c+2,c+3);c+=4;f.splice(f.length,0,l[2],
l[0],l[6],l[4]);e.splice(e.length,0,c+0,c+2,c+1,c+1,c+2,c+3);b=$.extend({},b);b.vertexArr=f;b.faceArr=e;b.normalArr=[];d(this,u,b);b=new $3Dmol.Vector3;g.push({centroid:b.addVectors(l[0],l[7]).multiplyScalar(.5)});b=u.updateGeoGroup(0);h(this.boundingSphere,g,b.vertexArray,b.vertices)};this.addCylinder=function(b){b.start=b.start||{};b.end=b.end||{};var c=new $3Dmol.Vector3(b.start.x||0,b.start.y||0,b.start.z||0),d=new $3Dmol.Vector3(b.end.x,b.end.y||0,b.end.z||0);"undefined"==typeof d.x&&(d.x=3);
var f=b.radius||.1,l=$3Dmol.CC.color(b.color);this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(c,d,f));$3Dmol.GLDraw.drawCylinder(u,c,d,f,l,b.fromCap,b.toCap);b=new $3Dmol.Vector3;g.push({centroid:b.addVectors(c,d).multiplyScalar(.5)});c=u.updateGeoGroup(0);h(this.boundingSphere,g,c.vertexArray,c.vertices)};this.addDashedCylinder=function(b){b.start=b.start||{};b.end=b.end||{};b.dashLength=b.dashLength||.25;b.gapLength=b.gapLength||.25;var c=new $3Dmol.Vector3(b.start.x||0,b.start.y||0,b.start.z||
0),d=new $3Dmol.Vector3(b.end.x,b.end.y||0,b.end.z||0);"undefined"==typeof d.x&&(d.x=3);var f=b.radius||.1,l=$3Dmol.CC.color(b.color),e=Math.sqrt(Math.pow(c.x-d.x,2)+Math.pow(c.y-d.y,2)+Math.pow(c.z-d.z,2)),m=e/(b.gapLength+b.dashLength),p=new $3Dmol.Vector3(b.start.x||0,b.start.y||0,b.start.z||0);new $3Dmol.Vector3(b.end.x,b.end.y||0,b.end.z||0);for(var A=new $3Dmol.Vector3((d.x-c.x)/(e/b.gapLength),(d.y-c.y)/(e/b.gapLength),(d.z-c.z)/(e/b.gapLength)),q=new $3Dmol.Vector3((d.x-c.x)/(e/b.dashLength),
(d.y-c.y)/(e/b.dashLength),(d.z-c.z)/(e/b.dashLength)),t=0;t<m;t++)e=new $3Dmol.Vector3(p.x+q.x,p.y+q.y,p.z+q.z),this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(p,e,f)),$3Dmol.GLDraw.drawCylinder(u,p,e,f,l,b.fromCap,b.toCap),p=new $3Dmol.Vector3(e.x+A.x,e.y+A.y,e.z+A.z);b=new $3Dmol.Vector3;g.push({centroid:b.addVectors(c,d).multiplyScalar(.5)});c=u.updateGeoGroup(0);h(this.boundingSphere,g,c.vertexArray,c.vertices)};this.addCurve=function(b){b.points=b.points||[];b.smooth=b.smooth||10;"undefined"==
typeof b.fromCap&&(b.fromCap=2);"undefined"==typeof b.toCap&&(b.toCap=2);var c=$3Dmol.subdivide_spline(b.points,b.smooth);if(3>c.length)console.log("Too few points in addCurve");else{var d=b.radius||.1,f=$3Dmol.CC.color(b.color),l=0,e=c.length-1;var g=c[0].distanceTo(c[1]);var m=Math.ceil(2*d/g);b.toArrow&&(e-=m,g={start:c[e],end:c[c.length-1],radius:d,color:f,mid:1E-4},this.addArrow(g));b.fromArrow&&(l+=m,g={start:c[l],end:c[0],radius:d,color:f,mid:1E-4},this.addArrow(g));b=Math.ceil(c.length/2);
for(d={radius:d,color:f,fromCap:2,toCap:2};l<e;l++)d.start=c[l],d.end=c[l+1],d.fromCap=2,d.toCap=2,l<b?(d.fromCap=2,d.toCap=0):(d.fromCap=l>b?0:2,d.toCap=2),this.addCylinder(d)}};this.addLine=function(b){b.start=b.start||{};b.end=b.end||{};var c=new $3Dmol.Vector3(b.start.x||0,b.start.y||0,b.start.z||0);b=new $3Dmol.Vector3(b.end.x,b.end.y||0,b.end.z||0);"undefined"==typeof b.x&&(b.x=3);var d=u.updateGeoGroup(2),f=d.vertices,e=3*f,l=d.vertexArray;l[e]=c.x;l[e+1]=c.y;l[e+2]=c.z;l[e+3]=b.x;l[e+4]=b.y;
l[e+5]=b.z;d.vertices+=2;e=d.lineArray;l=d.lineidx;e[l]=f;e[l+1]=f+1;d.lineidx+=2;d=new $3Dmol.Vector3;g.push({centroid:d.addVectors(c,b).multiplyScalar(.5)});d=u.updateGeoGroup(0);h(this.boundingSphere,g,d.vertexArray,d.vertices)};this.addArrow=function(b){b.start=b.start||{};b.end=b.end||{};b.start=new $3Dmol.Vector3(b.start.x||0,b.start.y||0,b.start.z||0);if(b.dir instanceof $3Dmol.Vector3&&b.length instanceof number){var c=b.dir.clone().multiplyScalar(b.length).add(start);b.end=c}else b.end=new $3Dmol.Vector3(b.end.x,
b.end.y||0,b.end.z||0),"undefined"==typeof b.end.x&&(b.end.x=3);b.radius=b.radius||.1;b.radiusRatio=b.radiusRatio||1.618034;b.mid=0<b.mid&&1>b.mid?b.mid:.618034;var d=b.start,f=b.end,e=b.radius,l=b.radiusRatio,m=b.mid;if(d&&f){c=u.updateGeoGroup(51);var p=f.clone();p.sub(d).multiplyScalar(m);var q=d.clone().add(p);m=p.clone().negate();this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(d.clone(),q.clone(),e));this.intersectionShape.sphere.push(new $3Dmol.Sphere(d.clone(),e));var t=[];t[0]=p.clone();
1E-4<Math.abs(t[0].x)?t[0].y+=1:t[0].x+=1;t[0].cross(p);t[0].normalize();t[0]=t[0];t[4]=t[0].clone();t[4].crossVectors(t[0],p);t[4].normalize();t[8]=t[0].clone().negate();t[12]=t[4].clone().negate();t[2]=t[0].clone().add(t[4]).normalize();t[6]=t[4].clone().add(t[8]).normalize();t[10]=t[8].clone().add(t[12]).normalize();t[14]=t[12].clone().add(t[0]).normalize();t[1]=t[0].clone().add(t[2]).normalize();t[3]=t[2].clone().add(t[4]).normalize();t[5]=t[4].clone().add(t[6]).normalize();t[7]=t[6].clone().add(t[8]).normalize();
t[9]=t[8].clone().add(t[10]).normalize();t[11]=t[10].clone().add(t[12]).normalize();t[13]=t[12].clone().add(t[14]).normalize();t[15]=t[14].clone().add(t[0]).normalize();var G=c.vertices,C=c.vertexArray,z=c.faceArray,D=c.normalArray,I=c.lineArray,K;var H=0;for(K=t.length;H<K;++H){var N=3*(G+3*H);var E=t[H].clone().multiplyScalar(e).add(d),L=t[H].clone().multiplyScalar(e).add(q),M=t[H].clone().multiplyScalar(e*l).add(q);C[N]=E.x;C[N+1]=E.y;C[N+2]=E.z;C[N+3]=L.x;C[N+4]=L.y;C[N+5]=L.z;C[N+6]=M.x;C[N+
7]=M.y;C[N+8]=M.z;0<H&&(N=new $3Dmol.Vector3(C[N-3],C[N-2],C[N-1]),E=f.clone(),L=q.clone(),M=new $3Dmol.Vector3(M.x,M.y,M.z),this.intersectionShape.triangle.push(new $3Dmol.Triangle(M,E,N)),this.intersectionShape.triangle.push(new $3Dmol.Triangle(N.clone(),L,M.clone())))}c.vertices+=48;N=3*c.vertices;C[N]=d.x;C[N+1]=d.y;C[N+2]=d.z;C[N+3]=q.x;C[N+4]=q.y;C[N+5]=q.z;C[N+6]=f.x;C[N+7]=f.y;C[N+8]=f.z;c.vertices+=3;var F,J,Q=c.vertices-3,W=c.vertices-2,V=c.vertices-1,U=3*Q,ca=3*W,S=3*V;H=0;for(K=t.length-
1;H<K;++H){var O=G+3*H;d=c.faceidx;f=c.lineidx;e=O;N=3*e;l=O+1;E=3*l;q=O+2;L=3*q;C=O+4;var Z=3*C;M=O+5;var aa=3*M;O+=3;var B=3*O;var Y=F=t[H];var X=J=t[H+1];D[N]=Y.x;D[E]=F.x;D[B]=J.x;D[N+1]=Y.y;D[E+1]=F.y;D[B+1]=J.y;D[N+2]=Y.z;D[E+2]=F.z;D[B+2]=J.z;D[E]=F.x;D[Z]=X.x;D[B]=J.x;D[E+1]=F.y;D[Z+1]=X.y;D[B+1]=J.y;D[E+2]=F.z;D[Z+2]=X.z;D[B+2]=J.z;D[L]=F.x;D[aa]=X.x;D[L+1]=F.y;D[aa+1]=X.y;D[L+2]=F.z;D[aa+2]=X.z;z[d]=e;z[d+1]=l;z[d+2]=O;z[d+3]=l;z[d+4]=C;z[d+5]=O;z[d+6]=e;z[d+7]=O;z[d+8]=Q;z[d+9]=q;z[d+10]=
W;z[d+11]=M;z[d+12]=q;z[d+13]=V;z[d+14]=M;I[f]=e;I[f+1]=l;I[f+2]=e;I[f+3]=O;I[f+4]=C;I[f+5]=O;I[f+6]=e;I[f+7]=O;I[f+8]=q;I[f+9]=l;I[f+10]=q;I[f+11]=M;I[f+12]=C;I[f+13]=M;I[f+14]=q;I[f+15]=V;I[f+16]=q;I[f+17]=M;I[f+18]=V;I[f+19]=M;c.faceidx+=15;c.lineidx+=20}G=[G+45,G+46,G+1,G,G+47,G+2];d=c.faceidx;f=c.lineidx;e=G[0];N=3*e;l=G[1];E=3*l;q=G[4];L=3*q;C=G[2];Z=3*C;M=G[5];aa=3*M;O=G[3];B=3*O;Y=F=t[15];X=J=t[0];D[N]=Y.x;D[E]=F.x;D[B]=J.x;D[N+1]=Y.y;D[E+1]=F.y;D[B+1]=J.y;D[N+2]=Y.z;D[E+2]=F.z;D[B+2]=J.z;
D[E]=F.x;D[Z]=X.x;D[B]=J.x;D[E+1]=F.y;D[Z+1]=X.y;D[B+1]=J.y;D[E+2]=F.z;D[Z+2]=X.z;D[B+2]=J.z;D[L]=F.x;D[aa]=X.x;D[L+1]=F.y;D[aa+1]=X.y;D[L+2]=F.z;D[aa+2]=X.z;p.normalize();m.normalize();D[U]=m.x;D[ca]=D[S]=p.x;D[U+1]=m.y;D[ca+1]=D[S+1]=p.y;D[U+2]=m.z;D[ca+2]=D[S+2]=p.z;z[d]=e;z[d+1]=l;z[d+2]=O;z[d+3]=l;z[d+4]=C;z[d+5]=O;z[d+6]=e;z[d+7]=O;z[d+8]=Q;z[d+9]=q;z[d+10]=W;z[d+11]=M;z[d+12]=q;z[d+13]=V;z[d+14]=M;I[f]=e;I[f+1]=l;I[f+2]=e;I[f+3]=O;I[f+4]=C;I[f+5]=O;I[f+6]=e;I[f+7]=O;I[f+8]=q;I[f+9]=l;I[f+10]=
q;I[f+11]=M;I[f+12]=C;I[f+13]=M;I[f+14]=q;I[f+15]=V;I[f+16]=q;I[f+17]=M;I[f+18]=V;I[f+19]=M;c.faceidx+=15;c.lineidx+=20}c=new $3Dmol.Vector3;g.push({centroid:c.addVectors(b.start,b.end).multiplyScalar(.5)});b=u.updateGeoGroup(0);h(this.boundingSphere,g,b.vertexArray,b.vertices)};this.addIsosurface=function(b,c,e){var f=void 0!==c.isoval&&"number"===typeof c.isoval?c.isoval:0,n=c.voxel?!0:!1,l=void 0===c.smoothness?1:c.smoothness,g=b.size.x,m=b.size.y,h=b.size.z,p=new Int16Array(g*m*h),q=b.data,t;
var y=0;for(t=p.length;y<t;++y)p[y]=-1;p=new Uint8Array(g*m*h);y=0;for(t=q.length;y<t;++y)0<(0<=f?q[y]-f:f-q[y])&&(p[y]|=2);f=[];q=[];$3Dmol.MarchingCube.march(p,f,q,{fulltable:!0,voxel:n,unitCube:b.unit,origin:b.origin,matrix:b.matrix,nX:g,nY:m,nZ:h});!n&&0<l&&$3Dmol.MarchingCube.laplacianSmooth(l,f,q);n=[];l=[];g=[];c.selectedRegion&&void 0===c.coords&&(c.coords=c.selectedRegion);if(void 0!==c.coords){m=c.coords[0].x;h=c.coords[0].y;p=c.coords[0].z;t=c.coords[0].x;var D=c.coords[0].y,I=c.coords[0].z;
for(y=0;y<c.coords.length;y++)c.coords[y].x>m?m=c.coords[y].x:c.coords[y].x<t&&(t=c.coords[y].x),c.coords[y].y>h?h=c.coords[y].y:c.coords[y].y<D&&(D=c.coords[y].y),c.coords[y].z>p?p=c.coords[y].z:c.coords[y].z<I&&(I=c.coords[y].z);var K=2;void 0!==c.radius&&(K=c.radius);void 0!==c.selectedOffset&&(K=c.selectedOffset);void 0!==c.seldist&&(K=c.seldist);t-=K;m+=K;D-=K;h+=K;I-=K;p+=K;for(y=0;y<f.length;y++){var H;if(H=f[y].x>t&&f[y].x<m&&f[y].y>D&&f[y].y<h&&f[y].z>I&&f[y].z<p)a:{H=f[y];for(var N=c.coords,
E=K,L=0;L<N.length;L++){var M=N[L];if(Math.sqrt(Math.pow(M.x-H.x,2)+Math.pow(M.y-H.y,2)+Math.pow(M.z-H.z,2))<=E){H=!0;break a}}H=!1}H?(n.push(l.length),l.push(f[y])):n.push(-1)}for(y=0;y+2<q.length;y+=3)-1!==n[q[y]]&&-1!==n[q[y+1]]&&-1!==n[q[y+2]]&&(g.push(q[y]-(q[y]-n[q[y]])),g.push(q[y+1]-(q[y+1]-n[q[y+1]])),g.push(q[y+2]-(q[y+2]-n[q[y+2]])));f=l;q=g}d(this,u,{vertexArr:f,faceArr:q,normalArr:[],clickable:c.clickable,hoverable:c.hoverable});this.updateStyle(c);y=new $3Dmol.Vector3(b.origin.x,b.origin.y,
b.origin.z);q=new $3Dmol.Vector3(b.size.x*b.unit.x,b.size.y*b.unit.y,b.size.z*b.unit.z);b=new $3Dmol.Vector3(0,0,0);c=y.clone();q=y.clone().add(q);for(y=0;y<f.length;y++)b.add(f[y]),c.max(f[y]),q.min(f[y]);b.divideScalar(f.length);y=b.distanceTo(q);f=b.distanceTo(c);this.boundingSphere.center=b;this.boundingSphere.radius=Math.max(y,f);"function"==typeof e&&e()};this.addVolumetricData=function(b,c,d){b=new $3Dmol.VolumeData(b,c);this.addIsosurface(b,d)};this.finalize=function(){c(u);u.initTypedArrays()};
this.globj=function(b){var d;p&&(b.remove(p),p=null);if(!this.hidden){c(u);u.initTypedArrays();this.wireframe&&u.setUpWireframe();if("undefined"!=typeof this.color){(d=this.color)||$3Dmol.CC.color(d);u.colorsNeedUpdate=!0;if(d.constructor!==Array){var e=d.r;var f=d.g;var l=d.b}for(var g in u.geometryGroups){var h=u.geometryGroups[g],t=h.colorArray,A=0;for(h=h.vertices;A<h;++A)d.constructor===Array&&(l=d[A],e=l.r,f=l.g,l=l.b),t[3*A]=e,t[3*A+1]=f,t[3*A+2]=l}}q=new $3Dmol.Object3D;d=this.side==$3Dmol.DoubleSide?
new $3Dmol.MeshDoubleLambertMaterial({wireframe:this.wireframe,side:this.side,transparent:1>this.opacity?!0:!1,opacity:this.opacity,wireframeLinewidth:this.linewidth}):new $3Dmol.MeshLambertMaterial({wireframe:this.wireframe,side:this.side,transparent:1>this.opacity?!0:!1,opacity:this.opacity,wireframeLinewidth:this.linewidth});d=new $3Dmol.Mesh(u,d);q.add(d);d=new $3Dmol.LineBasicMaterial({linewidth:this.linewidth,color:this.color});d=new $3Dmol.Line(m,d,$3Dmol.LinePieces);q.add(d);p=q.clone();b.add(p)}};
this.removegl=function(b){p&&(void 0!==p.geometry&&p.geometry.dispose(),void 0!==p.material&&p.material.dispose(),b.remove(p),p=null);q=null}}var c=function(b){b=b.updateGeoGroup(0);0<b.vertices&&b.truncateArrayBuffers(!0,!0)},d=function(b,c,d){var e=d.faceArr;0!==d.vertexArr.length&&0!==e.length||console.warn("Error adding custom shape component: No vertices and/or face indices supplied!");e=d.color;"undefined"==typeof e&&(e=b.color);e=$3Dmol.CC.color(e);for(var g=$3Dmol.splitMesh(d),m=0,l=g.length;m<
l;m++){var n,y=void 0,f=n=void 0;var x=b;var w=c;var q=g[m];var t=g[m].colorArr?g[m].colorArr:e,A=d.clickable,T=w.addGeoGroup(),G=q.vertexArr,C=q.normalArr,z=q.faceArr;T.vertices=G.length;T.faceidx=z.length;var D=T.vertexArray,I=T.colorArray;t.constructor!==Array&&(y=t.r,n=t.g,f=t.b);var K=0;for(q=T.vertices;K<q;++K){var H=3*K;var N=G[K];D[H]=N.x;D[H+1]=N.y;D[H+2]=N.z;t.constructor===Array&&(N=t[K],y=N.r,n=N.g,f=N.b);I[H]=y;I[H+1]=n;I[H+2]=f}if(A)for(K=0,q=T.faceidx/3;K<q;++K)H=3*K,n=z[H],f=z[H+1],
N=z[H+2],H=new $3Dmol.Vector3,y=new $3Dmol.Vector3,t=new $3Dmol.Vector3,x.intersectionShape.triangle.push(new $3Dmol.Triangle(H.copy(G[n]),y.copy(G[f]),t.copy(G[N])));if(A){q=new $3Dmol.Vector3(0,0,0);for(n=K=0;n<w.geometryGroups.length;n++)q.add(w.geometryGroups[n].getCentroid()),K++;q.divideScalar(K);h(x.boundingSphere,{centroid:q},D,T.vertices)}T.faceArray=new Uint16Array(z);T.truncateArrayBuffers(!0,!0);if(C.length<T.vertices)T.setNormals();else for(w=T.normalArray=new Float32Array(3*T.vertices),
K=0,q=T.vertices;K<q;++K)H=3*K,x=C[K],w[H]=x.x,w[H+1]=x.y,w[H+2]=x.z;T.setLineIndices();T.lineidx=T.lineArray.length}},h=function(b,c,d,e){b.center.set(0,0,0);var g;if(0<c.length){var m=0;for(g=c.length;m<g;++m)b.center.add(c[m].centroid);b.center.divideScalar(c.length)}c=b.radius*b.radius;d.length/3<e&&(e=d.length/3);m=0;for(g=e;m<g;m++)e=b.center.distanceToSquared({x:d[3*m],y:d[3*m+1],z:d[3*m+2]}),c=Math.max(c,e);b.radius=Math.sqrt(c)},e=function(b,c){"undefined"!=typeof c.color?(b.color=c.color||
new $3Dmol.Color,c.color instanceof $3Dmol.Color||(b.color=$3Dmol.CC.color(c.color))):b.color=$3Dmol.CC.color(0);b.wireframe=c.wireframe?!0:!1;b.opacity=c.alpha?$3Dmol.Math.clamp(c.alpha,0,1):1;"undefined"!=typeof c.opacity&&(b.opacity=$3Dmol.Math.clamp(c.opacity,0,1));b.side=void 0!==c.side?c.side:$3Dmol.DoubleSide;b.linewidth="undefined"==typeof c.linewidth?1:c.linewidth;b.clickable=c.clickable?!0:!1;b.callback="function"===typeof c.callback?c.callback:null;b.hoverable=c.hoverable?!0:!1;b.hover_callback=
"function"===typeof c.hover_callback?c.hover_callback:null;b.unhover_callback="function"===typeof c.unhover_callback?c.unhover_callback:null;b.hidden=c.hidden};Object.defineProperty(b.prototype,"position",{get:function(){return this.boundingSphere.center}});Object.defineProperty(b.prototype,"x",{get:function(){return this.boundingSphere.center.x}});Object.defineProperty(b.prototype,"y",{get:function(){return this.boundingSphere.center.y}});Object.defineProperty(b.prototype,"z",{get:function(){return this.boundingSphere.center.z}});
return b}();$3Dmol.ShapeIDCount=0;
$3Dmol.splitMesh=function(b){if(64E3>b.vertexArr.length)return[b];var c=[{vertexArr:[],normalArr:[],faceArr:[]}];b.colorArr&&(c.colorArr=[]);for(var d=[],h=[],e=0,t=b.faceArr,g=0,q=t.length;g<q;g+=3){for(var p=c[e],u=0;3>u;u++){var m=t[g+u];d[m]!==e&&(d[m]=e,h[m]=p.vertexArr.length,p.vertexArr.push(b.vertexArr[m]),b.normalArr&&b.normalArr[m]&&p.normalArr.push(b.normalArr[m]),b.colorArr&&b.colorArr[m]&&p.colorArr.push(b.colorArr[m]));p.faceArr.push(h[m])}64E3<=p.vertexArr.length&&(c.push({vertexArr:[],
normalArr:[],faceArr:[]}),b.colorArr&&(c.colorArr=[]),e++)}return c};
$3Dmol.GLViewer=function(){return function(b,c){function d(b){var c=[];if("undefined"===typeof b.model)for(b=0;b<f.length;b++)f[b]&&c.push(f[b]);else for(c=b.model,$.isArray(c)||(c=[c]),b=0;b<c.length;b++)if("number"===typeof c[b]){var d=c[b];0>d&&(d+=f.length);c[b]=f[d]}return c}function h(b){var c=[];"undefined"===typeof b&&(b={});for(var f=d(b),e=0;e<f.length;e++)c=c.concat(f[e].selectedAtoms(b));return c}function e(b,c,f,e,n){for(var l=d(c),m=0;m<l.length;m++)l[m][b](c,f,e,n)}function t(b){var c=
new $3Dmol.MeshLambertMaterial;c.vertexColors=$3Dmol.VertexColors;for(var d in b)"color"!==d&&"map"!==d&&b.hasOwnProperty(d)&&(c[d]=b[d]);void 0!==b.opacity&&(c.transparent=1===b.opacity?!1:!0);return c}c=c||{};var g=c.callback,q=c.defaultcolors;q||(q=$3Dmol.elementColors.defaultColors);var p=c.nomouse,u=0;c.backgroundColor=c.backgroundColor||"#ffffff";u=$3Dmol.CC.color(c.backgroundColor).getHex();var m=0;m=parseFloat(c.camerax);var l=this,n=b,y=null,f=[],x={},w=[],R=[],P=[],A=[],T=[],G=null,C=500;
C=c.hoverDuration;var z=n.width(),D=n.height(),I=[],K=new $3Dmol.Renderer({antialias:!0,preserveDrawingBuffer:!0,premultipliedAlpha:!1,id:c.id,row:c.row,col:c.col,rows:c.rows,cols:c.cols,canvas:c.canvas});K.domElement.style.width="100%";K.domElement.style.height="100%";K.domElement.style.padding="0";K.domElement.style.position="absolute";K.domElement.style.top="0px";K.domElement.style.left="0px";K.domElement.style.zIndex="0";var H=c.row,N=c.col,E=c.cols,L=c.rows,M=c.viewers,F=c.control_all,J=K.getAspect(z,
D),Q=new $3Dmol.Camera(20,J,1,800,c.orthographic);Q.position=new $3Dmol.Vector3(m,0,150);var W=new $3Dmol.Vector3;Q.lookAt(W);var V=new $3Dmol.Raycaster(new $3Dmol.Vector3(0,0,0),new $3Dmol.Vector3(0,0,0)),U=new $3Dmol.Projector;new $3Dmol.Vector3(0,0,0);var ca=null,S=null,O=null,Z=-50,aa=50,B=new $3Dmol.Quaternion(0,0,0,1),Y=new $3Dmol.Quaternion(0,0,0,1),X=0,da=!1,ma=0,qa=0,ha=0,ja=0,jb=0,xa=0,Ha=0,Ia=function(){X--;0>X&&(X=0)},oa=function(){var b=0,c;for(c in x)if(x.hasOwnProperty(c)){var d=parseInt(c);
isNaN(d)||(c=d);c>b&&(b=c)}return b+1},Ja=function(){var b=Q.position.z-S.position.z;1>b&&(b=1);Q.near=b+Z;1>Q.near&&(Q.near=1);Q.far=b+aa;Q.near+1>Q.far&&(Q.far=Q.near+1);Q.fov=20;Q.right=b*Math.tan(Math.PI/180*20);Q.left=-Q.right;Q.top=Q.right/J;Q.bottom=-Q.top;Q.updateProjectionMatrix();ca.fog.near=Q.near+.4*(Q.far-Q.near);ca.fog.far=Q.far;c.disableFog&&(ca.fog.near=ca.fog.far)},ea=function(b){K.setViewport();if(ca&&(Ja(),K.render(ca,Q),!b&&0<I.length)){b=l.getView();for(var c=0;c<I.length;c++)I[c].setView(b,
!0)}};(function(){ca=new $3Dmol.Scene;ca.fog=new $3Dmol.Fog(u,100,200);O=new $3Dmol.Object3D;S=new $3Dmol.Object3D;S.useQuaternion=!0;S.quaternion=new $3Dmol.Quaternion(0,0,0,1);S.add(O);ca.add(S);var b=new $3Dmol.Light(16777215);b.position=(new $3Dmol.Vector3(.2,.2,1)).normalize();b.intensity=1;ca.add(b)})();K.setClearColorHex(u,1);ca.fog.color=$3Dmol.CC.color(u);var Va=function(b,c){G!=b&&(G&&G.unhover_callback(G,l,c,n),(G=b)&&void 0!==b.hover_callback&&"function"===typeof b.hover_callback&&b.hover_callback(b,
l,c,n))},kb=function(b,c,d){V.setFromCamera({x:b,y:c,z:-1},Q);b=V.intersectObjects(O,T);0!=b.length&&void 0!==b[0]||Va(null);void 0!==b[0]&&b[0].clickable!==G&&Va(null)},Qa=function(b){var c=b.originalEvent.targetTouches[0].pageX-b.originalEvent.targetTouches[1].pageX;b=b.originalEvent.targetTouches[0].pageY-b.originalEvent.targetTouches[1].pageY;return Math.sqrt(c*c+b*b)},Ba=function(b){var c=b.pageX,d=b.pageY;void 0==c&&(c=b.originalEvent.pageX);void 0==d&&(d=b.originalEvent.pageY);b.originalEvent.targetTouches&&
b.originalEvent.targetTouches[0]?(c=b.originalEvent.targetTouches[0].pageX,d=b.originalEvent.targetTouches[0].pageY):b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(c=b.originalEvent.changedTouches[0].pageX,d=b.originalEvent.changedTouches[0].pageY);return[c,d]},qb=function(b,c){b/=z;c/=D;var d=S.quaternion,f=new $3Dmol.Vector3(0,0,S.position.z);U.projectVector(f,Q);f.x+=2*b;f.y-=2*c;U.unprojectVector(f,Q);f.z=0;f.applyQuaternion(d);return f},lb=function(b,c){var d=n.width(),f=
n.height();if(void 0!=M&&!F){d/=E;f/=L;var e=$("canvas",n).offset();b=Math.floor((b-e.left)/d);if(L-Math.floor((c-e.top)/f)-1!=H||b!=N)return!1}return!0};$("body").bind("mouseup touchend",function(b){if(da&&ca){var c=Ba(b),d=c[0];c=c[1];if(d==ma&&c==qa){var f=$("canvas",n).offset();0!=A.length&&(V.setFromCamera({x:(d-f.left)/z*2-1,y:2*-((c-f.top)/D)+1,z:-1},Q),d=V.intersectObjects(O,A),d.length&&(d=d[0].clickable,void 0!==d.callback&&"function"===typeof d.callback&&d.callback(d,l,b,n)))}}da=!1});
var Wa=function(b){if(c.lowerZoomLimit&&0<c.lowerZoomLimit){var d=150-c.lowerZoomLimit;b>d&&(b=d)}c.upperZoomLimit&&0<c.upperZoomLimit&&(d=150-c.upperZoomLimit,b<d&&(b=d));150<b&&(b=149.85);return b};this.setZoomLimits=function(b,d){"undefined"!==typeof b&&(c.lowerZoomLimit=b);d&&(c.upperZoomLimit=d);S.position.z=Wa(S.position.z);ea()};var db,Xa=this._handleMouseDown=function(b){b.preventDefault();if(ca){var c=Ba(b),d=c[0];c=c[1];void 0!==d&&(da=!0,db=b.which,ma=d,qa=c,ha=0,b.originalEvent.targetTouches&&
2==b.originalEvent.targetTouches.length&&(ha=Qa(b)),B=S.quaternion,jb=S.position.z,ja=O.position.clone(),xa=Z,Ha=aa)}},mb=this._handleMouseScroll=function(b){b.preventDefault();if(ca){var c=Ba(b),d=c[0];void 0!==d&&lb(d,c[1])&&(c=.85*(150-S.position.z),d=1,b.originalEvent.ctrlKey&&(d=-1),b.originalEvent.detail?S.position.z+=d*c*b.originalEvent.detail/10:b.originalEvent.wheelDelta&&(S.position.z-=d*c*b.originalEvent.wheelDelta/400),S.position.z=Wa(S.position.z),ea())}};this.pngURI=function(){return this.getCanvas().toDataURL("image/png")};
this.getCanvas=function(){return y.get(0)};this.setHoverDuration=function(b){C=b};var eb,Ya=this._handleMouseMove=function(b){z=n.width();D=n.height();clearTimeout(eb);var c=$("canvas",n).offset(),d=(Ba(b)[0]-c.left)/z*2-1,f=2*-((Ba(b)[1]-c.top)/D)+1;null!==G&&kb(d,f,b);eb=setTimeout(function(){if(0!=T.length){V.setFromCamera({x:d,y:f,z:-1},Q);var b=V.intersectObjects(O,T);b.length?(b=b[0].clickable,Va(b),G=b):Va(null)}},C);b.preventDefault();if(ca&&da){c=0;var e=Ba(b),l=e[0],m=e[1];if(void 0!==l&&
lb(l,m)){e=(l-ma)/z;var g=(m-qa)/D;0!=ha&&b.originalEvent.targetTouches&&2==b.originalEvent.targetTouches.length?(g=Qa(b),c=2,g=2*(g-ha)/(z+D),console.log("pinch "+ha+" dy "+g)):b.originalEvent.targetTouches&&3==b.originalEvent.targetTouches.length&&(c=1);var h=K.getXYRatio(),x=h[0],w=h[1];e*=x;g*=w;h=Math.sqrt(e*e+g*g);3==c||3==db&&b.ctrlKey?(Z=xa+100*e,aa=Ha-100*g):2==c||3==db||b.shiftKey?(b=.85*(150-S.position.z),80>b&&(b=80),S.position.z=jb+g*b,S.position.z=Wa(S.position.z)):1==c||2==db||b.ctrlKey?
(b=qb(x*(l-ma),w*(m-qa)),O.position.addVectors(ja,b)):0!==c&&1!=db||0===h||(b=Math.sin(h*Math.PI)/h,Y.x=Math.cos(h*Math.PI),Y.y=0,Y.z=b*e,Y.w=-b*g,S.quaternion=new $3Dmol.Quaternion(1,0,0,0),S.quaternion.multiply(Y),S.quaternion.multiply(B));ea()}}},Sa=function(b){n=b;z=n.width();D=n.height();J=K.getAspect(z,D);K.setSize(z,D);n.append(K.domElement);y=$(K.domElement);p||(y.bind("mousedown touchstart",Xa),y.bind("DOMMouseScroll mousewheel",mb),y.bind("mousemove touchmove",Ya),y.bind("contextmenu",function(b){b.preventDefault()}))};
Sa(n);this.setContainer=function(b){"string"===$.type(b)&&(b=$("#"+b));b||(b=n);Sa(b);return this};this.setBackgroundColor=function(b,c){if("undefined"==typeof c)c=1;else if(0>c||1<c)c=1;b=$3Dmol.CC.color(b);ca.fog.color=b;u=b.getHex();K.setClearColorHex(b.getHex(),c);ea();return this};this.setProjection=function(b){Q.ortho="orthographic"===b;Ja()};this.setViewStyle=function(b){if("outline"===b.style){var c={};b.color&&(c.color=$3Dmol.CC.color(b.color));b.width&&(c.width=b.width);K.enableOutline(c)}else K.disableOutline();
return this};c.style&&this.setViewStyle(c);this.setWidth=function(b){z=b||z;K.setSize(z,D);return this};this.setHeight=function(b){D=b||D;K.setSize(z,D);return this};this.resize=function(){z=n.width();D=n.height();J=K.getAspect(z,D);K.setSize(z,D);Q.aspect=J;Q.updateProjectionMatrix();ea();return this};$(window).resize(this.resize);this.getModel=function(b){return b in f?f[b]:0==f.length?null:f[f.length-1]};this.rotate=function(b,c,d,f){d=void 0!==d?d:0;"undefined"===typeof c&&(c="y");"x"==c&&(c=
{x:1,y:0,z:0});"y"==c&&(c={x:0,y:1,z:0});"z"==c&&(c={x:0,y:0,z:1});var e=Math.PI*b/180;b=Math.sin(e/2);e=Math.cos(e/2);c=(new $3Dmol.Quaternion(c.x*b,c.y*b,c.z*b,e)).normalize();d?(c=(new $3Dmol.Quaternion).copy(S.quaternion).multiply(c),Ka(d,f,O.position,S.position.z,c,W)):(S.quaternion.multiply(c),ea());return this};this.surfacesFinished=function(){for(var b in x)if(!x[b][0].done)return!1;return!0};this.getView=function(){if(!O)return[0,0,0,0,0,0,0,1];var b=O.position,c=S.quaternion;return[b.x,
b.y,b.z,S.position.z,c.x,c.y,c.z,c.w]};this.setView=function(b,c){if(void 0===b||!(b instanceof Array||8!==b.length)||!O||!S)return this;O.position.x=b[0];O.position.y=b[1];O.position.z=b[2];S.position.z=b[3];S.quaternion.x=b[4];S.quaternion.y=b[5];S.quaternion.z=b[6];S.quaternion.w=b[7];"undefined"!=typeof b[8]&&(S.position.x=b[8],S.position.y=b[9]);ea(c);return this};this.render=function(b){K.setViewport();A.splice(0,A.length);T.splice(0,T.length);var c;var d=0;for(c=f.length;d<c;d++){var e=f[d];
if(e){var n=e.selectedAtoms({clickable:!0});e=e.selectedAtoms({hoverable:!0});Array.prototype.push.apply(T,e);Array.prototype.push.apply(A,n)}}d=0;for(c=w.length;d<c;d++)(n=w[d])&&n.clickable&&A.push(n),n&&n.hoverable&&T.push(n);d=this.getView();n=K.supportedExtensions();for(c=0;c<f.length;c++)f[c]&&f[c].globj(O,n);for(c=0;c<w.length;c++)w[c]&&w[c].globj(O,n);for(c in x)if(x.hasOwnProperty(c))for(e=x[c],n=0;n<e.length;n++)if(e.hasOwnProperty(n)){var l=e[n].geo;if(!e[n].finished)if(l.verticesNeedUpdate=
!0,l.elementsNeedUpdate=!0,l.normalsNeedUpdate=!0,l.colorsNeedUpdate=!0,l.buffersNeedUpdate=!0,l.boundingSphere=null,e[n].done&&(e[n].finished=!0),e[n].lastGL&&O.remove(e[n].lastGL),l=e[n].mat instanceof $3Dmol.LineBasicMaterial?new $3Dmol.Line(l,e[n].mat):new $3Dmol.Mesh(l,e[n].mat),l.visible=e[n].mat.transparent&&0==e[n].mat.opacity?!1:!0,1<e[n].symmetries.length||1==e[n].symmetries.length&&!e[n].symmetries[n].isIdentity()){var m,g=new $3Dmol.Object3D;for(m=0;m<e[n].symmetries.length;m++){var h=
l.clone();h.matrix=e[n].symmetries[m];h.matrixAutoUpdate=!1;g.add(h)}e[n].lastGL=g;O.add(g)}else e[n].lastGL=l,O.add(l)}this.setView(d);"function"===typeof b&&b(this);return this};this.selectedAtoms=function(b){return h(b)};this.getUniqueValues=function(b,c){"undefined"===typeof c&&(c={});c=h(c);var d={},f;for(f in c)c[f].hasOwnProperty(b)&&(d[c[f][b]]=!0);return Object.keys(d)};this.pdbData=function(b){b=h(b);for(var c="",d=0,f=b.length;d<f;++d)c+=b[d].pdbline+"\n";return c};var Ca=function(b,c,
d){if(1==d)return c;if(0==d)return b;var f=b.x*c.x+b.y*c.y+b.z*c.z+b.w*c.w;if(.9995<f)return b=new $3Dmol.Quaternion(b.x+d*(c.x-b.x),b.y+d*(c.y-b.y),b.z+d*(c.z-b.z),b.w+d*(c.w-b.w)),b.normalize(),b;0>f&&(c=c.clone().multiplyScalar(-1),f=-f);1<f?f=1:-1>f&&(f=-1);d*=Math.acos(f);c=c.clone();c.sub(b.clone().multiplyScalar(f));c.normalize();f=Math.cos(d);d=Math.sin(d);b=new $3Dmol.Quaternion(b.x*f+c.x*d,b.y*f+c.y*d,b.z*f+c.z*d,b.w*f+c.w*d);b.normalize();return b},Da;this.spin=function(b){clearInterval(Da);
"undefined"==typeof b&&(b="y");if("boolean"==typeof b)if(b)b="y";else return;Array.isArray(b)&&(b={x:b[0],y:b[1],z:b[2]});var c=this;Da=setInterval(function(){c.rotate(1,b)},25)};var Ka=function(b,c,d,f,e,n){var l=Math.ceil(b/20);1>l&&(l=1);X++;b=O.position.clone();var m=S.position.z,g=S.quaternion.clone(),h=W.clone();if(c){l=Array(l);for(var x=l.length,w=0;w<x;w++){var p=(w+1)/x;c={mpos:b,rz:m,rot:g};d&&(c.mpos=d.clone().sub(b).multiplyScalar(p).add(b));"undefined"!=typeof f&&null!=f&&(c.rz=m+p*
(f-m));e&&(c.rot=Ca(g,e,p));n&&(c.cam=n.clone().sub(h).multiplyScalar(p).add(h));l[w]=c}var y=0;var q=function(){var b=l[y];y+=1;b.mpos&&(O.position=b.mpos);b.rz&&(S.position.z=b.rz);b.rot&&(S.quaternion=b.rot);b.cam&&Q.lookAt(b.cam);y<l.length?setTimeout(q,20):Ia();ea()}}else{var t,A,ka;p=1/l;d&&(t=d.clone().sub(b).multiplyScalar(p));"undefined"!=typeof f&&null!=f&&(A=p*(f-m));if(e){c=Ca(g,e,p);var u=g.clone().inverse().multiply(c)}n&&(ka=n.clone().sub(h).multiplyScalar(p));y=0;q=function(){y+=1;
t&&O.position.add(t);A&&(S.position.z+=A);u&&S.quaternion.multiply(u);ka&&(W.add(ka),Q.lookAt(W));y<l?setTimeout(q,20):Ia();ea()}}setTimeout(q,20)};this.zoom=function(b,c,d){c=void 0!==c?c:0;b=150-(150-S.position.z)/(b||2);0<c?Ka(c,d,O.position,Wa(b),S.quaternion,W):(S.position.z=Wa(b),ea());return this};this.translate=function(b,c,d,f){d=void 0!==d?d:0;b/=z;c/=D;var e=new $3Dmol.Vector3(0,0,-150);U.projectVector(e,Q);e.x-=b;e.y-=c;U.unprojectVector(e,Q);e.z=0;b=W.clone().add(e);0<d?Ka(d,f,O.position,
S.position.z,S.quaternion,b):(W=b,Q.lookAt(W),ea());return this};this.fitSlab=function(b){b=b||{};b=h(b);var c=$3Dmol.getExtent(b);b=c[1][0]-c[0][0];var d=c[1][1]-c[0][1];c=c[1][2]-c[0][2];b=Math.sqrt(b*b+d*d+c*c);5>b&&(b=5);Z=-b/1.9;aa=b/2;return this};this.center=function(b,c,d){c=void 0!==c?c:0;b=b||{};var f=h(b),e=$3Dmol.getExtent(f);if($.isEmptyObject(b)){$.each(w,function(b,c){c&&c.boundingSphere&&c.boundingSphere.center&&(b=c.boundingSphere.center,c=c.boundingSphere.radius,0<c?(f.push(new $3Dmol.Vector3(b.x+
c,b.y,b.z)),f.push(new $3Dmol.Vector3(b.x-c,b.y,b.z)),f.push(new $3Dmol.Vector3(b.x,b.y+c,b.z)),f.push(new $3Dmol.Vector3(b.x,b.y-c,b.z)),f.push(new $3Dmol.Vector3(b.x,b.y,b.z+c)),f.push(new $3Dmol.Vector3(b.x,b.y,b.z-c))):f.push(b))});e=$3Dmol.getExtent(f);b=f;var n=e}else b=h({}),n=$3Dmol.getExtent(b);b=new $3Dmol.Vector3(e[2][0],e[2][1],e[2][2]);var l=n[1][0]-n[0][0],m=n[1][1]-n[0][1];n=n[1][2]-n[0][2];l=Math.sqrt(l*l+m*m+n*n);5>l&&(l=5);Z=-l/1.9;aa=l/2;l=e[1][0]-e[0][0];m=e[1][1]-e[0][1];n=e[1][2]-
e[0][2];l=Math.sqrt(l*l+m*m+n*n);5>l&&(l=5);e=25;for(l=0;l<f.length;l++)f[l]&&(m=b.distanceToSquared(f[l]),m>e&&(e=m));l=2*Math.sqrt(e);b=b.clone().multiplyScalar(-1);0<c?Ka(c,d,b,S.position.z,S.quaternion,W):(O.position=b,ea());return this};this.zoomTo=function(b,c,d){c=void 0!==c?c:0;b=b||{};var f=h(b),e=$3Dmol.getExtent(f);if($.isEmptyObject(b)){$.each(w,function(b,c){c&&c.boundingSphere&&c.boundingSphere.center&&(b=c.boundingSphere.center,c=c.boundingSphere.radius,0<c?(f.push(new $3Dmol.Vector3(b.x+
c,b.y,b.z)),f.push(new $3Dmol.Vector3(b.x-c,b.y,b.z)),f.push(new $3Dmol.Vector3(b.x,b.y+c,b.z)),f.push(new $3Dmol.Vector3(b.x,b.y-c,b.z)),f.push(new $3Dmol.Vector3(b.x,b.y,b.z+c)),f.push(new $3Dmol.Vector3(b.x,b.y,b.z-c))):f.push(b))});e=$3Dmol.getExtent(f);var n=f;var l=e}else n=h({}),l=$3Dmol.getExtent(n);n=new $3Dmol.Vector3(e[2][0],e[2][1],e[2][2]);var m=l[1][0]-l[0][0],g=l[1][1]-l[0][1];l=l[1][2]-l[0][2];m=Math.sqrt(m*m+g*g+l*l);5>m&&(m=5);Z=-m/1.9;aa=m/2;0===Object.keys(b).length&&(Z=-999999,
aa=999999);m=e[1][0]-e[0][0];g=e[1][1]-e[0][1];l=e[1][2]-e[0][2];m=Math.sqrt(m*m+g*g+l*l);5>m&&(m=5);b=25;for(e=0;e<f.length;e++)f[e]&&(m=n.distanceToSquared(f[e]),m>b&&(b=m));m=2*Math.sqrt(b);n=n.clone().multiplyScalar(-1);b=-(.5*m/Math.tan(Math.PI/180*Q.fov/2)-150);b=Wa(b);0<c?Ka(c,d,n,b,S.quaternion,W):(O.position=n,S.position.z=b,ea());return this};this.setSlab=function(b,c){Z=b;aa=c};this.getSlab=function(b){return{near:Z,far:aa}};this.addLabel=function(b,c,d){c=c||{};d&&(d=$3Dmol.getExtent(h(d)),
c.position={x:d[2][0],y:d[2][1],z:d[2][2]});b=new $3Dmol.Label(b,c);b.setContext();O.add(b.sprite);c.fixed&&P.push(R.length);R.push(b);ea();return b};this.addResLabels=function(b,c){e("addResLabels",b,this,c);ea();return this};this.addPropertyLabels=function(b,c,d){e("addPropertyLabels",b,c,this,d);ea();return this};this.removeLabel=function(b){for(var c=0;c<R.length;c++)if(R[c]==b){R.splice(c,1);b.dispose();O.remove(b.sprite);break}ea();return this};this.removeAllLabels=function(){for(var b=0;b<
R.length;b++)O.remove(R[b].sprite);R.splice(0,R.length);ea();return this};this.setLabelStyle=function(b,c){O.remove(b.sprite);b.dispose();b.stylespec=c;b.setContext();O.add(b.sprite);ea();return b};this.setLabelText=function(b,c){O.remove(b.sprite);b.dispose();b.text=c;b.setContext();O.add(b.sprite);ea();return b};this.addShape=function(b){b=b||{};b=new $3Dmol.GLShape(b);b.shapePosition=w.length;w.push(b);return b};this.removeShape=function(b){if(!b)return this;b.removegl(O);for(delete w[b.shapePosition];0<
w.length&&"undefined"===typeof w[w.length-1];)w.pop();return this};this.removeAllShapes=function(){for(var b=0;b<w.length;b++)w[b].removegl(O);w.splice(0,w.length);return this};var sa=function(b){if(b.hasOwnProperty("x")&&b.hasOwnProperty("y")&&b.hasOwnProperty("z"))return b;b=h(b);if(0==b.length)return{x:0,y:0,z:0};b=$3Dmol.getExtent(b);return{x:b[0][0]+(b[1][0]-b[0][0])/2,y:b[0][1]+(b[1][1]-b[0][1])/2,z:b[0][2]+(b[1][2]-b[0][2])/2}};this.addSphere=function(b){b=b||{};b.center=sa(b.center);var c=
new $3Dmol.GLShape(b);c.shapePosition=w.length;c.addSphere(b);w.push(c);c.finalize();return c};this.addBox=function(b){b=b||{};void 0!=b.corner&&(b.corner=sa(b.corner));void 0!=b.center&&(b.center=sa(b.center));var c=new $3Dmol.GLShape(b);c.shapePosition=w.length;c.addBox(b);w.push(c);c.finalize();return c};this.addArrow=function(b){b=b||{};b.start=sa(b.start);b.end=sa(b.end);var c=new $3Dmol.GLShape(b);c.shapePosition=w.length;c.addArrow(b);w.push(c);c.finalize();return c};this.addCylinder=function(b){b=
b||{};b.start=sa(b.start);b.end=sa(b.end);var c=new $3Dmol.GLShape(b);c.shapePosition=w.length;b.dashed?c.addDashedCylinder(b):c.addCylinder(b);w.push(c);c.finalize();return c};this.addCurve=function(b){b=b||{};var c=new $3Dmol.GLShape(b);c.shapePosition=w.length;c.addCurve(b);w.push(c);c.finalize();return c};this.addLine=function(b){b=b||{};b.start=sa(b.start);b.end=sa(b.end);b.wireframe=!0;var c=new $3Dmol.GLShape(b);c.shapePosition=w.length;if(b.dashed){b.dashLength=b.dashLength||.5;b.gapLength=
b.gapLength||.5;b.start=b.start||{};b.end=b.end||{};var d=new $3Dmol.Vector3(b.start.x||0,b.start.y||0,b.start.z||0),f=new $3Dmol.Vector3(b.end.x,b.end.y||0,b.end.z||0),e=new $3Dmol.Vector3;new $3Dmol.Vector3;new $3Dmol.Vector3;var n,l=d.clone(),m=0;e.subVectors(f,d);var g=e.length();e.normalize();var h=e.clone();e=e.clone();h.multiplyScalar(b.dashLength);e.multiplyScalar(b.gapLength);var x=h.length();for(n=e.length();m<g;){if(m+x>g){b.start=d;b.end=f;c.addLine(b);break}l.addVectors(d,h);b.start=
d;b.end=l;c.addLine(b);d=l.clone();m+=x;l.addVectors(d,e);d=l.clone();m+=n}c.finalize()}else c.addLine(b);w.push(c);c.finalize();return c};this.addUnitCell=function(b){b||(b=this.getModel());var c=new $3Dmol.GLShape({wireframe:!0});c.shapePosition=w.length;var d=b.getCrystData();if(d){if(d.matrix)b=d.matrix;else{b=d.a;var f=d.b,e=d.c,n=d.alpha,l=d.beta;d=d.gamma;n=n*Math.PI/180;l=l*Math.PI/180;d=d*Math.PI/180;var m=Math.cos(l);n=(Math.cos(n)-Math.cos(l)*Math.cos(d))/Math.sin(d);b=new $3Dmol.Matrix4(b,
f*Math.cos(d),e*m,0,0,f*Math.sin(d),e*n,0,0,0,e*Math.sqrt(Math.max(0,1-m*m-n*n)),0,0,0,0,1)}f=[new $3Dmol.Vector3(0,0,0),new $3Dmol.Vector3(1,0,0),new $3Dmol.Vector3(0,1,0),new $3Dmol.Vector3(0,0,1),new $3Dmol.Vector3(1,1,0),new $3Dmol.Vector3(0,1,1),new $3Dmol.Vector3(1,0,1),new $3Dmol.Vector3(1,1,1)];for(e=0;e<f.length;e++)f[e]=f[e].applyMatrix4(b);c.addLine({start:f[0],end:f[1]});c.addLine({start:f[0],end:f[2]});c.addLine({start:f[1],end:f[4]});c.addLine({start:f[2],end:f[4]});c.addLine({start:f[0],
end:f[3]});c.addLine({start:f[3],end:f[5]});c.addLine({start:f[2],end:f[5]});c.addLine({start:f[1],end:f[6]});c.addLine({start:f[4],end:f[7]});c.addLine({start:f[6],end:f[7]});c.addLine({start:f[3],end:f[6]});c.addLine({start:f[5],end:f[7]})}w.push(c);c.finalize();return c};this.addCustom=function(b){b=b||{};var c=new $3Dmol.GLShape(b);c.shapePosition=w.length;c.addCustom(b);w.push(c);c.finalize();return c};this.addVolumetricData=function(b,c,d){d=d||{};var f=new $3Dmol.GLShape(d);f.shapePosition=
w.length;f.addVolumetricData(b,c,d);w.push(f);return f};this.addIsosurface=function(b,c,d){c=c||{};var f=new $3Dmol.GLShape(c);f.shapePosition=w.length;f.addIsosurface(b,c,d);w.push(f);return f};this.enableFog=function(b){b?ca.fog=new $3Dmol.Fog(u,100,200):(c.disableFog=!0,ea())};this.setFrame=function(b){return new Promise(function(c,d){d=f.map(function(c){return c.setFrame(b)});Promise.all(d).then(function(){c()})})};this.getNumFrames=function(){for(var b=0,c=0;c<f.length;c++)f[c].getNumFrames()>
b&&(b=f[c].getNumFrames());return b};this.animate=function(b){X++;var c=100,d="forward",f=0;b=b||{};b.interval&&(c=b.interval);b.loop&&(d=b.loop);b.reps&&(f=b.reps);var e=this.getNumFrames(),n=this,l=0,m=1;b.step&&(m=b.step,f/=m);var g=0,h=e*f,x=new Date,w=function(){n.render();if(++g!=h&&n.isAnimated()){var b=c-(new Date-x);setTimeout(p,0<b?b:0,d)}else clearTimeout(y),Ia()},p=function(b){x=new Date;"forward"==b?n.setFrame(l).then(function(){l=(l+m)%e;w()}):"backward"==b?n.setFrame(e-1-l).then(function(){l=
(l+m)%e;w()}):n.setFrame(l).then(function(){l+=m;m*=0==l%(e-1)?-1:1;w()})},y=setTimeout(p,0,d);return this};this.stopAnimate=function(){X=0;return this};this.isAnimated=function(){return 0<X};this.addModel=function(b,c,d){d&&!d.defaultcolors&&(d.defaultcolors=q);var e=new $3Dmol.GLModel(f.length,d);e.addMolData(b,c,d);f.push(e);return e};this.addModels=function(b,c,d){d=d||{};d.multimodel=!0;d.frames=!0;b=$3Dmol.GLModel.parseMolData(b,c,d);for(c=0;c<b.length;c++){var e=new $3Dmol.GLModel(f.length,
q);e.setAtomDefaults(b[c]);e.addFrame(b[c]);e.setFrame(0);b.modelData&&e.setModelData(b.modelData[c]);e.setDontDuplicateAtoms(!d.duplicateAssemblyAtoms);f.push(e)}return f};this.addModelsAsFrames=function(b,c,d){d=d||{};d.multimodel=!0;d.frames=!0;var e=new $3Dmol.GLModel(f.length,q);e.addMolData(b,c,d);f.push(e);return e};this.addAsOneMolecule=function(b,c,d){d=d||{};d.multimodel=!0;d.onemol=!0;var e=new $3Dmol.GLModel(f.length,q);e.addMolData(b,c,d);f.push(e);return e};this.removeModel=function(b){if(b){b.removegl(O);
for(delete f[b.getID()];0<f.length&&"undefined"===typeof f[f.length-1];)f.pop();return this}};this.removeAllModels=function(){for(var b=0;b<f.length;b++)f[b].removegl(O);f.splice(0,f.length);return this};this.exportJSON=function(b,c){var d={};d.m=void 0===c?f.map(function(c){return c.toCDObject(b)}):[model[c].toCDObject()];return JSON.stringify(d)};this.createModelFrom=function(b,c){for(var d=new $3Dmol.GLModel(f.length,q),e=0;e<f.length;e++)if(f[e]){var n=f[e].selectedAtoms(b);d.addAtoms(n);c&&f[e].removeAtoms(n)}f.push(d);
return d};this.setStyle=function(b,c){"undefined"===typeof c&&(c=b,b={});e("setStyle",b,c,!1);return this};this.addStyle=function(b,c){"undefined"===typeof c&&(c=b,b={});e("setStyle",b,c,!0);return this};this.setClickable=function(b,c,d){e("setClickable",b,c,d);return this};this.setHoverable=function(b,c,d,f){e("setHoverable",b,c,d,f);return this};this.vibrate=function(b,c){e("vibrate",b,c);return this};this.setColorByProperty=function(b,c,d,f){e("setColorByProperty",b,c,d,f);return this};this.setColorByElement=
function(b,c){e("setColorByElement",b,c);return this};var ia=function(b,c){for(var d=[],f=0;f<b.length;f++){var e=b[f];"undefined"!=typeof e&&(e.x<c[0][0]||e.x>c[1][0]||e.y<c[0][1]||e.y>c[1][1]||e.z<c[0][2]||e.z>c[1][2]||d.push(e))}return d},Cb=function(b){return(b[1][0]-b[0][0])*(b[1][1]-b[0][1])*(b[1][2]-b[0][2])},vb=function(b,c,d){for(var f=[],e={},n=0,l=c.length;n<l;n++)e[c[n].index]=n;var m=function(b){for(var c=[],d=0,f=b.length;d<f;d++)b[d].index in e&&c.push(e[b[d].index]);return c},g=function(b){var c=
[];c[0]=[b[0][0],b[0][1],b[0][2]];c[1]=[b[1][0],b[1][1],b[1][2]];return c},h=function(b){if(64E3>Cb(b))return[b];var c=b[1][0]-b[0][0],d=b[1][1]-b[0][1],f=b[1][2]-b[0][2];d=c>d&&c>f?0:d>c&&d>f?1:2;f=g(b);c=g(b);b=(b[1][d]-b[0][d])/2+b[0][d];f[1][d]=b;c[0][d]=b;b=h(f);c=h(c);return b.concat(c)};b=h(b);n=0;for(l=b.length;n<l;n++){var x=g(b[n]);x[0][0]-=6;x[0][1]-=6;x[0][2]-=6;x[1][0]+=6;x[1][1]+=6;x[1][2]+=6;x=ia(c,x);var w=ia(d,b[n]);f.push({extent:b[n],atoms:m(x),toshow:m(w)})}return f},wb=function(b,
c,d){var f=new $3Dmol.Geometry(!0),e=f.updateGeoGroup(0),n=[];var l=0;for(h=b.length;l<h;l++){var m=b[l];m&&("undefined"!=typeof m.surfaceColor?n[l]=m.surfaceColor:m.color&&(n[l]=$3Dmol.CC.color(m.color)))}var g=e.vertexArray;m=c.vertices;var h;l=0;for(h=m.length;l<h;l++)b=3*e.vertices,g[b]=m[l].x,g[b+1]=m[l].y,g[b+2]=m[l].z,e.vertices++;g=e.colorArray;if(d.voldata&&d.volscheme){n=d.volscheme;var x=d.voldata;var w=n.range()||[-1,1];l=0;for(h=m.length;l<h;l++){b=x.getVal(m[l].x,m[l].y,m[l].z);var p=
$3Dmol.CC.color(n.valueToHex(b,w));b=3*l;g[b]=p.r;g[b+1]=p.g;g[b+2]=p.b}}else if(0<n.length)for(l=0,h=m.length;l<h;l++)x=m[l].atomid,b=3*l,g[b]=n[x].r,g[b+1]=n[x].g,g[b+2]=n[x].b;c=c.faces;e.faceidx=c.length;f.initTypedArrays();m=e.vertexArray;g=e.normalArray;l=0;for(h=c.length;l<h;l+=3){n=c[l+1];x=c[l+2];b=3*c[l];n*=3;x*=3;w=new $3Dmol.Vector3(m[b],m[b+1],m[b+2]);p=new $3Dmol.Vector3(m[n],m[n+1],m[n+2]);var y=new $3Dmol.Vector3(m[x],m[x+1],m[x+2]);y.subVectors(y,p);w.subVectors(w,p);y.cross(w);w=
y;w.normalize();g[b]+=w.x;g[n]+=w.x;g[x]+=w.x;g[b+1]+=w.y;g[n+1]+=w.y;g[x+1]+=w.y;g[b+2]+=w.z;g[n+2]+=w.z;g[x+2]+=w.z}e.faceArray=new Uint16Array(c);d=new $3Dmol.Mesh(f,d);d.doubleSided=!0;return d};this.addMesh=function(b){b={geo:b.geometry,mat:b.material,done:!0,finished:!1};var c=oa();x[c]=b;return c};var ob=function(b){var c=[];$.each(b,function(b,d){c[b]=$.extend({},d)});return c},ta={VDW:$3Dmol.SurfaceType.VDW,MS:$3Dmol.SurfaceType.MS,SAS:$3Dmol.SurfaceType.SAS,SES:$3Dmol.SurfaceType.SES};this.addSurface=
function(b,c,d,e,n,m){var g=oa();"string"==typeof b?void 0!==ta[b]?b=ta[b]:console.log("Surface type : "+b+" is not recognized"):void 0===b&&(b=$3Dmol.SurfaceType.VDW);var w=null,p=null;d=ob(h(d));w=e?ob(h(e)):d;var y=!1;for(e=0;e<f.length;e++)if(f[e]){var q=f[e].getSymmetries();if(1<q.length||1==q.length&&!q[0].isIdentity()){y=!0;break}}q=function(d,e,f){p=n?ob(h(n)):f;var m=$3Dmol.getExtent(f,!0);if(c.map&&c.map.prop){var x=c.map.prop;var w=c.map.scheme||c.map.gradient||new $3Dmol.Gradient.RWB;
var y=w.range();y||(y=$3Dmol.getPropertyRange(f,x));c.colorscheme={prop:x,gradient:w}}var q=0;for(x=e.length;q<x;q++)w=e[q],w.surfaceColor=$3Dmol.getColorFromStyle(w,c);var t=Cb(m),u=vb(m,e,f);if(p&&p.length&&0<p.length){var R=$3Dmol.getExtent(p,!0);u.sort(function(b,c){var d=function(b,c){var d=b.extent;b=d[1][0]-d[0][0]-c[2][0];var e=d[1][1]-d[0][1]-c[2][1];c=d[1][2]-d[0][2]-c[2][2];return b*b+e*e+c*c};b=d(b,R);c=d(c,R);return b-c})}var I=[];q=0;for(x=e.length;q<x;q++)w=e[q],I[q]={x:w.x,y:w.y,z:w.z,
serial:q,elem:w.elem};if($3Dmol.syncSurface){f=function(c){return new Promise(function(f,n){n=b;var m=u[c].extent,g=u[c].atoms;var h=u[c].toshow;var x=new $3Dmol.ProteinSurface;x.initparm(m,1===n?!1:!0,t);x.fillvoxels(I,g);x.buildboundary();if(n==$3Dmol.SurfaceType.SES||n==$3Dmol.SurfaceType.MS)x.fastdistancemap(),x.boundingatom(!1),x.fillvoxelswaals(I,g);x.marchingcube(n);h=x.getFacesAndVertices(h);n=$3Dmol.splitMesh({vertexArr:h.vertices,faceArr:h.faces});m=0;for(g=n.length;m<g;m++)h={vertices:n[m].vertexArr,
faces:n[m].faceArr},h=wb(e,h,A),$3Dmol.mergeGeos(d.geo,h);l.render();f()})};m=[];for(q=0;q<u.length;q++)m.push(f(q));return Promise.all(m).then(function(){d.done=!0;return Promise.resolve(g)})}var H=[];0>b&&(b=0);q=0;for(x=4;q<x;q++)f=new Worker($3Dmol.SurfaceWorker),H.push(f),f.postMessage({type:-1,atoms:I,volume:t});return new Promise(function(c,f){var n=0,m=function(b){b=$3Dmol.splitMesh({vertexArr:b.data.vertices,faceArr:b.data.faces});for(var f=0,m=b.length;f<m;f++){var h=wb(e,{vertices:b[f].vertexArr,
faces:b[f].faceArr},A);$3Dmol.mergeGeos(d.geo,h)}l.render();n++;n==u.length&&(d.done=!0,c(g))},h=function(b){console.log(b.message+" ("+b.filename+":"+b.lineno+")");f(b)};for(q=0;q<u.length;q++){var x=H[q%H.length];x.onmessage=m;x.onerror=h;x.postMessage({type:b,expandedExtent:u[q].extent,extendedAtoms:u[q].atoms,atomsToShow:u[q].toshow})}})};c=c||{};var A=t(c),u=[];e=null;if(y){y={};var R={};for(e=0;e<f.length;e++)y[e]=[],R[e]=[];for(e=0;e<w.length;e++)y[w[e].model].push(w[e]);for(e=0;e<d.length;e++)R[d[e].model].push(d[e]);
w=[];for(e=0;e<f.length;e++)0<R[e].length&&(u.push({geo:new $3Dmol.Geometry(!0),mat:A,done:!1,finished:!1,symmetries:f[e].getSymmetries()}),w.append(q(u[e],y[e],R[e])));e=Promise.all(w)}else u.push({geo:new $3Dmol.Geometry(!0),mat:A,done:!1,finished:!1,symmetries:[new $3Dmol.Matrix4]}),e=q(u[u.length-1],w,d);x[g]=u;e.surfid=g;return m&&"function"==typeof m?(e.then(function(b){m(b)}),g):e};this.setSurfaceMaterialStyle=function(b,c){if(x[b]){b=x[b];for(var d=0;d<b.length;d++){var e=b[d].mat=t(c);b[d].mat.side=
$3Dmol.FrontSide;if(c.color){b[d].mat.color=c.color;b[d].geo.colorsNeedUpdate=!0;var f=$3Dmol.CC.color(c.color);b[d].geo.setColors(function(){return f})}else if(e.voldata&&e.volscheme){var n=e.volscheme,l=e.voldata,m=n.range()||[-1,1];b[d].geo.setColors(function(b,c,d){b=l.getVal(b,c,d);return $3Dmol.CC.color(n.valueToHex(b,m))})}b[d].finished=!1}}return this};this.removeSurface=function(b){for(var c=x[b],d=0;d<c.length;d++)c[d]&&c[d].lastGL&&(void 0!==c[d].geo&&c[d].geo.dispose(),void 0!==c[d].mat&&
c[d].mat.dispose(),O.remove(c[d].lastGL));delete x[b];ea();return this};this.removeAllSurfaces=function(){for(var b in x)if(x.hasOwnProperty(b)){for(var c=x[b],d=0;d<c.length;d++)c[d]&&c[d].lastGL&&(void 0!==c[d].geo&&c[d].geo.dispose(),void 0!==c[d].mat&&c[d].mat.dispose(),O.remove(c[d].lastGL));delete x[b]}ea();return this};this.jmolMoveTo=function(){var b=O.position;b="center { "+-b.x+" "+-b.y+" "+-b.z+" }; ";var c=S.quaternion;return b+="moveto .5 quaternion { "+c.x+" "+c.y+" "+c.z+" "+c.w+" };"};
this.clear=function(){this.removeAllSurfaces();this.removeAllModels();this.removeAllLabels();this.removeAllShapes();ea();return this};this.mapAtomProperties=function(b,c){c=c||{};var e=h(c);if("function"==typeof b)for(var f=0,n=e.length;f<n;f++)c=e[f],b(c);else for(f=0,n=e.length;f<n;f++){c=e[f];for(var l=0,m=b.length;l<m;l++){var g=b[l];if(g.props)for(var x in g.props)if(g.props.hasOwnProperty(x)){a:{var w=c;var p=g;"undefined"===typeof p&&(p={});for(var y=d(p),q=0;q<y.length;q++)if(y[q].atomIsSelected(w,
p)){w=!0;break a}w=!1}w&&(c.properties||(c.properties={}),c.properties[x]=g.props[x])}}}return this};this.linkViewer=function(b){I.push(b);return this};try{"function"===typeof g&&g(this)}catch(ka){console.log("error with glviewer callback: "+ka)}this.getPerceivedDistance=function(){return 150-S.position.z};this.setPerceivedDistance=function(b){S.position.z=150-b};this.setAutoEyeSeparation=function(b){var c=this.getPerceivedDistance();Q.position.x=b||0<Q.position.x?c*Math.tan(Math.PI/180*5):-c*Math.tan(Math.PI/
180*5);Q.lookAt(new $3Dmol.Vector3(0,0,S.position.z));return Q.position.x}}}();$3Dmol.glmolViewer=$3Dmol.GLViewer;$3Dmol=$3Dmol||{};$3Dmol.Gradient=function(b,c){};$3Dmol.Gradient.valueToHex=function(b,c){};$3Dmol.Gradient.range=function(){};$3Dmol.Gradient.normalizeValue=function(b,c,d){if(c>=b)return d<b&&(d=b),d>c&&(d=c),{lo:b,hi:c,val:d};d>b&&(d=b);d<c&&(d=c);return{lo:c,hi:b,val:b-d+c}};
$3Dmol.Gradient.RWB=function(b,c,d){"undefined"==typeof c&&$.isArray(b)&&2<=b.length&&(c=b[1],b=b[0]);this.valueToHex=function(h,e){h*=1;if(e){var t=e[0];var g=e[1]}else t=b,g=c;if(void 0===h)return 16777215;h=$3Dmol.Gradient.normalizeValue(t,g,h);t=h.lo;g=h.hi;h=h.val;e=e&&"undefined"!=typeof e[2]?e[2]:"undefined"!=typeof d?d:(t+g)/2;if(h<=e)return t=Math.floor(255*Math.sqrt((h-t)/(e-t))),16711680+256*t+t;t=Math.floor(255*Math.sqrt(1-(h-e)/(g-e)));return 65536*t+256*t+255};this.range=function(){return"undefined"!=
typeof b&&"undefined"!=typeof c?[b,c]:null}};
$3Dmol.Gradient.ROYGB=function(b,c){"undefined"==typeof c&&$.isArray(b)&&2<=b.length&&(c=b[1],b=b[0]);this.valueToHex=function(d,h){d*=1;if(h){var e=h[0];h=h[1]}else e=b,h=c;if("undefined"==typeof d)return 16777215;d=$3Dmol.Gradient.normalizeValue(e,h,d);e=d.lo;h=d.hi;d=d.val;var t=(e+h)/2,g=(e+t)/2,q=(t+h)/2;if(d<g)return e=Math.floor(255*Math.sqrt((d-e)/(g-e))),256*e+16711680;if(d<t)return e=Math.floor(255*Math.sqrt(1-(d-g)/(t-g))),65536*e+65280;if(d<q)return e=Math.floor(255*Math.sqrt((d-t)/(q-
t))),65280+1*e;e=Math.floor(255*Math.sqrt(1-(d-q)/(h-q)));return 256*e+255};this.range=function(){return"undefined"!=typeof b&&"undefined"!=typeof c?[b,c]:null}};
$3Dmol.Gradient.Sinebow=function(b,c){var d=1;"undefined"==typeof c&&$.isArray(b)&&2<=b.length&&(c=b[1],b=b[0]);c<b&&(d=-1,b*=-1,c*=-1);this.valueToHex=function(h,e){h*=d;if(e){var t=e[0];e=e[1]}else t=b,e=c;if("undefined"==typeof h)return 16777215;h=$3Dmol.Gradient.normalizeValue(t,e,h);t=h.lo;e=h.hi;h=h.val;e=(h-t)/(e-t)*5/6+.5;t=Math.sin(Math.PI*e);h=Math.sin(Math.PI*(e+1/3));e=Math.sin(Math.PI*(e+2/3));return 65536*Math.floor(255*t*t)+256*Math.floor(255*e*e)+1*Math.floor(255*h*h)};this.range=
function(){return"undefined"!=typeof b&&"undefined"!=typeof c?[b,c]:null}};$3Dmol.Gradient.builtinGradients={rwb:$3Dmol.Gradient.RWB,roygb:$3Dmol.Gradient.ROYGB,sinebow:$3Dmol.Gradient.Sinebow};$3Dmol.LabelCount=0;$3Dmol.Label=function(b,c){this.id=$3Dmol.LabelCount++;this.stylespec=c||{};this.canvas=document.createElement("canvas");this.canvas.width=134;this.canvas.height=35;this.context=this.canvas.getContext("2d");this.sprite=new $3Dmol.Sprite;this.text=b};
$3Dmol.Label.prototype={constructor:$3Dmol.Label,getStyle:function(){return this.stylespec},setContext:function(){var b=function(b,d,h){"undefined"!=typeof b&&(h=b instanceof $3Dmol.Color?b.scaled():$3Dmol.CC.color(b).scaled());"undefined"!=typeof d&&(h.a=parseFloat(d));return h};return function(){var c=this.stylespec,d="undefined"==typeof c.useScreen?!1:c.useScreen,h=c.showBackground;if("0"===h||"false"===h)h=!1;"undefined"==typeof h&&(h=!0);var e=c.font?c.font:"sans-serif",t=parseInt(c.fontSize)?
parseInt(c.fontSize):18,g=b(c.fontColor,c.fontOpacity,{r:255,g:255,b:255,a:1}),q=c.padding?c.padding:4,p=c.borderThickness?c.borderThickness:0,u=b(c.backgroundColor,c.backgroundOpacity,{r:0,g:0,b:0,a:1}),m=b(c.borderColor,c.borderOpacity,u),l=c.position?c.position:{x:-10,y:1,z:1},n=void 0!==c.inFront?c.inFront:!0;if("false"===n||"0"===n)n=!1;var y=c.alignment||$3Dmol.SpriteAlignment.topLeft;"string"==typeof y&&y in $3Dmol.SpriteAlignment&&(y=$3Dmol.SpriteAlignment[y]);var f="";c.bold&&(f="bold ");
this.context.font=f+t+"px  "+e;var x=this.context.measureText(this.text).width;h||(p=0);var w=x+2.5*p+2*q,R=1.25*t+2*p+2*q;if(c.backgroundImage){var P=c.backgroundImage;var A=c.backgroundWidth?c.backgroundWidth:P.width;f=c.backgroundHeight?c.backgroundHeight:P.height;A>w&&(w=A);f>R&&(R=f)}this.canvas.width=w;this.canvas.height=R;this.context.clearRect(0,0,this.canvas.width,this.canvas.height);f="";c.bold&&(f="bold ");this.context.font=f+t+"px  "+e;this.context.fillStyle="rgba("+u.r+","+u.g+","+u.b+
","+u.a+")";this.context.strokeStyle="rgba("+m.r+","+m.g+","+m.b+","+m.a+")";this.context.lineWidth=p;h&&(h=this.context,u=e=p,w-=2*p,R-=2*p,m=0<p,h.beginPath(),h.moveTo(e+6,u),h.lineTo(e+w-6,u),h.quadraticCurveTo(e+w,u,e+w,u+6),h.lineTo(e+w,u+R-6),h.quadraticCurveTo(e+w,u+R,e+w-6,u+R),h.lineTo(e+6,u+R),h.quadraticCurveTo(e,u+R,e,u+R-6),h.lineTo(e,u+6),h.quadraticCurveTo(e,u,e+6,u),h.closePath(),h.fill(),m&&h.stroke());c.backgroundImage&&(P=c.backgroundImage,A=c.backgroundWidth?c.backgroundWidth:
P.width,f=c.backgroundHeight?c.backgroundHeight:P.height,this.context.drawImage(P,0,0,A,f));this.context.fillStyle="rgba("+g.r+","+g.g+","+g.b+","+g.a+")";this.context.fillText(this.text,p+q,t+p+q,x);c=new $3Dmol.Texture(this.canvas);c.needsUpdate=!0;this.sprite.material=new $3Dmol.SpriteMaterial({map:c,useScreenCoordinates:d,alignment:y,depthTest:!n});this.sprite.scale.set(1,1,1);this.sprite.position.set(l.x,l.y,l.z)}}(),dispose:function(){void 0!==this.sprite.material.map&&this.sprite.material.map.dispose();
void 0!==this.sprite.material&&this.sprite.material.dispose()}};$3Dmol=$3Dmol||{};
$3Dmol.MarchingCubeInitializer=function(){var b={march:function(b,g,q,p){var t=!!p.fulltable,m=p.hasOwnProperty("origin")&&p.origin.hasOwnProperty("x")?p.origin:{x:0,y:0,z:0},l=!!p.voxel,n=p.matrix,y=p.nX||0,f=p.nY||0,x=p.nZ||0,w=p.scale||1,R=null;R=p.unitCube?p.unitCube:{x:w,y:w,z:w};var P=new Int32Array(y*f*x);p=0;for(w=P.length;p<w;++p)P[p]=-1;w=function(b,c,d,e,h,w){var p={x:0,y:0,z:0},y=h;!(e&1<<h)&&e&1<<w&&(y=w);y&1&&d++;y&2&&c++;y&4&&b++;n?(p=new $3Dmol.Vector3(b,c,d),p=p.applyMatrix4(n),p=
{x:p.x,y:p.y,z:p.z}):(p.x=m.x+R.x*b,p.y=m.y+R.y*c,p.z=m.z+R.z*d);b=(f*b+c)*x+d;if(l)return g.push(p),g.length-1;0>P[b]&&(P[b]=g.length,g.push(p));return P[b]};var A=new Int32Array(12),T=t?h:c;t=t?e:d;for(p=0;p<y-1;++p)for(var G=0;G<f-1;++G)for(var C=0;C<x-1;++C){for(var z=0,D=0;8>D;++D)z|=!!(b[(f*(p+((D&4)>>2))+G+((D&2)>>1))*x+C+(D&1)]&2)<<D;if(0!==z&&255!==z){var I=T[z];if(0!==I)for(D=t[z],I&1&&(A[0]=w(p,G,C,z,0,1)),I&2&&(A[1]=w(p,G,C,z,1,3)),I&4&&(A[2]=w(p,G,C,z,3,2)),I&8&&(A[3]=w(p,G,C,z,2,0)),
I&16&&(A[4]=w(p,G,C,z,4,5)),I&32&&(A[5]=w(p,G,C,z,5,7)),I&64&&(A[6]=w(p,G,C,z,7,6)),I&128&&(A[7]=w(p,G,C,z,6,4)),I&256&&(A[8]=w(p,G,C,z,0,4)),I&512&&(A[9]=w(p,G,C,z,1,5)),I&1024&&(A[10]=w(p,G,C,z,3,7)),I&2048&&(A[11]=w(p,G,C,z,2,6)),z=0;z<D.length;z+=3){I=A[D[z]];var K=A[D[z+1]],H=A[D[z+2]];l&&3<=z&&(g.push(g[I]),I=g.length-1,g.push(g[K]),K=g.length-1,g.push(g[H]),H=g.length-1);q.push(I);q.push(K);q.push(H)}}}},laplacianSmooth:function(b,c,d){var e=Array(c.length),g,m;var l=0;for(g=c.length;l<g;l++)e[l]=
{x:0,y:0,z:0};var n=Array(20);for(l=0;20>l;l++)n[l]=Array(c.length);l=0;for(g=c.length;l<g;l++)n[0][l]=0;l=0;for(g=d.length/3;l<g;l++){var h=3*l,f=3*l+1,x=3*l+2;var w=!0;var q=0;for(m=n[0][d[h]];q<m;q++)if(d[f]==n[q+1][d[h]]){w=!1;break}w&&(n[0][d[h]]++,n[n[0][d[h]]][d[h]]=d[f]);w=!0;q=0;for(m=n[0][d[h]];q<m;q++)if(d[x]==n[q+1][d[h]]){w=!1;break}w&&(n[0][d[h]]++,n[n[0][d[h]]][d[h]]=d[x]);w=!0;q=0;for(m=n[0][d[f]];q<m;q++)if(d[h]==n[q+1][d[f]]){w=!1;break}w&&(n[0][d[f]]++,n[n[0][d[f]]][d[f]]=d[h]);
w=!0;q=0;for(m=n[0][d[f]];q<m;q++)if(d[x]==n[q+1][d[f]]){w=!1;break}w&&(n[0][d[f]]++,n[n[0][d[f]]][d[f]]=d[x]);w=!0;for(q=0;q<n[0][d[x]];q++)if(d[h]==n[q+1][d[x]]){w=!1;break}w&&(n[0][d[x]]++,n[n[0][d[x]]][d[x]]=d[h]);w=!0;q=0;for(m=n[0][d[x]];q<m;q++)if(d[f]==n[q+1][d[x]]){w=!1;break}w&&(n[0][d[x]]++,n[n[0][d[x]]][d[x]]=d[f])}for(d=0;d<b;d++){l=0;for(g=c.length;l<g;l++)if(3>n[0][l])e[l].x=c[l].x,e[l].y=c[l].y,e[l].z=c[l].z;else if(3==n[0][l]||4==n[0][l]){e[l].x=0;e[l].y=0;q=e[l].z=0;for(m=n[0][l];q<
m;q++)e[l].x+=c[n[q+1][l]].x,e[l].y+=c[n[q+1][l]].y,e[l].z+=c[n[q+1][l]].z;e[l].x+=.5*c[l].x;e[l].y+=.5*c[l].y;e[l].z+=.5*c[l].z;e[l].x/=.5+n[0][l];e[l].y/=.5+n[0][l];e[l].z/=.5+n[0][l]}else{e[l].x=0;e[l].y=0;q=e[l].z=0;for(m=n[0][l];q<m;q++)e[l].x+=c[n[q+1][l]].x,e[l].y+=c[n[q+1][l]].y,e[l].z+=c[n[q+1][l]].z;e[l].x+=1*c[l].x;e[l].y+=1*c[l].y;e[l].z+=1*c[l].z;e[l].x/=1+n[0][l];e[l].y/=1+n[0][l];e[l].z/=1+n[0][l]}l=0;for(g=c.length;l<g;l++)c[l].x=e[l].x,c[l].y=e[l].y,c[l].z=e[l].z}},edgeTable:[0,0,
0,0,0,0,0,2816,0,0,0,1792,0,3328,3584,3840,0,0,0,138,0,21,0,134,0,0,0,652,0,2067,3865,3600,0,0,0,42,0,0,0,294,0,0,21,28,0,3875,1049,3360,0,168,162,170,0,645,2475,2210,0,687,293,172,4010,3747,3497,3232,0,0,0,0,0,69,0,900,0,0,0,1792,138,131,1608,1920,0,81,0,2074,84,85,84,86,0,81,0,3676,330,1105,1881,1616,0,0,0,42,0,69,0,502,0,0,21,3580,138,2035,1273,1520,2816,104,2337,106,840,581,367,102,2816,3695,3429,3180,1898,1635,1385,1120,0,0,0,0,0,0,0,3910,0,0,69,588,42,2083,41,2880,0,0,0,1722,0,2293,4095,3830,
0,255,757,764,2538,2291,3065,2800,0,0,81,338,0,3925,1119,3414,84,855,85,340,2130,2899,89,2384,1792,712,194,1162,4036,3781,3535,3270,708,719,197,204,3018,2755,2505,2240,0,0,0,0,168,420,168,1958,162,162,676,2988,170,163,680,928,3328,3096,3328,3642,52,53,1855,1590,2340,2111,2869,2620,298,51,825,560,3584,3584,3090,3482,1668,1941,1183,1430,146,2975,2069,2460,154,915,153,400,3840,3592,3329,3082,1796,1541,1295,1030,2818,2575,2309,2060,778,515,265,0]},c=new Uint32Array(b.edgeTable),d=b.triTable=[[],[],[],
[],[],[],[],[11,9,8],[],[],[],[8,10,9],[],[10,8,11],[9,11,10],[8,10,9,8,11,10],[],[],[],[1,7,3],[],[4,2,0],[],[2,1,7],[],[],[],[2,7,3,2,9,7],[],[1,4,11,1,0,4],[3,8,0,11,9,4,11,10,9],[4,11,9,11,10,9],[],[],[],[5,3,1],[],[],[],[2,5,8,2,1,5],[],[],[2,4,0],[3,2,4],[],[0,9,1,8,10,5,8,11,10],[3,4,0,3,10,4],[5,8,10,8,11,10],[],[3,5,7],[7,1,5],[1,7,3,1,5,7],[],[9,2,0,9,7,2],[0,3,8,1,7,11,1,5,7],[11,1,7,1,5,7],[],[9,1,0,5,3,2,5,7,3],[8,2,5,8,0,2],[2,5,3,5,7,3],[3,9,1,3,8,9,7,11,10,7,10,5],[9,1,0,10,7,11,10,
5,7],[3,8,0,7,10,5,7,11,10],[11,5,7,11,10,5],[],[],[],[],[],[0,6,2],[],[7,2,9,7,9,8],[],[],[],[8,10,9],[7,1,3],[7,1,0],[6,9,3,6,10,9],[7,10,8,10,9,8],[],[6,0,4],[],[11,1,4,11,3,1],[2,4,6],[2,0,4,2,4,6],[2,4,6],[1,4,2,4,6,2],[],[6,0,4],[],[2,11,3,6,9,4,6,10,9],[8,6,1,8,1,3],[10,0,6,0,4,6],[8,0,3,9,6,10,9,4,6],[10,4,6,10,9,4],[],[],[],[5,3,1],[],[0,6,2],[],[7,4,8,5,2,1,5,6,2],[],[],[2,4,0],[7,4,8,2,11,3,10,5,6],[7,1,3],[5,6,10,0,9,1,8,7,4],[5,6,10,7,0,3,7,4,0],[10,5,6,4,8,7],[9,11,8],[3,5,6],[0,5,11,
0,11,8],[6,3,5,3,1,5],[3,9,6,3,8,9],[9,6,0,6,2,0],[0,3,8,2,5,6,2,1,5],[1,6,2,1,5,6],[9,11,8],[1,0,9,6,10,5,11,3,2],[6,10,5,2,8,0,2,11,8],[3,2,11,10,5,6],[10,5,6,9,3,8,9,1,3],[0,9,1,5,6,10],[8,0,3,10,5,6],[10,5,6],[],[],[],[],[],[],[],[1,10,2,9,11,6,9,8,11],[],[],[6,0,2],[3,6,9,3,2,6],[3,5,1],[0,5,1,0,11,5],[0,3,5],[6,9,11,9,8,11],[],[],[],[4,5,9,7,1,10,7,3,1],[],[11,6,7,2,4,5,2,0,4],[11,6,7,8,0,3,1,10,2,9,4,5],[6,7,11,1,10,2,9,4,5],[],[4,1,0,4,5,1,6,7,3,6,3,2],[9,4,5,0,6,7,0,2,6],[4,5,9,6,3,2,6,7,
3],[6,7,11,5,3,8,5,1,3],[6,7,11,4,1,0,4,5,1],[4,5,9,3,8,0,11,6,7],[9,4,5,7,11,6],[],[],[0,6,4],[8,6,4,8,1,6],[],[0,10,2,0,9,10,4,8,11,4,11,6],[10,2,1,6,0,3,6,4,0],[10,2,1,11,4,8,11,6,4],[4,2,6],[1,0,9,2,4,8,2,6,4],[2,4,0,2,6,4],[8,2,4,2,6,4],[11,4,1,11,6,4],[0,9,1,4,11,6,4,8,11],[3,6,0,6,4,0],[8,6,4,8,11,6],[10,8,9],[6,3,9,6,7,3],[6,7,1],[10,7,1,7,3,1],[7,11,6,8,10,2,8,9,10],[11,6,7,10,0,9,10,2,0],[2,1,10,7,11,6,8,0,3],[1,10,2,6,7,11],[7,2,6,7,9,2],[1,0,9,3,6,7,3,2,6],[7,0,6,0,2,6],[2,7,3,2,6,7],
[7,11,6,3,9,1,3,8,9],[9,1,0,11,6,7],[0,3,8,11,6,7],[11,6,7],[],[],[],[],[5,3,7],[8,5,2,8,7,5],[5,3,7],[1,10,2,5,8,7,5,9,8],[1,7,5],[1,7,5],[9,2,7,9,7,5],[11,3,2,8,5,9,8,7,5],[1,3,7,1,7,5],[0,7,1,7,5,1],[9,3,5,3,7,5],[9,7,5,9,8,7],[8,10,11],[3,4,10,3,10,11],[8,10,11],[5,9,4,1,11,3,1,10,11],[2,4,5],[5,2,4,2,0,4],[0,3,8,5,9,4,10,2,1],[2,1,10,9,4,5],[2,8,5,2,11,8],[3,2,11,1,4,5,1,0,4],[9,4,5,8,2,11,8,0,2],[11,3,2,9,4,5],[8,5,3,5,1,3],[5,0,4,5,1,0],[3,8,0,4,5,9],[9,4,5],[11,9,10],[11,9,10],[1,11,4,1,10,
11],[8,7,4,11,1,10,11,3,1],[2,7,9,2,9,10],[4,8,7,0,10,2,0,9,10],[2,1,10,0,7,4,0,3,7],[10,2,1,8,7,4],[1,7,4],[3,2,11,4,8,7,9,1,0],[11,4,2,4,0,2],[2,11,3,7,4,8],[4,1,7,1,3,7],[1,0,9,8,7,4],[3,4,0,3,7,4],[8,7,4],[8,9,10,8,10,11],[3,9,11,9,10,11],[0,10,8,10,11,8],[10,3,1,10,11,3],[2,8,10,8,9,10],[9,2,0,9,10,2],[8,0,3,1,10,2],[10,2,1],[1,11,9,11,8,9],[11,3,2,0,9,1],[11,0,2,11,8,0],[11,3,2],[8,1,3,8,9,1],[9,1,0],[8,0,3],[]],h=[0,265,515,778,2060,2309,2575,2822,1030,1295,1541,1804,3082,3331,3593,3840,400,
153,915,666,2460,2197,2975,2710,1430,1183,1941,1692,3482,3219,3993,3728,560,825,51,314,2620,2869,2111,2358,1590,1855,1077,1340,3642,3891,3129,3376,928,681,419,170,2988,2725,2479,2214,1958,1711,1445,1196,4010,3747,3497,3232,2240,2505,2755,3018,204,453,719,966,3270,3535,3781,4044,1226,1475,1737,1984,2384,2137,2899,2650,348,85,863,598,3414,3167,3925,3676,1370,1107,1881,1616,2800,3065,2291,2554,764,1013,255,502,3830,4095,3317,3580,1786,2035,1273,1520,2912,2665,2403,2154,876,613,367,102,3942,3695,3429,
3180,1898,1635,1385,1120,1120,1385,1635,1898,3180,3429,3695,3942,102,367,613,876,2154,2403,2665,2912,1520,1273,2035,1786,3580,3317,4095,3830,502,255,1013,764,2554,2291,3065,2800,1616,1881,1107,1370,3676,3925,3167,3414,598,863,85,348,2650,2899,2137,2384,1984,1737,1475,1226,4044,3781,3535,3270,966,719,453,204,3018,2755,2505,2240,3232,3497,3747,4010,1196,1445,1711,1958,2214,2479,2725,2988,170,419,681,928,3376,3129,3891,3642,1340,1077,1855,1590,2358,2111,2869,2620,314,51,825,560,3728,3993,3219,3482,1692,
1941,1183,1430,2710,2975,2197,2460,666,915,153,400,3840,3593,3331,3082,1804,1541,1295,1030,2822,2575,2309,2060,778,515,265,0],e=[[],[8,3,0],[9,0,1],[8,3,1,8,1,9],[11,2,3],[11,2,0,11,0,8],[11,2,3,0,1,9],[2,1,11,1,9,11,11,9,8],[10,1,2],[8,3,0,1,2,10],[9,0,2,9,2,10],[3,2,8,2,10,8,8,10,9],[10,1,3,10,3,11],[1,0,10,0,8,10,10,8,11],[0,3,9,3,11,9,9,11,10],[8,10,9,8,11,10],[8,4,7],[3,0,4,3,4,7],[1,9,0,8,4,7],[9,4,1,4,7,1,1,7,3],[2,3,11,7,8,4],[7,11,4,11,2,4,4,2,0],[3,11,2,4,7,8,9,0,1],[2,7,11,2,1,7,1,4,7,
1,9,4],[10,1,2,8,4,7],[2,10,1,0,4,7,0,7,3],[4,7,8,0,2,10,0,10,9],[2,7,3,2,9,7,7,9,4,2,10,9],[8,4,7,11,10,1,11,1,3],[11,4,7,1,4,11,1,11,10,1,0,4],[3,8,0,7,11,4,11,9,4,11,10,9],[7,11,4,4,11,9,11,10,9],[9,5,4],[3,0,8,4,9,5],[5,4,0,5,0,1],[4,8,5,8,3,5,5,3,1],[11,2,3,9,5,4],[9,5,4,8,11,2,8,2,0],[3,11,2,1,5,4,1,4,0],[8,5,4,2,5,8,2,8,11,2,1,5],[2,10,1,9,5,4],[0,8,3,5,4,9,10,1,2],[10,5,2,5,4,2,2,4,0],[3,4,8,3,2,4,2,5,4,2,10,5],[5,4,9,1,3,11,1,11,10],[0,9,1,4,8,5,8,10,5,8,11,10],[3,4,0,3,10,4,4,10,5,3,11,
10],[4,8,5,5,8,10,8,11,10],[9,5,7,9,7,8],[0,9,3,9,5,3,3,5,7],[8,0,7,0,1,7,7,1,5],[1,7,3,1,5,7],[11,2,3,8,9,5,8,5,7],[9,2,0,9,7,2,2,7,11,9,5,7],[0,3,8,2,1,11,1,7,11,1,5,7],[2,1,11,11,1,7,1,5,7],[1,2,10,5,7,8,5,8,9],[9,1,0,10,5,2,5,3,2,5,7,3],[5,2,10,8,2,5,8,5,7,8,0,2],[10,5,2,2,5,3,5,7,3],[3,9,1,3,8,9,7,11,10,7,10,5],[9,1,0,10,7,11,10,5,7],[3,8,0,7,10,5,7,11,10],[11,5,7,11,10,5],[11,7,6],[0,8,3,11,7,6],[9,0,1,11,7,6],[7,6,11,3,1,9,3,9,8],[2,3,7,2,7,6],[8,7,0,7,6,0,0,6,2],[1,9,0,3,7,6,3,6,2],[7,6,2,
7,2,9,2,1,9,7,9,8],[1,2,10,6,11,7],[2,10,1,7,6,11,8,3,0],[11,7,6,10,9,0,10,0,2],[7,6,11,3,2,8,8,2,10,8,10,9],[6,10,7,10,1,7,7,1,3],[6,10,1,6,1,7,7,1,0,7,0,8],[9,0,3,6,9,3,6,10,9,6,3,7],[6,10,7,7,10,8,10,9,8],[8,4,6,8,6,11],[11,3,6,3,0,6,6,0,4],[0,1,9,4,6,11,4,11,8],[1,9,4,11,1,4,11,3,1,11,4,6],[3,8,2,8,4,2,2,4,6],[2,0,4,2,4,6],[1,9,0,3,8,2,2,8,4,2,4,6],[9,4,1,1,4,2,4,6,2],[10,1,2,11,8,4,11,4,6],[10,1,2,11,3,6,6,3,0,6,0,4],[0,2,10,0,10,9,4,11,8,4,6,11],[2,11,3,6,9,4,6,10,9],[8,4,6,8,6,1,6,10,1,8,1,
3],[1,0,10,10,0,6,0,4,6],[8,0,3,9,6,10,9,4,6],[10,4,6,10,9,4],[9,5,4,7,6,11],[4,9,5,3,0,8,11,7,6],[6,11,7,4,0,1,4,1,5],[6,11,7,4,8,5,5,8,3,5,3,1],[4,9,5,6,2,3,6,3,7],[9,5,4,8,7,0,0,7,6,0,6,2],[4,0,1,4,1,5,6,3,7,6,2,3],[7,4,8,5,2,1,5,6,2],[6,11,7,1,2,10,9,5,4],[11,7,6,8,3,0,1,2,10,9,5,4],[11,7,6,10,5,2,2,5,4,2,4,0],[7,4,8,2,11,3,10,5,6],[4,9,5,6,10,7,7,10,1,7,1,3],[5,6,10,0,9,1,8,7,4],[5,6,10,7,0,3,7,4,0],[10,5,6,4,8,7],[5,6,9,6,11,9,9,11,8],[0,9,5,0,5,3,3,5,6,3,6,11],[0,1,5,0,5,11,5,6,11,0,11,8],
[11,3,6,6,3,5,3,1,5],[9,5,6,3,9,6,3,8,9,3,6,2],[5,6,9,9,6,0,6,2,0],[0,3,8,2,5,6,2,1,5],[1,6,2,1,5,6],[1,2,10,5,6,9,9,6,11,9,11,8],[1,0,9,6,10,5,11,3,2],[6,10,5,2,8,0,2,11,8],[3,2,11,10,5,6],[10,5,6,9,3,8,9,1,3],[0,9,1,5,6,10],[8,0,3,10,5,6],[10,5,6],[10,6,5],[8,3,0,10,6,5],[0,1,9,5,10,6],[10,6,5,9,8,3,9,3,1],[3,11,2,10,6,5],[6,5,10,2,0,8,2,8,11],[1,9,0,6,5,10,11,2,3],[1,10,2,5,9,6,9,11,6,9,8,11],[1,2,6,1,6,5],[0,8,3,2,6,5,2,5,1],[5,9,6,9,0,6,6,0,2],[9,6,5,3,6,9,3,9,8,3,2,6],[11,6,3,6,5,3,3,5,1],[0,
5,1,0,11,5,5,11,6,0,8,11],[0,5,9,0,3,5,3,6,5,3,11,6],[5,9,6,6,9,11,9,8,11],[10,6,5,4,7,8],[5,10,6,7,3,0,7,0,4],[5,10,6,0,1,9,8,4,7],[4,5,9,6,7,10,7,1,10,7,3,1],[7,8,4,2,3,11,10,6,5],[11,6,7,10,2,5,2,4,5,2,0,4],[11,6,7,8,0,3,1,10,2,9,4,5],[6,7,11,1,10,2,9,4,5],[7,8,4,5,1,2,5,2,6],[4,1,0,4,5,1,6,7,3,6,3,2],[9,4,5,8,0,7,0,6,7,0,2,6],[4,5,9,6,3,2,6,7,3],[6,7,11,4,5,8,5,3,8,5,1,3],[6,7,11,4,1,0,4,5,1],[4,5,9,3,8,0,11,6,7],[9,4,5,7,11,6],[10,6,4,10,4,9],[8,3,0,9,10,6,9,6,4],[1,10,0,10,6,0,0,6,4],[8,6,4,
8,1,6,6,1,10,8,3,1],[2,3,11,6,4,9,6,9,10],[0,10,2,0,9,10,4,8,11,4,11,6],[10,2,1,11,6,3,6,0,3,6,4,0],[10,2,1,11,4,8,11,6,4],[9,1,4,1,2,4,4,2,6],[1,0,9,3,2,8,2,4,8,2,6,4],[2,4,0,2,6,4],[3,2,8,8,2,4,2,6,4],[1,4,9,11,4,1,11,1,3,11,6,4],[0,9,1,4,11,6,4,8,11],[11,6,3,3,6,0,6,4,0],[8,6,4,8,11,6],[6,7,10,7,8,10,10,8,9],[9,3,0,6,3,9,6,9,10,6,7,3],[6,1,10,6,7,1,7,0,1,7,8,0],[6,7,10,10,7,1,7,3,1],[7,11,6,3,8,2,8,10,2,8,9,10],[11,6,7,10,0,9,10,2,0],[2,1,10,7,11,6,8,0,3],[1,10,2,6,7,11],[7,2,6,7,9,2,2,9,1,7,8,
9],[1,0,9,3,6,7,3,2,6],[8,0,7,7,0,6,0,2,6],[2,7,3,2,6,7],[7,11,6,3,9,1,3,8,9],[9,1,0,11,6,7],[0,3,8,11,6,7],[11,6,7],[11,7,5,11,5,10],[3,0,8,7,5,10,7,10,11],[9,0,1,10,11,7,10,7,5],[3,1,9,3,9,8,7,10,11,7,5,10],[10,2,5,2,3,5,5,3,7],[5,10,2,8,5,2,8,7,5,8,2,0],[9,0,1,10,2,5,5,2,3,5,3,7],[1,10,2,5,8,7,5,9,8],[2,11,1,11,7,1,1,7,5],[0,8,3,2,11,1,1,11,7,1,7,5],[9,0,2,9,2,7,2,11,7,9,7,5],[11,3,2,8,5,9,8,7,5],[1,3,7,1,7,5],[8,7,0,0,7,1,7,5,1],[0,3,9,9,3,5,3,7,5],[9,7,5,9,8,7],[4,5,8,5,10,8,8,10,11],[3,0,4,
3,4,10,4,5,10,3,10,11],[0,1,9,4,5,8,8,5,10,8,10,11],[5,9,4,1,11,3,1,10,11],[3,8,4,3,4,2,2,4,5,2,5,10],[10,2,5,5,2,4,2,0,4],[0,3,8,5,9,4,10,2,1],[2,1,10,9,4,5],[8,4,5,2,8,5,2,11,8,2,5,1],[3,2,11,1,4,5,1,0,4],[9,4,5,8,2,11,8,0,2],[11,3,2,9,4,5],[4,5,8,8,5,3,5,1,3],[5,0,4,5,1,0],[3,8,0,4,5,9],[9,4,5],[7,4,11,4,9,11,11,9,10],[3,0,8,7,4,11,11,4,9,11,9,10],[11,7,4,1,11,4,1,10,11,1,4,0],[8,7,4,11,1,10,11,3,1],[2,3,7,2,7,9,7,4,9,2,9,10],[4,8,7,0,10,2,0,9,10],[2,1,10,0,7,4,0,3,7],[10,2,1,8,7,4],[2,11,7,2,
7,1,1,7,4,1,4,9],[3,2,11,4,8,7,9,1,0],[7,4,11,11,4,2,4,0,2],[2,11,3,7,4,8],[9,1,4,4,1,7,1,3,7],[1,0,9,8,7,4],[3,4,0,3,7,4],[8,7,4],[8,9,10,8,10,11],[0,9,3,3,9,11,9,10,11],[1,10,0,0,10,8,10,11,8],[10,3,1,10,11,3],[3,8,2,2,8,10,8,9,10],[9,2,0,9,10,2],[8,0,3,1,10,2],[10,2,1],[2,11,1,1,11,9,11,8,9],[11,3,2,0,9,1],[11,0,2,11,8,0],[11,3,2],[8,1,3,8,9,1],[9,1,0],[8,0,3],[]];return b};$3Dmol.MarchingCube=$3Dmol.MarchingCubeInitializer();
$3Dmol.Parsers=function(){var b={},c=function(b){for(var c,d,e,f=0,m=b.length;f<m;f++)b[f].index||(b[f].index=f);m={};for(var h=0;h<b.length;h++)f=b[h],e=Math.floor(f.x/4.95),d=Math.floor(f.y/4.95),c=Math.floor(f.z/4.95),m[e]||(m[e]={}),m[e][d]||(m[e][d]={}),m[e][d][c]||(m[e][d][c]=[]),m[e][d][c].push(f);b=[{x:0,y:0,z:1},{x:0,y:1,z:-1},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:1,y:-1,z:-1},{x:1,y:-1,z:0},{x:1,y:-1,z:1},{x:1,y:0,z:-1},{x:1,y:0,z:0},{x:1,y:0,z:1},{x:1,y:1,z:-1},{x:1,y:1,z:0},{x:1,y:1,z:1}];for(e in m)for(d in e=
parseInt(e),m[e])for(c in d=parseInt(d),m[e][d]){c=parseInt(c);h=m[e][d][c];for(f=0;f<h.length;f++)for(var p=h[f],q=f+1;q<h.length;q++){var t=h[q];g(p,t)&&-1==p.bonds.indexOf(t.index)&&(p.bonds.push(t.index),p.bondOrder.push(1),t.bonds.push(p.index),t.bondOrder.push(1))}for(f=0;f<b.length;f++)if(q=b[f],m[e+q.x]&&m[e+q.x][d+q.y]&&m[e+q.x][d+q.y][c+q.z])for(p=h,q=m[e+q.x][d+q.y][c+q.z],t=0;t<p.length;t++)for(var u=p[t],G=0;G<q.length;G++){var C=q[G];if(g(u,C)){var z=u.bonds.indexOf(C.index),D=C.bonds.indexOf(u.index);
-1==z&&-1==D?(u.bonds.push(C.index),u.bondOrder.push(1),C.bonds.push(u.index),C.bondOrder.push(1)):-1==z?(u.bonds.push(C.index),u.bondOrder.push(C.bondOrder[D])):-1==D&&(C.bonds.push(u.index),C.bondOrder.push(u.bondOrder[z]))}}}},d=function(b){var d=[],e=[],m;var f=0;for(m=b.length;f<m;f++){var h=b[f];h.index=f;h.hetflag?e.push(h):d.push(h)}c(e);d.sort(function(b,c){return b.chain!=c.chain?b.chain<c.chain?-1:1:b.resi-c.resi});e=b=-1;f=0;for(m=d.length;f<m;f++){h=d[f];if(h.resi!==b){b=h.resi;w||e++;
var w=!1}h.reschain=e;for(var p=f+1;p<d.length;p++){var q=d[p];if(q.chain!=h.chain)break;if(1<q.resi-h.resi)break;g(h,q)&&(-1===h.bonds.indexOf(q.index)&&(h.bonds.push(q.index),h.bondOrder.push(1),q.bonds.push(h.index),q.bondOrder.push(1)),h.resi!==q.resi&&(w=!0))}}},h=function(b){var c=[],d;var e=0;for(d=b.length;e<d;e++){b[e].index=e;var f=b[e];f.hetflag||"N"!==f.atom&&"O"!==f.atom||(c.push(f),f.hbondOther=null,f.hbondDistanceSq=Number.POSITIVE_INFINITY)}c.sort(function(b,c){return b.z-c.z});e=
0;for(d=c.length;e<d;e++)for(f=c[e],b=e+1;b<d;b++){var m=c[b],h=m.z-f.z;if(3.2<h)break;if(m.atom!=f.atom){var g=Math.abs(m.y-f.y);if(!(3.2<g)){var p=Math.abs(m.x-f.x);3.2<p||(h=p*p+g*g+h*h,10.24<h||m.chain==f.chain&&4>Math.abs(m.resi-f.resi)||(h<f.hbondDistanceSq&&(f.hbondOther=m,f.hbondDistanceSq=h),h<m.hbondDistanceSq&&(m.hbondOther=f,m.hbondDistanceSq=h)))}}}},e=function(b){var c;h(b);var d={},e;var f=0;for(c=b.length;f<c;f++){var m=b[f];"undefined"===typeof d[m.chain]&&(d[m.chain]=[]);if(isFinite(m.hbondDistanceSq)){var g=
m.hbondOther;"undefined"===typeof d[g.chain]&&(d[g.chain]=[]);4===Math.abs(g.resi-m.resi)&&(d[m.chain][m.resi]="h")}}for(e in d)for(m=1;m<d[e].length-1;m++)c=d[e][m-1],f=d[e][m+1],g=d[e][m],"h"==c&&c==f&&g!=c&&(d[e][m]=c);f=0;for(c=b.length;f<c;f++)m=b[f],isFinite(m.hbondDistanceSq)&&"h"!=d[m.chain][m.resi]&&"h"!=m.ss&&(d[m.chain][m.resi]="maybesheet");f=0;for(c=b.length;f<c;f++)if(m=b[f],isFinite(m.hbondDistanceSq)&&"maybesheet"==d[m.chain][m.resi]){g=m.hbondOther;var p=d[g.chain][g.resi];if("maybesheet"==
p||"s"==p)d[m.chain][m.resi]="s",d[g.chain][g.resi]="s"}for(e in d){for(m=1;m<d[e].length-1;m++)c=d[e][m-1],f=d[e][m+1],g=d[e][m],"s"==c&&c==f&&g!=c&&(d[e][m]=c);for(m=0;m<d[e].length;m++)g=d[e][m],"h"!=g&&"s"!=g||d[e][m-1]==g||d[e][m+1]==g||delete d[e][m]}f=0;for(c=b.length;f<c;f++)m=b[f],g=d[m.chain][m.resi],"undefined"!=typeof g&&"maybesheet"!=g&&(m.ss=g,d[m.chain][m.resi-1]!=g&&(m.ssbegin=!0),d[m.chain][m.resi+1]!=g&&(m.ssend=!0))};b.vasp=b.VASP=function(b,c){c=[[]];var d=b.replace(/^\s+/,"").split(/[\n\r]/);
if(3>d.length)return c;if(d[1].match(/\d+/))b=parseFloat(d[1]);else return console.log("Warning: second line of the vasp structure file must be a number"),c;if(0>b)return console.log("Warning: Vasp implementation for negative lattice lengths is not yet available"),c;var e=new Float32Array(d[2].replace(/^\s+/,"").split(/\s+/));var f=new Float32Array(d[3].replace(/^\s+/,"").split(/\s+/));var m=new Float32Array(d[4].replace(/^\s+/,"").split(/\s+/));var l=new $3Dmol.Matrix4(e[0],e[1],e[2],0,f[0],f[1],
f[2],0,m[0],m[1],m[2],0,0,0,0,1);l.multiplyScalar(b);c.modelData=[{symmetries:[],cryst:{matrix:l}}];l=d[5].replace(/\s+/,"").replace(/\s+$/,"").split(/\s+/);var h=new Int16Array(d[6].replace(/^\s+/,"").split(/\s+/)),g=d[7].replace(/\s+/,"");if(g.match(/C/))g="cartesian";else if(g.match(/D/))g="direct";else return console.log("Warning: Unknown vasp mode in POSCAR file: mode must be either C(artesian) or D(irect)"),c;if(l.length!=h.length)return console.log("Warning: declaration of atomary species wrong:"),
console.log(l),console.log(h),c;d.splice(0,8);for(var p=0,q=0,t=l.length;q<t;q++){for(var u=l[q],z=0,D=h[q];z<D;z++){var I=new Float32Array(d[p+z].replace(/^\s+/,"").split(/\s+/)),K={};K.elem=u;"cartesian"==g?(K.x=b*I[0],K.y=b*I[1],K.z=b*I[2]):(K.x=b*(I[0]*e[0]+I[1]*f[0]+I[2]*m[0]),K.y=b*(I[0]*e[1]+I[1]*f[1]+I[2]*m[1]),K.z=b*(I[0]*e[2]+I[1]*f[2]+I[2]*m[2]));K.bonds=[];c[0].push(K)}p+=h[q]}return c};b.cube=b.CUBE=function(b,d){d=[[]];b=b.replace(/^\s+/,"").split(/\n\r|\r+/);if(6>b.length)return d;
var e=b[2].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),m=Math.abs(parseFloat(e[0]));e=b[3].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");e=0<parseFloat(e[0])?.529177:1;b=b.splice(6,m);m=d[d.length-1].length;for(var f=m+b.length,l=m;l<f;++l){var g={};g.serial=l;var h=b[l-m].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");6==h[0]?g.elem="C":1==h[0]?g.elem="H":8==h[0]?g.elem="O":17==h[0]&&(g.elem="Cl");g.x=parseFloat(h[2])*e;g.y=parseFloat(h[3])*e;g.z=parseFloat(h[4])*e;g.hetflag=!0;g.bonds=
[];g.bondOrder=[];g.properties={};d[d.length-1].push(g)}for(l=0;l<d.length;l++)c(d[l]);return d};b.xyz=b.XYZ=function(b,d){for(var e=[[]],l=b.split(/\r?\n|\r/);0<l.length&&!(3>l.length);){var f=parseInt(l[0]);if(isNaN(f)||0>=f)break;if(l.length<f+2)break;b=2;var m=e[e.length-1].length;for(f=m+f;m<f;m++){var g=l[b++].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),h={};h.serial=m;var p=g[0];h.atom=h.elem=p[0].toUpperCase()+p.substr(1).toLowerCase();h.x=parseFloat(g[1]);h.y=parseFloat(g[2]);h.z=parseFloat(g[3]);
h.hetflag=!0;h.bonds=[];h.bondOrder=[];h.properties={};e[e.length-1][m]=h;7<=g.length&&(h.dx=parseFloat(g[4]),h.dy=parseFloat(g[5]),h.dz=parseFloat(g[6]))}if(d.multimodel)e.push([]),l.splice(0,b);else break}for(m=0;m<e.length;m++)c(e[m]);if(d.onemol)for(d=e,e=[],e.push(d[0]),m=1;m<d.length;m++)for(b=e[0].length,l=0;l<d[m].length;l++){f=d[m][l];for(g=0;g<f.bonds.length;g++)f.bonds[g]+=b;f.index=e[0].length;f.serial=e[0].length;e[0].push(f)}return e};b.sdf=b.SDF=function(b,c){var d=[[]],e=!1;"undefined"!==
typeof c.keepH&&(e=!c.keepH);for(b=b.split(/\r?\n|\r/);0<b.length&&!(4>b.length);){var f=parseInt(b[3].substr(0,3));if(isNaN(f)||0>=f)break;var l=parseInt(b[3].substr(3,3)),m=4;if(b.length<4+f+l)break;var g=[],h=d[d.length-1].length,p=h+f;for(f=h;f<p;f++,m++){var q=b[m];var t={},u=q.substr(31,3).replace(/ /g,"");t.atom=t.elem=u[0].toUpperCase()+u.substr(1).toLowerCase();"H"==t.elem&&e||(t.serial=f,g[f]=d[d.length-1].length,t.x=parseFloat(q.substr(0,10)),t.y=parseFloat(q.substr(10,10)),t.z=parseFloat(q.substr(20,
10)),t.hetflag=!0,t.bonds=[],t.bondOrder=[],t.properties={},t.index=d[d.length-1].length,d[d.length-1].push(t))}for(f=0;f<l;f++,m++)q=b[m],p=g[parseInt(q.substr(0,3))-1+h],t=g[parseInt(q.substr(3,3))-1+h],q=parseInt(q.substr(6,3)),"undefined"!=typeof p&&"undefined"!=typeof t&&(d[d.length-1][p].bonds.push(t),d[d.length-1][p].bondOrder.push(q),d[d.length-1][t].bonds.push(p),d[d.length-1][t].bondOrder.push(q));if(c.multimodel){for(c.onemol||d.push([]);"$$$$"!=b[m];)m++;b.splice(0,++m)}else break}return d};
b.cdjson=b.json=function(b,c){var d=[[]];"string"===typeof b&&(b=JSON.parse(b));var e=b.m,f=e[0].a;b=e[0].b;var m=e[0].s,l=void 0!==c&&void 0!==c.parseStyle?c.parseStyle:void 0!==m;c=d[d.length-1].length;for(e=0;e<f.length;e++){var g=f[e],h={};h.id=g.i;h.x=g.x;h.y=g.y;h.z=g.z||0;h.bonds=[];h.bondOrder=[];var p=g.l||"C";h.elem=p[0].toUpperCase()+p.substr(1).toLowerCase();h.serial=d[d.length-1].length;l&&(h.style=m[g.s||0]);d[d.length-1].push(h)}for(e=0;e<b.length;e++)l=b[e],f=l.b+c,m=l.e+c,l=l.o||
1,g=d[d.length-1][f],h=d[d.length-1][m],g.bonds.push(m),g.bondOrder.push(l),h.bonds.push(f),h.bondOrder.push(l);return d};b.mcif=b.cif=function(b,d){function l(b,c){for(var d=[],e=0,f=0;f<b.length;){for(;b.substr(f,c.length)!==c&&f<b.length;){if("'"===b[f])for(f++;f<b.length&&"'"!==b[f];)f++;else if('"'===b[f])for(f++;f<b.length&&'"'!==b[f];)f++;f++}d.push(b.substr(e,f-e));e=f+=c.length}return d}var m=[],f=!d.doAssembly;d=!d.duplicateAssemblyAtoms;var g=m.modelData=[],h=b.split(/\r?\n|\r/);b=[];for(var p=
!1,t=0;t<h.length;t++){var u=h[t].split("#")[0];p?";"===u[0]&&(p=!1):";"===u[0]&&(p=!0);if(p||""!==u){if(!p&&(u=u.trim(),"_"===u[0])){var T=u.split(/\s/)[0].indexOf(".");-1<T&&(u[T]="_",u=u.substr(0,T)+"_"+u.substr(T+1))}b.push(u)}}for(t=0;t<b.length;){h=function(b){var c=b.match("-");b=b.replace(/[-xyz]/g,"");b=b.split("/");var d=void 0===b[1]?1:parseInt(b[1]);return(""===b[0]?1:parseInt(b[0]))/d*(c?-1:1)};for(T=function(b,c,d){return{x:M[0][0]*b+M[0][1]*c+M[0][2]*d,y:M[1][0]*b+M[1][1]*c+M[1][2]*
d,z:M[2][0]*b+M[2][1]*c+M[2][2]*d}};!b[t].startsWith("data_")||"data_global"===b[t];)t++;t++;for(p={};t<b.length&&!b[t].startsWith("data_");)if(void 0===b[t][0])t++;else if("_"===b[t][0]){var G=b[t].split(/\s/)[0].toLowerCase();u=p[G]=p[G]||[];var C=b[t].substr(b[t].indexOf(G)+G.length);if(""===C)if(t++,";"===b[t][0]){C=b[t].substr(1);for(t++;";"!==b[t];)C=C+"\n"+b[t],t++;u.push(C)}else u.push(b[t]);else u.push(C.trim());t++}else if("loop_"===b[t].substr(0,5)){t++;for(C=[];""===b[t]||"_"===b[t][0];)""!==
b[t]&&(G=b[t].split(/\s/)[0].toLowerCase(),u=p[G]=p[G]||[],C.push(u)),t++;for(G=0;t<b.length&&"_"!==b[t][0]&&!b[t].startsWith("loop_")&&!b[t].startsWith("data_");){u=l(b[t]," ");for(var z=0;z<u.length;z++)""!==u[z]&&(C[G].push(u[z]),G=(G+1)%C.length);t++}}else t++;g.push({symmetries:[]});m.push([]);C=void 0!==p._atom_site_id?p._atom_site_id.length:p._atom_site_label.length;if(void 0!==p._cell_length_a){u=parseFloat(p._cell_length_a);G=parseFloat(p._cell_length_b);z=parseFloat(p._cell_length_c);var D=
parseFloat(p._cell_angle_alpha)||90,I=parseFloat(p._cell_angle_beta)||90,K=parseFloat(p._cell_angle_gamma)||90,H=K*Math.PI/180,N=Math.cos(D*Math.PI/180),E=Math.cos(I*Math.PI/180),L=Math.cos(H);H=Math.sin(H);var M=[[u,G*L,z*E],[0,G*H,z*(N-E*L)/H],[0,0,z*Math.sqrt(1-N*N-E*E-L*L+2*N*E*L)/H]];g[g.length-1].cryst={a:u,b:G,c:z,alpha:D,beta:I,gamma:K}}for(u=0;u<C;u++)if(void 0===p._atom_site_group_pdb||"TER"!==p._atom_site_group_pdb[u])G={},void 0!==p._atom_site_cartn_x?(G.x=parseFloat(p._atom_site_cartn_x[u]),
G.y=parseFloat(p._atom_site_cartn_y[u]),G.z=parseFloat(p._atom_site_cartn_z[u])):(z=T(parseFloat(p._atom_site_fract_x[u]),parseFloat(p._atom_site_fract_y[u]),parseFloat(p._atom_site_fract_z[u])),G.x=z.x,G.y=z.y,G.z=z.z),G.chain=p._atom_site_auth_asym_id?p._atom_site_auth_asym_id[u]:void 0,G.resi=p._atom_site_auth_seq_id?parseInt(p._atom_site_auth_seq_id[u]):void 0,G.resn=p._atom_site_auth_comp_id?p._atom_site_auth_comp_id[u].trim():void 0,G.atom=p._atom_site_auth_atom_id?p._atom_site_auth_atom_id[u].replace(/"/gm,
""):void 0,G.hetflag=!p._atom_site_group_pdb||"HETA"===p._atom_site_group_pdb[u]||"HETATM"===p._atom_site_group_pdb[u],z=p._atom_site_type_symbol[u],G.elem=z[0].toUpperCase()+z.substr(1).toLowerCase(),G.bonds=[],G.ss="c",G.serial=u,G.bondOrder=[],G.properties={},m[m.length-1].push(G);if(void 0!==p._pdbx_struct_oper_list_id&&!f){for(u=0;u<p._pdbx_struct_oper_list_id.length;u++){T=parseFloat(p["_pdbx_struct_oper_list_matrix[1][1]"][u]);C=parseFloat(p["_pdbx_struct_oper_list_matrix[1][2]"][u]);G=parseFloat(p["_pdbx_struct_oper_list_matrix[1][3]"][u]);
z=parseFloat(p["_pdbx_struct_oper_list_vector[1]"][u]);D=parseFloat(p["_pdbx_struct_oper_list_matrix[2][1]"][u]);I=parseFloat(p["_pdbx_struct_oper_list_matrix[2][2]"][u]);K=parseFloat(p["_pdbx_struct_oper_list_matrix[2][3]"][u]);N=parseFloat(p["_pdbx_struct_oper_list_vector[2]"][u]);E=parseFloat(p["_pdbx_struct_oper_list_matrix[3][1]"][u]);L=parseFloat(p["_pdbx_struct_oper_list_matrix[3][2]"][u]);H=parseFloat(p["_pdbx_struct_oper_list_matrix[3][3]"][u]);var F=parseFloat(p["_pdbx_struct_oper_list_vector[3]"][u]);
T=new $3Dmol.Matrix4(T,C,G,z,D,I,K,N,E,L,H,F);g[g.length-1].symmetries.push(T)}for(u=0;u<m.length;u++)q(g[g.length-1].symmetries,d,m[u])}if(void 0!==p._symmetry_equiv_pos_as_xyz)for(u=0;u<p._symmetry_equiv_pos_as_xyz.length;u++){C=p._symmetry_equiv_pos_as_xyz[u].replace(/["' ]/g,"").split(",").map(function(b){return b.replace(/-/g,"+-")});T=new $3Dmol.Matrix4(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);for(G=0;3>G;G++)for(z=C[G].split("+"),D=0;D<z.length;D++)I=z[D],""!==I&&(K=h(I),I.match("x")?T.elements[G+
0]=K:I.match("y")?T.elements[G+4]=K:I.match("z")?T.elements[G+8]=K:T.elements[G+12]=K);C=new $3Dmol.Matrix4(M[0][0],M[0][1],M[0][2],0,M[1][0],M[1][1],M[1][2],0,M[2][0],M[2][1],M[2][2],0);G=(new $3Dmol.Matrix4).getInverse(C,!0);T=(new $3Dmol.Matrix4).multiplyMatrices(T,G);T=(new $3Dmol.Matrix4).multiplyMatrices(C,T);g[g.length-1].symmetries.push(T)}}for(u=0;u<m.length;u++)c(m[u]),e(m[u]),q(g[u].symmetries,d,m[u]);return m};b.mol2=b.MOL2=function(b,c){var d=[[]],e=!1;"undefined"!==typeof c.keepH&&(e=
!c.keepH);var f=b.search(/@<TRIPOS>MOLECULE/),l=b.search(/@<TRIPOS>ATOM/);if(-1==f||-1==l)return d;for(b=b.substr(f,b.length).split(/\r?\n|\r/);0<b.length;){f=[];var g=b[2].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),h=parseInt(g[0]);l=0;1<g.length&&(l=parseInt(g[1]));var m=4,p;for(p=3;p<b.length;p++)if("@<TRIPOS>ATOM"==b[p]){m=p+1;break}p=d[d.length-1].length;for(h=p+h;p<h;p++){g=b[m++];g=g.replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var q={},t=g[5].split(".")[0];q.atom=q.elem=t[0].toUpperCase()+
t.substr(1).toLowerCase();if("H"!=q.elem||!e){t=d[d.length-1].length;var u=parseInt(g[0]);q.serial=u;q.x=parseFloat(g[2]);q.y=parseFloat(g[3]);q.z=parseFloat(g[4]);q.atom=g[5];g=parseFloat(g[8]);q.index=t;q.bonds=[];q.bondOrder=[];q.properties={charge:g,partialCharge:g};f[u]=t;d[d.length-1].push(q)}}for(p=!1;m<b.length;)if("@<TRIPOS>BOND"==b[m++]){p=!0;break}if(p&&l)for(p=0;p<l;p++)g=b[m++],g=g.replace(/^\s+/,"").replace(/\s+/g," ").split(" "),h=parseInt(g[1]),q=d[d.length-1][f[h]],t=parseInt(g[2]),
u=d[d.length-1][f[t]],g=parseInt(g[3]),isNaN(g)&&(g=1),void 0!==q&&void 0!==u&&(q.bonds.push(f[t]),q.bondOrder.push(g),u.bonds.push(f[h]),u.bondOrder.push(g));if(c.multimodel)c.onemol||d.push([]),b.splice(0,m),b.join("\n");else break}return d};var t={H:.37,He:.32,Li:1.34,Be:.9,B:.82,C:.77,N:.75,O:.73,F:.71,Ne:.69,Na:1.54,Mg:1.3,Al:1.18,Si:1.11,P:1.06,S:1.02,Cl:.99,Ar:.97,K:1.96,Ca:1.74,Sc:1.44,Ti:1.56,V:1.25,Mn:1.39,Fe:1.25,Co:1.26,Ni:1.21,Cu:1.38,Zn:1.31,Ga:1.26,Ge:1.22,Se:1.16,Br:1.14,Kr:1.1,Rb:2.11,
Sr:1.92,Y:1.62,Zr:1.48,Nb:1.37,Mo:1.45,Tc:1.56,Ru:1.26,Rh:1.35,Pd:1.31,Ag:1.53,Cd:1.48,In:1.44,Sn:1.41,Sb:1.38,Te:1.35,I:1.33,Xe:1.3,Cs:2.25,Ba:1.98,Lu:1.6,Hf:1.5,Ta:1.38,W:1.46,Re:1.59,Os:1.44,Ir:1.37,Pt:1.28,Au:1.44,Hg:1.49,Tl:1.48,Pb:1.47,Bi:1.46,Rn:1.45},g=function(b,c){var d=(t[b.elem]||1.6)+(t[c.elem]||1.6);d+=.25;d*=d;var e=b.x-c.x;e*=e;if(e>d)return!1;var f=b.y-c.y;f*=f;if(f>d)return!1;var g=b.z-c.z;g*=g;if(g>d)return!1;e=e+f+g;return isNaN(e)?!1:.5>e?!1:e>d?!1:b.altLoc!=c.altLoc&&" "!=b.altLoc&&
" "!=c.altLoc?!1:!0},q=function(b,c,d){var e=d.length,f=e,g,h;if(!c)for(c=0;c<b.length;c++){if(!b[c].isIdentity()){var l=new $3Dmol.Vector3;for(h=0;h<e;h++){var m=[];for(g=0;g<d[h].bonds.length;g++)m.push(d[h].bonds[g]+f);l.set(d[h].x,d[h].y,d[h].z);l.applyMatrix4(b[c]);g={};for(var n in d[h])g[n]=d[h][n];g.x=l.x;g.y=l.y;g.z=l.z;g.bonds=m;d.push(g)}f=d.length}}else if(1<b.length)for(c=0;c<d.length;c++){e=[];for(g=0;g<b.length;g++)b[g].isIdentity()||(f=new $3Dmol.Vector3,f.set(d[c].x,d[c].y,d[c].z),
f.applyMatrix4(b[g]),e.push(f));d[c].symmetries=e}},p=function(b,c){b=b.replace(/ /g,"");0<b.length&&"H"==b[0]&&"Hg"!=b&&(b="H");1<b.length&&(b=b[0].toUpperCase()+b.substr(1).toLowerCase(),"undefined"===typeof t[b]?b=b[0]:c&&("Ca"==b?b="C":"Cd"==b&&(b="C")));return b};b.pdb=b.PDB=b.pdbqt=b.PDBQT=function(b,c){var g=[],h={};g.modelData=[];for(var f=b.split(/\r?\n|\r/);0<f.length;){var l,m=f;b=h;f=[];var u=!c.keepH,P=!!c.noSecondaryStructure,A=!c.noComputeSecondaryStructure,T=!c.doAssembly,G=!c.duplicateAssemblyAtoms,
C=c.altLoc?c.altLoc:"A",z={symmetries:[]},D=[],I=[],K={};for(l=0;l<m.length;l++){var H=m[l].replace(/^\s*/,"");var N=H.substr(0,6);if(0==N.indexOf("END")){D=m.slice(l+1);if("END"==N)for(var E in b)b.hasOwnProperty(E)&&delete b[E];break}else if("ATOM  "==N||"HETATM"==N){var L=H.substr(16,1);if(" "==L||L==C||"*"==C){var M=parseInt(H.substr(6,5));var F=H.substr(12,4).replace(/ /g,"");var J=H.substr(17,3).replace(/ /g,"");var Q=H.substr(21,1);var W=parseInt(H.substr(22,4));var V=H.substr(26,1);var U=
parseFloat(H.substr(30,8));var ca=parseFloat(H.substr(38,8));var S=parseFloat(H.substr(46,8));var O=parseFloat(H.substr(60,8));var Z=H.substr(76,2).replace(/ /g,"");Z=""===Z||"undefined"===typeof t[Z]?p(H.substr(12,2),"A"==H[0]):Z[0].toUpperCase()+Z.substr(1).toLowerCase();"H"==Z&&u||(N="H"==N[0]?!0:!1,I[M]=f.length,f.push({resn:J,x:U,y:ca,z:S,elem:Z,hetflag:N,altLoc:L,chain:Q,resi:W,icode:V,rescode:W+(" "!=V?"^"+V:""),serial:M,atom:F,bonds:[],ss:"c",bondOrder:[],properties:{},b:O,pdbline:H}))}}else if("SHEET "==
N){O=H.substr(21,1);F=parseInt(H.substr(22,4));H.substr(32,1);H=parseInt(H.substr(33,4));O in b||(b[O]={});b[O][F]="s1";for(F+=1;F<H;F++)b[O][F]="s";b[O][H]="s2"}else if("CONECT"==N)for(O=parseInt(H.substr(6,5)),F=I[O],M=f[F],J=[11,16,21,26],O=0;4>O;O++){if(Q=parseInt(H.substr(J[O],5)),Q=I[Q],W=f[Q],void 0!==M&&void 0!==W)if(K[[F,Q]])for(K[[F,Q]]+=1,W=0;W<M.bonds.length;W++)M.bonds[W]==Q&&(V=K[[F,Q]],M.bondOrder[W]=4<=V?1:V);else if(K[[F,Q]]=1,0==M.bonds.length||M.bonds[M.bonds.length-1]!=Q)M.bonds.push(Q),
M.bondOrder.push(1)}else if("HELIX "==N){O=H.substr(19,1);F=parseInt(H.substr(21,4));H.substr(31,1);H=parseInt(H.substr(33,4));O in b||(b[O]={});b[O][F]="h1";for(F+=1;F<H;F++)b[O][F]="h";b[O][H]="h2"}else if(T||"REMARK"!=N||"BIOMT"!=H.substr(13,5))"CRYST1"==N?(F=parseFloat(H.substr(7,8)),O=parseFloat(H.substr(16,8)),M=parseFloat(H.substr(25,8)),J=parseFloat(H.substr(34,6)),Q=parseFloat(H.substr(41,6)),H=parseFloat(H.substr(48,6)),z.cryst={a:F,b:O,c:M,alpha:J,beta:Q,gamma:H}):"ANISOU"==N&&(M=parseInt(H.substr(6,
5)),O=f[I[M]])&&(H=H.substr(30).trim().split(/\s+/),H={u11:parseInt(H[0]),u22:parseInt(H[1]),u33:parseInt(H[2]),u12:parseInt(H[3]),u13:parseInt(H[4]),u23:parseInt(H[5])},O.uMat=H);else{F=new $3Dmol.Matrix4;for(O=1;3>=O;O++)if(H=m[l].replace(/^\s*/,""),parseInt(H.substr(18,1))==O)F.elements[O-1]=parseFloat(H.substr(23,10)),F.elements[O-1+4]=parseFloat(H.substr(33,10)),F.elements[O-1+8]=parseFloat(H.substr(43,10)),F.elements[O-1+12]=parseFloat(H.substr(53)),l++;else for(;"BIOMT"==H.substr(13,5);)l++,
H=m[l].replace(/^\s*/,"");F.elements[3]=0;F.elements[7]=0;F.elements[11]=0;F.elements[15]=1;z.symmetries.push(F);l--}}(new Date).getTime();l=f;m=0;for(u=l.length;m<u;m++)for(C=l[m],K=0;K<C.bonds.length;K++)H=l[C.bonds[K]],O=I[C.serial],H&&O&&0>H.bonds.indexOf(O)&&(H.bonds.push(O),H.bondOrder.push(C.bondOrder[K]));d(f);T||q(z.symmetries,G,f);A&&!P&&((new Date).getTime(),e(f));(new Date).getTime();a:{P=void 0;A=b;for(P in A){P=!1;break a}P=!0}if(!P)for(l=0;l<f.length;l++)F=f[l],void 0!==F&&F.chain in
b&&F.resi in b[F.chain]&&(P=b[F.chain][F.resi],F.ss=P[0],1<P.length&&("1"==P[1]?F.ssbegin=!0:"2"==P[1]&&(F.ssend=!0)));f=[f,z,D];b=f[0];z=f[1];f=f[2];if(0!=b.length){if(c.multimodel&&c.onemol&&0<g.length)for(z=g[0].length,D=0;D<b.length;D++){P=b[D];P.index=D;for(A=0;A<P.bonds.length;A++)P.bonds[A]+=z;g[0].push(P)}else g.modelData.push(z),g.push(b);if(!c.multimodel)break}}return g};b.pqr=b.PQR=function(b,c){var g=[[]],h=!c.noSecondaryStructure;g.modelData=[{symmetries:[]}];var f=[];b=b.split(/\r?\n|\r/);
var l;for(l=0;l<b.length;l++){var m=b[l].replace(/^\s*/,"");var p=m.substr(0,6);if(0==p.indexOf("END"))if(c.multimodel)c.onemol||g.push([]);else break;else if("ATOM  "==p||"HETATM"==p){var q=parseInt(m.substr(6,5));p=m.substr(12,4).replace(/ /g,"");var t=m.substr(17,3),u=m.substr(21,1),G=parseInt(m.substr(22,4));var C=m.substr(30).trim().split(/\s+/);var z=parseFloat(C[0]),D=parseFloat(C[1]),I=parseFloat(C[2]),K=parseFloat(C[3]),H=parseFloat(C[4]),N=p[0];1<p.length&&p[1].toUpperCase()!=p[1]&&(N=p.substr(0,
2));C="H"==m[0]?!0:!1;f[q]=g[g.length-1].length;g[g.length-1].push({resn:t,x:z,y:D,z:I,elem:N,hetflag:C,chain:u,resi:G,serial:q,atom:p,bonds:[],ss:"c",bondOrder:[],properties:{charge:K,partialCharge:K,radius:H},pdbline:m})}else if("CONECT"==p)for(p=parseInt(m.substr(6,5)),q=g[g.length-1][f[p]],p=0;4>p;p++)t=parseInt(m.substr([11,16,21,26][p],5)),u=g[g.length-1][f[t]],void 0!==q&&void 0!==u&&(q.bonds.push(f[t]),q.bondOrder.push(1))}for(l=0;l<g.length;l++)d(g[l]),h&&e(g[l]);return g};var u=function(b){return 0==
b||2==b||4==b?"h":3==b?"s":"c"};b.mmtf=b.MMTF=function(b,c){var d=!c.keepH,g=c.altLoc?c.altLoc:"A",f=!!c.noSecondaryStructure,h=!c.noComputeSecondaryStructure,l=!c.doAssembly,m=!c.duplicateAssemblyAtoms,p=c.assemblyIndex?c.assemblyIndex:0;"string"==typeof b&&(b=$3Dmol.base64ToArray(b));b=MMTF.decode(b);var t=[[]],T=t.modelData=[],G=0,C=0,z=0,D=0,I=b.secStructList,K=b.insCodeList,H=b.bFactorList,N=b.altLocList,E=b.occupancyList,L=b.bondAtomList,M=b.bondOrderList,F=b.numModels;if(0==F)return t;c.multimodel||
(F=1);var J,Q=[];if(!l&&b.bioAssemblyList&&0<b.bioAssemblyList.length){var W=b.bioAssemblyList[p].transformList;p=0;for(J=W.length;p<J;p++){var V=new $3Dmol.Matrix4(W[p].matrix);V.transpose();Q.push(V)}}V=null;b.unitCell&&(p=b.unitCell,V={a:p[0],b:p[1],c:p[2],alpha:p[3],beta:p[4],gamma:p[5]});var U=0;for(W=0;W<F;W++){var ca=b.chainsPerModel[W],S=t[t.length-1],O=[];T.push({symmetries:Q,cryst:V});for(p=0;p<ca;++p){var Z=b.groupsPerChain[C],aa=String.fromCharCode.apply(null,b.chainIdList.subarray(4*
C,4*C+4)).replace(/\0/g,"");b.chainNameList&&(aa=String.fromCharCode.apply(null,b.chainNameList.subarray(4*C,4*C+4)).replace(/\0/g,""));var B=z,Y="";for(J=0;J<Z;++J){var X=b.groupList[b.groupTypeList[z]];var da=X.atomNameList.length;var ma=0;var qa=!1;var ha=!1;if(I){ma=I[z];var ja=u(ma);if(0==z||ja!=Y)qa=!0;Y=ja;var jb=z+1;if(jb>=I.length||u(I[jb]!=ja))ha=!0}b.insCodeList&&String.fromCharCode(K[z]);var xa=b.groupIdList[z];var Ha=X.groupName;jb=D;for(ja=0;ja<da;++ja){var Ia=X.elementList[ja];if(!d||
"H"!=Ia){var oa="";H&&(oa=H[D]);var Ja="";N&&N[D]&&(Ja=String.fromCharCode(N[D]));var ea="";E&&(ea=E[D]);if(""==Ja||Ja==g||"*"==g){var Va=b.atomIdList[D],kb=X.atomNameList[ja],Qa=0;X.atomChargeList&&(Qa=X.atomChargeList[ja]);var Ba=b.xCoordList[D],qb=b.yCoordList[D],lb=b.zCoordList[D];O[D]=S.length;S.push({resn:Ha,x:Ba,y:qb,z:lb,elem:Ia,hetflag:0>ma,chain:aa,resi:xa,icode:Ja,rescode:xa+(" "!=Ja?"^"+Ja:""),serial:Va,altLoc:Ja,index:D,atom:kb,bonds:[],ss:u(ma),ssbegin:qa,ssend:ha,bondOrder:[],properties:{charge:Qa,
occupancy:ea},b:oa})}}D+=1}qa=X.bondAtomList;ja=0;for(ma=X.bondOrderList.length;ja<ma;++ja)ha=jb+qa[2*ja],xa=jb+qa[2*ja+1],da=X.bondOrderList[ja],ha=O[ha],Ia=O[xa],Ha=S[ha],xa=S[Ia],Ha&&xa&&(Ha.bonds.push(Ia),Ha.bondOrder.push(da),xa.bonds.push(ha),xa.bondOrder.push(da));z+=1}z=B;for(J=0;J<Z;++J)z+=1;C+=1}if(L)for(ja=U,ma=L.length;ja<ma;ja+=2){ha=L[ja];xa=L[ja+1];da=M?M[ja/2]:1;if(ha>=D){U=ja;break}ha=O[ha];Ia=O[xa];Ha=S[ha];xa=S[Ia];Ha&&xa&&(Ha.bonds.push(Ia),Ha.bondOrder.push(da),xa.bonds.push(ha),
xa.bondOrder.push(da))}c.multimodel&&(c.onemol||t.push([]));if(!l)for(J=0;J<t.length;J++)q(T[G].symmetries,m,t[J]);G+=1}h&&!f&&e(t);return t};b.prmtop=b.PRMTOP=function(b,c){function d(b){var c=h.indexOf(l.filter(function(c){return c.includes(b)})[0]);if(Number.isInteger(c)&&0<c){for(;!h[c].includes("FORMAT");)c++;return c}return-1}function e(b){var c=h[b].match(/\((\d*)\S*/),d=h[b].match(/[a-zA-Z](\d*)\)\s*/);null==d&&(d=h[b].match(/[a-zA-Z](\d*)\.\d*\)\s*/));return[c[1],d[1]]}var f;c=[];var g=0,
h=b.split(/\r?\n|\r/);if(0<h.length&&h[0].includes("VERSION")){var l=h.filter(function(b){return b.includes("POINTERS")||b.includes("ATOM_NAME")||b.includes("CHARGE")||b.includes("RADII")||b.includes("BONDS_INC_HYDROGEN")||b.includes("BONDS_WITHOUT_HYDROGEN")});b=d("POINTERS");if(-1==b)return[];var m=e(b),p=parseInt(h[b+1].slice(0,m[1]));if(isNaN(p)||0>=p)return[];b=d("ATOM_NAME");if(-1==b)return[];m=e(b);for(var q=m[0],t=0;t<p/m[0];t++){t==parseInt(p/m[0])&&(q=p%m[0]);for(var u=0;u<q;u++){var z=
{};z.serial=g;z.x=0;z.y=0;z.z=0;z.atom=h[b+1].slice(m[1]*u,m[1]*(u+1));z.elem=h[b+1].slice(m[1]*u,m[1]*u+1);z.properties={charge:"",radii:""};z.bonds=[];z.bondOrder=[];c.push(z);g++}b++}b=d("CHARGE");if(-1!=b)for(m=e(b),g=0,q=m[0],t=0;t<p/m[0];t++){t==parseInt(p/m[0])&&(q=p%m[0]);for(u=0;u<q;u++)c[g].properties.charge=parseFloat(h[b+1].slice(m[1]*u,m[1]*(u+1))),g++;b++}b=d("RADII");if(-1!=b)for(m=e(b),g=0,q=m[0],t=0;t<p/m[0];t++){t==parseInt(p/m[0])&&(q=p%m[0]);for(u=0;u<q;u++)c[g].properties.radii=
parseFloat(h[b+1].slice(m[1]*u,m[1]*(u+1))),g++;b++}b=d("BONDS_WITHOUT_HYDROGEN");if(-1!=b)for(m=e(b),g=0,q=m[0],b+=1;!h[b].match(/^%FLAG/);){h[b+1].match(/^%FLAG/)&&(q=p%m[0]);for(u=0;u<q;u++)0==g%3&&(f=parseInt(h[b].slice(m[1]*u,m[1]*(u+1))/3)),1==g%3&&c[f].bonds.push(parseInt(h[b].slice(m[1]*u,m[1]*(u+1))/3)),g++;b++}b=d("BONDS_INC_HYDROGEN");if(-1!=b)for(m=e(b),g=0,q=m[0],b+=1;!h[b].match(/^%FLAG/);){h[b+1].match(/^%FLAG/)&&(q=p%m[0]);for(u=0;u<q;u++)0==g%3&&(f=parseInt(h[b].slice(m[1]*u,m[1]*
(u+1))/3)),1==g%3&&c[f].bonds.push(parseInt(h[b].slice(m[1]*u,m[1]*(u+1))/3)),g++;b++}}else return[];return[c]};b.gro=b.GRO=function(b,c){c=[];for(b=b.split(/\r?\n|\r/);0<b.length&&!(3>b.length);){var e=parseInt(b[1]);if(isNaN(e)||0>=e)break;if(b.length<e+3)break;var g=[];c.push(g);var f=2,h=g.length;for(e=h+e;h<e;h++){var l=b[f++],m={};m.serial=h;m.atom=l.slice(10,15).trim();m.elem=p(m.atom,!0);m.x=10*parseFloat(l.slice(20,28));m.y=10*parseFloat(l.slice(28,36));m.z=10*parseFloat(l.slice(36,44));
m.resi=parseInt(l.slice(0,5));m.resn=l.slice(5,10).trim();m.bonds=[];m.bondOrder=[];m.properties={};44<l.length&&(m.dx=10*parseFloat(l.slice(44,52)),m.dy=10*parseFloat(l.slice(52,60)),m.dz=10*parseFloat(l.slice(60,68)));g[h]=m}if(b.length<=f+3&&(g=b[f++].trim().split(/\s+/),3==g.length)){for(e=0;3>e;e++)g[e]=10*parseFloat(g[e]);c.box=g}b.splice(0,++f)}for(h=0;h<c.length;h++)d(c[h]);return c};b.lammpstrj=b.LAMMPSTRJ=function(b,d){var e=[],g={id:"serial",type:"atom",element:"elem",q:"charge",radius:"radius",
x:"x",xu:"x",xs:"x",xsu:"x",y:"y",yu:"y",ys:"y",ysu:"y",z:"z",zu:"z",zs:"z",zsu:"z"};b=b.split(/\r?\n|\r/);for(var f=0,h=0,l=0;l<b.length-9;){for(;l<b.length;l++)if(b[l].match(/ITEM: NUMBER OF ATOMS/)&&(h=parseInt(b[l+1])),b[l].match(/ITEM: ATOMS/)){f=l+1;break}var m=b[f-1].replace("ITEM: ATOMS ","").split(" ");e.push([]);for(l=f;l<f+h;l++){for(var p={},q={},t=b[l].split(" "),u=0;u<t.length;u++){var C=g[m[u]];void 0!=C&&("serial"==C?p[C]=parseInt(t[u]):"x"==C||"y"==C||"z"===C?p[C]=parseFloat(t[u]):
"charge"==C||"radius"==C?q[C]=parseFloat(t[u]):p[C]=t[u]);p.properties=q;p.bonds=[];p.bondOrder=[]}e[e.length-1][l-f]=p}l=f+h-1}if(d.assignbonds)for(d=0;d<e.length;d++)c(e[d]);return e};return b}();$3Dmol=$3Dmol||{};
$3Dmol.partialCharges={"ALA:N":-.15,"ALA:CA":.1,"ALA:CB":0,"ALA:C":.6,"ALA:O":-.55,"ARG:N":-.15,"ARG:CA":.1,"ARG:CB":0,"ARG:CG":0,"ARG:CD":.1,"ARG:NE":-.1,"ARG:CZ":.5,"ARG:NH1":.25,"ARG:NH2":.25,"ARG:C":.6,"ARG:O":-.55,"ASN:N":-.15,"ASN:CA":.1,"ASN:CB":0,"ASN:CG":.55,"ASN:OD1":-.55,"ASN:ND2":0,"ASN:C":.6,"ASN:O":-.55,"ASP:N":-.15,"ASP:CA":.1,"ASP:CB":0,"ASP:CG":.14,"ASP:OD1":-.57,"ASP:OD2":-.57,"ASP:C":.6,"ASP:O":-.55,"CYS:N":-.15,"CYS:CA":.1,"CYS:CB":.19,"CYS:SG":-.19,"CYS:C":.6,"CYS:O":-.55,"GLN:N":-.15,
"GLN:CA":.1,"GLN:CB":0,"GLN:CG":0,"GLN:CD":.55,"GLN:OE1":-.55,"GLN:NE2":0,"GLN:C":.6,"GLN:O":-.55,"GLU:N":-.15,"GLU:CA":.1,"GLU:CB":0,"GLU:CG":0,"GLU:CD":.14,"GLU:OE1":-.57,"GLU:OE2":-.57,"GLU:C":.6,"GLU:O":-.55,"GLY:N":-.15,"GLY:CA":.1,"GLY:C":.6,"GLY:O":-.55,"HIS:N":-.15,"HIS:CA":.1,"HIS:CB":0,"HIS:CG":.1,"HIS:ND1":-.1,"HIS:CD2":.1,"HIS:NE2":-.4,"HIS:CE1":.3,"HIS:C":.6,"HIS:O":-.55,"ILE:N":-.15,"ILE:CA":.1,"ILE:CB":0,"ILE:CG2":0,"ILE:CG1":0,"ILE:CD":0,"ILE:C":.6,"ILE:O":-.55,"LEU:N":-.15,"LEU:CA":.1,
"LEU:CB":0,"LEU:CG":0,"LEU:CD1":0,"LEU:CD2":0,"LEU:C":.6,"LEU:O":-.55,"LYS:N":-.15,"LYS:CA":.1,"LYS:CB":0,"LYS:CG":0,"LYS:CD":0,"LYS:CE":.25,"LYS:NZ":.75,"LYS:C":.6,"LYS:O":-.55,"MET:N":-.15,"MET:CA":.1,"MET:CB":0,"MET:CG":.06,"MET:SD":-.12,"MET:CE":.06,"MET:C":.6,"MET:O":-.55,"PHE:N":-.15,"PHE:CA":.1,"PHE:CB":0,"PHE:CG":0,"PHE:CD1":0,"PHE:CD2":0,"PHE:CE1":0,"PHE:CE2":0,"PHE:CZ":0,"PHE:C":.6,"PHE:O":-.55,"PRO:N":-.25,"PRO:CD":.1,"PRO:CA":.1,"PRO:CB":0,"PRO:CG":0,"PRO:C":.6,"PRO:O":-.55,"SER:N":-.15,
"SER:CA":.1,"SER:CB":.25,"SER:OG":-.25,"SER:C":.6,"SER:O":-.55,"THR:N":-.15,"THR:CA":.1,"THR:CB":.25,"THR:OG1":-.25,"THR:CG2":0,"THR:C":.6,"THR:O":-.55,"TRP:N":-.15,"TRP:CA":.1,"TRP:CB":0,"TRP:CG":-.03,"TRP:CD2":.1,"TRP:CE2":-.04,"TRP:CE3":-.03,"TRP:CD1":.06,"TRP:NE1":-.06,"TRP:CZ2":0,"TRP:CZ3":0,"TRP:CH2":0,"TRP:C":.6,"TRP:O":-.55,"TYR:N":-.15,"TYR:CA":.1,"TYR:CB":0,"TYR:CG":0,"TYR:CD1":0,"TYR:CE1":0,"TYR:CD2":0,"TYR:CE2":0,"TYR:CZ":.25,"TYR:OH":-.25,"TYR:C":.6,"TYR:O":-.55,"VAL:N":-.15,"VAL:CA":.1,
"VAL:CB":0,"VAL:CG1":0,"VAL:CG2":0,"VAL:C":.6,"VAL:O":-.55};$3Dmol.applyPartialCharges=function(b,c){c&&"undefined"!==typeof b.partialCharge||b.resn&&b.atom&&(b.properties.partialCharge=$3Dmol.partialCharges[b.resn+":"+b.atom])};"undefined"===typeof console&&(console={log:function(){}});
$3Dmol.ProteinSurface=function(){var b=0,c=0,d=0,h=2,e=0,t=0,g=0,q=0,p=null,u=null,m=null,l=0,n=0,y=0,f=0,x=0,w=0,R={H:1.2,Li:1.82,Na:2.27,K:2.75,C:1.7,N:1.55,O:1.52,F:1.47,P:1.8,S:1.8,CL:1.75,BR:1.85,SE:1.9,ZN:1.39,CU:1.4,NI:1.63,X:2},P=function(b){return b.elem&&"undefined"!=typeof R[b.elem]?b.elem:"X"},A={},T={},G,C,z=[new Int32Array([1,0,0]),new Int32Array([-1,0,0]),new Int32Array([0,1,0]),new Int32Array([0,-1,0]),new Int32Array([0,0,1]),new Int32Array([0,0,-1]),new Int32Array([1,1,0]),new Int32Array([1,
-1,0]),new Int32Array([-1,1,0]),new Int32Array([-1,-1,0]),new Int32Array([1,0,1]),new Int32Array([1,0,-1]),new Int32Array([-1,0,1]),new Int32Array([-1,0,-1]),new Int32Array([0,1,1]),new Int32Array([0,1,-1]),new Int32Array([0,-1,1]),new Int32Array([0,-1,-1]),new Int32Array([1,1,1]),new Int32Array([1,1,-1]),new Int32Array([1,-1,1]),new Int32Array([-1,1,1]),new Int32Array([1,-1,-1]),new Int32Array([-1,-1,1]),new Int32Array([-1,1,-1]),new Int32Array([-1,-1,-1])];this.getFacesAndVertices=function(e){var f=
{},g;var l=0;for(g=e.length;l<g;l++)f[e[l]]=!0;e=C;l=0;for(g=e.length;l<g;l++)e[l].x=e[l].x/h-b,e[l].y=e[l].y/h-c,e[l].z=e[l].z/h-d;var n=[];l=0;for(g=G.length;l<g;l+=3){var q=G[l],t=G[l+1],w=G[l+2],x=e[t].atomid,y=e[w].atomid,z=e[q].atomid;x<z&&(z=x);y<z&&(z=y);f[z]&&q!==t&&t!==w&&q!==w&&(n.push(q),n.push(t),n.push(w))}m=u=p=null;return{vertices:e,faces:n}};this.initparm=function(z,A,H){1E6<H&&(h=1);H=1/h*5.5;l=z[0][0];f=z[1][0];n=z[0][1];x=z[1][1];y=z[0][2];w=z[1][2];A?(l-=1.4+H,n-=1.4+H,y-=1.4+
H,f+=1.4+H,x+=1.4+H,w+=1.4+H):(l-=H,n-=H,y-=H,f+=H,x+=H,w+=H);l=Math.floor(l*h)/h;n=Math.floor(n*h)/h;y=Math.floor(y*h)/h;f=Math.ceil(f*h)/h;x=Math.ceil(x*h)/h;w=Math.ceil(w*h)/h;b=-l;c=-n;d=-y;g=Math.ceil(h*(f-l))+1;t=Math.ceil(h*(x-n))+1;e=Math.ceil(h*(w-y))+1;this.boundingatom(A);q=1.4*h;p=new Uint8Array(g*t*e);u=new Float64Array(g*t*e);m=new Int32Array(g*t*e)};this.boundingatom=function(b){var c=[];flagradius=b;for(var d in R)if(R.hasOwnProperty(d)){var e=R[d];c[d]=b?(e+1.4)*h+.5:e*h+.5;e=c[d]*
c[d];T[d]=Math.floor(c[d])+1;A[d]=new Int32Array(T[d]*T[d]);for(j=indx=0;j<T[d];j++)for(k=0;k<T[d];k++){var f=j*j+k*k;f>e?A[d][indx]=-1:(f=Math.sqrt(e-f),A[d][indx]=Math.floor(f));indx++}}};this.fillvoxels=function(b,c){var d;var e=0;for(d=p.length;e<d;e++)p[e]=0,u[e]=-1,m[e]=-1;for(e in c)d=b[c[e]],void 0!==d&&this.fillAtom(d,b);e=0;for(d=p.length;e<d;e++)p[e]&1&&(p[e]|=2)};this.fillAtom=function(f,l){var n,q,u,w,x,y;var z=Math.floor(.5+h*(f.x+b));var I=Math.floor(.5+h*(f.y+c));var C=Math.floor(.5+
h*(f.z+d));var K=P(f),D=0,G=t*e;var S=0;for(y=T[K];S<y;S++)for(n=0;n<y;n++){if(-1!=A[K][D])for(u=-1;2>u;u++)for(w=-1;2>w;w++)for(x=-1;2>x;x++)if(0!==u&&0!==w&&0!==x){var O=u*S;var R=x*n;for(q=0;q<=A[K][D];q++){var aa=q*w;var B=z+O;var Y=I+aa;var X=C+R;if(!(0>B||0>Y||0>X||B>=g||Y>=t||X>=e))if(X=B*G+Y*e+X,p[X]&1){var da=l[m[X]];da.serial!=f.serial&&(B=z+O-Math.floor(.5+h*(da.x+b)),Y=I+aa-Math.floor(.5+h*(da.y+c)),da=C+R-Math.floor(.5+h*(da.z+d)),O*O+aa*aa+R*R<B*B+Y*Y+da*da&&(m[X]=f.serial))}else p[X]|=
1,m[X]=f.serial}}D++}};this.fillvoxelswaals=function(b,c){var d;var e=0;for(d=p.length;e<d;e++)p[e]&=-3;for(e in c)d=b[c[e]],void 0!==d&&this.fillAtomWaals(d,b)};this.fillAtomWaals=function(f,l){var n=0,q,u,w,x,y,z;var I=Math.floor(.5+h*(f.x+b));var C=Math.floor(.5+h*(f.y+c));var D=Math.floor(.5+h*(f.z+d));var K=P(f),G=t*e;var S=0;for(z=T[K];S<z;S++)for(q=0;q<z;q++){if(-1!=A[K][n])for(w=-1;2>w;w++)for(x=-1;2>x;x++)for(y=-1;2>y;y++)if(0!==w&&0!==x&&0!==y){var O=w*S;var R=y*q;for(u=0;u<=A[K][n];u++){var aa=
u*x;var B=I+O;var Y=C+aa;var X=D+R;if(!(0>B||0>Y||0>X||B>=g||Y>=t||X>=e))if(X=B*G+Y*e+X,p[X]&2){var da=l[m[X]];da.serial!=f.serial&&(B=I+O-Math.floor(.5+h*(da.x+b)),Y=C+aa-Math.floor(.5+h*(da.y+c)),da=D+R-Math.floor(.5+h*(da.z+d)),O*O+aa*aa+R*R<B*B+Y*Y+da*da&&(m[X]=f.serial))}else p[X]|=2,m[X]=f.serial}}n++}};this.buildboundary=function(){var b=t*e;for(i=0;i<g;i++)for(j=0;j<e;j++)for(k=0;k<t;k++){var c=i*b+k*e+j;if(p[c]&1)for(var d=0;26>d;){var f=i+z[d][0],h=j+z[d][2],l=k+z[d][1];if(-1<f&&f<g&&-1<
l&&l<t&&-1<h&&h<e&&!(p[f*b+l*e+h]&1)){p[c]|=4;break}else d++}}};var D=function(b,c,d){var e=new Int32Array(b*c*d*3);this.set=function(b,f,g,h){b=3*((b*c+f)*d+g);e[b]=h.ix;e[b+1]=h.iy;e[b+2]=h.iz};this.get=function(b,f,g){b=3*((b*c+f)*d+g);return{ix:e[b],iy:e[b+1],iz:e[b+2]}}};this.fastdistancemap=function(){var b,c,d,f=new D(g,t,e),l=t*e,m=q*q,n=[];for(b=0;b<g;b++)for(c=0;c<t;c++)for(d=0;d<e;d++){var w=b*l+c*e+d;p[w]&=-3;if(p[w]&1&&p[w]&4){var x={ix:b,iy:c,iz:d};f.set(b,c,d,x);n.push(x);u[w]=0;p[w]|=
2;p[w]&=-5}}do for(d=this.fastoneshell(n,f),n=[],b=0,c=d.length;b<c;b++)w=l*d[b].ix+e*d[b].iy+d[b].iz,p[w]&=-5,u[w]<=1.0404*m&&n.push({ix:d[b].ix,iy:d[b].iy,iz:d[b].iz});while(0!==n.length);b=h-.5;0>b&&(b=0);m-=.5/(.1+b);for(b=0;b<g;b++)for(c=0;c<t;c++)for(d=0;d<e;d++)w=b*l+c*e+d,p[w]&=-5,p[w]&1&&(!(p[w]&2)||p[w]&2&&u[w]>=m)&&(p[w]|=4)};this.fastoneshell=function(b,c){var d,f,h=[];if(0===b.length)return h;tnv={ix:-1,iy:-1,iz:-1};var l=t*e;var m=0;for(f=b.length;m<f;m++){var n=b[m].ix;var q=b[m].iy;
var w=b[m].iz;var x=c.get(n,q,w);for(d=0;6>d;d++)if(tnv.ix=n+z[d][0],tnv.iy=q+z[d][1],tnv.iz=w+z[d][2],tnv.ix<g&&-1<tnv.ix&&tnv.iy<t&&-1<tnv.iy&&tnv.iz<e&&-1<tnv.iz){var y=tnv.ix*l+e*tnv.iy+tnv.iz;if(p[y]&1&&!(p[y]&2)){c.set(tnv.ix,tnv.iy,w+z[d][2],x);var A=tnv.ix-x.ix;var C=tnv.iy-x.iy;var D=tnv.iz-x.iz;A=A*A+C*C+D*D;u[y]=A;p[y]|=2;p[y]|=4;h.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})}else p[y]&1&&p[y]&2&&(A=tnv.ix-x.ix,C=tnv.iy-x.iy,D=tnv.iz-x.iz,A=A*A+C*C+D*D,A<u[y]&&(c.set(tnv.ix,tnv.iy,tnv.iz,x),u[y]=
A,p[y]&4||(p[y]|=4,h.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz}))))}}m=0;for(f=b.length;m<f;m++)for(n=b[m].ix,q=b[m].iy,w=b[m].iz,x=c.get(n,q,w),d=6;18>d;d++)tnv.ix=n+z[d][0],tnv.iy=q+z[d][1],tnv.iz=w+z[d][2],tnv.ix<g&&-1<tnv.ix&&tnv.iy<t&&-1<tnv.iy&&tnv.iz<e&&-1<tnv.iz&&(y=tnv.ix*l+e*tnv.iy+tnv.iz,p[y]&1&&!(p[y]&2)?(c.set(tnv.ix,tnv.iy,w+z[d][2],x),A=tnv.ix-x.ix,C=tnv.iy-x.iy,D=tnv.iz-x.iz,A=A*A+C*C+D*D,u[y]=A,p[y]|=2,p[y]|=4,h.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})):p[y]&1&&p[y]&2&&(A=tnv.ix-x.ix,C=tnv.iy-
x.iy,D=tnv.iz-x.iz,A=A*A+C*C+D*D,A<u[y]&&(c.set(tnv.ix,tnv.iy,tnv.iz,x),u[y]=A,p[y]&4||(p[y]|=4,h.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})))));m=0;for(f=b.length;m<f;m++)for(n=b[m].ix,q=b[m].iy,w=b[m].iz,x=c.get(n,q,w),d=18;26>d;d++)tnv.ix=n+z[d][0],tnv.iy=q+z[d][1],tnv.iz=w+z[d][2],tnv.ix<g&&-1<tnv.ix&&tnv.iy<t&&-1<tnv.iy&&tnv.iz<e&&-1<tnv.iz&&(y=tnv.ix*l+e*tnv.iy+tnv.iz,p[y]&1&&!(p[y]&2)?(c.set(tnv.ix,tnv.iy,w+z[d][2],x),A=tnv.ix-x.ix,C=tnv.iy-x.iy,D=tnv.iz-x.iz,A=A*A+C*C+D*D,u[y]=A,p[y]|=2,p[y]|=
4,h.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})):p[y]&1&&p[y]&2&&(A=tnv.ix-x.ix,C=tnv.iy-x.iy,D=tnv.iz-x.iz,A=A*A+C*C+D*D,A<u[y]&&(c.set(tnv.ix,tnv.iy,tnv.iz,x),u[y]=A,p[y]&4||(p[y]|=4,h.push({ix:tnv.ix,iy:tnv.iy,iz:tnv.iz})))));return h};this.marchingcubeinit=function(b){for(var c=0,d=p.length;c<d;c++)1==b?p[c]&=-5:4==b?(p[c]&=-3,p[c]&4&&(p[c]|=2),p[c]&=-5):2==b?p[c]&4&&p[c]&2?p[c]&=-5:p[c]&4&&!(p[c]&2)&&(p[c]|=2):3==b&&(p[c]&=-5)};this.marchingcube=function(b){this.marchingcubeinit(b);C=[];G=[];$3Dmol.MarchingCube.march(p,
C,G,{smooth:1,nX:g,nY:t,nZ:e});b=t*e;for(var c=0,d=C.length;c<d;c++)C[c].atomid=m[C[c].x*b+e*C[c].y+C[c].z];$3Dmol.MarchingCube.laplacianSmooth(1,C,G)}};(function(){});
$3Dmol.VolumeData=function(b,c,d){this.unit={x:1,y:1,z:1};this.origin={x:0,y:0,z:0};this.size={x:0,y:0,z:0};this.data=new Float32Array([]);this.matrix=null;c=c.toLowerCase();if(/\.gz$/.test(c)){c=c.replace(/\.gz$/,"");try{b=this[c]&&this[c].isbinary?pako.inflate(b):(new TextDecoder("utf-8")).decode(pako.inflate(b))}catch(t){console.log(t)}}if(this[c])this[c](b);if(d){if(d.negate)for(b=0,c=this.data.length;b<c;b++)this.data[b]=-this.data[b];if(d.normalize){var h=0;b=0;for(c=this.data.length;b<c;b++)h+=
this.data[b];d=h/this.data.length;console.log("computed mean: "+d);b=h=0;for(c=this.data.length;b<c;b++){var e=this.data[b]-d;h+=e*e}h/=this.data.length;b=0;for(c=this.data.length;b<c;b++)this.data[b]=(this.data[b]-d)/h}}};
$3Dmol.VolumeData.prototype.getVal=function(b,c,d){this.matrix?(this.inversematrix||(this.inversematrix=(new $3Dmol.Matrix4).getInverse(this.matrix)),d=new $3Dmol.Vector3(b,c,d),d=d.applyMatrix4(this.inversematrix),b=d.x,c=d.y,d=d.z):(b-=this.origin.x,c-=this.origin.y,d-=this.origin.z,b/=this.unit.x,c/=this.unit.y,d/=this.unit.z);b=Math.round(b);c=Math.round(c);d=Math.round(d);return 0>b||b>=this.size.x||0>c||c>=this.size.y||0>d||d>=this.size.z?0:this.data[b*this.size.y*this.size.z+c*this.size.z+
d]};$3Dmol.VolumeData.prototype.getCoordinates=function(b){var c=b/(this.size.y*this.size.z),d=b%(this.size.y*this.size.z);b%=this.size.z;c*=this.unit.x;d*=this.unit.y;b*=this.unit.z;c+=this.origin.x;d+=this.origin.y;b+=this.origin.z;return{x:c,y:d,z:b}};
$3Dmol.VolumeData.prototype.vasp=function(b){var c=b.replace(/^\s+/,"").split(/[\n\r]/),d=$3Dmol.Parsers.vasp(b)[0].length;if(0==d)console.log("No good formating of CHG or CHGCAR file, not atomic information provided in the file."),this.data=[];else{var h=parseFloat(c[1]);var e=c[2].replace(/^\s+/,"").split(/\s+/);b=(new $3Dmol.Vector3(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2]))).multiplyScalar(1.889725992*h);e=c[3].replace(/^\s+/,"").split(/\s+/);var t=(new $3Dmol.Vector3(parseFloat(e[0]),
parseFloat(e[1]),parseFloat(e[2]))).multiplyScalar(1.889725992*h);e=c[4].replace(/^\s+/,"").split(/\s+/);e=(new $3Dmol.Vector3(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2]))).multiplyScalar(1.889725992*h);h=b.x*(t.y*e.z-e.y*t.z)-t.x*(b.y*e.z-e.y*b.z)+e.x*(b.y*t.z-t.y*b.z);h=Math.abs(h)/Math.pow(1.889725992,3);h=1/h;c.splice(0,8+d+1);var g=c[0].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");d=Math.abs(g[0]);var q=Math.abs(g[1]);g=Math.abs(g[2]);var p=this.origin=new $3Dmol.Vector3(0,0,0);this.size=
{x:d,y:q,z:g};this.unit=new $3Dmol.Vector3(b.x,t.y,e.z);b=b.multiplyScalar(1/(1.889725992*d));t=t.multiplyScalar(1/(1.889725992*q));e=e.multiplyScalar(1/(1.889725992*g));if(0!=b.y||0!=b.z||0!=t.x||0!=t.z||0!=e.x||0!=e.y)this.matrix=new $3Dmol.Matrix4(b.x,t.x,e.x,0,b.y,t.y,e.y,0,b.z,t.z,e.z,0,0,0,0,1),this.matrix=this.matrix.multiplyMatrices(this.matrix,(new $3Dmol.Matrix4).makeTranslation(p.x,p.y,p.z)),this.origin=new $3Dmol.Vector3(0,0,0),this.unit=new $3Dmol.Vector3(1,1,1);c.splice(0,1);c=c.join(" ");
c=c.replace(/^\s+/,"");c=c.split(/[\s\r]+/);c.splice(d*q*g+1);c=new Float32Array(c);for(b=0;b<c.length;b++)c[b]=c[b]*h*.036749309;this.data=c}};
$3Dmol.VolumeData.prototype.dx=function(b){b=b.split(/[\n\r]+/);var c,d,h=/gridpositions\s+counts\s+(\d+)\s+(\d+)\s+(\d+)/,e=/^origin\s+(\S+)\s+(\S+)\s+(\S+)/,t=/^delta\s+(\S+)\s+(\S+)\s+(\S+)/,g=/data follows/;for(c=0;c<b.length;c++){var q=b[c];if(d=h.exec(q)){var p=parseInt(d[1]),u=parseInt(d[2]);d=parseInt(d[3]);this.size={x:p,y:u,z:d}}else if(d=t.exec(q)){p=parseFloat(d[1]);0==parseFloat(d[2])&&0==parseFloat(d[3])||console.log("Non-orthogonal delta matrix not currently supported in dx format");
c+=1;q=b[c];d=t.exec(q);if(null==d){console.log("Parse error in dx delta matrix");return}u=parseFloat(d[2]);0==parseFloat(d[1])&&0==parseFloat(d[3])||console.log("Non-orthogonal delta matrix not currently supported in dx format");c+=1;q=b[c];d=t.exec(q);if(null==d){console.log("Parse error in dx delta matrix");return}q=parseFloat(d[3]);0==parseFloat(d[1])&&0==parseFloat(d[2])||console.log("Non-orthogonal delta matrix not currently supported in dx format");this.unit=new $3Dmol.Vector3(p,u,q)}else if(d=
e.exec(q))p=parseFloat(d[1]),u=parseFloat(d[2]),d=parseFloat(d[3]),this.origin=new $3Dmol.Vector3(p,u,d);else if(g.exec(q))break}c+=1;this.size&&this.origin&&this.unit&&this.size?(b=b.splice(c).join(" "),b=b.split(/[\s\r]+/),this.data=new Float32Array(b)):console.log("Error parsing dx format")};
$3Dmol.VolumeData.prototype.cube=function(b){b=b.replace(/^\s+/,"").split(/[\n\r]+/);if(!(6>b.length)){var c=b[2].replace(/^\s+/,"").replace(/\s+/g," ").split(" "),d=parseFloat(c[0]),h=Math.abs(d),e=this.origin=new $3Dmol.Vector3(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]));c=b[3].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var t=0<c[0]?.529177:1;e.multiplyScalar(t);var g=Math.abs(c[0]),q=(new $3Dmol.Vector3(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]))).multiplyScalar(t);c=b[4].replace(/^\s+/,
"").replace(/\s+/g," ").split(" ");var p=Math.abs(c[0]),u=(new $3Dmol.Vector3(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]))).multiplyScalar(t);c=b[5].replace(/^\s+/,"").replace(/\s+/g," ").split(" ");var m=Math.abs(c[0]);c=(new $3Dmol.Vector3(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]))).multiplyScalar(t);this.size={x:g,y:p,z:m};this.unit=new $3Dmol.Vector3(q.x,u.y,c.z);if(0!=q.y||0!=q.z||0!=u.x||0!=u.z||0!=c.x||0!=c.y)this.matrix=new $3Dmol.Matrix4(q.x,u.x,c.x,0,q.y,u.y,c.y,0,q.z,u.z,
c.z,0,0,0,0,1),this.matrix=this.matrix.multiplyMatrices(this.matrix,(new $3Dmol.Matrix4).makeTranslation(e.x,e.y,e.z)),this.origin=new $3Dmol.Vector3(0,0,0),this.unit=new $3Dmol.Vector3(1,1,1);e=6;0>d&&e++;b=b.splice(h+e).join(" ");b=b.replace(/^\s+/,"");b=b.split(/[\s\r]+/);this.data=new Float32Array(b)}};
$3Dmol.VolumeData.prototype.ccp4=function(b){var c;b=new Int8Array(b);var d=new Int32Array(b.buffer,0,56);var h=new Float32Array(b.buffer,0,56);var e=new DataView(b.buffer);String.fromCharCode(e.getUint8(208),e.getUint8(209),e.getUint8(210),e.getUint8(211));var t=[e.getUint8(212),e.getUint8(213)];if(17===t[0]&&17===t[1])for(t=b.byteLength,c=0;c<t;c+=4)e.setFloat32(c,e.getFloat32(c),!0);e=d[0];t=d[1];var g=d[2];c=d[4];var q=d[5];var p=d[6];var u=d[7];var m=d[8];var l=d[9];var n=h[10];var y=h[11];var f=
h[12];var x=h[13];var w=h[14];var R=h[15];var P=d[16];var A=d[17];var T=d[18];d=d[23];var G=h[49];var C=h[50];h=h[51];n=[n,0,0];y=[y*Math.cos(Math.PI/180*R),y*Math.sin(Math.PI/180*R),0];x=[f*Math.cos(Math.PI/180*w),f*(Math.cos(Math.PI/180*x)-Math.cos(Math.PI/180*R)*Math.cos(Math.PI/180*w))/Math.sin(Math.PI/180*R),0];x[2]=Math.sqrt(f*f*Math.sin(Math.PI/180*w)*Math.sin(Math.PI/180*w)-x[1]*x[1]);f=[0,n,y,x];u=[0,u,m,l];P=[0,P,A,T];this.matrix=new $3Dmol.Matrix4;this.matrix.set(f[P[1]][0]/u[P[1]],f[P[2]][0]/
u[P[2]],f[P[3]][0]/u[P[3]],0,f[P[1]][1]/u[P[1]],f[P[2]][1]/u[P[2]],f[P[3]][1]/u[P[3]],0,f[P[1]][2]/u[P[1]],f[P[2]][2]/u[P[2]],f[P[3]][2]/u[P[3]],0,0,0,0,1);this.matrix=this.matrix.multiplyMatrices(this.matrix,(new $3Dmol.Matrix4).makeTranslation(c+G,q+C,p+h));this.origin=new $3Dmol.Vector3(0,0,0);this.unit=new $3Dmol.Vector3(1,1,1);this.size={x:e,y:t,z:g};b=new Float32Array(b.buffer,1024+d);this.data=new Float32Array(e*t*g);for(c=0;c<e;c++)for(q=0;q<t;q++)for(p=0;p<g;p++)this.data[(c*t+q)*g+p]=b[(p*
t+q)*e+c]};$3Dmol.VolumeData.prototype.ccp4.isbinary=!0;
$3Dmol.workerString=function(){self.onmessage=function(b){b=b.data;var c=b.type;if(0>c)self.atomData=b.atoms,self.volume=b.volume,self.ps=new ProteinSurface;else{var d=self.ps;d.initparm(b.expandedExtent,1==c?!1:!0,self.volume);d.fillvoxels(self.atomData,b.extendedAtoms);d.buildboundary();if(4===c||2===c)d.fastdistancemap(),d.boundingatom(!1),d.fillvoxelswaals(self.atomData,b.extendedAtoms);d.marchingcube(c);b=d.getFacesAndVertices(b.atomsToShow);self.postMessage(b)}}}.toString().replace(/(^.*?\{|\}$)/g,
"");$3Dmol.workerString+="; var ProteinSurface="+$3Dmol.ProteinSurface.toString().replace(/[a-zA-Z_$]{1}[0-9a-zA-Z_$]*.MarchingCube./g,"MarchingCube.");$3Dmol.workerString+=",MarchingCube=("+$3Dmol.MarchingCubeInitializer.toString()+")();";$3Dmol.SurfaceWorker=window.URL?window.URL.createObjectURL(new Blob([$3Dmol.workerString],{type:"text/javascript"})):{postMessage:function(){}};$3Dmol.workerString=$3Dmol.workerString;$3Dmol.SurfaceWorker=$3Dmol.SurfaceWorker;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)))

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level :  false || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Molecule3dViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var molecule_3d_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony import */ var molecule_3d_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(molecule_3d_for_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Molecule3dViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Molecule3dViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(Molecule3dViewer, _Component);

  function Molecule3dViewer(props) {
    var _this;

    _classCallCheck(this, Molecule3dViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Molecule3dViewer).call(this, props));
    _this.onChangeSelection = _this.onChangeSelection.bind(_assertThisInitialized(_this));
    _this.onRenderNewData = _this.onRenderNewData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Molecule3dViewer, [{
    key: "onChangeSelection",
    value: function onChangeSelection(selectedAtomIds) {
      this.props.setProps({
        selectedAtomIds: selectedAtomIds
      });
    }
  }, {
    key: "onRenderNewData",
    value: function onRenderNewData(glviewer) {
      glviewer.center();
      var zoomRatio = 0.8;
      glviewer.zoom(zoomRatio);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      if (this.props.modelData !== nextProps.modelData || this.props.backgroundColor !== nextProps.backgroundColor || this.props.backgroundOpacity !== nextProps.backgroundOpacity || this.props.styles !== nextProps.styles || this.props.selectionType !== nextProps.selectionType || !this.props.selectedAtomIds && nextProps.selectedAtomIds || this.props.selectedAtomIds && !nextProps.selectedAtomIds || this.props.selectedAtomIds && nextProps.selectedAtomIds && this.props.selectedAtomIds.length !== nextProps.selectedAtomIds.length || this.props.selectedAtomIds && nextProps.selectedAtomIds && (this.props.selectedAtomIds.some(function (atomId) {
        return !(atomId in nextProps.selectedAtomIds);
      }) || nextProps.selectedAtomIds.some(function (atomId) {
        return !(atomId in _this2.props.selectedAtomIds);
      }))) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          selectionType = _this$props.selectionType; // molecule-3d-for-react requires the selection type to be
      // capitalized, but Dash typically uses all-lowercase prop values

      var capitalizedSelectionType = selectionType === null ? null : selectionType.charAt(0).toUpperCase() + selectionType.slice(1);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(molecule_3d_for_react__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, this.props, {
        selectionType: capitalizedSelectionType,
        onChangeSelection: this.onChangeSelection,
        onRenderNewData: this.onRenderNewData
      })));
    }
  }]);

  return Molecule3dViewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Molecule3dViewer.defaultProps = _components_Molecule3dViewer__WEBPACK_IMPORTED_MODULE_2__[/* defaultProps */ "b"];
Molecule3dViewer.propTypes = _components_Molecule3dViewer__WEBPACK_IMPORTED_MODULE_2__[/* propTypes */ "c"];

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-04-10T19:48Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	if ( documentElement.attachShadow ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		jQuery.event.add( el, type, returnTrue );
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = undefined;
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(

					// Support: IE <=9 - 11+
					// Extend with the prototype to reset the above stopImmediatePropagation()
					jQuery.extend( saved.shift(), jQuery.Event.prototype ),
					saved,
					this
				) );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

}]);