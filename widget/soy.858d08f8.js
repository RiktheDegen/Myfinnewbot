parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AeLH":[function(require,module,exports) {
"use strict";var e=require("./markup-templating.js");function a(a){a.register(e),function(e){var a=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;e.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^\{+\/?|\/?\}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,inside:{string:{pattern:a,greedy:!0},number:t,punctuation:/[\[\].?]/}},string:{pattern:a,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:false|true)\b/,number:t,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},e.hooks.add("before-tokenize",function(a){var t=!1;e.languages["markup-templating"].buildPlaceholders(a,"soy",/\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g,function(e){return"{/literal}"===e&&(t=!1),!t&&("{literal}"===e&&(t=!0),!0)})}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"soy")})}(a)}module.exports=a,a.displayName="soy",a.aliases=[];
},{"./markup-templating.js":"qIc5"}]},{},[], null)