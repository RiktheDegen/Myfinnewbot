parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lm1I":[function(require,module,exports) {
"use strict";function e(e){e.languages.pcaxis={string:/"[^"]*"/,keyword:{pattern:/((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,lookbehind:!0,greedy:!0,inside:{keyword:/^[-A-Z\d]+/,language:{pattern:/^(\s*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/^\[|\]$/,property:/[-\w]+/}},"sub-key":{pattern:/^(\s*)\S[\s\S]*/,lookbehind:!0,inside:{parameter:{pattern:/"[^"]*"/,alias:"property"},punctuation:/^\(|\)$|,/}}}},operator:/=/,tlist:{pattern:/TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,greedy:!0,inside:{function:/^TLIST/,property:{pattern:/^(\s*\(\s*)\w+/,lookbehind:!0},string:/"[^"]*"/,punctuation:/[(),]/,operator:/-/}},punctuation:/[;,]/,number:{pattern:/(^|\s)\d+(?:\.\d+)?(?!\S)/,lookbehind:!0},boolean:/NO|YES/},e.languages.px=e.languages.pcaxis}module.exports=e,e.displayName="pcaxis",e.aliases=["px"];
},{}]},{},["lm1I"], null)