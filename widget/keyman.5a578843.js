parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hICQ":[function(require,module,exports) {
"use strict";function e(e){e.languages.keyman={comment:{pattern:/\bc .*/i,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0},"virtual-key":{pattern:/\[\s*(?:(?:ALT|CAPS|CTRL|LALT|LCTRL|NCAPS|RALT|RCTRL|SHIFT)\s+)*(?:[TKU]_[\w?]+|[A-E]\d\d?|"[^"\r\n]*"|'[^'\r\n]*')\s*\]/i,greedy:!0,alias:"function"},"header-keyword":{pattern:/&\w+/,alias:"bold"},"header-statement":{pattern:/\b(?:bitmap|bitmaps|caps always off|caps on only|copyright|hotkey|language|layout|message|name|shift frees caps|version)\b/i,alias:"bold"},"rule-keyword":{pattern:/\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|reset|return|save|set|store|use)\b/i,alias:"keyword"},"structural-keyword":{pattern:/\b(?:ansi|begin|group|match|nomatch|unicode|using keys)\b/i,alias:"keyword"},"compile-target":{pattern:/\$(?:keyman|keymanonly|keymanweb|kmfl|weaver):/i,alias:"property"},number:/\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,operator:/[+>\\$]|\.\./,punctuation:/[()=,]/}}module.exports=e,e.displayName="keyman",e.aliases=[];
},{}]},{},["hICQ"], null)