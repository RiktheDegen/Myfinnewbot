parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rkct":[function(require,module,exports) {
"use strict";var e=require("./cpp.js");function t(t){t.register(e),t.languages.chaiscript=t.languages.extend("clike",{string:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,lookbehind:!0,greedy:!0},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},{pattern:/(\b(?:attr|def)\s+)\w+(?=\s*::)/,lookbehind:!0}],keyword:/\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,number:[t.languages.cpp.number,/\b(?:Infinity|NaN)\b/],operator:/>>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/}),t.languages.insertBefore("chaiscript","operator",{"parameter-type":{pattern:/([,(]\s*)\w+(?=\s+\w)/,lookbehind:!0,alias:"class-name"}}),t.languages.insertBefore("chaiscript","string",{"string-interpolation":{pattern:/(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,lookbehind:!0,inside:{"interpolation-expression":{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:t.languages.chaiscript},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"}}},string:/[\s\S]+/}}})}module.exports=t,t.displayName="chaiscript",t.aliases=[];
},{"./cpp.js":"FkQ9"}]},{},[], null)