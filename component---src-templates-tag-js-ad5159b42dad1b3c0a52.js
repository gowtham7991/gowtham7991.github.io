(self.webpackChunkv4=self.webpackChunkv4||[]).push([[502],{4843:function(e,n,t){"use strict";t.r(n);var r,u=t(5276),o=t(6540),a=t(1015),i=t(249),f=t.n(i),c=t(3673),l=t(7859),s=t(7182);const x=l.Ay.main(r||(r=(0,u.A)(["\n  max-width: 1000px;\n\n  a {\n    ",";\n  }\n\n  h1 {\n    ",";\n    margin-bottom: 50px;\n\n    a {\n      font-size: var(--fz-lg);\n      font-weight: 400;\n    }\n  }\n\n  ul {\n    li {\n      font-size: 24px;\n      h2 {\n        font-size: inherit;\n        margin: 0;\n        a {\n          color: var(--light-slate);\n        }\n      }\n      .subtitle {\n        color: var(--slate);\n        font-size: var(--fz-sm);\n\n        .tag {\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n"])),(e=>{let{theme:n}=e;return n.mixins.inlineLink}),(e=>{let{theme:n}=e;return n.mixins.flexBetween}));n.default=e=>{let{pageContext:n,data:t,location:r}=e;const{tag:u}=n,{edges:i}=t.allMarkdownRemark;return o.createElement(s.PE,{location:r},o.createElement(c.m,{title:"Tagged: #"+u}),o.createElement(x,null,o.createElement("span",{className:"breadcrumb"},o.createElement("span",{className:"arrow"},"←"),o.createElement(a.Link,{to:"/pensieve"},"All memories")),o.createElement("h1",null,o.createElement("span",null,"#",u),o.createElement("span",null,o.createElement(a.Link,{to:"/pensieve/tags"},"View all tags"))),o.createElement("ul",{className:"fancy-list"},i.map((e=>{let{node:n}=e;const{title:t,slug:r,date:u,tags:i}=n.frontmatter;return o.createElement("li",{key:r},o.createElement("h2",null,o.createElement(a.Link,{to:r},t)),o.createElement("p",{className:"subtitle"},o.createElement("time",null,new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),o.createElement("span",null," — "),i&&i.length>0&&i.map(((e,n)=>o.createElement(a.Link,{key:n,to:"/pensieve/tags/"+f()(e)+"/",className:"tag"},"#",e)))))})))))}},1873:function(e,n,t){var r=t(9325).Symbol;e.exports=r},4932:function(e){e.exports=function(e,n){for(var t=-1,r=null==e?0:e.length,u=Array(r);++t<r;)u[t]=n(e[t],t,e);return u}},882:function(e){e.exports=function(e,n,t,r){var u=-1,o=null==e?0:e.length;for(r&&o&&(t=e[++u]);++u<o;)t=n(t,e[u],u,e);return t}},1733:function(e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},2552:function(e,n,t){var r=t(1873),u=t(659),o=t(9350),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?u(e):o(e)}},4552:function(e){e.exports=function(e){return function(n){return null==e?void 0:e[n]}}},7556:function(e,n,t){var r=t(1873),u=t(4932),o=t(6449),a=t(4394),i=r?r.prototype:void 0,f=i?i.toString:void 0;e.exports=function e(n){if("string"==typeof n)return n;if(o(n))return u(n,e)+"";if(a(n))return f?f.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}},5539:function(e,n,t){var r=t(882),u=t(828),o=t(6645),a=RegExp("['’]","g");e.exports=function(e){return function(n){return r(o(u(n).replace(a,"")),e,"")}}},4647:function(e,n,t){var r=t(4552)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},4840:function(e,n,t){var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=r},659:function(e,n,t){var r=t(1873),u=Object.prototype,o=u.hasOwnProperty,a=u.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var n=o.call(e,i),t=e[i];try{e[i]=void 0;var r=!0}catch(f){}var u=a.call(e);return r&&(n?e[i]=t:delete e[i]),u}},5434:function(e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},9350:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},9325:function(e,n,t){var r=t(4840),u="object"==typeof self&&self&&self.Object===Object&&self,o=r||u||Function("return this")();e.exports=o},2225:function(e){var n="\\ud800-\\udfff",t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+o+"]",i="\\d+",f="["+t+"]",c="["+r+"]",l="[^"+n+o+i+t+r+u+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+u+"]",d="(?:"+c+"|"+l+")",m="(?:"+p+"|"+l+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",E="[\\ufe0e\\ufe0f]?",h=E+b+("(?:\\u200d(?:"+["[^"+n+"]",s,x].join("|")+")"+E+b+")*"),y="(?:"+[f,s,x].join("|")+")"+h,A=RegExp([p+"?"+c+"+"+g+"(?="+[a,p,"$"].join("|")+")",m+"+"+v+"(?="+[a,p+d,"$"].join("|")+")",p+"?"+d+"+"+g,p+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,y].join("|"),"g");e.exports=function(e){return e.match(A)||[]}},828:function(e,n,t){var r=t(4647),u=t(3222),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(o,r).replace(a,"")}},6449:function(e){var n=Array.isArray;e.exports=n},346:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},4394:function(e,n,t){var r=t(2552),u=t(346);e.exports=function(e){return"symbol"==typeof e||u(e)&&"[object Symbol]"==r(e)}},249:function(e,n,t){var r=t(5539)((function(e,n,t){return e+(t?"-":"")+n.toLowerCase()}));e.exports=r},3222:function(e,n,t){var r=t(7556);e.exports=function(e){return null==e?"":r(e)}},6645:function(e,n,t){var r=t(1733),u=t(5434),o=t(3222),a=t(2225);e.exports=function(e,n,t){return e=o(e),void 0===(n=t?void 0:n)?u(e)?a(e):r(e):e.match(n)||[]}}}]);
//# sourceMappingURL=component---src-templates-tag-js-ad5159b42dad1b3c0a52.js.map