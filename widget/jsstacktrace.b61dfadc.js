parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EtSe":[function(require,module,exports) {
"use strict";function a(a){a.languages.jsstacktrace={"error-message":{pattern:/^\S.*/m,alias:"string"},"stack-frame":{pattern:/(^[ \t]+)at[ \t].*/m,lookbehind:!0,inside:{"not-my-code":{pattern:/^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,alias:"comment"},filename:{pattern:/(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,lookbehind:!0,alias:"url"},function:{pattern:/(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,lookbehind:!0,inside:{punctuation:/\./}},punctuation:/[()]/,keyword:/\b(?:at|new)\b/,alias:{pattern:/\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,alias:"variable"},"line-number":{pattern:/:\d+(?::\d+)?\b/,alias:"number",inside:{punctuation:/:/}}}}}}module.exports=a,a.displayName="jsstacktrace",a.aliases=[];
},{}]},{},["EtSe"], null)