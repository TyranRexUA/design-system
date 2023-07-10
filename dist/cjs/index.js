"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n,o=e(t);exports.Themes=void 0,(n=exports.Themes||(exports.Themes={})).MAIN="MAIN",n.SECONDARY="SECONDARY";var r=t.createContext(exports.Themes.MAIN),u=t.memo((function(e){var n=e.children,u=e.themeName,a=t.useState(exports.Themes.MAIN),s=a[0],l=a[1],i=t.useMemo((function(){return u?(l(u),u):s}),[u,s]);return o.default.createElement(r.Provider,{value:i},n)}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function a(t,e,n){if(n||2===arguments.length)for(var o,r=0,u=e.length;r<u;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t.reduce((function(t,e){return e&&!0!==e?a(a([],t,!0),[e],!1):a([],t,!0)}),[]);return n.join(" ")},l=function(e){var n=t.useContext(r);return e||n};function i(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var d={button:"Button-module_button__b7guy",SECONDARY:"Button-module_SECONDARY__AhL1J"};i(".Button-module_button__b7guy {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  min-height: 48px;\n  background: red;\n}\n.Button-module_button__b7guy span {\n  font-size: 15px;\n  line-height: 19px;\n  font-family: Yantramanav, sans-serif;\n  color: blue;\n}\n.Button-module_button__b7guy:hover {\n  background: gray;\n}\n\n.Button-module_SECONDARY__AhL1J {\n  background: blue;\n}\n.Button-module_SECONDARY__AhL1J span {\n  font-size: 15px;\n  line-height: 19px;\n  font-family: Yantramanav, sans-serif;\n  color: red;\n}");var c=t.memo((function(t){var e=t.label,n=t.isDisabled,r=void 0!==n&&n,u=t.onPress,a=t.customClass,i=t.themeName,c=l(i);return o.default.createElement("button",{className:s(d.button,d[c],a),onClick:u,disabled:r,type:"button"},o.default.createElement("span",null,e))})),m={button:"TextButton-module_button__w6P3N",SECONDARY:"TextButton-module_SECONDARY__Mu2ep"};i(".TextButton-module_button__w6P3N {\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.TextButton-module_button__w6P3N span {\n  font-size: 15px;\n  line-height: 19px;\n  font-family: Yantramanav, sans-serif;\n  color: red;\n}\n\n.TextButton-module_SECONDARY__Mu2ep span {\n  font-size: 15px;\n  line-height: 19px;\n  font-family: Yantramanav, sans-serif;\n  color: blue;\n}");var b=t.memo((function(t){var e=t.label,n=t.isDisabled,r=void 0!==n&&n,u=t.onPress,a=t.customClass,i=t.themeName,d=l(i);return o.default.createElement("button",{className:s(m.button,m[d],a),onClick:u,disabled:r,type:"button"},o.default.createElement("span",null,e))})),p="IconButton-module_button__66W5B";i(".IconButton-module_button__66W5B {\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  border: 0;\n}\n.IconButton-module_button__66W5B img {\n  object-fit: contain;\n}\n.IconButton-module_button__66W5B img:hover {\n  filter: brightness(0.8);\n}\n\n.IconButton-module_button__66W5B:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.IconButton-module_button__66W5B:disabled img:hover {\n  filter: brightness(1);\n}");var _=t.memo((function(t){var e=t.icon,n=t.width,r=void 0===n?21:n,u=t.height,a=void 0===u?21:u,l=t.onPress,i=t.isDisabled,d=t.buttonClass;return o.default.createElement("button",{className:s(p,d),onClick:l,type:"button",disabled:i},o.default.createElement("img",{width:r,height:a,src:"string"==typeof e?e:e.src,alt:""}))})),f=t.memo((function(t){var e=t.onPress,n=t.isDisabled,r=t.buttonClass;return o.default.createElement(_,{buttonClass:r,isDisabled:n,onPress:e,icon:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1792' height='1792' id='close'%3e%3cpath d='M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z'%3e%3c/path%3e%3c/svg%3e"})}));exports.Button=c,exports.CloseButton=f,exports.IconButton=_,exports.TextButton=b,exports.ThemeProvider=u,exports.cn=s,exports.useTheme=l;
//# sourceMappingURL=index.js.map