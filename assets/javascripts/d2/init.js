/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev btn-floating btn-large waves-effect waves-light  blue-grey lighten-5" aria-label="Previous" tabindex="0" role="button"><i class="material-icons">arrow_back</i></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next btn-floating btn-large waves-effect waves-light  blue-grey lighten-5" aria-label="Next" tabindex="0" role="button"><i class="material-icons">arrow_forward</i></button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[components]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
/*!
 * Materialize v0.98.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
if("undefined"==typeof jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):!(!p.isArray(a)||4!==a.length)&&i.apply(null,a),c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";
switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f!==!0&&b[2].queue!==f&&(s!==d||b[2].queue!==!1)||void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))})})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return!!Array.isArray(a)&&(g(a,c[b],c),!0)}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=!this.pTime||a.timeStamp-this.pTime<b.interval,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define(function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),function(a){a.Package?Materialize={}:a.Materialize={}}(window),function(a){for(var b=0,c=["webkit","moz"],d=a.requestAnimationFrame,e=a.cancelAnimationFrame,f=c.length;--f>=0&&!d;)d=a[c[f]+"RequestAnimationFrame"],e=a[c[f]+"CancelRequestAnimationFrame"];d&&e||(d=function(a){var c=+Date.now(),d=Math.max(b+16,c);return setTimeout(function(){a(b=d)},d-c)},e=clearTimeout),a.requestAnimationFrame=d,a.cancelAnimationFrame=e}(window),Materialize.objectSelectorString=function(a){var b=a.prop("tagName")||"",c=a.attr("id")||"",d=a.attr("class")||"";return(b+c+d).replace(/\s/g,"")},Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.escapeHash=function(a){return a.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){if("fixed"===$(this).css("position"))return d=!0,!1}),d};var getTime=Date.now||function(){return(new Date).getTime()};Materialize.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:getTime(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=getTime();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,k<=0?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity,function(a){a.fn.collapsible=function(b,c){var d={accordion:void 0,onOpen:void 0,onClose:void 0},e=b;return b=a.extend(d,b),this.each(function(){function d(b){m=l.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),m.not(b).removeClass("active").parent().removeClass("active"),m.not(b).parent().children(".collapsible-body").stop(!0,!1).each(function(){a(this).is(":visible")&&a(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height",""),h(a(this).siblings(".collapsible-header"))}})})}function f(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function g(a,c){c||a.toggleClass("active"),b.accordion||"accordion"===n||void 0===n?d(a):f(a),h(a)}function h(a){a.hasClass("active")?"function"==typeof b.onOpen&&b.onOpen.call(this,a.parent()):"function"==typeof b.onClose&&b.onClose.call(this,a.parent())}function i(a){var b=j(a);return b.length>0}function j(a){return a.closest("li > .collapsible-header")}function k(){l.off("click.collapse","> li > .collapsible-header")}var l=a(this),m=a(this).find("> li > .collapsible-header"),n=l.data("collapsible");if("destroy"===e)return void k();if(c>=0&&c<m.length){var o=m.eq(c);return void(o.length&&("open"===e||"close"===e&&o.hasClass("active"))&&g(o))}k(),l.on("click.collapse","> li > .collapsible-header",function(b){var c=a(b.target);i(c)&&(c=j(c)),g(c)}),b.accordion||"accordion"===n||void 0===n?g(m.filter(".active").first(),!0):m.filter(".active").each(function(){g(a(this),!0)})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrainWidth:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===b?(this.each(function(){a(this).trigger("open")}),!1):"close"===b?(this.each(function(){a(this).trigger("close")}),!1):void this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("induration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outduration")),void 0!==g.data("constrainwidth")&&(h.constrainWidth=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment")),void 0!==g.data("stoppropagation")&&(h.stopPropagation=g.data("stoppropagation"))}function e(b){"focus"===b&&(i=!0),d(),j.addClass("active"),g.addClass("active"),h.constrainWidth===!0?j.css("width",g.outerWidth()):j.css("white-space","nowrap");var c=window.innerHeight,e=g.innerHeight(),k=g.offset().left,l=g.offset().top-a(window).scrollTop(),m=h.alignment,n=0,o=0,p=0;h.belowOrigin===!0&&(p=e);var q=0,r=0,s=g.parent();if(s.is("body")||(s[0].scrollHeight>s[0].clientHeight&&(q=s[0].scrollTop),s[0].scrollWidth>s[0].clientWidth&&(r=s[0].scrollLeft)),k+j.innerWidth()>a(window).width()?m="right":k-j.innerWidth()+g.innerWidth()<0&&(m="left"),l+j.innerHeight()>c)if(l+e-j.innerHeight()<0){var t=c-l-p;j.css("max-height",t)}else p||(p+=e),p-=j.innerHeight();if("left"===m)n=h.gutter,o=g.position().left+n;else if("right"===m){var u=g.position().left+g.outerWidth()-j.outerWidth();n=-h.gutter,o=u+n}j.css({position:"absolute",top:g.position().top+p+q,left:o+r}),j.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"}),setTimeout(function(){a(document).bind("click."+j.attr("id"),function(b){f(),a(document).unbind("click."+j.attr("id"))})},0)}function f(){i=!1,j.fadeOut(h.outDuration),j.removeClass("active"),g.removeClass("active"),a(document).unbind("click."+j.attr("id")),setTimeout(function(){j.css("max-height","")},h.outDuration)}var g=a(this),h=a.extend({},c,b),i=!1,j=a("#"+g.attr("data-activates"));if(d(),g.after(j),h.hover){var k=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){k===!1&&(e(),k=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(j)||(j.stop(!0,!0),f(),k=!1)}),j.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(j.stop(!0,!0),f(),k=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){i||(g[0]!=b.currentTarget||g.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?g.hasClass("active")&&(f(),a(document).unbind("click."+j.attr("id"))):(b.preventDefault(),h.stopPropagation&&b.stopPropagation(),e("click")))});g.on("open",function(a,b){e(b)}),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){
var b=0,c=0,d=function(){return c++,"materialize-modal-overlay-"+c},e={init:function(c){var e={opacity:.5,inDuration:350,outDuration:250,ready:void 0,complete:void 0,dismissible:!0,startingTop:"4%",endingTop:"10%"};return c=a.extend(e,c),this.each(function(){var e=a(this),f=a(this).attr("id")||"#"+a(this).data("target"),g=function(){var d=e.data("overlay-id"),f=a("#"+d);e.removeClass("open"),a("body").css({overflow:"",width:""}),e.find(".modal-close").off("click.close"),a(document).off("keyup.modal"+d),f.velocity({opacity:0},{duration:c.outDuration,queue:!1,ease:"easeOutQuart"});var g={duration:c.outDuration,queue:!1,ease:"easeOutCubic",complete:function(){a(this).css({display:"none"}),"function"==typeof c.complete&&c.complete.call(this,e),f.remove(),b--}};e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},g):e.velocity({top:c.startingTop,opacity:0,scaleX:.7},g)},h=function(f){var h=a("body"),i=h.innerWidth();if(h.css("overflow","hidden"),h.width(i),!e.hasClass("open")){var j=d(),k=a('<div class="modal-overlay"></div>');lStack=++b,k.attr("id",j).css("z-index",1e3+2*lStack),e.data("overlay-id",j).css("z-index",1e3+2*lStack+1),e.addClass("open"),a("body").append(k),c.dismissible&&(k.click(function(){g()}),a(document).on("keyup.modal"+j,function(a){27===a.keyCode&&g()})),e.find(".modal-close").on("click.close",function(a){g()}),k.css({display:"block",opacity:0}),e.css({display:"block",opacity:0}),k.velocity({opacity:c.opacity},{duration:c.inDuration,queue:!1,ease:"easeOutCubic"}),e.data("associated-overlay",k[0]);var l={duration:c.inDuration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready.call(this,e,f)}};e.hasClass("bottom-sheet")?e.velocity({bottom:"0",opacity:1},l):(a.Velocity.hook(e,"scaleX",.7),e.css({top:c.startingTop}),e.velocity({top:c.endingTop,opacity:1,scaleX:"1"},l))}};a(document).off("click.modalTrigger",'a[href="#'+f+'"], [data-target="'+f+'"]'),a(this).off("openModal"),a(this).off("closeModal"),a(document).on("click.modalTrigger",'a[href="#'+f+'"], [data-target="'+f+'"]',function(b){c.startingTop=(a(this).offset().top-a(window).scrollTop())/1.15,h(a(this)),b.preventDefault()}),a(this).on("openModal",function(){a(this).attr("href")||"#"+a(this).data("target");h()}),a(this).on("closeModal",function(){g()})})},open:function(){a(this).trigger("openModal")},close:function(){a(this).trigger("closeModal")}};a.fn.modal=function(b){return e[b]?e[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.modal"):e.init.apply(this,arguments)}}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,a(this).remove()}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),i.removeAttr("style"),i.attr("style",k),i.removeClass("active"),f=!0,c&&c.css("overflow","")}}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder"),k=i.attr("style");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;for(;null!==d&&!a(d).is(document);){var n=a(d);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode}i.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b()});i.before(o);var p=o[0].getBoundingClientRect();if(o.css({width:j,height:k,left:-1*p.left,top:-1*p.top}),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var q=a('<div class="materialbox-caption"></div>');q.text(i.data("caption")),a("body").append(q),q.css({display:"inline"}),q.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"})}var r=0,s=l/j,t=m/k,u=0,v=0;s>t?(r=m/l,u=.9*j,v=.9*j*r):(r=l/m,u=.9*k*r,v=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":u,width:l},{duration:0,queue:!1,complete:function(){i.css({left:0,top:0}).velocity({height:v,width:u,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-u/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-v/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}}):i.css("left",0).css("top",0).velocity({height:v,width:u,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-u/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-v/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}),a(window).scroll(function(){e&&b()}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=b<601?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&j<k+l&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).trigger("load")}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(b){var c={onShow:null,swipeable:!1,responsiveThreshold:1/0};b=a.extend(c,b);var d=Materialize.objectSelectorString(a(this));return this.each(function(c){var e,f,g,h,i,j=d+c,k=a(this),l=a(window).width(),m=k.find("li.tab a"),n=k.width(),o=a(),p=Math.max(n,k[0].scrollWidth)/m.length,q=prev_index=0,r=!1,s=300,t=function(a){return Math.ceil(n-a.position().left-a.outerWidth()-k.scrollLeft())},u=function(a){return Math.floor(a.position().left+k.scrollLeft())},v=function(a){q-a>=0?(h.velocity({right:t(e)},{duration:s,queue:!1,easing:"easeOutQuad"}),h.velocity({left:u(e)},{duration:s,queue:!1,easing:"easeOutQuad",delay:90})):(h.velocity({left:u(e)},{duration:s,queue:!1,easing:"easeOutQuad"}),h.velocity({right:t(e)},{duration:s,queue:!1,easing:"easeOutQuad",delay:90}))};b.swipeable&&l>b.responsiveThreshold&&(b.swipeable=!1),e=a(m.filter('[href="'+location.hash+'"]')),0===e.length&&(e=a(this).find("li.tab a.active").first()),0===e.length&&(e=a(this).find("li.tab a").first()),e.addClass("active"),q=m.index(e),q<0&&(q=0),void 0!==e[0]&&(f=a(e[0].hash),f.addClass("active")),k.find(".indicator").length||k.append('<div class="indicator"></div>'),h=k.find(".indicator"),k.append(h),k.is(":visible")&&setTimeout(function(){h.css({right:t(e)}),h.css({left:u(e)})},0),a(window).off("resize.tabs-"+j).on("resize.tabs-"+j,function(){n=k.width(),p=Math.max(n,k[0].scrollWidth)/m.length,q<0&&(q=0),0!==p&&0!==n&&(h.css({right:t(e)}),h.css({left:u(e)}))}),b.swipeable?(m.each(function(){var b=a(Materialize.escapeHash(this.hash));b.addClass("carousel-item"),o=o.add(b)}),g=o.wrapAll('<div class="tabs-content carousel"></div>'),o.css("display",""),a(".tabs-content.carousel").carousel({fullWidth:!0,noWrap:!0,onCycleTo:function(a){if(!r){var b=q;q=g.index(a),e=m.eq(q),v(b)}}})):m.not(e).each(function(){a(Materialize.escapeHash(this.hash)).hide()}),k.off("click.tabs").on("click.tabs","a",function(c){if(a(this).parent().hasClass("disabled"))return void c.preventDefault();if(!a(this).attr("target")){r=!0,n=k.width(),p=Math.max(n,k[0].scrollWidth)/m.length,e.removeClass("active");var d=f;e=a(this),f=a(Materialize.escapeHash(this.hash)),m=k.find("li.tab a");e.position();e.addClass("active"),prev_index=q,q=m.index(a(this)),q<0&&(q=0),b.swipeable?o.length&&o.carousel("set",q):(void 0!==f&&(f.show(),f.addClass("active"),"function"==typeof b.onShow&&b.onShow.call(this,f)),void 0===d||d.is(f)||(d.hide(),d.removeClass("active"))),i=setTimeout(function(){r=!1},s),v(prev_index),c.preventDefault()}})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tabs"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id")&&a("#"+f.attr("data-tooltip-id")).remove(),f.attr("data-tooltip-id",e);var g,h,i,j,k,l,m=function(){g=f.attr("data-html")?"true"===f.attr("data-html"):c.html,h=f.attr("data-delay"),h=void 0===h||""===h?c.delay:h,i=f.attr("data-position"),i=void 0===i||""===i?c.position:i,j=f.attr("data-tooltip"),j=void 0===j||""===j?c.tooltip:j};m();var n=function(){var b=a('<div class="material-tooltip"></div>');return j=g?a("<span></span>").html(j):a("<span></span>").text(j),b.append(j).appendTo(a("body")).attr("id",e),l=a('<div class="backdrop"></div>'),l.appendTo(b),b};k=n(),f.off("mouseenter.tooltip mouseleave.tooltip");var o,p=!1;f.on({"mouseenter.tooltip":function(a){var c=function(){m(),p=!0,k.velocity("stop"),l.velocity("stop"),k.css({visibility:"visible",left:"0px",top:"0px"});var a,c,e,g=f.outerWidth(),h=f.outerHeight(),j=k.outerHeight(),n=k.outerWidth(),o="0px",q="0px",r=l[0].offsetWidth,s=l[0].offsetHeight,t=8,u=8,v=0;"top"===i?(a=f.offset().top-j-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="-10px",l.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:j,marginLeft:n/2-r/2})):"left"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left-n-d,e=b(c,a,n,j),q="-10px",l.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:j/2,marginLeft:n})):"right"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left+g+d,e=b(c,a,n,j),q="+10px",l.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:j/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="+10px",l.css({top:0,left:0,marginLeft:n/2-r/2})),k.css({top:e.y,left:e.x}),t=Math.SQRT2*n/parseInt(r),u=Math.SQRT2*j/parseInt(s),v=Math.max(t,u),k.velocity({translateY:o,translateX:q},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),l.css({visibility:"visible"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:v,scaleY:v},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})};o=setTimeout(c,h)},"mouseleave.tooltip":function(){p=!1,clearTimeout(o),setTimeout(function(){p!==!0&&(k.velocity({opacity:0,translateY:0,translateX:0},{duration:225,queue:!1}),l.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){l.css({visibility:"hidden"}),k.css({visibility:"hidden"}),p=!1}}))},225)}})}))};var b=function(b,c,d,e){var f=b,g=c;return f<0?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),g<0?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g}};a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||c.className.indexOf("waves-effect")===-1)){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;l<0&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&d.className.indexOf("waves-effect")!==-1)continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;f<g;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);e<0&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.opacity=0,Vel(g,{translateY:"-35px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h,i=b;null!=i&&(h=setInterval(function(){null===g.parentNode&&window.clearInterval(h),g.classList.contains("panning")||(i-=20),i<=0&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(h))},20))},function(a){var b={init:function(b){var c={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0};b=a.extend(c,b),a(this).each(function(){var c=a(this),d=c.attr("data-activates"),e=a("#"+d);300!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('.drag-target[data-sidenav="'+d+'"]');b.draggable?(f.length&&f.remove(),f=a('<div class="drag-target"></div>').attr("data-sidenav",d),a("body").append(f)):f=a(),"left"==b.edge?(e.css("transform","translateX(-100%)"),f.css({left:0})):(e.addClass("right-aligned").css("transform","translateX(100%)"),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("transform","translateX(0)"),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").length&&i?g(!0):e.css("transform","translateX(0%)"):i===!1&&("left"===b.edge?e.css("transform","translateX(-100%)"):e.css("transform","translateX(100%)"))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){g()});var g=function(c){h=!1,i=!1,a("body").css({overflow:"",width:""}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))},h=!1,i=!1;b.draggable&&(f.on("click",function(){i&&g()}),f.hammer({prevent_default:!1}).bind("pan",function(c){if("touch"==c.gesture.pointerType){var d=(c.gesture.direction,c.gesture.center.x),f=(c.gesture.center.y,c.gesture.velocityX,a("body")),h=a("#sidenav-overlay"),j=f.innerWidth();if(f.css("overflow","hidden"),f.width(j),0===h.length&&(h=a('<div id="sidenav-overlay"></div>'),h.css("opacity",0).click(function(){g()}),a("body").append(h)),"left"===b.edge&&(d>b.menuWidth?d=b.menuWidth:d<0&&(d=0)),"left"===b.edge)d<b.menuWidth/2?i=!1:d>=b.menuWidth/2&&(i=!0),e.css("transform","translateX("+(d-b.menuWidth)+"px)");else{d<window.innerWidth-b.menuWidth/2?i=!0:d>=window.innerWidth-b.menuWidth/2&&(i=!1);var k=d-b.menuWidth/2;k<0&&(k=0),e.css("transform","translateX("+k+"px)")}var l;"left"===b.edge?(l=d/b.menuWidth,h.velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((d-window.innerWidth)/b.menuWidth),h.velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=a("#sidenav-overlay"),g=c.gesture.velocityX,j=c.gesture.center.x,k=j-b.menuWidth,l=j-b.menuWidth/2;k>0&&(k=0),l<0&&(l=0),h=!1,"left"===b.edge?i&&g<=.3||g<-.5?(0!==k&&e.velocity({translateX:[0,k]},{duration:300,queue:!1,easing:"easeOutQuad"}),d.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""}),i=!0):(!i||g>.3)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[-1*b.menuWidth-10,k]},{duration:200,queue:!1,easing:"easeOutQuad"}),d.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):i&&g>=-.3||g>.5?(0!==l&&e.velocity({translateX:[0,l]},{duration:300,queue:!1,easing:"easeOutQuad"}),d.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0}),i=!0):(!i||g<-.3)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[b.menuWidth+10,l]},{duration:200,queue:!1,easing:"easeOutQuad"}),d.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}})),c.off("click.sidenav").on("click.sidenav",function(){if(i===!0)i=!1,h=!1,g();else{var c=a("body"),d=a('<div id="sidenav-overlay"></div>'),j=c.innerWidth();c.css("overflow","hidden"),c.width(j),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({translateX:[0,-1*b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({translateX:[0,b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),d.css("opacity",0).click(function(){i=!1,h=!1,g(),d.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(d),d.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){i=!0,h=!1}})}return!1})})},destroy:function(){var b=a("#sidenav-overlay"),c=a('.drag-target[data-sidenav="'+a(this).attr("data-activates")+'"]');b.trigger("click"),c.remove(),a(this).off("click"),b.remove()},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var g=a();return a.each(f,function(a,f){if(f.height()>0){var h=f.offset().top,i=f.offset().left,j=i+f.width(),k=h+f.height(),l=!(i>c||j<e||h>d||k<b);l&&g.push(f)}}),g}function c(c){++i;var d=e.scrollTop(),f=e.scrollLeft(),h=f+e.width(),k=d+e.height(),l=b(d+j.top+c||200,h+j.right,k+j.bottom,f+j.left);a.each(l,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",i)}),a.each(g,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==i&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),g=l}function d(){e.trigger("scrollSpy:winSize")}var e=a(window),f=[],g=[],h=!1,i=0,j={top:0,right:0,bottom:0,left:0};a.scrollSpy=function(b,d){var g={throttle:100,scrollOffset:200};d=a.extend(g,d);var i=[];b=a(b),b.each(function(b,c){f.push(a(c)),a(c).data("scrollSpy:id",b),a('a[href="#'+a(c).attr("id")+'"]').click(function(b){b.preventDefault();var c=a(Materialize.escapeHash(this.hash)).offset().top+1;a("html, body").animate({scrollTop:c-d.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),j.top=d.offsetTop||0,j.right=d.offsetRight||0,j.bottom=d.offsetBottom||0,j.left=d.offsetLeft||0;var k=Materialize.throttle(function(){c(d.scrollOffset)},d.throttle||100),l=function(){a(document).ready(k)};return h||(e.on("scroll",l),e.on("resize",l),h=!0),setTimeout(l,0),b.on("scrollSpy:enter",function(){i=a.grep(i,function(a){return 0!=a.height()});var b=a(this);i[0]?(a('a[href="#'+i[0].attr("id")+'"]').removeClass("active"),b.data("scrollSpy:id")<i[0].data("scrollSpy:id")?i.unshift(a(this)):i.push(a(this))):i.push(a(this)),a('a[href="#'+i[0].attr("id")+'"]').addClass("active")}),b.on("scrollSpy:exit",function(){if(i=a.grep(i,function(a){return 0!=a.height()}),i[0]){a('a[href="#'+i[0].attr("id")+'"]').removeClass("active");var b=a(this);i=a.grep(i,function(a){return a.attr("id")!=b.attr("id")}),i[0]&&a('a[href="#'+i[0].attr("id")+'"]').addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return e},b=b||{throttle:100},e.on("resize",Materialize.throttle(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),d=b.css("font-size"),f=b.css("line-height");d&&e.css("font-size",d),c&&e.css("font-family",c),f&&e.css("line-height",f),"off"===b.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(b.val()+"\n");var g=e.html().replace(/\n/g,"<br>");e.html(g),b.is(":visible")?e.css("width",b.width()):e.css("width",a(window).width()/2),b.data("original-height")<=e.height()?b.css("height",e.height()):b.val().length<b.data("previous-length")&&b.css("height",b.data("original-height")),b.data("previous-length",b.val().length)}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){var d=a(this);a(c).val().length>0||c.autofocus||void 0!==d.attr("placeholder")?d.siblings("label").addClass("active"):a(c)[0].validity?d.siblings("label").toggleClass("active",a(c)[0].validity.badInput===!0):d.siblings("label").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){0===a(this).val().length&&void 0===a(this).attr("placeholder")||a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, .prefix").addClass("active")}),a(document).on("blur",c,function(){var b=a(this),c=".prefix";0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&(c+=", label"),b.siblings(c).removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("data-length"),c=parseInt(a.attr("data-length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&d<=c||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d="input[type=radio], input[type=checkbox]";a(document).on("keyup.radio",d,function(b){if(9===b.which){a(this).addClass("tabbed");var c=a(this);return void c.one("blur",function(b){a(this).removeClass("tabbed")})}});var e=a(".hiddendiv").first();e.length||(e=a('<div class="hiddendiv common"></div>'),a("body").append(e));var f=".materialize-textarea";a(f).each(function(){var b=a(this);b.data("original-height",b.height()),b.data("previous-length",b.val().length)}),a("body").on("keyup keydown autoresize",f,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var g="input[type=range]",h=!1;a(g).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var i=function(a){var b=parseInt(a.parent().css("padding-left")),c=-7+b+"px";a.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:c},{duration:300,easing:"easeOutExpo"})},j=function(a){var b=a.width()-15,c=parseFloat(a.attr("max")),d=parseFloat(a.attr("min")),e=(parseFloat(a.val())-d)/(c-d);return e*b},k=".range-field";a(document).on("change",g,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val()),c.hasClass("active")||i(c);var d=j(a(this));c.addClass("active").css("left",d)}),a(document).on("mousedown touchstart",g,function(b){var c=a(this).siblings(".thumb");if(c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),h=!0,a(this).addClass("active"),c.hasClass("active")||i(c),"input"!==b.type){var d=j(a(this));c.addClass("active").css("left",d)}}),a(document).on("mouseup touchend",k,function(){h=!1,a(this).removeClass("active")}),a(document).on("input mousemove touchmove",k,function(b){var c=a(this).children(".thumb"),d=a(this).find(g);if(h){c.hasClass("active")||i(c);var e=j(d);c.addClass("active").css("left",e),c.find(".value").html(c.siblings(g).val())}}),a(document).on("mouseout touchleave",k,function(){if(!h){var b=a(this).children(".thumb"),c=parseInt(a(this).css("padding-left")),d=7+c+"px";b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:d},{duration:100}),b.removeClass("active")}}),a.fn.autocomplete=function(b){var c={data:{},limit:1/0,onAutocomplete:null,minLength:1};return b=a.extend(c,b),this.each(function(){var c,d=a(this),e=b.data,f=0,g=-1,h=d.closest(".input-field");if(!a.isEmptyObject(e)){var i,j=a('<ul class="autocomplete-content dropdown-content"></ul>');h.length?(i=h.children(".autocomplete-content.dropdown-content").first(),i.length||h.append(j)):(i=d.next(".autocomplete-content.dropdown-content"),i.length||d.after(j)),i.length&&(j=i);var k=function(a,b){var c=b.find("img"),d=b.text().toLowerCase().indexOf(""+a.toLowerCase()),e=d+a.length-1,f=b.text().slice(0,d),g=b.text().slice(d,e+1),h=b.text().slice(e+1);b.html("<span>"+f+"<span class='highlight'>"+g+"</span>"+h+"</span>"),c.length&&b.prepend(c)},l=function(){g=-1,j.find(".active").removeClass("active")},m=function(){j.empty(),l(),c=void 0};d.off("blur.autocomplete").on("blur.autocomplete",function(){m()}),d.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete",function(g){f=0;var h=d.val().toLowerCase();if(13!==g.which&&38!==g.which&&40!==g.which){if(c!==h&&(m(),h.length>=b.minLength))for(var i in e)if(e.hasOwnProperty(i)&&i.toLowerCase().indexOf(h)!==-1&&i.toLowerCase()!==h){if(f>=b.limit)break;var l=a("<li></li>");e[i]?l.append('<img src="'+e[i]+'" class="right circle"><span>'+i+"</span>"):l.append("<span>"+i+"</span>"),j.append(l),k(h,l),f++}c=h}}),d.off("keydown.autocomplete").on("keydown.autocomplete",function(a){var b,c=a.which,d=j.children("li").length,e=j.children(".active").first();return 13===c&&g>=0?(b=j.children("li").eq(g),void(b.length&&(b.trigger("mousedown.autocomplete"),a.preventDefault()))):void(38!==c&&40!==c||(a.preventDefault(),
38===c&&g>0&&g--,40===c&&g<d-1&&g++,e.removeClass("active"),g>=0&&j.children("li").eq(g).addClass("active")))}),j.on("mousedown.autocomplete touchstart.autocomplete","li",function(){var c=a(this).text().trim();d.val(c),d.trigger("change"),m(),"function"==typeof b.onAutocomplete&&b.onAutocomplete.call(this,c)})}})}}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=e===-1;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f}function d(a,b){for(var c="",d=0,e=a.length;d<e;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c)}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=!!d.attr("multiple"),f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function(b,c,d){var f=c.is(":disabled")?"disabled ":"",g="optgroup-option"===d?"optgroup-option ":"",h=e?'<input type="checkbox"'+f+"/><label></label>":"",j=c.data("icon"),k=c.attr("class");if(j){var l="";return k&&(l=' class="'+k+'"'),i.append(a('<li class="'+f+g+'"><img alt="" src="'+j+'"'+l+"><span>"+h+c.html()+"</span></li>")),!0}i.append(a('<li class="'+f+g+'"><span>'+h+c.html()+"</span></li>"))};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this),"optgroup-option")})}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b}),h=c(k,f,d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),r(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b()}g.stopPropagation()})}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val();e&&b.indexOf(",")>=0&&(b=b.split(",")[0]);var c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase()})[0];r(i,c,!0)}},click:function(a){a.stopPropagation()}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected")}),i.hover(function(){l=!0},function(){l=!1}),a(window).on({click:function(){e&&(l||q.trigger("close"))}}),e&&d.find("option:selected:not(:disabled)").each(function(){var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0)});var r=function(b,c,d){if(c){b.find("li.selected").removeClass("selected");var f=a(c);f.addClass("selected"),e&&!d||i.scrollTo(f)}},s=[],t=function(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&d.indexOf(b.which)===-1){s.push(c);var f=s.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f)})[0];g&&r(i,g)}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"))}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],r(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&r(i,g)),setTimeout(function(){s=[]},1e3)}};q.on("keydown",t)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=j.length?a=0:a<0&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"))}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("> li"),k=i.find(".active").index();k!=-1&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),i.height(b.height)),j.find(".caption").each(function(){c(a(this),0)}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b))}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),f.append(e)}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),g=setInterval(function(){k=i.find(".active").index(),d(k+1)},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX,e=a.gesture.velocityY;$curr_slide=i.find(".active"),Math.abs(d)>Math.abs(e)&&$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||d<-.65)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var f;m&&(f=$curr_slide.next(),0===f.length&&(f=j.first()),f.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(f=$curr_slide.prev(),0===f.length&&(f=j.last()),f.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),!n&&!m||j.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval))}),h.on("sliderPause",function(){clearInterval(g)}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1)}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")},next:function(){a(this).trigger("sliderNext")},prev:function(){a(this).trigger("sliderPrev")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})))})})}(jQuery),function(a){var b={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{}};a(document).ready(function(){a(document).on("click",".chip .close",function(b){var c=a(this).closest(".chips");c.attr("data-initialized")||a(this).closest(".chip").remove()})}),a.fn.material_chip=function(c){var d=this;if(this.$el=a(this),this.$document=a(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===c)return this.$el.data("chips");var e=a.extend({},b,c);d.hasAutocomplete=!a.isEmptyObject(e.autocompleteOptions.data),this.init=function(){var b=0;d.$el.each(function(){var c=a(this),f=Materialize.guid();d.chipId=f,e.data&&e.data instanceof Array||(e.data=[]),c.data("chips",e.data),c.attr("data-index",b),c.attr("data-initialized",!0),c.hasClass(d.SELS.CHIPS)||c.addClass("chips"),d.chips(c,f),b++})},this.handleEvents=function(){var b=d.SELS;d.$document.off("click.chips-focus",b.CHIPS).on("click.chips-focus",b.CHIPS,function(c){a(c.target).find(b.INPUT).focus()}),d.$document.off("click.chips-select",b.CHIP).on("click.chips-select",b.CHIP,function(c){var e=a(c.target);if(e.length){var f=e.hasClass("selected"),g=e.closest(b.CHIPS);a(b.CHIP).removeClass("selected"),f||d.selectChip(e.index(),g)}}),d.$document.off("keydown.chips").on("keydown.chips",function(c){if(!a(c.target).is("input, textarea")){var e,f=d.$document.find(b.CHIP+b.SELECTED_CHIP),g=f.closest(b.CHIPS),h=f.siblings(b.CHIP).length;if(f.length)if(8===c.which||46===c.which){c.preventDefault(),e=f.index(),d.deleteChip(e,g);var i=null;e+1<h?i=e:e!==h&&e+1!==h||(i=h-1),i<0&&(i=null),null!==i&&d.selectChip(i,g),h||g.find("input").focus()}else if(37===c.which){if(e=f.index()-1,e<0)return;a(b.CHIP).removeClass("selected"),d.selectChip(e,g)}else if(39===c.which){if(e=f.index()+1,a(b.CHIP).removeClass("selected"),e>h)return void g.find("input").focus();d.selectChip(e,g)}}}),d.$document.off("focusin.chips",b.CHIPS+" "+b.INPUT).on("focusin.chips",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target).closest(b.CHIPS);d.addClass("focus"),d.siblings("label, .prefix").addClass("active"),a(b.CHIP).removeClass("selected")}),d.$document.off("focusout.chips",b.CHIPS+" "+b.INPUT).on("focusout.chips",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target).closest(b.CHIPS);d.removeClass("focus"),d.data("chips").length||d.siblings("label").removeClass("active"),d.siblings(".prefix").removeClass("active")}),d.$document.off("keydown.chips-add",b.CHIPS+" "+b.INPUT).on("keydown.chips-add",b.CHIPS+" "+b.INPUT,function(c){var e=a(c.target),f=e.closest(b.CHIPS),g=f.children(b.CHIP).length;if(13===c.which){if(d.hasAutocomplete&&f.find(".autocomplete-content.dropdown-content").length&&f.find(".autocomplete-content.dropdown-content").children().length)return;return c.preventDefault(),d.addChip({tag:e.val()},f),void e.val("")}if((8===c.keyCode||37===c.keyCode)&&""===e.val()&&g)return c.preventDefault(),d.selectChip(g-1,f),void e.blur()}),d.$document.off("click.chips-delete",b.CHIPS+" "+b.DELETE).on("click.chips-delete",b.CHIPS+" "+b.DELETE,function(c){var e=a(c.target),f=e.closest(b.CHIPS),g=e.closest(b.CHIP);c.stopPropagation(),d.deleteChip(g.index(),f),f.find("input").focus()})},this.chips=function(b,c){b.empty(),b.data("chips").forEach(function(a){b.append(d.renderChip(a))}),b.append(a('<input id="'+c+'" class="input" placeholder="">')),d.setPlaceholder(b);var f=b.next("label");f.length&&(f.attr("for",c),b.data("chips").length&&f.addClass("active"));var g=a("#"+c);d.hasAutocomplete&&(e.autocompleteOptions.onAutocomplete=function(a){d.addChip({tag:a},b),g.val(""),g.focus()},g.autocomplete(e.autocompleteOptions))},this.renderChip=function(b){if(b.tag){var c=a('<div class="chip"></div>');return c.text(b.tag),c.append(a('<i class="material-icons close">close</i>')),c}},this.setPlaceholder=function(a){a.data("chips").length&&e.placeholder?a.find("input").prop("placeholder",e.placeholder):!a.data("chips").length&&e.secondaryPlaceholder&&a.find("input").prop("placeholder",e.secondaryPlaceholder)},this.isValid=function(a,b){for(var c=a.data("chips"),d=!1,e=0;e<c.length;e++)if(c[e].tag===b.tag)return void(d=!0);return""!==b.tag&&!d},this.addChip=function(a,b){if(d.isValid(b,a)){for(var c=d.renderChip(a),e=[],f=b.data("chips"),g=0;g<f.length;g++)e.push(f[g]);e.push(a),b.data("chips",e),c.insertBefore(b.find("input")),b.trigger("chip.add",a),d.setPlaceholder(b)}},this.deleteChip=function(a,b){var c=b.data("chips")[a];b.find(".chip").eq(a).remove();for(var e=[],f=b.data("chips"),g=0;g<f.length;g++)g!==a&&e.push(f[g]);b.data("chips",e),b.trigger("chip.delete",c),d.setPlaceholder(b)},this.selectChip=function(a,b){var c=b.find(".chip").eq(a);c&&!1===c.hasClass("selected")&&(c.addClass("selected"),b.trigger("chip.select",b.data("chips")[a]))},this.getChipsElement=function(a,b){return b.eq(a)},this.init(),this.handleEvents()}}(jQuery),function(a){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return"remove"===b?(this.each(function(){(id=a(this).data("pushpin-id"))&&(a(window).off("scroll."+id),a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;a(this).data("pushpin-id",e),d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})}))}}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(b){var d=a(this);c(d)}),a(document).on("click.fabClickToggle",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f)}),a(document).on("click.fabToolbar",".fixed-action-btn.toolbar > a",function(b){var c=a(this),e=c.parent();d(e)})}),a.fn.extend({openFAB:function(){b(a(this))},closeFAB:function(){c(a(this))},openToolbar:function(){d(a(this))},closeToolbar:function(){e(a(this))}});var b=function(b){var c=b;if(c.hasClass("active")===!1){var d,e,f=c.hasClass("horizontal");f===!0?e=40:d=40,c.addClass("active"),c.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:d+"px",translateX:e+"px"},{duration:0});var g=0;c.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:g}),g+=40})}},c=function(a){var b,c,d=a,e=d.hasClass("horizontal");e===!0?c=40:b=40,d.removeClass("active");d.find("ul .btn-floating").velocity("stop",!0),d.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80})},d=function(b){if("true"!==b.attr("data-open")){var c,d,f,g=window.innerWidth,h=window.innerHeight,i=b[0].getBoundingClientRect(),j=b.find("> a").first(),k=b.find("> ul").first(),l=a('<div class="fab-backdrop"></div>'),m=j.css("background-color");j.append(l),c=i.left-g/2+i.width/2,d=h-i.bottom,f=g/l.width(),b.attr("data-origin-bottom",i.bottom),b.attr("data-origin-left",i.left),b.attr("data-origin-width",i.width),b.addClass("active"),b.attr("data-open",!0),b.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+c+"px)",transition:"none"}),j.css({transform:"translateY("+-d+"px)",transition:"none"}),l.css({"background-color":m}),setTimeout(function(){b.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),j.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){b.css({overflow:"hidden","background-color":m}),l.css({transform:"scale("+f+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),k.find("> li > a").css({opacity:1}),a(window).on("scroll.fabToolbarClose",function(){e(b),a(window).off("scroll.fabToolbarClose"),a(document).off("click.fabToolbarClose")}),a(document).on("click.fabToolbarClose",function(c){a(c.target).closest(k).length||(e(b),a(window).off("scroll.fabToolbarClose"),a(document).off("click.fabToolbarClose"))})},100)},0)}},e=function(a){if("true"===a.attr("data-open")){var b,c,d,e=window.innerWidth,f=window.innerHeight,g=a.attr("data-origin-width"),h=a.attr("data-origin-bottom"),i=a.attr("data-origin-left"),j=a.find("> .btn-floating").first(),k=a.find("> ul").first(),l=a.find(".fab-backdrop"),m=j.css("background-color");b=i-e/2+g/2,c=f-h,d=e/l.width(),a.removeClass("active"),a.attr("data-open",!1),a.css({"background-color":"transparent",transition:"none"}),j.css({transition:"none"}),l.css({transform:"scale(0)","background-color":m}),k.find("> li > a").css({opacity:""}),setTimeout(function(){l.remove(),a.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-b+"px,0,0)"}),j.css({overflow:"",transform:"translate3d(0,"+c+"px,0)"}),setTimeout(function(){a.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),j.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=typeof b)return;c=b}c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;e<100&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=typeof b)return;c=b}var d=0;c.find("li").velocity({translateX:"-100px"},{duration:0}),c.find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:d,easing:[60,10]}),d+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||h<-.75)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){var b=!1;Materialize.scrollFire=function(a){var c=function(){for(var b=window.pageYOffset+window.innerHeight,c=0;c<a.length;c++){var d=a[c],e=d.selector,f=d.offset,g=d.callback,h=document.querySelector(e);if(null!==h){var i=h.getBoundingClientRect().top+window.pageYOffset;if(b>i+f&&d.done!==!0){if("function"==typeof g)g.call(this,h);else if("string"==typeof g){var j=new Function(g);j(h)}d.done=!0}}}},d=Materialize.throttle(function(){c()},a.throttle||100);b||(window.addEventListener("scroll",d),window.addEventListener("resize",d),b=!0),setTimeout(d,0)}}(jQuery),function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root.eq(0).focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root.eq(0).focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root.eq(0).focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root.eq(0).focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),"select"!=e&&"clear"!=e||w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(a<10?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),
e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=j.item.enable===-1,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&l<0)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,c.item.enable===-1?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:!(!b.isPlainObject(a)||!b.isPlainObject(c))&&(d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to))},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):!(!b.isPlainObject(a)||!b.isPlainObject(c))&&d.overlapRanges(a,c)},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(b.enable==-1?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;i<g;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;i<g;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;i<g;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),i<l){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:!(!d||b.$node.val()!==o)||null,activedescendant:!!e||null,disabled:!!g||null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("data-length"),c=+a(this).val().length,d=c<=b;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=b.parent().find('span[class="character-counter"]');c.length||(c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),b.parent().append(c))}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=a(this),f=e.parent().find('span[class="character-counter"]');if(!f.length){var g=void 0!==e.attr("data-length");g&&(e.on("input",b),e.on("focus",b),e.on("blur",d),c(e))}})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery),function(a){var b={init:function(b){var c={duration:200,dist:-100,shift:0,padding:0,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null};b=a.extend(c,b);var d=Materialize.objectSelectorString(a(this));return this.each(function(c){function e(){"undefined"!=typeof window.ontouchstart&&(O[0].addEventListener("touchstart",n),O[0].addEventListener("touchmove",o),O[0].addEventListener("touchend",p)),O[0].addEventListener("mousedown",n),O[0].addEventListener("mousemove",o),O[0].addEventListener("mouseup",p),O[0].addEventListener("mouseleave",p),O[0].addEventListener("click",l)}function f(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function g(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY}function h(a){return a>=x?a%x:a<0?h(x+a%x):a}function i(c){E=!0,O.hasClass("scrolling")||O.addClass("scrolling"),null!=N&&window.clearTimeout(N),N=window.setTimeout(function(){E=!1,O.removeClass("scrolling")},b.duration);var d,e,f,g,i,j,k,l=u;if(t="number"==typeof c?c:t,u=Math.floor((t+w/2)/w),f=t-u*w,g=f<0?1:-1,i=-g*f*2/w,e=x>>1,b.fullWidth?k="translateX(0)":(k="translateX("+(O[0].clientWidth-r)/2+"px) ",k+="translateY("+(O[0].clientHeight-s)/2+"px)"),P){var m=u%x,n=M.find(".indicator-item.active");n.index()!==m&&(n.removeClass("active"),M.find(".indicator-item").eq(m).addClass("active"))}for((!b.noWrap||u>=0&&u<x)&&(j=q[h(u)],a(j).hasClass("active")||(O.find(".carousel-item").removeClass("active"),a(j).addClass("active")),j.style[F]=k+" translateX("+-f/2+"px) translateX("+g*b.shift*i*d+"px) translateZ("+b.dist*i+"px)",j.style.zIndex=0,b.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*i,j.style.opacity=tweenedOpacity,j.style.display="block"),d=1;d<=e;++d)b.fullWidth?(zTranslation=b.dist,tweenedOpacity=d===e&&f<0?1-i:1):(zTranslation=b.dist*(2*d+i*g),tweenedOpacity=1-.2*(2*d+i*g)),(!b.noWrap||u+d<x)&&(j=q[h(u+d)],j.style[F]=k+" translateX("+(b.shift+(w*d-f)/2)+"px) translateZ("+zTranslation+"px)",j.style.zIndex=-d,j.style.opacity=tweenedOpacity,j.style.display="block"),b.fullWidth?(zTranslation=b.dist,tweenedOpacity=d===e&&f>0?1-i:1):(zTranslation=b.dist*(2*d-i*g),tweenedOpacity=1-.2*(2*d-i*g)),(!b.noWrap||u-d>=0)&&(j=q[h(u-d)],j.style[F]=k+" translateX("+(-b.shift+(-w*d-f)/2)+"px) translateZ("+zTranslation+"px)",j.style.zIndex=-d,j.style.opacity=tweenedOpacity,j.style.display="block");if((!b.noWrap||u>=0&&u<x)&&(j=q[h(u)],j.style[F]=k+" translateX("+-f/2+"px) translateX("+g*b.shift*i+"px) translateZ("+b.dist*i+"px)",j.style.zIndex=0,b.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*i,j.style.opacity=tweenedOpacity,j.style.display="block"),l!==u&&"function"==typeof b.onCycleTo){var o=O.find(".carousel-item").eq(h(u));b.onCycleTo.call(this,o,J)}}function j(){var a,b,c,d;a=Date.now(),b=a-H,H=a,c=t-G,G=t,d=1e3*c/(1+b),D=.8*d+.2*D}function k(){var a,c;B&&(a=Date.now()-H,c=B*Math.exp(-a/b.duration),c>2||c<-2?(i(C-c),requestAnimationFrame(k)):i(C))}function l(c){if(J)return c.preventDefault(),c.stopPropagation(),!1;if(!b.fullWidth){var d=a(c.target).closest(".carousel-item").index(),e=u%x-d;0!==e&&(c.preventDefault(),c.stopPropagation()),m(d)}}function m(a){var c=u%x-a;b.noWrap||(c<0?Math.abs(c+x)<Math.abs(c)&&(c+=x):c>0&&Math.abs(c-x)<c&&(c-=x)),c<0?O.trigger("carouselNext",[Math.abs(c)]):c>0&&O.trigger("carouselPrev",[c])}function n(a){a.preventDefault(),v=!0,J=!1,K=!1,z=f(a),A=g(a),D=B=0,G=t,H=Date.now(),clearInterval(I),I=setInterval(j,100)}function o(a){var b,c,d;if(v)if(b=f(a),y=g(a),c=z-b,d=Math.abs(A-y),d<30&&!K)(c>2||c<-2)&&(J=!0,z=b,i(t+c));else{if(J)return a.preventDefault(),a.stopPropagation(),!1;K=!0}if(J)return a.preventDefault(),a.stopPropagation(),!1}function p(a){if(v)return v=!1,clearInterval(I),C=t,(D>10||D<-10)&&(B=.9*D,C=t+B),C=Math.round(C/w)*w,b.noWrap&&(C>=w*(x-1)?C=w*(x-1):C<0&&(C=0)),B=C-t,H=Date.now(),requestAnimationFrame(k),J&&(a.preventDefault(),a.stopPropagation()),!1}var q,r,s,t,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L=d+c,M=a('<ul class="indicators"></ul>'),N=null,O=a(this),P=O.attr("data-indicators")||b.indicators,Q=function(){var b=O.find(".carousel-item img").first();if(b.length)b.prop("complete")?O.css("height",b.height()):b.on("load",function(){O.css("height",a(this).height())});else{var c=O.find(".carousel-item").first().height();O.css("height",c)}};return b.fullWidth&&(b.dist=0,Q(),P&&O.find(".carousel-fixed-item").addClass("with-indicators")),O.hasClass("initialized")?(a(window).trigger("resize"),a(this).trigger("carouselNext",[1e-6]),!0):(O.addClass("initialized"),v=!1,t=C=0,q=[],r=O.find(".carousel-item").first().innerWidth(),s=O.find(".carousel-item").first().innerHeight(),w=2*r+b.padding,O.find(".carousel-item").each(function(b){if(q.push(a(this)[0]),P){var c=a('<li class="indicator-item"></li>');0===b&&c.addClass("active"),c.click(function(b){b.stopPropagation();var c=a(this).index();m(c)}),M.append(c)}}),P&&O.append(M),x=q.length,F="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"==typeof document.body.style[b]||(F=b,!1)}),a(window).off("resize.carousel-"+L).on("resize.carousel-"+L,function(){b.fullWidth?(r=O.find(".carousel-item").first().innerWidth(),s=O.find(".carousel-item").first().innerHeight(),w=2*r+b.padding,t=2*u*r,C=t):i()}),e(),i(t),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),C=w*Math.round(t/w)+w*b,t!==C&&(B=C-t,H=Date.now(),requestAnimationFrame(k))}),a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),C=w*Math.round(t/w)-w*b,t!==C&&(B=C-t,H=Date.now(),requestAnimationFrame(k))}),void a(this).on("carouselSet",function(a,b){void 0===b&&(b=0),m(b)}))})},next:function(b){a(this).trigger("carouselNext",[b])},prev:function(b){a(this).trigger("carouselPrev",[b])},set:function(b){a(this).trigger("carouselSet",[b])}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments)}}(jQuery),function(a){var b={init:function(b){return this.each(function(){var c=a("#"+a(this).attr("data-activates")),d=(a("body"),a(this)),e=d.parent(".tap-target-wrapper"),f=e.find(".tap-target-wave"),g=e.find(".tap-target-origin"),h=d.find(".tap-target-content");e.length||(e=d.wrap(a('<div class="tap-target-wrapper"></div>')).parent()),h.length||(h=a('<div class="tap-target-content"></div>'),d.append(h)),f.length||(f=a('<div class="tap-target-wave"></div>'),g.length||(g=c.clone(!0,!0),g.addClass("tap-target-origin"),g.removeAttr("id"),g.removeAttr("style"),f.append(g)),e.append(f));var i=function(){e.is(".open")||(e.addClass("open"),setTimeout(function(){g.off("click.tapTarget").on("click.tapTarget",function(a){j(),g.off("click.tapTarget")}),a(document).off("click.tapTarget").on("click.tapTarget",function(b){j(),a(document).off("click.tapTarget")});var b=Materialize.throttle(function(){k()},200);a(window).off("resize.tapTarget").on("resize.tapTarget",b)},0))},j=function(){e.is(".open")&&(e.removeClass("open"),g.off("click.tapTarget"),a(document).off("click.tapTarget"),a(window).off("resize.tapTarget"))},k=function(){var b="fixed"===c.css("position");if(!b)for(var g=c.parents(),i=0;i<g.length&&!(b="fixed"==a(g[i]).css("position"));i++);var j=c.outerWidth(),k=c.outerHeight(),l=b?c.offset().top-a(document).scrollTop():c.offset().top,m=b?c.offset().left-a(document).scrollLeft():c.offset().left,n=a(window).width(),o=a(window).height(),p=n/2,q=o/2,r=m<=p,s=m>p,t=l<=q,u=l>q,v=m>=.25*n&&m<=.75*n,w=d.outerWidth(),x=d.outerHeight(),y=l+k/2-x/2,z=m+j/2-w/2,A=b?"fixed":"absolute",B=v?w:w/2+j,C=x/2,D=t?x/2:0,E=0,F=r&&!v?w/2-j:0,G=0,H=j,I=u?"bottom":"top",J=j>k?2*j:2*j,K=J,L=x/2-K/2,M=w/2-J/2,N={};N.top=t?y:"",N.right=s?n-z-w:"",N.bottom=u?o-y-x:"",N.left=r?z:"",N.position=A,e.css(N),h.css({width:B,height:C,top:D,right:G,bottom:E,left:F,padding:H,verticalAlign:I}),f.css({top:L,left:M,width:J,height:K})};"open"==b&&(k(),i()),"close"==b&&j()})},open:function(){},close:function(){}};a.fn.tapTarget=function(c){return b[c]||"object"==typeof c?b.init.apply(this,arguments):void a.error("Method "+c+" does not exist on jQuery.tap-target")}}(jQuery);

(function ( $ ) {
    $( function () {
        var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

        // Add active if form auto complete
        $( document ).on( 'change blur input', input_selector, function () {
            // Min length
            var thisDataMinLength = $( this ).data( 'min-length' ) !== undefined && $( this ).data( 'min-length' );
            if ( thisDataMinLength && $( this ).val().length < thisDataMinLength && $( this ).val().length !== 0 ) {
                $( this ).removeClass( 'valid' ).addClass( 'invalid-min' );
            } else {
                $( this ).removeClass( 'invalid-min' );
            }

            // Required
            var thisDataRequired = $( this ).data( 'required' ) !== undefined && $( this ).data( 'required' );
            if ( thisDataRequired && $( this ).val() === '' ) {
                $( this ).removeClass( 'valid' ).addClass( 'invalid-required' ).find('~ label').addClass('active');
            } else {
                $( this ).removeClass( 'invalid-required' );
            }            
        } );
    } );
})( jQuery );
// function remove event default
function removeEventDefault(e) {
    var event = e || window.event;

    if (event.preventDefault) { // если метод существует
        event.preventDefault(); // то вызвать его
    } else { // иначе вариант IE8-:
        event.returnValue = false;
    }
}
;(function ( $ ) {
    var methods = {
        init: function ( options ) {
            var defaults = {
                    onShow: null,
                    fixedItems: false,
                    indentItem: 20
                },
                options = $.extend( defaults, options );

            return this.each( function () {

                // For each set of tabs, we want to keep track of
                // which tab is active and its associated content
                var $this = $( this );

                $this.width( '100%' ).css({ opacity: 1 });

                var $active, $content, $links = $this.find( 'li a' ),
                    $links_length = $links.length,
                    $this_width = $this.width(),
                    $nav_wrap = $this.parent(),
                    $index = 0,
                    indent_all_links, i_w;


                // If the location.hash matches one of the links, use that as the active tab.
                $active = $( $links.filter() );

                function countingWidth( elements ) {
                    var $width_container = 0;

                    $( elements ).each( function ( index, el ) {
                        var $el_width = $( el ).width();

                        if ( $el_width > 0 ) {
                            $width_container = $width_container + $el_width;
                        }

                    } );

                    return $width_container;
                }

                // click nav-btn-content
                function onClickBtnSlide() {
                    $( '.nav-btn-slide' ).on( 'click', function ( event ) {
                        event.preventDefault();
                        if ( $nav_wrap.hasClass( 'nav-wrapper' ) ) {
                            if ( $nav_wrap.position().left >= 0 ) {
                                var left_nav_wrapper = $this.width() - ($nav_wrap.parent().innerWidth() - 50);
                                $nav_wrap.velocity( { "left": -left_nav_wrapper }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                            } else {
                                $nav_wrap.velocity( { "left": 0 }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                            }
                        }
                    } );
                }

                // Width items li > a
                i_w = countingWidth( $this.find( 'li a' ) );

                if ( options.fixedItems ) {
                    $nav_wrap.width( i_w + ($links_length * options.indentItem) );
                    indent_all_links = $this.width() - i_w;
                    onClickBtnSlide();
                } else {
                    indent_all_links = $this_width - i_w;
                }

                // If no match is found, use the first link or any with class 'active' as the initial active tab.
                if ( $active.length === 0 ) {
                    $active = $( this ).find( 'li a.active' ).first();
                }
                if ( $active.length === 0 ) {
                    $active = $( this ).find( 'li a' ).first();
                }

                $active.addClass( 'active' );
                $index = $links.index( $active );
                if ( $index < 0 ) {
                    $index = 0;
                }

                if ( $active[ 0 ] !== undefined ) {
                    $content = $( $active[ 0 ].hash );
                }

                // append indicator then set indicator width to tab width
                $this.append( '<div class="indicator"></div>' );
                var $indicator = $this.find( '.indicator' );

                $indicator.css( 'width', $active.width() );

                if ( $this.is( ":visible" ) ) {
                    if ( $index === 0 ) {
                        $indicator.css( { "left": ($active.parent( 'li' ).outerWidth() - $active.width()) / 2 } );
                    } else if ( $index > 0 ) {
                        $indicator.css( { "left": $active.parent( 'li' ).position().left + ( ($active.parent( 'li' ).outerWidth() - $active.width()) / 2 ) } );
                    }
                }
                // $(window).resize(function () {
                //   $this_width = $this.width();
                //   $tab_width = Math.max($this_width, $this[0].scrollWidth) / $links_length;
                //   if ($index < 0) {
                //     $index = 0;
                //   }
                //   if ($tab_width !== 0 && $this_width !== 0) {
                //     $indicator.css({"right": $this_width - (($index + 1) * $tab_width)});
                //     $indicator.css({"left": $index * $tab_width});
                //   }
                // });

                // Hide the remaining content
                $links.not( $active ).each( function () {
                    $( this.hash ).hide();
                } );


                // Bind the click event handler
                $this.on( 'click', 'a', function ( e ) {
                    if ( $( this ).parent().hasClass( 'disabled' ) ) {
                        e.preventDefault();
                        return;
                    }

                    // Act as regular link if target attribute is specified.
                    if ( !!$( this ).attr( "target" ) ) {
                        return;
                    }

                    $this_width = $this.width();

                    // Make the old tab inactive.
                    $active.removeClass( 'active' );

                    if ( $content !== undefined ) {
                        $content.hide();
                    }

                    // Update the variables with the new link and content
                    $active = $( this );
                    $content = $( this.hash );
                    $links = $this.find( 'li a' );

                    $indicator.css( 'width', $active.width() );

                    var $active_parent = $active.parent( 'li' ),
                        $active_parent_prevAll = $active_parent.prevAll( 'li' ),
                        $active_parent_prevAll_width = countingWidth( $active_parent_prevAll ),
                        active_left_position = ($active_parent_prevAll_width + ((indent_all_links / $links_length) / 2));

                    // Make the tab active.
                    $active.addClass( 'active' );
                    var $prev_index = $index;
                    $index = $links.index( $( this ) );
                    if ( $index < 0 ) {
                        $index = 0;
                    }

                    // Change url to current tab
                    // window.location.hash = $active.attr('href');

                    if ( $content !== undefined ) {
                        $content.show();
                        if ( typeof(options.onShow) === "function" ) {
                            options.onShow.call( this, $content );
                        }
                    }

                    // Update indicator
                    if ( ($index - $prev_index) >= 0 ) {
                        $indicator.velocity( { "left": active_left_position }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                    }
                    else {
                        $indicator.velocity( { "left": active_left_position }, { duration: 300, queue: false, easing: 'easeOutQuad' } );
                    }

                    // Prevent the anchor's default click action
                    e.preventDefault();
                    var $that = $( this );
                    setTimeout( function () {
                        location.href = $that.attr( 'href' );
                    }, 600 );
                } );
            } );

        },
        select_tab: function ( id ) {
            this.find( 'a[href="#' + id + '"]' ).trigger( 'click' );
        }
    };

    $.fn.navTheme = function ( methodOrOptions ) {
        if ( methods[ methodOrOptions ] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.tooltip' );
        }
    };
})( jQuery );
;(function ( $ ) {

    var methods = {
        init: function ( options ) {
            var defaults = {
                menuWidth: 300,
                edge: 'left',
                closeOnClick: false
            };
            options = $.extend( defaults, options );

            $( this ).each( function () {
                var $this = $( this );
                var menu_id = $( "#" + $this.attr( 'data-activates' ) );

                // Set to width
                if ( options.menuWidth != 300 ) {
                    menu_id.css( 'width', options.menuWidth );
                }

                if ( options.edge == 'left' ) {
                    menu_id.css( 'transform', 'translateX(-100%)' );
                } else {
                    menu_id.addClass( 'right-aligned' ) // Change text-alignment to right
                        .css( 'transform', 'translateX(100%)' );
                }

                // If fixed sidenav, bring menu out
                if ( menu_id.hasClass( 'fixed' ) ) {
                    if ( window.innerWidth > 992 ) {
                        menu_id.css( 'transform', 'translateX(0)' );
                    }
                }

                // Window resize to reset on large screens fixed
                if ( menu_id.hasClass( 'fixed' ) ) {
                    $( window ).resize( function () {
                        if ( window.innerWidth > 992 ) {
                            // Close menu if window is resized bigger than 992 and user has fixed sidenav
                            if ( menuOut ) {
                                removeMenu( true );
                            }
                            else {
                                // menu_id.removeAttr('style');
                                menu_id.css( 'transform', 'translateX(0%)' );
                                // menu_id.css('width', options.menuWidth);
                            }
                        }
                        else if ( menuOut === false ) {
                            if ( options.edge === 'left' ) {
                                menu_id.css( 'transform', 'translateX(-100%)' );
                            } else {
                                menu_id.css( 'transform', 'translateX(100%)' );
                            }

                        }

                    } );
                }

                // if closeOnClick, then add close event for all a tags in side sideNav
                if ( options.closeOnClick === true ) {
                    menu_id.on( "click.itemclick", "a:not(.collapsible-header)", function () {
                        removeMenu();
                    } );
                }

                function removeMenu( restoreNav ) {
                    panning = false;
                    menuOut = false;
                    // Reenable scrolling
                    $( 'body' ).css( {
                        overflow: '',
                        width: ''
                    } );

                    if ( options.edge === 'left' ) {
                        // Reset phantom div
                        menu_id.velocity(
                            { 'translateX': '-100%' },
                            {
                                duration: 200,
                                queue: false,
                                easing: 'easeOutCubic',
                                complete: function () {
                                    if ( restoreNav === true ) {
                                        // Restore Fixed sidenav
                                        menu_id.removeAttr( 'style' );
                                        menu_id.css( 'width', options.menuWidth );
                                    }
                                }

                            } );
                    }
                    else {
                        // Reset phantom div
                        menu_id.velocity(
                            { 'translateX': '100%' },
                            {
                                duration: 200,
                                queue: false,
                                easing: 'easeOutCubic',
                                complete: function () {
                                    if ( restoreNav === true ) {
                                        // Restore Fixed sidenav
                                        menu_id.removeAttr( 'style' );
                                        menu_id.css( 'width', options.menuWidth );
                                    }
                                }
                            } );
                    }
                    $( 'body' ).removeClass( 'onSlideNav' );
                }

                function containerIndent() {
                    if ( !$( 'body' ).hasClass( 'onSlideNav' ) ) {
                        $( 'body' ).addClass( 'onSlideNav' );
                    }
                }

                // Touch Event
                var panning = false;
                var menuOut = false;


                $this.click( function () {
                    if ( menuOut === true ) {
                        menuOut = false;
                        panning = false;
                        removeMenu();
                    } else {
                        // Disable ScrollSpying

                        var $body = $( 'body' );
                        var oldWidth = $body.innerWidth();
                        containerIndent()

                        // Push current drag target on top of DOM tree

                        if ( options.edge === 'left' ) {
                            menu_id.velocity( { 'translateX': [ 0, -1 * options.menuWidth ] }, {
                                duration: 300,
                                queue: false,
                                easing: 'easeOutQuad'
                            } );
                        } else {
                            menu_id.velocity( { 'translateX': [ 0, options.menuWidth ] }, {
                                duration: 300,
                                queue: false,
                                easing: 'easeOutQuad'
                            } );
                        }

                        menuOut = true;
                        panning = false;
                    }

                    return false;
                } );
            } );


        },
        show: function () {
            this.trigger( 'click' );
        },
        hide: function () {
            $( '#sidenav-overlay' ).trigger( 'click' );
        }
    };


    $.fn.slideNav = function ( methodOrOptions ) {
        if ( methods[ methodOrOptions ] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.slideNav' );
        }
    }; // Plugin end
}( jQuery ));
// ---------- functional tooltips method ---
// -----------------------------------------
;( function ( $ ) {
    $( function () {
        var $links = $( '.links > .btn-floating, .help > .btn-floating' );

        $links.on( 'click', function ( event ) {
            removeEventDefault( event );

            var $funcTooltips = $( this ).next( '.functional-tooltips' );
            var thisPosition = $( this ).position().left;
            console.log('position tooltips', thisPosition);

            if ( $funcTooltips.hasClass( 'hide' ) ) {
                if ( thisPosition !== 0 ) {
                    $funcTooltips
                        .removeClass( 'hide' )
                        .css( 'left', -( thisPosition + 2 ) );
                } else {
                    $funcTooltips
                        .removeClass( 'hide' );
                }
            } else {
                $funcTooltips.addClass( 'hide' );
            }
        } );
    } );
} )( jQuery );

// ---------- emoji method to tooltips  ----
// -----------------------------------------

( function ( $ ) {
    $( function () {
        var $emoji = $( '.emoji' ).get();
        var emojisData = [
            {
                id: 'amusiert',
                name: 'Amusiert',
                clicked: 45
            },
            {
                id: 'shokiert',
                name: 'Shokiert',
                clicked: 345
            },
            {
                id: 'traurig',
                name: 'Traurig',
                clicked: 45
            },
            {
                id: 'wutend',
                name: 'Wutend',
                clicked: 11
            },
            {
                id: 'erschreckt',
                name: 'Erschreckt',
                clicked: 24
            },
            {
                id: 'informiert',
                name: 'Informiert',
                clicked: 256
            },
            {
                id: 'langweilich',
                name: 'Langweilich',
                clicked: 0
            },
            {
                id: 'egal',
                name: 'Egal',
                clicked: 234
            }
        ];

        $emoji.map( function ( elemName ) {
            var $elemName = $( elemName );

            emojisData.map( function ( elemData ) {
                if ( $elemName.data( 'name' ) === elemData.id ) {
                    $elemName.attr( 'data-tooltip', elemData.clicked + ' </br> ' + elemData.name );
                }
            } );
        } );
        $( $emoji ).on( 'click', function ( event ) {
            removeEventDefault( event );
            var $elemClicked = $( this );

            emojisData.map( function ( elemData ) {
                if ( $elemClicked.data( 'name' ) === elemData.id ) {
                    var tooltipId = $elemClicked.data( 'tooltip-id' );

                    if ( !elemData.clickedPrev || elemData.clickedPrev === elemData.clicked ) {
                        if ( elemData.clickedPrev === 0 && elemData.clicked > 0 ) {
                            elemData.clicked = elemData.clicked - 1;
                            elemData.clickedPrev = elemData.clicked;
                        } else {
                            elemData.clicked = elemData.clicked + 1;
                            elemData.clickedPrev = elemData.clicked - 1;
                        }
                        $( '#' + tooltipId ).find( 'span' ).html( elemData.clicked + ' </br> ' + elemData.name );
                    } else {
                        elemData.clicked = elemData.clicked - 1;
                        elemData.clickedPrev = elemData.clicked;
                        $( '#' + tooltipId ).find( 'span' ).html( elemData.clicked + ' </br> ' + elemData.name );
                    }
                }
            } );
        } );
    } );
} )( jQuery );
// ---------- Post search method -----------
// -----------------------------------------
( function ( $ ) {
    $( function () {
        var $btnArray = $( '.post-search' ).find( '.btn-res' );
        var resContent;

        $btnArray.on('click', function ( event ) {
            removeEventDefault( event );
            resContent( $( this ) );
        });

        resContent = function ( arg ) {
            var res = '#res_' + $( arg ).data( 'res' );

            if ( $( res ).hasClass( 'hide' ) ) {
                $( res ).hide().removeClass( 'hide' ).slideDown( 400 );
                if ( $( res ).next( '.pagination' ).hasClass( 'hide' ) ) {
                    $( res ).next( '.pagination' ).removeClass( 'hide' );
                }
            }

            $( arg ).addClass( 'hide' );

            return;
        };
    } );
} )( jQuery );
// ---------- list emails method -----------
// -----------------------------------------
;(function ($) {
    /* body... */
    var $list_email = $('.post-list-email');

    $list_email.find('.collection-header').click(function (event) {
        /* Act on the event */
        removeEventDefault(event);

        if ($(this).parent('.collection-item').hasClass('active')) {
            $(this).parent('.collection-item').removeClass('active');
        } else {
            if ($list_email.find('.collection-item').hasClass('active')) {
                $list_email.find('.collection-item').removeClass('active');
                $(this).parent('.collection-item').addClass('active');
            } else {
                $(this).parent('.collection-item').addClass('active');
            }
        }
    });
})(jQuery);
// ----------- Users form method -----------
// -----------------------------------------
;(function ( $ ) {
    // Methods for testing the validation form
    // - user forms
    // - password
    // - search
    var $btnDisabled = $( 'button.disabled' );
    var $passwordLogin = $( '#passwordLogin' );

    // ------- User Forms -------
    // - register
    // - login
    var $obj_register = $( '#usersLogin' );
    var $uFBtn = $( '.u-f-btn-prev' );
    var this_href;

    function width_tab_register( argument ) {
        var argument = argument;

        $obj_register.find( '.tab' ).click( function ( event ) {
            /* Act on the event */

            var this_href = $( this ).find( 'a' ).attr( 'href' )

            if ( this_href == argument ) {
                // statement
                $obj_register.addClass( 'register-form' );
                setTimeout( function () {
                    $obj_register.find( '.register-nav' ).removeClass( 'invisible' );
                }, 400 );

            } else {
                $obj_register.removeClass( 'register-form' );
                $obj_register.find( '.register-nav' ).addClass( 'invisible' );
            }
        } );
    };
    width_tab_register( '#userRegisterTabContent' );

    $obj_register.find( '.btn-register-nav' ).click( function ( event ) {
        /* Act on the event */
        this_href = $( this ).attr( 'href' );
        $obj_register.find( '.tabs' ).addClass( 'hide' );
        $obj_register.find( '.register-nav' ).addClass( 'hide' );
        $obj_register.find( '.register-forms > .card-image.hide' ).removeClass( 'hide' );
        $( this_href ).removeClass( 'hide' );
        $uFBtn.removeClass( 'hide' ).addClass( 'prev-regisrer-nav' );
    } );


    // ------- password --------
    // - password display method, and hide it.
    // - Methods to display the password entering and form recovery

    // password display method, and hide it.
    var inputArrayPassword = $( 'input[type^="password"]' ),
        iconEye = $( '<i class="mdi mdi-eye password-eye small hide"></i>' );
    inputArrayPassword.after( iconEye );

    inputArrayPassword.on( 'input', function ( event ) {
        var inputEventThis = $( this );
        if ( inputEventThis.val().length > 0 ) {
            inputEventThis.next( 'i.password-eye' ).removeClass( 'hide' );
        } else {
            inputEventThis.next( 'i.password-eye' ).addClass( 'hide' );
        }
    } );

    inputArrayPassword.next( 'i.password-eye' ).on( 'click', function ( event ) {
        event.preventDefault();
        /* Act on the event */
        if ( $( this ).prev( 'input' ).attr( 'type' ) == "password" ) {
            $( this ).prev( 'input' ).attr( 'type', 'text' );
            $( this ).removeClass( 'mdi-eye' ).addClass( 'mdi-eye-off' );
        } else {
            $( this ).prev( 'input' ).attr( 'type', 'password' );
            $( this ).removeClass( 'mdi-eye-off' ).addClass( 'mdi-eye' );
        }
    } );


    // Methods to display the password entering and form recovery
    var $questionsLink = $( '.questions > a' );
    var $siblingsCardContent, id;

    $questionsLink.click( function ( event ) {
        /* Act on the event */
        id = $( this ).attr( 'href' );

        if ( $( id ) ) {
            removeEventDefault( event );

            $siblingsCardContent = $( id ).siblings( '.card-content' );
            $siblingsCardContent.addClass( 'hide' );
            $( id ).removeClass( 'hide' );
            $uFBtn.removeClass( 'hide' ).addClass( 'prev-login' );
        }
    } );

    $uFBtn.click( function ( event ) {
        /* Act on the event */
        removeEventDefault( event );

        if ( $( this ).hasClass( 'prev-login' ) ) {
            $( id ).addClass( 'hide' );
            $siblingsCardContent.removeClass( 'hide' )
            setTimeout( function () {
                $uFBtn.addClass( 'hide' ).removeClass( 'prev-login' );
            }, 500 );
        } else {
            $obj_register.find( '.tabs' ).removeClass( 'hide' );
            $obj_register.find( '.register-nav' ).removeClass( 'hide' );
            $obj_register.find( '.register-forms > .card-image' ).addClass( 'hide' );
            $( this_href ).addClass( 'hide' );
            $uFBtn.addClass( 'hide' ).removeClass( 'prev-regisrer-nav' );
        }
    } );

    // Methods intercept the request and send an ajax request
    // - event click to button
    // - ajax request and processing request
    var $formLogin = $( '.form-login' );
    var userEmail, userPassword, btnSubmit, ajaxRequest, dataAjaxRequest, userGreeting;

    //---------- event click to button -----------
    $formLogin.find( 'button' ).click( function ( event ) {
        /* Act on the event */
        removeEventDefault( event );

        userEmail = $( '#emailLogin' ).val();
        userPassword = $( '#passwordLogin' ).val();

        if ( userEmail && userPassword ) {
            btnSubmit = true;
        } else {
            btnSubmit = false;
        }

        // ajax request
        if ( btnSubmit === true ) {
            dataAjaxRequest = { login: userEmail, password: userPassword };
            ajaxRequest( dataAjaxRequest );
        }
    } );

    //---------- ajax request and processing request -----------
    ajaxRequest = function ( argument ) {
        $.get( "login.txt", argument, processingRequest, "json" );
    }
    processingRequest = function ( data ) {
        if ( data.login === dataAjaxRequest.login && data.password === dataAjaxRequest.password ) {
            console.log( 'Есть такие данные' );
            userGreeting( data );
        } else {
            console.log( 'Нет таких данных' );
        }
    }

    //----------- user greeting --------------
    userGreeting = function ( argument ) {
        // body...
        var $formLogin = $( '.form-login' )
        var h_f_l = $formLogin.height();
        var dataArgument = argument;
        var content;
        var $loader = $( '<i class="loader">Loading...</i>' );

        $formLogin.height( h_f_l );
        $formLogin.find( ' > *' ).addClass( 'hide' );

        content = '<p><img components=" ' + dataArgument.img + ' " alt="" /></p>';
        content += '<h4>' + dataArgument.name + '</h4>';
        content += '<p>' + dataArgument.login + '</p>';
        content += '<a class="sign-out" href="#!">Sign out</a>'

        $formLogin.addClass( 'center logged' );
        // $formLogin.html($loader);
        $formLogin.html( content );

    }

})( jQuery );
// -------- search function -------
// --------------------------------
;(function ($) {
    var $body = $('body');
    var $searchButton = $('.search-button');
    var $searchCloseButton = $('.search-close-button');
    var $searchWidget = $('.search-widget');
    var $idSearchInput = $('#search-input');

    function focusedSerchInput() {
        if ($('input:focus')) {
            $searchWidget.addClass('focused');
        } else {
            $searchWidget.removeClass('focused');
        }
    }

    $searchButton.on('mouseover', function (event) {
        removeEventDefault(event);
        /* Act on the event */
        $body.addClass('search-open');
    });

    // $searchButton.click(function(event) {
    //   /* Act on the event */
    //   removeEventDefault(event)

    //   $body.addClass('search-open');
    //   $idSearchInput.focus();
    //   $searchWidget.addClass('focused');
    // });


    $searchCloseButton.click(function (event) {
        removeEventDefault(event);
        $searchWidget.removeClass('focused');
        $body.removeClass('search-open');
    });


    $idSearchInput.focusout(function (event) {
        $searchWidget.removeClass('focused');
    });
    $idSearchInput.focus(function (event) {
        $searchWidget.addClass('focused');
    });
    $idSearchInput.on('input keyup', function (eventObject) {
        var number = $(this).val().length;

        if (number === 0) {
            $searchWidget.removeClass('text-entered');
        } else {
            $searchWidget.addClass('text-entered');
        }

    });
}(jQuery));
// -------- slider function -------
// --------------------------------
;(function ($) {
    var methods = {
        init: function (options) {
            var defaults = {
                navigation: true,
                indicators: true,
                height: 600,
                transition: 500,
                autoScroll: true,
                interval: 6000
            };

            options = $.extend(defaults, options);

            return this.each(function () {
                // For each slider, we want to keep track of
                // which slide is active and its associated content
                var $this = $(this);
                var $slider = $this.find('ul.slides').first();
                var $slides = $slider.find('> li');
                var $active_index = $slider.find('.active').index();
                var $active, $indicators, $interval, $navigation, $zoomNav, intervalFunction;
                if ($active_index != -1) {
                    $active = $slides.eq($active_index);
                }

                // Transitions the caption depending on alignment
                function captionTransition(caption, duration) {
                    if (caption.hasClass("center-align")) {
                        caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
                    }
                    else if (caption.hasClass("right-align")) {
                        caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
                    }
                    else if (caption.hasClass("left-align")) {
                        caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
                    }
                }

                // This function will transition the slide to any index of the next slide
                function moveToSlide(index) {
                    // Wrap around indices.

                    if (index >= $slides.length) index = 0;
                    else if (index < 0) index = $slides.length - 1;

                    $active_index = $slider.find('.active').index();

                    // Only do if index changes
                    if ($active_index != index) {
                        $active = $slides.eq($active_index);
                        $caption = $active.find('.caption');

                        $active.removeClass('active');
                        $active.velocity(
                            {
                                opacity: 0
                            },
                            {
                                duration: options.transition,
                                queue: false,
                                easing: 'easeOutQuad',
                                complete: function () {
                                    $slides.not('.active').velocity({
                                        opacity: 0,
                                        translateX: 0,
                                        translateY: 0
                                    }, {duration: 0, queue: false});
                                }
                            }
                        );
                        captionTransition($caption, options.transition);


                        // Update indicators
                        if (options.indicators) {
                            $indicators.eq($active_index).removeClass('active');
                        }

                        $slides.eq(index).velocity({opacity: 1}, {
                            duration: options.transition,
                            queue: false,
                            easing: 'easeOutQuad'
                        });
                        $slides.eq(index).find('.caption').velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: options.transition,
                            delay: options.transition,
                            queue: false,
                            easing: 'easeOutQuad'
                        });
                        $slides.eq(index).addClass('active');


                        // Update indicators
                        if (options.indicators) {
                            $indicators.eq(index).addClass('active');
                        }
                    }
                }

                // interval
                intervalFunction = function () {
                    $interval = setInterval(
                        function () {
                            $active_index = $slider.find('.active').index();
                            if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                            else $active_index += 1;

                            moveToSlide($active_index);

                        }, options.transition + options.interval
                    );
                }

                // Move img components into background-image
                function imgCssBackground(argument) {
                    // body...
                    $(argument).each(function () {
                        var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
                        if ($(this).attr('src') !== placeholderBase64) {
                            $(this).css({
                                'background-image': 'url(' + $(this).attr('src') + ')',
                                'background-size': 'cover',
                                'background-position': 'center center',
                            });
                            $(this).attr('src', placeholderBase64);
                        }
                    });
                }

                // Set height of slider
                // If fullscreen, do nothing
                if (!$this.hasClass('fullscreen')) {
                    if (options.indicators) {
                        // Add height if indicators are present
                        $this.height(options.height);
                    }
                    else {
                        $this.height(options.height);
                    }
                    $slider.height(options.height);
                }

                // Set initial positions of captions
                $slides.find('.caption').each(function () {
                    captionTransition($(this), 0);
                });


                // dynamically add navigation next and prev
                if (options.navigation) {
                    $navigation = $('<div class="navigation-slider"></div>');
                    $navigation.append('<div class="prev-btn-wrapper"><div class="prev btn-floating icon-floating waves-effect"><i class="material-icons">arrow_back</i></div></div>')
                    $navigation.append('<div class="next-btn-wrapper"><div class="next btn-floating icon-floating waves-effect"><i class="material-icons">arrow_forward</i></div></div>')
                    $this.append($navigation);

                    $navigation.find('.next').click(function (event) {
                        $active_index = $slider.find('.active').index();
                        moveToSlide($active_index + 1);
                    });

                    $navigation.find('.prev').click(function (event) {
                        $active_index = $slider.find('.active').index();
                        moveToSlide($active_index - 1);
                    });

                }

                // Метод увеличения картинки а так же сама навигация для этого.
                var $DOM_body = $('body');
                var x, y;
                var $iconMagnifyPlus = $('<i class="mdi mdi-magnify-plus"></i>');
                var $modalOverlay = $('<div class="modal-overlay"></div>');
                var $modal = $('<div id="modal-slide-img" class="modal modal-slide-img"><div class="modal-content"></div></div>');

                $zoomNav = $('<a class="zoom-nav" href="#modal-slide-img"></a>')
                $this.append($zoomNav);


                $zoomNav.mousemove(function (event) {
                    $(this).append($iconMagnifyPlus);
                    $iconMagnifyPlus.css({
                        left: event.offsetX + 10,
                        top: event.offsetY - 15
                    });
                });

                $zoomNav.mouseleave(function (event) {
                    /* body... */
                    $zoomNav.empty();
                })

                $zoomNav.click(function (event) {
                    /* Act on the event */
                    removeEventDefault(event);

                    $DOM_body.append($modalOverlay);
                    $DOM_body.css({
                        'overflow': 'hidden',
                        'width': $(document).width()
                    });

                    clearInterval($interval);

                    var $imgActive = $slider.find('.active').find('img').clone();

                    $modal.find('.modal-content').append($imgActive);
                    $DOM_body.append($modal);

                    $modalOverlay.css({
                        'display': 'block',
                        'z-index': '1002',
                        'opacity': '0'
                    });

                    $modal.css({
                        display: "block",
                        'z-index': 1003
                    });

                    $modalOverlay.velocity({opacity: 0.5}, {duration: 350, queue: false, ease: "easeOutCubic"});
                    // Define Bottom Sheet animation
                    var enterVelocityOptions = {
                        duration: 350,
                        queue: false,
                        ease: "easeOutCubic"
                    };
                    $.Velocity.hook($modal, "scaleX", 0.7);
                    $modal.css({top: '0'});
                    $modal.velocity({top: '3%', opacity: 1, scaleX: '1'}, enterVelocityOptions);

                    if ($imgActive.width() > $imgActive.height()) {
                        // statement
                        $imgActive.css({
                            'height': 'auto',
                            'width': '100%'
                        })
                    } else {
                        $imgActive.css({
                            'height': '100%',
                            'width': 'auto',
                            'max-height': $(window).height() - 80
                        })
                    }
                    return $DOM_body;
                });

                $modalOverlay.click(function (event) {
                    /* Act on the event */
                    removeEventDefault(event);

                    $modalOverlay.velocity({opacity: 0}, {
                        duration: options.out_duration,
                        queue: false,
                        ease: "easeOutQuart"
                    });

                    var exitVelocityOptions = {
                        duration: 250,
                        queue: false,
                        ease: "easeOutCubic",
                        // Handle modal ready callback
                        complete: function () {

                            $modal.find('.modal-content').empty();
                            $(this).css({display: "none"});
                            $modal.detach();
                            $modalOverlay.detach();
                        }
                    };

                    $modal.velocity(
                        {top: 0, opacity: 0, scaleX: 0.7},
                        exitVelocityOptions
                    );

                    $DOM_body.css({
                        'overflow': '',
                        'width': ''
                    });

                    return $DOM_body;
                });

                // dynamically add indicators
                if (options.indicators) {
                    $indicators = $('<ul class="indicators"></ul>');

                    $slides.each(function (index) {
                        var $indicator = $('<li class="indicator-item"></li>'),
                            $indicatorImgBg;

                        if ($(this).find('img')) {
                            $indicatorImgBg = $(this).find('img').clone();
                            imgCssBackground($indicatorImgBg);
                        }

                        $indicator.append($indicatorImgBg);

                        // Handle clicks on indicators
                        $indicator.click(function () {
                            var $parent = $slider.parent();
                            var curr_index = $parent.find($(this)).index();
                            moveToSlide(curr_index);

                            // reset interval
                            if (options.autoScroll) {
                                // statement
                                intervalFunction();
                            }

                        });

                        $indicators.append($indicator);
                    });
                    $this.append($indicators);
                    $indicators = $this.find('ul.indicators').find('li.indicator-item');
                }

                if ($active) {
                    $active.show();
                } else {
                    $slides.first().addClass('active').velocity({opacity: 1}, {
                        duration: options.transition,
                        queue: false,
                        easing: 'easeOutQuad'
                    });

                    $active_index = 0;
                    $active = $slides.eq($active_index);

                    // Update indicators
                    if (options.indicators) {
                        $indicators.eq($active_index).addClass('active');
                    }
                }

                // Adjust height to current slide
                $active.find('img').each(function () {
                    $active.find('.caption').velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
                });

                // auto scroll
                $interval = setInterval(
                    function () {
                        $active_index = $slider.find('.active').index();
                        moveToSlide($active_index + 1);

                    }, options.transition + options.interval
                );

                // pause scrolling hover
                $this.hover(function () {
                    clearInterval($interval);
                }, function () {
                    if (options.autoScroll) {
                        // statement
                        intervalFunction();
                    }
                });
                // HammerJS, Swipe navigation

                // Touch Event
                var panning = false;
                var swipeLeft = false;
                var swipeRight = false;

                $this.hammer({
                    prevent_default: false
                }).bind('pan', function (e) {
                    if (e.gesture.pointerType === "touch") {

                        // reset interval
                        clearInterval($interval);

                        var direction = e.gesture.direction;
                        var x = e.gesture.deltaX;
                        var velocityX = e.gesture.velocityX;

                        $curr_slide = $slider.find('.active');
                        $curr_slide.velocity({
                            translateX: x
                        }, {duration: 50, queue: false, easing: 'easeOutQuad'});

                        // Swipe Left
                        if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
                            swipeRight = true;
                        }
                        // Swipe Right
                        else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
                            swipeLeft = true;
                        }

                        // Make Slide Behind active slide visible
                        var next_slide;
                        if (swipeLeft) {
                            next_slide = $curr_slide.next();
                            if (next_slide.length === 0) {
                                next_slide = $slides.first();
                            }
                            next_slide.velocity({
                                opacity: 1
                            }, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        }
                        if (swipeRight) {
                            next_slide = $curr_slide.prev();
                            if (next_slide.length === 0) {
                                next_slide = $slides.last();
                            }
                            next_slide.velocity({
                                opacity: 1
                            }, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        }


                    }

                }).bind('panend', function (e) {
                    if (e.gesture.pointerType === "touch") {

                        $curr_slide = $slider.find('.active');
                        panning = false;
                        curr_index = $slider.find('.active').index();

                        if (!swipeRight && !swipeLeft || $slides.length <= 1) {
                            // Return to original spot
                            $curr_slide.velocity({
                                translateX: 0
                            }, {duration: 300, queue: false, easing: 'easeOutQuad'});
                        }
                        else if (swipeLeft) {
                            moveToSlide(curr_index + 1);
                            $curr_slide.velocity({translateX: -1 * $this.innerWidth()}, {
                                duration: 300, queue: false, easing: 'easeOutQuad',
                                complete: function () {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                }
                            });
                        }
                        else if (swipeRight) {
                            moveToSlide(curr_index - 1);
                            $curr_slide.velocity({translateX: $this.innerWidth()}, {
                                duration: 300, queue: false, easing: 'easeOutQuad',
                                complete: function () {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                }
                            });
                        }
                        swipeLeft = false;
                        swipeRight = false;

                        // Restart interval
                        clearInterval($interval);
                        $interval = setInterval(
                            function () {
                                $active_index = $slider.find('.active').index();
                                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                                else $active_index += 1;

                                moveToSlide($active_index);

                            }, options.transition + options.interval
                        );
                    }
                });

                // Методы управления слайдером
                $this.on('sliderPause', function () {
                    clearInterval($interval);
                });

                $this.on('sliderStart', function () {
                    if (options.autoScroll) {
                        // statement
                        intervalFunction();
                    }

                });

                $this.on('sliderNext', function () {
                    $active_index = $slider.find('.active').index();
                    moveToSlide($active_index + 1);
                });

                $this.on('sliderPrev', function () {
                    $active_index = $slider.find('.active').index();
                    moveToSlide($active_index - 1);
                });

            });
        },
        pause: function () {
            $(this).trigger('sliderPause');
        },
        start: function () {
            $(this).trigger('sliderStart');
        },
        next: function () {
            $(this).trigger('sliderNext');
        },
        prev: function () {
            $(this).trigger('sliderPrev');
        }
    };

    $.fn.slider = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    }; // Plugin end
}(jQuery));
( function ($) {
    $( function () {
        var $helpMenu = $( '#helpMenu' );
        var $helpContainerItems = $( '#helpContainerItems > div' ).get();
        var offsetHelpMenu = $helpMenu.offset();
        var cloneMenu = $helpMenu.clone();
        var showTrue, windScroll, elOffset = [], arrayElPosition, activeLink, arrayActiveEl, arrayId;

        cloneMenu.addClass( 'clone-menu fixid-menu' );

        arrayId = $helpContainerItems.map( function(element, idx ) {
            var id = '#' + $( element ).attr( 'id' );
            return id;
        } );

        arrayElPosition = arrayId.map( function(element, idx) {
            elOffset = {
                id: idx,
                el: element,
                elPosition: $( element ).offset()
            };

            return elOffset;
        } );

        function activeMenuItem( arg ) {
            if ( arg ) {
                arg.map(function( element, idx ) {
                    if ( element.elPosition.top < ( windScroll + 100 ) ) {
                        arrayActiveEl = element.el;
                    }
                } );

                activeLink = $( 'a[href= "' + arrayActiveEl + '"]' ).parent( 'li' );
                $helpMenu.find( 'li.active' ).removeClass( 'active' );
                cloneMenu.find( 'li.active' ).removeClass( 'active' );
                activeLink.addClass( 'active' );
            }
        }

        function helpMenuScroll( arg ) {
            if ( arg > offsetHelpMenu.top ) {
                return true;
            } else {
                return false;
            }
        }

        function showCloneMenu( arg ) {
            if ( arg ) {
                $helpMenu.addClass( 'hide' );
                $( 'body' ).append( cloneMenu );
                cloneMenu.css( {
                    'left': offsetHelpMenu.left
                } );
            } else {
                $helpMenu.removeClass( 'hide' );
                $( '.clone-menu' ).remove();
            }
            return false;
        }

        if ( $( 'div' ).is( '#helpMenu' ) ) {
            windScroll = $( window ).scrollTop();
            showTrue = helpMenuScroll( windScroll );

            if ( showTrue ) {
                showCloneMenu( showTrue );
                activeMenuItem( arrayElPosition );
            }

            $( window ).scroll(function () {
                windScroll = $( window ).scrollTop();
                showTrue = helpMenuScroll( windScroll );
                showCloneMenu( showTrue );
                activeMenuItem( arrayElPosition );
            } );

            $( document ).on('click', 'a[href^="#"]', function( event ) {
                removeEventDefault( event );
                var linkHrefId = $( this ).attr( 'href' );
                $( 'html, body' ).animate( { scrollTop: $( linkHrefId ).offset().top - 20 } );
            } );
        }
    } );
} )( jQuery );
(function ( $ ) {
    $( function () {
        var methods = {
            init: function ( options ) {
                var defaults = {
                    cardElem: $( this ).find( '.card-title a.title-link' ).get(),
                    content: $( this ).find( '.card-content p' ).get(),
                    limitSignsForTitle: 55,
                    limitSignsForContent: 55
                };
                options = $.extend( defaults, options );

                function сontentProcessing(htmlTitleLink, htmlContent, limitSignsForTitle, limitSignsForContent) {
                    var $htmlTitleLink = $( htmlTitleLink ),
                        $htmlContent = $( htmlContent ),
                        limitContent = ( $htmlContent.text().length / 2 ) - 3;


                    if ( $htmlTitleLink.text().length >= limitSignsForTitle ) {
                        $htmlTitleLink.text( $htmlTitleLink.text().substring( 0, limitSignsForTitle - 3 ) + '...' );
                        $htmlContent.text( $htmlContent.text().substring( 0, limitSignsForContent / 1.5 ) + '...' );
                    } else if ( $htmlTitleLink.text().length < ( limitSignsForTitle / 2 ) ) {
                        $htmlContent.text( $htmlContent.text().substring( 0, limitSignsForContent - 3 ) + '...' );
                    } else if ( $htmlTitleLink.text().length < limitSignsForTitle && $htmlTitleLink.text().length > ( limitSignsForTitle / 2 ) ) {
                        $htmlContent.text( $htmlContent.text().substring( 0, limitSignsForContent / 1.5 ) + '...' );
                    }
                }

                $( this ).each( function () {
                    if (options.cardElem.length === 1) {
                        if (options.content.length !== 1) {
                            сontentProcessing(options.cardElem, options.content[0], options.limitSignsForTitle, options.limitSignsForContent);
                        } else {
                            сontentProcessing(options.cardElem, options.content, options.limitSignsForTitle, options.limitSignsForContent);
                        }
                    } else {
                        options.cardElem.map(function(element, i) {
                            сontentProcessing(options.cardElem[i], options.content[i], options.limitSignsForTitle, options.limitSignsForContent);
                        });
                    }
                } );
            }
        };

        $.fn.limitationOutputChareacters = function ( methodOrOptions ) {
            if ( methods[ methodOrOptions ] ) {
                return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
            } else if ( typeof methodOrOptions === 'object' || !methodOrOptions ) {
                // Default to "init"
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Method ' + methodOrOptions + ' does not exist on jQuery.limitationOutputChareacters' );
            }
        }; // Plugin end
    } );
})( jQuery );
// ------------ init components ------------
// -----------------------------------------
(function ( $ ) {

    $( function () {

        // ------------ init components ----------
        $( '.hot-story' ).limitationOutputChareacters( { limitSignsForTitle: 86, limitSignsForContent: 327 } );
        $( '#topBeschwerden' ).limitationOutputChareacters( { limitSignsForTitle: 94, limitSignsForContent: 135 } );
        $( '#neuesteBeschwerden' ).limitationOutputChareacters( { limitSignsForTitle: 154, limitSignsForContent: 225 } );
        // Forms
        // ---------------------------------------
        $( 'select' ).material_select();
        $( '#textarea1' ).trigger( 'autoresize' );

        $( 'input[type = "text"]' ).characterCounter();

        var $pageWrite = $( '.page-write' );
        var $slideInput = $pageWrite.find( '#slide-input' );

        $slideInput.removeClass( 'hide' ).slideUp( 'slow' ).addClass( 'hide' );

        $pageWrite.find( '.btn' ).click( function ( event ) {
            var id = $( this ).attr( 'href' );
            if ( id === '#slide-input' ) {
                // statement
                removeEventDefault( event );

                if ( $( id ).hasClass( 'hide' ) ) {
                    $( id ).removeClass( 'hide' ).slideDown( 'slow' );
                } else {
                    $( id ).slideUp( 'slow', function () {
                        $( this ).addClass( 'hide' );
                    } );
                }
            }
        } );

        // Slide Nav
        // ----------------------------------------
        $( '.button-collapse' ).slideNav( {
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        } );

        // Slider
        // ----------------------------------------
        $( '.slider-post' ).slider( { height: 400, autoScroll: false } );

        // Slick
        // ----------------------------------------
        $( "#topBeschwerden" ).slick( {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        } );
        $( "#neuesteBeschwerden" ).slick( {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        } );

        // Modal
        // -----------------------------------
        $( '.modal' ).modal( {
            ending_top: '3%'
        } );
        $( '.modal.modal-report' ).modal( {
            ending_top: '35%'
        } );

        // Nav Theme
        // -----------------------------------
        $( window ).resize( function ( event ) {
            /* Act on the event */
            $( 'ul#navHeader' ).navTheme( { fixedItems: true, indentItem: 50 } );
            $( 'ul#navTop' ).navTheme();
            $( 'ul#navContent' ).navTheme( { fixedItems: true } );
        } );

        $( 'ul#navHeader' ).navTheme( { fixedItems: true, indentItem: 50 } );
        $( 'ul#navTop' ).navTheme();
        $( 'ul#navContent' ).navTheme( { fixedItems: true } );

        // Tooltip
        // -----------------------------------
        $( '.tooltipped' ).tooltip( { delay: 50, position: 'top' } );

        // Methods
        // - Image adjustment
        // - Card comment hover
        // - Rating
        // - Button collapse
        // -----------------------------------

        // Variables
        // -----------------------------------
        var $uploaded_items = $( '.uploaded-item' ),
            $card_comment = $( '.card-comment' );

        // Image adjustment method
        // -----------------------------------
        $uploaded_items.find( 'img' ).each( function () {
            var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            if ( $( this ).attr( 'src' ) !== placeholderBase64 ) {
                $( this ).css( {
                    'background-image': 'url(' + $( this ).attr( 'src' ) + ')',
                    'background-size': 'cover'
                } );
                $( this ).attr( 'src', placeholderBase64 );
            }
        } );

        // Card comment hover
        // ------------------------------------
        $card_comment.hover( function () {
            $( this ).find( '.report-alert a.hide' ).removeClass( 'hide' );
        }, function () {
            $( this ).find( '.report-alert a' ).addClass( 'hide' );
        } );

        $( 'a[href="#USER-MITGLIEDSCHAFT"]' ).click( function () {
            $( '.user' ).removeClass( 'hide' );
            $( '.firm' ).addClass( 'hide' );
        } )
        $( 'a[href="#FIRMA-MITGLIEDSCHAFT"]' ).click( function () {
            $( '.firm' ).removeClass( 'hide' );
            $( '.user' ).addClass( 'hide' );
        } )

        // Rating methods
        // ------------------------------------
        var $rating = $( '.rating' ),
            $ratingText = $( '.rating-text' );

        $rating.find( 'a' ).hover( function () {
            $ratingText.empty();
            $ratingText.html( $( this ).attr( 'title' ) );
        }, function () {
            $ratingText.html( $( this ).attr( 'title' ) );
        } );

        $rating.find( 'a' ).on( 'click', function ( event ) {
            removeEventDefault( event );
            var $this = $( this );
            $this.addClass( 'star-scale' );
            setTimeout( function () {
                $this.removeClass( 'star-scale' );
            }, 400 );
        } );

        // Button collapse
        // -------------------------------------
        $( '.button-collapse' ).click( function ( event ) {
            /* Act on the event */
            removeEventDefault( event );
            if ( !$( this ).hasClass( 'active' ) ) {
                // statement
                $( this ).addClass( 'active' );
            } else {
                $( this ).removeClass( 'active' );
            }
        } );
    } ); // end of document ready
})( jQuery ); // end of jQuery name space
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuMi4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9T2JqZWN0LmdldFByb3RvdHlwZU9mLGY9Yy5zbGljZSxnPWMuY29uY2F0LGg9Yy5wdXNoLGk9Yy5pbmRleE9mLGo9e30saz1qLnRvU3RyaW5nLGw9ai5oYXNPd25Qcm9wZXJ0eSxtPWwudG9TdHJpbmcsbj1tLmNhbGwoT2JqZWN0KSxvPXt9O2Z1bmN0aW9uIHAoYSxiKXtiPWJ8fGQ7dmFyIGM9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2MudGV4dD1hLGIuaGVhZC5hcHBlbmRDaGlsZChjKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpfXZhciBxPVwiMy4yLjFcIixyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByLmZuLmluaXQoYSxiKX0scz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csdD0vXi1tcy0vLHU9Ly0oW2Etel0pL2csdj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O3IuZm49ci5wcm90b3R5cGU9e2pxdWVyeTpxLGNvbnN0cnVjdG9yOnIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBmLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9mLmNhbGwodGhpcyk6YTwwP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPXIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiByLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoYTwwP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmM8Yj9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6aCxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LHIuZXh0ZW5kPXIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8ci5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtoPGk7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKHIuaXNQbGFpbk9iamVjdChkKXx8KGU9QXJyYXkuaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmQXJyYXkuaXNBcnJheShjKT9jOltdKTpmPWMmJnIuaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09ci5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LHIuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKHErTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09ci50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9ci50eXBlKGEpO3JldHVybihcIm51bWJlclwiPT09Ynx8XCJzdHJpbmdcIj09PWIpJiYhaXNOYU4oYS1wYXJzZUZsb2F0KGEpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiEoIWF8fFwiW29iamVjdCBPYmplY3RdXCIhPT1rLmNhbGwoYSkpJiYoIShiPWUoYSkpfHwoYz1sLmNhbGwoYixcImNvbnN0cnVjdG9yXCIpJiZiLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJm0uY2FsbChjKT09PW4pKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9qW2suY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7cChhKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodCxcIm1zLVwiKS5yZXBsYWNlKHUsdil9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYodyhhKSl7Zm9yKGM9YS5sZW5ndGg7ZDxjO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UocyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJih3KE9iamVjdChhKSk/ci5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpoLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6aS5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2Q8YztkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztmPGc7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj0wLGg9W107aWYodyhhKSlmb3IoZD1hLmxlbmd0aDtmPGQ7ZisrKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGYgaW4gYSllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZy5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gZD1mLmNhbGwoYXJndW1lbnRzLDIpLGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGQuY29uY2F0KGYuY2FsbChhcmd1bWVudHMpKSl9LGUuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxyLmd1aWQrKyxlfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpvfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoci5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksci5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtqW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiB3KGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9ci50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWMmJiFyLmlzV2luZG93KGEpJiYoXCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKX12YXIgeD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWhhKCksej1oYSgpLEE9aGEoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz17fS5oYXNPd25Qcm9wZXJ0eSxEPVtdLEU9RC5wb3AsRj1ELnB1c2gsRz1ELnB1c2gsSD1ELnNsaWNlLEk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEo9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEs9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEw9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLE09XCJcXFxcW1wiK0srXCIqKFwiK0wrXCIpKD86XCIrSytcIiooWypeJHwhfl0/PSlcIitLK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTCtcIikpfClcIitLK1wiKlxcXFxdXCIsTj1cIjooXCIrTCtcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTStcIikqKXwuKilcXFxcKXwpXCIsTz1uZXcgUmVnRXhwKEsrXCIrXCIsXCJnXCIpLFA9bmV3IFJlZ0V4cChcIl5cIitLK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitLK1wiKyRcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0srXCIqLFwiK0srXCIqXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitLK1wiKihbPit+XXxcIitLK1wiKVwiK0srXCIqXCIpLFM9bmV3IFJlZ0V4cChcIj1cIitLK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrSytcIipcXFxcXVwiLFwiZ1wiKSxUPW5ldyBSZWdFeHAoTiksVT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitMK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0wrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitMK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK00pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK04pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0srXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitLK1wiKig/OihbKy1dfClcIitLK1wiKihcXFxcZCspfCkpXCIrSytcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitKK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrSytcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrSytcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrSytcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sVz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFg9L15oXFxkJC9pLFk9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLCQ9L1srfl0vLF89bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0srXCI/fChcIitLK1wiKXwuKVwiLFwiaWdcIiksYWE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOmQ8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sYmE9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csY2E9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9cIlxcMFwiPT09YT9cIlxcdWZmZmRcIjphLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2EuY2hhckNvZGVBdChhLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrYX0sZGE9ZnVuY3Rpb24oKXttKCl9LGVhPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITAmJihcImZvcm1cImluIGF8fFwibGFiZWxcImluIGEpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtHLmFwcGx5KEQ9SC5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxEW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtHPXthcHBseTpELmxlbmd0aD9mdW5jdGlvbihhLGIpe0YuYXBwbHkoYSxILmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzPWImJmIub3duZXJEb2N1bWVudCx3PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09dyYmOSE9PXcmJjExIT09dylyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXcmJihsPVouZXhlYyhhKSkpaWYoZj1sWzFdKXtpZig5PT09dyl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHMmJihqPXMuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKGxbMl0pcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPWxbM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT13KXM9YixyPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShiYSxjYSk6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSksbz1nKGEpLGg9by5sZW5ndGg7d2hpbGUoaC0tKW9baF09XCIjXCIraytcIiBcIitzYShvW2hdKTtyPW8uam9pbihcIixcIikscz0kLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGJ9aWYocil0cnl7cmV0dXJuIEcuYXBwbHkoZCxzLnF1ZXJ5U2VsZWN0b3JBbGwocikpLGR9Y2F0Y2goeCl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUCxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBoYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGlhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gamEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJmEuc291cmNlSW5kZXgtYi5zb3VyY2VJbmRleDtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm5cImZvcm1cImluIGI/Yi5wYXJlbnROb2RlJiZiLmRpc2FibGVkPT09ITE/XCJsYWJlbFwiaW4gYj9cImxhYmVsXCJpbiBiLnBhcmVudE5vZGU/Yi5wYXJlbnROb2RlLmRpc2FibGVkPT09YTpiLmRpc2FibGVkPT09YTpiLmlzRGlzYWJsZWQ9PT1hfHxiLmlzRGlzYWJsZWQhPT0hYSYmZWEoYik9PT1hOmIuZGlzYWJsZWQ9PT1hOlwibGFiZWxcImluIGImJmIuZGlzYWJsZWQ9PT1hfX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gaWEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaWEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1nYS5zdXBwb3J0PXt9LGY9Z2EuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiEhYiYmXCJIVE1MXCIhPT1iLm5vZGVOYW1lfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLHYhPT1uJiYoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9WS50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWphKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSk6KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjLGQsZSxmPWIuZ2V0RWxlbWVudEJ5SWQoYSk7aWYoZil7aWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl07ZT1iLmdldEVsZW1lbnRzQnlOYW1lKGEpLGQ9MDt3aGlsZShmPWVbZCsrXSlpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXX1yZXR1cm5bXX19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwKXJldHVybiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSl9LHI9W10scT1bXSwoYy5xc2E9WS50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0srXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0srXCIqKD86dmFsdWV8XCIrSitcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXthLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitLK1wiKlsqXiR8IX5dPz1cIiksMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxvLmFwcGVuZENoaWxkKGEpLmRpc2FibGVkPSEwLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9WS50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiKlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE4pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9WS50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8WS50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0koayxhKS1JKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SShrLGEpLUkoayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/bGEoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShTLFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmQy5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXNjYXBlPWZ1bmN0aW9uKGEpe3JldHVybihhK1wiXCIpLnJlcGxhY2UoYmEsY2EpfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6VixhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShfLGFhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKF8sYWEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBWLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVC50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0srXCIpXCIrYStcIihcIitLK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6IWJ8fChlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKE8sXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWImJihlPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SShhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUCxcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoXyxhYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFUudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOm9hKCExKSxkaXNhYmxlZDpvYSghMCksY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnBhKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6cGEoZnVuY3Rpb24oYSxiLGMpe3JldHVybltjPDA/YytiOmNdfSksZXZlbjpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHJhKCl7fXJhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcmEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1RLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1SLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFAsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVZbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHNhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2I8YztiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1iLm5leHQsZj1lfHxkLGc9YyYmXCJwYXJlbnROb2RlXCI9PT1mLGg9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxlKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpcmV0dXJuIGEoYixjLGUpO3JldHVybiExfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG09W3csaF07aWYoaSl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZykmJmEoYixjLGkpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKWlmKGw9Ylt1XXx8KGJbdV09e30pLGs9bFtiLnVuaXF1ZUlEXXx8KGxbYi51bmlxdWVJRF09e30pLGUmJmU9PT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpYj1iW2RdfHxiO2Vsc2V7aWYoKGo9a1tmXSkmJmpbMF09PT13JiZqWzFdPT09aClyZXR1cm4gbVsyXT1qWzJdO2lmKGtbZl09bSxtWzJdPWEoYixjLGkpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB1YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB3YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtoPGk7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHhhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXhhKGQpKSxlJiYhZVt1XSYmKGU9eGEoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dmEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp3YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9d2EocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0koZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXdhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpHLmFwcGx5KGcscil9KX1mdW5jdGlvbiB5YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBJKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtpPGY7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3RhKHVhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2U8ZjtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB4YShpPjEmJnVhKG0pLGk+MSYmc2EoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShQLFwiJDFcIiksYyxpPGUmJnlhKGEuc2xpY2UoaSxlKSksZTxmJiZ5YShhPWEuc2xpY2UoZSkpLGU8ZiYmc2EoYSkpfW0ucHVzaChjKX1yZXR1cm4gdWEobSl9ZnVuY3Rpb24gemEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUUuY2FsbChpKSk7dT13YSh1KX1HLmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eWEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHphKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsaSxqLGssbCxtPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbj0hZSYmZyhhPW0uc2VsZWN0b3J8fGEpO2lmKGM9Y3x8W10sMT09PW4ubGVuZ3RoKXtpZihpPW5bMF09blswXS5zbGljZSgwKSxpLmxlbmd0aD4yJiZcIklEXCI9PT0oaj1pWzBdKS50eXBlJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtpWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksYil8fFtdKVswXSwhYilyZXR1cm4gYzttJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShpLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1mPVYubmVlZHNDb250ZXh0LnRlc3QoYSk/MDppLmxlbmd0aDt3aGlsZShmLS0pe2lmKGo9aVtmXSxkLnJlbGF0aXZlW2s9ai50eXBlXSlicmVhaztpZigobD1kLmZpbmRba10pJiYoZT1sKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLCQudGVzdChpWzBdLnR5cGUpJiZxYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGkuc3BsaWNlKGYsMSksYT1lLmxlbmd0aCYmc2EoaSksIWEpcmV0dXJuIEcuYXBwbHkoYyxlKSxjO2JyZWFrfX19cmV0dXJuKG18fGgoYSxuKSkoZSxiLCFwLGMsIWJ8fCQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8YiksY30sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtpZighYylyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtpZighYyYmXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBhLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEosZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKCFjKXJldHVybiBhW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtyLmZpbmQ9eCxyLmV4cHI9eC5zZWxlY3RvcnMsci5leHByW1wiOlwiXT1yLmV4cHIucHNldWRvcyxyLnVuaXF1ZVNvcnQ9ci51bmlxdWU9eC51bmlxdWVTb3J0LHIudGV4dD14LmdldFRleHQsci5pc1hNTERvYz14LmlzWE1MLHIuY29udGFpbnM9eC5jb250YWlucyxyLmVzY2FwZVNlbGVjdG9yPXguZXNjYXBlO3ZhciB5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZyKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sej1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sQT1yLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEIoYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfXZhciBDPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pLEQ9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIEUoYSxiLGMpe3JldHVybiByLmlzRnVuY3Rpb24oYik/ci5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk6Yi5ub2RlVHlwZT9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk6XCJzdHJpbmdcIiE9dHlwZW9mIGI/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09Y30pOkQudGVzdChiKT9yLmZpbHRlcihiLGEsYyk6KGI9ci5maWx0ZXIoYixhKSxyLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jJiYxPT09YS5ub2RlVHlwZX0pKX1yLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/ci5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpyLmZpbmQubWF0Y2hlcyhhLHIuZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sci5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMubGVuZ3RoLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2socihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2I8ZDtiKyspaWYoci5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihjPXRoaXMucHVzaFN0YWNrKFtdKSxiPTA7YjxkO2IrKylyLmZpbmQoYSxlW2JdLGMpO3JldHVybiBkPjE/ci51bmlxdWVTb3J0KGMpOmN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhRSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZBLnRlc3QoYSk/cihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBGLEc9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sSD1yLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxGLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkcuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiByP2JbMF06YixyLm1lcmdlKHRoaXMsci5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSksQy50ZXN0KGVbMV0pJiZyLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYilyLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJih0aGlzWzBdPWYsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6ci5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKHIpOnIubWFrZUFycmF5KGEsdGhpcyl9O0gucHJvdG90eXBlPXIuZm4sRj1yKGQpO3ZhciBJPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEo9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ci5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1yKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGM7YSsrKWlmKHIuY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPVwic3RyaW5nXCIhPXR5cGVvZiBhJiZyKGEpO2lmKCFBLnRlc3QoYSkpZm9yKDtkPGU7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP3IudW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aS5jYWxsKHIoYSksdGhpc1swXSk6aS5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLnVuaXF1ZVNvcnQoci5tZXJnZSh0aGlzLmdldCgpLHIoYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gSyhhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9ci5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4geigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHooYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYSxcImlmcmFtZVwiKT9hLmNvbnRlbnREb2N1bWVudDooQihhLFwidGVtcGxhdGVcIikmJihhPWEuY29udGVudHx8YSksci5tZXJnZShbXSxhLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPXIubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPXIuZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihKW2FdfHxyLnVuaXF1ZVNvcnQoZSksSS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEw9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIE0oYSl7dmFyIGI9e307cmV0dXJuIHIuZWFjaChhLm1hdGNoKEwpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifXIuQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/TShhKTpyLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9ZXx8YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtyLmVhY2goYixmdW5jdGlvbihiLGMpe3IuaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXIudHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiByLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9ci5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxjPD1oJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/ci5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fGJ8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan07ZnVuY3Rpb24gTihhKXtyZXR1cm4gYX1mdW5jdGlvbiBPKGEpe3Rocm93IGF9ZnVuY3Rpb24gUChhLGIsYyxkKXt2YXIgZTt0cnl7YSYmci5pc0Z1bmN0aW9uKGU9YS5wcm9taXNlKT9lLmNhbGwoYSkuZG9uZShiKS5mYWlsKGMpOmEmJnIuaXNGdW5jdGlvbihlPWEudGhlbik/ZS5jYWxsKGEsYixjKTpiLmFwcGx5KHZvaWQgMCxbYV0uc2xpY2UoZCkpfWNhdGNoKGEpe2MuYXBwbHkodm9pZCAwLFthXSl9fXIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihiKXt2YXIgYz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGQ9XCJwZW5kaW5nXCIsZT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGhlbihudWxsLGEpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGIpe3IuZWFjaChjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5pc0Z1bmN0aW9uKGFbZFs0XV0pJiZhW2RbNF1dO2ZbZFsxXV0oZnVuY3Rpb24oKXt2YXIgYT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZyLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhiLm5vdGlmeSkuZG9uZShiLnJlc29sdmUpLmZhaWwoYi5yZWplY3QpOmJbZFswXStcIldpdGhcIl0odGhpcyxlP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24oYixkLGUpe3ZhciBmPTA7ZnVuY3Rpb24gZyhiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaD10aGlzLGk9YXJndW1lbnRzLGo9ZnVuY3Rpb24oKXt2YXIgYSxqO2lmKCEoYjxmKSl7aWYoYT1kLmFwcGx5KGgsaSksYT09PWMucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7aj1hJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJiZhLnRoZW4sci5pc0Z1bmN0aW9uKGopP2U/ai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpKTooZisrLGouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSxnKGYsYyxOLGMubm90aWZ5V2l0aCkpKTooZCE9PU4mJihoPXZvaWQgMCxpPVthXSksKGV8fGMucmVzb2x2ZVdpdGgpKGgsaSkpfX0saz1lP2o6ZnVuY3Rpb24oKXt0cnl7aigpfWNhdGNoKGEpe3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmci5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGEsay5zdGFja1RyYWNlKSxiKzE+PWYmJihkIT09TyYmKGg9dm9pZCAwLGk9W2FdKSxjLnJlamVjdFdpdGgoaCxpKSl9fTtiP2soKTooci5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihrLnN0YWNrVHJhY2U9ci5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksYS5zZXRUaW1lb3V0KGspKX19cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYSl7Y1swXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGUpP2U6TixhLm5vdGlmeVdpdGgpKSxjWzFdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oYik/YjpOKSksY1syXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGQpP2Q6TykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3IuZXh0ZW5kKGEsZSk6ZX19LGY9e307cmV0dXJuIHIuZWFjaChjLGZ1bmN0aW9uKGEsYil7dmFyIGc9YlsyXSxoPWJbNV07ZVtiWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2Q9aH0sY1szLWFdWzJdLmRpc2FibGUsY1swXVsyXS5sb2NrKSxnLmFkZChiWzNdLmZpcmUpLGZbYlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZltiWzBdK1wiV2l0aFwiXSh0aGlzPT09Zj92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGZbYlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGUucHJvbWlzZShmKSxiJiZiLmNhbGwoZixmKSxmfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGgsYz1iLGQ9QXJyYXkoYyksZT1mLmNhbGwoYXJndW1lbnRzKSxnPXIuRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtkW2FdPXRoaXMsZVthXT1hcmd1bWVudHMubGVuZ3RoPjE/Zi5jYWxsKGFyZ3VtZW50cyk6YywtLWJ8fGcucmVzb2x2ZVdpdGgoZCxlKX19O2lmKGI8PTEmJihQKGEsZy5kb25lKGgoYykpLnJlc29sdmUsZy5yZWplY3QsIWIpLFwicGVuZGluZ1wiPT09Zy5zdGF0ZSgpfHxyLmlzRnVuY3Rpb24oZVtjXSYmZVtjXS50aGVuKSkpcmV0dXJuIGcudGhlbigpO3doaWxlKGMtLSlQKGVbY10saChjKSxnLnJlamVjdCk7cmV0dXJuIGcucHJvbWlzZSgpfX0pO3ZhciBRPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihiLGMpe2EuY29uc29sZSYmYS5jb25zb2xlLndhcm4mJmImJlEudGVzdChiLm5hbWUpJiZhLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2IubWVzc2FnZSxiLnN0YWNrLGMpfSxyLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGIpe2Euc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGJ9KX07dmFyIFI9ci5EZWZlcnJlZCgpO3IuZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIFIudGhlbihhKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGEpe3IucmVhZHlFeGNlcHRpb24oYSl9KSx0aGlzfSxyLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tci5yZWFkeVdhaXQ6ci5pc1JlYWR5KXx8KHIuaXNSZWFkeT0hMCxhIT09ITAmJi0tci5yZWFkeVdhaXQ+MHx8Ui5yZXNvbHZlV2l0aChkLFtyXSkpfX0pLHIucmVhZHkudGhlbj1SLnRoZW47ZnVuY3Rpb24gUygpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxcbmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixTKSxyLnJlYWR5KCl9XCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Euc2V0VGltZW91dChyLnJlYWR5KTooZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFMpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixTKSk7dmFyIFQ9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09ci50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpVChhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxyLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwocihhKSxjKX0pKSxiKSlmb3IoO2g8aTtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxVPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gVigpe3RoaXMuZXhwYW5kbz1yLmV4cGFuZG8rVi51aWQrK31WLnVpZD0xLFYucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LFUoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbci5jYW1lbENhc2UoYildPWM7ZWxzZSBmb3IoZCBpbiBiKWVbci5jYW1lbENhc2UoZCldPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bci5jYW1lbENhc2UoYildfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz90aGlzLmdldChhLGIpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1kKXtpZih2b2lkIDAhPT1iKXtBcnJheS5pc0FycmF5KGIpP2I9Yi5tYXAoci5jYW1lbENhc2UpOihiPXIuY2FtZWxDYXNlKGIpLGI9YiBpbiBkP1tiXTpiLm1hdGNoKEwpfHxbXSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGRbYltjXV19KHZvaWQgMD09PWJ8fHIuaXNFbXB0eU9iamVjdChkKSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGFbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09YiYmIXIuaXNFbXB0eU9iamVjdChiKX19O3ZhciBXPW5ldyBWLFg9bmV3IFYsWT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sWj0vW0EtWl0vZztmdW5jdGlvbiAkKGEpe3JldHVyblwidHJ1ZVwiPT09YXx8XCJmYWxzZVwiIT09YSYmKFwibnVsbFwiPT09YT9udWxsOmE9PT0rYStcIlwiPythOlkudGVzdChhKT9KU09OLnBhcnNlKGEpOmEpfWZ1bmN0aW9uIF8oYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShaLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9JChjKX1jYXRjaChlKXt9WC5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9ci5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIFguaGFzRGF0YShhKXx8Vy5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gWC5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7WC5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBXLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Vy5yZW1vdmUoYSxiKX19KSxyLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPVguZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhVy5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPXIuY2FtZWxDYXNlKGQuc2xpY2UoNSkpLF8oZixkLGVbZF0pKSk7Vy5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtYLnNldCh0aGlzLGEpfSk6VCh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9WC5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9XyhmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXtYLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5yZW1vdmUodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoYSlyZXR1cm4gYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1XLmdldChhLGIpLGMmJighZHx8QXJyYXkuaXNBcnJheShjKT9kPVcuYWNjZXNzKGEsYixyLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPXIucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9ci5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtyLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBXLmdldChhLGMpfHxXLmFjY2VzcyhhLGMse2VtcHR5OnIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Vy5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxyLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP3IucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9ci5xdWV1ZSh0aGlzLGEsYik7ci5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmci5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9ci5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Vy5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgYWE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLGJhPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2FhK1wiKShbYS16JV0qKSRcIixcImlcIiksY2E9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGRhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PWEuc3R5bGUuZGlzcGxheXx8XCJcIj09PWEuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSkmJlwibm9uZVwiPT09ci5jc3MoYSxcImRpc3BsYXlcIil9LGVhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTtmdW5jdGlvbiBmYShhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gci5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChyLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0oci5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmYmEuZXhlYyhyLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLHIuc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIGdhPXt9O2Z1bmN0aW9uIGhhKGEpe3ZhciBiLGM9YS5vd25lckRvY3VtZW50LGQ9YS5ub2RlTmFtZSxlPWdhW2RdO3JldHVybiBlP2U6KGI9Yy5ib2R5LmFwcGVuZENoaWxkKGMuY3JlYXRlRWxlbWVudChkKSksZT1yLmNzcyhiLFwiZGlzcGxheVwiKSxiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksXCJub25lXCI9PT1lJiYoZT1cImJsb2NrXCIpLGdhW2RdPWUsZSl9ZnVuY3Rpb24gaWEoYSxiKXtmb3IodmFyIGMsZCxlPVtdLGY9MCxnPWEubGVuZ3RoO2Y8ZztmKyspZD1hW2ZdLGQuc3R5bGUmJihjPWQuc3R5bGUuZGlzcGxheSxiPyhcIm5vbmVcIj09PWMmJihlW2ZdPVcuZ2V0KGQsXCJkaXNwbGF5XCIpfHxudWxsLGVbZl18fChkLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJmRhKGQpJiYoZVtmXT1oYShkKSkpOlwibm9uZVwiIT09YyYmKGVbZl09XCJub25lXCIsVy5zZXQoZCxcImRpc3BsYXlcIixjKSkpO2ZvcihmPTA7ZjxnO2YrKyludWxsIT1lW2ZdJiYoYVtmXS5zdHlsZS5kaXNwbGF5PWVbZl0pO3JldHVybiBhfXIuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGlhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGlhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGEodGhpcyk/cih0aGlzKS5zaG93KCk6cih0aGlzKS5oaWRlKCl9KX19KTt2YXIgamE9L14oPzpjaGVja2JveHxyYWRpbykkL2ksa2E9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLGxhPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksbWE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTttYS5vcHRncm91cD1tYS5vcHRpb24sbWEudGJvZHk9bWEudGZvb3Q9bWEuY29sZ3JvdXA9bWEuY2FwdGlvbj1tYS50aGVhZCxtYS50aD1tYS50ZDtmdW5jdGlvbiBuYShhLGIpe3ZhciBjO3JldHVybiBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXSx2b2lkIDA9PT1ifHxiJiZCKGEsYik/ci5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBvYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylXLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxXLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIHBhPS88fCYjP1xcdys7LztmdW5jdGlvbiBxYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG49MCxvPWEubGVuZ3RoO248bztuKyspaWYoZj1hW25dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1yLnR5cGUoZikpci5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYocGEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oa2EuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT1tYVtoXXx8bWEuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStyLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7ci5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixuPTA7d2hpbGUoZj1tW24rK10paWYoZCYmci5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1yLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPW5hKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmb2EoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKWxhLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksby5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLG8ubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgcmE9ZC5kb2N1bWVudEVsZW1lbnQsc2E9L15rZXkvLHRhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyx1YT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHZhKCl7cmV0dXJuITB9ZnVuY3Rpb24gd2EoKXtyZXR1cm4hMX1mdW5jdGlvbiB4YSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24geWEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKXlhKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9d2E7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gcigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1yLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1yLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVcuZ2V0KGEpO2lmKHEpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IocmEsZSksYy5ndWlkfHwoYy5ndWlkPXIuZ3VpZCsrKSwoaT1xLmV2ZW50cyl8fChpPXEuZXZlbnRzPXt9KSwoZz1xLmhhbmRsZSl8fChnPXEuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiByJiZyLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9yLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChMKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9dWEuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuJiYobD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LGs9ci5leHRlbmQoe3R5cGU6bixvcmlnVHlwZTpwLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmci5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpvLmpvaW4oXCIuXCIpfSxmKSwobT1pW25dKXx8KG09aVtuXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLG8sZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobixnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLHIuZXZlbnQuZ2xvYmFsW25dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmhhc0RhdGEoYSkmJlcuZ2V0KGEpO2lmKHEmJihpPXEuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbil7bD1yLmV2ZW50LnNwZWNpYWxbbl18fHt9LG49KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG4sbT1pW25dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitvLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcCE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxvLHEuaGFuZGxlKSE9PSExfHxyLnJlbW92ZUV2ZW50KGEsbixxLmhhbmRsZSksZGVsZXRlIGlbbl0pfWVsc2UgZm9yKG4gaW4gaSlyLmV2ZW50LnJlbW92ZShhLG4rYltqXSxjLGQsITApO3IuaXNFbXB0eU9iamVjdChpKSYmVy5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXt2YXIgYj1yLmV2ZW50LmZpeChhKSxjLGQsZSxmLGcsaCxpPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxqPShXLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXXx8W10saz1yLmV2ZW50LnNwZWNpYWxbYi50eXBlXXx8e307Zm9yKGlbMF09YixjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKylpW2NdPWFyZ3VtZW50c1tjXTtpZihiLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGIpIT09ITEpe2g9ci5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYixqKSxjPTA7d2hpbGUoKGY9aFtjKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7Yi5jdXJyZW50VGFyZ2V0PWYuZWxlbSxkPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tkKytdKSYmIWIuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSliLnJuYW1lc3BhY2UmJiFiLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChiLmhhbmRsZU9iaj1nLGIuZGF0YT1nLmRhdGEsZT0oKHIuZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGIucmVzdWx0PWUpPT09ITEmJihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGIpLGIucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnLGg9W10saT1iLmRlbGVnYXRlQ291bnQsaj1hLnRhcmdldDtpZihpJiZqLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWEudHlwZSYmYS5idXR0b24+PTEpKWZvcig7aiE9PXRoaXM7aj1qLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWoubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGouZGlzYWJsZWQhPT0hMCkpe2ZvcihmPVtdLGc9e30sYz0wO2M8aTtjKyspZD1iW2NdLGU9ZC5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1nW2VdJiYoZ1tlXT1kLm5lZWRzQ29udGV4dD9yKGUsdGhpcykuaW5kZXgoaik+LTE6ci5maW5kKGUsdGhpcyxudWxsLFtqXSkubGVuZ3RoKSxnW2VdJiZmLnB1c2goZCk7Zi5sZW5ndGgmJmgucHVzaCh7ZWxlbTpqLGhhbmRsZXJzOmZ9KX1yZXR1cm4gaj10aGlzLGk8Yi5sZW5ndGgmJmgucHVzaCh7ZWxlbTpqLGhhbmRsZXJzOmIuc2xpY2UoaSl9KSxofSxhZGRQcm9wOmZ1bmN0aW9uKGEsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIuRXZlbnQucHJvdG90eXBlLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpyLmlzRnVuY3Rpb24oYik/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGIodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFthXX0sc2V0OmZ1bmN0aW9uKGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX19KX0sZml4OmZ1bmN0aW9uKGEpe3JldHVybiBhW3IuZXhwYW5kb10/YTpuZXcgci5FdmVudChhKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PXhhKCkmJnRoaXMuZm9jdXMpcmV0dXJuIHRoaXMuZm9jdXMoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcz09PXhhKCkmJnRoaXMuYmx1cilyZXR1cm4gdGhpcy5ibHVyKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYoXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZCKHRoaXMsXCJpbnB1dFwiKSlyZXR1cm4gdGhpcy5jbGljaygpLCExfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gQihhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fX0sci5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX0sci5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygci5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/dmE6d2EsdGhpcy50YXJnZXQ9YS50YXJnZXQmJjM9PT1hLnRhcmdldC5ub2RlVHlwZT9hLnRhcmdldC5wYXJlbnROb2RlOmEudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1hLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWEucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWEsYiYmci5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8ci5ub3coKSx2b2lkKHRoaXNbci5leHBhbmRvXT0hMCkpOm5ldyByLkV2ZW50KGEsYil9LHIuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpyLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDp3YSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDp3YSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDp3YSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LHIuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihhKXt2YXIgYj1hLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS53aGljaCYmc2EudGVzdChhLnR5cGUpP251bGwhPWEuY2hhckNvZGU/YS5jaGFyQ29kZTphLmtleUNvZGU6IWEud2hpY2gmJnZvaWQgMCE9PWImJnRhLnRlc3QoYS50eXBlKT8xJmI/MToyJmI/Mzo0JmI/MjowOmEud2hpY2h9fSxyLmV2ZW50LmFkZFByb3ApLHIuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe3IuZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuIGUmJihlPT09ZHx8ci5jb250YWlucyhkLGUpKXx8KGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksci5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHlhKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLHIoYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGIhPT0hMSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGM9YixiPXZvaWQgMCksYz09PSExJiYoYz13YSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIgemE9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksQWE9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksQmE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxDYT0vXnRydWVcXC8oLiopLyxEYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gRWEoYSxiKXtyZXR1cm4gQihhLFwidGFibGVcIikmJkIoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/cihcIj50Ym9keVwiLGEpWzBdfHxhOmF9ZnVuY3Rpb24gRmEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gR2EoYSl7dmFyIGI9Q2EuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIEhhKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoVy5oYXNEYXRhKGEpJiYoZj1XLmFjY2VzcyhhKSxnPVcuc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtjPGQ7YysrKXIuZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1YLmhhc0RhdGEoYSkmJihoPVguYWNjZXNzKGEpLGk9ci5leHRlbmQoe30saCksWC5zZXQoYixpKSl9fWZ1bmN0aW9uIElhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJmphLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gSmEoYSxiLGMsZCl7Yj1nLmFwcGx5KFtdLGIpO3ZhciBlLGYsaCxpLGosayxsPTAsbT1hLmxlbmd0aCxuPW0tMSxxPWJbMF0scz1yLmlzRnVuY3Rpb24ocSk7aWYoc3x8bT4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIW8uY2hlY2tDbG9uZSYmQmEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7cyYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLEphKGYsYixjLGQpfSk7aWYobSYmKGU9cWEoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxmPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZiksZnx8ZCkpe2ZvcihoPXIubWFwKG5hKGUsXCJzY3JpcHRcIiksRmEpLGk9aC5sZW5ndGg7bDxtO2wrKylqPWUsbCE9PW4mJihqPXIuY2xvbmUoaiwhMCwhMCksaSYmci5tZXJnZShoLG5hKGosXCJzY3JpcHRcIikpKSxjLmNhbGwoYVtsXSxqLGwpO2lmKGkpZm9yKGs9aFtoLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LHIubWFwKGgsR2EpLGw9MDtsPGk7bCsrKWo9aFtsXSxsYS50ZXN0KGoudHlwZXx8XCJcIikmJiFXLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmci5jb250YWlucyhrLGopJiYoai5zcmM/ci5fZXZhbFVybCYmci5fZXZhbFVybChqLnNyYyk6cChqLnRleHRDb250ZW50LnJlcGxhY2UoRGEsXCJcIiksaykpfXJldHVybiBhfWZ1bmN0aW9uIEthKGEsYixjKXtmb3IodmFyIGQsZT1iP3IuZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxyLmNsZWFuRGF0YShuYShkKSksZC5wYXJlbnROb2RlJiYoYyYmci5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJm9hKG5hKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9ci5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh6YSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9ci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShvLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxyLmlzWE1MRG9jKGEpKSlmb3IoZz1uYShoKSxmPW5hKGEpLGQ9MCxlPWYubGVuZ3RoO2Q8ZTtkKyspSWEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8bmEoYSksZz1nfHxuYShoKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUhhKGZbZF0sZ1tkXSk7ZWxzZSBIYShhLGgpO3JldHVybiBnPW5hKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmb2EoZywhaSYmbmEoYSxcInNjcmlwdFwiKSksaH0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZT1yLmV2ZW50LnNwZWNpYWwsZj0wO3ZvaWQgMCE9PShjPWFbZl0pO2YrKylpZihVKGMpKXtpZihiPWNbVy5leHBhbmRvXSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZVtkXT9yLmV2ZW50LnJlbW92ZShjLGQpOnIucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtjW1cuZXhwYW5kb109dm9pZCAwfWNbWC5leHBhbmRvXSYmKGNbWC5leHBhbmRvXT12b2lkIDApfX19KSxyLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIEthKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9yLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9RWEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYoci5jbGVhbkRhdGEobmEoYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbCE9YSYmYSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHIuY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFBYS50ZXN0KGEpJiYhbWFbKGthLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1yLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7YzxkO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYoci5jbGVhbkRhdGEobmEoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO3IuaW5BcnJheSh0aGlzLGEpPDAmJihyLmNsZWFuRGF0YShuYSh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLHIuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1yKGEpLGY9ZS5sZW5ndGgtMSxnPTA7Zzw9ZjtnKyspYz1nPT09Zj90aGlzOnRoaXMuY2xvbmUoITApLHIoZVtnXSlbYl0oYyksaC5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgTGE9L15tYXJnaW4vLE1hPW5ldyBSZWdFeHAoXCJeKFwiK2FhK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLE5hPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX07IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2lmKGkpe2kuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGkuaW5uZXJIVE1MPVwiXCIscmEuYXBwZW5kQ2hpbGQoaCk7dmFyIGI9YS5nZXRDb21wdXRlZFN0eWxlKGkpO2M9XCIxJVwiIT09Yi50b3AsZz1cIjJweFwiPT09Yi5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PWIud2lkdGgsaS5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGY9XCI0cHhcIj09PWIubWFyZ2luUmlnaHQscmEucmVtb3ZlQ2hpbGQoaCksaT1udWxsfX12YXIgYyxlLGYsZyxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnN0eWxlJiYoaS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsby5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxoLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGguYXBwZW5kQ2hpbGQoaSksci5leHRlbmQobyx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBiKCksY30sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGZ9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBiKCksZ319KSl9KCk7ZnVuY3Rpb24gT2EoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxOYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fHIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1yLnN0eWxlKGEsYikpLCFvLnBpeGVsTWFyZ2luUmlnaHQoKSYmTWEudGVzdChnKSYmTGEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBQYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgUWE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFJhPS9eLS0vLFNhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxUYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LFVhPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxWYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gV2EoYSl7aWYoYSBpbiBWYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPVVhLmxlbmd0aDt3aGlsZShjLS0paWYoYT1VYVtjXStiLGEgaW4gVmEpcmV0dXJuIGF9ZnVuY3Rpb24gWGEoYSl7dmFyIGI9ci5jc3NQcm9wc1thXTtyZXR1cm4gYnx8KGI9ci5jc3NQcm9wc1thXT1XYShhKXx8YSksYn1mdW5jdGlvbiBZYShhLGIsYyl7dmFyIGQ9YmEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIFphKGEsYixjLGQsZSl7dmFyIGYsZz0wO2ZvcihmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowO2Y8NDtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9ci5jc3MoYSxjK2NhW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1yLmNzcyhhLFwicGFkZGluZ1wiK2NhW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPXIuY3NzKGEsXCJib3JkZXJcIitjYVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gJGEoYSxiLGMpe3ZhciBkLGU9TmEoYSksZj1PYShhLGIsZSksZz1cImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxlKTtyZXR1cm4gTWEudGVzdChmKT9mOihkPWcmJihvLmJveFNpemluZ1JlbGlhYmxlKCl8fGY9PT1hLnN0eWxlW2JdKSxcImF1dG9cIj09PWYmJihmPWFbXCJvZmZzZXRcIitiWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKV0pLGY9cGFyc2VGbG9hdChmKXx8MCxmK1phKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGUpK1wicHhcIil9ci5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1PYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKSxqPWEuc3R5bGU7cmV0dXJuIGl8fChiPVhhKGgpKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTpqW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1iYS5leGVjKGMpKSYmZVsxXSYmKGM9ZmEoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChyLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLG8uY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChqW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGk/ai5zZXRQcm9wZXJ0eShiLGMpOmpbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9ci5jYW1lbENhc2UoYiksaT1SYS50ZXN0KGIpO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1PYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIFRhJiYoZT1UYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxyLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7aWYoYylyZXR1cm4hUWEudGVzdChyLmNzcyhhLFwiZGlzcGxheVwiKSl8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/JGEoYSxiLGQpOmVhKGEsU2EsZnVuY3Rpb24oKXtyZXR1cm4gJGEoYSxiLGQpfSl9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZOYShhKSxnPWQmJlphKGEsYixkLFwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1iYS5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1yLmNzcyhhLGIpKSxZYShhLGMsZyl9fX0pLHIuY3NzSG9va3MubWFyZ2luTGVmdD1QYShvLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe2lmKGIpcmV0dXJuKHBhcnNlRmxvYXQoT2EoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtZWEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksci5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdO2Q8NDtkKyspZVthK2NhW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LExhLnRlc3QoYSl8fChyLmNzc0hvb2tzW2ErYl0uc2V0PVlhKX0pLHIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKEFycmF5LmlzQXJyYXkoYikpe2ZvcihkPU5hKGEpLGU9Yi5sZW5ndGg7ZzxlO2crKylmW2JbZ11dPXIuY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9yLnN0eWxlKGEsYixjKTpyLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX19KTtmdW5jdGlvbiBfYShhLGIsYyxkLGUpe3JldHVybiBuZXcgX2EucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1yLlR3ZWVuPV9hLF9hLnByb3RvdHlwZT17Y29uc3RydWN0b3I6X2EsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8ci5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChyLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPV9hLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9ci5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOl9hLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LF9hLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1fYS5wcm90b3R5cGUsX2EucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9ci5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe3IuZnguc3RlcFthLnByb3BdP3IuZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtyLmNzc1Byb3BzW2EucHJvcF1dJiYhci5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93OnIuc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LF9hLnByb3BIb29rcy5zY3JvbGxUb3A9X2EucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sci5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LHIuZng9X2EucHJvdG90eXBlLmluaXQsci5meC5zdGVwPXt9O3ZhciBhYixiYixjYj0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sZGI9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBlYigpe2JiJiYoZC5oaWRkZW49PT0hMSYmYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZWIpOmEuc2V0VGltZW91dChlYixyLmZ4LmludGVydmFsKSxyLmZ4LnRpY2soKSl9ZnVuY3Rpb24gZmIoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YWI9dm9pZCAwfSksYWI9ci5ub3coKX1mdW5jdGlvbiBnYihhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ZDw0O2QrPTItYiljPWNhW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIGhiKGEsYixjKXtmb3IodmFyIGQsZT0oa2IudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoa2IudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBpYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPVwid2lkdGhcImluIGJ8fFwiaGVpZ2h0XCJpbiBiLG09dGhpcyxuPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJmRhKGEpLHE9Vy5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoZz1yLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1nLnVucXVldWVkJiYoZy51bnF1ZXVlZD0wLGg9Zy5lbXB0eS5maXJlLGcuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2cudW5xdWV1ZWR8fGgoKX0pLGcudW5xdWV1ZWQrKyxtLmFsd2F5cyhmdW5jdGlvbigpe20uYWx3YXlzKGZ1bmN0aW9uKCl7Zy51bnF1ZXVlZC0tLHIucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8Zy5lbXB0eS5maXJlKCl9KX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxjYi50ZXN0KGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1uW2RdPXEmJnFbZF18fHIuc3R5bGUoYSxkKX1pZihpPSFyLmlzRW1wdHlPYmplY3QoYiksaXx8IXIuaXNFbXB0eU9iamVjdChuKSl7bCYmMT09PWEubm9kZVR5cGUmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPXEmJnEuZGlzcGxheSxudWxsPT1qJiYoaj1XLmdldChhLFwiZGlzcGxheVwiKSksaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxcIm5vbmVcIj09PWsmJihqP2s9ajooaWEoW2FdLCEwKSxqPWEuc3R5bGUuZGlzcGxheXx8aixrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLGlhKFthXSkpKSwoXCJpbmxpbmVcIj09PWt8fFwiaW5saW5lLWJsb2NrXCI9PT1rJiZudWxsIT1qKSYmXCJub25lXCI9PT1yLmNzcyhhLFwiZmxvYXRcIikmJihpfHwobS5kb25lKGZ1bmN0aW9uKCl7by5kaXNwbGF5PWp9KSxudWxsPT1qJiYoaz1vLmRpc3BsYXksaj1cIm5vbmVcIj09PWs/XCJcIjprKSksby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLG0uYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKSxpPSExO2ZvcihkIGluIG4paXx8KHE/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPVcuYWNjZXNzKGEsXCJmeHNob3dcIix7ZGlzcGxheTpqfSksZiYmKHEuaGlkZGVuPSFwKSxwJiZpYShbYV0sITApLG0uZG9uZShmdW5jdGlvbigpe3B8fGlhKFthXSksVy5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoZCBpbiBuKXIuc3R5bGUoYSxkLG5bZF0pfSkpLGk9aGIocD9xW2RdOjAsZCxtKSxkIGluIHF8fChxW2RdPWkuc3RhcnQscCYmKGkuZW5kPWkuc3RhcnQsaS5zdGFydD0wKSl9fWZ1bmN0aW9uIGpiKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9ci5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxBcnJheS5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1yLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24ga2IoYSxiLGMpe3ZhciBkLGUsZj0wLGc9a2IucHJlZmlsdGVycy5sZW5ndGgsaD1yLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1hYnx8ZmIoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7ZzxpO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLGY8MSYmaT9jOihpfHxoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6ci5leHRlbmQoe30sYiksb3B0czpyLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6ci5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTphYnx8ZmIoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPXIuVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7YzxkO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoamIoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7ZjxnO2YrKylpZihkPWtiLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiByLmlzRnVuY3Rpb24oZC5zdG9wKSYmKHIuX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1yLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gci5tYXAoayxoYixqKSxyLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKSxyLmZ4LnRpbWVyKHIuZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGp9ci5BbmltYXRpb249ci5leHRlbmQoa2Ise3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIGZhKGMuZWxlbSxhLGJhLmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7ci5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goTCk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspYz1hW2RdLGtiLnR3ZWVuZXJzW2NdPWtiLnR3ZWVuZXJzW2NdfHxbXSxrYi50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltpYl0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9rYi5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6a2IucHJlZmlsdGVycy5wdXNoKGEpfX0pLHIuc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP3IuZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8ci5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFyLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiByLmZ4Lm9mZj9kLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIGQuZHVyYXRpb24mJihkLmR1cmF0aW9uIGluIHIuZnguc3BlZWRzP2QuZHVyYXRpb249ci5meC5zcGVlZHNbZC5kdXJhdGlvbl06ZC5kdXJhdGlvbj1yLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ZC5xdWV1ZSYmZC5xdWV1ZSE9PSEwfHwoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe3IuaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmci5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LHIuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKGRhKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXIuaXNFbXB0eU9iamVjdChhKSxmPXIuc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1rYih0aGlzLHIuZXh0ZW5kKHt9LGEpLGYpOyhlfHxXLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9ci50aW1lcnMsZz1XLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZkYi50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyFiJiZjfHxyLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPVcuZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9ci50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLHIucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2I8ZztiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksci5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPXIuZm5bYl07ci5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoZ2IoYiwhMCksYSxkLGUpfX0pLHIuZWFjaCh7c2xpZGVEb3duOmdiKFwic2hvd1wiKSxzbGlkZVVwOmdiKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpnYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxyLnRpbWVycz1bXSxyLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1yLnRpbWVycztmb3IoYWI9ci5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxyLmZ4LnN0b3AoKSxhYj12b2lkIDB9LHIuZngudGltZXI9ZnVuY3Rpb24oYSl7ci50aW1lcnMucHVzaChhKSxyLmZ4LnN0YXJ0KCl9LHIuZnguaW50ZXJ2YWw9MTMsci5meC5zdGFydD1mdW5jdGlvbigpe2JifHwoYmI9ITAsZWIoKSl9LHIuZnguc3RvcD1mdW5jdGlvbigpe2JiPW51bGx9LHIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHIuZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1yLmZ4P3IuZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixvLmNoZWNrT249XCJcIiE9PWEudmFsdWUsby5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLG8ucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGxiLG1iPXIuZXhwci5hdHRySGFuZGxlO3IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksci5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP3IucHJvcChhLGIsYyk6KDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoZT1yLmF0dHJIb29rc1tiLnRvTG93ZXJDYXNlKCldfHwoci5leHByLm1hdGNoLmJvb2wudGVzdChiKT9sYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgci5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1yLmZpbmQuYXR0cihhLGIpLFxubnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFvLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJkIoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9YiYmYi5tYXRjaChMKTtpZihlJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWVbZCsrXSlhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxsYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP3IucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LHIuZWFjaChyLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1tYltiXXx8ci5maW5kLmF0dHI7bWJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZz1iLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGR8fChmPW1iW2ddLG1iW2ddPWUsZT1udWxsIT1jKGEsYixkKT9nOm51bGwsbWJbZ109ZiksZX19KTt2YXIgbmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxvYj0vXig/OmF8YXJlYSkkL2k7ci5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbci5wcm9wRml4W2FdfHxhXX0pfX0pLHIuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmci5pc1hNTERvYyhhKXx8KGI9ci5wcm9wRml4W2JdfHxiLGU9ci5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6bmIudGVzdChhLm5vZGVOYW1lKXx8b2IudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxvLm9wdFNlbGVjdGVkfHwoci5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHIuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtyLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gcGIoYSl7dmFyIGI9YS5tYXRjaChMKXx8W107cmV0dXJuIGIuam9pbihcIiBcIil9ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifXIuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9cGIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpyLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxxYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1yKHRoaXMpLGY9YS5tYXRjaChMKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPXFiKHRoaXMpLGImJlcuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpXLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK3BiKHFiKGMpKStcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgcmI9L1xcci9nO3IuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1yLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMscih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOkFycmF5LmlzQXJyYXkoZSkmJihlPXIubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1yLnZhbEhvb2tzW3RoaXMudHlwZV18fHIudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9ci52YWxIb29rc1tlLnR5cGVdfHxyLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShyYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLHIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6cGIoci50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPWEub3B0aW9ucyxmPWEuc2VsZWN0ZWRJbmRleCxnPVwic2VsZWN0LW9uZVwiPT09YS50eXBlLGg9Zz9udWxsOltdLGk9Zz9mKzE6ZS5sZW5ndGg7Zm9yKGQ9ZjwwP2k6Zz9mOjA7ZDxpO2QrKylpZihjPWVbZF0sKGMuc2VsZWN0ZWR8fGQ9PT1mKSYmIWMuZGlzYWJsZWQmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhQihjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9cihjKS52YWwoKSxnKXJldHVybiBiO2gucHVzaChiKX1yZXR1cm4gaH0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPXIubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1yLmluQXJyYXkoci52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksci5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe3IudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe2lmKEFycmF5LmlzQXJyYXkoYikpcmV0dXJuIGEuY2hlY2tlZD1yLmluQXJyYXkocihhKS52YWwoKSxiKT4tMX19LG8uY2hlY2tPbnx8KHIudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIHNiPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztyLmV4dGVuZChyLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGssbSxuLG89W2V8fGRdLHA9bC5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHE9bC5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhc2IudGVzdChwK3IuZXZlbnQudHJpZ2dlcmVkKSYmKHAuaW5kZXhPZihcIi5cIik+LTEmJihxPXAuc3BsaXQoXCIuXCIpLHA9cS5zaGlmdCgpLHEuc29ydCgpKSxrPXAuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3AsYj1iW3IuZXhwYW5kb10/YjpuZXcgci5FdmVudChwLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1xLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOnIubWFrZUFycmF5KGMsW2JdKSxuPXIuZXZlbnQuc3BlY2lhbFtwXXx8e30sZnx8IW4udHJpZ2dlcnx8bi50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbi5ub0J1YmJsZSYmIXIuaXNXaW5kb3coZSkpe2ZvcihqPW4uZGVsZWdhdGVUeXBlfHxwLHNiLnRlc3QoaitwKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKW8ucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZvLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1vW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpuLmJpbmRUeXBlfHxwLG09KFcuZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZXLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWsmJmhba10sbSYmbS5hcHBseSYmVShoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cCxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxuLl9kZWZhdWx0JiZuLl9kZWZhdWx0LmFwcGx5KG8ucG9wKCksYykhPT0hMXx8IVUoZSl8fGsmJnIuaXNGdW5jdGlvbihlW3BdKSYmIXIuaXNXaW5kb3coZSkmJihpPWVba10saSYmKGVba109bnVsbCksci5ldmVudC50cmlnZ2VyZWQ9cCxlW3BdKCksci5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2tdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1yLmV4dGVuZChuZXcgci5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtyLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLHIuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO2lmKGMpcmV0dXJuIHIuZXZlbnQudHJpZ2dlcihhLGIsYywhMCl9fSksci5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLHIuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxvLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsby5mb2N1c2lufHxyLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3IuZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxyLmV2ZW50LmZpeChhKSl9O3IuZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1XLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLFcuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKS0xO2U/Vy5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLnJlbW92ZShkLGIpKX19fSk7dmFyIHRiPWEubG9jYXRpb24sdWI9ci5ub3coKSx2Yj0vXFw/LztyLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8ci5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihBcnJheS5pc0FycmF5KGIpKXIuZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8d2IudGVzdChhKT9kKGEsZSk6QWIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1yLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilBYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfXIucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmlzRnVuY3Rpb24oYik/YigpOmI7ZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1jP1wiXCI6Yyl9O2lmKEFycmF5LmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhci5pc1BsYWluT2JqZWN0KGEpKXIuZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpQWIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIil9LHIuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gci5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXIucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/ci5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhcih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmemIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIXliLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFqYS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPXIodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpBcnJheS5pc0FycmF5KGMpP3IubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBCYj0vJTIwL2csQ2I9LyMuKiQvLERiPS8oWz8mXSlfPVteJl0qLyxFYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLEZiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLEdiPS9eKD86R0VUfEhFQUQpJC8sSGI9L15cXC9cXC8vLEliPXt9LEpiPXt9LEtiPVwiKi9cIi5jb25jYXQoXCIqXCIpLExiPWQuY3JlYXRlRWxlbWVudChcImFcIik7TGIuaHJlZj10Yi5ocmVmO2Z1bmN0aW9uIE1iKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChMKXx8W107aWYoci5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIE5iKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PUpiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsci5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gT2IoYSxiKXt2YXIgYyxkLGU9ci5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmci5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIFBiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9aWYoZilyZXR1cm4gZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdfWZ1bmN0aW9uIFFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19ci5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnRiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RmIudGVzdCh0Yi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6S2IsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOnIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsci5hamF4U2V0dGluZ3MpLGIpOk9iKHIuYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtLG4sbz1yLmFqYXhTZXR1cCh7fSxjKSxwPW8uY29udGV4dHx8byxxPW8uY29udGV4dCYmKHAubm9kZVR5cGV8fHAuanF1ZXJ5KT9yKHApOnIuZXZlbnQscz1yLkRlZmVycmVkKCksdD1yLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHU9by5zdGF0dXNDb2RlfHx7fSx2PXt9LHc9e30seD1cImNhbmNlbGVkXCIseT17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGspe2lmKCFoKXtoPXt9O3doaWxlKGI9RWIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBrP2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1rJiYoYT13W2EudG9Mb3dlckNhc2UoKV09d1thLnRvTG93ZXJDYXNlKCldfHxhLHZbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09ayYmKG8ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKGspeS5hbHdheXMoYVt5LnN0YXR1c10pO2Vsc2UgZm9yKGIgaW4gYSl1W2JdPVt1W2JdLGFbYl1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx4O3JldHVybiBlJiZlLmFib3J0KGIpLEEoMCxiKSx0aGlzfX07aWYocy5wcm9taXNlKHkpLG8udXJsPSgoYnx8by51cmx8fHRiLmhyZWYpK1wiXCIpLnJlcGxhY2UoSGIsdGIucHJvdG9jb2wrXCIvL1wiKSxvLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8by5tZXRob2R8fG8udHlwZSxvLmRhdGFUeXBlcz0oby5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtcIlwiXSxudWxsPT1vLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1vLnVybCxqLmhyZWY9ai5ocmVmLG8uY3Jvc3NEb21haW49TGIucHJvdG9jb2wrXCIvL1wiK0xiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh6KXtvLmNyb3NzRG9tYWluPSEwfX1pZihvLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBvLmRhdGEmJihvLmRhdGE9ci5wYXJhbShvLmRhdGEsby50cmFkaXRpb25hbCkpLE5iKEliLG8sYyx5KSxrKXJldHVybiB5O2w9ci5ldmVudCYmby5nbG9iYWwsbCYmMD09PXIuYWN0aXZlKysmJnIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxvLnR5cGU9by50eXBlLnRvVXBwZXJDYXNlKCksby5oYXNDb250ZW50PSFHYi50ZXN0KG8udHlwZSksZj1vLnVybC5yZXBsYWNlKENiLFwiXCIpLG8uaGFzQ29udGVudD9vLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJjA9PT0oby5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKG8uZGF0YT1vLmRhdGEucmVwbGFjZShCYixcIitcIikpOihuPW8udXJsLnNsaWNlKGYubGVuZ3RoKSxvLmRhdGEmJihmKz0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrby5kYXRhLGRlbGV0ZSBvLmRhdGEpLG8uY2FjaGU9PT0hMSYmKGY9Zi5yZXBsYWNlKERiLFwiJDFcIiksbj0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK3ViKysgK24pLG8udXJsPWYrbiksby5pZk1vZGlmaWVkJiYoci5sYXN0TW9kaWZpZWRbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsci5sYXN0TW9kaWZpZWRbZl0pLHIuZXRhZ1tmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLHIuZXRhZ1tmXSkpLChvLmRhdGEmJm8uaGFzQ29udGVudCYmby5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsby5jb250ZW50VHlwZSkseS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsby5kYXRhVHlwZXNbMF0mJm8uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0/by5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1vLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOm8uYWNjZXB0c1tcIipcIl0pO2ZvcihtIGluIG8uaGVhZGVycyl5LnNldFJlcXVlc3RIZWFkZXIobSxvLmhlYWRlcnNbbV0pO2lmKG8uYmVmb3JlU2VuZCYmKG8uYmVmb3JlU2VuZC5jYWxsKHAseSxvKT09PSExfHxrKSlyZXR1cm4geS5hYm9ydCgpO2lmKHg9XCJhYm9ydFwiLHQuYWRkKG8uY29tcGxldGUpLHkuZG9uZShvLnN1Y2Nlc3MpLHkuZmFpbChvLmVycm9yKSxlPU5iKEpiLG8sYyx5KSl7aWYoeS5yZWFkeVN0YXRlPTEsbCYmcS50cmlnZ2VyKFwiYWpheFNlbmRcIixbeSxvXSksaylyZXR1cm4geTtvLmFzeW5jJiZvLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5hYm9ydChcInRpbWVvdXRcIil9LG8udGltZW91dCkpO3RyeXtrPSExLGUuc2VuZCh2LEEpfWNhdGNoKHope2lmKGspdGhyb3cgejtBKC0xLHopfX1lbHNlIEEoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gQShiLGMsZCxoKXt2YXIgaixtLG4sdix3LHg9YztrfHwoaz0hMCxpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseS5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJmI8MzAwfHwzMDQ9PT1iLGQmJih2PVBiKG8seSxkKSksdj1RYihvLHYseSxqKSxqPyhvLmlmTW9kaWZpZWQmJih3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihyLmxhc3RNb2RpZmllZFtmXT13KSx3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihyLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09by50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3g9XCJub3Rtb2RpZmllZFwiOih4PXYuc3RhdGUsbT12LmRhdGEsbj12LmVycm9yLGo9IW4pKToobj14LCFiJiZ4fHwoeD1cImVycm9yXCIsYjwwJiYoYj0wKSkpLHkuc3RhdHVzPWIseS5zdGF0dXNUZXh0PShjfHx4KStcIlwiLGo/cy5yZXNvbHZlV2l0aChwLFttLHgseV0pOnMucmVqZWN0V2l0aChwLFt5LHgsbl0pLHkuc3RhdHVzQ29kZSh1KSx1PXZvaWQgMCxsJiZxLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeSxvLGo/bTpuXSksdC5maXJlV2l0aChwLFt5LHhdKSxsJiYocS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3ksb10pLC0tci5hY3RpdmV8fHIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHl9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiByLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiByLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLHIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtyW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiByLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxyLmFqYXgoci5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LHIuaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLHIuX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sci5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIHRoaXNbMF0mJihyLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzWzBdKSksYj1yKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1yKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPXIuaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYXJlbnQoYSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7cih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxyLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIXIuZXhwci5wc2V1ZG9zLnZpc2libGUoYSl9LHIuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuISEoYS5vZmZzZXRXaWR0aHx8YS5vZmZzZXRIZWlnaHR8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxyLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBSYj17MDoyMDAsMTIyMzoyMDR9LFNiPXIuYWpheFNldHRpbmdzLnhocigpO28uY29ycz0hIVNiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gU2Isby5hamF4PVNiPSEhU2Isci5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoby5jb3JzfHxTYiYmIWIuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKFJiW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fSksci5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEpe2EuY3Jvc3NEb21haW4mJihhLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxyLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gci5nbG9iYWxFdmFsKGEpLGF9fX0pLHIuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksci5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9cihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBUYj1bXSxVYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO3IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPVRiLnBvcCgpfHxyLmV4cGFuZG8rXCJfXCIrdWIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLHIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoVWIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlViLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO2lmKGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdKXJldHVybiBlPWIuanNvbnBDYWxsYmFjaz1yLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShVYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPSh2Yi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxyLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP3IoYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssVGIucHVzaChlKSksZyYmci5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwifSksby5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksci5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybltdO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKTt2YXIgZSxmLGc7cmV0dXJuIGJ8fChvLmNyZWF0ZUhUTUxEb2N1bWVudD8oYj1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSxlPWIuY3JlYXRlRWxlbWVudChcImJhc2VcIiksZS5ocmVmPWQubG9jYXRpb24uaHJlZixiLmhlYWQuYXBwZW5kQ2hpbGQoZSkpOmI9ZCksZj1DLmV4ZWMoYSksZz0hYyYmW10sZj9bYi5jcmVhdGVFbGVtZW50KGZbMV0pXTooZj1xYShbYV0sYixnKSxnJiZnLmxlbmd0aCYmcihnKS5yZW1vdmUoKSxyLm1lcmdlKFtdLGYuY2hpbGROb2RlcykpfSxyLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1wYihhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksci5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmci5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9yKFwiPGRpdj5cIikuYXBwZW5kKHIucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sci5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksci5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ3JlcChyLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH0sci5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1yLmNzcyhhLFwicG9zaXRpb25cIiksbD1yKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9ci5jc3MoYSxcInRvcFwiKSxpPXIuY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksci5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLHIuZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sci5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQsZSxmPXRoaXNbMF07aWYoZilyZXR1cm4gZi5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZD1mLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Zi5vd25lckRvY3VtZW50LGM9Yi5kb2N1bWVudEVsZW1lbnQsZT1iLmRlZmF1bHRWaWV3LHt0b3A6ZC50b3ArZS5wYWdlWU9mZnNldC1jLmNsaWVudFRvcCxsZWZ0OmQubGVmdCtlLnBhZ2VYT2Zmc2V0LWMuY2xpZW50TGVmdH0pOnt0b3A6MCxsZWZ0OjB9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09ci5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxCKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkPXt0b3A6ZC50b3Arci5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGxlZnQ6ZC5sZWZ0K3IuY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCl9KSx7dG9wOmIudG9wLWQudG9wLXIuY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LXIuY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1yLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8cmF9KX19KSxyLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtyLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGEpP2Y9YTo5PT09YS5ub2RlVHlwZSYmKGY9YS5kZWZhdWx0Vmlldyksdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPVBhKG8ucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe2lmKGMpcmV0dXJuIGM9T2EoYSxiKSxNYS50ZXN0KGMpP3IoYSkucG9zaXRpb24oKVtiXStcInB4XCI6Y30pfSksci5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe3IuZm5bZF09ZnVuY3Rpb24oZSxmKXt2YXIgZz1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxoPWN8fChlPT09ITB8fGY9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYixjLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGIpPzA9PT1kLmluZGV4T2YoXCJvdXRlclwiKT9iW1wiaW5uZXJcIithXTpiLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhmPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGZbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxmW1wib2Zmc2V0XCIrYV0sZltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZT9yLmNzcyhiLGMsaCk6ci5zdHlsZShiLGMsZSxoKX0sYixnP2U6dm9pZCAwLGcpfX0pfSksci5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxyLmhvbGRSZWFkeT1mdW5jdGlvbihhKXthP3IucmVhZHlXYWl0Kys6ci5yZWFkeSghMCl9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5LHIucGFyc2VKU09OPUpTT04ucGFyc2Usci5ub2RlTmFtZT1CLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBWYj1hLmpRdWVyeSxXYj1hLiQ7cmV0dXJuIHIubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09ciYmKGEuJD1XYiksYiYmYS5qUXVlcnk9PT1yJiYoYS5qUXVlcnk9VmIpLHJ9LGJ8fChhLmpRdWVyeT1hLiQ9cikscn0pO1xuLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjYuMFxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1yb2xlPVwibm9uZVwiIGNsYXNzPVwic2xpY2stcHJldiBidG4tZmxvYXRpbmcgYnRuLWxhcmdlIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCAgYmx1ZS1ncmV5IGxpZ2h0ZW4tNVwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfYmFjazwvaT48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiBjbGFzcz1cInNsaWNrLW5leHQgYnRuLWZsb2F0aW5nIGJ0bi1sYXJnZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgIGJsdWUtZ3JleSBsaWdodGVuLTVcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfZm9yd2FyZDwvaT48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgYXJpYS1saXZlPVwicG9saXRlXCIgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW2NvbXBvbmVudHNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMSkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigncmVhZHkuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMSkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLFxuICAgICAgICAgICAgICAgICcqOm5vdCguc2xpY2stYXJyb3cpJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZTtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXR0cigncm9sZScsICdsaXN0Ym94Jyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdyb2xlJzogJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGkgKyAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICduYXZpZ2F0aW9uJyArIF8uaW5zdGFuY2VVaWQgKyBpICsgJycsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSArICcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maXJzdCgpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpLmVuZCgpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2J1dHRvbicpLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJykuZW5kKClcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2JykuYXR0cigncm9sZScsICd0b29sYmFyJyk7XG4gICAgICAgIH1cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigncmVhZHkuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhpbmRleCk7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcztcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoc3dpcGVEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuLyohXG4gKiBNYXRlcmlhbGl6ZSB2MC45OC4yIChodHRwOi8vbWF0ZXJpYWxpemVjc3MuY29tKVxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSBNYXRlcmlhbGl6ZVxuICogTUlUIExpY2Vuc2UgKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL21hc3Rlci9MSUNFTlNFKVxuICovXG5pZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXt2YXIgalF1ZXJ5O2pRdWVyeT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlPyQ9cmVxdWlyZShcImpxdWVyeVwiKTokfWpRdWVyeS5lYXNpbmcuanN3aW5nPWpRdWVyeS5lYXNpbmcuc3dpbmcsalF1ZXJ5LmV4dGVuZChqUXVlcnkuZWFzaW5nLHtkZWY6XCJlYXNlT3V0UXVhZFwiLHN3aW5nOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGpRdWVyeS5lYXNpbmdbalF1ZXJ5LmVhc2luZy5kZWZdKGEsYixjLGQsZSl9LGVhc2VJblF1YWQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooYi89ZSkqYitjfSxlYXNlT3V0UXVhZDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKihiLz1lKSooYi0yKStjfSxlYXNlSW5PdXRRdWFkOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiK2M6LWQvMiooLS1iKihiLTIpLTEpK2N9LGVhc2VJbkN1YmljOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYitjfSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCooKGI9Yi9lLTEpKmIqYisxKStjfSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/ZC8yKmIqYipiK2M6ZC8yKigoYi09MikqYipiKzIpK2N9LGVhc2VJblF1YXJ0OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYipiK2N9LGVhc2VPdXRRdWFydDpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKigoYj1iL2UtMSkqYipiKmItMSkrY30sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4oYi89ZS8yKTwxP2QvMipiKmIqYipiK2M6LWQvMiooKGItPTIpKmIqYipiLTIpK2N9LGVhc2VJblF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKGIvPWUpKmIqYipiKmIrY30sZWFzZU91dFF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqKChiPWIvZS0xKSpiKmIqYipiKzEpK2N9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiKmIqYipiK2M6ZC8yKigoYi09MikqYipiKmIqYisyKStjfSxlYXNlSW5TaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQqTWF0aC5jb3MoYi9lKihNYXRoLlBJLzIpKStkK2N9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIGQqTWF0aC5zaW4oYi9lKihNYXRoLlBJLzIpKStjfSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuLWQvMiooTWF0aC5jb3MoTWF0aC5QSSpiL2UpLTEpK2N9LGVhc2VJbkV4cG86ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gMD09Yj9jOmQqTWF0aC5wb3coMiwxMCooYi9lLTEpKStjfSxlYXNlT3V0RXhwbzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBiPT1lP2MrZDpkKigtTWF0aC5wb3coMiwtMTAqYi9lKSsxKStjfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIDA9PWI/YzpiPT1lP2MrZDooYi89ZS8yKTwxP2QvMipNYXRoLnBvdygyLDEwKihiLTEpKStjOmQvMiooLU1hdGgucG93KDIsLTEwKi0tYikrMikrY30sZWFzZUluQ2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybi1kKihNYXRoLnNxcnQoMS0oYi89ZSkqYiktMSkrY30sZWFzZU91dENpcmM6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZCpNYXRoLnNxcnQoMS0oYj1iL2UtMSkqYikrY30sZWFzZUluT3V0Q2lyYzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lLzIpPDE/LWQvMiooTWF0aC5zcXJ0KDEtYipiKS0xKStjOmQvMiooTWF0aC5zcXJ0KDEtKGItPTIpKmIpKzEpK2N9LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigxPT0oYi89ZSkpcmV0dXJuIGMrZDtpZihnfHwoZz0uMyplKSxoPE1hdGguYWJzKGQpKXtoPWQ7dmFyIGY9Zy80fWVsc2UgdmFyIGY9Zy8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZC9oKTtyZXR1cm4tKGgqTWF0aC5wb3coMiwxMCooYi09MSkpKk1hdGguc2luKChiKmUtZikqKDIqTWF0aC5QSSkvZykpK2N9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9MS43MDE1OCxnPTAsaD1kO2lmKDA9PWIpcmV0dXJuIGM7aWYoMT09KGIvPWUpKXJldHVybiBjK2Q7aWYoZ3x8KGc9LjMqZSksaDxNYXRoLmFicyhkKSl7aD1kO3ZhciBmPWcvNH1lbHNlIHZhciBmPWcvKDIqTWF0aC5QSSkqTWF0aC5hc2luKGQvaCk7cmV0dXJuIGgqTWF0aC5wb3coMiwtMTAqYikqTWF0aC5zaW4oKGIqZS1mKSooMipNYXRoLlBJKS9nKStkK2N9LGVhc2VJbk91dEVsYXN0aWM6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj0xLjcwMTU4LGc9MCxoPWQ7aWYoMD09YilyZXR1cm4gYztpZigyPT0oYi89ZS8yKSlyZXR1cm4gYytkO2lmKGd8fChnPWUqKC4zKjEuNSkpLGg8TWF0aC5hYnMoZCkpe2g9ZDt2YXIgZj1nLzR9ZWxzZSB2YXIgZj1nLygyKk1hdGguUEkpKk1hdGguYXNpbihkL2gpO3JldHVybiBiPDE/LS41KihoKk1hdGgucG93KDIsMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKStjOmgqTWF0aC5wb3coMiwtMTAqKGItPTEpKSpNYXRoLnNpbigoYiplLWYpKigyKk1hdGguUEkpL2cpKi41K2QrY30sZWFzZUluQmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksZCooYi89ZSkqYiooKGYrMSkqYi1mKStjfSxlYXNlT3V0QmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksZCooKGI9Yi9lLTEpKmIqKChmKzEpKmIrZikrMSkrY30sZWFzZUluT3V0QmFjazpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHZvaWQgMD09ZiYmKGY9MS43MDE1OCksKGIvPWUvMik8MT9kLzIqKGIqYiooKChmKj0xLjUyNSkrMSkqYi1mKSkrYzpkLzIqKChiLT0yKSpiKigoKGYqPTEuNTI1KSsxKSpiK2YpKzIpK2N9LGVhc2VJbkJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBkLWpRdWVyeS5lYXNpbmcuZWFzZU91dEJvdW5jZShhLGUtYiwwLGQsZSkrY30sZWFzZU91dEJvdW5jZTpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybihiLz1lKTwxLzIuNzU/ZCooNy41NjI1KmIqYikrYzpiPDIvMi43NT9kKig3LjU2MjUqKGItPTEuNS8yLjc1KSpiKy43NSkrYzpiPDIuNS8yLjc1P2QqKDcuNTYyNSooYi09Mi4yNS8yLjc1KSpiKy45Mzc1KStjOmQqKDcuNTYyNSooYi09Mi42MjUvMi43NSkqYisuOTg0Mzc1KStjfSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gYjxlLzI/LjUqalF1ZXJ5LmVhc2luZy5lYXNlSW5Cb3VuY2UoYSwyKmIsMCxkLGUpK2M6LjUqalF1ZXJ5LmVhc2luZy5lYXNlT3V0Qm91bmNlKGEsMipiLWUsMCxkLGUpKy41KmQrY319KSxqUXVlcnkuZXh0ZW5kKGpRdWVyeS5lYXNpbmcse2Vhc2VJbk91dE1hdGVyaWFsOmZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuKGIvPWUvMik8MT9kLzIqYipiK2M6ZC80KigoYi09MikqYipiKzIpK2N9fSksalF1ZXJ5LlZlbG9jaXR5P2NvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIik6KCFmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBiPWEubGVuZ3RoLGQ9Yy50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWQmJiFjLmlzV2luZG93KGEpJiYoISgxIT09YS5ub2RlVHlwZXx8IWIpfHwoXCJhcnJheVwiPT09ZHx8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKSl9aWYoIWEualF1ZXJ5KXt2YXIgYz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgYy5mbi5pbml0KGEsYil9O2MuaXNXaW5kb3c9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PWEud2luZG93fSxjLnR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2VbZy5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sYy5pc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiYXJyYXlcIj09PWMudHlwZShhKX0sYy5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKGEpe3ZhciBiO2lmKCFhfHxcIm9iamVjdFwiIT09Yy50eXBlKGEpfHxhLm5vZGVUeXBlfHxjLmlzV2luZG93KGEpKXJldHVybiExO3RyeXtpZihhLmNvbnN0cnVjdG9yJiYhZi5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWYuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goZCl7cmV0dXJuITF9Zm9yKGIgaW4gYSk7cmV0dXJuIHZvaWQgMD09PWJ8fGYuY2FsbChhLGIpfSxjLmVhY2g9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9MCxnPWEubGVuZ3RoLGg9YihhKTtpZihkKXtpZihoKWZvcig7Zz5mJiYoZT1jLmFwcGx5KGFbZl0sZCksZSE9PSExKTtmKyspO2Vsc2UgZm9yKGYgaW4gYSlpZihlPWMuYXBwbHkoYVtmXSxkKSxlPT09ITEpYnJlYWt9ZWxzZSBpZihoKWZvcig7Zz5mJiYoZT1jLmNhbGwoYVtmXSxmLGFbZl0pLGUhPT0hMSk7ZisrKTtlbHNlIGZvcihmIGluIGEpaWYoZT1jLmNhbGwoYVtmXSxmLGFbZl0pLGU9PT0hMSlicmVhaztyZXR1cm4gYX0sYy5kYXRhPWZ1bmN0aW9uKGEsYixlKXtpZih2b2lkIDA9PT1lKXt2YXIgZj1hW2MuZXhwYW5kb10sZz1mJiZkW2ZdO2lmKHZvaWQgMD09PWIpcmV0dXJuIGc7aWYoZyYmYiBpbiBnKXJldHVybiBnW2JdfWVsc2UgaWYodm9pZCAwIT09Yil7dmFyIGY9YVtjLmV4cGFuZG9dfHwoYVtjLmV4cGFuZG9dPSsrYy51dWlkKTtyZXR1cm4gZFtmXT1kW2ZdfHx7fSxkW2ZdW2JdPWUsZX19LGMucmVtb3ZlRGF0YT1mdW5jdGlvbihhLGIpe3ZhciBlPWFbYy5leHBhbmRvXSxmPWUmJmRbZV07ZiYmYy5lYWNoKGIsZnVuY3Rpb24oYSxiKXtkZWxldGUgZltiXX0pfSxjLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsZCxlLGYsZyxoPWFyZ3VtZW50c1swXXx8e30saT0xLGo9YXJndW1lbnRzLmxlbmd0aCxrPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGgmJihrPWgsaD1hcmd1bWVudHNbaV18fHt9LGkrKyksXCJvYmplY3RcIiE9dHlwZW9mIGgmJlwiZnVuY3Rpb25cIiE9PWMudHlwZShoKSYmKGg9e30pLGk9PT1qJiYoaD10aGlzLGktLSk7aj5pO2krKylpZihudWxsIT0oZj1hcmd1bWVudHNbaV0pKWZvcihlIGluIGYpYT1oW2VdLGQ9ZltlXSxoIT09ZCYmKGsmJmQmJihjLmlzUGxhaW5PYmplY3QoZCl8fChiPWMuaXNBcnJheShkKSkpPyhiPyhiPSExLGc9YSYmYy5pc0FycmF5KGEpP2E6W10pOmc9YSYmYy5pc1BsYWluT2JqZWN0KGEpP2E6e30saFtlXT1jLmV4dGVuZChrLGcsZCkpOnZvaWQgMCE9PWQmJihoW2VdPWQpKTtyZXR1cm4gaH0sYy5xdWV1ZT1mdW5jdGlvbihhLGQsZSl7ZnVuY3Rpb24gZihhLGMpe3ZhciBkPWN8fFtdO3JldHVybiBudWxsIT1hJiYoYihPYmplY3QoYSkpPyFmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kOylhW2UrK109YltkKytdO2lmKGMhPT1jKWZvcig7dm9pZCAwIT09YltkXTspYVtlKytdPWJbZCsrXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfShkLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpbXS5wdXNoLmNhbGwoZCxhKSksZH1pZihhKXtkPShkfHxcImZ4XCIpK1wicXVldWVcIjt2YXIgZz1jLmRhdGEoYSxkKTtyZXR1cm4gZT8oIWd8fGMuaXNBcnJheShlKT9nPWMuZGF0YShhLGQsZihlKSk6Zy5wdXNoKGUpLGcpOmd8fFtdfX0sYy5kZXF1ZXVlPWZ1bmN0aW9uKGEsYil7Yy5lYWNoKGEubm9kZVR5cGU/W2FdOmEsZnVuY3Rpb24oYSxkKXtiPWJ8fFwiZnhcIjt2YXIgZT1jLnF1ZXVlKGQsYiksZj1lLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCI9PT1mJiYoZj1lLnNoaWZ0KCkpLGYmJihcImZ4XCI9PT1iJiZlLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGYuY2FsbChkLGZ1bmN0aW9uKCl7Yy5kZXF1ZXVlKGQsYil9KSl9KX0sYy5mbj1jLnByb3RvdHlwZT17aW5pdDpmdW5jdGlvbihhKXtpZihhLm5vZGVUeXBlKXJldHVybiB0aGlzWzBdPWEsdGhpczt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBET00gbm9kZS5cIil9LG9mZnNldDpmdW5jdGlvbigpe3ZhciBiPXRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3RoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6e3RvcDowLGxlZnQ6MH07cmV0dXJue3RvcDpiLnRvcCsoYS5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsVG9wfHwwKS0oZG9jdW1lbnQuY2xpZW50VG9wfHwwKSxsZWZ0OmIubGVmdCsoYS5wYWdlWE9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsTGVmdHx8MCktKGRvY3VtZW50LmNsaWVudExlZnR8fDApfX0scG9zaXRpb246ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Zm9yKHZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxkb2N1bWVudDthJiZcImh0bWxcIj09PSFhLm5vZGVUeXBlLnRvTG93ZXJDYXNlJiZcInN0YXRpY1wiPT09YS5zdHlsZS5wb3NpdGlvbjspYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8ZG9jdW1lbnR9dmFyIGI9dGhpc1swXSxhPWEuYXBwbHkoYiksZD10aGlzLm9mZnNldCgpLGU9L14oPzpib2R5fGh0bWwpJC9pLnRlc3QoYS5ub2RlTmFtZSk/e3RvcDowLGxlZnQ6MH06YyhhKS5vZmZzZXQoKTtyZXR1cm4gZC50b3AtPXBhcnNlRmxvYXQoYi5zdHlsZS5tYXJnaW5Ub3ApfHwwLGQubGVmdC09cGFyc2VGbG9hdChiLnN0eWxlLm1hcmdpbkxlZnQpfHwwLGEuc3R5bGUmJihlLnRvcCs9cGFyc2VGbG9hdChhLnN0eWxlLmJvcmRlclRvcFdpZHRoKXx8MCxlLmxlZnQrPXBhcnNlRmxvYXQoYS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpfHwwKSx7dG9wOmQudG9wLWUudG9wLGxlZnQ6ZC5sZWZ0LWUubGVmdH19fTt2YXIgZD17fTtjLmV4cGFuZG89XCJ2ZWxvY2l0eVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGMudXVpZD0wO2Zvcih2YXIgZT17fSxmPWUuaGFzT3duUHJvcGVydHksZz1lLnRvU3RyaW5nLGg9XCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGk9MDtpPGgubGVuZ3RoO2krKyllW1wiW29iamVjdCBcIitoW2ldK1wiXVwiXT1oW2ldLnRvTG93ZXJDYXNlKCk7Yy5mbi5pbml0LnByb3RvdHlwZT1jLmZuLGEuVmVsb2NpdHk9e1V0aWxpdGllczpjfX19KHdpbmRvdyksZnVuY3Rpb24oYSl7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGEpOmEoKX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXtmb3IodmFyIGI9LTEsYz1hP2EubGVuZ3RoOjAsZD1bXTsrK2I8Yzspe3ZhciBlPWFbYl07ZSYmZC5wdXNoKGUpfXJldHVybiBkfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIHAuaXNXcmFwcGVkKGEpP2E9W10uc2xpY2UuY2FsbChhKTpwLmlzTm9kZShhKSYmKGE9W2FdKSxhfWZ1bmN0aW9uIGcoYSl7dmFyIGI9bS5kYXRhKGEsXCJ2ZWxvY2l0eVwiKTtyZXR1cm4gbnVsbD09PWI/ZDpifWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBNYXRoLnJvdW5kKGIqYSkqKDEvYSl9fWZ1bmN0aW9uIGkoYSxjLGQsZSl7ZnVuY3Rpb24gZihhLGIpe3JldHVybiAxLTMqYiszKmF9ZnVuY3Rpb24gZyhhLGIpe3JldHVybiAzKmItNiphfWZ1bmN0aW9uIGgoYSl7cmV0dXJuIDMqYX1mdW5jdGlvbiBpKGEsYixjKXtyZXR1cm4oKGYoYixjKSphK2coYixjKSkqYStoKGIpKSphfWZ1bmN0aW9uIGooYSxiLGMpe3JldHVybiAzKmYoYixjKSphKmErMipnKGIsYykqYStoKGIpfWZ1bmN0aW9uIGsoYixjKXtmb3IodmFyIGU9MDtwPmU7KytlKXt2YXIgZj1qKGMsYSxkKTtpZigwPT09ZilyZXR1cm4gYzt2YXIgZz1pKGMsYSxkKS1iO2MtPWcvZn1yZXR1cm4gY31mdW5jdGlvbiBsKCl7Zm9yKHZhciBiPTA7dD5iOysrYil4W2JdPWkoYip1LGEsZCl9ZnVuY3Rpb24gbShiLGMsZSl7dmFyIGYsZyxoPTA7ZG8gZz1jKyhlLWMpLzIsZj1pKGcsYSxkKS1iLGY+MD9lPWc6Yz1nO3doaWxlKE1hdGguYWJzKGYpPnImJisraDxzKTtyZXR1cm4gZ31mdW5jdGlvbiBuKGIpe2Zvcih2YXIgYz0wLGU9MSxmPXQtMTtlIT1mJiZ4W2VdPD1iOysrZSljKz11Oy0tZTt2YXIgZz0oYi14W2VdKS8oeFtlKzFdLXhbZV0pLGg9YytnKnUsaT1qKGgsYSxkKTtyZXR1cm4gaT49cT9rKGIsaCk6MD09aT9oOm0oYixjLGMrdSl9ZnVuY3Rpb24gbygpe3k9ITAsKGEhPWN8fGQhPWUpJiZsKCl9dmFyIHA9NCxxPS4wMDEscj0xZS03LHM9MTAsdD0xMSx1PTEvKHQtMSksdj1cIkZsb2F0MzJBcnJheVwiaW4gYjtpZig0IT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIHc9MDs0Pnc7Kyt3KWlmKFwibnVtYmVyXCIhPXR5cGVvZiBhcmd1bWVudHNbd118fGlzTmFOKGFyZ3VtZW50c1t3XSl8fCFpc0Zpbml0ZShhcmd1bWVudHNbd10pKXJldHVybiExO2E9TWF0aC5taW4oYSwxKSxkPU1hdGgubWluKGQsMSksYT1NYXRoLm1heChhLDApLGQ9TWF0aC5tYXgoZCwwKTt2YXIgeD12P25ldyBGbG9hdDMyQXJyYXkodCk6bmV3IEFycmF5KHQpLHk9ITEsej1mdW5jdGlvbihiKXtyZXR1cm4geXx8bygpLGE9PT1jJiZkPT09ZT9iOjA9PT1iPzA6MT09PWI/MTppKG4oYiksYyxlKX07ei5nZXRDb250cm9sUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW3t4OmEseTpjfSx7eDpkLHk6ZX1dfTt2YXIgQT1cImdlbmVyYXRlQmV6aWVyKFwiK1thLGMsZCxlXStcIilcIjtyZXR1cm4gei50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBBfSx6fWZ1bmN0aW9uIGooYSxiKXt2YXIgYz1hO3JldHVybiBwLmlzU3RyaW5nKGEpP3QuRWFzaW5nc1thXXx8KGM9ITEpOmM9cC5pc0FycmF5KGEpJiYxPT09YS5sZW5ndGg/aC5hcHBseShudWxsLGEpOnAuaXNBcnJheShhKSYmMj09PWEubGVuZ3RoP3UuYXBwbHkobnVsbCxhLmNvbmNhdChbYl0pKTohKCFwLmlzQXJyYXkoYSl8fDQhPT1hLmxlbmd0aCkmJmkuYXBwbHkobnVsbCxhKSxjPT09ITEmJihjPXQuRWFzaW5nc1t0LmRlZmF1bHRzLmVhc2luZ10/dC5kZWZhdWx0cy5lYXNpbmc6cyksY31mdW5jdGlvbiBrKGEpe2lmKGEpe3ZhciBiPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGM9dC5TdGF0ZS5jYWxscy5sZW5ndGg7Yz4xZTQmJih0LlN0YXRlLmNhbGxzPWUodC5TdGF0ZS5jYWxscykpO2Zvcih2YXIgZj0wO2M+ZjtmKyspaWYodC5TdGF0ZS5jYWxsc1tmXSl7dmFyIGg9dC5TdGF0ZS5jYWxsc1tmXSxpPWhbMF0saj1oWzJdLG49aFszXSxvPSEhbixxPW51bGw7bnx8KG49dC5TdGF0ZS5jYWxsc1tmXVszXT1iLTE2KTtmb3IodmFyIHI9TWF0aC5taW4oKGItbikvai5kdXJhdGlvbiwxKSxzPTAsdT1pLmxlbmd0aDt1PnM7cysrKXt2YXIgdz1pW3NdLHk9dy5lbGVtZW50O2lmKGcoeSkpe3ZhciB6PSExO2lmKGouZGlzcGxheSE9PWQmJm51bGwhPT1qLmRpc3BsYXkmJlwibm9uZVwiIT09ai5kaXNwbGF5KXtpZihcImZsZXhcIj09PWouZGlzcGxheSl7dmFyIEE9W1wiLXdlYmtpdC1ib3hcIixcIi1tb3otYm94XCIsXCItbXMtZmxleGJveFwiLFwiLXdlYmtpdC1mbGV4XCJdO20uZWFjaChBLGZ1bmN0aW9uKGEsYil7di5zZXRQcm9wZXJ0eVZhbHVlKHksXCJkaXNwbGF5XCIsYil9KX12LnNldFByb3BlcnR5VmFsdWUoeSxcImRpc3BsYXlcIixqLmRpc3BsYXkpfWoudmlzaWJpbGl0eSE9PWQmJlwiaGlkZGVuXCIhPT1qLnZpc2liaWxpdHkmJnYuc2V0UHJvcGVydHlWYWx1ZSh5LFwidmlzaWJpbGl0eVwiLGoudmlzaWJpbGl0eSk7Zm9yKHZhciBCIGluIHcpaWYoXCJlbGVtZW50XCIhPT1CKXt2YXIgQyxEPXdbQl0sRT1wLmlzU3RyaW5nKEQuZWFzaW5nKT90LkVhc2luZ3NbRC5lYXNpbmddOkQuZWFzaW5nO2lmKDE9PT1yKUM9RC5lbmRWYWx1ZTtlbHNle3ZhciBGPUQuZW5kVmFsdWUtRC5zdGFydFZhbHVlO2lmKEM9RC5zdGFydFZhbHVlK0YqRShyLGosRiksIW8mJkM9PT1ELmN1cnJlbnRWYWx1ZSljb250aW51ZX1pZihELmN1cnJlbnRWYWx1ZT1DLFwidHdlZW5cIj09PUIpcT1DO2Vsc2V7aWYodi5Ib29rcy5yZWdpc3RlcmVkW0JdKXt2YXIgRz12Lkhvb2tzLmdldFJvb3QoQiksSD1nKHkpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbR107SCYmKEQucm9vdFByb3BlcnR5VmFsdWU9SCl9dmFyIEk9di5zZXRQcm9wZXJ0eVZhbHVlKHksQixELmN1cnJlbnRWYWx1ZSsoMD09PXBhcnNlRmxvYXQoQyk/XCJcIjpELnVuaXRUeXBlKSxELnJvb3RQcm9wZXJ0eVZhbHVlLEQuc2Nyb2xsRGF0YSk7di5Ib29rcy5yZWdpc3RlcmVkW0JdJiYoZyh5KS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ddPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtHXT92Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbR10oXCJleHRyYWN0XCIsbnVsbCxJWzFdKTpJWzFdKSxcInRyYW5zZm9ybVwiPT09SVswXSYmKHo9ITApfX1qLm1vYmlsZUhBJiZnKHkpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPT09ZCYmKGcoeSkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9XCIoMHB4LCAwcHgsIDBweClcIix6PSEwKSx6JiZ2LmZsdXNoVHJhbnNmb3JtQ2FjaGUoeSl9fWouZGlzcGxheSE9PWQmJlwibm9uZVwiIT09ai5kaXNwbGF5JiYodC5TdGF0ZS5jYWxsc1tmXVsyXS5kaXNwbGF5PSExKSxqLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09ai52aXNpYmlsaXR5JiYodC5TdGF0ZS5jYWxsc1tmXVsyXS52aXNpYmlsaXR5PSExKSxqLnByb2dyZXNzJiZqLnByb2dyZXNzLmNhbGwoaFsxXSxoWzFdLHIsTWF0aC5tYXgoMCxuK2ouZHVyYXRpb24tYiksbixxKSwxPT09ciYmbChmKX19dC5TdGF0ZS5pc1RpY2tpbmcmJngoayl9ZnVuY3Rpb24gbChhLGIpe2lmKCF0LlN0YXRlLmNhbGxzW2FdKXJldHVybiExO2Zvcih2YXIgYz10LlN0YXRlLmNhbGxzW2FdWzBdLGU9dC5TdGF0ZS5jYWxsc1thXVsxXSxmPXQuU3RhdGUuY2FsbHNbYV1bMl0saD10LlN0YXRlLmNhbGxzW2FdWzRdLGk9ITEsaj0wLGs9Yy5sZW5ndGg7az5qO2orKyl7dmFyIGw9Y1tqXS5lbGVtZW50O2lmKGJ8fGYubG9vcHx8KFwibm9uZVwiPT09Zi5kaXNwbGF5JiZ2LnNldFByb3BlcnR5VmFsdWUobCxcImRpc3BsYXlcIixmLmRpc3BsYXkpLFwiaGlkZGVuXCI9PT1mLnZpc2liaWxpdHkmJnYuc2V0UHJvcGVydHlWYWx1ZShsLFwidmlzaWJpbGl0eVwiLGYudmlzaWJpbGl0eSkpLGYubG9vcCE9PSEwJiYobS5xdWV1ZShsKVsxXT09PWR8fCEvXFwudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZy9pLnRlc3QobS5xdWV1ZShsKVsxXSkpJiZnKGwpKXtnKGwpLmlzQW5pbWF0aW5nPSExLGcobCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZT17fTt2YXIgbj0hMTttLmVhY2godi5MaXN0cy50cmFuc2Zvcm1zM0QsZnVuY3Rpb24oYSxiKXt2YXIgYz0vXnNjYWxlLy50ZXN0KGIpPzE6MCxlPWcobCkudHJhbnNmb3JtQ2FjaGVbYl07ZyhsKS50cmFuc2Zvcm1DYWNoZVtiXSE9PWQmJm5ldyBSZWdFeHAoXCJeXFxcXChcIitjK1wiW14uXVwiKS50ZXN0KGUpJiYobj0hMCxkZWxldGUgZyhsKS50cmFuc2Zvcm1DYWNoZVtiXSl9KSxmLm1vYmlsZUhBJiYobj0hMCxkZWxldGUgZyhsKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZCksbiYmdi5mbHVzaFRyYW5zZm9ybUNhY2hlKGwpLHYuVmFsdWVzLnJlbW92ZUNsYXNzKGwsXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIil9aWYoIWImJmYuY29tcGxldGUmJiFmLmxvb3AmJmo9PT1rLTEpdHJ5e2YuY29tcGxldGUuY2FsbChlLGUpfWNhdGNoKG8pe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBvfSwxKX1oJiZmLmxvb3AhPT0hMCYmaChlKSxnKGwpJiZmLmxvb3A9PT0hMCYmIWImJihtLmVhY2goZyhsKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oYSxiKXsvXnJvdGF0ZS8udGVzdChhKSYmMzYwPT09cGFyc2VGbG9hdChiLmVuZFZhbHVlKSYmKGIuZW5kVmFsdWU9MCxiLnN0YXJ0VmFsdWU9MzYwKSwvXmJhY2tncm91bmRQb3NpdGlvbi8udGVzdChhKSYmMTAwPT09cGFyc2VGbG9hdChiLmVuZFZhbHVlKSYmXCIlXCI9PT1iLnVuaXRUeXBlJiYoYi5lbmRWYWx1ZT0wLGIuc3RhcnRWYWx1ZT0xMDApfSksdChsLFwicmV2ZXJzZVwiLHtsb29wOiEwLGRlbGF5OmYuZGVsYXl9KSksZi5xdWV1ZSE9PSExJiZtLmRlcXVldWUobCxmLnF1ZXVlKX10LlN0YXRlLmNhbGxzW2FdPSExO2Zvcih2YXIgcD0wLHE9dC5TdGF0ZS5jYWxscy5sZW5ndGg7cT5wO3ArKylpZih0LlN0YXRlLmNhbGxzW3BdIT09ITEpe2k9ITA7YnJlYWt9aT09PSExJiYodC5TdGF0ZS5pc1RpY2tpbmc9ITEsZGVsZXRlIHQuU3RhdGUuY2FsbHMsdC5TdGF0ZS5jYWxscz1bXSl9dmFyIG0sbj1mdW5jdGlvbigpe2lmKGMuZG9jdW1lbnRNb2RlKXJldHVybiBjLmRvY3VtZW50TW9kZTtmb3IodmFyIGE9NzthPjQ7YS0tKXt2YXIgYj1jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYi5pbm5lckhUTUw9XCI8IS0tW2lmIElFIFwiK2ErXCJdPjxzcGFuPjwvc3Bhbj48IVtlbmRpZl0tLT5cIixiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKS5sZW5ndGgpcmV0dXJuIGI9bnVsbCxhfXJldHVybiBkfSgpLG89ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiBiLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGIpe3ZhciBjLGQ9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIGM9TWF0aC5tYXgoMCwxNi0oZC1hKSksYT1kK2Msc2V0VGltZW91dChmdW5jdGlvbigpe2IoZCtjKX0sYyl9fSgpLHA9e2lzU3RyaW5nOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKX0saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSl9LGlzTm9kZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS5ub2RlVHlwZX0saXNOb2RlTGlzdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYSYmL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSkmJmEubGVuZ3RoIT09ZCYmKDA9PT1hLmxlbmd0aHx8XCJvYmplY3RcIj09dHlwZW9mIGFbMF0mJmFbMF0ubm9kZVR5cGU+MCl9LGlzV3JhcHBlZDpmdW5jdGlvbihhKXtyZXR1cm4gYSYmKGEuanF1ZXJ5fHxiLlplcHRvJiZiLlplcHRvLnplcHRvLmlzWihhKSl9LGlzU1ZHOmZ1bmN0aW9uKGEpe3JldHVybiBiLlNWR0VsZW1lbnQmJmEgaW5zdGFuY2VvZiBiLlNWR0VsZW1lbnR9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9fSxxPSExO2lmKGEuZm4mJmEuZm4uanF1ZXJ5PyhtPWEscT0hMCk6bT1iLlZlbG9jaXR5LlV0aWxpdGllcyw4Pj1uJiYhcSl0aHJvdyBuZXcgRXJyb3IoXCJWZWxvY2l0eTogSUU4IGFuZCBiZWxvdyByZXF1aXJlIGpRdWVyeSB0byBiZSBsb2FkZWQgYmVmb3JlIFZlbG9jaXR5LlwiKTtpZig3Pj1uKXJldHVybiB2b2lkKGpRdWVyeS5mbi52ZWxvY2l0eT1qUXVlcnkuZm4uYW5pbWF0ZSk7dmFyIHI9NDAwLHM9XCJzd2luZ1wiLHQ9e1N0YXRlOntpc01vYmlsZTovQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNBbmRyb2lkOi9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0dpbmdlcmJyZWFkOi9BbmRyb2lkIDJcXC4zXFwuWzMtN10vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQ2hyb21lOmIuY2hyb21lLGlzRmlyZWZveDovRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkscHJlZml4RWxlbWVudDpjLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscHJlZml4TWF0Y2hlczp7fSxzY3JvbGxBbmNob3I6bnVsbCxzY3JvbGxQcm9wZXJ0eUxlZnQ6bnVsbCxzY3JvbGxQcm9wZXJ0eVRvcDpudWxsLGlzVGlja2luZzohMSxjYWxsczpbXX0sQ1NTOnt9LFV0aWxpdGllczptLFJlZGlyZWN0czp7fSxFYXNpbmdzOnt9LFByb21pc2U6Yi5Qcm9taXNlLGRlZmF1bHRzOntxdWV1ZTpcIlwiLGR1cmF0aW9uOnIsZWFzaW5nOnMsYmVnaW46ZCxjb21wbGV0ZTpkLHByb2dyZXNzOmQsZGlzcGxheTpkLHZpc2liaWxpdHk6ZCxsb29wOiExLGRlbGF5OiExLG1vYmlsZUhBOiEwLF9jYWNoZVZhbHVlczohMH0saW5pdDpmdW5jdGlvbihhKXttLmRhdGEoYSxcInZlbG9jaXR5XCIse2lzU1ZHOnAuaXNTVkcoYSksaXNBbmltYXRpbmc6ITEsY29tcHV0ZWRTdHlsZTpudWxsLHR3ZWVuc0NvbnRhaW5lcjpudWxsLHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU6e30sdHJhbnNmb3JtQ2FjaGU6e319KX0saG9vazpudWxsLG1vY2s6ITEsdmVyc2lvbjp7bWFqb3I6MSxtaW5vcjoyLHBhdGNoOjJ9LGRlYnVnOiExfTtiLnBhZ2VZT2Zmc2V0IT09ZD8odC5TdGF0ZS5zY3JvbGxBbmNob3I9Yix0LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInBhZ2VYT2Zmc2V0XCIsdC5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInBhZ2VZT2Zmc2V0XCIpOih0LlN0YXRlLnNjcm9sbEFuY2hvcj1jLmRvY3VtZW50RWxlbWVudHx8Yy5ib2R5LnBhcmVudE5vZGV8fGMuYm9keSx0LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdD1cInNjcm9sbExlZnRcIix0LlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwic2Nyb2xsVG9wXCIpO3ZhciB1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4tYS50ZW5zaW9uKmEueC1hLmZyaWN0aW9uKmEudn1mdW5jdGlvbiBiKGIsYyxkKXt2YXIgZT17eDpiLngrZC5keCpjLHY6Yi52K2QuZHYqYyx0ZW5zaW9uOmIudGVuc2lvbixmcmljdGlvbjpiLmZyaWN0aW9ufTtyZXR1cm57ZHg6ZS52LGR2OmEoZSl9fWZ1bmN0aW9uIGMoYyxkKXt2YXIgZT17ZHg6Yy52LGR2OmEoYyl9LGY9YihjLC41KmQsZSksZz1iKGMsLjUqZCxmKSxoPWIoYyxkLGcpLGk9MS82KihlLmR4KzIqKGYuZHgrZy5keCkraC5keCksaj0xLzYqKGUuZHYrMiooZi5kditnLmR2KStoLmR2KTtyZXR1cm4gYy54PWMueCtpKmQsYy52PWMuditqKmQsY31yZXR1cm4gZnVuY3Rpb24gZChhLGIsZSl7dmFyIGYsZyxoLGk9e3g6LTEsdjowLHRlbnNpb246bnVsbCxmcmljdGlvbjpudWxsfSxqPVswXSxrPTAsbD0xZS00LG09LjAxNjtmb3IoYT1wYXJzZUZsb2F0KGEpfHw1MDAsYj1wYXJzZUZsb2F0KGIpfHwyMCxlPWV8fG51bGwsaS50ZW5zaW9uPWEsaS5mcmljdGlvbj1iLGY9bnVsbCE9PWUsZj8oaz1kKGEsYiksZz1rL2UqbSk6Zz1tO2g9YyhofHxpLGcpLGoucHVzaCgxK2gueCksays9MTYsTWF0aC5hYnMoaC54KT5sJiZNYXRoLmFicyhoLnYpPmw7KTtyZXR1cm4gZj9mdW5jdGlvbihhKXtyZXR1cm4galthKihqLmxlbmd0aC0xKXwwXX06a319KCk7dC5FYXNpbmdzPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sc3ByaW5nOmZ1bmN0aW9uKGEpe3JldHVybiAxLU1hdGguY29zKDQuNSphKk1hdGguUEkpKk1hdGguZXhwKDYqLWEpfX0sbS5lYWNoKFtbXCJlYXNlXCIsWy4yNSwuMSwuMjUsMV1dLFtcImVhc2UtaW5cIixbLjQyLDAsMSwxXV0sW1wiZWFzZS1vdXRcIixbMCwwLC41OCwxXV0sW1wiZWFzZS1pbi1vdXRcIixbLjQyLDAsLjU4LDFdXSxbXCJlYXNlSW5TaW5lXCIsWy40NywwLC43NDUsLjcxNV1dLFtcImVhc2VPdXRTaW5lXCIsWy4zOSwuNTc1LC41NjUsMV1dLFtcImVhc2VJbk91dFNpbmVcIixbLjQ0NSwuMDUsLjU1LC45NV1dLFtcImVhc2VJblF1YWRcIixbLjU1LC4wODUsLjY4LC41M11dLFtcImVhc2VPdXRRdWFkXCIsWy4yNSwuNDYsLjQ1LC45NF1dLFtcImVhc2VJbk91dFF1YWRcIixbLjQ1NSwuMDMsLjUxNSwuOTU1XV0sW1wiZWFzZUluQ3ViaWNcIixbLjU1LC4wNTUsLjY3NSwuMTldXSxbXCJlYXNlT3V0Q3ViaWNcIixbLjIxNSwuNjEsLjM1NSwxXV0sW1wiZWFzZUluT3V0Q3ViaWNcIixbLjY0NSwuMDQ1LC4zNTUsMV1dLFtcImVhc2VJblF1YXJ0XCIsWy44OTUsLjAzLC42ODUsLjIyXV0sW1wiZWFzZU91dFF1YXJ0XCIsWy4xNjUsLjg0LC40NCwxXV0sW1wiZWFzZUluT3V0UXVhcnRcIixbLjc3LDAsLjE3NSwxXV0sW1wiZWFzZUluUXVpbnRcIixbLjc1NSwuMDUsLjg1NSwuMDZdXSxbXCJlYXNlT3V0UXVpbnRcIixbLjIzLDEsLjMyLDFdXSxbXCJlYXNlSW5PdXRRdWludFwiLFsuODYsMCwuMDcsMV1dLFtcImVhc2VJbkV4cG9cIixbLjk1LC4wNSwuNzk1LC4wMzVdXSxbXCJlYXNlT3V0RXhwb1wiLFsuMTksMSwuMjIsMV1dLFtcImVhc2VJbk91dEV4cG9cIixbMSwwLDAsMV1dLFtcImVhc2VJbkNpcmNcIixbLjYsLjA0LC45OCwuMzM1XV0sW1wiZWFzZU91dENpcmNcIixbLjA3NSwuODIsLjE2NSwxXV0sW1wiZWFzZUluT3V0Q2lyY1wiLFsuNzg1LC4xMzUsLjE1LC44Nl1dXSxmdW5jdGlvbihhLGIpe3QuRWFzaW5nc1tiWzBdXT1pLmFwcGx5KG51bGwsYlsxXSl9KTt2YXIgdj10LkNTUz17UmVnRXg6e2lzSGV4Oi9eIyhbQS1mXFxkXXszfSl7MSwyfSQvaSx2YWx1ZVVud3JhcDovXltBLXpdK1xcKCguKilcXCkkL2ksd3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZDovWzAtOS5dKyBbMC05Ll0rIFswLTkuXSsoIFswLTkuXSspPy8sdmFsdWVTcGxpdDovKFtBLXpdK1xcKC4rXFwpKXwoKFtBLXowLTkjLS5dKz8pKD89XFxzfCQpKS9naX0sTGlzdHM6e2NvbG9yczpbXCJmaWxsXCIsXCJzdHJva2VcIixcInN0b3BDb2xvclwiLFwiY29sb3JcIixcImJhY2tncm91bmRDb2xvclwiLFwiYm9yZGVyQ29sb3JcIixcImJvcmRlclRvcENvbG9yXCIsXCJib3JkZXJSaWdodENvbG9yXCIsXCJib3JkZXJCb3R0b21Db2xvclwiLFwiYm9yZGVyTGVmdENvbG9yXCIsXCJvdXRsaW5lQ29sb3JcIl0sdHJhbnNmb3Jtc0Jhc2U6W1widHJhbnNsYXRlWFwiLFwidHJhbnNsYXRlWVwiLFwic2NhbGVcIixcInNjYWxlWFwiLFwic2NhbGVZXCIsXCJza2V3WFwiLFwic2tld1lcIixcInJvdGF0ZVpcIl0sdHJhbnNmb3JtczNEOltcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsXCJ0cmFuc2xhdGVaXCIsXCJzY2FsZVpcIixcInJvdGF0ZVhcIixcInJvdGF0ZVlcIl19LEhvb2tzOnt0ZW1wbGF0ZXM6e3RleHRTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXJcIixcImJsYWNrIDBweCAwcHggMHB4XCJdLGJveFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIixcImJsYWNrIDBweCAwcHggMHB4IDBweFwiXSxjbGlwOltcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLFwiMHB4IDBweCAwcHggMHB4XCJdLGJhY2tncm91bmRQb3NpdGlvbjpbXCJYIFlcIixcIjAlIDAlXCJdLHRyYW5zZm9ybU9yaWdpbjpbXCJYIFkgWlwiLFwiNTAlIDUwJSAwcHhcIl0scGVyc3BlY3RpdmVPcmlnaW46W1wiWCBZXCIsXCI1MCUgNTAlXCJdfSxyZWdpc3RlcmVkOnt9LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLmNvbG9ycy5sZW5ndGg7YSsrKXt2YXIgYj1cImNvbG9yXCI9PT12Lkxpc3RzLmNvbG9yc1thXT9cIjAgMCAwIDFcIjpcIjI1NSAyNTUgMjU1IDFcIjt2Lkhvb2tzLnRlbXBsYXRlc1t2Lkxpc3RzLmNvbG9yc1thXV09W1wiUmVkIEdyZWVuIEJsdWUgQWxwaGFcIixiXX12YXIgYyxkLGU7aWYobilmb3IoYyBpbiB2Lkhvb2tzLnRlbXBsYXRlcyl7ZD12Lkhvb2tzLnRlbXBsYXRlc1tjXSxlPWRbMF0uc3BsaXQoXCIgXCIpO3ZhciBmPWRbMV0ubWF0Y2godi5SZWdFeC52YWx1ZVNwbGl0KTtcIkNvbG9yXCI9PT1lWzBdJiYoZS5wdXNoKGUuc2hpZnQoKSksZi5wdXNoKGYuc2hpZnQoKSksdi5Ib29rcy50ZW1wbGF0ZXNbY109W2Uuam9pbihcIiBcIiksZi5qb2luKFwiIFwiKV0pfWZvcihjIGluIHYuSG9va3MudGVtcGxhdGVzKXtkPXYuSG9va3MudGVtcGxhdGVzW2NdLGU9ZFswXS5zcGxpdChcIiBcIik7Zm9yKHZhciBhIGluIGUpe3ZhciBnPWMrZVthXSxoPWE7di5Ib29rcy5yZWdpc3RlcmVkW2ddPVtjLGhdfX19LGdldFJvb3Q6ZnVuY3Rpb24oYSl7dmFyIGI9di5Ib29rcy5yZWdpc3RlcmVkW2FdO3JldHVybiBiP2JbMF06YX0sY2xlYW5Sb290UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihhLGIpe3JldHVybiB2LlJlZ0V4LnZhbHVlVW53cmFwLnRlc3QoYikmJihiPWIubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcClbMV0pLHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGIpJiYoYj12Lkhvb2tzLnRlbXBsYXRlc1thXVsxXSksYn0sZXh0cmFjdFZhbHVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9di5Ib29rcy5yZWdpc3RlcmVkW2FdO2lmKGMpe3ZhciBkPWNbMF0sZT1jWzFdO3JldHVybiBiPXYuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShkLGIpLGIudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpW2VdfXJldHVybiBifSxpbmplY3RWYWx1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9di5Ib29rcy5yZWdpc3RlcmVkW2FdO2lmKGQpe3ZhciBlLGYsZz1kWzBdLGg9ZFsxXTtyZXR1cm4gYz12Lkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoZyxjKSxlPWMudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlU3BsaXQpLGVbaF09YixmPWUuam9pbihcIiBcIil9cmV0dXJuIGN9fSxOb3JtYWxpemF0aW9uczp7cmVnaXN0ZXJlZDp7Y2xpcDpmdW5jdGlvbihhLGIsYyl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImNsaXBcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGQ7cmV0dXJuIHYuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KGMpP2Q9YzooZD1jLnRvU3RyaW5nKCkubWF0Y2godi5SZWdFeC52YWx1ZVVud3JhcCksZD1kP2RbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIik6YyksZDtjYXNlXCJpbmplY3RcIjpyZXR1cm5cInJlY3QoXCIrYytcIilcIn19LGJsdXI6ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChhKXtjYXNlXCJuYW1lXCI6cmV0dXJuIHQuU3RhdGUuaXNGaXJlZm94P1wiZmlsdGVyXCI6XCItd2Via2l0LWZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZD1wYXJzZUZsb2F0KGMpO2lmKCFkJiYwIT09ZCl7dmFyIGU9Yy50b1N0cmluZygpLm1hdGNoKC9ibHVyXFwoKFswLTldK1tBLXpdKylcXCkvaSk7ZD1lP2VbMV06MH1yZXR1cm4gZDtjYXNlXCJpbmplY3RcIjpyZXR1cm4gcGFyc2VGbG9hdChjKT9cImJsdXIoXCIrYytcIilcIjpcIm5vbmVcIn19LG9wYWNpdHk6ZnVuY3Rpb24oYSxiLGMpe2lmKDg+PW4pc3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cImZpbHRlclwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgZD1jLnRvU3RyaW5nKCkubWF0Y2goL2FscGhhXFwob3BhY2l0eT0oLiopXFwpL2kpO3JldHVybiBjPWQ/ZFsxXS8xMDA6MTtjYXNlXCJpbmplY3RcIjpyZXR1cm4gYi5zdHlsZS56b29tPTEscGFyc2VGbG9hdChjKT49MT9cIlwiOlwiYWxwaGEob3BhY2l0eT1cIitwYXJzZUludCgxMDAqcGFyc2VGbG9hdChjKSwxMCkrXCIpXCJ9ZWxzZSBzd2l0Y2goYSl7Y2FzZVwibmFtZVwiOnJldHVyblwib3BhY2l0eVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gYztjYXNlXCJpbmplY3RcIjpyZXR1cm4gY319fSxyZWdpc3RlcjpmdW5jdGlvbigpezk+PW58fHQuU3RhdGUuaXNHaW5nZXJicmVhZHx8KHYuTGlzdHMudHJhbnNmb3Jtc0Jhc2U9di5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQodi5MaXN0cy50cmFuc2Zvcm1zM0QpKTtmb3IodmFyIGE9MDthPHYuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoO2ErKykhZnVuY3Rpb24oKXt2YXIgYj12Lkxpc3RzLnRyYW5zZm9ybXNCYXNlW2FdO3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtiXT1mdW5jdGlvbihhLGMsZSl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cInRyYW5zZm9ybVwiO2Nhc2VcImV4dHJhY3RcIjpyZXR1cm4gZyhjKT09PWR8fGcoYykudHJhbnNmb3JtQ2FjaGVbYl09PT1kPy9ec2NhbGUvaS50ZXN0KGIpPzE6MDpnKGMpLnRyYW5zZm9ybUNhY2hlW2JdLnJlcGxhY2UoL1soKV0vZyxcIlwiKTtjYXNlXCJpbmplY3RcIjp2YXIgZj0hMTtzd2l0Y2goYi5zdWJzdHIoMCxiLmxlbmd0aC0xKSl7Y2FzZVwidHJhbnNsYXRlXCI6Zj0hLyglfHB4fGVtfHJlbXx2d3x2aHxcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwic2NhbFwiOmNhc2VcInNjYWxlXCI6dC5TdGF0ZS5pc0FuZHJvaWQmJmcoYykudHJhbnNmb3JtQ2FjaGVbYl09PT1kJiYxPmUmJihlPTEpLGY9IS8oXFxkKSQvaS50ZXN0KGUpO2JyZWFrO2Nhc2VcInNrZXdcIjpmPSEvKGRlZ3xcXGQpJC9pLnRlc3QoZSk7YnJlYWs7Y2FzZVwicm90YXRlXCI6Zj0hLyhkZWd8XFxkKSQvaS50ZXN0KGUpfXJldHVybiBmfHwoZyhjKS50cmFuc2Zvcm1DYWNoZVtiXT1cIihcIitlK1wiKVwiKSxnKGMpLnRyYW5zZm9ybUNhY2hlW2JdfX19KCk7Zm9yKHZhciBhPTA7YTx2Lkxpc3RzLmNvbG9ycy5sZW5ndGg7YSsrKSFmdW5jdGlvbigpe3ZhciBiPXYuTGlzdHMuY29sb3JzW2FdO3YuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtiXT1mdW5jdGlvbihhLGMsZSl7c3dpdGNoKGEpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gYjtjYXNlXCJleHRyYWN0XCI6dmFyIGY7aWYodi5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QoZSkpZj1lO2Vsc2V7dmFyIGcsaD17YmxhY2s6XCJyZ2IoMCwgMCwgMClcIixibHVlOlwicmdiKDAsIDAsIDI1NSlcIixncmF5OlwicmdiKDEyOCwgMTI4LCAxMjgpXCIsZ3JlZW46XCJyZ2IoMCwgMTI4LCAwKVwiLHJlZDpcInJnYigyNTUsIDAsIDApXCIsd2hpdGU6XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIn07L15bQS16XSskL2kudGVzdChlKT9nPWhbZV0hPT1kP2hbZV06aC5ibGFjazp2LlJlZ0V4LmlzSGV4LnRlc3QoZSk/Zz1cInJnYihcIit2LlZhbHVlcy5oZXhUb1JnYihlKS5qb2luKFwiIFwiKStcIilcIjovXnJnYmE/XFwoL2kudGVzdChlKXx8KGc9aC5ibGFjayksZj0oZ3x8ZSkudG9TdHJpbmcoKS5tYXRjaCh2LlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKX1yZXR1cm4gOD49bnx8MyE9PWYuc3BsaXQoXCIgXCIpLmxlbmd0aHx8KGYrPVwiIDFcIiksZjtjYXNlXCJpbmplY3RcIjpyZXR1cm4gOD49bj80PT09ZS5zcGxpdChcIiBcIikubGVuZ3RoJiYoZT1lLnNwbGl0KC9cXHMrLykuc2xpY2UoMCwzKS5qb2luKFwiIFwiKSk6Mz09PWUuc3BsaXQoXCIgXCIpLmxlbmd0aCYmKGUrPVwiIDFcIiksKDg+PW4/XCJyZ2JcIjpcInJnYmFcIikrXCIoXCIrZS5yZXBsYWNlKC9cXHMrL2csXCIsXCIpLnJlcGxhY2UoL1xcLihcXGQpKyg/PSwpL2csXCJcIikrXCIpXCJ9fX0oKX19LE5hbWVzOntjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvLShcXHcpL2csZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfSl9LFNWR0F0dHJpYnV0ZTpmdW5jdGlvbihhKXt2YXIgYj1cIndpZHRofGhlaWdodHx4fHl8Y3h8Y3l8cnxyeHxyeXx4MXx4Mnx5MXx5MlwiO3JldHVybihufHx0LlN0YXRlLmlzQW5kcm9pZCYmIXQuU3RhdGUuaXNDaHJvbWUpJiYoYis9XCJ8dHJhbnNmb3JtXCIpLG5ldyBSZWdFeHAoXCJeKFwiK2IrXCIpJFwiLFwiaVwiKS50ZXN0KGEpfSxwcmVmaXhDaGVjazpmdW5jdGlvbihhKXtpZih0LlN0YXRlLnByZWZpeE1hdGNoZXNbYV0pcmV0dXJuW3QuU3RhdGUucHJlZml4TWF0Y2hlc1thXSwhMF07Zm9yKHZhciBiPVtcIlwiLFwiV2Via2l0XCIsXCJNb3pcIixcIm1zXCIsXCJPXCJdLGM9MCxkPWIubGVuZ3RoO2Q+YztjKyspe3ZhciBlO2lmKGU9MD09PWM/YTpiW2NdK2EucmVwbGFjZSgvXlxcdy8sZnVuY3Rpb24oYSl7cmV0dXJuIGEudG9VcHBlckNhc2UoKX0pLHAuaXNTdHJpbmcodC5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW2VdKSlyZXR1cm4gdC5TdGF0ZS5wcmVmaXhNYXRjaGVzW2FdPWUsW2UsITBdfXJldHVyblthLCExXX19LFZhbHVlczp7aGV4VG9SZ2I6ZnVuY3Rpb24oYSl7dmFyIGIsYz0vXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGQ9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaTtyZXR1cm4gYT1hLnJlcGxhY2UoYyxmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYitiK2MrYytkK2R9KSxiPWQuZXhlYyhhKSxiP1twYXJzZUludChiWzFdLDE2KSxwYXJzZUludChiWzJdLDE2KSxwYXJzZUludChiWzNdLDE2KV06WzAsMCwwXX0saXNDU1NOdWxsVmFsdWU6ZnVuY3Rpb24oYSl7cmV0dXJuIDA9PWF8fC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KGEpfSxnZXRVbml0VHlwZTpmdW5jdGlvbihhKXtyZXR1cm4vXihyb3RhdGV8c2tldykvaS50ZXN0KGEpP1wiZGVnXCI6LyheKHNjYWxlfHNjYWxlWHxzY2FsZVl8c2NhbGVafGFscGhhfGZsZXhHcm93fGZsZXhIZWlnaHR8ekluZGV4fGZvbnRXZWlnaHQpJCl8KChvcGFjaXR5fHJlZHxncmVlbnxibHVlfGFscGhhKSQpL2kudGVzdChhKT9cIlwiOlwicHhcIn0sZ2V0RGlzcGxheVR5cGU6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50YWdOYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4vXihifGJpZ3xpfHNtYWxsfHR0fGFiYnJ8YWNyb255bXxjaXRlfGNvZGV8ZGZufGVtfGtiZHxzdHJvbmd8c2FtcHx2YXJ8YXxiZG98YnJ8aW1nfG1hcHxvYmplY3R8cXxzY3JpcHR8c3BhbnxzdWJ8c3VwfGJ1dHRvbnxpbnB1dHxsYWJlbHxzZWxlY3R8dGV4dGFyZWEpJC9pLnRlc3QoYik/XCJpbmxpbmVcIjovXihsaSkkL2kudGVzdChiKT9cImxpc3QtaXRlbVwiOi9eKHRyKSQvaS50ZXN0KGIpP1widGFibGUtcm93XCI6L14odGFibGUpJC9pLnRlc3QoYik/XCJ0YWJsZVwiOi9eKHRib2R5KSQvaS50ZXN0KGIpP1widGFibGUtcm93LWdyb3VwXCI6XCJibG9ja1wifSxhZGRDbGFzczpmdW5jdGlvbihhLGIpe2EuY2xhc3NMaXN0P2EuY2xhc3NMaXN0LmFkZChiKTphLmNsYXNzTmFtZSs9KGEuY2xhc3NOYW1lLmxlbmd0aD9cIiBcIjpcIlwiKStifSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGIpe2EuY2xhc3NMaXN0P2EuY2xhc3NMaXN0LnJlbW92ZShiKTphLmNsYXNzTmFtZT1hLmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2Iuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKFxcXFxzfCQpXCIsXCJnaVwiKSxcIiBcIil9fSxnZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYyxlLGYpe2Z1bmN0aW9uIGgoYSxjKXtmdW5jdGlvbiBlKCl7aiYmdi5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIsXCJub25lXCIpfXZhciBpPTA7aWYoOD49bilpPW0uY3NzKGEsYyk7ZWxzZXt2YXIgaj0hMTtpZigvXih3aWR0aHxoZWlnaHQpJC8udGVzdChjKSYmMD09PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiZGlzcGxheVwiKSYmKGo9ITAsdi5zZXRQcm9wZXJ0eVZhbHVlKGEsXCJkaXNwbGF5XCIsdi5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoYSkpKSwhZil7aWYoXCJoZWlnaHRcIj09PWMmJlwiYm9yZGVyLWJveFwiIT09di5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgaz1hLm9mZnNldEhlaWdodC0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlclRvcFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGEsXCJib3JkZXJCb3R0b21XaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ1RvcFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ0JvdHRvbVwiKSl8fDApO3JldHVybiBlKCksa31pZihcIndpZHRoXCI9PT1jJiZcImJvcmRlci1ib3hcIiE9PXYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIGw9YS5vZmZzZXRXaWR0aC0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcImJvcmRlckxlZnRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwiYm9yZGVyUmlnaHRXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShhLFwicGFkZGluZ0xlZnRcIikpfHwwKS0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxcInBhZGRpbmdSaWdodFwiKSl8fDApO3JldHVybiBlKCksbH19dmFyIG87bz1nKGEpPT09ZD9iLmdldENvbXB1dGVkU3R5bGUoYSxudWxsKTpnKGEpLmNvbXB1dGVkU3R5bGU/ZyhhKS5jb21wdXRlZFN0eWxlOmcoYSkuY29tcHV0ZWRTdHlsZT1iLmdldENvbXB1dGVkU3R5bGUoYSxudWxsKSxcImJvcmRlckNvbG9yXCI9PT1jJiYoYz1cImJvcmRlclRvcENvbG9yXCIpLGk9OT09PW4mJlwiZmlsdGVyXCI9PT1jP28uZ2V0UHJvcGVydHlWYWx1ZShjKTpvW2NdLChcIlwiPT09aXx8bnVsbD09PWkpJiYoaT1hLnN0eWxlW2NdKSxlKCl9aWYoXCJhdXRvXCI9PT1pJiYvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC9pLnRlc3QoYykpe3ZhciBwPWgoYSxcInBvc2l0aW9uXCIpOyhcImZpeGVkXCI9PT1wfHxcImFic29sdXRlXCI9PT1wJiYvdG9wfGxlZnQvaS50ZXN0KGMpKSYmKGk9bShhKS5wb3NpdGlvbigpW2NdK1wicHhcIil9cmV0dXJuIGl9dmFyIGk7aWYodi5Ib29rcy5yZWdpc3RlcmVkW2NdKXt2YXIgaj1jLGs9di5Ib29rcy5nZXRSb290KGopO2U9PT1kJiYoZT12LmdldFByb3BlcnR5VmFsdWUoYSx2Lk5hbWVzLnByZWZpeENoZWNrKGspWzBdKSksdi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2tdJiYoZT12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRba10oXCJleHRyYWN0XCIsYSxlKSksaT12Lkhvb2tzLmV4dHJhY3RWYWx1ZShqLGUpfWVsc2UgaWYodi5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKXt2YXIgbCxvO2w9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwibmFtZVwiLGEpLFwidHJhbnNmb3JtXCIhPT1sJiYobz1oKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhsKVswXSksdi5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobykmJnYuSG9va3MudGVtcGxhdGVzW2NdJiYobz12Lkhvb2tzLnRlbXBsYXRlc1tjXVsxXSkpLGk9di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiZXh0cmFjdFwiLGEsbyl9aWYoIS9eW1xcZC1dLy50ZXN0KGkpKWlmKGcoYSkmJmcoYSkuaXNTVkcmJnYuTmFtZXMuU1ZHQXR0cmlidXRlKGMpKWlmKC9eKGhlaWdodHx3aWR0aCkkL2kudGVzdChjKSl0cnl7aT1hLmdldEJCb3goKVtjXX1jYXRjaChwKXtpPTB9ZWxzZSBpPWEuZ2V0QXR0cmlidXRlKGMpO2Vsc2UgaT1oKGEsdi5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSk7cmV0dXJuIHYuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGkpJiYoaT0wKSx0LmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIkdldCBcIitjK1wiOiBcIitpKSxpfSxzZXRQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGEsYyxkLGUsZil7dmFyIGg9YztpZihcInNjcm9sbFwiPT09YylmLmNvbnRhaW5lcj9mLmNvbnRhaW5lcltcInNjcm9sbFwiK2YuZGlyZWN0aW9uXT1kOlwiTGVmdFwiPT09Zi5kaXJlY3Rpb24/Yi5zY3JvbGxUbyhkLGYuYWx0ZXJuYXRlVmFsdWUpOmIuc2Nyb2xsVG8oZi5hbHRlcm5hdGVWYWx1ZSxkKTtlbHNlIGlmKHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmXCJ0cmFuc2Zvcm1cIj09PXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcIm5hbWVcIixhKSl2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJpbmplY3RcIixhLGQpLGg9XCJ0cmFuc2Zvcm1cIixkPWcoYSkudHJhbnNmb3JtQ2FjaGVbY107ZWxzZXtpZih2Lkhvb2tzLnJlZ2lzdGVyZWRbY10pe3ZhciBpPWMsaj12Lkhvb2tzLmdldFJvb3QoYyk7ZT1lfHx2LmdldFByb3BlcnR5VmFsdWUoYSxqKSxkPXYuSG9va3MuaW5qZWN0VmFsdWUoaSxkLGUpLGM9an1pZih2Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJihkPXYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImluamVjdFwiLGEsZCksYz12Lk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10oXCJuYW1lXCIsYSkpLGg9di5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSw4Pj1uKXRyeXthLnN0eWxlW2hdPWR9Y2F0Y2goayl7dC5kZWJ1ZyYmY29uc29sZS5sb2coXCJCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgW1wiK2QrXCJdIGZvciBbXCIraCtcIl1cIil9ZWxzZSBnKGEpJiZnKGEpLmlzU1ZHJiZ2Lk5hbWVzLlNWR0F0dHJpYnV0ZShjKT9hLnNldEF0dHJpYnV0ZShjLGQpOmEuc3R5bGVbaF09ZDt0LmRlYnVnPj0yJiZjb25zb2xlLmxvZyhcIlNldCBcIitjK1wiIChcIitoK1wiKTogXCIrZCl9cmV0dXJuW2gsZF19LGZsdXNoVHJhbnNmb3JtQ2FjaGU6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gcGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoYSxiKSl9dmFyIGM9XCJcIjtpZigobnx8dC5TdGF0ZS5pc0FuZHJvaWQmJiF0LlN0YXRlLmlzQ2hyb21lKSYmZyhhKS5pc1NWRyl7dmFyIGQ9e3RyYW5zbGF0ZTpbYihcInRyYW5zbGF0ZVhcIiksYihcInRyYW5zbGF0ZVlcIildLHNrZXdYOltiKFwic2tld1hcIildLHNrZXdZOltiKFwic2tld1lcIildLHNjYWxlOjEhPT1iKFwic2NhbGVcIik/W2IoXCJzY2FsZVwiKSxiKFwic2NhbGVcIildOltiKFwic2NhbGVYXCIpLGIoXCJzY2FsZVlcIildLHJvdGF0ZTpbYihcInJvdGF0ZVpcIiksMCwwXX07bS5lYWNoKGcoYSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24oYSl7L150cmFuc2xhdGUvaS50ZXN0KGEpP2E9XCJ0cmFuc2xhdGVcIjovXnNjYWxlL2kudGVzdChhKT9hPVwic2NhbGVcIjovXnJvdGF0ZS9pLnRlc3QoYSkmJihhPVwicm90YXRlXCIpLGRbYV0mJihjKz1hK1wiKFwiK2RbYV0uam9pbihcIiBcIikrXCIpIFwiLGRlbGV0ZSBkW2FdKX0pfWVsc2V7dmFyIGUsZjttLmVhY2goZyhhKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihiKXtyZXR1cm4gZT1nKGEpLnRyYW5zZm9ybUNhY2hlW2JdLFwidHJhbnNmb3JtUGVyc3BlY3RpdmVcIj09PWI/KGY9ZSwhMCk6KDk9PT1uJiZcInJvdGF0ZVpcIj09PWImJihiPVwicm90YXRlXCIpLHZvaWQoYys9YitlK1wiIFwiKSl9KSxmJiYoYz1cInBlcnNwZWN0aXZlXCIrZitcIiBcIitjKX12LnNldFByb3BlcnR5VmFsdWUoYSxcInRyYW5zZm9ybVwiLGMpfX07di5Ib29rcy5yZWdpc3RlcigpLHYuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXIoKSx0Lmhvb2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlPWQ7cmV0dXJuIGE9ZihhKSxtLmVhY2goYSxmdW5jdGlvbihhLGYpe2lmKGcoZik9PT1kJiZ0LmluaXQoZiksYz09PWQpZT09PWQmJihlPXQuQ1NTLmdldFByb3BlcnR5VmFsdWUoZixiKSk7ZWxzZXt2YXIgaD10LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGYsYixjKTtcInRyYW5zZm9ybVwiPT09aFswXSYmdC5DU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShmKSxlPWh9fSksZX07dmFyIHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7cmV0dXJuIGg/Qi5wcm9taXNlfHxudWxsOml9ZnVuY3Rpb24gZSgpe2Z1bmN0aW9uIGEoYSl7ZnVuY3Rpb24gbChhLGIpe3ZhciBjPWQsZT1kLGc9ZDtyZXR1cm4gcC5pc0FycmF5KGEpPyhjPWFbMF0sIXAuaXNBcnJheShhWzFdKSYmL15bXFxkLV0vLnRlc3QoYVsxXSl8fHAuaXNGdW5jdGlvbihhWzFdKXx8di5SZWdFeC5pc0hleC50ZXN0KGFbMV0pP2c9YVsxXToocC5pc1N0cmluZyhhWzFdKSYmIXYuUmVnRXguaXNIZXgudGVzdChhWzFdKXx8cC5pc0FycmF5KGFbMV0pKSYmKGU9Yj9hWzFdOmooYVsxXSxoLmR1cmF0aW9uKSxhWzJdIT09ZCYmKGc9YVsyXSkpKTpjPWEsYnx8KGU9ZXx8aC5lYXNpbmcpLHAuaXNGdW5jdGlvbihjKSYmKGM9Yy5jYWxsKGYseSx4KSkscC5pc0Z1bmN0aW9uKGcpJiYoZz1nLmNhbGwoZix5LHgpKSxbY3x8MCxlLGddfWZ1bmN0aW9uIG4oYSxiKXt2YXIgYyxkO3JldHVybiBkPShifHxcIjBcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1slQS16XSskLyxmdW5jdGlvbihhKXtyZXR1cm4gYz1hLFwiXCJ9KSxjfHwoYz12LlZhbHVlcy5nZXRVbml0VHlwZShhKSksW2QsY119ZnVuY3Rpb24gcigpe3ZhciBhPXtteVBhcmVudDpmLnBhcmVudE5vZGV8fGMuYm9keSxwb3NpdGlvbjp2LmdldFByb3BlcnR5VmFsdWUoZixcInBvc2l0aW9uXCIpLGZvbnRTaXplOnYuZ2V0UHJvcGVydHlWYWx1ZShmLFwiZm9udFNpemVcIil9LGQ9YS5wb3NpdGlvbj09PUkubGFzdFBvc2l0aW9uJiZhLm15UGFyZW50PT09SS5sYXN0UGFyZW50LGU9YS5mb250U2l6ZT09PUkubGFzdEZvbnRTaXplO0kubGFzdFBhcmVudD1hLm15UGFyZW50LEkubGFzdFBvc2l0aW9uPWEucG9zaXRpb24sSS5sYXN0Rm9udFNpemU9YS5mb250U2l6ZTt2YXIgaD0xMDAsaT17fTtpZihlJiZkKWkuZW1Ub1B4PUkubGFzdEVtVG9QeCxpLnBlcmNlbnRUb1B4V2lkdGg9SS5sYXN0UGVyY2VudFRvUHhXaWR0aCxpLnBlcmNlbnRUb1B4SGVpZ2h0PUkubGFzdFBlcmNlbnRUb1B4SGVpZ2h0O2Vsc2V7dmFyIGo9ZyhmKS5pc1NWRz9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJyZWN0XCIpOmMuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmluaXQoaiksYS5teVBhcmVudC5hcHBlbmRDaGlsZChqKSxtLmVhY2goW1wib3ZlcmZsb3dcIixcIm92ZXJmbG93WFwiLFwib3ZlcmZsb3dZXCJdLGZ1bmN0aW9uKGEsYil7dC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLGIsXCJoaWRkZW5cIil9KSx0LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGosXCJwb3NpdGlvblwiLGEucG9zaXRpb24pLHQuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixcImZvbnRTaXplXCIsYS5mb250U2l6ZSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwiYm94U2l6aW5nXCIsXCJjb250ZW50LWJveFwiKSxtLmVhY2goW1wibWluV2lkdGhcIixcIm1heFdpZHRoXCIsXCJ3aWR0aFwiLFwibWluSGVpZ2h0XCIsXCJtYXhIZWlnaHRcIixcImhlaWdodFwiXSxmdW5jdGlvbihhLGIpe3QuQ1NTLnNldFByb3BlcnR5VmFsdWUoaixiLGgrXCIlXCIpfSksdC5DU1Muc2V0UHJvcGVydHlWYWx1ZShqLFwicGFkZGluZ0xlZnRcIixoK1wiZW1cIiksaS5wZXJjZW50VG9QeFdpZHRoPUkubGFzdFBlcmNlbnRUb1B4V2lkdGg9KHBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGosXCJ3aWR0aFwiLG51bGwsITApKXx8MSkvaCxpLnBlcmNlbnRUb1B4SGVpZ2h0PUkubGFzdFBlcmNlbnRUb1B4SGVpZ2h0PShwYXJzZUZsb2F0KHYuZ2V0UHJvcGVydHlWYWx1ZShqLFwiaGVpZ2h0XCIsbnVsbCwhMCkpfHwxKS9oLGkuZW1Ub1B4PUkubGFzdEVtVG9QeD0ocGFyc2VGbG9hdCh2LmdldFByb3BlcnR5VmFsdWUoaixcInBhZGRpbmdMZWZ0XCIpKXx8MSkvaCxhLm15UGFyZW50LnJlbW92ZUNoaWxkKGopfXJldHVybiBudWxsPT09SS5yZW1Ub1B4JiYoSS5yZW1Ub1B4PXBhcnNlRmxvYXQodi5nZXRQcm9wZXJ0eVZhbHVlKGMuYm9keSxcImZvbnRTaXplXCIpKXx8MTYpLG51bGw9PT1JLnZ3VG9QeCYmKEkudndUb1B4PXBhcnNlRmxvYXQoYi5pbm5lcldpZHRoKS8xMDAsSS52aFRvUHg9cGFyc2VGbG9hdChiLmlubmVySGVpZ2h0KS8xMDApLGkucmVtVG9QeD1JLnJlbVRvUHgsaS52d1RvUHg9SS52d1RvUHgsaS52aFRvUHg9SS52aFRvUHgsdC5kZWJ1Zz49MSYmY29uc29sZS5sb2coXCJVbml0IHJhdGlvczogXCIrSlNPTi5zdHJpbmdpZnkoaSksZiksaX1pZihoLmJlZ2luJiYwPT09eSl0cnl7aC5iZWdpbi5jYWxsKG8sbyl9Y2F0Y2godSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IHV9LDEpfWlmKFwic2Nyb2xsXCI9PT1DKXt2YXIgdyx6LEEsRD0vXngkL2kudGVzdChoLmF4aXMpP1wiTGVmdFwiOlwiVG9wXCIsRT1wYXJzZUZsb2F0KGgub2Zmc2V0KXx8MDtoLmNvbnRhaW5lcj9wLmlzV3JhcHBlZChoLmNvbnRhaW5lcil8fHAuaXNOb2RlKGguY29udGFpbmVyKT8oaC5jb250YWluZXI9aC5jb250YWluZXJbMF18fGguY29udGFpbmVyLHc9aC5jb250YWluZXJbXCJzY3JvbGxcIitEXSxBPXcrbShmKS5wb3NpdGlvbigpW0QudG9Mb3dlckNhc2UoKV0rRSk6aC5jb250YWluZXI9bnVsbDoodz10LlN0YXRlLnNjcm9sbEFuY2hvclt0LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIitEXV0sej10LlN0YXRlLnNjcm9sbEFuY2hvclt0LlN0YXRlW1wic2Nyb2xsUHJvcGVydHlcIisoXCJMZWZ0XCI9PT1EP1wiVG9wXCI6XCJMZWZ0XCIpXV0sQT1tKGYpLm9mZnNldCgpW0QudG9Mb3dlckNhc2UoKV0rRSksaT17c2Nyb2xsOntyb290UHJvcGVydHlWYWx1ZTohMSxzdGFydFZhbHVlOncsY3VycmVudFZhbHVlOncsZW5kVmFsdWU6QSx1bml0VHlwZTpcIlwiLGVhc2luZzpoLmVhc2luZyxzY3JvbGxEYXRhOntjb250YWluZXI6aC5jb250YWluZXIsZGlyZWN0aW9uOkQsYWx0ZXJuYXRlVmFsdWU6en19LGVsZW1lbnQ6Zn0sdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKHNjcm9sbCk6IFwiLGkuc2Nyb2xsLGYpfWVsc2UgaWYoXCJyZXZlcnNlXCI9PT1DKXtpZighZyhmKS50d2VlbnNDb250YWluZXIpcmV0dXJuIHZvaWQgbS5kZXF1ZXVlKGYsaC5xdWV1ZSk7XCJub25lXCI9PT1nKGYpLm9wdHMuZGlzcGxheSYmKGcoZikub3B0cy5kaXNwbGF5PVwiYXV0b1wiKSxcImhpZGRlblwiPT09ZyhmKS5vcHRzLnZpc2liaWxpdHkmJihnKGYpLm9wdHMudmlzaWJpbGl0eT1cInZpc2libGVcIiksZyhmKS5vcHRzLmxvb3A9ITEsZyhmKS5vcHRzLmJlZ2luPW51bGwsZyhmKS5vcHRzLmNvbXBsZXRlPW51bGwscy5lYXNpbmd8fGRlbGV0ZSBoLmVhc2luZyxzLmR1cmF0aW9ufHxkZWxldGUgaC5kdXJhdGlvbixoPW0uZXh0ZW5kKHt9LGcoZikub3B0cyxoKTt2YXIgRj1tLmV4dGVuZCghMCx7fSxnKGYpLnR3ZWVuc0NvbnRhaW5lcik7Zm9yKHZhciBHIGluIEYpaWYoXCJlbGVtZW50XCIhPT1HKXt2YXIgSD1GW0ddLnN0YXJ0VmFsdWU7RltHXS5zdGFydFZhbHVlPUZbR10uY3VycmVudFZhbHVlPUZbR10uZW5kVmFsdWUsRltHXS5lbmRWYWx1ZT1ILHAuaXNFbXB0eU9iamVjdChzKXx8KEZbR10uZWFzaW5nPWguZWFzaW5nKSx0LmRlYnVnJiZjb25zb2xlLmxvZyhcInJldmVyc2UgdHdlZW5zQ29udGFpbmVyIChcIitHK1wiKTogXCIrSlNPTi5zdHJpbmdpZnkoRltHXSksZil9aT1GfWVsc2UgaWYoXCJzdGFydFwiPT09Qyl7dmFyIEY7ZyhmKS50d2VlbnNDb250YWluZXImJmcoZikuaXNBbmltYXRpbmc9PT0hMCYmKEY9ZyhmKS50d2VlbnNDb250YWluZXIpLG0uZWFjaChxLGZ1bmN0aW9uKGEsYil7aWYoUmVnRXhwKFwiXlwiK3YuTGlzdHMuY29sb3JzLmpvaW4oXCIkfF5cIikrXCIkXCIpLnRlc3QoYSkpe3ZhciBjPWwoYiwhMCksZT1jWzBdLGY9Y1sxXSxnPWNbMl07aWYodi5SZWdFeC5pc0hleC50ZXN0KGUpKXtmb3IodmFyIGg9W1wiUmVkXCIsXCJHcmVlblwiLFwiQmx1ZVwiXSxpPXYuVmFsdWVzLmhleFRvUmdiKGUpLGo9Zz92LlZhbHVlcy5oZXhUb1JnYihnKTpkLGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIG09W2lba11dO2YmJm0ucHVzaChmKSxqIT09ZCYmbS5wdXNoKGpba10pLHFbYStoW2tdXT1tfWRlbGV0ZSBxW2FdfX19KTtmb3IodmFyIEsgaW4gcSl7dmFyIEw9bChxW0tdKSxNPUxbMF0sTj1MWzFdLE89TFsyXTtLPXYuTmFtZXMuY2FtZWxDYXNlKEspO3ZhciBQPXYuSG9va3MuZ2V0Um9vdChLKSxRPSExO2lmKGcoZikuaXNTVkd8fFwidHdlZW5cIj09PVB8fHYuTmFtZXMucHJlZml4Q2hlY2soUClbMV0hPT0hMXx8di5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW1BdIT09ZCl7KGguZGlzcGxheSE9PWQmJm51bGwhPT1oLmRpc3BsYXkmJlwibm9uZVwiIT09aC5kaXNwbGF5fHxoLnZpc2liaWxpdHkhPT1kJiZcImhpZGRlblwiIT09aC52aXNpYmlsaXR5KSYmL29wYWNpdHl8ZmlsdGVyLy50ZXN0KEspJiYhTyYmMCE9PU0mJihPPTApLGguX2NhY2hlVmFsdWVzJiZGJiZGW0tdPyhPPT09ZCYmKE89RltLXS5lbmRWYWx1ZStGW0tdLnVuaXRUeXBlKSxRPWcoZikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtQXSk6di5Ib29rcy5yZWdpc3RlcmVkW0tdP089PT1kPyhRPXYuZ2V0UHJvcGVydHlWYWx1ZShmLFApLE89di5nZXRQcm9wZXJ0eVZhbHVlKGYsSyxRKSk6UT12Lkhvb2tzLnRlbXBsYXRlc1tQXVsxXTpPPT09ZCYmKE89di5nZXRQcm9wZXJ0eVZhbHVlKGYsSykpO3ZhciBSLFMsVCxVPSExO2lmKFI9bihLLE8pLE89UlswXSxUPVJbMV0sUj1uKEssTSksTT1SWzBdLnJlcGxhY2UoL14oWystXFwvKl0pPS8sZnVuY3Rpb24oYSxiKXtyZXR1cm4gVT1iLFwiXCJ9KSxTPVJbMV0sTz1wYXJzZUZsb2F0KE8pfHwwLE09cGFyc2VGbG9hdChNKXx8MCxcIiVcIj09PVMmJigvXihmb250U2l6ZXxsaW5lSGVpZ2h0KSQvLnRlc3QoSyk/KE0vPTEwMCxTPVwiZW1cIik6L15zY2FsZS8udGVzdChLKT8oTS89MTAwLFM9XCJcIik6LyhSZWR8R3JlZW58Qmx1ZSkkL2kudGVzdChLKSYmKE09TS8xMDAqMjU1LFM9XCJcIikpLC9bXFwvKl0vLnRlc3QoVSkpUz1UO2Vsc2UgaWYoVCE9PVMmJjAhPT1PKWlmKDA9PT1NKVM9VDtlbHNle2U9ZXx8cigpO3ZhciBWPS9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KEspfHwvWCQvLnRlc3QoSyl8fFwieFwiPT09Sz9cInhcIjpcInlcIjtcbnN3aXRjaChUKXtjYXNlXCIlXCI6Tyo9XCJ4XCI9PT1WP2UucGVyY2VudFRvUHhXaWR0aDplLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpPKj1lW1QrXCJUb1B4XCJdfXN3aXRjaChTKXtjYXNlXCIlXCI6Tyo9MS8oXCJ4XCI9PT1WP2UucGVyY2VudFRvUHhXaWR0aDplLnBlcmNlbnRUb1B4SGVpZ2h0KTticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6Tyo9MS9lW1MrXCJUb1B4XCJdfX1zd2l0Y2goVSl7Y2FzZVwiK1wiOk09TytNO2JyZWFrO2Nhc2VcIi1cIjpNPU8tTTticmVhaztjYXNlXCIqXCI6TT1PKk07YnJlYWs7Y2FzZVwiL1wiOk09Ty9NfWlbS109e3Jvb3RQcm9wZXJ0eVZhbHVlOlEsc3RhcnRWYWx1ZTpPLGN1cnJlbnRWYWx1ZTpPLGVuZFZhbHVlOk0sdW5pdFR5cGU6UyxlYXNpbmc6Tn0sdC5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiK0srXCIpOiBcIitKU09OLnN0cmluZ2lmeShpW0tdKSxmKX1lbHNlIHQuZGVidWcmJmNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiK1ArXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKX1pLmVsZW1lbnQ9Zn1pLmVsZW1lbnQmJih2LlZhbHVlcy5hZGRDbGFzcyhmLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpLEoucHVzaChpKSxcIlwiPT09aC5xdWV1ZSYmKGcoZikudHdlZW5zQ29udGFpbmVyPWksZyhmKS5vcHRzPWgpLGcoZikuaXNBbmltYXRpbmc9ITAseT09PXgtMT8odC5TdGF0ZS5jYWxscy5wdXNoKFtKLG8saCxudWxsLEIucmVzb2x2ZXJdKSx0LlN0YXRlLmlzVGlja2luZz09PSExJiYodC5TdGF0ZS5pc1RpY2tpbmc9ITAsaygpKSk6eSsrKX12YXIgZSxmPXRoaXMsaD1tLmV4dGVuZCh7fSx0LmRlZmF1bHRzLHMpLGk9e307c3dpdGNoKGcoZik9PT1kJiZ0LmluaXQoZikscGFyc2VGbG9hdChoLmRlbGF5KSYmaC5xdWV1ZSE9PSExJiZtLnF1ZXVlKGYsaC5xdWV1ZSxmdW5jdGlvbihhKXt0LnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsZyhmKS5kZWxheVRpbWVyPXtzZXRUaW1lb3V0OnNldFRpbWVvdXQoYSxwYXJzZUZsb2F0KGguZGVsYXkpKSxuZXh0OmF9fSksaC5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImZhc3RcIjpoLmR1cmF0aW9uPTIwMDticmVhaztjYXNlXCJub3JtYWxcIjpoLmR1cmF0aW9uPXI7YnJlYWs7Y2FzZVwic2xvd1wiOmguZHVyYXRpb249NjAwO2JyZWFrO2RlZmF1bHQ6aC5kdXJhdGlvbj1wYXJzZUZsb2F0KGguZHVyYXRpb24pfHwxfXQubW9jayE9PSExJiYodC5tb2NrPT09ITA/aC5kdXJhdGlvbj1oLmRlbGF5PTE6KGguZHVyYXRpb24qPXBhcnNlRmxvYXQodC5tb2NrKXx8MSxoLmRlbGF5Kj1wYXJzZUZsb2F0KHQubW9jayl8fDEpKSxoLmVhc2luZz1qKGguZWFzaW5nLGguZHVyYXRpb24pLGguYmVnaW4mJiFwLmlzRnVuY3Rpb24oaC5iZWdpbikmJihoLmJlZ2luPW51bGwpLGgucHJvZ3Jlc3MmJiFwLmlzRnVuY3Rpb24oaC5wcm9ncmVzcykmJihoLnByb2dyZXNzPW51bGwpLGguY29tcGxldGUmJiFwLmlzRnVuY3Rpb24oaC5jb21wbGV0ZSkmJihoLmNvbXBsZXRlPW51bGwpLGguZGlzcGxheSE9PWQmJm51bGwhPT1oLmRpc3BsYXkmJihoLmRpc3BsYXk9aC5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcImF1dG9cIj09PWguZGlzcGxheSYmKGguZGlzcGxheT10LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZikpKSxoLnZpc2liaWxpdHkhPT1kJiZudWxsIT09aC52aXNpYmlsaXR5JiYoaC52aXNpYmlsaXR5PWgudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLGgubW9iaWxlSEE9aC5tb2JpbGVIQSYmdC5TdGF0ZS5pc01vYmlsZSYmIXQuU3RhdGUuaXNHaW5nZXJicmVhZCxoLnF1ZXVlPT09ITE/aC5kZWxheT9zZXRUaW1lb3V0KGEsaC5kZWxheSk6YSgpOm0ucXVldWUoZixoLnF1ZXVlLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM9PT0hMD8oQi5wcm9taXNlJiZCLnJlc29sdmVyKG8pLCEwKToodC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLHZvaWQgYShiKSl9KSxcIlwiIT09aC5xdWV1ZSYmXCJmeFwiIT09aC5xdWV1ZXx8XCJpbnByb2dyZXNzXCI9PT1tLnF1ZXVlKGYpWzBdfHxtLmRlcXVldWUoZil9dmFyIGgsaSxuLG8scSxzLHU9YXJndW1lbnRzWzBdJiYoYXJndW1lbnRzWzBdLnB8fG0uaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykmJiFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lc3x8cC5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmKHAuaXNXcmFwcGVkKHRoaXMpPyhoPSExLG49MCxvPXRoaXMsaT10aGlzKTooaD0hMCxuPTEsbz11P2FyZ3VtZW50c1swXS5lbGVtZW50c3x8YXJndW1lbnRzWzBdLmU6YXJndW1lbnRzWzBdKSxvPWYobykpe3U/KHE9YXJndW1lbnRzWzBdLnByb3BlcnRpZXN8fGFyZ3VtZW50c1swXS5wLHM9YXJndW1lbnRzWzBdLm9wdGlvbnN8fGFyZ3VtZW50c1swXS5vKToocT1hcmd1bWVudHNbbl0scz1hcmd1bWVudHNbbisxXSk7dmFyIHg9by5sZW5ndGgseT0wO2lmKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdChxKSYmIW0uaXNQbGFpbk9iamVjdChzKSl7dmFyIHo9bisxO3M9e307Zm9yKHZhciBBPXo7QTxhcmd1bWVudHMubGVuZ3RoO0ErKylwLmlzQXJyYXkoYXJndW1lbnRzW0FdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW0FdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tBXSk/cC5pc1N0cmluZyhhcmd1bWVudHNbQV0pfHxwLmlzQXJyYXkoYXJndW1lbnRzW0FdKT9zLmVhc2luZz1hcmd1bWVudHNbQV06cC5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tBXSkmJihzLmNvbXBsZXRlPWFyZ3VtZW50c1tBXSk6cy5kdXJhdGlvbj1hcmd1bWVudHNbQV19dmFyIEI9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O2gmJnQuUHJvbWlzZSYmKEIucHJvbWlzZT1uZXcgdC5Qcm9taXNlKGZ1bmN0aW9uKGEsYil7Qi5yZXNvbHZlcj1hLEIucmVqZWN0ZXI9Yn0pKTt2YXIgQztzd2l0Y2gocSl7Y2FzZVwic2Nyb2xsXCI6Qz1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpDPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcInN0b3BcIjptLmVhY2gobyxmdW5jdGlvbihhLGIpe2coYikmJmcoYikuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChnKGIpLmRlbGF5VGltZXIuc2V0VGltZW91dCksZyhiKS5kZWxheVRpbWVyLm5leHQmJmcoYikuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGcoYikuZGVsYXlUaW1lcil9KTt2YXIgRD1bXTtyZXR1cm4gbS5lYWNoKHQuU3RhdGUuY2FsbHMsZnVuY3Rpb24oYSxiKXtiJiZtLmVhY2goYlsxXSxmdW5jdGlvbihjLGUpe3ZhciBmPXM9PT1kP1wiXCI6cztyZXR1cm4gZiE9PSEwJiZiWzJdLnF1ZXVlIT09ZiYmKHMhPT1kfHxiWzJdLnF1ZXVlIT09ITEpfHx2b2lkIG0uZWFjaChvLGZ1bmN0aW9uKGMsZCl7ZD09PWUmJigocz09PSEwfHxwLmlzU3RyaW5nKHMpKSYmKG0uZWFjaChtLnF1ZXVlKGQscC5pc1N0cmluZyhzKT9zOlwiXCIpLGZ1bmN0aW9uKGEsYil7cC5pc0Z1bmN0aW9uKGIpJiZiKG51bGwsITApfSksbS5xdWV1ZShkLHAuaXNTdHJpbmcocyk/czpcIlwiLFtdKSksXCJzdG9wXCI9PT1xPyhnKGQpJiZnKGQpLnR3ZWVuc0NvbnRhaW5lciYmZiE9PSExJiZtLmVhY2goZyhkKS50d2VlbnNDb250YWluZXIsZnVuY3Rpb24oYSxiKXtiLmVuZFZhbHVlPWIuY3VycmVudFZhbHVlfSksRC5wdXNoKGEpKTpcImZpbmlzaFwiPT09cSYmKGJbMl0uZHVyYXRpb249MSkpfSl9KX0pLFwic3RvcFwiPT09cSYmKG0uZWFjaChELGZ1bmN0aW9uKGEsYil7bChiLCEwKX0pLEIucHJvbWlzZSYmQi5yZXNvbHZlcihvKSksYSgpO2RlZmF1bHQ6aWYoIW0uaXNQbGFpbk9iamVjdChxKXx8cC5pc0VtcHR5T2JqZWN0KHEpKXtpZihwLmlzU3RyaW5nKHEpJiZ0LlJlZGlyZWN0c1txXSl7dmFyIEU9bS5leHRlbmQoe30scyksRj1FLmR1cmF0aW9uLEc9RS5kZWxheXx8MDtyZXR1cm4gRS5iYWNrd2FyZHM9PT0hMCYmKG89bS5leHRlbmQoITAsW10sbykucmV2ZXJzZSgpKSxtLmVhY2gobyxmdW5jdGlvbihhLGIpe3BhcnNlRmxvYXQoRS5zdGFnZ2VyKT9FLmRlbGF5PUcrcGFyc2VGbG9hdChFLnN0YWdnZXIpKmE6cC5pc0Z1bmN0aW9uKEUuc3RhZ2dlcikmJihFLmRlbGF5PUcrRS5zdGFnZ2VyLmNhbGwoYixhLHgpKSxFLmRyYWcmJihFLmR1cmF0aW9uPXBhcnNlRmxvYXQoRil8fCgvXihjYWxsb3V0fHRyYW5zaXRpb24pLy50ZXN0KHEpPzFlMzpyKSxFLmR1cmF0aW9uPU1hdGgubWF4KEUuZHVyYXRpb24qKEUuYmFja3dhcmRzPzEtYS94OihhKzEpL3gpLC43NSpFLmR1cmF0aW9uLDIwMCkpLHQuUmVkaXJlY3RzW3FdLmNhbGwoYixiLEV8fHt9LGEseCxvLEIucHJvbWlzZT9COmQpfSksYSgpfXZhciBIPVwiVmVsb2NpdHk6IEZpcnN0IGFyZ3VtZW50IChcIitxK1wiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtyZXR1cm4gQi5wcm9taXNlP0IucmVqZWN0ZXIobmV3IEVycm9yKEgpKTpjb25zb2xlLmxvZyhIKSxhKCl9Qz1cInN0YXJ0XCJ9dmFyIEk9e2xhc3RQYXJlbnQ6bnVsbCxsYXN0UG9zaXRpb246bnVsbCxsYXN0Rm9udFNpemU6bnVsbCxsYXN0UGVyY2VudFRvUHhXaWR0aDpudWxsLGxhc3RQZXJjZW50VG9QeEhlaWdodDpudWxsLGxhc3RFbVRvUHg6bnVsbCxyZW1Ub1B4Om51bGwsdndUb1B4Om51bGwsdmhUb1B4Om51bGx9LEo9W107bS5lYWNoKG8sZnVuY3Rpb24oYSxiKXtwLmlzTm9kZShiKSYmZS5jYWxsKGIpfSk7dmFyIEssRT1tLmV4dGVuZCh7fSx0LmRlZmF1bHRzLHMpO2lmKEUubG9vcD1wYXJzZUludChFLmxvb3ApLEs9MipFLmxvb3AtMSxFLmxvb3ApZm9yKHZhciBMPTA7Sz5MO0wrKyl7dmFyIE09e2RlbGF5OkUuZGVsYXkscHJvZ3Jlc3M6RS5wcm9ncmVzc307TD09PUstMSYmKE0uZGlzcGxheT1FLmRpc3BsYXksTS52aXNpYmlsaXR5PUUudmlzaWJpbGl0eSxNLmNvbXBsZXRlPUUuY29tcGxldGUpLHcobyxcInJldmVyc2VcIixNKX1yZXR1cm4gYSgpfX07dD1tLmV4dGVuZCh3LHQpLHQuYW5pbWF0ZT13O3ZhciB4PWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxvO3JldHVybiB0LlN0YXRlLmlzTW9iaWxlfHxjLmhpZGRlbj09PWR8fGMuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpe2MuaGlkZGVuPyh4PWZ1bmN0aW9uKGEpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSghMCl9LDE2KX0saygpKTp4PWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxvfSksYS5WZWxvY2l0eT10LGEhPT1iJiYoYS5mbi52ZWxvY2l0eT13LGEuZm4udmVsb2NpdHkuZGVmYXVsdHM9dC5kZWZhdWx0cyksbS5lYWNoKFtcIkRvd25cIixcIlVwXCJdLGZ1bmN0aW9uKGEsYil7dC5SZWRpcmVjdHNbXCJzbGlkZVwiK2JdPWZ1bmN0aW9uKGEsYyxlLGYsZyxoKXt2YXIgaT1tLmV4dGVuZCh7fSxjKSxqPWkuYmVnaW4saz1pLmNvbXBsZXRlLGw9e2hlaWdodDpcIlwiLG1hcmdpblRvcDpcIlwiLG1hcmdpbkJvdHRvbTpcIlwiLHBhZGRpbmdUb3A6XCJcIixwYWRkaW5nQm90dG9tOlwiXCJ9LG49e307aS5kaXNwbGF5PT09ZCYmKGkuZGlzcGxheT1cIkRvd25cIj09PWI/XCJpbmxpbmVcIj09PXQuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShhKT9cImlubGluZS1ibG9ja1wiOlwiYmxvY2tcIjpcIm5vbmVcIiksaS5iZWdpbj1mdW5jdGlvbigpe2omJmouY2FsbChnLGcpO2Zvcih2YXIgYyBpbiBsKXtuW2NdPWEuc3R5bGVbY107dmFyIGQ9dC5DU1MuZ2V0UHJvcGVydHlWYWx1ZShhLGMpO2xbY109XCJEb3duXCI9PT1iP1tkLDBdOlswLGRdfW4ub3ZlcmZsb3c9YS5zdHlsZS5vdmVyZmxvdyxhLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9LGkuY29tcGxldGU9ZnVuY3Rpb24oKXtmb3IodmFyIGIgaW4gbilhLnN0eWxlW2JdPW5bYl07ayYmay5jYWxsKGcsZyksaCYmaC5yZXNvbHZlcihnKX0sdChhLGwsaSl9fSksbS5lYWNoKFtcIkluXCIsXCJPdXRcIl0sZnVuY3Rpb24oYSxiKXt0LlJlZGlyZWN0c1tcImZhZGVcIitiXT1mdW5jdGlvbihhLGMsZSxmLGcsaCl7dmFyIGk9bS5leHRlbmQoe30sYyksaj17b3BhY2l0eTpcIkluXCI9PT1iPzE6MH0saz1pLmNvbXBsZXRlO2kuY29tcGxldGU9ZSE9PWYtMT9pLmJlZ2luPW51bGw6ZnVuY3Rpb24oKXtrJiZrLmNhbGwoZyxnKSxoJiZoLnJlc29sdmVyKGcpfSxpLmRpc3BsYXk9PT1kJiYoaS5kaXNwbGF5PVwiSW5cIj09PWI/XCJhdXRvXCI6XCJub25lXCIpLHQodGhpcyxqLGkpfX0pLHR9KHdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0b3x8d2luZG93LHdpbmRvdyxkb2N1bWVudCl9KSksIWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KGsoYSxjKSxiKX1mdW5jdGlvbiBmKGEsYixjKXtyZXR1cm4hIUFycmF5LmlzQXJyYXkoYSkmJihnKGEsY1tiXSxjKSwhMCl9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGU7aWYoYSlpZihhLmZvckVhY2gpYS5mb3JFYWNoKGIsYyk7ZWxzZSBpZihhLmxlbmd0aCE9PWQpZm9yKGU9MDtlPGEubGVuZ3RoOyliLmNhbGwoYyxhW2VdLGUsYSksZSsrO2Vsc2UgZm9yKGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiZiLmNhbGwoYyxhW2VdLGUsYSl9ZnVuY3Rpb24gaChhLGIsYyl7Zm9yKHZhciBlPU9iamVjdC5rZXlzKGIpLGY9MDtmPGUubGVuZ3RoOykoIWN8fGMmJmFbZVtmXV09PT1kKSYmKGFbZVtmXV09YltlW2ZdXSksZisrO3JldHVybiBhfWZ1bmN0aW9uIGkoYSxiKXtyZXR1cm4gaChhLGIsITApfWZ1bmN0aW9uIGooYSxiLGMpe3ZhciBkLGU9Yi5wcm90b3R5cGU7ZD1hLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUpLGQuY29uc3RydWN0b3I9YSxkLl9zdXBlcj1lLGMmJmgoZCxjKX1mdW5jdGlvbiBrKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBsKGEsYil7cmV0dXJuIHR5cGVvZiBhPT1rYT9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gbShhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gbihhLGIsYyl7ZyhyKGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbyhhLGIsYyl7ZyhyKGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gcChhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gcShhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24gcihhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24gcyhhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHQoYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gdShhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTtzKGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIHYoYSxiKXtmb3IodmFyIGMsZSxmPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGc9MDtnPGlhLmxlbmd0aDspe2lmKGM9aWFbZ10sZT1jP2MrZjpiLGUgaW4gYSlyZXR1cm4gZTtnKyt9cmV0dXJuIGR9ZnVuY3Rpb24gdygpe3JldHVybiBvYSsrfWZ1bmN0aW9uIHgoYSl7dmFyIGI9YS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3fHxiLnBhcmVudFdpbmRvd31mdW5jdGlvbiB5KGEsYil7dmFyIGM9dGhpczt0aGlzLm1hbmFnZXI9YSx0aGlzLmNhbGxiYWNrPWIsdGhpcy5lbGVtZW50PWEuZWxlbWVudCx0aGlzLnRhcmdldD1hLm9wdGlvbnMuaW5wdXRUYXJnZXQsdGhpcy5kb21IYW5kbGVyPWZ1bmN0aW9uKGIpe2woYS5vcHRpb25zLmVuYWJsZSxbYV0pJiZjLmhhbmRsZXIoYil9LHRoaXMuaW5pdCgpfWZ1bmN0aW9uIHooYSl7dmFyIGIsYz1hLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gbmV3KGI9Yz9jOnJhP046c2E/UTpxYT9TOk0pKGEsQSl9ZnVuY3Rpb24gQShhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJnlhJiYwPT09ZC1lLGc9YiYoQWF8QmEpJiYwPT09ZC1lO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLEIoYSxjKSxhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIixjKSxhLnJlY29nbml6ZShjKSxhLnNlc3Npb24ucHJldklucHV0PWN9ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWEuc2Vzc2lvbixkPWIucG9pbnRlcnMsZT1kLmxlbmd0aDtjLmZpcnN0SW5wdXR8fChjLmZpcnN0SW5wdXQ9RShiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1FKGIpOjE9PT1lJiYoYy5maXJzdE11bHRpcGxlPSExKTt2YXIgZj1jLmZpcnN0SW5wdXQsZz1jLmZpcnN0TXVsdGlwbGUsaD1nP2cuY2VudGVyOmYuY2VudGVyLGk9Yi5jZW50ZXI9RihkKTtiLnRpbWVTdGFtcD1uYSgpLGIuZGVsdGFUaW1lPWIudGltZVN0YW1wLWYudGltZVN0YW1wLGIuYW5nbGU9SihoLGkpLGIuZGlzdGFuY2U9SShoLGkpLEMoYyxiKSxiLm9mZnNldERpcmVjdGlvbj1IKGIuZGVsdGFYLGIuZGVsdGFZKSxiLnNjYWxlPWc/TChnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP0soZy5wb2ludGVycyxkKTowLEQoYyxiKTt2YXIgaj1hLmVsZW1lbnQ7cChiLnNyY0V2ZW50LnRhcmdldCxqKSYmKGo9Yi5zcmNFdmVudC50YXJnZXQpLGIudGFyZ2V0PWp9ZnVuY3Rpb24gQyhhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307KGIuZXZlbnRUeXBlPT09eWF8fGYuZXZlbnRUeXBlPT09QWEpJiYoZT1hLnByZXZEZWx0YT17eDpmLmRlbHRhWHx8MCx5OmYuZGVsdGFZfHwwfSxkPWEub2Zmc2V0RGVsdGE9e3g6Yy54LHk6Yy55fSksYi5kZWx0YVg9ZS54KyhjLngtZC54KSxiLmRlbHRhWT1lLnkrKGMueS1kLnkpfWZ1bmN0aW9uIEQoYSxiKXt2YXIgYyxlLGYsZyxoPWEubGFzdEludGVydmFsfHxiLGk9Yi50aW1lU3RhbXAtaC50aW1lU3RhbXA7aWYoYi5ldmVudFR5cGUhPUJhJiYoaT54YXx8aC52ZWxvY2l0eT09PWQpKXt2YXIgaj1oLmRlbHRhWC1iLmRlbHRhWCxrPWguZGVsdGFZLWIuZGVsdGFZLGw9RyhpLGosayk7ZT1sLngsZj1sLnksYz1tYShsLngpPm1hKGwueSk/bC54OmwueSxnPUgoaixrKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgYz1oLnZlbG9jaXR5LGU9aC52ZWxvY2l0eVgsZj1oLnZlbG9jaXR5WSxnPWguZGlyZWN0aW9uO2IudmVsb2NpdHk9YyxiLnZlbG9jaXR5WD1lLGIudmVsb2NpdHlZPWYsYi5kaXJlY3Rpb249Z31mdW5jdGlvbiBFKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLnBvaW50ZXJzLmxlbmd0aDspYltjXT17Y2xpZW50WDpsYShhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6bGEoYS5wb2ludGVyc1tjXS5jbGllbnRZKX0sYysrO3JldHVybnt0aW1lU3RhbXA6bmEoKSxwb2ludGVyczpiLGNlbnRlcjpGKGIpLGRlbHRhWDphLmRlbHRhWCxkZWx0YVk6YS5kZWx0YVl9fWZ1bmN0aW9uIEYoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6bGEoYVswXS5jbGllbnRYKSx5OmxhKGFbMF0uY2xpZW50WSl9O2Zvcih2YXIgYz0wLGQ9MCxlPTA7Yj5lOyljKz1hW2VdLmNsaWVudFgsZCs9YVtlXS5jbGllbnRZLGUrKztyZXR1cm57eDpsYShjL2IpLHk6bGEoZC9iKX19ZnVuY3Rpb24gRyhhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBIKGEsYil7cmV0dXJuIGE9PT1iP0NhOm1hKGEpPj1tYShiKT9hPjA/RGE6RWE6Yj4wP0ZhOkdhfWZ1bmN0aW9uIEkoYSxiLGMpe2N8fChjPUthKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBKKGEsYixjKXtjfHwoYz1LYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gSyhhLGIpe3JldHVybiBKKGJbMV0sYlswXSxMYSktSihhWzFdLGFbMF0sTGEpfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm4gSShiWzBdLGJbMV0sTGEpL0koYVswXSxhWzFdLExhKX1mdW5jdGlvbiBNKCl7dGhpcy5ldkVsPU5hLHRoaXMuZXZXaW49T2EsdGhpcy5hbGxvdz0hMCx0aGlzLnByZXNzZWQ9ITEseS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTigpe3RoaXMuZXZFbD1SYSx0aGlzLmV2V2luPVNhLHkuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBPKCl7dGhpcy5ldlRhcmdldD1VYSx0aGlzLmV2V2luPVZhLHRoaXMuc3RhcnRlZD0hMSx5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBQKGEsYil7dmFyIGM9dChhLnRvdWNoZXMpLGQ9dChhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoQWF8QmEpJiYoYz11KGMuY29uY2F0KGQpLFwiaWRlbnRpZmllclwiLCEwKSksW2MsZF19ZnVuY3Rpb24gUSgpe3RoaXMuZXZUYXJnZXQ9WGEsdGhpcy50YXJnZXRJZHM9e30seS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gUihhLGIpe3ZhciBjPXQoYS50b3VjaGVzKSxkPXRoaXMudGFyZ2V0SWRzO2lmKGImKHlhfHphKSYmMT09PWMubGVuZ3RoKXJldHVybiBkW2NbMF0uaWRlbnRpZmllcl09ITAsW2MsY107dmFyIGUsZixnPXQoYS5jaGFuZ2VkVG91Y2hlcyksaD1bXSxpPXRoaXMudGFyZ2V0O2lmKGY9Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIHAoYS50YXJnZXQsaSl9KSxiPT09eWEpZm9yKGU9MDtlPGYubGVuZ3RoOylkW2ZbZV0uaWRlbnRpZmllcl09ITAsZSsrO2ZvcihlPTA7ZTxnLmxlbmd0aDspZFtnW2VdLmlkZW50aWZpZXJdJiZoLnB1c2goZ1tlXSksYiYoQWF8QmEpJiZkZWxldGUgZFtnW2VdLmlkZW50aWZpZXJdLGUrKztyZXR1cm4gaC5sZW5ndGg/W3UoZi5jb25jYXQoaCksXCJpZGVudGlmaWVyXCIsITApLGhdOnZvaWQgMH1mdW5jdGlvbiBTKCl7eS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGE9ayh0aGlzLmhhbmRsZXIsdGhpcyk7dGhpcy50b3VjaD1uZXcgUSh0aGlzLm1hbmFnZXIsYSksdGhpcy5tb3VzZT1uZXcgTSh0aGlzLm1hbmFnZXIsYSl9ZnVuY3Rpb24gVChhLGIpe3RoaXMubWFuYWdlcj1hLHRoaXMuc2V0KGIpfWZ1bmN0aW9uIFUoYSl7aWYocShhLGJiKSlyZXR1cm4gYmI7dmFyIGI9cShhLGNiKSxjPXEoYSxkYik7cmV0dXJuIGImJmM/Y2IrXCIgXCIrZGI6Ynx8Yz9iP2NiOmRiOnEoYSxhYik/YWI6X2F9ZnVuY3Rpb24gVihhKXt0aGlzLmlkPXcoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnM9aShhfHx7fSx0aGlzLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuZW5hYmxlPW0odGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1lYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFcoYSl7cmV0dXJuIGEmamI/XCJjYW5jZWxcIjphJmhiP1wiZW5kXCI6YSZnYj9cIm1vdmVcIjphJmZiP1wic3RhcnRcIjpcIlwifWZ1bmN0aW9uIFgoYSl7cmV0dXJuIGE9PUdhP1wiZG93blwiOmE9PUZhP1widXBcIjphPT1EYT9cImxlZnRcIjphPT1FYT9cInJpZ2h0XCI6XCJcIn1mdW5jdGlvbiBZKGEsYil7dmFyIGM9Yi5tYW5hZ2VyO3JldHVybiBjP2MuZ2V0KGEpOmF9ZnVuY3Rpb24gWigpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uICQoKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIF8oKXtaLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBhYSgpe1YuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBiYSgpe1ouYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGNhKCl7Wi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZGEoKXtWLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGVhKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1tKGIucmVjb2duaXplcnMsZWEuZGVmYXVsdHMucHJlc2V0KSxuZXcgZmEoYSxiKX1mdW5jdGlvbiBmYShhLGIpe2I9Ynx8e30sdGhpcy5vcHRpb25zPWkoYixlYS5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9eih0aGlzKSx0aGlzLnRvdWNoQWN0aW9uPW5ldyBUKHRoaXMsdGhpcy5vcHRpb25zLnRvdWNoQWN0aW9uKSxnYSh0aGlzLCEwKSxnKGIucmVjb2duaXplcnMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGQobmV3IGFbMF0oYVsxXSkpO2FbMl0mJmIucmVjb2duaXplV2l0aChhWzJdKSxhWzNdJiZiLnJlcXVpcmVGYWlsdXJlKGFbM10pfSx0aGlzKX1mdW5jdGlvbiBnYShhLGIpe3ZhciBjPWEuZWxlbWVudDtnKGEub3B0aW9ucy5jc3NQcm9wcyxmdW5jdGlvbihhLGQpe2Muc3R5bGVbdihjLnN0eWxlLGQpXT1iP2E6XCJcIn0pfWZ1bmN0aW9uIGhhKGEsYyl7dmFyIGQ9Yi5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2QuaW5pdEV2ZW50KGEsITAsITApLGQuZ2VzdHVyZT1jLGMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCl9dmFyIGlhPVtcIlwiLFwid2Via2l0XCIsXCJtb3pcIixcIk1TXCIsXCJtc1wiLFwib1wiXSxqYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksa2E9XCJmdW5jdGlvblwiLGxhPU1hdGgucm91bmQsbWE9TWF0aC5hYnMsbmE9RGF0ZS5ub3csb2E9MSxwYT0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2kscWE9XCJvbnRvdWNoc3RhcnRcImluIGEscmE9dihhLFwiUG9pbnRlckV2ZW50XCIpIT09ZCxzYT1xYSYmcGEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSx0YT1cInRvdWNoXCIsdWE9XCJwZW5cIix2YT1cIm1vdXNlXCIsd2E9XCJraW5lY3RcIix4YT0yNSx5YT0xLHphPTIsQWE9NCxCYT04LENhPTEsRGE9MixFYT00LEZhPTgsR2E9MTYsSGE9RGF8RWEsSWE9RmF8R2EsSmE9SGF8SWEsS2E9W1wieFwiLFwieVwiXSxMYT1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO3kucHJvdG90eXBlPXtoYW5kbGVyOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZuKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZuKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZuKHgodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm8odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm8odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm8oeCh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX19O3ZhciBNYT17bW91c2Vkb3duOnlhLG1vdXNlbW92ZTp6YSxtb3VzZXVwOkFhfSxOYT1cIm1vdXNlZG93blwiLE9hPVwibW91c2Vtb3ZlIG1vdXNldXBcIjtqKE0seSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1NYVthLnR5cGVdO2ImeWEmJjA9PT1hLmJ1dHRvbiYmKHRoaXMucHJlc3NlZD0hMCksYiZ6YSYmMSE9PWEud2hpY2gmJihiPUFhKSx0aGlzLnByZXNzZWQmJnRoaXMuYWxsb3cmJihiJkFhJiYodGhpcy5wcmVzc2VkPSExKSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpbYV0sY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTp2YSxzcmNFdmVudDphfSkpfX0pO3ZhciBQYT17cG9pbnRlcmRvd246eWEscG9pbnRlcm1vdmU6emEscG9pbnRlcnVwOkFhLHBvaW50ZXJjYW5jZWw6QmEscG9pbnRlcm91dDpCYX0sUWE9ezI6dGEsMzp1YSw0OnZhLDU6d2F9LFJhPVwicG9pbnRlcmRvd25cIixTYT1cInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCYmKFJhPVwiTVNQb2ludGVyRG93blwiLFNhPVwiTVNQb2ludGVyTW92ZSBNU1BvaW50ZXJVcCBNU1BvaW50ZXJDYW5jZWxcIiksaihOLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1QYVtkXSxmPVFhW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09dGEsaD1zKGIsYS5wb2ludGVySWQsXCJwb2ludGVySWRcIik7ZSZ5YSYmKDA9PT1hLmJ1dHRvbnx8Zyk/MD5oJiYoYi5wdXNoKGEpLGg9Yi5sZW5ndGgtMSk6ZSYoQWF8QmEpJiYoYz0hMCksMD5ofHwoYltoXT1hLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGUse3BvaW50ZXJzOmIsY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpmLHNyY0V2ZW50OmF9KSxjJiZiLnNwbGljZShoLDEpKX19KTt2YXIgVGE9e3RvdWNoc3RhcnQ6eWEsdG91Y2htb3ZlOnphLHRvdWNoZW5kOkFhLHRvdWNoY2FuY2VsOkJhfSxVYT1cInRvdWNoc3RhcnRcIixWYT1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aihPLHkse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9VGFbYS50eXBlXTtpZihiPT09eWEmJih0aGlzLnN0YXJ0ZWQ9ITApLHRoaXMuc3RhcnRlZCl7dmFyIGM9UC5jYWxsKHRoaXMsYSxiKTtiJihBYXxCYSkmJjA9PT1jWzBdLmxlbmd0aC1jWzFdLmxlbmd0aCYmKHRoaXMuc3RhcnRlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp0YSxzcmNFdmVudDphfSl9fX0pO3ZhciBXYT17dG91Y2hzdGFydDp5YSx0b3VjaG1vdmU6emEsdG91Y2hlbmQ6QWEsdG91Y2hjYW5jZWw6QmF9LFhhPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtqKFEseSx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1XYVthLnR5cGVdLGM9Ui5jYWxsKHRoaXMsYSxiKTtjJiZ0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnRhLHNyY0V2ZW50OmF9KX19KSxqKFMseSx7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09dGEsZT1jLnBvaW50ZXJUeXBlPT12YTtpZihkKXRoaXMubW91c2UuYWxsb3c9ITE7ZWxzZSBpZihlJiYhdGhpcy5tb3VzZS5hbGxvdylyZXR1cm47YiYoQWF8QmEpJiYodGhpcy5tb3VzZS5hbGxvdz0hMCksdGhpcy5jYWxsYmFjayhhLGIsYyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnRvdWNoLmRlc3Ryb3koKSx0aGlzLm1vdXNlLmRlc3Ryb3koKX19KTt2YXIgWWE9dihqYS5zdHlsZSxcInRvdWNoQWN0aW9uXCIpLFphPVlhIT09ZCwkYT1cImNvbXB1dGVcIixfYT1cImF1dG9cIixhYj1cIm1hbmlwdWxhdGlvblwiLGJiPVwibm9uZVwiLGNiPVwicGFuLXhcIixkYj1cInBhbi15XCI7VC5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXthPT0kYSYmKGE9dGhpcy5jb21wdXRlKCkpLFphJiYodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbWWFdPWEpLHRoaXMuYWN0aW9ucz1hLnRvTG93ZXJDYXNlKCkudHJpbSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbil9LGNvbXB1dGU6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gZyh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsZnVuY3Rpb24oYil7bChiLm9wdGlvbnMuZW5hYmxlLFtiXSkmJihhPWEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpfSksVShhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe2lmKCFaYSl7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gdm9pZCBiLnByZXZlbnREZWZhdWx0KCk7dmFyIGQ9dGhpcy5hY3Rpb25zLGU9cShkLGJiKSxmPXEoZCxkYiksZz1xKGQsY2IpO3JldHVybiBlfHxmJiZjJkhhfHxnJiZjJklhP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9fSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgZWI9MSxmYj0yLGdiPTQsaGI9OCxpYj1oYixqYj0xNixrYj0zMjtWLnByb3RvdHlwZT17ZGVmYXVsdHM6e30sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiBoKHRoaXMub3B0aW9ucyxhKSx0aGlzLm1hbmFnZXImJnRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSx0aGlzfSxyZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlY29nbml6ZVdpdGhcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYT1ZKGEsdGhpcyksYlthLmlkXXx8KGJbYS5pZF09YSxhLnJlY29nbml6ZVdpdGgodGhpcykpLHRoaXN9LGRyb3BSZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiBmKGEsXCJkcm9wUmVjb2duaXplV2l0aFwiLHRoaXMpP3RoaXM6KGE9WShhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPVkoYSx0aGlzKSwtMT09PXMoYixhKSYmKGIucHVzaChhKSxhLnJlcXVpcmVGYWlsdXJlKHRoaXMpKSx0aGlzfSxkcm9wUmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwiZHJvcFJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7YT1ZKGEsdGhpcyk7dmFyIGI9cyh0aGlzLnJlcXVpcmVGYWlsLGEpO3JldHVybiBiPi0xJiZ0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLDEpLHRoaXN9LGhhc1JlcXVpcmVGYWlsdXJlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aD4wfSxjYW5SZWNvZ25pemVXaXRoOmZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5zaW11bHRhbmVvdXNbYS5pZF19LGVtaXQ6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXtjLm1hbmFnZXIuZW1pdChjLm9wdGlvbnMuZXZlbnQrKGI/VyhkKTpcIlwiKSxhKX12YXIgYz10aGlzLGQ9dGhpcy5zdGF0ZTtoYj5kJiZiKCEwKSxiKCksZD49aGImJmIoITApfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6dm9pZCh0aGlzLnN0YXRlPWtiKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKGtifGViKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9aCh7fSxhKTtyZXR1cm4gbCh0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYoaWJ8amJ8a2IpJiYodGhpcy5zdGF0ZT1lYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdm9pZCh0aGlzLnN0YXRlJihmYnxnYnxoYnxqYikmJnRoaXMudHJ5RW1pdChiKSkpOih0aGlzLnJlc2V0KCksdm9pZCh0aGlzLnN0YXRlPWtiKSl9LHByb2Nlc3M6ZnVuY3Rpb24oKXt9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7fSxyZXNldDpmdW5jdGlvbigpe319LGooWixWLHtkZWZhdWx0czp7cG9pbnRlcnM6MX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwPT09Ynx8YS5wb2ludGVycy5sZW5ndGg9PT1ifSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RhdGUsYz1hLmV2ZW50VHlwZSxkPWImKGZifGdiKSxlPXRoaXMuYXR0clRlc3QoYSk7cmV0dXJuIGQmJihjJkJhfHwhZSk/YnxqYjpkfHxlP2MmQWE/YnxoYjpiJmZiP2J8Z2I6ZmI6a2J9fSksaigkLFose2RlZmF1bHRzOntldmVudDpcInBhblwiLHRocmVzaG9sZDoxMCxwb2ludGVyczoxLGRpcmVjdGlvbjpKYX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmSGEmJmIucHVzaChkYiksYSZJYSYmYi5wdXNoKGNiKSxifSxkaXJlY3Rpb25UZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPSEwLGQ9YS5kaXN0YW5jZSxlPWEuZGlyZWN0aW9uLGY9YS5kZWx0YVgsZz1hLmRlbHRhWTtyZXR1cm4gZSZiLmRpcmVjdGlvbnx8KGIuZGlyZWN0aW9uJkhhPyhlPTA9PT1mP0NhOjA+Zj9EYTpFYSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP0NhOjA+Zz9GYTpHYSxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBaLnByb3RvdHlwZS5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJih0aGlzLnN0YXRlJmZifHwhKHRoaXMuc3RhdGUmZmIpJiZ0aGlzLmRpcmVjdGlvblRlc3QoYSkpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMucFg9YS5kZWx0YVgsdGhpcy5wWT1hLmRlbHRhWTt2YXIgYj1YKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKX19KSxqKF8sWix7ZGVmYXVsdHM6e2V2ZW50OlwicGluY2hcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltiYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnNjYWxlLTEpPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmZmIpfSxlbWl0OmZ1bmN0aW9uKGEpe2lmKHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpLDEhPT1hLnNjYWxlKXt2YXIgYj1hLnNjYWxlPDE/XCJpblwiOlwib3V0XCI7dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSl9fX0pLGooYWEsVix7ZGVmYXVsdHM6e2V2ZW50OlwicHJlc3NcIixwb2ludGVyczoxLHRpbWU6NTAwLHRocmVzaG9sZDo1fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltfYV19LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLGM9YS5wb2ludGVycy5sZW5ndGg9PT1iLnBvaW50ZXJzLGQ9YS5kaXN0YW5jZTxiLnRocmVzaG9sZCxmPWEuZGVsdGFUaW1lPmIudGltZTtpZih0aGlzLl9pbnB1dD1hLCFkfHwhY3x8YS5ldmVudFR5cGUmKEFhfEJhKSYmIWYpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmeWEpdGhpcy5yZXNldCgpLHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPWliLHRoaXMudHJ5RW1pdCgpfSxiLnRpbWUsdGhpcyk7ZWxzZSBpZihhLmV2ZW50VHlwZSZBYSlyZXR1cm4gaWI7cmV0dXJuIGtifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5zdGF0ZT09PWliJiYoYSYmYS5ldmVudFR5cGUmQWE/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPW5hKCksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSkpfX0pLGooYmEsWix7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bYmJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZmYil9fSksaihjYSxaLHtkZWZhdWx0czp7ZXZlbnQ6XCJzd2lwZVwiLHRocmVzaG9sZDoxMCx2ZWxvY2l0eTouNjUsZGlyZWN0aW9uOkhhfElhLHBvaW50ZXJzOjF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuICQucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYyYoSGF8SWEpP2I9YS52ZWxvY2l0eTpjJkhhP2I9YS52ZWxvY2l0eVg6YyZJYSYmKGI9YS52ZWxvY2l0eVkpLHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmYyZhLmRpcmVjdGlvbiYmYS5kaXN0YW5jZT50aGlzLm9wdGlvbnMudGhyZXNob2xkJiZtYShiKT50aGlzLm9wdGlvbnMudmVsb2NpdHkmJmEuZXZlbnRUeXBlJkFhfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPVgoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCxhKX19KSxqKGRhLFYse2RlZmF1bHRzOntldmVudDpcInRhcFwiLHBvaW50ZXJzOjEsdGFwczoxLGludGVydmFsOjMwMCx0aW1lOjI1MCx0aHJlc2hvbGQ6Mixwb3NUaHJlc2hvbGQ6MTB9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2FiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU8Yi50aW1lO2lmKHRoaXMucmVzZXQoKSxhLmV2ZW50VHlwZSZ5YSYmMD09PXRoaXMuY291bnQpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZihkJiZmJiZjKXtpZihhLmV2ZW50VHlwZSE9QWEpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZz0hdGhpcy5wVGltZXx8YS50aW1lU3RhbXAtdGhpcy5wVGltZTxiLmludGVydmFsLGg9IXRoaXMucENlbnRlcnx8SSh0aGlzLnBDZW50ZXIsYS5jZW50ZXIpPGIucG9zVGhyZXNob2xkO3RoaXMucFRpbWU9YS50aW1lU3RhbXAsdGhpcy5wQ2VudGVyPWEuY2VudGVyLGgmJmc/dGhpcy5jb3VudCs9MTp0aGlzLmNvdW50PTEsdGhpcy5faW5wdXQ9YTt2YXIgaT10aGlzLmNvdW50JWIudGFwcztpZigwPT09aSlyZXR1cm4gdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKT8odGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9aWIsdGhpcy50cnlFbWl0KCl9LGIuaW50ZXJ2YWwsdGhpcyksZmIpOmlifXJldHVybiBrYn0sZmFpbFRpbWVvdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9a2J9LHRoaXMub3B0aW9ucy5pbnRlcnZhbCx0aGlzKSxrYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT09aWImJih0aGlzLl9pbnB1dC50YXBDb3VudD10aGlzLmNvdW50LHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpfX0pLGVhLlZFUlNJT049XCIyLjAuNFwiLGVhLmRlZmF1bHRzPXtkb21FdmVudHM6ITEsdG91Y2hBY3Rpb246JGEsZW5hYmxlOiEwLGlucHV0VGFyZ2V0Om51bGwsaW5wdXRDbGFzczpudWxsLHByZXNldDpbW2JhLHtlbmFibGU6ITF9XSxbXyx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtjYSx7ZGlyZWN0aW9uOkhhfV0sWyQse2RpcmVjdGlvbjpIYX0sW1wic3dpcGVcIl1dLFtkYV0sW2RhLHtldmVudDpcImRvdWJsZXRhcFwiLHRhcHM6Mn0sW1widGFwXCJdXSxbYWFdXSxjc3NQcm9wczp7dXNlclNlbGVjdDpcImRlZmF1bHRcIix0b3VjaFNlbGVjdDpcIm5vbmVcIix0b3VjaENhbGxvdXQ6XCJub25lXCIsY29udGVudFpvb21pbmc6XCJub25lXCIsdXNlckRyYWc6XCJub25lXCIsdGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9fTt2YXIgbGI9MSxtYj0yO2ZhLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe3JldHVybiBoKHRoaXMub3B0aW9ucyxhKSxhLnRvdWNoQWN0aW9uJiZ0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGEuaW5wdXRUYXJnZXQmJih0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmlucHV0LnRhcmdldD1hLmlucHV0VGFyZ2V0LHRoaXMuaW5wdXQuaW5pdCgpKSx0aGlzfSxzdG9wOmZ1bmN0aW9uKGEpe3RoaXMuc2Vzc2lvbi5zdG9wcGVkPWE/bWI6bGJ9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNlc3Npb247aWYoIWIuc3RvcHBlZCl7dGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsZD10aGlzLnJlY29nbml6ZXJzLGU9Yi5jdXJSZWNvZ25pemVyOyghZXx8ZSYmZS5zdGF0ZSZpYikmJihlPWIuY3VyUmVjb2duaXplcj1udWxsKTtmb3IodmFyIGY9MDtmPGQubGVuZ3RoOyljPWRbZl0sYi5zdG9wcGVkPT09bWJ8fGUmJmMhPWUmJiFjLmNhblJlY29nbml6ZVdpdGgoZSk/Yy5yZXNldCgpOmMucmVjb2duaXplKGEpLCFlJiZjLnN0YXRlJihmYnxnYnxoYikmJihlPWIuY3VyUmVjb2duaXplcj1jKSxmKyt9fSxnZXQ6ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFYpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGYoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlY29nbml6ZXJzO3JldHVybiBhPXRoaXMuZ2V0KGEpLGIuc3BsaWNlKHMoYixhKSwxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhyKGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc30sb2ZmOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhyKGEpLGZ1bmN0aW9uKGEpe2I/Y1thXS5zcGxpY2UocyhjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc30sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJmhhKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmdhKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0saChlYSx7SU5QVVRfU1RBUlQ6eWEsSU5QVVRfTU9WRTp6YSxJTlBVVF9FTkQ6QWEsSU5QVVRfQ0FOQ0VMOkJhLFNUQVRFX1BPU1NJQkxFOmViLFNUQVRFX0JFR0FOOmZiLFNUQVRFX0NIQU5HRUQ6Z2IsU1RBVEVfRU5ERUQ6aGIsU1RBVEVfUkVDT0dOSVpFRDppYixTVEFURV9DQU5DRUxMRUQ6amIsU1RBVEVfRkFJTEVEOmtiLERJUkVDVElPTl9OT05FOkNhLERJUkVDVElPTl9MRUZUOkRhLERJUkVDVElPTl9SSUdIVDpFYSxESVJFQ1RJT05fVVA6RmEsRElSRUNUSU9OX0RPV046R2EsRElSRUNUSU9OX0hPUklaT05UQUw6SGEsRElSRUNUSU9OX1ZFUlRJQ0FMOklhLERJUkVDVElPTl9BTEw6SmEsTWFuYWdlcjpmYSxJbnB1dDp5LFRvdWNoQWN0aW9uOlQsVG91Y2hJbnB1dDpRLE1vdXNlSW5wdXQ6TSxQb2ludGVyRXZlbnRJbnB1dDpOLFRvdWNoTW91c2VJbnB1dDpTLFNpbmdsZVRvdWNoSW5wdXQ6TyxSZWNvZ25pemVyOlYsQXR0clJlY29nbml6ZXI6WixUYXA6ZGEsUGFuOiQsU3dpcGU6Y2EsUGluY2g6XyxSb3RhdGU6YmEsUHJlc3M6YWEsb246bixvZmY6byxlYWNoOmcsbWVyZ2U6aSxleHRlbmQ6aCxpbmhlcml0OmosYmluZEZuOmsscHJlZml4ZWQ6dn0pLHR5cGVvZiBkZWZpbmU9PWthJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBlYX0pOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWVhOmFbY109ZWF9KHdpbmRvdyxkb2N1bWVudCxcIkhhbW1lclwiKSxmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiLFwiaGFtbWVyanNcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/YShyZXF1aXJlKFwianF1ZXJ5XCIpLHJlcXVpcmUoXCJoYW1tZXJqc1wiKSk6YShqUXVlcnksSGFtbWVyKX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGMsZCl7dmFyIGU9YShjKTtlLmRhdGEoXCJoYW1tZXJcIil8fGUuZGF0YShcImhhbW1lclwiLG5ldyBiKGVbMF0sZCkpfWEuZm4uaGFtbWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtjKHRoaXMsYSl9KX0sYi5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihjLGQpe2IuY2FsbCh0aGlzLGMsZCksYSh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoe3R5cGU6YyxnZXN0dXJlOmR9KX19KGIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCl9KSxmdW5jdGlvbihhKXthLlBhY2thZ2U/TWF0ZXJpYWxpemU9e306YS5NYXRlcmlhbGl6ZT17fX0od2luZG93KSxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPVtcIndlYmtpdFwiLFwibW96XCJdLGQ9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZT1hLmNhbmNlbEFuaW1hdGlvbkZyYW1lLGY9Yy5sZW5ndGg7LS1mPj0wJiYhZDspZD1hW2NbZl0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sZT1hW2NbZl0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZCYmZXx8KGQ9ZnVuY3Rpb24oYSl7dmFyIGM9K0RhdGUubm93KCksZD1NYXRoLm1heChiKzE2LGMpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YShiPWQpfSxkLWMpfSxlPWNsZWFyVGltZW91dCksYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZCxhLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWV9KHdpbmRvdyksTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmc9ZnVuY3Rpb24oYSl7dmFyIGI9YS5wcm9wKFwidGFnTmFtZVwiKXx8XCJcIixjPWEuYXR0cihcImlkXCIpfHxcIlwiLGQ9YS5hdHRyKFwiY2xhc3NcIil8fFwiXCI7cmV0dXJuKGIrYytkKS5yZXBsYWNlKC9cXHMvZyxcIlwiKX0sTWF0ZXJpYWxpemUuZ3VpZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gTWF0aC5mbG9vcig2NTUzNiooMStNYXRoLnJhbmRvbSgpKSkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYSgpK2EoKStcIi1cIithKCkrXCItXCIrYSgpK1wiLVwiK2EoKStcIi1cIithKCkrYSgpK2EoKX19KCksTWF0ZXJpYWxpemUuZXNjYXBlSGFzaD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsfD0pL2csXCJcXFxcJDFcIil9LE1hdGVyaWFsaXplLmVsZW1lbnRPclBhcmVudElzRml4ZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9JChhKSxjPWIuYWRkKGIucGFyZW50cygpKSxkPSExO3JldHVybiBjLmVhY2goZnVuY3Rpb24oKXtpZihcImZpeGVkXCI9PT0kKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpKXJldHVybiBkPSEwLCExfSksZH07dmFyIGdldFRpbWU9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9O01hdGVyaWFsaXplLnRocm90dGxlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1udWxsLGg9MDtjfHwoYz17fSk7dmFyIGk9ZnVuY3Rpb24oKXtoPWMubGVhZGluZz09PSExPzA6Z2V0VGltZSgpLGc9bnVsbCxmPWEuYXBwbHkoZCxlKSxkPWU9bnVsbH07cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGo9Z2V0VGltZSgpO2h8fGMubGVhZGluZyE9PSExfHwoaD1qKTt2YXIgaz1iLShqLWgpO3JldHVybiBkPXRoaXMsZT1hcmd1bWVudHMsazw9MD8oY2xlYXJUaW1lb3V0KGcpLGc9bnVsbCxoPWosZj1hLmFwcGx5KGQsZSksZD1lPW51bGwpOmd8fGMudHJhaWxpbmc9PT0hMXx8KGc9c2V0VGltZW91dChpLGspKSxmfX07dmFyIFZlbDtWZWw9alF1ZXJ5P2pRdWVyeS5WZWxvY2l0eTokPyQuVmVsb2NpdHk6VmVsb2NpdHksZnVuY3Rpb24oYSl7YS5mbi5jb2xsYXBzaWJsZT1mdW5jdGlvbihiLGMpe3ZhciBkPXthY2NvcmRpb246dm9pZCAwLG9uT3Blbjp2b2lkIDAsb25DbG9zZTp2b2lkIDB9LGU9YjtyZXR1cm4gYj1hLmV4dGVuZChkLGIpLHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGQoYil7bT1sLmZpbmQoXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKSxiLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2IucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik6Yi5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxiLnBhcmVudCgpLmhhc0NsYXNzKFwiYWN0aXZlXCIpP2Iuc2libGluZ3MoXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5zbGlkZURvd24oe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSk6Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIil9fSksbS5ub3QoYikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksbS5ub3QoYikucGFyZW50KCkuY2hpbGRyZW4oXCIuY29sbGFwc2libGUtYm9keVwiKS5zdG9wKCEwLCExKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS5pcyhcIjp2aXNpYmxlXCIpJiZhKHRoaXMpLnNsaWRlVXAoe2R1cmF0aW9uOjM1MCxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKFwiaGVpZ2h0XCIsXCJcIiksaChhKHRoaXMpLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWhlYWRlclwiKSl9fSl9KX1mdW5jdGlvbiBmKGIpe2IuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTpiLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIucGFyZW50KCkuaGFzQ2xhc3MoXCJhY3RpdmVcIik/Yi5zaWJsaW5ncyhcIi5jb2xsYXBzaWJsZS1ib2R5XCIpLnN0b3AoITAsITEpLnNsaWRlRG93bih7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KTpiLnNpYmxpbmdzKFwiLmNvbGxhcHNpYmxlLWJvZHlcIikuc3RvcCghMCwhMSkuc2xpZGVVcCh7ZHVyYXRpb246MzUwLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KX1mdW5jdGlvbiBnKGEsYyl7Y3x8YS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSxiLmFjY29yZGlvbnx8XCJhY2NvcmRpb25cIj09PW58fHZvaWQgMD09PW4/ZChhKTpmKGEpLGgoYSl9ZnVuY3Rpb24gaChhKXthLmhhc0NsYXNzKFwiYWN0aXZlXCIpP1wiZnVuY3Rpb25cIj09dHlwZW9mIGIub25PcGVuJiZiLm9uT3Blbi5jYWxsKHRoaXMsYS5wYXJlbnQoKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkNsb3NlJiZiLm9uQ2xvc2UuY2FsbCh0aGlzLGEucGFyZW50KCkpfWZ1bmN0aW9uIGkoYSl7dmFyIGI9aihhKTtyZXR1cm4gYi5sZW5ndGg+MH1mdW5jdGlvbiBqKGEpe3JldHVybiBhLmNsb3Nlc3QoXCJsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXJcIil9ZnVuY3Rpb24gaygpe2wub2ZmKFwiY2xpY2suY29sbGFwc2VcIixcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIpfXZhciBsPWEodGhpcyksbT1hKHRoaXMpLmZpbmQoXCI+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlclwiKSxuPWwuZGF0YShcImNvbGxhcHNpYmxlXCIpO2lmKFwiZGVzdHJveVwiPT09ZSlyZXR1cm4gdm9pZCBrKCk7aWYoYz49MCYmYzxtLmxlbmd0aCl7dmFyIG89bS5lcShjKTtyZXR1cm4gdm9pZChvLmxlbmd0aCYmKFwib3BlblwiPT09ZXx8XCJjbG9zZVwiPT09ZSYmby5oYXNDbGFzcyhcImFjdGl2ZVwiKSkmJmcobykpfWsoKSxsLm9uKFwiY2xpY2suY29sbGFwc2VcIixcIj4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyXCIsZnVuY3Rpb24oYil7dmFyIGM9YShiLnRhcmdldCk7aShjKSYmKGM9aihjKSksZyhjKX0pLGIuYWNjb3JkaW9ufHxcImFjY29yZGlvblwiPT09bnx8dm9pZCAwPT09bj9nKG0uZmlsdGVyKFwiLmFjdGl2ZVwiKS5maXJzdCgpLCEwKTptLmZpbHRlcihcIi5hY3RpdmVcIikuZWFjaChmdW5jdGlvbigpe2coYSh0aGlzKSwhMCl9KX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIuY29sbGFwc2libGVcIikuY29sbGFwc2libGUoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4uc2Nyb2xsVG89ZnVuY3Rpb24oYil7cmV0dXJuIGEodGhpcykuc2Nyb2xsVG9wKGEodGhpcykuc2Nyb2xsVG9wKCktYSh0aGlzKS5vZmZzZXQoKS50b3ArYShiKS5vZmZzZXQoKS50b3ApLHRoaXN9LGEuZm4uZHJvcGRvd249ZnVuY3Rpb24oYil7dmFyIGM9e2luRHVyYXRpb246MzAwLG91dER1cmF0aW9uOjIyNSxjb25zdHJhaW5XaWR0aDohMCxob3ZlcjohMSxndXR0ZXI6MCxiZWxvd09yaWdpbjohMSxhbGlnbm1lbnQ6XCJsZWZ0XCIsc3RvcFByb3BhZ2F0aW9uOiExfTtyZXR1cm5cIm9wZW5cIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcIm9wZW5cIil9KSwhMSk6XCJjbG9zZVwiPT09Yj8odGhpcy5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwiY2xvc2VcIil9KSwhMSk6dm9pZCB0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBkKCl7dm9pZCAwIT09Zy5kYXRhKFwiaW5kdXJhdGlvblwiKSYmKGguaW5EdXJhdGlvbj1nLmRhdGEoXCJpbmR1cmF0aW9uXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJvdXRkdXJhdGlvblwiKSYmKGgub3V0RHVyYXRpb249Zy5kYXRhKFwib3V0ZHVyYXRpb25cIikpLHZvaWQgMCE9PWcuZGF0YShcImNvbnN0cmFpbndpZHRoXCIpJiYoaC5jb25zdHJhaW5XaWR0aD1nLmRhdGEoXCJjb25zdHJhaW53aWR0aFwiKSksdm9pZCAwIT09Zy5kYXRhKFwiaG92ZXJcIikmJihoLmhvdmVyPWcuZGF0YShcImhvdmVyXCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJndXR0ZXJcIikmJihoLmd1dHRlcj1nLmRhdGEoXCJndXR0ZXJcIikpLHZvaWQgMCE9PWcuZGF0YShcImJlbG93b3JpZ2luXCIpJiYoaC5iZWxvd09yaWdpbj1nLmRhdGEoXCJiZWxvd29yaWdpblwiKSksdm9pZCAwIT09Zy5kYXRhKFwiYWxpZ25tZW50XCIpJiYoaC5hbGlnbm1lbnQ9Zy5kYXRhKFwiYWxpZ25tZW50XCIpKSx2b2lkIDAhPT1nLmRhdGEoXCJzdG9wcHJvcGFnYXRpb25cIikmJihoLnN0b3BQcm9wYWdhdGlvbj1nLmRhdGEoXCJzdG9wcHJvcGFnYXRpb25cIikpfWZ1bmN0aW9uIGUoYil7XCJmb2N1c1wiPT09YiYmKGk9ITApLGQoKSxqLmFkZENsYXNzKFwiYWN0aXZlXCIpLGcuYWRkQ2xhc3MoXCJhY3RpdmVcIiksaC5jb25zdHJhaW5XaWR0aD09PSEwP2ouY3NzKFwid2lkdGhcIixnLm91dGVyV2lkdGgoKSk6ai5jc3MoXCJ3aGl0ZS1zcGFjZVwiLFwibm93cmFwXCIpO3ZhciBjPXdpbmRvdy5pbm5lckhlaWdodCxlPWcuaW5uZXJIZWlnaHQoKSxrPWcub2Zmc2V0KCkubGVmdCxsPWcub2Zmc2V0KCkudG9wLWEod2luZG93KS5zY3JvbGxUb3AoKSxtPWguYWxpZ25tZW50LG49MCxvPTAscD0wO2guYmVsb3dPcmlnaW49PT0hMCYmKHA9ZSk7dmFyIHE9MCxyPTAscz1nLnBhcmVudCgpO2lmKHMuaXMoXCJib2R5XCIpfHwoc1swXS5zY3JvbGxIZWlnaHQ+c1swXS5jbGllbnRIZWlnaHQmJihxPXNbMF0uc2Nyb2xsVG9wKSxzWzBdLnNjcm9sbFdpZHRoPnNbMF0uY2xpZW50V2lkdGgmJihyPXNbMF0uc2Nyb2xsTGVmdCkpLGsrai5pbm5lcldpZHRoKCk+YSh3aW5kb3cpLndpZHRoKCk/bT1cInJpZ2h0XCI6ay1qLmlubmVyV2lkdGgoKStnLmlubmVyV2lkdGgoKTwwJiYobT1cImxlZnRcIiksbCtqLmlubmVySGVpZ2h0KCk+YylpZihsK2Utai5pbm5lckhlaWdodCgpPDApe3ZhciB0PWMtbC1wO2ouY3NzKFwibWF4LWhlaWdodFwiLHQpfWVsc2UgcHx8KHArPWUpLHAtPWouaW5uZXJIZWlnaHQoKTtpZihcImxlZnRcIj09PW0pbj1oLmd1dHRlcixvPWcucG9zaXRpb24oKS5sZWZ0K247ZWxzZSBpZihcInJpZ2h0XCI9PT1tKXt2YXIgdT1nLnBvc2l0aW9uKCkubGVmdCtnLm91dGVyV2lkdGgoKS1qLm91dGVyV2lkdGgoKTtuPS1oLmd1dHRlcixvPXUrbn1qLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpnLnBvc2l0aW9uKCkudG9wK3ArcSxsZWZ0Om8rcn0pLGouc3RvcCghMCwhMCkuY3NzKFwib3BhY2l0eVwiLDApLnNsaWRlRG93bih7cXVldWU6ITEsZHVyYXRpb246aC5pbkR1cmF0aW9uLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3MoXCJoZWlnaHRcIixcIlwiKX19KS5hbmltYXRlKHtvcGFjaXR5OjF9LHtxdWV1ZTohMSxkdXJhdGlvbjpoLmluRHVyYXRpb24sZWFzaW5nOlwiZWFzZU91dFNpbmVcIn0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXthKGRvY3VtZW50KS5iaW5kKFwiY2xpY2suXCIrai5hdHRyKFwiaWRcIiksZnVuY3Rpb24oYil7ZigpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKX0pfSwwKX1mdW5jdGlvbiBmKCl7aT0hMSxqLmZhZGVPdXQoaC5vdXREdXJhdGlvbiksai5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxnLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEoZG9jdW1lbnQpLnVuYmluZChcImNsaWNrLlwiK2ouYXR0cihcImlkXCIpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ai5jc3MoXCJtYXgtaGVpZ2h0XCIsXCJcIil9LGgub3V0RHVyYXRpb24pfXZhciBnPWEodGhpcyksaD1hLmV4dGVuZCh7fSxjLGIpLGk9ITEsaj1hKFwiI1wiK2cuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKTtpZihkKCksZy5hZnRlcihqKSxoLmhvdmVyKXt2YXIgaz0hMTtnLnVuYmluZChcImNsaWNrLlwiK2cuYXR0cihcImlkXCIpKSxnLm9uKFwibW91c2VlbnRlclwiLGZ1bmN0aW9uKGEpe2s9PT0hMSYmKGUoKSxrPSEwKX0pLGcub24oXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oYil7dmFyIGM9Yi50b0VsZW1lbnR8fGIucmVsYXRlZFRhcmdldDthKGMpLmNsb3Nlc3QoXCIuZHJvcGRvd24tY29udGVudFwiKS5pcyhqKXx8KGouc3RvcCghMCwhMCksZigpLGs9ITEpfSksai5vbihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbihiKXt2YXIgYz1iLnRvRWxlbWVudHx8Yi5yZWxhdGVkVGFyZ2V0O2EoYykuY2xvc2VzdChcIi5kcm9wZG93bi1idXR0b25cIikuaXMoZyl8fChqLnN0b3AoITAsITApLGYoKSxrPSExKX0pfWVsc2UgZy51bmJpbmQoXCJjbGljay5cIitnLmF0dHIoXCJpZFwiKSksZy5iaW5kKFwiY2xpY2suXCIrZy5hdHRyKFwiaWRcIiksZnVuY3Rpb24oYil7aXx8KGdbMF0hPWIuY3VycmVudFRhcmdldHx8Zy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8MCE9PWEoYi50YXJnZXQpLmNsb3Nlc3QoXCIuZHJvcGRvd24tY29udGVudFwiKS5sZW5ndGg/Zy5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGYoKSxhKGRvY3VtZW50KS51bmJpbmQoXCJjbGljay5cIitqLmF0dHIoXCJpZFwiKSkpOihiLnByZXZlbnREZWZhdWx0KCksaC5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCksZShcImNsaWNrXCIpKSl9KTtnLm9uKFwib3BlblwiLGZ1bmN0aW9uKGEsYil7ZShiKX0pLGcub24oXCJjbG9zZVwiLGYpfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShcIi5kcm9wZG93bi1idXR0b25cIikuZHJvcGRvd24oKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe1xudmFyIGI9MCxjPTAsZD1mdW5jdGlvbigpe3JldHVybiBjKyssXCJtYXRlcmlhbGl6ZS1tb2RhbC1vdmVybGF5LVwiK2N9LGU9e2luaXQ6ZnVuY3Rpb24oYyl7dmFyIGU9e29wYWNpdHk6LjUsaW5EdXJhdGlvbjozNTAsb3V0RHVyYXRpb246MjUwLHJlYWR5OnZvaWQgMCxjb21wbGV0ZTp2b2lkIDAsZGlzbWlzc2libGU6ITAsc3RhcnRpbmdUb3A6XCI0JVwiLGVuZGluZ1RvcDpcIjEwJVwifTtyZXR1cm4gYz1hLmV4dGVuZChlLGMpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1hKHRoaXMpLmF0dHIoXCJpZFwiKXx8XCIjXCIrYSh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpLGc9ZnVuY3Rpb24oKXt2YXIgZD1lLmRhdGEoXCJvdmVybGF5LWlkXCIpLGY9YShcIiNcIitkKTtlLnJlbW92ZUNsYXNzKFwib3BlblwiKSxhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vZmYoXCJjbGljay5jbG9zZVwiKSxhKGRvY3VtZW50KS5vZmYoXCJrZXl1cC5tb2RhbFwiK2QpLGYudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmMub3V0RHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRRdWFydFwifSk7dmFyIGc9e2R1cmF0aW9uOmMub3V0RHVyYXRpb24scXVldWU6ITEsZWFzZTpcImVhc2VPdXRDdWJpY1wiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLmNvbXBsZXRlJiZjLmNvbXBsZXRlLmNhbGwodGhpcyxlKSxmLnJlbW92ZSgpLGItLX19O2UuaGFzQ2xhc3MoXCJib3R0b20tc2hlZXRcIik/ZS52ZWxvY2l0eSh7Ym90dG9tOlwiLTEwMCVcIixvcGFjaXR5OjB9LGcpOmUudmVsb2NpdHkoe3RvcDpjLnN0YXJ0aW5nVG9wLG9wYWNpdHk6MCxzY2FsZVg6Ljd9LGcpfSxoPWZ1bmN0aW9uKGYpe3ZhciBoPWEoXCJib2R5XCIpLGk9aC5pbm5lcldpZHRoKCk7aWYoaC5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGgud2lkdGgoaSksIWUuaGFzQ2xhc3MoXCJvcGVuXCIpKXt2YXIgaj1kKCksaz1hKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO2xTdGFjaz0rK2Isay5hdHRyKFwiaWRcIixqKS5jc3MoXCJ6LWluZGV4XCIsMWUzKzIqbFN0YWNrKSxlLmRhdGEoXCJvdmVybGF5LWlkXCIsaikuY3NzKFwiei1pbmRleFwiLDFlMysyKmxTdGFjaysxKSxlLmFkZENsYXNzKFwib3BlblwiKSxhKFwiYm9keVwiKS5hcHBlbmQoayksYy5kaXNtaXNzaWJsZSYmKGsuY2xpY2soZnVuY3Rpb24oKXtnKCl9KSxhKGRvY3VtZW50KS5vbihcImtleXVwLm1vZGFsXCIraixmdW5jdGlvbihhKXsyNz09PWEua2V5Q29kZSYmZygpfSkpLGUuZmluZChcIi5tb2RhbC1jbG9zZVwiKS5vbihcImNsaWNrLmNsb3NlXCIsZnVuY3Rpb24oYSl7ZygpfSksay5jc3Moe2Rpc3BsYXk6XCJibG9ja1wiLG9wYWNpdHk6MH0pLGUuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIixvcGFjaXR5OjB9KSxrLnZlbG9jaXR5KHtvcGFjaXR5OmMub3BhY2l0eX0se2R1cmF0aW9uOmMuaW5EdXJhdGlvbixxdWV1ZTohMSxlYXNlOlwiZWFzZU91dEN1YmljXCJ9KSxlLmRhdGEoXCJhc3NvY2lhdGVkLW92ZXJsYXlcIixrWzBdKTt2YXIgbD17ZHVyYXRpb246Yy5pbkR1cmF0aW9uLHF1ZXVlOiExLGVhc2U6XCJlYXNlT3V0Q3ViaWNcIixjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGMucmVhZHkmJmMucmVhZHkuY2FsbCh0aGlzLGUsZil9fTtlLmhhc0NsYXNzKFwiYm90dG9tLXNoZWV0XCIpP2UudmVsb2NpdHkoe2JvdHRvbTpcIjBcIixvcGFjaXR5OjF9LGwpOihhLlZlbG9jaXR5Lmhvb2soZSxcInNjYWxlWFwiLC43KSxlLmNzcyh7dG9wOmMuc3RhcnRpbmdUb3B9KSxlLnZlbG9jaXR5KHt0b3A6Yy5lbmRpbmdUb3Asb3BhY2l0eToxLHNjYWxlWDpcIjFcIn0sbCkpfX07YShkb2N1bWVudCkub2ZmKFwiY2xpY2subW9kYWxUcmlnZ2VyXCIsJ2FbaHJlZj1cIiMnK2YrJ1wiXSwgW2RhdGEtdGFyZ2V0PVwiJytmKydcIl0nKSxhKHRoaXMpLm9mZihcIm9wZW5Nb2RhbFwiKSxhKHRoaXMpLm9mZihcImNsb3NlTW9kYWxcIiksYShkb2N1bWVudCkub24oXCJjbGljay5tb2RhbFRyaWdnZXJcIiwnYVtocmVmPVwiIycrZisnXCJdLCBbZGF0YS10YXJnZXQ9XCInK2YrJ1wiXScsZnVuY3Rpb24oYil7Yy5zdGFydGluZ1RvcD0oYSh0aGlzKS5vZmZzZXQoKS50b3AtYSh3aW5kb3cpLnNjcm9sbFRvcCgpKS8xLjE1LGgoYSh0aGlzKSksYi5wcmV2ZW50RGVmYXVsdCgpfSksYSh0aGlzKS5vbihcIm9wZW5Nb2RhbFwiLGZ1bmN0aW9uKCl7YSh0aGlzKS5hdHRyKFwiaHJlZlwiKXx8XCIjXCIrYSh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpO2goKX0pLGEodGhpcykub24oXCJjbG9zZU1vZGFsXCIsZnVuY3Rpb24oKXtnKCl9KX0pfSxvcGVuOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwib3Blbk1vZGFsXCIpfSxjbG9zZTpmdW5jdGlvbigpe2EodGhpcykudHJpZ2dlcihcImNsb3NlTW9kYWxcIil9fTthLmZuLm1vZGFsPWZ1bmN0aW9uKGIpe3JldHVybiBlW2JdP2VbYl0uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBiJiZiP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitiK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbFwiKTplLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLm1hdGVyaWFsYm94PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtmPSExO3ZhciBiPWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGQ9KHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCxpLmRhdGEoXCJ3aWR0aFwiKSksZz1pLmRhdGEoXCJoZWlnaHRcIik7aS52ZWxvY2l0eShcInN0b3BcIiwhMCksYShcIiNtYXRlcmlhbGJveC1vdmVybGF5XCIpLnZlbG9jaXR5KFwic3RvcFwiLCEwKSxhKFwiLm1hdGVyaWFsYm94LWNhcHRpb25cIikudmVsb2NpdHkoXCJzdG9wXCIsITApLGEoXCIjbWF0ZXJpYWxib3gtb3ZlcmxheVwiKS52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZT0hMSxhKHRoaXMpLnJlbW92ZSgpfX0pLGkudmVsb2NpdHkoe3dpZHRoOmQsaGVpZ2h0OmcsbGVmdDowLHRvcDowfSx7ZHVyYXRpb246aCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7Yi5jc3Moe2hlaWdodDpcIlwiLHdpZHRoOlwiXCIscG9zaXRpb246XCJcIix0b3A6XCJcIixsZWZ0OlwiXCJ9KSxpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxpLmF0dHIoXCJzdHlsZVwiLGspLGkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZj0hMCxjJiZjLmNzcyhcIm92ZXJmbG93XCIsXCJcIil9fSksYShcIi5tYXRlcmlhbGJveC1jYXB0aW9uXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjpoLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pfWlmKCFhKHRoaXMpLmhhc0NsYXNzKFwiaW5pdGlhbGl6ZWRcIikpe2EodGhpcykuYWRkQ2xhc3MoXCJpbml0aWFsaXplZFwiKTt2YXIgYyxkLGU9ITEsZj0hMCxnPTI3NSxoPTIwMCxpPWEodGhpcyksaj1hKFwiPGRpdj48L2Rpdj5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1wbGFjZWhvbGRlclwiKSxrPWkuYXR0cihcInN0eWxlXCIpO2kud3JhcChqKSxpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3ZhciBoPWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLGo9d2luZG93LmlubmVyV2lkdGgsaz13aW5kb3cuaW5uZXJIZWlnaHQsbD1pLndpZHRoKCksbT1pLmhlaWdodCgpO2lmKGY9PT0hMSlyZXR1cm4gYigpLCExO2lmKGUmJmY9PT0hMClyZXR1cm4gYigpLCExO2Y9ITEsaS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlPSEwLGguY3NzKHt3aWR0aDpoWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLGhlaWdodDpoWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxwb3NpdGlvbjpcInJlbGF0aXZlXCIsdG9wOjAsbGVmdDowfSksYz12b2lkIDAsZD1oWzBdLnBhcmVudE5vZGU7Zm9yKDtudWxsIT09ZCYmIWEoZCkuaXMoZG9jdW1lbnQpOyl7dmFyIG49YShkKTtcInZpc2libGVcIiE9PW4uY3NzKFwib3ZlcmZsb3dcIikmJihuLmNzcyhcIm92ZXJmbG93XCIsXCJ2aXNpYmxlXCIpLGM9dm9pZCAwPT09Yz9uOmMuYWRkKG4pKSxkPWQucGFyZW50Tm9kZX1pLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwiLFwiei1pbmRleFwiOjFlMyxcIndpbGwtY2hhbmdlXCI6XCJsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcIn0pLmRhdGEoXCJ3aWR0aFwiLGwpLmRhdGEoXCJoZWlnaHRcIixtKTt2YXIgbz1hKCc8ZGl2IGlkPVwibWF0ZXJpYWxib3gtb3ZlcmxheVwiPjwvZGl2PicpLmNzcyh7b3BhY2l0eTowfSkuY2xpY2soZnVuY3Rpb24oKXtmPT09ITAmJmIoKX0pO2kuYmVmb3JlKG8pO3ZhciBwPW9bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoby5jc3Moe3dpZHRoOmosaGVpZ2h0OmssbGVmdDotMSpwLmxlZnQsdG9wOi0xKnAudG9wfSksby52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksXCJcIiE9PWkuZGF0YShcImNhcHRpb25cIikpe3ZhciBxPWEoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbGJveC1jYXB0aW9uXCI+PC9kaXY+Jyk7cS50ZXh0KGkuZGF0YShcImNhcHRpb25cIikpLGEoXCJib2R5XCIpLmFwcGVuZChxKSxxLmNzcyh7ZGlzcGxheTpcImlubGluZVwifSkscS52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246ZyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSl9dmFyIHI9MCxzPWwvaix0PW0vayx1PTAsdj0wO3M+dD8ocj1tL2wsdT0uOSpqLHY9LjkqaipyKToocj1sL20sdT0uOSprKnIsdj0uOSprKSxpLmhhc0NsYXNzKFwicmVzcG9uc2l2ZS1pbWdcIik/aS52ZWxvY2l0eSh7XCJtYXgtd2lkdGhcIjp1LHdpZHRoOmx9LHtkdXJhdGlvbjowLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7aS5jc3Moe2xlZnQ6MCx0b3A6MH0pLnZlbG9jaXR5KHtoZWlnaHQ6dix3aWR0aDp1LGxlZnQ6YShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK2ovMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS5sZWZ0LXUvMix0b3A6YShkb2N1bWVudCkuc2Nyb2xsVG9wKCkray8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLnRvcC12LzJ9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtmPSEwfX0pfX0pOmkuY3NzKFwibGVmdFwiLDApLmNzcyhcInRvcFwiLDApLnZlbG9jaXR5KHtoZWlnaHQ6dix3aWR0aDp1LGxlZnQ6YShkb2N1bWVudCkuc2Nyb2xsTGVmdCgpK2ovMi1pLnBhcmVudChcIi5tYXRlcmlhbC1wbGFjZWhvbGRlclwiKS5vZmZzZXQoKS5sZWZ0LXUvMix0b3A6YShkb2N1bWVudCkuc2Nyb2xsVG9wKCkray8yLWkucGFyZW50KFwiLm1hdGVyaWFsLXBsYWNlaG9sZGVyXCIpLm9mZnNldCgpLnRvcC12LzJ9LHtkdXJhdGlvbjpnLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtmPSEwfX0pfSksYSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe2UmJmIoKX0pLGEoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZmPT09ITAmJmUmJmIoKX0pfX0pfSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoXCIubWF0ZXJpYWxib3hlZFwiKS5tYXRlcmlhbGJveCgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7YS5mbi5wYXJhbGxheD1mdW5jdGlvbigpe3ZhciBiPWEod2luZG93KS53aWR0aCgpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChjKXt2YXIgZDtkPWI8NjAxP2UuaGVpZ2h0KCk+MD9lLmhlaWdodCgpOmUuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk6ZS5oZWlnaHQoKT4wP2UuaGVpZ2h0KCk6NTAwO3ZhciBmPWUuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKSxnPWYuaGVpZ2h0KCksaD1nLWQsaT1lLm9mZnNldCgpLnRvcCtkLGo9ZS5vZmZzZXQoKS50b3Asaz1hKHdpbmRvdykuc2Nyb2xsVG9wKCksbD13aW5kb3cuaW5uZXJIZWlnaHQsbT1rK2wsbj0obS1qKS8oZCtsKSxvPU1hdGgucm91bmQoaCpuKTtjJiZmLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpLGk+ayYmajxrK2wmJmYuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUzRCgtNTAlLFwiK28rXCJweCwgMClcIil9dmFyIGU9YSh0aGlzKTtlLmFkZENsYXNzKFwicGFyYWxsYXhcIiksZS5jaGlsZHJlbihcImltZ1wiKS5vbmUoXCJsb2FkXCIsZnVuY3Rpb24oKXtkKCEwKX0pLmVhY2goZnVuY3Rpb24oKXt0aGlzLmNvbXBsZXRlJiZhKHRoaXMpLnRyaWdnZXIoXCJsb2FkXCIpfSksYSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe2I9YSh3aW5kb3cpLndpZHRoKCksZCghMSl9KSxhKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7Yj1hKHdpbmRvdykud2lkdGgoKSxkKCExKX0pfSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtvblNob3c6bnVsbCxzd2lwZWFibGU6ITEscmVzcG9uc2l2ZVRocmVzaG9sZDoxLzB9O2I9YS5leHRlbmQoYyxiKTt2YXIgZD1NYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZyhhKHRoaXMpKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlLGYsZyxoLGksaj1kK2Msaz1hKHRoaXMpLGw9YSh3aW5kb3cpLndpZHRoKCksbT1rLmZpbmQoXCJsaS50YWIgYVwiKSxuPWsud2lkdGgoKSxvPWEoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgscT1wcmV2X2luZGV4PTAscj0hMSxzPTMwMCx0PWZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmNlaWwobi1hLnBvc2l0aW9uKCkubGVmdC1hLm91dGVyV2lkdGgoKS1rLnNjcm9sbExlZnQoKSl9LHU9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGguZmxvb3IoYS5wb3NpdGlvbigpLmxlZnQray5zY3JvbGxMZWZ0KCkpfSx2PWZ1bmN0aW9uKGEpe3EtYT49MD8oaC52ZWxvY2l0eSh7cmlnaHQ6dChlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGgudmVsb2NpdHkoe2xlZnQ6dShlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixkZWxheTo5MH0pKTooaC52ZWxvY2l0eSh7bGVmdDp1KGUpfSx7ZHVyYXRpb246cyxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaC52ZWxvY2l0eSh7cmlnaHQ6dChlKX0se2R1cmF0aW9uOnMscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixkZWxheTo5MH0pKX07Yi5zd2lwZWFibGUmJmw+Yi5yZXNwb25zaXZlVGhyZXNob2xkJiYoYi5zd2lwZWFibGU9ITEpLGU9YShtLmZpbHRlcignW2hyZWY9XCInK2xvY2F0aW9uLmhhc2grJ1wiXScpKSwwPT09ZS5sZW5ndGgmJihlPWEodGhpcykuZmluZChcImxpLnRhYiBhLmFjdGl2ZVwiKS5maXJzdCgpKSwwPT09ZS5sZW5ndGgmJihlPWEodGhpcykuZmluZChcImxpLnRhYiBhXCIpLmZpcnN0KCkpLGUuYWRkQ2xhc3MoXCJhY3RpdmVcIikscT1tLmluZGV4KGUpLHE8MCYmKHE9MCksdm9pZCAwIT09ZVswXSYmKGY9YShlWzBdLmhhc2gpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGsuZmluZChcIi5pbmRpY2F0b3JcIikubGVuZ3RofHxrLmFwcGVuZCgnPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PicpLGg9ay5maW5kKFwiLmluZGljYXRvclwiKSxrLmFwcGVuZChoKSxrLmlzKFwiOnZpc2libGVcIikmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtoLmNzcyh7cmlnaHQ6dChlKX0pLGguY3NzKHtsZWZ0OnUoZSl9KX0sMCksYSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YWJzLVwiK2opLm9uKFwicmVzaXplLnRhYnMtXCIraixmdW5jdGlvbigpe249ay53aWR0aCgpLHA9TWF0aC5tYXgobixrWzBdLnNjcm9sbFdpZHRoKS9tLmxlbmd0aCxxPDAmJihxPTApLDAhPT1wJiYwIT09biYmKGguY3NzKHtyaWdodDp0KGUpfSksaC5jc3Moe2xlZnQ6dShlKX0pKX0pLGIuc3dpcGVhYmxlPyhtLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7Yi5hZGRDbGFzcyhcImNhcm91c2VsLWl0ZW1cIiksbz1vLmFkZChiKX0pLGc9by53cmFwQWxsKCc8ZGl2IGNsYXNzPVwidGFicy1jb250ZW50IGNhcm91c2VsXCI+PC9kaXY+Jyksby5jc3MoXCJkaXNwbGF5XCIsXCJcIiksYShcIi50YWJzLWNvbnRlbnQuY2Fyb3VzZWxcIikuY2Fyb3VzZWwoe2Z1bGxXaWR0aDohMCxub1dyYXA6ITAsb25DeWNsZVRvOmZ1bmN0aW9uKGEpe2lmKCFyKXt2YXIgYj1xO3E9Zy5pbmRleChhKSxlPW0uZXEocSksdihiKX19fSkpOm0ubm90KGUpLmVhY2goZnVuY3Rpb24oKXthKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkuaGlkZSgpfSksay5vZmYoXCJjbGljay50YWJzXCIpLm9uKFwiY2xpY2sudGFic1wiLFwiYVwiLGZ1bmN0aW9uKGMpe2lmKGEodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSlyZXR1cm4gdm9pZCBjLnByZXZlbnREZWZhdWx0KCk7aWYoIWEodGhpcykuYXR0cihcInRhcmdldFwiKSl7cj0hMCxuPWsud2lkdGgoKSxwPU1hdGgubWF4KG4sa1swXS5zY3JvbGxXaWR0aCkvbS5sZW5ndGgsZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgZD1mO2U9YSh0aGlzKSxmPWEoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKSxtPWsuZmluZChcImxpLnRhYiBhXCIpO2UucG9zaXRpb24oKTtlLmFkZENsYXNzKFwiYWN0aXZlXCIpLHByZXZfaW5kZXg9cSxxPW0uaW5kZXgoYSh0aGlzKSkscTwwJiYocT0wKSxiLnN3aXBlYWJsZT9vLmxlbmd0aCYmby5jYXJvdXNlbChcInNldFwiLHEpOih2b2lkIDAhPT1mJiYoZi5zaG93KCksZi5hZGRDbGFzcyhcImFjdGl2ZVwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLm9uU2hvdyYmYi5vblNob3cuY2FsbCh0aGlzLGYpKSx2b2lkIDA9PT1kfHxkLmlzKGYpfHwoZC5oaWRlKCksZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSkpLGk9c2V0VGltZW91dChmdW5jdGlvbigpe3I9ITF9LHMpLHYocHJldl9pbmRleCksYy5wcmV2ZW50RGVmYXVsdCgpfX0pfSl9LHNlbGVjdF90YWI6ZnVuY3Rpb24oYSl7dGhpcy5maW5kKCdhW2hyZWY9XCIjJythKydcIl0nKS50cmlnZ2VyKFwiY2xpY2tcIil9fTthLmZuLnRhYnM9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhYnNcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwidWwudGFic1wiKS50YWJzKCl9KX0oalF1ZXJ5KSxmdW5jdGlvbihhKXthLmZuLnRvb2x0aXA9ZnVuY3Rpb24oYyl7dmFyIGQ9NSxlPXtkZWxheTozNTAsdG9vbHRpcDpcIlwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaHRtbDohMX07cmV0dXJuXCJyZW1vdmVcIj09PWM/KHRoaXMuZWFjaChmdW5jdGlvbigpe2EoXCIjXCIrYSh0aGlzKS5hdHRyKFwiZGF0YS10b29sdGlwLWlkXCIpKS5yZW1vdmUoKSxhKHRoaXMpLm9mZihcIm1vdXNlZW50ZXIudG9vbHRpcCBtb3VzZWxlYXZlLnRvb2x0aXBcIil9KSwhMSk6KGM9YS5leHRlbmQoZSxjKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1NYXRlcmlhbGl6ZS5ndWlkKCksZj1hKHRoaXMpO2YuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiKSYmYShcIiNcIitmLmF0dHIoXCJkYXRhLXRvb2x0aXAtaWRcIikpLnJlbW92ZSgpLGYuYXR0cihcImRhdGEtdG9vbHRpcC1pZFwiLGUpO3ZhciBnLGgsaSxqLGssbCxtPWZ1bmN0aW9uKCl7Zz1mLmF0dHIoXCJkYXRhLWh0bWxcIik/XCJ0cnVlXCI9PT1mLmF0dHIoXCJkYXRhLWh0bWxcIik6Yy5odG1sLGg9Zi5hdHRyKFwiZGF0YS1kZWxheVwiKSxoPXZvaWQgMD09PWh8fFwiXCI9PT1oP2MuZGVsYXk6aCxpPWYuYXR0cihcImRhdGEtcG9zaXRpb25cIiksaT12b2lkIDA9PT1pfHxcIlwiPT09aT9jLnBvc2l0aW9uOmksaj1mLmF0dHIoXCJkYXRhLXRvb2x0aXBcIiksaj12b2lkIDA9PT1qfHxcIlwiPT09aj9jLnRvb2x0aXA6an07bSgpO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGI9YSgnPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRvb2x0aXBcIj48L2Rpdj4nKTtyZXR1cm4gaj1nP2EoXCI8c3Bhbj48L3NwYW4+XCIpLmh0bWwoaik6YShcIjxzcGFuPjwvc3Bhbj5cIikudGV4dChqKSxiLmFwcGVuZChqKS5hcHBlbmRUbyhhKFwiYm9keVwiKSkuYXR0cihcImlkXCIsZSksbD1hKCc8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj4nKSxsLmFwcGVuZFRvKGIpLGJ9O2s9bigpLGYub2ZmKFwibW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcFwiKTt2YXIgbyxwPSExO2Yub24oe1wibW91c2VlbnRlci50b29sdGlwXCI6ZnVuY3Rpb24oYSl7dmFyIGM9ZnVuY3Rpb24oKXttKCkscD0hMCxrLnZlbG9jaXR5KFwic3RvcFwiKSxsLnZlbG9jaXR5KFwic3RvcFwiKSxrLmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIixsZWZ0OlwiMHB4XCIsdG9wOlwiMHB4XCJ9KTt2YXIgYSxjLGUsZz1mLm91dGVyV2lkdGgoKSxoPWYub3V0ZXJIZWlnaHQoKSxqPWsub3V0ZXJIZWlnaHQoKSxuPWsub3V0ZXJXaWR0aCgpLG89XCIwcHhcIixxPVwiMHB4XCIscj1sWzBdLm9mZnNldFdpZHRoLHM9bFswXS5vZmZzZXRIZWlnaHQsdD04LHU9OCx2PTA7XCJ0b3BcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3Atai1kLGM9Zi5vZmZzZXQoKS5sZWZ0K2cvMi1uLzIsZT1iKGMsYSxuLGopLG89XCItMTBweFwiLGwuY3NzKHtib3R0b206MCxsZWZ0OjAsYm9yZGVyUmFkaXVzOlwiMTRweCAxNHB4IDAgMFwiLHRyYW5zZm9ybU9yaWdpbjpcIjUwJSAxMDAlXCIsbWFyZ2luVG9wOmosbWFyZ2luTGVmdDpuLzItci8yfSkpOlwibGVmdFwiPT09aT8oYT1mLm9mZnNldCgpLnRvcCtoLzItai8yLGM9Zi5vZmZzZXQoKS5sZWZ0LW4tZCxlPWIoYyxhLG4saikscT1cIi0xMHB4XCIsbC5jc3Moe3RvcDpcIi03cHhcIixyaWdodDowLHdpZHRoOlwiMTRweFwiLGhlaWdodDpcIjE0cHhcIixib3JkZXJSYWRpdXM6XCIxNHB4IDAgMCAxNHB4XCIsdHJhbnNmb3JtT3JpZ2luOlwiOTUlIDUwJVwiLG1hcmdpblRvcDpqLzIsbWFyZ2luTGVmdDpufSkpOlwicmlnaHRcIj09PWk/KGE9Zi5vZmZzZXQoKS50b3AraC8yLWovMixjPWYub2Zmc2V0KCkubGVmdCtnK2QsZT1iKGMsYSxuLGopLHE9XCIrMTBweFwiLGwuY3NzKHt0b3A6XCItN3B4XCIsbGVmdDowLHdpZHRoOlwiMTRweFwiLGhlaWdodDpcIjE0cHhcIixib3JkZXJSYWRpdXM6XCIwIDE0cHggMTRweCAwXCIsdHJhbnNmb3JtT3JpZ2luOlwiNSUgNTAlXCIsbWFyZ2luVG9wOmovMixtYXJnaW5MZWZ0OlwiMHB4XCJ9KSk6KGE9Zi5vZmZzZXQoKS50b3ArZi5vdXRlckhlaWdodCgpK2QsYz1mLm9mZnNldCgpLmxlZnQrZy8yLW4vMixlPWIoYyxhLG4saiksbz1cIisxMHB4XCIsbC5jc3Moe3RvcDowLGxlZnQ6MCxtYXJnaW5MZWZ0Om4vMi1yLzJ9KSksay5jc3Moe3RvcDplLnksbGVmdDplLnh9KSx0PU1hdGguU1FSVDIqbi9wYXJzZUludChyKSx1PU1hdGguU1FSVDIqai9wYXJzZUludChzKSx2PU1hdGgubWF4KHQsdSksay52ZWxvY2l0eSh7dHJhbnNsYXRlWTpvLHRyYW5zbGF0ZVg6cX0se2R1cmF0aW9uOjM1MCxxdWV1ZTohMX0pLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjozMDAsZGVsYXk6NTAscXVldWU6ITF9KSxsLmNzcyh7dmlzaWJpbGl0eTpcInZpc2libGVcIn0pLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo1NSxkZWxheTowLHF1ZXVlOiExfSkudmVsb2NpdHkoe3NjYWxlWDp2LHNjYWxlWTp2fSx7ZHVyYXRpb246MzAwLGRlbGF5OjAscXVldWU6ITEsZWFzaW5nOlwiZWFzZUluT3V0UXVhZFwifSl9O289c2V0VGltZW91dChjLGgpfSxcIm1vdXNlbGVhdmUudG9vbHRpcFwiOmZ1bmN0aW9uKCl7cD0hMSxjbGVhclRpbWVvdXQobyksc2V0VGltZW91dChmdW5jdGlvbigpe3AhPT0hMCYmKGsudmVsb2NpdHkoe29wYWNpdHk6MCx0cmFuc2xhdGVZOjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExfSksbC52ZWxvY2l0eSh7b3BhY2l0eTowLHNjYWxlWDoxLHNjYWxlWToxfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7bC5jc3Moe3Zpc2liaWxpdHk6XCJoaWRkZW5cIn0pLGsuY3NzKHt2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxwPSExfX0pKX0sMjI1KX19KX0pKX07dmFyIGI9ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGY9YixnPWM7cmV0dXJuIGY8MD9mPTQ6ZitkPndpbmRvdy5pbm5lcldpZHRoJiYoZi09ZitkLXdpbmRvdy5pbm5lcldpZHRoKSxnPDA/Zz00OmcrZT53aW5kb3cuaW5uZXJIZWlnaHQrYSh3aW5kb3cpLnNjcm9sbFRvcCYmKGctPWcrZS13aW5kb3cuaW5uZXJIZWlnaHQpLHt4OmYseTpnfX07YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiLnRvb2x0aXBwZWRcIikudG9vbHRpcCgpfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhKXtyZXR1cm4gbnVsbCE9PWEmJmE9PT1hLndpbmRvd31mdW5jdGlvbiBjKGEpe3JldHVybiBiKGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9ZnVuY3Rpb24gZChhKXt2YXIgYixkLGU9e3RvcDowLGxlZnQ6MH0sZj1hJiZhLm93bmVyRG9jdW1lbnQ7cmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0JiYoZT1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxkPWMoZikse3RvcDplLnRvcCtkLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2QucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fX1mdW5jdGlvbiBlKGEpe3ZhciBiPVwiXCI7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGIrPWMrXCI6XCIrYVtjXStcIjtcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gZihhKXtpZihrLmFsbG93RXZlbnQoYSk9PT0hMSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9bnVsbCxjPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQ7bnVsbCE9PWMucGFyZW50RWxlbWVudDspe2lmKCEoYyBpbnN0YW5jZW9mIFNWR0VsZW1lbnR8fGMuY2xhc3NOYW1lLmluZGV4T2YoXCJ3YXZlcy1lZmZlY3RcIik9PT0tMSkpe2I9YzticmVha31pZihjLmNsYXNzTGlzdC5jb250YWlucyhcIndhdmVzLWVmZmVjdFwiKSl7Yj1jO2JyZWFrfWM9Yy5wYXJlbnRFbGVtZW50fXJldHVybiBifWZ1bmN0aW9uIGcoYil7dmFyIGM9ZihiKTtudWxsIT09YyYmKGouc2hvdyhiLGMpLFwib250b3VjaHN0YXJ0XCJpbiBhJiYoYy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixqLmhpZGUsITEpLGMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsai5oaWRlLCExKSksYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGouaGlkZSwhMSksYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGouaGlkZSwhMSkpfXZhciBoPWh8fHt9LGk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KSxqPXtkdXJhdGlvbjo3NTAsc2hvdzpmdW5jdGlvbihhLGIpe2lmKDI9PT1hLmJ1dHRvbilyZXR1cm4hMTt2YXIgYz1ifHx0aGlzLGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmLmNsYXNzTmFtZT1cIndhdmVzLXJpcHBsZVwiLGMuYXBwZW5kQ2hpbGQoZik7dmFyIGc9ZChjKSxoPWEucGFnZVktZy50b3AsaT1hLnBhZ2VYLWcubGVmdCxrPVwic2NhbGUoXCIrYy5jbGllbnRXaWR0aC8xMDAqMTArXCIpXCI7XCJ0b3VjaGVzXCJpbiBhJiYoaD1hLnRvdWNoZXNbMF0ucGFnZVktZy50b3AsaT1hLnRvdWNoZXNbMF0ucGFnZVgtZy5sZWZ0KSxmLnNldEF0dHJpYnV0ZShcImRhdGEtaG9sZFwiLERhdGUubm93KCkpLGYuc2V0QXR0cmlidXRlKFwiZGF0YS1zY2FsZVwiLGspLGYuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsaSksZi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIixoKTt2YXIgbD17dG9wOmgrXCJweFwiLGxlZnQ6aStcInB4XCJ9O2YuY2xhc3NOYW1lPWYuY2xhc3NOYW1lK1wiIHdhdmVzLW5vdHJhbnNpdGlvblwiLGYuc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGwpKSxmLmNsYXNzTmFtZT1mLmNsYXNzTmFtZS5yZXBsYWNlKFwid2F2ZXMtbm90cmFuc2l0aW9uXCIsXCJcIiksbFtcIi13ZWJraXQtdHJhbnNmb3JtXCJdPWssbFtcIi1tb3otdHJhbnNmb3JtXCJdPWssbFtcIi1tcy10cmFuc2Zvcm1cIl09ayxsW1wiLW8tdHJhbnNmb3JtXCJdPWssbC50cmFuc2Zvcm09ayxsLm9wYWNpdHk9XCIxXCIsbFtcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiXT1qLmR1cmF0aW9uK1wibXNcIixsW1wiLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItby10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWouZHVyYXRpb24rXCJtc1wiLGxbXCItd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCItbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCItby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixsW1widHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsZi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUobCkpfSxoaWRlOmZ1bmN0aW9uKGEpe2sudG91Y2h1cChhKTt2YXIgYj10aGlzLGM9KDEuNCpiLmNsaWVudFdpZHRoLG51bGwpLGQ9Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2F2ZXMtcmlwcGxlXCIpO2lmKCEoZC5sZW5ndGg+MCkpcmV0dXJuITE7Yz1kW2QubGVuZ3RoLTFdO3ZhciBmPWMuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpLGc9Yy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiksaD1jLmdldEF0dHJpYnV0ZShcImRhdGEtc2NhbGVcIiksaT1EYXRlLm5vdygpLU51bWJlcihjLmdldEF0dHJpYnV0ZShcImRhdGEtaG9sZFwiKSksbD0zNTAtaTtsPDAmJihsPTApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT17dG9wOmcrXCJweFwiLGxlZnQ6ZitcInB4XCIsb3BhY2l0eTpcIjBcIixcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiOmouZHVyYXRpb24rXCJtc1wiLFwiLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItby10cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6ai5kdXJhdGlvbitcIm1zXCIsXCItd2Via2l0LXRyYW5zZm9ybVwiOmgsXCItbW96LXRyYW5zZm9ybVwiOmgsXCItbXMtdHJhbnNmb3JtXCI6aCxcIi1vLXRyYW5zZm9ybVwiOmgsdHJhbnNmb3JtOmh9O2Muc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKGEpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dHJ5e2IucmVtb3ZlQ2hpbGQoYyl9Y2F0Y2goYSl7cmV0dXJuITF9fSxqLmR1cmF0aW9uKX0sbCl9LHdyYXBJbnB1dDpmdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihcImlucHV0XCI9PT1jLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGQ9Yy5wYXJlbnROb2RlO2lmKFwiaVwiPT09ZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJmQuY2xhc3NOYW1lLmluZGV4T2YoXCJ3YXZlcy1lZmZlY3RcIikhPT0tMSljb250aW51ZTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtlLmNsYXNzTmFtZT1jLmNsYXNzTmFtZStcIiB3YXZlcy1pbnB1dC13cmFwcGVyXCI7dmFyIGY9Yy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtmfHwoZj1cIlwiKSxlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsZiksYy5jbGFzc05hbWU9XCJ3YXZlcy1idXR0b24taW5wdXRcIixjLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpLGQucmVwbGFjZUNoaWxkKGUsYyksZS5hcHBlbmRDaGlsZChjKX19fX0saz17dG91Y2hlczowLGFsbG93RXZlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9ITA7cmV0dXJuXCJ0b3VjaHN0YXJ0XCI9PT1hLnR5cGU/ay50b3VjaGVzKz0xOlwidG91Y2hlbmRcIj09PWEudHlwZXx8XCJ0b3VjaGNhbmNlbFwiPT09YS50eXBlP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnRvdWNoZXM+MCYmKGsudG91Y2hlcy09MSl9LDUwMCk6XCJtb3VzZWRvd25cIj09PWEudHlwZSYmay50b3VjaGVzPjAmJihiPSExKSxifSx0b3VjaHVwOmZ1bmN0aW9uKGEpe2suYWxsb3dFdmVudChhKX19O2guZGlzcGxheUVmZmVjdD1mdW5jdGlvbihiKXtiPWJ8fHt9LFwiZHVyYXRpb25cImluIGImJihqLmR1cmF0aW9uPWIuZHVyYXRpb24pLGoud3JhcElucHV0KGkoXCIud2F2ZXMtZWZmZWN0XCIpKSxcIm9udG91Y2hzdGFydFwiaW4gYSYmZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpLGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGcsITEpfSxoLmF0dGFjaD1mdW5jdGlvbihiKXtcImlucHV0XCI9PT1iLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmKGoud3JhcElucHV0KFtiXSksYj1iLnBhcmVudEVsZW1lbnQpLFwib250b3VjaHN0YXJ0XCJpbiBhJiZiLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZywhMSksYi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZywhMSl9LGEuV2F2ZXM9aCxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7aC5kaXNwbGF5RWZmZWN0KCl9LCExKX0od2luZG93KSxNYXRlcmlhbGl6ZS50b2FzdD1mdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoYi5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIiksYylmb3IodmFyIGU9Yy5zcGxpdChcIiBcIiksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKyliLmNsYXNzTGlzdC5hZGQoZVtmXSk7KFwib2JqZWN0XCI9PXR5cGVvZiBIVE1MRWxlbWVudD9hIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ6YSYmXCJvYmplY3RcIj09dHlwZW9mIGEmJm51bGwhPT1hJiYxPT09YS5ub2RlVHlwZSYmXCJzdHJpbmdcIj09dHlwZW9mIGEubm9kZU5hbWUpP2IuYXBwZW5kQ2hpbGQoYSk6YSBpbnN0YW5jZW9mIGpRdWVyeT9iLmFwcGVuZENoaWxkKGFbMF0pOmIuaW5uZXJIVE1MPWE7dmFyIGg9bmV3IEhhbW1lcihiLHtwcmV2ZW50X2RlZmF1bHQ6ITF9KTtyZXR1cm4gaC5vbihcInBhblwiLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZGVsdGFYLGQ9ODA7Yi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5uaW5nXCIpfHxiLmNsYXNzTGlzdC5hZGQoXCJwYW5uaW5nXCIpO3ZhciBlPTEtTWF0aC5hYnMoYy9kKTtlPDAmJihlPTApLFZlbChiLHtsZWZ0OmMsb3BhY2l0eTplfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pfSksaC5vbihcInBhbmVuZFwiLGZ1bmN0aW9uKGEpe3ZhciBjPWEuZGVsdGFYLGU9ODA7TWF0aC5hYnMoYyk+ZT9WZWwoYix7bWFyZ2luVG9wOlwiLTQwcHhcIn0se2R1cmF0aW9uOjM3NSxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExLGNvbXBsZXRlOmZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZCgpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX19KTooYi5jbGFzc0xpc3QucmVtb3ZlKFwicGFubmluZ1wiKSxWZWwoYix7bGVmdDowLG9wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxlYXNpbmc6XCJlYXNlT3V0RXhwb1wiLHF1ZXVlOiExfSkpfSksYn1jPWN8fFwiXCI7dmFyIGY9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2FzdC1jb250YWluZXJcIik7bnVsbD09PWYmJihmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZi5pZD1cInRvYXN0LWNvbnRhaW5lclwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZikpO3ZhciBnPWUoYSk7YSYmZi5hcHBlbmRDaGlsZChnKSxnLnN0eWxlLm9wYWNpdHk9MCxWZWwoZyx7dHJhbnNsYXRlWTpcIi0zNXB4XCIsb3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRDdWJpY1wiLHF1ZXVlOiExfSk7dmFyIGgsaT1iO251bGwhPWkmJihoPXNldEludGVydmFsKGZ1bmN0aW9uKCl7bnVsbD09PWcucGFyZW50Tm9kZSYmd2luZG93LmNsZWFySW50ZXJ2YWwoaCksZy5jbGFzc0xpc3QuY29udGFpbnMoXCJwYW5uaW5nXCIpfHwoaS09MjApLGk8PTAmJihWZWwoZyx7b3BhY2l0eTowLG1hcmdpblRvcDpcIi00MHB4XCJ9LHtkdXJhdGlvbjozNzUsZWFzaW5nOlwiZWFzZU91dEV4cG9cIixxdWV1ZTohMSxjb21wbGV0ZTpmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmQoKSx0aGlzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1swXSl9fSksd2luZG93LmNsZWFySW50ZXJ2YWwoaCkpfSwyMCkpfSxmdW5jdGlvbihhKXt2YXIgYj17aW5pdDpmdW5jdGlvbihiKXt2YXIgYz17bWVudVdpZHRoOjMwMCxlZGdlOlwibGVmdFwiLGNsb3NlT25DbGljazohMSxkcmFnZ2FibGU6ITB9O2I9YS5leHRlbmQoYyxiKSxhKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIiksZT1hKFwiI1wiK2QpOzMwMCE9Yi5tZW51V2lkdGgmJmUuY3NzKFwid2lkdGhcIixiLm1lbnVXaWR0aCk7dmFyIGY9YSgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicrZCsnXCJdJyk7Yi5kcmFnZ2FibGU/KGYubGVuZ3RoJiZmLnJlbW92ZSgpLGY9YSgnPGRpdiBjbGFzcz1cImRyYWctdGFyZ2V0XCI+PC9kaXY+JykuYXR0cihcImRhdGEtc2lkZW5hdlwiLGQpLGEoXCJib2R5XCIpLmFwcGVuZChmKSk6Zj1hKCksXCJsZWZ0XCI9PWIuZWRnZT8oZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoLTEwMCUpXCIpLGYuY3NzKHtsZWZ0OjB9KSk6KGUuYWRkQ2xhc3MoXCJyaWdodC1hbGlnbmVkXCIpLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgxMDAlKVwiKSxmLmNzcyh7cmlnaHQ6MH0pKSxlLmhhc0NsYXNzKFwiZml4ZWRcIikmJndpbmRvdy5pbm5lcldpZHRoPjk5MiYmZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMClcIiksZS5oYXNDbGFzcyhcImZpeGVkXCIpJiZhKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7d2luZG93LmlubmVyV2lkdGg+OTkyPzAhPT1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS5sZW5ndGgmJmk/ZyghMCk6ZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoMCUpXCIpOmk9PT0hMSYmKFwibGVmdFwiPT09Yi5lZGdlP2UuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKC0xMDAlKVwiKTplLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWCgxMDAlKVwiKSl9KSxiLmNsb3NlT25DbGljaz09PSEwJiZlLm9uKFwiY2xpY2suaXRlbWNsaWNrXCIsXCJhOm5vdCguY29sbGFwc2libGUtaGVhZGVyKVwiLGZ1bmN0aW9uKCl7ZygpfSk7dmFyIGc9ZnVuY3Rpb24oYyl7aD0hMSxpPSExLGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksYShcIiNzaWRlbmF2LW92ZXJsYXlcIikudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxcImxlZnRcIj09PWIuZWRnZT8oZi5jc3Moe3dpZHRoOlwiXCIscmlnaHQ6XCJcIixsZWZ0OlwiMFwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpcIi0xMDAlXCJ9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtjPT09ITAmJihlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpKX19KSk6KGYuY3NzKHt3aWR0aDpcIlwiLHJpZ2h0OlwiMFwiLGxlZnQ6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6XCIxMDAlXCJ9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtjPT09ITAmJihlLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxlLmNzcyhcIndpZHRoXCIsYi5tZW51V2lkdGgpKX19KSl9LGg9ITEsaT0hMTtiLmRyYWdnYWJsZSYmKGYub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7aSYmZygpfSksZi5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihjKXtpZihcInRvdWNoXCI9PWMuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGQ9KGMuZ2VzdHVyZS5kaXJlY3Rpb24sYy5nZXN0dXJlLmNlbnRlci54KSxmPShjLmdlc3R1cmUuY2VudGVyLnksYy5nZXN0dXJlLnZlbG9jaXR5WCxhKFwiYm9keVwiKSksaD1hKFwiI3NpZGVuYXYtb3ZlcmxheVwiKSxqPWYuaW5uZXJXaWR0aCgpO2lmKGYuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKSxmLndpZHRoKGopLDA9PT1oLmxlbmd0aCYmKGg9YSgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpLGguY3NzKFwib3BhY2l0eVwiLDApLmNsaWNrKGZ1bmN0aW9uKCl7ZygpfSksYShcImJvZHlcIikuYXBwZW5kKGgpKSxcImxlZnRcIj09PWIuZWRnZSYmKGQ+Yi5tZW51V2lkdGg/ZD1iLm1lbnVXaWR0aDpkPDAmJihkPTApKSxcImxlZnRcIj09PWIuZWRnZSlkPGIubWVudVdpZHRoLzI/aT0hMTpkPj1iLm1lbnVXaWR0aC8yJiYoaT0hMCksZS5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVgoXCIrKGQtYi5tZW51V2lkdGgpK1wicHgpXCIpO2Vsc2V7ZDx3aW5kb3cuaW5uZXJXaWR0aC1iLm1lbnVXaWR0aC8yP2k9ITA6ZD49d2luZG93LmlubmVyV2lkdGgtYi5tZW51V2lkdGgvMiYmKGk9ITEpO3ZhciBrPWQtYi5tZW51V2lkdGgvMjtrPDAmJihrPTApLGUuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKFwiK2srXCJweClcIil9dmFyIGw7XCJsZWZ0XCI9PT1iLmVkZ2U/KGw9ZC9iLm1lbnVXaWR0aCxoLnZlbG9jaXR5KHtvcGFjaXR5Omx9LHtkdXJhdGlvbjoxMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpOihsPU1hdGguYWJzKChkLXdpbmRvdy5pbm5lcldpZHRoKS9iLm1lbnVXaWR0aCksaC52ZWxvY2l0eSh7b3BhY2l0eTpsfSx7ZHVyYXRpb246MTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKX19KS5iaW5kKFwicGFuZW5kXCIsZnVuY3Rpb24oYyl7aWYoXCJ0b3VjaFwiPT1jLmdlc3R1cmUucG9pbnRlclR5cGUpe3ZhciBkPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGc9Yy5nZXN0dXJlLnZlbG9jaXR5WCxqPWMuZ2VzdHVyZS5jZW50ZXIueCxrPWotYi5tZW51V2lkdGgsbD1qLWIubWVudVdpZHRoLzI7az4wJiYoaz0wKSxsPDAmJihsPTApLGg9ITEsXCJsZWZ0XCI9PT1iLmVkZ2U/aSYmZzw9LjN8fGc8LS41PygwIT09ayYmZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxrXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OjAsbGVmdDpcIlwifSksaT0hMCk6KCFpfHxnPi4zKSYmKGEoXCJib2R5XCIpLmNzcyh7b3ZlcmZsb3c6XCJcIix3aWR0aDpcIlwifSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbLTEqYi5tZW51V2lkdGgtMTAsa119LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGQudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOjIwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7YSh0aGlzKS5yZW1vdmUoKX19KSxmLmNzcyh7d2lkdGg6XCIxMHB4XCIscmlnaHQ6XCJcIixsZWZ0OjB9KSk6aSYmZz49LS4zfHxnPi41PygwIT09bCYmZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxsXX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksZC52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OlwiXCIsbGVmdDowfSksaT0hMCk6KCFpfHxnPC0uMykmJihhKFwiYm9keVwiKS5jc3Moe292ZXJmbG93OlwiXCIsd2lkdGg6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6W2IubWVudVdpZHRoKzEwLGxdfSx7ZHVyYXRpb246MjAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSxkLnZlbG9jaXR5KHtvcGFjaXR5OjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykucmVtb3ZlKCl9fSksZi5jc3Moe3dpZHRoOlwiMTBweFwiLHJpZ2h0OjAsbGVmdDpcIlwifSkpfX0pKSxjLm9mZihcImNsaWNrLnNpZGVuYXZcIikub24oXCJjbGljay5zaWRlbmF2XCIsZnVuY3Rpb24oKXtpZihpPT09ITApaT0hMSxoPSExLGcoKTtlbHNle3ZhciBjPWEoXCJib2R5XCIpLGQ9YSgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpLGo9Yy5pbm5lcldpZHRoKCk7Yy5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpLGMud2lkdGgoaiksYShcImJvZHlcIikuYXBwZW5kKGYpLFwibGVmdFwiPT09Yi5lZGdlPyhmLmNzcyh7d2lkdGg6XCI1MCVcIixyaWdodDowLGxlZnQ6XCJcIn0pLGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6WzAsLTEqYi5tZW51V2lkdGhdfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSk6KGYuY3NzKHt3aWR0aDpcIjUwJVwiLHJpZ2h0OlwiXCIsbGVmdDowfSksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpbMCxiLm1lbnVXaWR0aF19LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pKSxkLmNzcyhcIm9wYWNpdHlcIiwwKS5jbGljayhmdW5jdGlvbigpe2k9ITEsaD0hMSxnKCksZC52ZWxvY2l0eSh7b3BhY2l0eTowfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLnJlbW92ZSgpfX0pfSksYShcImJvZHlcIikuYXBwZW5kKGQpLGQudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7aT0hMCxoPSExfX0pfXJldHVybiExfSl9KX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBiPWEoXCIjc2lkZW5hdi1vdmVybGF5XCIpLGM9YSgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicrYSh0aGlzKS5hdHRyKFwiZGF0YS1hY3RpdmF0ZXNcIikrJ1wiXScpO2IudHJpZ2dlcihcImNsaWNrXCIpLGMucmVtb3ZlKCksYSh0aGlzKS5vZmYoXCJjbGlja1wiKSxiLnJlbW92ZSgpfSxzaG93OmZ1bmN0aW9uKCl7dGhpcy50cmlnZ2VyKFwiY2xpY2tcIil9LGhpZGU6ZnVuY3Rpb24oKXthKFwiI3NpZGVuYXYtb3ZlcmxheVwiKS50cmlnZ2VyKFwiY2xpY2tcIil9fTthLmZuLnNpZGVOYXY9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXZcIik6Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiLGMsZCxlKXt2YXIgZz1hKCk7cmV0dXJuIGEuZWFjaChmLGZ1bmN0aW9uKGEsZil7aWYoZi5oZWlnaHQoKT4wKXt2YXIgaD1mLm9mZnNldCgpLnRvcCxpPWYub2Zmc2V0KCkubGVmdCxqPWkrZi53aWR0aCgpLGs9aCtmLmhlaWdodCgpLGw9IShpPmN8fGo8ZXx8aD5kfHxrPGIpO2wmJmcucHVzaChmKX19KSxnfWZ1bmN0aW9uIGMoYyl7KytpO3ZhciBkPWUuc2Nyb2xsVG9wKCksZj1lLnNjcm9sbExlZnQoKSxoPWYrZS53aWR0aCgpLGs9ZCtlLmhlaWdodCgpLGw9YihkK2oudG9wK2N8fDIwMCxoK2oucmlnaHQsaytqLmJvdHRvbSxmK2oubGVmdCk7YS5lYWNoKGwsZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmRhdGEoXCJzY3JvbGxTcHk6dGlja3NcIik7XCJudW1iZXJcIiE9dHlwZW9mIGMmJmIudHJpZ2dlckhhbmRsZXIoXCJzY3JvbGxTcHk6ZW50ZXJcIiksYi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIsaSl9KSxhLmVhY2goZyxmdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcInNjcm9sbFNweTp0aWNrc1wiKTtcIm51bWJlclwiPT10eXBlb2YgYyYmYyE9PWkmJihiLnRyaWdnZXJIYW5kbGVyKFwic2Nyb2xsU3B5OmV4aXRcIiksYi5kYXRhKFwic2Nyb2xsU3B5OnRpY2tzXCIsbnVsbCkpfSksZz1sfWZ1bmN0aW9uIGQoKXtlLnRyaWdnZXIoXCJzY3JvbGxTcHk6d2luU2l6ZVwiKX12YXIgZT1hKHdpbmRvdyksZj1bXSxnPVtdLGg9ITEsaT0wLGo9e3RvcDowLHJpZ2h0OjAsYm90dG9tOjAsbGVmdDowfTthLnNjcm9sbFNweT1mdW5jdGlvbihiLGQpe3ZhciBnPXt0aHJvdHRsZToxMDAsc2Nyb2xsT2Zmc2V0OjIwMH07ZD1hLmV4dGVuZChnLGQpO3ZhciBpPVtdO2I9YShiKSxiLmVhY2goZnVuY3Rpb24oYixjKXtmLnB1c2goYShjKSksYShjKS5kYXRhKFwic2Nyb2xsU3B5OmlkXCIsYiksYSgnYVtocmVmPVwiIycrYShjKS5hdHRyKFwiaWRcIikrJ1wiXScpLmNsaWNrKGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKTt2YXIgYz1hKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkub2Zmc2V0KCkudG9wKzE7YShcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOmMtZC5zY3JvbGxPZmZzZXR9LHtkdXJhdGlvbjo0MDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dEN1YmljXCJ9KX0pfSksai50b3A9ZC5vZmZzZXRUb3B8fDAsai5yaWdodD1kLm9mZnNldFJpZ2h0fHwwLGouYm90dG9tPWQub2Zmc2V0Qm90dG9tfHwwLGoubGVmdD1kLm9mZnNldExlZnR8fDA7dmFyIGs9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtjKGQuc2Nyb2xsT2Zmc2V0KX0sZC50aHJvdHRsZXx8MTAwKSxsPWZ1bmN0aW9uKCl7YShkb2N1bWVudCkucmVhZHkoayl9O3JldHVybiBofHwoZS5vbihcInNjcm9sbFwiLGwpLGUub24oXCJyZXNpemVcIixsKSxoPSEwKSxzZXRUaW1lb3V0KGwsMCksYi5vbihcInNjcm9sbFNweTplbnRlclwiLGZ1bmN0aW9uKCl7aT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gMCE9YS5oZWlnaHQoKX0pO3ZhciBiPWEodGhpcyk7aVswXT8oYSgnYVtocmVmPVwiIycraVswXS5hdHRyKFwiaWRcIikrJ1wiXScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGIuZGF0YShcInNjcm9sbFNweTppZFwiKTxpWzBdLmRhdGEoXCJzY3JvbGxTcHk6aWRcIik/aS51bnNoaWZ0KGEodGhpcykpOmkucHVzaChhKHRoaXMpKSk6aS5wdXNoKGEodGhpcykpLGEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX0pLGIub24oXCJzY3JvbGxTcHk6ZXhpdFwiLGZ1bmN0aW9uKCl7aWYoaT1hLmdyZXAoaSxmdW5jdGlvbihhKXtyZXR1cm4gMCE9YS5oZWlnaHQoKX0pLGlbMF0pe2EoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgYj1hKHRoaXMpO2k9YS5ncmVwKGksZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXR0cihcImlkXCIpIT1iLmF0dHIoXCJpZFwiKX0pLGlbMF0mJmEoJ2FbaHJlZj1cIiMnK2lbMF0uYXR0cihcImlkXCIpKydcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKX19KSxifSxhLndpblNpemVTcHk9ZnVuY3Rpb24oYil7cmV0dXJuIGEud2luU2l6ZVNweT1mdW5jdGlvbigpe3JldHVybiBlfSxiPWJ8fHt0aHJvdHRsZToxMDB9LGUub24oXCJyZXNpemVcIixNYXRlcmlhbGl6ZS50aHJvdHRsZShkLGIudGhyb3R0bGV8fDEwMCkpfSxhLmZuLnNjcm9sbFNweT1mdW5jdGlvbihiKXtyZXR1cm4gYS5zY3JvbGxTcHkoYSh0aGlzKSxiKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPWIuY3NzKFwiZm9udC1mYW1pbHlcIiksZD1iLmNzcyhcImZvbnQtc2l6ZVwiKSxmPWIuY3NzKFwibGluZS1oZWlnaHRcIik7ZCYmZS5jc3MoXCJmb250LXNpemVcIixkKSxjJiZlLmNzcyhcImZvbnQtZmFtaWx5XCIsYyksZiYmZS5jc3MoXCJsaW5lLWhlaWdodFwiLGYpLFwib2ZmXCI9PT1iLmF0dHIoXCJ3cmFwXCIpJiZlLmNzcyhcIm92ZXJmbG93LXdyYXBcIixcIm5vcm1hbFwiKS5jc3MoXCJ3aGl0ZS1zcGFjZVwiLFwicHJlXCIpLGUudGV4dChiLnZhbCgpK1wiXFxuXCIpO3ZhciBnPWUuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLFwiPGJyPlwiKTtlLmh0bWwoZyksYi5pcyhcIjp2aXNpYmxlXCIpP2UuY3NzKFwid2lkdGhcIixiLndpZHRoKCkpOmUuY3NzKFwid2lkdGhcIixhKHdpbmRvdykud2lkdGgoKS8yKSxiLmRhdGEoXCJvcmlnaW5hbC1oZWlnaHRcIik8PWUuaGVpZ2h0KCk/Yi5jc3MoXCJoZWlnaHRcIixlLmhlaWdodCgpKTpiLnZhbCgpLmxlbmd0aDxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIikmJmIuY3NzKFwiaGVpZ2h0XCIsYi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIpKSxiLmRhdGEoXCJwcmV2aW91cy1sZW5ndGhcIixiLnZhbCgpLmxlbmd0aCl9TWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcz1mdW5jdGlvbigpe3ZhciBiPVwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhXCI7YShiKS5lYWNoKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YSh0aGlzKTthKGMpLnZhbCgpLmxlbmd0aD4wfHxjLmF1dG9mb2N1c3x8dm9pZCAwIT09ZC5hdHRyKFwicGxhY2Vob2xkZXJcIik/ZC5zaWJsaW5ncyhcImxhYmVsXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpOmEoYylbMF0udmFsaWRpdHk/ZC5zaWJsaW5ncyhcImxhYmVsXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsYShjKVswXS52YWxpZGl0eS5iYWRJbnB1dD09PSEwKTpkLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KX07dmFyIGM9XCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWFcIjthKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLGMsZnVuY3Rpb24oKXswPT09YSh0aGlzKS52YWwoKS5sZW5ndGgmJnZvaWQgMD09PWEodGhpcykuYXR0cihcInBsYWNlaG9sZGVyXCIpfHxhKHRoaXMpLnNpYmxpbmdzKFwibGFiZWxcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdmFsaWRhdGVfZmllbGQoYSh0aGlzKSl9KSxhKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe01hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMoKX0pLGEoZG9jdW1lbnQpLm9uKFwicmVzZXRcIixmdW5jdGlvbihiKXt2YXIgZD1hKGIudGFyZ2V0KTtkLmlzKFwiZm9ybVwiKSYmKGQuZmluZChjKS5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSxkLmZpbmQoYykuZWFjaChmdW5jdGlvbigpe1wiXCI9PT1hKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKSYmYSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksZC5maW5kKFwic2VsZWN0LmluaXRpYWxpemVkXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYT1kLmZpbmQoXCJvcHRpb25bc2VsZWN0ZWRdXCIpLnRleHQoKTtkLnNpYmxpbmdzKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnZhbChhKX0pKX0pLGEoZG9jdW1lbnQpLm9uKFwiZm9jdXNcIixjLGZ1bmN0aW9uKCl7YSh0aGlzKS5zaWJsaW5ncyhcImxhYmVsLCAucHJlZml4XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSksYShkb2N1bWVudCkub24oXCJibHVyXCIsYyxmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1cIi5wcmVmaXhcIjswPT09Yi52YWwoKS5sZW5ndGgmJmJbMF0udmFsaWRpdHkuYmFkSW5wdXQhPT0hMCYmdm9pZCAwPT09Yi5hdHRyKFwicGxhY2Vob2xkZXJcIikmJihjKz1cIiwgbGFiZWxcIiksYi5zaWJsaW5ncyhjKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx2YWxpZGF0ZV9maWVsZChiKX0pLHdpbmRvdy52YWxpZGF0ZV9maWVsZD1mdW5jdGlvbihhKXt2YXIgYj12b2lkIDAhPT1hLmF0dHIoXCJkYXRhLWxlbmd0aFwiKSxjPXBhcnNlSW50KGEuYXR0cihcImRhdGEtbGVuZ3RoXCIpKSxkPWEudmFsKCkubGVuZ3RoOzA9PT1hLnZhbCgpLmxlbmd0aCYmYVswXS52YWxpZGl0eS5iYWRJbnB1dD09PSExP2EuaGFzQ2xhc3MoXCJ2YWxpZGF0ZVwiKSYmKGEucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxhLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKSk6YS5oYXNDbGFzcyhcInZhbGlkYXRlXCIpJiYoYS5pcyhcIjp2YWxpZFwiKSYmYiYmZDw9Y3x8YS5pcyhcIjp2YWxpZFwiKSYmIWI/KGEucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpLGEuYWRkQ2xhc3MoXCJ2YWxpZFwiKSk6KGEucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKSxhLmFkZENsYXNzKFwiaW52YWxpZFwiKSkpfTt2YXIgZD1cImlucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XVwiO2EoZG9jdW1lbnQpLm9uKFwia2V5dXAucmFkaW9cIixkLGZ1bmN0aW9uKGIpe2lmKDk9PT1iLndoaWNoKXthKHRoaXMpLmFkZENsYXNzKFwidGFiYmVkXCIpO3ZhciBjPWEodGhpcyk7cmV0dXJuIHZvaWQgYy5vbmUoXCJibHVyXCIsZnVuY3Rpb24oYil7YSh0aGlzKS5yZW1vdmVDbGFzcyhcInRhYmJlZFwiKX0pfX0pO3ZhciBlPWEoXCIuaGlkZGVuZGl2XCIpLmZpcnN0KCk7ZS5sZW5ndGh8fChlPWEoJzxkaXYgY2xhc3M9XCJoaWRkZW5kaXYgY29tbW9uXCI+PC9kaXY+JyksYShcImJvZHlcIikuYXBwZW5kKGUpKTt2YXIgZj1cIi5tYXRlcmlhbGl6ZS10ZXh0YXJlYVwiO2EoZikuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yi5kYXRhKFwib3JpZ2luYWwtaGVpZ2h0XCIsYi5oZWlnaHQoKSksYi5kYXRhKFwicHJldmlvdXMtbGVuZ3RoXCIsYi52YWwoKS5sZW5ndGgpfSksYShcImJvZHlcIikub24oXCJrZXl1cCBrZXlkb3duIGF1dG9yZXNpemVcIixmLGZ1bmN0aW9uKCl7YihhKHRoaXMpKX0pLGEoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJyxmdW5jdGlvbigpe2Zvcih2YXIgYj1hKHRoaXMpLmNsb3Nlc3QoXCIuZmlsZS1maWVsZFwiKSxjPWIuZmluZChcImlucHV0LmZpbGUtcGF0aFwiKSxkPWEodGhpcylbMF0uZmlsZXMsZT1bXSxmPTA7ZjxkLmxlbmd0aDtmKyspZS5wdXNoKGRbZl0ubmFtZSk7Yy52YWwoZS5qb2luKFwiLCBcIikpLGMudHJpZ2dlcihcImNoYW5nZVwiKX0pO3ZhciBnPVwiaW5wdXRbdHlwZT1yYW5nZV1cIixoPSExO2EoZykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKTthKHRoaXMpLmFmdGVyKGIpfSk7dmFyIGk9ZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQoYS5wYXJlbnQoKS5jc3MoXCJwYWRkaW5nLWxlZnRcIikpLGM9LTcrYitcInB4XCI7YS52ZWxvY2l0eSh7aGVpZ2h0OlwiMzBweFwiLHdpZHRoOlwiMzBweFwiLHRvcDpcIi0zMHB4XCIsbWFyZ2luTGVmdDpjfSx7ZHVyYXRpb246MzAwLGVhc2luZzpcImVhc2VPdXRFeHBvXCJ9KX0saj1mdW5jdGlvbihhKXt2YXIgYj1hLndpZHRoKCktMTUsYz1wYXJzZUZsb2F0KGEuYXR0cihcIm1heFwiKSksZD1wYXJzZUZsb2F0KGEuYXR0cihcIm1pblwiKSksZT0ocGFyc2VGbG9hdChhLnZhbCgpKS1kKS8oYy1kKTtyZXR1cm4gZSpifSxrPVwiLnJhbmdlLWZpZWxkXCI7YShkb2N1bWVudCkub24oXCJjaGFuZ2VcIixnLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuc2libGluZ3MoXCIudGh1bWJcIik7Yy5maW5kKFwiLnZhbHVlXCIpLmh0bWwoYSh0aGlzKS52YWwoKSksYy5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8aShjKTt2YXIgZD1qKGEodGhpcykpO2MuYWRkQ2xhc3MoXCJhY3RpdmVcIikuY3NzKFwibGVmdFwiLGQpfSksYShkb2N1bWVudCkub24oXCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLGcsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKS5zaWJsaW5ncyhcIi50aHVtYlwiKTtpZihjLmxlbmd0aDw9MCYmKGM9YSgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpLGEodGhpcykuYWZ0ZXIoYykpLGMuZmluZChcIi52YWx1ZVwiKS5odG1sKGEodGhpcykudmFsKCkpLGg9ITAsYSh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHxpKGMpLFwiaW5wdXRcIiE9PWIudHlwZSl7dmFyIGQ9aihhKHRoaXMpKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixkKX19KSxhKGRvY3VtZW50KS5vbihcIm1vdXNldXAgdG91Y2hlbmRcIixrLGZ1bmN0aW9uKCl7aD0hMSxhKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfSksYShkb2N1bWVudCkub24oXCJpbnB1dCBtb3VzZW1vdmUgdG91Y2htb3ZlXCIsayxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpLmNoaWxkcmVuKFwiLnRodW1iXCIpLGQ9YSh0aGlzKS5maW5kKGcpO2lmKGgpe2MuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fGkoYyk7dmFyIGU9aihkKTtjLmFkZENsYXNzKFwiYWN0aXZlXCIpLmNzcyhcImxlZnRcIixlKSxjLmZpbmQoXCIudmFsdWVcIikuaHRtbChjLnNpYmxpbmdzKGcpLnZhbCgpKX19KSxhKGRvY3VtZW50KS5vbihcIm1vdXNlb3V0IHRvdWNobGVhdmVcIixrLGZ1bmN0aW9uKCl7aWYoIWgpe3ZhciBiPWEodGhpcykuY2hpbGRyZW4oXCIudGh1bWJcIiksYz1wYXJzZUludChhKHRoaXMpLmNzcyhcInBhZGRpbmctbGVmdFwiKSksZD03K2MrXCJweFwiO2IuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJmIudmVsb2NpdHkoe2hlaWdodDpcIjBcIix3aWR0aDpcIjBcIix0b3A6XCIxMHB4XCIsbWFyZ2luTGVmdDpkfSx7ZHVyYXRpb246MTAwfSksYi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX19KSxhLmZuLmF1dG9jb21wbGV0ZT1mdW5jdGlvbihiKXt2YXIgYz17ZGF0YTp7fSxsaW1pdDoxLzAsb25BdXRvY29tcGxldGU6bnVsbCxtaW5MZW5ndGg6MX07cmV0dXJuIGI9YS5leHRlbmQoYyxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYyxkPWEodGhpcyksZT1iLmRhdGEsZj0wLGc9LTEsaD1kLmNsb3Nlc3QoXCIuaW5wdXQtZmllbGRcIik7aWYoIWEuaXNFbXB0eU9iamVjdChlKSl7dmFyIGksaj1hKCc8dWwgY2xhc3M9XCJhdXRvY29tcGxldGUtY29udGVudCBkcm9wZG93bi1jb250ZW50XCI+PC91bD4nKTtoLmxlbmd0aD8oaT1oLmNoaWxkcmVuKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikuZmlyc3QoKSxpLmxlbmd0aHx8aC5hcHBlbmQoaikpOihpPWQubmV4dChcIi5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50XCIpLGkubGVuZ3RofHxkLmFmdGVyKGopKSxpLmxlbmd0aCYmKGo9aSk7dmFyIGs9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmZpbmQoXCJpbWdcIiksZD1iLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJcIithLnRvTG93ZXJDYXNlKCkpLGU9ZCthLmxlbmd0aC0xLGY9Yi50ZXh0KCkuc2xpY2UoMCxkKSxnPWIudGV4dCgpLnNsaWNlKGQsZSsxKSxoPWIudGV4dCgpLnNsaWNlKGUrMSk7Yi5odG1sKFwiPHNwYW4+XCIrZitcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlwiK2crXCI8L3NwYW4+XCIraCtcIjwvc3Bhbj5cIiksYy5sZW5ndGgmJmIucHJlcGVuZChjKX0sbD1mdW5jdGlvbigpe2c9LTEsai5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX0sbT1mdW5jdGlvbigpe2ouZW1wdHkoKSxsKCksYz12b2lkIDB9O2Qub2ZmKFwiYmx1ci5hdXRvY29tcGxldGVcIikub24oXCJibHVyLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKCl7bSgpfSksZC5vZmYoXCJrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlXCIpLm9uKFwia2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKGcpe2Y9MDt2YXIgaD1kLnZhbCgpLnRvTG93ZXJDYXNlKCk7aWYoMTMhPT1nLndoaWNoJiYzOCE9PWcud2hpY2gmJjQwIT09Zy53aGljaCl7aWYoYyE9PWgmJihtKCksaC5sZW5ndGg+PWIubWluTGVuZ3RoKSlmb3IodmFyIGkgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGkpJiZpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihoKSE9PS0xJiZpLnRvTG93ZXJDYXNlKCkhPT1oKXtpZihmPj1iLmxpbWl0KWJyZWFrO3ZhciBsPWEoXCI8bGk+PC9saT5cIik7ZVtpXT9sLmFwcGVuZCgnPGltZyBzcmM9XCInK2VbaV0rJ1wiIGNsYXNzPVwicmlnaHQgY2lyY2xlXCI+PHNwYW4+JytpK1wiPC9zcGFuPlwiKTpsLmFwcGVuZChcIjxzcGFuPlwiK2krXCI8L3NwYW4+XCIpLGouYXBwZW5kKGwpLGsoaCxsKSxmKyt9Yz1ofX0pLGQub2ZmKFwia2V5ZG93bi5hdXRvY29tcGxldGVcIikub24oXCJrZXlkb3duLmF1dG9jb21wbGV0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBiLGM9YS53aGljaCxkPWouY2hpbGRyZW4oXCJsaVwiKS5sZW5ndGgsZT1qLmNoaWxkcmVuKFwiLmFjdGl2ZVwiKS5maXJzdCgpO3JldHVybiAxMz09PWMmJmc+PTA/KGI9ai5jaGlsZHJlbihcImxpXCIpLmVxKGcpLHZvaWQoYi5sZW5ndGgmJihiLnRyaWdnZXIoXCJtb3VzZWRvd24uYXV0b2NvbXBsZXRlXCIpLGEucHJldmVudERlZmF1bHQoKSkpKTp2b2lkKDM4IT09YyYmNDAhPT1jfHwoYS5wcmV2ZW50RGVmYXVsdCgpLFxuMzg9PT1jJiZnPjAmJmctLSw0MD09PWMmJmc8ZC0xJiZnKyssZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxnPj0wJiZqLmNoaWxkcmVuKFwibGlcIikuZXEoZykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpKX0pLGoub24oXCJtb3VzZWRvd24uYXV0b2NvbXBsZXRlIHRvdWNoc3RhcnQuYXV0b2NvbXBsZXRlXCIsXCJsaVwiLGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKS50ZXh0KCkudHJpbSgpO2QudmFsKGMpLGQudHJpZ2dlcihcImNoYW5nZVwiKSxtKCksXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkF1dG9jb21wbGV0ZSYmYi5vbkF1dG9jb21wbGV0ZS5jYWxsKHRoaXMsYyl9KX19KX19KSxhLmZuLm1hdGVyaWFsX3NlbGVjdD1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEsYixjKXt2YXIgZT1hLmluZGV4T2YoYiksZj1lPT09LTE7cmV0dXJuIGY/YS5wdXNoKGIpOmEuc3BsaWNlKGUsMSksYy5zaWJsaW5ncyhcInVsLmRyb3Bkb3duLWNvbnRlbnRcIikuZmluZChcImxpOm5vdCgub3B0Z3JvdXApXCIpLmVxKGIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpLGMuZmluZChcIm9wdGlvblwiKS5lcShiKS5wcm9wKFwic2VsZWN0ZWRcIixmKSxkKGEsYyksZn1mdW5jdGlvbiBkKGEsYil7Zm9yKHZhciBjPVwiXCIsZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKyl7dmFyIGY9Yi5maW5kKFwib3B0aW9uXCIpLmVxKGFbZF0pLnRleHQoKTtjKz0wPT09ZD9mOlwiLCBcIitmfVwiXCI9PT1jJiYoYz1iLmZpbmQoXCJvcHRpb246ZGlzYWJsZWRcIikuZXEoMCkudGV4dCgpKSxiLnNpYmxpbmdzKFwiaW5wdXQuc2VsZWN0LWRyb3Bkb3duXCIpLnZhbChjKX1hKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpO2lmKCFkLmhhc0NsYXNzKFwiYnJvd3Nlci1kZWZhdWx0XCIpKXt2YXIgZT0hIWQuYXR0cihcIm11bHRpcGxlXCIpLGY9ZC5kYXRhKFwic2VsZWN0LWlkXCIpO2lmKGYmJihkLnBhcmVudCgpLmZpbmQoXCJzcGFuLmNhcmV0XCIpLnJlbW92ZSgpLGQucGFyZW50KCkuZmluZChcImlucHV0XCIpLnJlbW92ZSgpLGQudW53cmFwKCksYShcInVsI3NlbGVjdC1vcHRpb25zLVwiK2YpLnJlbW92ZSgpKSxcImRlc3Ryb3lcIj09PWIpcmV0dXJuIHZvaWQgZC5kYXRhKFwic2VsZWN0LWlkXCIsbnVsbCkucmVtb3ZlQ2xhc3MoXCJpbml0aWFsaXplZFwiKTt2YXIgZz1NYXRlcmlhbGl6ZS5ndWlkKCk7ZC5kYXRhKFwic2VsZWN0LWlkXCIsZyk7dmFyIGg9YSgnPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+Jyk7aC5hZGRDbGFzcyhkLmF0dHIoXCJjbGFzc1wiKSk7dmFyIGk9YSgnPHVsIGlkPVwic2VsZWN0LW9wdGlvbnMtJytnKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcrKGU/XCJtdWx0aXBsZS1zZWxlY3QtZHJvcGRvd25cIjpcIlwiKSsnXCI+PC91bD4nKSxqPWQuY2hpbGRyZW4oXCJvcHRpb24sIG9wdGdyb3VwXCIpLGs9W10sbD0hMSxtPWQuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS5odG1sKCl8fGQuZmluZChcIm9wdGlvbjpmaXJzdFwiKS5odG1sKCl8fFwiXCIsbj1mdW5jdGlvbihiLGMsZCl7dmFyIGY9Yy5pcyhcIjpkaXNhYmxlZFwiKT9cImRpc2FibGVkIFwiOlwiXCIsZz1cIm9wdGdyb3VwLW9wdGlvblwiPT09ZD9cIm9wdGdyb3VwLW9wdGlvbiBcIjpcIlwiLGg9ZT8nPGlucHV0IHR5cGU9XCJjaGVja2JveFwiJytmK1wiLz48bGFiZWw+PC9sYWJlbD5cIjpcIlwiLGo9Yy5kYXRhKFwiaWNvblwiKSxrPWMuYXR0cihcImNsYXNzXCIpO2lmKGope3ZhciBsPVwiXCI7cmV0dXJuIGsmJihsPScgY2xhc3M9XCInK2srJ1wiJyksaS5hcHBlbmQoYSgnPGxpIGNsYXNzPVwiJytmK2crJ1wiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJytqKydcIicrbCtcIj48c3Bhbj5cIitoK2MuaHRtbCgpK1wiPC9zcGFuPjwvbGk+XCIpKSwhMH1pLmFwcGVuZChhKCc8bGkgY2xhc3M9XCInK2YrZysnXCI+PHNwYW4+JytoK2MuaHRtbCgpK1wiPC9zcGFuPjwvbGk+XCIpKX07ai5sZW5ndGgmJmouZWFjaChmdW5jdGlvbigpe2lmKGEodGhpcykuaXMoXCJvcHRpb25cIikpZT9uKGQsYSh0aGlzKSxcIm11bHRpcGxlXCIpOm4oZCxhKHRoaXMpKTtlbHNlIGlmKGEodGhpcykuaXMoXCJvcHRncm91cFwiKSl7dmFyIGI9YSh0aGlzKS5jaGlsZHJlbihcIm9wdGlvblwiKTtpLmFwcGVuZChhKCc8bGkgY2xhc3M9XCJvcHRncm91cFwiPjxzcGFuPicrYSh0aGlzKS5hdHRyKFwibGFiZWxcIikrXCI8L3NwYW4+PC9saT5cIikpLGIuZWFjaChmdW5jdGlvbigpe24oZCxhKHRoaXMpLFwib3B0Z3JvdXAtb3B0aW9uXCIpfSl9fSksaS5maW5kKFwibGk6bm90KC5vcHRncm91cClcIikuZWFjaChmdW5jdGlvbihmKXthKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKGcpe2lmKCFhKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikmJiFhKHRoaXMpLmhhc0NsYXNzKFwib3B0Z3JvdXBcIikpe3ZhciBoPSEwO2U/KGEoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsdGhpcykucHJvcChcImNoZWNrZWRcIixmdW5jdGlvbihhLGIpe3JldHVybiFifSksaD1jKGssZixkKSxxLnRyaWdnZXIoXCJmb2N1c1wiKSk6KGkuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGEodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikscS52YWwoYSh0aGlzKS50ZXh0KCkpKSxyKGksYSh0aGlzKSksZC5maW5kKFwib3B0aW9uXCIpLmVxKGYpLnByb3AoXCJzZWxlY3RlZFwiLGgpLGQudHJpZ2dlcihcImNoYW5nZVwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYiYmYigpfWcuc3RvcFByb3BhZ2F0aW9uKCl9KX0pLGQud3JhcChoKTt2YXIgbz1hKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+JiM5NjYwOzwvc3Bhbj4nKTtkLmlzKFwiOmRpc2FibGVkXCIpJiZvLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7dmFyIHA9bS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpLHE9YSgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiByZWFkb25seT1cInRydWVcIiAnKyhkLmlzKFwiOmRpc2FibGVkXCIpP1wiZGlzYWJsZWRcIjpcIlwiKSsnIGRhdGEtYWN0aXZhdGVzPVwic2VsZWN0LW9wdGlvbnMtJytnKydcIiB2YWx1ZT1cIicrcCsnXCIvPicpO2QuYmVmb3JlKHEpLHEuYmVmb3JlKG8pLHEuYWZ0ZXIoaSksZC5pcyhcIjpkaXNhYmxlZFwiKXx8cS5kcm9wZG93bih7aG92ZXI6ITF9KSxkLmF0dHIoXCJ0YWJpbmRleFwiKSYmYShxWzBdKS5hdHRyKFwidGFiaW5kZXhcIixkLmF0dHIoXCJ0YWJpbmRleFwiKSksZC5hZGRDbGFzcyhcImluaXRpYWxpemVkXCIpLHEub24oe2ZvY3VzOmZ1bmN0aW9uKCl7aWYoYShcInVsLnNlbGVjdC1kcm9wZG93blwiKS5ub3QoaVswXSkuaXMoXCI6dmlzaWJsZVwiKSYmYShcImlucHV0LnNlbGVjdC1kcm9wZG93blwiKS50cmlnZ2VyKFwiY2xvc2VcIiksIWkuaXMoXCI6dmlzaWJsZVwiKSl7YSh0aGlzKS50cmlnZ2VyKFwib3BlblwiLFtcImZvY3VzXCJdKTt2YXIgYj1hKHRoaXMpLnZhbCgpO2UmJmIuaW5kZXhPZihcIixcIik+PTAmJihiPWIuc3BsaXQoXCIsXCIpWzBdKTt2YXIgYz1pLmZpbmQoXCJsaVwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0pWzBdO3IoaSxjLCEwKX19LGNsaWNrOmZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9fSkscS5vbihcImJsdXJcIixmdW5jdGlvbigpe2V8fGEodGhpcykudHJpZ2dlcihcImNsb3NlXCIpLGkuZmluZChcImxpLnNlbGVjdGVkXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIil9KSxpLmhvdmVyKGZ1bmN0aW9uKCl7bD0hMH0sZnVuY3Rpb24oKXtsPSExfSksYSh3aW5kb3cpLm9uKHtjbGljazpmdW5jdGlvbigpe2UmJihsfHxxLnRyaWdnZXIoXCJjbG9zZVwiKSl9fSksZSYmZC5maW5kKFwib3B0aW9uOnNlbGVjdGVkOm5vdCg6ZGlzYWJsZWQpXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmluZGV4KCk7YyhrLGIsZCksaS5maW5kKFwibGlcIikuZXEoYikuZmluZChcIjpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCEwKX0pO3ZhciByPWZ1bmN0aW9uKGIsYyxkKXtpZihjKXtiLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO3ZhciBmPWEoYyk7Zi5hZGRDbGFzcyhcInNlbGVjdGVkXCIpLGUmJiFkfHxpLnNjcm9sbFRvKGYpfX0scz1bXSx0PWZ1bmN0aW9uKGIpe2lmKDk9PWIud2hpY2gpcmV0dXJuIHZvaWQgcS50cmlnZ2VyKFwiY2xvc2VcIik7aWYoNDA9PWIud2hpY2gmJiFpLmlzKFwiOnZpc2libGVcIikpcmV0dXJuIHZvaWQgcS50cmlnZ2VyKFwib3BlblwiKTtpZigxMyE9Yi53aGljaHx8aS5pcyhcIjp2aXNpYmxlXCIpKXtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9U3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKS50b0xvd2VyQ2FzZSgpLGQ9WzksMTMsMjcsMzgsNDBdO2lmKGMmJmQuaW5kZXhPZihiLndoaWNoKT09PS0xKXtzLnB1c2goYyk7dmFyIGY9cy5qb2luKFwiXCIpLGc9aS5maW5kKFwibGlcIikuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1hKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZil9KVswXTtnJiZyKGksZyl9aWYoMTM9PWIud2hpY2gpe3ZhciBoPWkuZmluZChcImxpLnNlbGVjdGVkOm5vdCguZGlzYWJsZWQpXCIpWzBdO2gmJihhKGgpLnRyaWdnZXIoXCJjbGlja1wiKSxlfHxxLnRyaWdnZXIoXCJjbG9zZVwiKSl9NDA9PWIud2hpY2gmJihnPWkuZmluZChcImxpLnNlbGVjdGVkXCIpLmxlbmd0aD9pLmZpbmQoXCJsaS5zZWxlY3RlZFwiKS5uZXh0KFwibGk6bm90KC5kaXNhYmxlZClcIilbMF06aS5maW5kKFwibGk6bm90KC5kaXNhYmxlZClcIilbMF0scihpLGcpKSwyNz09Yi53aGljaCYmcS50cmlnZ2VyKFwiY2xvc2VcIiksMzg9PWIud2hpY2gmJihnPWkuZmluZChcImxpLnNlbGVjdGVkXCIpLnByZXYoXCJsaTpub3QoLmRpc2FibGVkKVwiKVswXSxnJiZyKGksZykpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPVtdfSwxZTMpfX07cS5vbihcImtleWRvd25cIix0KX19KX19KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9e2luaXQ6ZnVuY3Rpb24oYil7dmFyIGM9e2luZGljYXRvcnM6ITAsaGVpZ2h0OjQwMCx0cmFuc2l0aW9uOjUwMCxpbnRlcnZhbDo2ZTN9O3JldHVybiBiPWEuZXh0ZW5kKGMsYiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyhhLGIpe2EuaGFzQ2xhc3MoXCJjZW50ZXItYWxpZ25cIik/YS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVk6LTEwMH0se2R1cmF0aW9uOmIscXVldWU6ITF9KTphLmhhc0NsYXNzKFwicmlnaHQtYWxpZ25cIik/YS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pOmEuaGFzQ2xhc3MoXCJsZWZ0LWFsaWduXCIpJiZhLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDotMTAwfSx7ZHVyYXRpb246YixxdWV1ZTohMX0pfWZ1bmN0aW9uIGQoYSl7YT49ai5sZW5ndGg/YT0wOmE8MCYmKGE9ai5sZW5ndGgtMSksaz1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksayE9YSYmKGU9ai5lcShrKSwkY2FwdGlvbj1lLmZpbmQoXCIuY2FwdGlvblwiKSxlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGUudmVsb2NpdHkoe29wYWNpdHk6MH0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwiLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ai5ub3QoXCIuYWN0aXZlXCIpLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowLHRyYW5zbGF0ZVk6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSxjKCRjYXB0aW9uLGIudHJhbnNpdGlvbiksYi5pbmRpY2F0b3JzJiZmLmVxKGspLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGouZXEoYSkudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksai5lcShhKS5maW5kKFwiLmNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MSx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLGRlbGF5OmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksai5lcShhKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxiLmluZGljYXRvcnMmJmYuZXEoYSkuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfXZhciBlLGYsZyxoPWEodGhpcyksaT1oLmZpbmQoXCJ1bC5zbGlkZXNcIikuZmlyc3QoKSxqPWkuZmluZChcIj4gbGlcIiksaz1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCk7ayE9LTEmJihlPWouZXEoaykpLGguaGFzQ2xhc3MoXCJmdWxsc2NyZWVuXCIpfHwoYi5pbmRpY2F0b3JzP2guaGVpZ2h0KGIuaGVpZ2h0KzQwKTpoLmhlaWdodChiLmhlaWdodCksaS5oZWlnaHQoYi5oZWlnaHQpKSxqLmZpbmQoXCIuY2FwdGlvblwiKS5lYWNoKGZ1bmN0aW9uKCl7YyhhKHRoaXMpLDApfSksai5maW5kKFwiaW1nXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjthKHRoaXMpLmF0dHIoXCJzcmNcIikhPT1iJiYoYSh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIrYSh0aGlzKS5hdHRyKFwic3JjXCIpK1wiKVwiKSxhKHRoaXMpLmF0dHIoXCJzcmNcIixiKSl9KSxiLmluZGljYXRvcnMmJihmPWEoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpLGouZWFjaChmdW5jdGlvbihjKXt2YXIgZT1hKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7ZS5jbGljayhmdW5jdGlvbigpe3ZhciBjPWkucGFyZW50KCksZT1jLmZpbmQoYSh0aGlzKSkuaW5kZXgoKTtkKGUpLGNsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpfSksZi5hcHBlbmQoZSl9KSxoLmFwcGVuZChmKSxmPWguZmluZChcInVsLmluZGljYXRvcnNcIikuZmluZChcImxpLmluZGljYXRvci1pdGVtXCIpKSxlP2Uuc2hvdygpOihqLmZpcnN0KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIikudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOmIudHJhbnNpdGlvbixxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksaz0wLGU9ai5lcShrKSxiLmluZGljYXRvcnMmJmYuZXEoaykuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGUuZmluZChcImltZ1wiKS5lYWNoKGZ1bmN0aW9uKCl7ZS5maW5kKFwiLmNhcHRpb25cIikudmVsb2NpdHkoe29wYWNpdHk6MSx0cmFuc2xhdGVYOjAsdHJhbnNsYXRlWTowfSx7ZHVyYXRpb246Yi50cmFuc2l0aW9uLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KX0pLGc9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtrPWkuZmluZChcIi5hY3RpdmVcIikuaW5kZXgoKSxkKGsrMSl9LGIudHJhbnNpdGlvbitiLmludGVydmFsKTt2YXIgbD0hMSxtPSExLG49ITE7aC5oYW1tZXIoe3ByZXZlbnRfZGVmYXVsdDohMX0pLmJpbmQoXCJwYW5cIixmdW5jdGlvbihhKXtpZihcInRvdWNoXCI9PT1hLmdlc3R1cmUucG9pbnRlclR5cGUpe2NsZWFySW50ZXJ2YWwoZyk7dmFyIGI9YS5nZXN0dXJlLmRpcmVjdGlvbixjPWEuZ2VzdHVyZS5kZWx0YVgsZD1hLmdlc3R1cmUudmVsb2NpdHlYLGU9YS5nZXN0dXJlLnZlbG9jaXR5WTskY3Vycl9zbGlkZT1pLmZpbmQoXCIuYWN0aXZlXCIpLE1hdGguYWJzKGQpPk1hdGguYWJzKGUpJiYkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpjfSx7ZHVyYXRpb246NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pLDQ9PT1iJiYoYz5oLmlubmVyV2lkdGgoKS8yfHxkPC0uNjUpP249ITA6Mj09PWImJihjPC0xKmguaW5uZXJXaWR0aCgpLzJ8fGQ+LjY1KSYmKG09ITApO3ZhciBmO20mJihmPSRjdXJyX3NsaWRlLm5leHQoKSwwPT09Zi5sZW5ndGgmJihmPWouZmlyc3QoKSksZi52ZWxvY2l0eSh7b3BhY2l0eToxfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KSksbiYmKGY9JGN1cnJfc2xpZGUucHJldigpLDA9PT1mLmxlbmd0aCYmKGY9ai5sYXN0KCkpLGYudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjMwMCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSkpfX0pLmJpbmQoXCJwYW5lbmRcIixmdW5jdGlvbihhKXtcInRvdWNoXCI9PT1hLmdlc3R1cmUucG9pbnRlclR5cGUmJigkY3Vycl9zbGlkZT1pLmZpbmQoXCIuYWN0aXZlXCIpLGw9ITEsY3Vycl9pbmRleD1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksIW4mJiFtfHxqLmxlbmd0aDw9MT8kY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCJ9KTptPyhkKGN1cnJfaW5kZXgrMSksJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6LTEqaC5pbm5lcldpZHRoKCl9LHtkdXJhdGlvbjozMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpeyRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OjAsdHJhbnNsYXRlWDowfSx7ZHVyYXRpb246MCxxdWV1ZTohMX0pfX0pKTpuJiYoZChjdXJyX2luZGV4LTEpLCRjdXJyX3NsaWRlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmguaW5uZXJXaWR0aCgpfSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXskY3Vycl9zbGlkZS52ZWxvY2l0eSh7b3BhY2l0eTowLHRyYW5zbGF0ZVg6MH0se2R1cmF0aW9uOjAscXVldWU6ITF9KX19KSksbT0hMSxuPSExLGNsZWFySW50ZXJ2YWwoZyksZz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGoubGVuZ3RoPT1rKzE/az0wOmsrPTEsZChrKX0sYi50cmFuc2l0aW9uK2IuaW50ZXJ2YWwpKX0pLGgub24oXCJzbGlkZXJQYXVzZVwiLGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChnKX0pLGgub24oXCJzbGlkZXJTdGFydFwiLGZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChnKSxnPXNldEludGVydmFsKGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksai5sZW5ndGg9PWsrMT9rPTA6ays9MSxkKGspfSxiLnRyYW5zaXRpb24rYi5pbnRlcnZhbCl9KSxoLm9uKFwic2xpZGVyTmV4dFwiLGZ1bmN0aW9uKCl7az1pLmZpbmQoXCIuYWN0aXZlXCIpLmluZGV4KCksZChrKzEpfSksaC5vbihcInNsaWRlclByZXZcIixmdW5jdGlvbigpe2s9aS5maW5kKFwiLmFjdGl2ZVwiKS5pbmRleCgpLGQoay0xKX0pfSl9LHBhdXNlOmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyUGF1c2VcIil9LHN0YXJ0OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyU3RhcnRcIil9LG5leHQ6ZnVuY3Rpb24oKXthKHRoaXMpLnRyaWdnZXIoXCJzbGlkZXJOZXh0XCIpfSxwcmV2OmZ1bmN0aW9uKCl7YSh0aGlzKS50cmlnZ2VyKFwic2xpZGVyUHJldlwiKX19O2EuZm4uc2xpZGVyPWZ1bmN0aW9uKGMpe3JldHVybiBiW2NdP2JbY10uYXBwbHkodGhpcyxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpOlwib2JqZWN0XCIhPXR5cGVvZiBjJiZjP3ZvaWQgYS5lcnJvcihcIk1ldGhvZCBcIitjK1wiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50b29sdGlwXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YShkb2N1bWVudCkub24oXCJjbGljay5jYXJkXCIsXCIuY2FyZFwiLGZ1bmN0aW9uKGIpe2EodGhpcykuZmluZChcIj4gLmNhcmQtcmV2ZWFsXCIpLmxlbmd0aCYmKGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGVcIikpfHxhKGIudGFyZ2V0KS5pcyhhKFwiLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlIGlcIikpP2EodGhpcykuZmluZChcIi5jYXJkLXJldmVhbFwiKS52ZWxvY2l0eSh7dHJhbnNsYXRlWTowfSx7ZHVyYXRpb246MjI1LHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2EodGhpcykuY3NzKHtkaXNwbGF5Olwibm9uZVwifSl9fSk6KGEoYi50YXJnZXQpLmlzKGEoXCIuY2FyZCAuYWN0aXZhdG9yXCIpKXx8YShiLnRhcmdldCkuaXMoYShcIi5jYXJkIC5hY3RpdmF0b3IgaVwiKSkpJiYoYShiLnRhcmdldCkuY2xvc2VzdChcIi5jYXJkXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksYSh0aGlzKS5maW5kKFwiLmNhcmQtcmV2ZWFsXCIpLmNzcyh7ZGlzcGxheTpcImJsb2NrXCJ9KS52ZWxvY2l0eShcInN0b3BcIiwhMSkudmVsb2NpdHkoe3RyYW5zbGF0ZVk6XCItMTAwJVwifSx7ZHVyYXRpb246MzAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VJbk91dFF1YWRcIn0pKSl9KX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtkYXRhOltdLHBsYWNlaG9sZGVyOlwiXCIsc2Vjb25kYXJ5UGxhY2Vob2xkZXI6XCJcIixhdXRvY29tcGxldGVPcHRpb25zOnt9fTthKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIixcIi5jaGlwIC5jbG9zZVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuY2xvc2VzdChcIi5jaGlwc1wiKTtjLmF0dHIoXCJkYXRhLWluaXRpYWxpemVkXCIpfHxhKHRoaXMpLmNsb3Nlc3QoXCIuY2hpcFwiKS5yZW1vdmUoKX0pfSksYS5mbi5tYXRlcmlhbF9jaGlwPWZ1bmN0aW9uKGMpe3ZhciBkPXRoaXM7aWYodGhpcy4kZWw9YSh0aGlzKSx0aGlzLiRkb2N1bWVudD1hKGRvY3VtZW50KSx0aGlzLlNFTFM9e0NISVBTOlwiLmNoaXBzXCIsQ0hJUDpcIi5jaGlwXCIsSU5QVVQ6XCJpbnB1dFwiLERFTEVURTpcIi5tYXRlcmlhbC1pY29uc1wiLFNFTEVDVEVEX0NISVA6XCIuc2VsZWN0ZWRcIn0sXCJkYXRhXCI9PT1jKXJldHVybiB0aGlzLiRlbC5kYXRhKFwiY2hpcHNcIik7dmFyIGU9YS5leHRlbmQoe30sYixjKTtkLmhhc0F1dG9jb21wbGV0ZT0hYS5pc0VtcHR5T2JqZWN0KGUuYXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhKSx0aGlzLmluaXQ9ZnVuY3Rpb24oKXt2YXIgYj0wO2QuJGVsLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGY9TWF0ZXJpYWxpemUuZ3VpZCgpO2QuY2hpcElkPWYsZS5kYXRhJiZlLmRhdGEgaW5zdGFuY2VvZiBBcnJheXx8KGUuZGF0YT1bXSksYy5kYXRhKFwiY2hpcHNcIixlLmRhdGEpLGMuYXR0cihcImRhdGEtaW5kZXhcIixiKSxjLmF0dHIoXCJkYXRhLWluaXRpYWxpemVkXCIsITApLGMuaGFzQ2xhc3MoZC5TRUxTLkNISVBTKXx8Yy5hZGRDbGFzcyhcImNoaXBzXCIpLGQuY2hpcHMoYyxmKSxiKyt9KX0sdGhpcy5oYW5kbGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgYj1kLlNFTFM7ZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtZm9jdXNcIixiLkNISVBTKS5vbihcImNsaWNrLmNoaXBzLWZvY3VzXCIsYi5DSElQUyxmdW5jdGlvbihjKXthKGMudGFyZ2V0KS5maW5kKGIuSU5QVVQpLmZvY3VzKCl9KSxkLiRkb2N1bWVudC5vZmYoXCJjbGljay5jaGlwcy1zZWxlY3RcIixiLkNISVApLm9uKFwiY2xpY2suY2hpcHMtc2VsZWN0XCIsYi5DSElQLGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpO2lmKGUubGVuZ3RoKXt2YXIgZj1lLmhhc0NsYXNzKFwic2VsZWN0ZWRcIiksZz1lLmNsb3Nlc3QoYi5DSElQUyk7YShiLkNISVApLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIiksZnx8ZC5zZWxlY3RDaGlwKGUuaW5kZXgoKSxnKX19KSxkLiRkb2N1bWVudC5vZmYoXCJrZXlkb3duLmNoaXBzXCIpLm9uKFwia2V5ZG93bi5jaGlwc1wiLGZ1bmN0aW9uKGMpe2lmKCFhKGMudGFyZ2V0KS5pcyhcImlucHV0LCB0ZXh0YXJlYVwiKSl7dmFyIGUsZj1kLiRkb2N1bWVudC5maW5kKGIuQ0hJUCtiLlNFTEVDVEVEX0NISVApLGc9Zi5jbG9zZXN0KGIuQ0hJUFMpLGg9Zi5zaWJsaW5ncyhiLkNISVApLmxlbmd0aDtpZihmLmxlbmd0aClpZig4PT09Yy53aGljaHx8NDY9PT1jLndoaWNoKXtjLnByZXZlbnREZWZhdWx0KCksZT1mLmluZGV4KCksZC5kZWxldGVDaGlwKGUsZyk7dmFyIGk9bnVsbDtlKzE8aD9pPWU6ZSE9PWgmJmUrMSE9PWh8fChpPWgtMSksaTwwJiYoaT1udWxsKSxudWxsIT09aSYmZC5zZWxlY3RDaGlwKGksZyksaHx8Zy5maW5kKFwiaW5wdXRcIikuZm9jdXMoKX1lbHNlIGlmKDM3PT09Yy53aGljaCl7aWYoZT1mLmluZGV4KCktMSxlPDApcmV0dXJuO2EoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGQuc2VsZWN0Q2hpcChlLGcpfWVsc2UgaWYoMzk9PT1jLndoaWNoKXtpZihlPWYuaW5kZXgoKSsxLGEoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLGU+aClyZXR1cm4gdm9pZCBnLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpO2Quc2VsZWN0Q2hpcChlLGcpfX19KSxkLiRkb2N1bWVudC5vZmYoXCJmb2N1c2luLmNoaXBzXCIsYi5DSElQUytcIiBcIitiLklOUFVUKS5vbihcImZvY3VzaW4uY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChiLkNISVBTKTtkLmFkZENsYXNzKFwiZm9jdXNcIiksZC5zaWJsaW5ncyhcImxhYmVsLCAucHJlZml4XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGEoYi5DSElQKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpfSksZC4kZG9jdW1lbnQub2ZmKFwiZm9jdXNvdXQuY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQpLm9uKFwiZm9jdXNvdXQuY2hpcHNcIixiLkNISVBTK1wiIFwiK2IuSU5QVVQsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChiLkNISVBTKTtkLnJlbW92ZUNsYXNzKFwiZm9jdXNcIiksZC5kYXRhKFwiY2hpcHNcIikubGVuZ3RofHxkLnNpYmxpbmdzKFwibGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksZC5zaWJsaW5ncyhcIi5wcmVmaXhcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9KSxkLiRkb2N1bWVudC5vZmYoXCJrZXlkb3duLmNoaXBzLWFkZFwiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCkub24oXCJrZXlkb3duLmNoaXBzLWFkZFwiLGIuQ0hJUFMrXCIgXCIrYi5JTlBVVCxmdW5jdGlvbihjKXt2YXIgZT1hKGMudGFyZ2V0KSxmPWUuY2xvc2VzdChiLkNISVBTKSxnPWYuY2hpbGRyZW4oYi5DSElQKS5sZW5ndGg7aWYoMTM9PT1jLndoaWNoKXtpZihkLmhhc0F1dG9jb21wbGV0ZSYmZi5maW5kKFwiLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnRcIikubGVuZ3RoJiZmLmZpbmQoXCIuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudFwiKS5jaGlsZHJlbigpLmxlbmd0aClyZXR1cm47cmV0dXJuIGMucHJldmVudERlZmF1bHQoKSxkLmFkZENoaXAoe3RhZzplLnZhbCgpfSxmKSx2b2lkIGUudmFsKFwiXCIpfWlmKCg4PT09Yy5rZXlDb2RlfHwzNz09PWMua2V5Q29kZSkmJlwiXCI9PT1lLnZhbCgpJiZnKXJldHVybiBjLnByZXZlbnREZWZhdWx0KCksZC5zZWxlY3RDaGlwKGctMSxmKSx2b2lkIGUuYmx1cigpfSksZC4kZG9jdW1lbnQub2ZmKFwiY2xpY2suY2hpcHMtZGVsZXRlXCIsYi5DSElQUytcIiBcIitiLkRFTEVURSkub24oXCJjbGljay5jaGlwcy1kZWxldGVcIixiLkNISVBTK1wiIFwiK2IuREVMRVRFLGZ1bmN0aW9uKGMpe3ZhciBlPWEoYy50YXJnZXQpLGY9ZS5jbG9zZXN0KGIuQ0hJUFMpLGc9ZS5jbG9zZXN0KGIuQ0hJUCk7Yy5zdG9wUHJvcGFnYXRpb24oKSxkLmRlbGV0ZUNoaXAoZy5pbmRleCgpLGYpLGYuZmluZChcImlucHV0XCIpLmZvY3VzKCl9KX0sdGhpcy5jaGlwcz1mdW5jdGlvbihiLGMpe2IuZW1wdHkoKSxiLmRhdGEoXCJjaGlwc1wiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYXBwZW5kKGQucmVuZGVyQ2hpcChhKSl9KSxiLmFwcGVuZChhKCc8aW5wdXQgaWQ9XCInK2MrJ1wiIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlwiPicpKSxkLnNldFBsYWNlaG9sZGVyKGIpO3ZhciBmPWIubmV4dChcImxhYmVsXCIpO2YubGVuZ3RoJiYoZi5hdHRyKFwiZm9yXCIsYyksYi5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZmLmFkZENsYXNzKFwiYWN0aXZlXCIpKTt2YXIgZz1hKFwiI1wiK2MpO2QuaGFzQXV0b2NvbXBsZXRlJiYoZS5hdXRvY29tcGxldGVPcHRpb25zLm9uQXV0b2NvbXBsZXRlPWZ1bmN0aW9uKGEpe2QuYWRkQ2hpcCh7dGFnOmF9LGIpLGcudmFsKFwiXCIpLGcuZm9jdXMoKX0sZy5hdXRvY29tcGxldGUoZS5hdXRvY29tcGxldGVPcHRpb25zKSl9LHRoaXMucmVuZGVyQ2hpcD1mdW5jdGlvbihiKXtpZihiLnRhZyl7dmFyIGM9YSgnPGRpdiBjbGFzcz1cImNoaXBcIj48L2Rpdj4nKTtyZXR1cm4gYy50ZXh0KGIudGFnKSxjLmFwcGVuZChhKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGNsb3NlXCI+Y2xvc2U8L2k+JykpLGN9fSx0aGlzLnNldFBsYWNlaG9sZGVyPWZ1bmN0aW9uKGEpe2EuZGF0YShcImNoaXBzXCIpLmxlbmd0aCYmZS5wbGFjZWhvbGRlcj9hLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwicGxhY2Vob2xkZXJcIixlLnBsYWNlaG9sZGVyKTohYS5kYXRhKFwiY2hpcHNcIikubGVuZ3RoJiZlLnNlY29uZGFyeVBsYWNlaG9sZGVyJiZhLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwicGxhY2Vob2xkZXJcIixlLnNlY29uZGFyeVBsYWNlaG9sZGVyKX0sdGhpcy5pc1ZhbGlkPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWEuZGF0YShcImNoaXBzXCIpLGQ9ITEsZT0wO2U8Yy5sZW5ndGg7ZSsrKWlmKGNbZV0udGFnPT09Yi50YWcpcmV0dXJuIHZvaWQoZD0hMCk7cmV0dXJuXCJcIiE9PWIudGFnJiYhZH0sdGhpcy5hZGRDaGlwPWZ1bmN0aW9uKGEsYil7aWYoZC5pc1ZhbGlkKGIsYSkpe2Zvcih2YXIgYz1kLnJlbmRlckNoaXAoYSksZT1bXSxmPWIuZGF0YShcImNoaXBzXCIpLGc9MDtnPGYubGVuZ3RoO2crKyllLnB1c2goZltnXSk7ZS5wdXNoKGEpLGIuZGF0YShcImNoaXBzXCIsZSksYy5pbnNlcnRCZWZvcmUoYi5maW5kKFwiaW5wdXRcIikpLGIudHJpZ2dlcihcImNoaXAuYWRkXCIsYSksZC5zZXRQbGFjZWhvbGRlcihiKX19LHRoaXMuZGVsZXRlQ2hpcD1mdW5jdGlvbihhLGIpe3ZhciBjPWIuZGF0YShcImNoaXBzXCIpW2FdO2IuZmluZChcIi5jaGlwXCIpLmVxKGEpLnJlbW92ZSgpO2Zvcih2YXIgZT1bXSxmPWIuZGF0YShcImNoaXBzXCIpLGc9MDtnPGYubGVuZ3RoO2crKylnIT09YSYmZS5wdXNoKGZbZ10pO2IuZGF0YShcImNoaXBzXCIsZSksYi50cmlnZ2VyKFwiY2hpcC5kZWxldGVcIixjKSxkLnNldFBsYWNlaG9sZGVyKGIpfSx0aGlzLnNlbGVjdENoaXA9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmZpbmQoXCIuY2hpcFwiKS5lcShhKTtjJiYhMT09PWMuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKSYmKGMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKSxiLnRyaWdnZXIoXCJjaGlwLnNlbGVjdFwiLGIuZGF0YShcImNoaXBzXCIpW2FdKSl9LHRoaXMuZ2V0Q2hpcHNFbGVtZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIuZXEoYSl9LHRoaXMuaW5pdCgpLHRoaXMuaGFuZGxlRXZlbnRzKCl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EuZm4ucHVzaHBpbj1mdW5jdGlvbihiKXt2YXIgYz17dG9wOjAsYm90dG9tOjEvMCxvZmZzZXQ6MH07cmV0dXJuXCJyZW1vdmVcIj09PWI/KHRoaXMuZWFjaChmdW5jdGlvbigpeyhpZD1hKHRoaXMpLmRhdGEoXCJwdXNocGluLWlkXCIpKSYmKGEod2luZG93KS5vZmYoXCJzY3JvbGwuXCIraWQpLGEodGhpcykucmVtb3ZlRGF0YShcInB1c2hwaW4taWRcIikucmVtb3ZlQ2xhc3MoXCJwaW4tdG9wIHBpbm5lZCBwaW4tYm90dG9tXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSl9KSwhMSk6KGI9YS5leHRlbmQoYyxiKSwkaW5kZXg9MCx0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGEpe2EucmVtb3ZlQ2xhc3MoXCJwaW4tdG9wXCIpLGEucmVtb3ZlQ2xhc3MoXCJwaW5uZWRcIiksYS5yZW1vdmVDbGFzcyhcInBpbi1ib3R0b21cIil9ZnVuY3Rpb24gZChkLGUpe2QuZWFjaChmdW5jdGlvbigpe2IudG9wPD1lJiZiLmJvdHRvbT49ZSYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW5uZWRcIikmJihjKGEodGhpcykpLGEodGhpcykuY3NzKFwidG9wXCIsYi5vZmZzZXQpLGEodGhpcykuYWRkQ2xhc3MoXCJwaW5uZWRcIikpLGU8Yi50b3AmJiFhKHRoaXMpLmhhc0NsYXNzKFwicGluLXRvcFwiKSYmKGMoYSh0aGlzKSksYSh0aGlzKS5jc3MoXCJ0b3BcIiwwKSxhKHRoaXMpLmFkZENsYXNzKFwicGluLXRvcFwiKSksZT5iLmJvdHRvbSYmIWEodGhpcykuaGFzQ2xhc3MoXCJwaW4tYm90dG9tXCIpJiYoYyhhKHRoaXMpKSxhKHRoaXMpLmFkZENsYXNzKFwicGluLWJvdHRvbVwiKSxhKHRoaXMpLmNzcyhcInRvcFwiLGIuYm90dG9tLWcpKX0pfXZhciBlPU1hdGVyaWFsaXplLmd1aWQoKSxmPWEodGhpcyksZz1hKHRoaXMpLm9mZnNldCgpLnRvcDthKHRoaXMpLmRhdGEoXCJwdXNocGluLWlkXCIsZSksZChmLGEod2luZG93KS5zY3JvbGxUb3AoKSksYSh3aW5kb3cpLm9uKFwic2Nyb2xsLlwiK2UsZnVuY3Rpb24oKXt2YXIgYz1hKHdpbmRvdykuc2Nyb2xsVG9wKCkrYi5vZmZzZXQ7ZChmLGMpfSl9KSl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe2EoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7YS5mbi5yZXZlcnNlPVtdLnJldmVyc2UsYShkb2N1bWVudCkub24oXCJtb3VzZWVudGVyLmZpeGVkQWN0aW9uQnRuXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKVwiLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyk7YihkKX0pLGEoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZS5maXhlZEFjdGlvbkJ0blwiLFwiLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhcilcIixmdW5jdGlvbihiKXt2YXIgZD1hKHRoaXMpO2MoZCl9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYkNsaWNrVG9nZ2xlXCIsXCIuZml4ZWQtYWN0aW9uLWJ0bi5jbGljay10by10b2dnbGUgPiBhXCIsZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKSxmPWUucGFyZW50KCk7Zi5oYXNDbGFzcyhcImFjdGl2ZVwiKT9jKGYpOmIoZil9KSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmZhYlRvb2xiYXJcIixcIi5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgPiBhXCIsZnVuY3Rpb24oYil7dmFyIGM9YSh0aGlzKSxlPWMucGFyZW50KCk7ZChlKX0pfSksYS5mbi5leHRlbmQoe29wZW5GQUI6ZnVuY3Rpb24oKXtiKGEodGhpcykpfSxjbG9zZUZBQjpmdW5jdGlvbigpe2MoYSh0aGlzKSl9LG9wZW5Ub29sYmFyOmZ1bmN0aW9uKCl7ZChhKHRoaXMpKX0sY2xvc2VUb29sYmFyOmZ1bmN0aW9uKCl7ZShhKHRoaXMpKX19KTt2YXIgYj1mdW5jdGlvbihiKXt2YXIgYz1iO2lmKGMuaGFzQ2xhc3MoXCJhY3RpdmVcIik9PT0hMSl7dmFyIGQsZSxmPWMuaGFzQ2xhc3MoXCJob3Jpem9udGFsXCIpO2Y9PT0hMD9lPTQwOmQ9NDAsYy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmZpbmQoXCJ1bCAuYnRuLWZsb2F0aW5nXCIpLnZlbG9jaXR5KHtzY2FsZVk6XCIuNFwiLHNjYWxlWDpcIi40XCIsdHJhbnNsYXRlWTpkK1wicHhcIix0cmFuc2xhdGVYOmUrXCJweFwifSx7ZHVyYXRpb246MH0pO3ZhciBnPTA7Yy5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS5yZXZlcnNlKCkuZWFjaChmdW5jdGlvbigpe2EodGhpcykudmVsb2NpdHkoe29wYWNpdHk6XCIxXCIsc2NhbGVYOlwiMVwiLHNjYWxlWTpcIjFcIix0cmFuc2xhdGVZOlwiMFwiLHRyYW5zbGF0ZVg6XCIwXCJ9LHtkdXJhdGlvbjo4MCxkZWxheTpnfSksZys9NDB9KX19LGM9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPWEsZT1kLmhhc0NsYXNzKFwiaG9yaXpvbnRhbFwiKTtlPT09ITA/Yz00MDpiPTQwLGQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7ZC5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eShcInN0b3BcIiwhMCksZC5maW5kKFwidWwgLmJ0bi1mbG9hdGluZ1wiKS52ZWxvY2l0eSh7b3BhY2l0eTpcIjBcIixzY2FsZVg6XCIuNFwiLHNjYWxlWTpcIi40XCIsdHJhbnNsYXRlWTpiK1wicHhcIix0cmFuc2xhdGVYOmMrXCJweFwifSx7ZHVyYXRpb246ODB9KX0sZD1mdW5jdGlvbihiKXtpZihcInRydWVcIiE9PWIuYXR0cihcImRhdGEtb3BlblwiKSl7dmFyIGMsZCxmLGc9d2luZG93LmlubmVyV2lkdGgsaD13aW5kb3cuaW5uZXJIZWlnaHQsaT1iWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGo9Yi5maW5kKFwiPiBhXCIpLmZpcnN0KCksaz1iLmZpbmQoXCI+IHVsXCIpLmZpcnN0KCksbD1hKCc8ZGl2IGNsYXNzPVwiZmFiLWJhY2tkcm9wXCI+PC9kaXY+JyksbT1qLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7ai5hcHBlbmQobCksYz1pLmxlZnQtZy8yK2kud2lkdGgvMixkPWgtaS5ib3R0b20sZj1nL2wud2lkdGgoKSxiLmF0dHIoXCJkYXRhLW9yaWdpbi1ib3R0b21cIixpLmJvdHRvbSksYi5hdHRyKFwiZGF0YS1vcmlnaW4tbGVmdFwiLGkubGVmdCksYi5hdHRyKFwiZGF0YS1vcmlnaW4td2lkdGhcIixpLndpZHRoKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLGIuYXR0cihcImRhdGEtb3BlblwiLCEwKSxiLmNzcyh7XCJ0ZXh0LWFsaWduXCI6XCJjZW50ZXJcIix3aWR0aDpcIjEwMCVcIixib3R0b206MCxsZWZ0OjAsdHJhbnNmb3JtOlwidHJhbnNsYXRlWChcIitjK1wicHgpXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGouY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVZKFwiKy1kK1wicHgpXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGwuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjptfSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuY3NzKHt0cmFuc2Zvcm06XCJcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGxpbmVhciAuMnNcIn0pLGouY3NzKHtvdmVyZmxvdzpcInZpc2libGVcIix0cmFuc2Zvcm06XCJcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4yc1wifSksc2V0VGltZW91dChmdW5jdGlvbigpe2IuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLFwiYmFja2dyb3VuZC1jb2xvclwiOm19KSxsLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoXCIrZitcIilcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApXCJ9KSxrLmZpbmQoXCI+IGxpID4gYVwiKS5jc3Moe29wYWNpdHk6MX0pLGEod2luZG93KS5vbihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIixmdW5jdGlvbigpe2UoYiksYSh3aW5kb3cpLm9mZihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIpfSksYShkb2N1bWVudCkub24oXCJjbGljay5mYWJUb29sYmFyQ2xvc2VcIixmdW5jdGlvbihjKXthKGMudGFyZ2V0KS5jbG9zZXN0KGspLmxlbmd0aHx8KGUoYiksYSh3aW5kb3cpLm9mZihcInNjcm9sbC5mYWJUb29sYmFyQ2xvc2VcIiksYShkb2N1bWVudCkub2ZmKFwiY2xpY2suZmFiVG9vbGJhckNsb3NlXCIpKX0pfSwxMDApfSwwKX19LGU9ZnVuY3Rpb24oYSl7aWYoXCJ0cnVlXCI9PT1hLmF0dHIoXCJkYXRhLW9wZW5cIikpe3ZhciBiLGMsZCxlPXdpbmRvdy5pbm5lcldpZHRoLGY9d2luZG93LmlubmVySGVpZ2h0LGc9YS5hdHRyKFwiZGF0YS1vcmlnaW4td2lkdGhcIiksaD1hLmF0dHIoXCJkYXRhLW9yaWdpbi1ib3R0b21cIiksaT1hLmF0dHIoXCJkYXRhLW9yaWdpbi1sZWZ0XCIpLGo9YS5maW5kKFwiPiAuYnRuLWZsb2F0aW5nXCIpLmZpcnN0KCksaz1hLmZpbmQoXCI+IHVsXCIpLmZpcnN0KCksbD1hLmZpbmQoXCIuZmFiLWJhY2tkcm9wXCIpLG09ai5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO2I9aS1lLzIrZy8yLGM9Zi1oLGQ9ZS9sLndpZHRoKCksYS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxhLmF0dHIoXCJkYXRhLW9wZW5cIiwhMSksYS5jc3Moe1wiYmFja2dyb3VuZC1jb2xvclwiOlwidHJhbnNwYXJlbnRcIix0cmFuc2l0aW9uOlwibm9uZVwifSksai5jc3Moe3RyYW5zaXRpb246XCJub25lXCJ9KSxsLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoMClcIixcImJhY2tncm91bmQtY29sb3JcIjptfSksay5maW5kKFwiPiBsaSA+IGFcIikuY3NzKHtvcGFjaXR5OlwiXCJ9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZW1vdmUoKSxhLmNzcyh7XCJ0ZXh0LWFsaWduXCI6XCJcIix3aWR0aDpcIlwiLGJvdHRvbTpcIlwiLGxlZnQ6XCJcIixvdmVyZmxvdzpcIlwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwiXCIsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrLWIrXCJweCwwLDApXCJ9KSxqLmNzcyh7b3ZlcmZsb3c6XCJcIix0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLFwiK2MrXCJweCwwKVwifSksc2V0VGltZW91dChmdW5jdGlvbigpe2EuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwLDAsMClcIix0cmFuc2l0aW9uOlwidHJhbnNmb3JtIC4yc1wifSksai5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKDAsMCwwKVwiLHRyYW5zaXRpb246XCJ0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MClcIn0pfSwyMCl9LDIwMCl9fX0oalF1ZXJ5KSxmdW5jdGlvbihhKXtNYXRlcmlhbGl6ZS5mYWRlSW5JbWFnZT1mdW5jdGlvbihiKXt2YXIgYztpZihcInN0cmluZ1wiPT10eXBlb2YgYiljPWEoYik7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgYilyZXR1cm47Yz1ifWMuY3NzKHtvcGFjaXR5OjB9KSxhKGMpLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjo2NTAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFNpbmVcIn0pLGEoYykudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOjEzMDAscXVldWU6ITEsZWFzaW5nOlwic3dpbmdcIixzdGVwOmZ1bmN0aW9uKGIsYyl7Yy5zdGFydD0xMDA7dmFyIGQ9Yi8xMDAsZT0xNTAtKDEwMC1iKS8xLjc1O2U8MTAwJiYoZT0xMDApLGI+PTAmJmEodGhpcykuY3NzKHtcIi13ZWJraXQtZmlsdGVyXCI6XCJncmF5c2NhbGUoXCIrZCtcIilicmlnaHRuZXNzKFwiK2UrXCIlKVwiLGZpbHRlcjpcImdyYXlzY2FsZShcIitkK1wiKWJyaWdodG5lc3MoXCIrZStcIiUpXCJ9KX19KX0sTWF0ZXJpYWxpemUuc2hvd1N0YWdnZXJlZExpc3Q9ZnVuY3Rpb24oYil7dmFyIGM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpYz1hKGIpO2Vsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGIpcmV0dXJuO2M9Yn12YXIgZD0wO2MuZmluZChcImxpXCIpLnZlbG9jaXR5KHt0cmFuc2xhdGVYOlwiLTEwMHB4XCJ9LHtkdXJhdGlvbjowfSksYy5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykudmVsb2NpdHkoe29wYWNpdHk6XCIxXCIsdHJhbnNsYXRlWDpcIjBcIn0se2R1cmF0aW9uOjgwMCxkZWxheTpkLGVhc2luZzpbNjAsMTBdfSksZCs9MTIwfSl9LGEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7dmFyIGI9ITEsYz0hMTthKFwiLmRpc21pc3NhYmxlXCIpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmhhbW1lcih7cHJldmVudF9kZWZhdWx0OiExfSkuYmluZChcInBhblwiLGZ1bmN0aW9uKGQpe2lmKFwidG91Y2hcIj09PWQuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGU9YSh0aGlzKSxmPWQuZ2VzdHVyZS5kaXJlY3Rpb24sZz1kLmdlc3R1cmUuZGVsdGFYLGg9ZC5nZXN0dXJlLnZlbG9jaXR5WDtlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOmd9LHtkdXJhdGlvbjo1MCxxdWV1ZTohMSxlYXNpbmc6XCJlYXNlT3V0UXVhZFwifSksND09PWYmJihnPmUuaW5uZXJXaWR0aCgpLzJ8fGg8LS43NSkmJihiPSEwKSwyPT09ZiYmKGc8LTEqZS5pbm5lcldpZHRoKCkvMnx8aD4uNzUpJiYoYz0hMCl9fSkuYmluZChcInBhbmVuZFwiLGZ1bmN0aW9uKGQpe2lmKE1hdGguYWJzKGQuZ2VzdHVyZS5kZWx0YVgpPGEodGhpcykuaW5uZXJXaWR0aCgpLzImJihjPSExLGI9ITEpLFwidG91Y2hcIj09PWQuZ2VzdHVyZS5wb2ludGVyVHlwZSl7dmFyIGU9YSh0aGlzKTtpZihifHxjKXt2YXIgZjtmPWI/ZS5pbm5lcldpZHRoKCk6LTEqZS5pbm5lcldpZHRoKCksZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDpmfSx7ZHVyYXRpb246MTAwLHF1ZXVlOiExLGVhc2luZzpcImVhc2VPdXRRdWFkXCIsY29tcGxldGU6ZnVuY3Rpb24oKXtlLmNzcyhcImJvcmRlclwiLFwibm9uZVwiKSxlLnZlbG9jaXR5KHtoZWlnaHQ6MCxwYWRkaW5nOjB9LHtkdXJhdGlvbjoyMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIixjb21wbGV0ZTpmdW5jdGlvbigpe2UucmVtb3ZlKCl9fSl9fSl9ZWxzZSBlLnZlbG9jaXR5KHt0cmFuc2xhdGVYOjB9LHtkdXJhdGlvbjoxMDAscXVldWU6ITEsZWFzaW5nOlwiZWFzZU91dFF1YWRcIn0pO2I9ITEsYz0hMX19KX0pfSl9KGpRdWVyeSksZnVuY3Rpb24oYSl7dmFyIGI9ITE7TWF0ZXJpYWxpemUuc2Nyb2xsRmlyZT1mdW5jdGlvbihhKXt2YXIgYz1mdW5jdGlvbigpe2Zvcih2YXIgYj13aW5kb3cucGFnZVlPZmZzZXQrd2luZG93LmlubmVySGVpZ2h0LGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuc2VsZWN0b3IsZj1kLm9mZnNldCxnPWQuY2FsbGJhY2ssaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKG51bGwhPT1oKXt2YXIgaT1oLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQ7aWYoYj5pK2YmJmQuZG9uZSE9PSEwKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBnKWcuY2FsbCh0aGlzLGgpO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGcpe3ZhciBqPW5ldyBGdW5jdGlvbihnKTtqKGgpfWQuZG9uZT0hMH19fX0sZD1NYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpe2MoKX0sYS50aHJvdHRsZXx8MTAwKTtifHwod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixkKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGQpLGI9ITApLHNldFRpbWVvdXQoZCwwKX19KGpRdWVyeSksZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcInBpY2tlclwiLFtcImpxdWVyeVwiXSxhKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hKHJlcXVpcmUoXCJqcXVlcnlcIikpOnRoaXMuUGlja2VyPWEoalF1ZXJ5KX0oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihmLGcsaSxsKXtmdW5jdGlvbiBtKCl7cmV0dXJuIGIuXy5ub2RlKFwiZGl2XCIsYi5fLm5vZGUoXCJkaXZcIixiLl8ubm9kZShcImRpdlwiLGIuXy5ub2RlKFwiZGl2XCIseS5jb21wb25lbnQubm9kZXModC5vcGVuKSx2LmJveCksdi53cmFwKSx2LmZyYW1lKSx2LmhvbGRlcil9ZnVuY3Rpb24gbigpe3cuZGF0YShnLHkpLmFkZENsYXNzKHYuaW5wdXQpLmF0dHIoXCJ0YWJpbmRleFwiLC0xKS52YWwody5kYXRhKFwidmFsdWVcIik/eS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdCk6Zi52YWx1ZSksdS5lZGl0YWJsZXx8dy5vbihcImZvY3VzLlwiK3QuaWQrXCIgY2xpY2suXCIrdC5pZCxmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCkseS4kcm9vdC5lcSgwKS5mb2N1cygpfSkub24oXCJrZXlkb3duLlwiK3QuaWQscSksZShmLHtoYXNwb3B1cDohMCxleHBhbmRlZDohMSxyZWFkb25seTohMSxvd25zOmYuaWQrXCJfcm9vdFwifSl9ZnVuY3Rpb24gbygpe3kuJHJvb3Qub24oe2tleWRvd246cSxmb2N1c2luOmZ1bmN0aW9uKGEpe3kuJHJvb3QucmVtb3ZlQ2xhc3Modi5mb2N1c2VkKSxhLnN0b3BQcm9wYWdhdGlvbigpfSxcIm1vdXNlZG93biBjbGlja1wiOmZ1bmN0aW9uKGIpe3ZhciBjPWIudGFyZ2V0O2MhPXkuJHJvb3QuY2hpbGRyZW4oKVswXSYmKGIuc3RvcFByb3BhZ2F0aW9uKCksXCJtb3VzZWRvd25cIiE9Yi50eXBlfHxhKGMpLmlzKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb3B0aW9uXCIpfHwoYi5wcmV2ZW50RGVmYXVsdCgpLHkuJHJvb3QuZXEoMCkuZm9jdXMoKSkpfX0pLm9uKHtmb2N1czpmdW5jdGlvbigpe3cuYWRkQ2xhc3Modi50YXJnZXQpfSxibHVyOmZ1bmN0aW9uKCl7dy5yZW1vdmVDbGFzcyh2LnRhcmdldCl9fSkub24oXCJmb2N1cy50b09wZW5cIixyKS5vbihcImNsaWNrXCIsXCJbZGF0YS1waWNrXSwgW2RhdGEtbmF2XSwgW2RhdGEtY2xlYXJdLCBbZGF0YS1jbG9zZV1cIixmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmRhdGEoKSxkPWIuaGFzQ2xhc3Modi5uYXZEaXNhYmxlZCl8fGIuaGFzQ2xhc3Modi5kaXNhYmxlZCksZT1oKCk7ZT1lJiYoZS50eXBlfHxlLmhyZWYpLChkfHxlJiYhYS5jb250YWlucyh5LiRyb290WzBdLGUpKSYmeS4kcm9vdC5lcSgwKS5mb2N1cygpLCFkJiZjLm5hdj95LnNldChcImhpZ2hsaWdodFwiLHkuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0LHtuYXY6Yy5uYXZ9KTohZCYmXCJwaWNrXCJpbiBjP3kuc2V0KFwic2VsZWN0XCIsYy5waWNrKTpjLmNsZWFyP3kuY2xlYXIoKS5jbG9zZSghMCk6Yy5jbG9zZSYmeS5jbG9zZSghMCl9KSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMCl9ZnVuY3Rpb24gcCgpe3ZhciBiO3UuaGlkZGVuTmFtZT09PSEwPyhiPWYubmFtZSxmLm5hbWU9XCJcIik6KGI9W1wic3RyaW5nXCI9PXR5cGVvZiB1LmhpZGRlblByZWZpeD91LmhpZGRlblByZWZpeDpcIlwiLFwic3RyaW5nXCI9PXR5cGVvZiB1LmhpZGRlblN1ZmZpeD91LmhpZGRlblN1ZmZpeDpcIl9zdWJtaXRcIl0sYj1iWzBdK2YubmFtZStiWzFdKSx5Ll9oaWRkZW49YSgnPGlucHV0IHR5cGU9aGlkZGVuIG5hbWU9XCInK2IrJ1wiJysody5kYXRhKFwidmFsdWVcIil8fGYudmFsdWU/JyB2YWx1ZT1cIicreS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdFN1Ym1pdCkrJ1wiJzpcIlwiKStcIj5cIilbMF0sdy5vbihcImNoYW5nZS5cIit0LmlkLGZ1bmN0aW9uKCl7eS5faGlkZGVuLnZhbHVlPWYudmFsdWU/eS5nZXQoXCJzZWxlY3RcIix1LmZvcm1hdFN1Ym1pdCk6XCJcIn0pLHUuY29udGFpbmVyP2EodS5jb250YWluZXIpLmFwcGVuZCh5Ll9oaWRkZW4pOncuYWZ0ZXIoeS5faGlkZGVuKX1mdW5jdGlvbiBxKGEpe3ZhciBiPWEua2V5Q29kZSxjPS9eKDh8NDYpJC8udGVzdChiKTtyZXR1cm4gMjc9PWI/KHkuY2xvc2UoKSwhMSk6dm9pZCgoMzI9PWJ8fGN8fCF0Lm9wZW4mJnkuY29tcG9uZW50LmtleVtiXSkmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSxjP3kuY2xlYXIoKS5jbG9zZSgpOnkub3BlbigpKSl9ZnVuY3Rpb24gcihhKXthLnN0b3BQcm9wYWdhdGlvbigpLFwiZm9jdXNcIj09YS50eXBlJiZ5LiRyb290LmFkZENsYXNzKHYuZm9jdXNlZCkseS5vcGVuKCl9aWYoIWYpcmV0dXJuIGI7dmFyIHM9ITEsdD17aWQ6Zi5pZHx8XCJQXCIrTWF0aC5hYnMofn4oTWF0aC5yYW5kb20oKSpuZXcgRGF0ZSkpfSx1PWk/YS5leHRlbmQoITAse30saS5kZWZhdWx0cyxsKTpsfHx7fSx2PWEuZXh0ZW5kKHt9LGIua2xhc3NlcygpLHUua2xhc3MpLHc9YShmKSx4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhcnQoKX0seT14LnByb3RvdHlwZT17Y29uc3RydWN0b3I6eCwkbm9kZTp3LHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHQmJnQuc3RhcnQ/eToodC5tZXRob2RzPXt9LHQuc3RhcnQ9ITAsdC5vcGVuPSExLHQudHlwZT1mLnR5cGUsZi5hdXRvZm9jdXM9Zj09aCgpLGYucmVhZE9ubHk9IXUuZWRpdGFibGUsZi5pZD1mLmlkfHx0LmlkLFwidGV4dFwiIT1mLnR5cGUmJihmLnR5cGU9XCJ0ZXh0XCIpLHkuY29tcG9uZW50PW5ldyBpKHksdSkseS4kcm9vdD1hKGIuXy5ub2RlKFwiZGl2XCIsbSgpLHYucGlja2VyLCdpZD1cIicrZi5pZCsnX3Jvb3RcIiB0YWJpbmRleD1cIjBcIicpKSxvKCksdS5mb3JtYXRTdWJtaXQmJnAoKSxuKCksdS5jb250YWluZXI/YSh1LmNvbnRhaW5lcikuYXBwZW5kKHkuJHJvb3QpOncuYWZ0ZXIoeS4kcm9vdCkseS5vbih7c3RhcnQ6eS5jb21wb25lbnQub25TdGFydCxyZW5kZXI6eS5jb21wb25lbnQub25SZW5kZXIsc3RvcDp5LmNvbXBvbmVudC5vblN0b3Asb3Blbjp5LmNvbXBvbmVudC5vbk9wZW4sY2xvc2U6eS5jb21wb25lbnQub25DbG9zZSxzZXQ6eS5jb21wb25lbnQub25TZXR9KS5vbih7c3RhcnQ6dS5vblN0YXJ0LHJlbmRlcjp1Lm9uUmVuZGVyLHN0b3A6dS5vblN0b3Asb3Blbjp1Lm9uT3BlbixjbG9zZTp1Lm9uQ2xvc2Usc2V0OnUub25TZXR9KSxzPWMoeS4kcm9vdC5jaGlsZHJlbigpWzBdKSxmLmF1dG9mb2N1cyYmeS5vcGVuKCkseS50cmlnZ2VyKFwic3RhcnRcIikudHJpZ2dlcihcInJlbmRlclwiKSl9LHJlbmRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYT95LiRyb290Lmh0bWwobSgpKTp5LiRyb290LmZpbmQoXCIuXCIrdi5ib3gpLmh0bWwoeS5jb21wb25lbnQubm9kZXModC5vcGVuKSkseS50cmlnZ2VyKFwicmVuZGVyXCIpfSxzdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIHQuc3RhcnQ/KHkuY2xvc2UoKSx5Ll9oaWRkZW4mJnkuX2hpZGRlbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHkuX2hpZGRlbikseS4kcm9vdC5yZW1vdmUoKSx3LnJlbW92ZUNsYXNzKHYuaW5wdXQpLnJlbW92ZURhdGEoZyksc2V0VGltZW91dChmdW5jdGlvbigpe3cub2ZmKFwiLlwiK3QuaWQpfSwwKSxmLnR5cGU9dC50eXBlLGYucmVhZE9ubHk9ITEseS50cmlnZ2VyKFwic3RvcFwiKSx0Lm1ldGhvZHM9e30sdC5zdGFydD0hMSx5KTp5fSxvcGVuOmZ1bmN0aW9uKGMpe3JldHVybiB0Lm9wZW4/eToody5hZGRDbGFzcyh2LmFjdGl2ZSksZShmLFwiZXhwYW5kZWRcIiwhMCksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3QuYWRkQ2xhc3Modi5vcGVuZWQpLGUoeS4kcm9vdFswXSxcImhpZGRlblwiLCExKX0sMCksYyE9PSExJiYodC5vcGVuPSEwLHMmJmsuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsXCIrPVwiK2QoKSkseS4kcm9vdC5lcSgwKS5mb2N1cygpLGoub24oXCJjbGljay5cIit0LmlkK1wiIGZvY3VzaW4uXCIrdC5pZCxmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldDtiIT1mJiZiIT1kb2N1bWVudCYmMyE9YS53aGljaCYmeS5jbG9zZShiPT09eS4kcm9vdC5jaGlsZHJlbigpWzBdKX0pLm9uKFwia2V5ZG93bi5cIit0LmlkLGZ1bmN0aW9uKGMpe3ZhciBkPWMua2V5Q29kZSxlPXkuY29tcG9uZW50LmtleVtkXSxmPWMudGFyZ2V0OzI3PT1kP3kuY2xvc2UoITApOmYhPXkuJHJvb3RbMF18fCFlJiYxMyE9ZD9hLmNvbnRhaW5zKHkuJHJvb3RbMF0sZikmJjEzPT1kJiYoYy5wcmV2ZW50RGVmYXVsdCgpLGYuY2xpY2soKSk6KGMucHJldmVudERlZmF1bHQoKSxlP2IuXy50cmlnZ2VyKHkuY29tcG9uZW50LmtleS5nbyx5LFtiLl8udHJpZ2dlcihlKV0pOnkuJHJvb3QuZmluZChcIi5cIit2LmhpZ2hsaWdodGVkKS5oYXNDbGFzcyh2LmRpc2FibGVkKXx8eS5zZXQoXCJzZWxlY3RcIix5LmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCkuY2xvc2UoKSl9KSkseS50cmlnZ2VyKFwib3BlblwiKSl9LGNsb3NlOmZ1bmN0aW9uKGEpe3JldHVybiBhJiYoeS4kcm9vdC5vZmYoXCJmb2N1cy50b09wZW5cIikuZXEoMCkuZm9jdXMoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS4kcm9vdC5vbihcImZvY3VzLnRvT3BlblwiLHIpfSwwKSksdy5yZW1vdmVDbGFzcyh2LmFjdGl2ZSksZShmLFwiZXhwYW5kZWRcIiwhMSksc2V0VGltZW91dChmdW5jdGlvbigpe3kuJHJvb3QucmVtb3ZlQ2xhc3Modi5vcGVuZWQrXCIgXCIrdi5mb2N1c2VkKSxlKHkuJHJvb3RbMF0sXCJoaWRkZW5cIiwhMCl9LDApLHQub3Blbj8odC5vcGVuPSExLHMmJmsuY3NzKFwib3ZlcmZsb3dcIixcIlwiKS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsXCItPVwiK2QoKSksai5vZmYoXCIuXCIrdC5pZCkseS50cmlnZ2VyKFwiY2xvc2VcIikpOnl9LGNsZWFyOmZ1bmN0aW9uKGEpe3JldHVybiB5LnNldChcImNsZWFyXCIsbnVsbCxhKX0sc2V0OmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGc9YS5pc1BsYWluT2JqZWN0KGIpLGg9Zz9iOnt9O2lmKGQ9ZyYmYS5pc1BsYWluT2JqZWN0KGMpP2M6ZHx8e30sYil7Z3x8KGhbYl09Yyk7Zm9yKGUgaW4gaClmPWhbZV0sZSBpbiB5LmNvbXBvbmVudC5pdGVtJiYodm9pZCAwPT09ZiYmKGY9bnVsbCkseS5jb21wb25lbnQuc2V0KGUsZixkKSksXCJzZWxlY3RcIiE9ZSYmXCJjbGVhclwiIT1lfHx3LnZhbChcImNsZWFyXCI9PWU/XCJcIjp5LmdldChlLHUuZm9ybWF0KSkudHJpZ2dlcihcImNoYW5nZVwiKTt5LnJlbmRlcigpfXJldHVybiBkLm11dGVkP3k6eS50cmlnZ2VyKFwic2V0XCIsaCl9LGdldDpmdW5jdGlvbihhLGMpe2lmKGE9YXx8XCJ2YWx1ZVwiLG51bGwhPXRbYV0pcmV0dXJuIHRbYV07aWYoXCJ2YWx1ZVN1Ym1pdFwiPT1hKXtpZih5Ll9oaWRkZW4pcmV0dXJuIHkuX2hpZGRlbi52YWx1ZTthPVwidmFsdWVcIn1pZihcInZhbHVlXCI9PWEpcmV0dXJuIGYudmFsdWU7aWYoYSBpbiB5LmNvbXBvbmVudC5pdGVtKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYyl7dmFyIGQ9eS5jb21wb25lbnQuZ2V0KGEpO3JldHVybiBkP2IuXy50cmlnZ2VyKHkuY29tcG9uZW50LmZvcm1hdHMudG9TdHJpbmcseS5jb21wb25lbnQsW2MsZF0pOlwiXCJ9cmV0dXJuIHkuY29tcG9uZW50LmdldChhKX19LG9uOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGc9YS5pc1BsYWluT2JqZWN0KGIpLGg9Zz9iOnt9O2lmKGIpe2d8fChoW2JdPWMpO2ZvcihlIGluIGgpZj1oW2VdLGQmJihlPVwiX1wiK2UpLHQubWV0aG9kc1tlXT10Lm1ldGhvZHNbZV18fFtdLHQubWV0aG9kc1tlXS5wdXNoKGYpfXJldHVybiB5fSxvZmY6ZnVuY3Rpb24oKXt2YXIgYSxiLGM9YXJndW1lbnRzO2ZvcihhPTAsbmFtZXNDb3VudD1jLmxlbmd0aDthPG5hbWVzQ291bnQ7YSs9MSliPWNbYV0sYiBpbiB0Lm1ldGhvZHMmJmRlbGV0ZSB0Lm1ldGhvZHNbYl07cmV0dXJuIHl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgZD10Lm1ldGhvZHNbYV07ZCYmZC5tYXAoZnVuY3Rpb24oYSl7Yi5fLnRyaWdnZXIoYSx5LFtjXSl9KX07cmV0dXJuIGQoXCJfXCIrYSksZChhKSx5fX07cmV0dXJuIG5ldyB4fWZ1bmN0aW9uIGMoYSl7dmFyIGIsYz1cInBvc2l0aW9uXCI7cmV0dXJuIGEuY3VycmVudFN0eWxlP2I9YS5jdXJyZW50U3R5bGVbY106d2luZG93LmdldENvbXB1dGVkU3R5bGUmJihiPWdldENvbXB1dGVkU3R5bGUoYSlbY10pLFwiZml4ZWRcIj09Yn1mdW5jdGlvbiBkKCl7aWYoay5oZWlnaHQoKTw9aS5oZWlnaHQoKSlyZXR1cm4gMDt2YXIgYj1hKCc8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MTAwcHhcIiAvPicpLmFwcGVuZFRvKFwiYm9keVwiKSxjPWJbMF0ub2Zmc2V0V2lkdGg7Yi5jc3MoXCJvdmVyZmxvd1wiLFwic2Nyb2xsXCIpO3ZhciBkPWEoJzxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz4nKS5hcHBlbmRUbyhiKSxlPWRbMF0ub2Zmc2V0V2lkdGg7cmV0dXJuIGIucmVtb3ZlKCksYy1lfWZ1bmN0aW9uIGUoYixjLGQpe2lmKGEuaXNQbGFpbk9iamVjdChjKSlmb3IodmFyIGUgaW4gYylmKGIsZSxjW2VdKTtlbHNlIGYoYixjLGQpfWZ1bmN0aW9uIGYoYSxiLGMpe2Euc2V0QXR0cmlidXRlKChcInJvbGVcIj09Yj9cIlwiOlwiYXJpYS1cIikrYixjKX1mdW5jdGlvbiBnKGIsYyl7YS5pc1BsYWluT2JqZWN0KGIpfHwoYj17YXR0cmlidXRlOmN9KSxjPVwiXCI7Zm9yKHZhciBkIGluIGIpe3ZhciBlPShcInJvbGVcIj09ZD9cIlwiOlwiYXJpYS1cIikrZCxmPWJbZF07Yys9bnVsbD09Zj9cIlwiOmUrJz1cIicrYltkXSsnXCInfXJldHVybiBjfWZ1bmN0aW9uIGgoKXt0cnl7cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX12YXIgaT1hKHdpbmRvdyksaj1hKGRvY3VtZW50KSxrPWEoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtyZXR1cm4gYi5rbGFzc2VzPWZ1bmN0aW9uKGEpe3JldHVybiBhPWF8fFwicGlja2VyXCIse3BpY2tlcjphLG9wZW5lZDphK1wiLS1vcGVuZWRcIixmb2N1c2VkOmErXCItLWZvY3VzZWRcIixpbnB1dDphK1wiX19pbnB1dFwiLGFjdGl2ZTphK1wiX19pbnB1dC0tYWN0aXZlXCIsdGFyZ2V0OmErXCJfX2lucHV0LS10YXJnZXRcIixob2xkZXI6YStcIl9faG9sZGVyXCIsZnJhbWU6YStcIl9fZnJhbWVcIix3cmFwOmErXCJfX3dyYXBcIixib3g6YStcIl9fYm94XCJ9fSxiLl89e2dyb3VwOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVwiXCIsZT1iLl8udHJpZ2dlcihhLm1pbixhKTtlPD1iLl8udHJpZ2dlcihhLm1heCxhLFtlXSk7ZSs9YS5pKWM9Yi5fLnRyaWdnZXIoYS5pdGVtLGEsW2VdKSxkKz1iLl8ubm9kZShhLm5vZGUsY1swXSxjWzFdLGNbMl0pO3JldHVybiBkfSxub2RlOmZ1bmN0aW9uKGIsYyxkLGUpe3JldHVybiBjPyhjPWEuaXNBcnJheShjKT9jLmpvaW4oXCJcIik6YyxkPWQ/JyBjbGFzcz1cIicrZCsnXCInOlwiXCIsZT1lP1wiIFwiK2U6XCJcIixcIjxcIitiK2QrZStcIj5cIitjK1wiPC9cIitiK1wiPlwiKTpcIlwifSxsZWFkOmZ1bmN0aW9uKGEpe3JldHVybihhPDEwP1wiMFwiOlwiXCIpK2F9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5hcHBseShiLGN8fFtdKTphfSxkaWdpdHM6ZnVuY3Rpb24oYSl7cmV0dXJuL1xcZC8udGVzdChhWzFdKT8yOjF9LGlzRGF0ZTpmdW5jdGlvbihhKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJEYXRlXCIpPi0xJiZ0aGlzLmlzSW50ZWdlcihhLmdldERhdGUoKSl9LGlzSW50ZWdlcjpmdW5jdGlvbihhKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJOdW1iZXJcIik+LTEmJmElMT09PTB9LGFyaWFBdHRyOmd9LGIuZXh0ZW5kPWZ1bmN0aW9uKGMsZCl7YS5mbltjXT1mdW5jdGlvbihlLGYpe3ZhciBnPXRoaXMuZGF0YShjKTtyZXR1cm5cInBpY2tlclwiPT1lP2c6ZyYmXCJzdHJpbmdcIj09dHlwZW9mIGU/Yi5fLnRyaWdnZXIoZ1tlXSxnLFtmXSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGY9YSh0aGlzKTtmLmRhdGEoYyl8fG5ldyBiKHRoaXMsYyxkLGUpfSl9LGEuZm5bY10uZGVmYXVsdHM9ZC5kZWZhdWx0c30sYn0pLGZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicGlja2VyXCIsXCJqcXVlcnlcIl0sYSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwiLi9waWNrZXIuanNcIikscmVxdWlyZShcImpxdWVyeVwiKSk6YShQaWNrZXIsalF1ZXJ5KX0oZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7dmFyIGM9dGhpcyxkPWEuJG5vZGVbMF0sZT1kLnZhbHVlLGY9YS4kbm9kZS5kYXRhKFwidmFsdWVcIiksZz1mfHxlLGg9Zj9iLmZvcm1hdFN1Ym1pdDpiLmZvcm1hdCxpPWZ1bmN0aW9uKCl7cmV0dXJuIGQuY3VycmVudFN0eWxlP1wicnRsXCI9PWQuY3VycmVudFN0eWxlLmRpcmVjdGlvbjpcInJ0bFwiPT1nZXRDb21wdXRlZFN0eWxlKGEuJHJvb3RbMF0pLmRpcmVjdGlvbn07Yy5zZXR0aW5ncz1iLGMuJG5vZGU9YS4kbm9kZSxjLnF1ZXVlPXttaW46XCJtZWFzdXJlIGNyZWF0ZVwiLG1heDpcIm1lYXN1cmUgY3JlYXRlXCIsbm93Olwibm93IGNyZWF0ZVwiLHNlbGVjdDpcInBhcnNlIGNyZWF0ZSB2YWxpZGF0ZVwiLGhpZ2hsaWdodDpcInBhcnNlIG5hdmlnYXRlIGNyZWF0ZSB2YWxpZGF0ZVwiLHZpZXc6XCJwYXJzZSBjcmVhdGUgdmFsaWRhdGUgdmlld3NldFwiLGRpc2FibGU6XCJkZWFjdGl2YXRlXCIsZW5hYmxlOlwiYWN0aXZhdGVcIn0sYy5pdGVtPXt9LGMuaXRlbS5jbGVhcj1udWxsLGMuaXRlbS5kaXNhYmxlPShiLmRpc2FibGV8fFtdKS5zbGljZSgwKSxjLml0ZW0uZW5hYmxlPS1mdW5jdGlvbihhKXtyZXR1cm4gYVswXT09PSEwP2Euc2hpZnQoKTotMX0oYy5pdGVtLmRpc2FibGUpLGMuc2V0KFwibWluXCIsYi5taW4pLnNldChcIm1heFwiLGIubWF4KS5zZXQoXCJub3dcIiksZz9jLnNldChcInNlbGVjdFwiLGcse2Zvcm1hdDpofSk6Yy5zZXQoXCJzZWxlY3RcIixudWxsKS5zZXQoXCJoaWdobGlnaHRcIixjLml0ZW0ubm93KSxjLmtleT17NDA6NywzODotNywzOTpmdW5jdGlvbigpe3JldHVybiBpKCk/LTE6MX0sMzc6ZnVuY3Rpb24oKXtyZXR1cm4gaSgpPzE6LTF9LGdvOmZ1bmN0aW9uKGEpe3ZhciBiPWMuaXRlbS5oaWdobGlnaHQsZD1uZXcgRGF0ZShiLnllYXIsYi5tb250aCxiLmRhdGUrYSk7Yy5zZXQoXCJoaWdobGlnaHRcIixkLHtpbnRlcnZhbDphfSksdGhpcy5yZW5kZXIoKX19LGEub24oXCJyZW5kZXJcIixmdW5jdGlvbigpe2EuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdE1vbnRoKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dGhpcy52YWx1ZTtjJiYoYS5zZXQoXCJoaWdobGlnaHRcIixbYS5nZXQoXCJ2aWV3XCIpLnllYXIsYyxhLmdldChcImhpZ2hsaWdodFwiKS5kYXRlXSksYS4kcm9vdC5maW5kKFwiLlwiK2Iua2xhc3Muc2VsZWN0TW9udGgpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KSxhLiRyb290LmZpbmQoXCIuXCIrYi5rbGFzcy5zZWxlY3RZZWFyKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dGhpcy52YWx1ZTtjJiYoYS5zZXQoXCJoaWdobGlnaHRcIixbYyxhLmdldChcInZpZXdcIikubW9udGgsYS5nZXQoXCJoaWdobGlnaHRcIikuZGF0ZV0pLGEuJHJvb3QuZmluZChcIi5cIitiLmtsYXNzLnNlbGVjdFllYXIpLnRyaWdnZXIoXCJmb2N1c1wiKSl9KX0sMSkub24oXCJvcGVuXCIsZnVuY3Rpb24oKXt2YXIgZD1cIlwiO2MuZGlzYWJsZWQoYy5nZXQoXCJub3dcIikpJiYoZD1cIjpub3QoLlwiK2Iua2xhc3MuYnV0dG9uVG9kYXkrXCIpXCIpLGEuJHJvb3QuZmluZChcImJ1dHRvblwiK2QrXCIsIHNlbGVjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwhMSl9LDEpLm9uKFwiY2xvc2VcIixmdW5jdGlvbigpe2EuJHJvb3QuZmluZChcImJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCEwKX0sMSl9dmFyIGQ9NyxlPTYsZj1hLl87Yy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9ZC5pdGVtO3JldHVybiBudWxsPT09Yj8oXCJjbGVhclwiPT1hJiYoYT1cInNlbGVjdFwiKSxlW2FdPWIsZCk6KGVbXCJlbmFibGVcIj09YT9cImRpc2FibGVcIjpcImZsaXBcIj09YT9cImVuYWJsZVwiOmFdPWQucXVldWVbYV0uc3BsaXQoXCIgXCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gYj1kW2VdKGEsYixjKX0pLnBvcCgpLFwic2VsZWN0XCI9PWE/ZC5zZXQoXCJoaWdobGlnaHRcIixlLnNlbGVjdCxjKTpcImhpZ2hsaWdodFwiPT1hP2Quc2V0KFwidmlld1wiLGUuaGlnaGxpZ2h0LGMpOmEubWF0Y2goL14oZmxpcHxtaW58bWF4fGRpc2FibGV8ZW5hYmxlKSQvKSYmKGUuc2VsZWN0JiZkLmRpc2FibGVkKGUuc2VsZWN0KSYmZC5zZXQoXCJzZWxlY3RcIixlLnNlbGVjdCxjKSxcbmUuaGlnaGxpZ2h0JiZkLmRpc2FibGVkKGUuaGlnaGxpZ2h0KSYmZC5zZXQoXCJoaWdobGlnaHRcIixlLmhpZ2hsaWdodCxjKSksZCl9LGMucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pdGVtW2FdfSxjLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGc9dGhpcztyZXR1cm4gYz12b2lkIDA9PT1jP2E6YyxjPT0tKDEvMCl8fGM9PTEvMD9lPWM6Yi5pc1BsYWluT2JqZWN0KGMpJiZmLmlzSW50ZWdlcihjLnBpY2spP2M9Yy5vYmo6Yi5pc0FycmF5KGMpPyhjPW5ldyBEYXRlKGNbMF0sY1sxXSxjWzJdKSxjPWYuaXNEYXRlKGMpP2M6Zy5jcmVhdGUoKS5vYmopOmM9Zi5pc0ludGVnZXIoYyl8fGYuaXNEYXRlKGMpP2cubm9ybWFsaXplKG5ldyBEYXRlKGMpLGQpOmcubm93KGEsYyxkKSx7eWVhcjplfHxjLmdldEZ1bGxZZWFyKCksbW9udGg6ZXx8Yy5nZXRNb250aCgpLGRhdGU6ZXx8Yy5nZXREYXRlKCksZGF5OmV8fGMuZ2V0RGF5KCksb2JqOmV8fGMscGljazplfHxjLmdldFRpbWUoKX19LGMucHJvdG90eXBlLmNyZWF0ZVJhbmdlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcyxlPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09ITB8fGIuaXNBcnJheShhKXx8Zi5pc0RhdGUoYSk/ZC5jcmVhdGUoYSk6YX07cmV0dXJuIGYuaXNJbnRlZ2VyKGEpfHwoYT1lKGEpKSxmLmlzSW50ZWdlcihjKXx8KGM9ZShjKSksZi5pc0ludGVnZXIoYSkmJmIuaXNQbGFpbk9iamVjdChjKT9hPVtjLnllYXIsYy5tb250aCxjLmRhdGUrYV06Zi5pc0ludGVnZXIoYykmJmIuaXNQbGFpbk9iamVjdChhKSYmKGM9W2EueWVhcixhLm1vbnRoLGEuZGF0ZStjXSkse2Zyb206ZShhKSx0bzplKGMpfX0sYy5wcm90b3R5cGUud2l0aGluUmFuZ2U9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT10aGlzLmNyZWF0ZVJhbmdlKGEuZnJvbSxhLnRvKSxiLnBpY2s+PWEuZnJvbS5waWNrJiZiLnBpY2s8PWEudG8ucGlja30sYy5wcm90b3R5cGUub3ZlcmxhcFJhbmdlcz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIGE9Yy5jcmVhdGVSYW5nZShhLmZyb20sYS50byksYj1jLmNyZWF0ZVJhbmdlKGIuZnJvbSxiLnRvKSxjLndpdGhpblJhbmdlKGEsYi5mcm9tKXx8Yy53aXRoaW5SYW5nZShhLGIudG8pfHxjLndpdGhpblJhbmdlKGIsYS5mcm9tKXx8Yy53aXRoaW5SYW5nZShiLGEudG8pfSxjLnByb3RvdHlwZS5ub3c9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPW5ldyBEYXRlLGMmJmMucmVsJiZiLnNldERhdGUoYi5nZXREYXRlKCkrYy5yZWwpLHRoaXMubm9ybWFsaXplKGIsYyl9LGMucHJvdG90eXBlLm5hdmlnYXRlPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmLGcsaCxpPWIuaXNBcnJheShjKSxqPWIuaXNQbGFpbk9iamVjdChjKSxrPXRoaXMuaXRlbS52aWV3O2lmKGl8fGope2ZvcihqPyhmPWMueWVhcixnPWMubW9udGgsaD1jLmRhdGUpOihmPStjWzBdLGc9K2NbMV0saD0rY1syXSksZCYmZC5uYXYmJmsmJmsubW9udGghPT1nJiYoZj1rLnllYXIsZz1rLm1vbnRoKSxlPW5ldyBEYXRlKGYsZysoZCYmZC5uYXY/ZC5uYXY6MCksMSksZj1lLmdldEZ1bGxZZWFyKCksZz1lLmdldE1vbnRoKCk7bmV3IERhdGUoZixnLGgpLmdldE1vbnRoKCkhPT1nOyloLT0xO2M9W2YsZyxoXX1yZXR1cm4gY30sYy5wcm90b3R5cGUubm9ybWFsaXplPWZ1bmN0aW9uKGEpe3JldHVybiBhLnNldEhvdXJzKDAsMCwwLDApLGF9LGMucHJvdG90eXBlLm1lYXN1cmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBiP1wic3RyaW5nXCI9PXR5cGVvZiBiP2I9Yy5wYXJzZShhLGIpOmYuaXNJbnRlZ2VyKGIpJiYoYj1jLm5vdyhhLGIse3JlbDpifSkpOmI9XCJtaW5cIj09YT8tKDEvMCk6MS8wLGJ9LGMucHJvdG90eXBlLnZpZXdzZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5jcmVhdGUoW2IueWVhcixiLm1vbnRoLDFdKX0sYy5wcm90b3R5cGUudmFsaWRhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGcsaCxpLGo9dGhpcyxrPWMsbD1kJiZkLmludGVydmFsP2QuaW50ZXJ2YWw6MSxtPWouaXRlbS5lbmFibGU9PT0tMSxuPWouaXRlbS5taW4sbz1qLml0ZW0ubWF4LHA9bSYmai5pdGVtLmRpc2FibGUuZmlsdGVyKGZ1bmN0aW9uKGEpe2lmKGIuaXNBcnJheShhKSl7dmFyIGQ9ai5jcmVhdGUoYSkucGljaztkPGMucGljaz9lPSEwOmQ+Yy5waWNrJiYoZz0hMCl9cmV0dXJuIGYuaXNJbnRlZ2VyKGEpfSkubGVuZ3RoO2lmKCghZHx8IWQubmF2KSYmKCFtJiZqLmRpc2FibGVkKGMpfHxtJiZqLmRpc2FibGVkKGMpJiYocHx8ZXx8Zyl8fCFtJiYoYy5waWNrPD1uLnBpY2t8fGMucGljaz49by5waWNrKSkpZm9yKG0mJiFwJiYoIWcmJmw+MHx8IWUmJmw8MCkmJihsKj0tMSk7ai5kaXNhYmxlZChjKSYmKE1hdGguYWJzKGwpPjEmJihjLm1vbnRoPGsubW9udGh8fGMubW9udGg+ay5tb250aCkmJihjPWssbD1sPjA/MTotMSksYy5waWNrPD1uLnBpY2s/KGg9ITAsbD0xLGM9ai5jcmVhdGUoW24ueWVhcixuLm1vbnRoLG4uZGF0ZSsoYy5waWNrPT09bi5waWNrPzA6LTEpXSkpOmMucGljaz49by5waWNrJiYoaT0hMCxsPS0xLGM9ai5jcmVhdGUoW28ueWVhcixvLm1vbnRoLG8uZGF0ZSsoYy5waWNrPT09by5waWNrPzA6MSldKSksIWh8fCFpKTspYz1qLmNyZWF0ZShbYy55ZWFyLGMubW9udGgsYy5kYXRlK2xdKTtyZXR1cm4gY30sYy5wcm90b3R5cGUuZGlzYWJsZWQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPWMuaXRlbS5kaXNhYmxlLmZpbHRlcihmdW5jdGlvbihkKXtyZXR1cm4gZi5pc0ludGVnZXIoZCk/YS5kYXk9PT0oYy5zZXR0aW5ncy5maXJzdERheT9kOmQtMSklNzpiLmlzQXJyYXkoZCl8fGYuaXNEYXRlKGQpP2EucGljaz09PWMuY3JlYXRlKGQpLnBpY2s6Yi5pc1BsYWluT2JqZWN0KGQpP2Mud2l0aGluUmFuZ2UoZCxhKTp2b2lkIDB9KTtyZXR1cm4gZD1kLmxlbmd0aCYmIWQuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBiLmlzQXJyYXkoYSkmJlwiaW52ZXJ0ZWRcIj09YVszXXx8Yi5pc1BsYWluT2JqZWN0KGEpJiZhLmludmVydGVkfSkubGVuZ3RoLGMuaXRlbS5lbmFibGU9PT0tMT8hZDpkfHxhLnBpY2s8Yy5pdGVtLm1pbi5waWNrfHxhLnBpY2s+Yy5pdGVtLm1heC5waWNrfSxjLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPXt9O3JldHVybiBiJiZcInN0cmluZ1wiPT10eXBlb2YgYj8oYyYmYy5mb3JtYXR8fChjPWN8fHt9LGMuZm9ybWF0PWQuc2V0dGluZ3MuZm9ybWF0KSxkLmZvcm1hdHMudG9BcnJheShjLmZvcm1hdCkubWFwKGZ1bmN0aW9uKGEpe3ZhciBjPWQuZm9ybWF0c1thXSxnPWM/Zi50cmlnZ2VyKGMsZCxbYixlXSk6YS5yZXBsYWNlKC9eIS8sXCJcIikubGVuZ3RoO2MmJihlW2FdPWIuc3Vic3RyKDAsZykpLGI9Yi5zdWJzdHIoZyl9KSxbZS55eXl5fHxlLnl5LCsoZS5tbXx8ZS5tKS0xLGUuZGR8fGUuZF0pOmJ9LGMucHJvdG90eXBlLmZvcm1hdHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYixjKXt2YXIgZD1hLm1hdGNoKC9cXHcrLylbMF07cmV0dXJuIGMubW18fGMubXx8KGMubT1iLmluZGV4T2YoZCkrMSksZC5sZW5ndGh9ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5tYXRjaCgvXFx3Ky8pWzBdLmxlbmd0aH1yZXR1cm57ZDpmdW5jdGlvbihhLGIpe3JldHVybiBhP2YuZGlnaXRzKGEpOmIuZGF0ZX0sZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOmYubGVhZChiLmRhdGUpfSxkZGQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT9iKGEpOnRoaXMuc2V0dGluZ3Mud2Vla2RheXNTaG9ydFtjLmRheV19LGRkZGQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT9iKGEpOnRoaXMuc2V0dGluZ3Mud2Vla2RheXNGdWxsW2MuZGF5XX0sbTpmdW5jdGlvbihhLGIpe3JldHVybiBhP2YuZGlnaXRzKGEpOmIubW9udGgrMX0sbW06ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOmYubGVhZChiLm1vbnRoKzEpfSxtbW06ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnNldHRpbmdzLm1vbnRoc1Nob3J0O3JldHVybiBiP2EoYixkLGMpOmRbYy5tb250aF19LG1tbW06ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnNldHRpbmdzLm1vbnRoc0Z1bGw7cmV0dXJuIGI/YShiLGQsYyk6ZFtjLm1vbnRoXX0seXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT8yOihcIlwiK2IueWVhcikuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT80OmIueWVhcn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gYS5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyl9LHRvU3RyaW5nOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5mb3JtYXRzLnRvQXJyYXkoYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBmLnRyaWdnZXIoYy5mb3JtYXRzW2FdLGMsWzAsYl0pfHxhLnJlcGxhY2UoL14hLyxcIlwiKX0pLmpvaW4oXCJcIil9fX0oKSxjLnByb3RvdHlwZS5pc0RhdGVFeGFjdD1mdW5jdGlvbihhLGMpe3ZhciBkPXRoaXM7cmV0dXJuIGYuaXNJbnRlZ2VyKGEpJiZmLmlzSW50ZWdlcihjKXx8XCJib29sZWFuXCI9PXR5cGVvZiBhJiZcImJvb2xlYW5cIj09dHlwZW9mIGM/YT09PWM6KGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSkpJiYoZi5pc0RhdGUoYyl8fGIuaXNBcnJheShjKSk/ZC5jcmVhdGUoYSkucGljaz09PWQuY3JlYXRlKGMpLnBpY2s6ISghYi5pc1BsYWluT2JqZWN0KGEpfHwhYi5pc1BsYWluT2JqZWN0KGMpKSYmKGQuaXNEYXRlRXhhY3QoYS5mcm9tLGMuZnJvbSkmJmQuaXNEYXRlRXhhY3QoYS50byxjLnRvKSl9LGMucHJvdG90eXBlLmlzRGF0ZU92ZXJsYXA9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5zZXR0aW5ncy5maXJzdERheT8xOjA7cmV0dXJuIGYuaXNJbnRlZ2VyKGEpJiYoZi5pc0RhdGUoYyl8fGIuaXNBcnJheShjKSk/KGE9YSU3K2UsYT09PWQuY3JlYXRlKGMpLmRheSsxKTpmLmlzSW50ZWdlcihjKSYmKGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSkpPyhjPWMlNytlLGM9PT1kLmNyZWF0ZShhKS5kYXkrMSk6ISghYi5pc1BsYWluT2JqZWN0KGEpfHwhYi5pc1BsYWluT2JqZWN0KGMpKSYmZC5vdmVybGFwUmFuZ2VzKGEsYyl9LGMucHJvdG90eXBlLmZsaXBFbmFibGU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5pdGVtO2IuZW5hYmxlPWF8fChiLmVuYWJsZT09LTE/MTotMSl9LGMucHJvdG90eXBlLmRlYWN0aXZhdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5pdGVtLmRpc2FibGUuc2xpY2UoMCk7cmV0dXJuXCJmbGlwXCI9PWM/ZC5mbGlwRW5hYmxlKCk6Yz09PSExPyhkLmZsaXBFbmFibGUoMSksZT1bXSk6Yz09PSEwPyhkLmZsaXBFbmFibGUoLTEpLGU9W10pOmMubWFwKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxnPTA7ZzxlLmxlbmd0aDtnKz0xKWlmKGQuaXNEYXRlRXhhY3QoYSxlW2ddKSl7Yz0hMDticmVha31jfHwoZi5pc0ludGVnZXIoYSl8fGYuaXNEYXRlKGEpfHxiLmlzQXJyYXkoYSl8fGIuaXNQbGFpbk9iamVjdChhKSYmYS5mcm9tJiZhLnRvKSYmZS5wdXNoKGEpfSksZX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLGU9ZC5pdGVtLmRpc2FibGUsZz1lLmxlbmd0aDtyZXR1cm5cImZsaXBcIj09Yz9kLmZsaXBFbmFibGUoKTpjPT09ITA/KGQuZmxpcEVuYWJsZSgxKSxlPVtdKTpjPT09ITE/KGQuZmxpcEVuYWJsZSgtMSksZT1bXSk6Yy5tYXAoZnVuY3Rpb24oYSl7dmFyIGMsaCxpLGo7Zm9yKGk9MDtpPGc7aSs9MSl7aWYoaD1lW2ldLGQuaXNEYXRlRXhhY3QoaCxhKSl7Yz1lW2ldPW51bGwsaj0hMDticmVha31pZihkLmlzRGF0ZU92ZXJsYXAoaCxhKSl7Yi5pc1BsYWluT2JqZWN0KGEpPyhhLmludmVydGVkPSEwLGM9YSk6Yi5pc0FycmF5KGEpPyhjPWEsY1szXXx8Yy5wdXNoKFwiaW52ZXJ0ZWRcIikpOmYuaXNEYXRlKGEpJiYoYz1bYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSxcImludmVydGVkXCJdKTticmVha319aWYoYylmb3IoaT0wO2k8ZztpKz0xKWlmKGQuaXNEYXRlRXhhY3QoZVtpXSxhKSl7ZVtpXT1udWxsO2JyZWFrfWlmKGopZm9yKGk9MDtpPGc7aSs9MSlpZihkLmlzRGF0ZU92ZXJsYXAoZVtpXSxhKSl7ZVtpXT1udWxsO2JyZWFrfWMmJmUucHVzaChjKX0pLGUuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hfSl9LGMucHJvdG90eXBlLm5vZGVzPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLnNldHRpbmdzLGc9Yi5pdGVtLGg9Zy5ub3csaT1nLnNlbGVjdCxqPWcuaGlnaGxpZ2h0LGs9Zy52aWV3LGw9Zy5kaXNhYmxlLG09Zy5taW4sbj1nLm1heCxvPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGMuZmlyc3REYXkmJihhLnB1c2goYS5zaGlmdCgpKSxiLnB1c2goYi5zaGlmdCgpKSksZi5ub2RlKFwidGhlYWRcIixmLm5vZGUoXCJ0clwiLGYuZ3JvdXAoe21pbjowLG1heDpkLTEsaToxLG5vZGU6XCJ0aFwiLGl0ZW06ZnVuY3Rpb24oZCl7cmV0dXJuW2FbZF0sYy5rbGFzcy53ZWVrZGF5cywnc2NvcGU9Y29sIHRpdGxlPVwiJytiW2RdKydcIiddfX0pKSl9KChjLnNob3dXZWVrZGF5c0Z1bGw/Yy53ZWVrZGF5c0Z1bGw6Yy53ZWVrZGF5c0xldHRlcikuc2xpY2UoMCksYy53ZWVrZGF5c0Z1bGwuc2xpY2UoMCkpLHA9ZnVuY3Rpb24oYSl7cmV0dXJuIGYubm9kZShcImRpdlwiLFwiIFwiLGMua2xhc3NbXCJuYXZcIisoYT9cIk5leHRcIjpcIlByZXZcIildKyhhJiZrLnllYXI+PW4ueWVhciYmay5tb250aD49bi5tb250aHx8IWEmJmsueWVhcjw9bS55ZWFyJiZrLm1vbnRoPD1tLm1vbnRoP1wiIFwiK2Mua2xhc3MubmF2RGlzYWJsZWQ6XCJcIiksXCJkYXRhLW5hdj1cIisoYXx8LTEpK1wiIFwiK2YuYXJpYUF0dHIoe3JvbGU6XCJidXR0b25cIixjb250cm9sczpiLiRub2RlWzBdLmlkK1wiX3RhYmxlXCJ9KSsnIHRpdGxlPVwiJysoYT9jLmxhYmVsTW9udGhOZXh0OmMubGFiZWxNb250aFByZXYpKydcIicpfSxxPWZ1bmN0aW9uKGQpe3ZhciBlPWMuc2hvd01vbnRoc1Nob3J0P2MubW9udGhzU2hvcnQ6Yy5tb250aHNGdWxsO3JldHVyblwic2hvcnRfbW9udGhzXCI9PWQmJihlPWMubW9udGhzU2hvcnQpLGMuc2VsZWN0TW9udGhzJiZ2b2lkIDA9PWQ/Zi5ub2RlKFwic2VsZWN0XCIsZi5ncm91cCh7bWluOjAsbWF4OjExLGk6MSxub2RlOlwib3B0aW9uXCIsaXRlbTpmdW5jdGlvbihhKXtyZXR1cm5bZVthXSwwLFwidmFsdWU9XCIrYSsoay5tb250aD09YT9cIiBzZWxlY3RlZFwiOlwiXCIpKyhrLnllYXI9PW0ueWVhciYmYTxtLm1vbnRofHxrLnllYXI9PW4ueWVhciYmYT5uLm1vbnRoP1wiIGRpc2FibGVkXCI6XCJcIildfX0pLGMua2xhc3Muc2VsZWN0TW9udGgrXCIgYnJvd3Nlci1kZWZhdWx0XCIsKGE/XCJcIjpcImRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInK2MubGFiZWxNb250aFNlbGVjdCsnXCInKTpcInNob3J0X21vbnRoc1wiPT1kP251bGwhPWk/Zi5ub2RlKFwiZGl2XCIsZVtpLm1vbnRoXSk6Zi5ub2RlKFwiZGl2XCIsZVtrLm1vbnRoXSk6Zi5ub2RlKFwiZGl2XCIsZVtrLm1vbnRoXSxjLmtsYXNzLm1vbnRoKX0scj1mdW5jdGlvbihkKXt2YXIgZT1rLnllYXIsZz1jLnNlbGVjdFllYXJzPT09ITA/NTp+fihjLnNlbGVjdFllYXJzLzIpO2lmKGcpe3ZhciBoPW0ueWVhcixpPW4ueWVhcixqPWUtZyxsPWUrZztpZihoPmomJihsKz1oLWosaj1oKSxpPGwpe3ZhciBvPWotaCxwPWwtaTtqLT1vPnA/cDpvLGw9aX1pZihjLnNlbGVjdFllYXJzJiZ2b2lkIDA9PWQpcmV0dXJuIGYubm9kZShcInNlbGVjdFwiLGYuZ3JvdXAoe21pbjpqLG1heDpsLGk6MSxub2RlOlwib3B0aW9uXCIsaXRlbTpmdW5jdGlvbihhKXtyZXR1cm5bYSwwLFwidmFsdWU9XCIrYSsoZT09YT9cIiBzZWxlY3RlZFwiOlwiXCIpXX19KSxjLmtsYXNzLnNlbGVjdFllYXIrXCIgYnJvd3Nlci1kZWZhdWx0XCIsKGE/XCJcIjpcImRpc2FibGVkXCIpK1wiIFwiK2YuYXJpYUF0dHIoe2NvbnRyb2xzOmIuJG5vZGVbMF0uaWQrXCJfdGFibGVcIn0pKycgdGl0bGU9XCInK2MubGFiZWxZZWFyU2VsZWN0KydcIicpfXJldHVyblwicmF3XCI9PWQ/Zi5ub2RlKFwiZGl2XCIsZSk6Zi5ub2RlKFwiZGl2XCIsZSxjLmtsYXNzLnllYXIpfTtyZXR1cm4gY3JlYXRlRGF5TGFiZWw9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9aT9mLm5vZGUoXCJkaXZcIixpLmRhdGUpOmYubm9kZShcImRpdlwiLGguZGF0ZSl9LGNyZWF0ZVdlZWtkYXlMYWJlbD1mdW5jdGlvbigpe3ZhciBhO2E9bnVsbCE9aT9pLmRheTpoLmRheTt2YXIgYj1jLndlZWtkYXlzRnVsbFthXTtyZXR1cm4gYn0sZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiZGl2XCIsY3JlYXRlV2Vla2RheUxhYmVsKCksXCJwaWNrZXJfX3dlZWtkYXktZGlzcGxheVwiKStmLm5vZGUoXCJkaXZcIixxKFwic2hvcnRfbW9udGhzXCIpLGMua2xhc3MubW9udGhfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIsY3JlYXRlRGF5TGFiZWwoKSxjLmtsYXNzLmRheV9kaXNwbGF5KStmLm5vZGUoXCJkaXZcIixyKFwicmF3XCIpLGMua2xhc3MueWVhcl9kaXNwbGF5KSxjLmtsYXNzLmRhdGVfZGlzcGxheSkrZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiZGl2XCIsKGMuc2VsZWN0WWVhcnM/cSgpK3IoKTpxKCkrcigpKStwKCkrcCgxKSxjLmtsYXNzLmhlYWRlcikrZi5ub2RlKFwidGFibGVcIixvK2Yubm9kZShcInRib2R5XCIsZi5ncm91cCh7bWluOjAsbWF4OmUtMSxpOjEsbm9kZTpcInRyXCIsaXRlbTpmdW5jdGlvbihhKXt2YXIgZT1jLmZpcnN0RGF5JiYwPT09Yi5jcmVhdGUoW2sueWVhcixrLm1vbnRoLDFdKS5kYXk/LTc6MDtyZXR1cm5bZi5ncm91cCh7bWluOmQqYS1rLmRheStlKzEsbWF4OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWluK2QtMX0saToxLG5vZGU6XCJ0ZFwiLGl0ZW06ZnVuY3Rpb24oYSl7YT1iLmNyZWF0ZShbay55ZWFyLGsubW9udGgsYSsoYy5maXJzdERheT8xOjApXSk7dmFyIGQ9aSYmaS5waWNrPT1hLnBpY2ssZT1qJiZqLnBpY2s9PWEucGljayxnPWwmJmIuZGlzYWJsZWQoYSl8fGEucGljazxtLnBpY2t8fGEucGljaz5uLnBpY2ssbz1mLnRyaWdnZXIoYi5mb3JtYXRzLnRvU3RyaW5nLGIsW2MuZm9ybWF0LGFdKTtyZXR1cm5bZi5ub2RlKFwiZGl2XCIsYS5kYXRlLGZ1bmN0aW9uKGIpe3JldHVybiBiLnB1c2goay5tb250aD09YS5tb250aD9jLmtsYXNzLmluZm9jdXM6Yy5rbGFzcy5vdXRmb2N1cyksaC5waWNrPT1hLnBpY2smJmIucHVzaChjLmtsYXNzLm5vdyksZCYmYi5wdXNoKGMua2xhc3Muc2VsZWN0ZWQpLGUmJmIucHVzaChjLmtsYXNzLmhpZ2hsaWdodGVkKSxnJiZiLnB1c2goYy5rbGFzcy5kaXNhYmxlZCksYi5qb2luKFwiIFwiKX0oW2Mua2xhc3MuZGF5XSksXCJkYXRhLXBpY2s9XCIrYS5waWNrK1wiIFwiK2YuYXJpYUF0dHIoe3JvbGU6XCJncmlkY2VsbFwiLGxhYmVsOm8sc2VsZWN0ZWQ6ISghZHx8Yi4kbm9kZS52YWwoKSE9PW8pfHxudWxsLGFjdGl2ZWRlc2NlbmRhbnQ6ISFlfHxudWxsLGRpc2FibGVkOiEhZ3x8bnVsbH0pKSxcIlwiLGYuYXJpYUF0dHIoe3JvbGU6XCJwcmVzZW50YXRpb25cIn0pXX19KV19fSkpLGMua2xhc3MudGFibGUsJ2lkPVwiJytiLiRub2RlWzBdLmlkKydfdGFibGVcIiAnK2YuYXJpYUF0dHIoe3JvbGU6XCJncmlkXCIsY29udHJvbHM6Yi4kbm9kZVswXS5pZCxyZWFkb25seTohMH0pKSxjLmtsYXNzLmNhbGVuZGFyX2NvbnRhaW5lcikrZi5ub2RlKFwiZGl2XCIsZi5ub2RlKFwiYnV0dG9uXCIsYy50b2RheSxcImJ0bi1mbGF0IHBpY2tlcl9fdG9kYXlcIixcInR5cGU9YnV0dG9uIGRhdGEtcGljaz1cIitoLnBpY2srKGEmJiFiLmRpc2FibGVkKGgpP1wiXCI6XCIgZGlzYWJsZWRcIikrXCIgXCIrZi5hcmlhQXR0cih7Y29udHJvbHM6Yi4kbm9kZVswXS5pZH0pKStmLm5vZGUoXCJidXR0b25cIixjLmNsZWFyLFwiYnRuLWZsYXQgcGlja2VyX19jbGVhclwiLFwidHlwZT1idXR0b24gZGF0YS1jbGVhcj0xXCIrKGE/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpK2Yubm9kZShcImJ1dHRvblwiLGMuY2xvc2UsXCJidG4tZmxhdCBwaWNrZXJfX2Nsb3NlXCIsXCJ0eXBlPWJ1dHRvbiBkYXRhLWNsb3NlPXRydWUgXCIrKGE/XCJcIjpcIiBkaXNhYmxlZFwiKStcIiBcIitmLmFyaWFBdHRyKHtjb250cm9sczpiLiRub2RlWzBdLmlkfSkpLGMua2xhc3MuZm9vdGVyKX0sYy5kZWZhdWx0cz1mdW5jdGlvbihhKXtyZXR1cm57bGFiZWxNb250aE5leHQ6XCJOZXh0IG1vbnRoXCIsbGFiZWxNb250aFByZXY6XCJQcmV2aW91cyBtb250aFwiLGxhYmVsTW9udGhTZWxlY3Q6XCJTZWxlY3QgYSBtb250aFwiLGxhYmVsWWVhclNlbGVjdDpcIlNlbGVjdCBhIHllYXJcIixtb250aHNGdWxsOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHdlZWtkYXlzRnVsbDpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSx3ZWVrZGF5c1Nob3J0OltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSx3ZWVrZGF5c0xldHRlcjpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLHRvZGF5OlwiVG9kYXlcIixjbGVhcjpcIkNsZWFyXCIsY2xvc2U6XCJDbG9zZVwiLGZvcm1hdDpcImQgbW1tbSwgeXl5eVwiLGtsYXNzOnt0YWJsZTphK1widGFibGVcIixoZWFkZXI6YStcImhlYWRlclwiLGRhdGVfZGlzcGxheTphK1wiZGF0ZS1kaXNwbGF5XCIsZGF5X2Rpc3BsYXk6YStcImRheS1kaXNwbGF5XCIsbW9udGhfZGlzcGxheTphK1wibW9udGgtZGlzcGxheVwiLHllYXJfZGlzcGxheTphK1wieWVhci1kaXNwbGF5XCIsY2FsZW5kYXJfY29udGFpbmVyOmErXCJjYWxlbmRhci1jb250YWluZXJcIixuYXZQcmV2OmErXCJuYXYtLXByZXZcIixuYXZOZXh0OmErXCJuYXYtLW5leHRcIixuYXZEaXNhYmxlZDphK1wibmF2LS1kaXNhYmxlZFwiLG1vbnRoOmErXCJtb250aFwiLHllYXI6YStcInllYXJcIixzZWxlY3RNb250aDphK1wic2VsZWN0LS1tb250aFwiLHNlbGVjdFllYXI6YStcInNlbGVjdC0teWVhclwiLHdlZWtkYXlzOmErXCJ3ZWVrZGF5XCIsZGF5OmErXCJkYXlcIixkaXNhYmxlZDphK1wiZGF5LS1kaXNhYmxlZFwiLHNlbGVjdGVkOmErXCJkYXktLXNlbGVjdGVkXCIsaGlnaGxpZ2h0ZWQ6YStcImRheS0taGlnaGxpZ2h0ZWRcIixub3c6YStcImRheS0tdG9kYXlcIixpbmZvY3VzOmErXCJkYXktLWluZm9jdXNcIixvdXRmb2N1czphK1wiZGF5LS1vdXRmb2N1c1wiLGZvb3RlcjphK1wiZm9vdGVyXCIsYnV0dG9uQ2xlYXI6YStcImJ1dHRvbi0tY2xlYXJcIixidXR0b25Ub2RheTphK1wiYnV0dG9uLS10b2RheVwiLGJ1dHRvbkNsb3NlOmErXCJidXR0b24tLWNsb3NlXCJ9fX0oYS5rbGFzc2VzKCkucGlja2VyK1wiX19cIiksYS5leHRlbmQoXCJwaWNrYWRhdGVcIixjKX0pLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt2YXIgYj0rYSh0aGlzKS5hdHRyKFwiZGF0YS1sZW5ndGhcIiksYz0rYSh0aGlzKS52YWwoKS5sZW5ndGgsZD1jPD1iO2EodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbChjK1wiL1wiK2IpLGUoZCxhKHRoaXMpKX1mdW5jdGlvbiBjKGIpe3ZhciBjPWIucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7Yy5sZW5ndGh8fChjPWEoXCI8c3Bhbi8+XCIpLmFkZENsYXNzKFwiY2hhcmFjdGVyLWNvdW50ZXJcIikuY3NzKFwiZmxvYXRcIixcInJpZ2h0XCIpLmNzcyhcImZvbnQtc2l6ZVwiLFwiMTJweFwiKS5jc3MoXCJoZWlnaHRcIiwxKSxiLnBhcmVudCgpLmFwcGVuZChjKSl9ZnVuY3Rpb24gZCgpe2EodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbChcIlwiKX1mdW5jdGlvbiBlKGEsYil7dmFyIGM9Yi5oYXNDbGFzcyhcImludmFsaWRcIik7YSYmYz9iLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTphfHxjfHwoYi5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLGIuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpKX1hLmZuLmNoYXJhY3RlckNvdW50ZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7aWYoIWYubGVuZ3RoKXt2YXIgZz12b2lkIDAhPT1lLmF0dHIoXCJkYXRhLWxlbmd0aFwiKTtnJiYoZS5vbihcImlucHV0XCIsYiksZS5vbihcImZvY3VzXCIsYiksZS5vbihcImJsdXJcIixkKSxjKGUpKX19KX0sYShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXthKFwiaW5wdXQsIHRleHRhcmVhXCIpLmNoYXJhY3RlckNvdW50ZXIoKX0pfShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3ZhciBjPXtkdXJhdGlvbjoyMDAsZGlzdDotMTAwLHNoaWZ0OjAscGFkZGluZzowLGZ1bGxXaWR0aDohMSxpbmRpY2F0b3JzOiExLG5vV3JhcDohMSxvbkN5Y2xlVG86bnVsbH07Yj1hLmV4dGVuZChjLGIpO3ZhciBkPU1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKGEodGhpcykpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZSgpe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0JiYoT1swXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLG4pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIscCkpLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLG4pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG8pLE9bMF0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixwKSxPWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIscCksT1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixsKX1mdW5jdGlvbiBmKGEpe3JldHVybiBhLnRhcmdldFRvdWNoZXMmJmEudGFyZ2V0VG91Y2hlcy5sZW5ndGg+PTE/YS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg6YS5jbGllbnRYfWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEudGFyZ2V0VG91Y2hlcyYmYS50YXJnZXRUb3VjaGVzLmxlbmd0aD49MT9hLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTphLmNsaWVudFl9ZnVuY3Rpb24gaChhKXtyZXR1cm4gYT49eD9hJXg6YTwwP2goeCthJXgpOmF9ZnVuY3Rpb24gaShjKXtFPSEwLE8uaGFzQ2xhc3MoXCJzY3JvbGxpbmdcIil8fE8uYWRkQ2xhc3MoXCJzY3JvbGxpbmdcIiksbnVsbCE9TiYmd2luZG93LmNsZWFyVGltZW91dChOKSxOPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RT0hMSxPLnJlbW92ZUNsYXNzKFwic2Nyb2xsaW5nXCIpfSxiLmR1cmF0aW9uKTt2YXIgZCxlLGYsZyxpLGosayxsPXU7aWYodD1cIm51bWJlclwiPT10eXBlb2YgYz9jOnQsdT1NYXRoLmZsb29yKCh0K3cvMikvdyksZj10LXUqdyxnPWY8MD8xOi0xLGk9LWcqZioyL3csZT14Pj4xLGIuZnVsbFdpZHRoP2s9XCJ0cmFuc2xhdGVYKDApXCI6KGs9XCJ0cmFuc2xhdGVYKFwiKyhPWzBdLmNsaWVudFdpZHRoLXIpLzIrXCJweCkgXCIsays9XCJ0cmFuc2xhdGVZKFwiKyhPWzBdLmNsaWVudEhlaWdodC1zKS8yK1wicHgpXCIpLFApe3ZhciBtPXUleCxuPU0uZmluZChcIi5pbmRpY2F0b3ItaXRlbS5hY3RpdmVcIik7bi5pbmRleCgpIT09bSYmKG4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksTS5maW5kKFwiLmluZGljYXRvci1pdGVtXCIpLmVxKG0pLmFkZENsYXNzKFwiYWN0aXZlXCIpKX1mb3IoKCFiLm5vV3JhcHx8dT49MCYmdTx4KSYmKGo9cVtoKHUpXSxhKGopLmhhc0NsYXNzKFwiYWN0aXZlXCIpfHwoTy5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksYShqKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrLWYvMitcInB4KSB0cmFuc2xhdGVYKFwiK2cqYi5zaGlmdCppKmQrXCJweCkgdHJhbnNsYXRlWihcIitiLmRpc3QqaStcInB4KVwiLGouc3R5bGUuekluZGV4PTAsYi5mdWxsV2lkdGg/dHdlZW5lZE9wYWNpdHk9MTp0d2VlbmVkT3BhY2l0eT0xLS4yKmksai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLGQ9MTtkPD1lOysrZCliLmZ1bGxXaWR0aD8oelRyYW5zbGF0aW9uPWIuZGlzdCx0d2VlbmVkT3BhY2l0eT1kPT09ZSYmZjwwPzEtaToxKTooelRyYW5zbGF0aW9uPWIuZGlzdCooMipkK2kqZyksdHdlZW5lZE9wYWNpdHk9MS0uMiooMipkK2kqZykpLCghYi5ub1dyYXB8fHUrZDx4KSYmKGo9cVtoKHUrZCldLGouc3R5bGVbRl09aytcIiB0cmFuc2xhdGVYKFwiKyhiLnNoaWZ0Kyh3KmQtZikvMikrXCJweCkgdHJhbnNsYXRlWihcIit6VHJhbnNsYXRpb24rXCJweClcIixqLnN0eWxlLnpJbmRleD0tZCxqLnN0eWxlLm9wYWNpdHk9dHdlZW5lZE9wYWNpdHksai5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksYi5mdWxsV2lkdGg/KHpUcmFuc2xhdGlvbj1iLmRpc3QsdHdlZW5lZE9wYWNpdHk9ZD09PWUmJmY+MD8xLWk6MSk6KHpUcmFuc2xhdGlvbj1iLmRpc3QqKDIqZC1pKmcpLHR3ZWVuZWRPcGFjaXR5PTEtLjIqKDIqZC1pKmcpKSwoIWIubm9XcmFwfHx1LWQ+PTApJiYoaj1xW2godS1kKV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrKC1iLnNoaWZ0KygtdypkLWYpLzIpK1wicHgpIHRyYW5zbGF0ZVooXCIrelRyYW5zbGF0aW9uK1wicHgpXCIsai5zdHlsZS56SW5kZXg9LWQsai5zdHlsZS5vcGFjaXR5PXR3ZWVuZWRPcGFjaXR5LGouc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpO2lmKCghYi5ub1dyYXB8fHU+PTAmJnU8eCkmJihqPXFbaCh1KV0sai5zdHlsZVtGXT1rK1wiIHRyYW5zbGF0ZVgoXCIrLWYvMitcInB4KSB0cmFuc2xhdGVYKFwiK2cqYi5zaGlmdCppK1wicHgpIHRyYW5zbGF0ZVooXCIrYi5kaXN0KmkrXCJweClcIixqLnN0eWxlLnpJbmRleD0wLGIuZnVsbFdpZHRoP3R3ZWVuZWRPcGFjaXR5PTE6dHdlZW5lZE9wYWNpdHk9MS0uMippLGouc3R5bGUub3BhY2l0eT10d2VlbmVkT3BhY2l0eSxqLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSxsIT09dSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYi5vbkN5Y2xlVG8pe3ZhciBvPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmVxKGgodSkpO2Iub25DeWNsZVRvLmNhbGwodGhpcyxvLEopfX1mdW5jdGlvbiBqKCl7dmFyIGEsYixjLGQ7YT1EYXRlLm5vdygpLGI9YS1ILEg9YSxjPXQtRyxHPXQsZD0xZTMqYy8oMStiKSxEPS44KmQrLjIqRH1mdW5jdGlvbiBrKCl7dmFyIGEsYztCJiYoYT1EYXRlLm5vdygpLUgsYz1CKk1hdGguZXhwKC1hL2IuZHVyYXRpb24pLGM+Mnx8YzwtMj8oaShDLWMpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSk6aShDKSl9ZnVuY3Rpb24gbChjKXtpZihKKXJldHVybiBjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSwhMTtpZighYi5mdWxsV2lkdGgpe3ZhciBkPWEoYy50YXJnZXQpLmNsb3Nlc3QoXCIuY2Fyb3VzZWwtaXRlbVwiKS5pbmRleCgpLGU9dSV4LWQ7MCE9PWUmJihjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSksbShkKX19ZnVuY3Rpb24gbShhKXt2YXIgYz11JXgtYTtiLm5vV3JhcHx8KGM8MD9NYXRoLmFicyhjK3gpPE1hdGguYWJzKGMpJiYoYys9eCk6Yz4wJiZNYXRoLmFicyhjLXgpPGMmJihjLT14KSksYzwwP08udHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFtNYXRoLmFicyhjKV0pOmM+MCYmTy50cmlnZ2VyKFwiY2Fyb3VzZWxQcmV2XCIsW2NdKX1mdW5jdGlvbiBuKGEpe2EucHJldmVudERlZmF1bHQoKSx2PSEwLEo9ITEsSz0hMSx6PWYoYSksQT1nKGEpLEQ9Qj0wLEc9dCxIPURhdGUubm93KCksY2xlYXJJbnRlcnZhbChJKSxJPXNldEludGVydmFsKGosMTAwKX1mdW5jdGlvbiBvKGEpe3ZhciBiLGMsZDtpZih2KWlmKGI9ZihhKSx5PWcoYSksYz16LWIsZD1NYXRoLmFicyhBLXkpLGQ8MzAmJiFLKShjPjJ8fGM8LTIpJiYoSj0hMCx6PWIsaSh0K2MpKTtlbHNle2lmKEopcmV0dXJuIGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLCExO0s9ITB9aWYoSilyZXR1cm4gYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksITF9ZnVuY3Rpb24gcChhKXtpZih2KXJldHVybiB2PSExLGNsZWFySW50ZXJ2YWwoSSksQz10LChEPjEwfHxEPC0xMCkmJihCPS45KkQsQz10K0IpLEM9TWF0aC5yb3VuZChDL3cpKncsYi5ub1dyYXAmJihDPj13Kih4LTEpP0M9dyooeC0xKTpDPDAmJihDPTApKSxCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspLEomJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSksITF9dmFyIHEscixzLHQsdSx2LHcseCx6LEEsQixDLEQsRSxGLEcsSCxJLEosSyxMPWQrYyxNPWEoJzx1bCBjbGFzcz1cImluZGljYXRvcnNcIj48L3VsPicpLE49bnVsbCxPPWEodGhpcyksUD1PLmF0dHIoXCJkYXRhLWluZGljYXRvcnNcIil8fGIuaW5kaWNhdG9ycyxRPWZ1bmN0aW9uKCl7dmFyIGI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW0gaW1nXCIpLmZpcnN0KCk7aWYoYi5sZW5ndGgpYi5wcm9wKFwiY29tcGxldGVcIik/Ty5jc3MoXCJoZWlnaHRcIixiLmhlaWdodCgpKTpiLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7Ty5jc3MoXCJoZWlnaHRcIixhKHRoaXMpLmhlaWdodCgpKX0pO2Vsc2V7dmFyIGM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5oZWlnaHQoKTtPLmNzcyhcImhlaWdodFwiLGMpfX07cmV0dXJuIGIuZnVsbFdpZHRoJiYoYi5kaXN0PTAsUSgpLFAmJk8uZmluZChcIi5jYXJvdXNlbC1maXhlZC1pdGVtXCIpLmFkZENsYXNzKFwid2l0aC1pbmRpY2F0b3JzXCIpKSxPLmhhc0NsYXNzKFwiaW5pdGlhbGl6ZWRcIik/KGEod2luZG93KS50cmlnZ2VyKFwicmVzaXplXCIpLGEodGhpcykudHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFsxZS02XSksITApOihPLmFkZENsYXNzKFwiaW5pdGlhbGl6ZWRcIiksdj0hMSx0PUM9MCxxPVtdLHI9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lcldpZHRoKCkscz1PLmZpbmQoXCIuY2Fyb3VzZWwtaXRlbVwiKS5maXJzdCgpLmlubmVySGVpZ2h0KCksdz0yKnIrYi5wYWRkaW5nLE8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmVhY2goZnVuY3Rpb24oYil7aWYocS5wdXNoKGEodGhpcylbMF0pLFApe3ZhciBjPWEoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTswPT09YiYmYy5hZGRDbGFzcyhcImFjdGl2ZVwiKSxjLmNsaWNrKGZ1bmN0aW9uKGIpe2Iuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGM9YSh0aGlzKS5pbmRleCgpO20oYyl9KSxNLmFwcGVuZChjKX19KSxQJiZPLmFwcGVuZChNKSx4PXEubGVuZ3RoLEY9XCJ0cmFuc2Zvcm1cIixbXCJ3ZWJraXRcIixcIk1velwiLFwiT1wiLFwibXNcIl0uZXZlcnkoZnVuY3Rpb24oYSl7dmFyIGI9YStcIlRyYW5zZm9ybVwiO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW2JdfHwoRj1iLCExKX0pLGEod2luZG93KS5vZmYoXCJyZXNpemUuY2Fyb3VzZWwtXCIrTCkub24oXCJyZXNpemUuY2Fyb3VzZWwtXCIrTCxmdW5jdGlvbigpe2IuZnVsbFdpZHRoPyhyPU8uZmluZChcIi5jYXJvdXNlbC1pdGVtXCIpLmZpcnN0KCkuaW5uZXJXaWR0aCgpLHM9Ty5maW5kKFwiLmNhcm91c2VsLWl0ZW1cIikuZmlyc3QoKS5pbm5lckhlaWdodCgpLHc9MipyK2IucGFkZGluZyx0PTIqdSpyLEM9dCk6aSgpfSksZSgpLGkodCksYSh0aGlzKS5vbihcImNhcm91c2VsTmV4dFwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MSksQz13Kk1hdGgucm91bmQodC93KSt3KmIsdCE9PUMmJihCPUMtdCxIPURhdGUubm93KCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGspKX0pLGEodGhpcykub24oXCJjYXJvdXNlbFByZXZcIixmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPTEpLEM9dypNYXRoLnJvdW5kKHQvdyktdypiLHQhPT1DJiYoQj1DLXQsSD1EYXRlLm5vdygpLHJlcXVlc3RBbmltYXRpb25GcmFtZShrKSl9KSx2b2lkIGEodGhpcykub24oXCJjYXJvdXNlbFNldFwiLGZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9MCksbShiKX0pKX0pfSxuZXh0OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsTmV4dFwiLFtiXSl9LHByZXY6ZnVuY3Rpb24oYil7YSh0aGlzKS50cmlnZ2VyKFwiY2Fyb3VzZWxQcmV2XCIsW2JdKX0sc2V0OmZ1bmN0aW9uKGIpe2EodGhpcykudHJpZ2dlcihcImNhcm91c2VsU2V0XCIsW2JdKX19O2EuZm4uY2Fyb3VzZWw9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY10/YltjXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGMmJmM/dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmNhcm91c2VsXCIpOmIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpLGZ1bmN0aW9uKGEpe3ZhciBiPXtpbml0OmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKFwiI1wiK2EodGhpcykuYXR0cihcImRhdGEtYWN0aXZhdGVzXCIpKSxkPShhKFwiYm9keVwiKSxhKHRoaXMpKSxlPWQucGFyZW50KFwiLnRhcC10YXJnZXQtd3JhcHBlclwiKSxmPWUuZmluZChcIi50YXAtdGFyZ2V0LXdhdmVcIiksZz1lLmZpbmQoXCIudGFwLXRhcmdldC1vcmlnaW5cIiksaD1kLmZpbmQoXCIudGFwLXRhcmdldC1jb250ZW50XCIpO2UubGVuZ3RofHwoZT1kLndyYXAoYSgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtd3JhcHBlclwiPjwvZGl2PicpKS5wYXJlbnQoKSksaC5sZW5ndGh8fChoPWEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LWNvbnRlbnRcIj48L2Rpdj4nKSxkLmFwcGVuZChoKSksZi5sZW5ndGh8fChmPWEoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdhdmVcIj48L2Rpdj4nKSxnLmxlbmd0aHx8KGc9Yy5jbG9uZSghMCwhMCksZy5hZGRDbGFzcyhcInRhcC10YXJnZXQtb3JpZ2luXCIpLGcucmVtb3ZlQXR0cihcImlkXCIpLGcucmVtb3ZlQXR0cihcInN0eWxlXCIpLGYuYXBwZW5kKGcpKSxlLmFwcGVuZChmKSk7dmFyIGk9ZnVuY3Rpb24oKXtlLmlzKFwiLm9wZW5cIil8fChlLmFkZENsYXNzKFwib3BlblwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zy5vZmYoXCJjbGljay50YXBUYXJnZXRcIikub24oXCJjbGljay50YXBUYXJnZXRcIixmdW5jdGlvbihhKXtqKCksZy5vZmYoXCJjbGljay50YXBUYXJnZXRcIil9KSxhKGRvY3VtZW50KS5vZmYoXCJjbGljay50YXBUYXJnZXRcIikub24oXCJjbGljay50YXBUYXJnZXRcIixmdW5jdGlvbihiKXtqKCksYShkb2N1bWVudCkub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpfSk7dmFyIGI9TWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKXtrKCl9LDIwMCk7YSh3aW5kb3cpLm9mZihcInJlc2l6ZS50YXBUYXJnZXRcIikub24oXCJyZXNpemUudGFwVGFyZ2V0XCIsYil9LDApKX0saj1mdW5jdGlvbigpe2UuaXMoXCIub3BlblwiKSYmKGUucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLGcub2ZmKFwiY2xpY2sudGFwVGFyZ2V0XCIpLGEoZG9jdW1lbnQpLm9mZihcImNsaWNrLnRhcFRhcmdldFwiKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnRhcFRhcmdldFwiKSl9LGs9ZnVuY3Rpb24oKXt2YXIgYj1cImZpeGVkXCI9PT1jLmNzcyhcInBvc2l0aW9uXCIpO2lmKCFiKWZvcih2YXIgZz1jLnBhcmVudHMoKSxpPTA7aTxnLmxlbmd0aCYmIShiPVwiZml4ZWRcIj09YShnW2ldKS5jc3MoXCJwb3NpdGlvblwiKSk7aSsrKTt2YXIgaj1jLm91dGVyV2lkdGgoKSxrPWMub3V0ZXJIZWlnaHQoKSxsPWI/Yy5vZmZzZXQoKS50b3AtYShkb2N1bWVudCkuc2Nyb2xsVG9wKCk6Yy5vZmZzZXQoKS50b3AsbT1iP2Mub2Zmc2V0KCkubGVmdC1hKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCk6Yy5vZmZzZXQoKS5sZWZ0LG49YSh3aW5kb3cpLndpZHRoKCksbz1hKHdpbmRvdykuaGVpZ2h0KCkscD1uLzIscT1vLzIscj1tPD1wLHM9bT5wLHQ9bDw9cSx1PWw+cSx2PW0+PS4yNSpuJiZtPD0uNzUqbix3PWQub3V0ZXJXaWR0aCgpLHg9ZC5vdXRlckhlaWdodCgpLHk9bCtrLzIteC8yLHo9bStqLzItdy8yLEE9Yj9cImZpeGVkXCI6XCJhYnNvbHV0ZVwiLEI9dj93OncvMitqLEM9eC8yLEQ9dD94LzI6MCxFPTAsRj1yJiYhdj93LzItajowLEc9MCxIPWosST11P1wiYm90dG9tXCI6XCJ0b3BcIixKPWo+az8yKmo6MipqLEs9SixMPXgvMi1LLzIsTT13LzItSi8yLE49e307Ti50b3A9dD95OlwiXCIsTi5yaWdodD1zP24tei13OlwiXCIsTi5ib3R0b209dT9vLXkteDpcIlwiLE4ubGVmdD1yP3o6XCJcIixOLnBvc2l0aW9uPUEsZS5jc3MoTiksaC5jc3Moe3dpZHRoOkIsaGVpZ2h0OkMsdG9wOkQscmlnaHQ6Ryxib3R0b206RSxsZWZ0OkYscGFkZGluZzpILHZlcnRpY2FsQWxpZ246SX0pLGYuY3NzKHt0b3A6TCxsZWZ0Ok0sd2lkdGg6SixoZWlnaHQ6S30pfTtcIm9wZW5cIj09YiYmKGsoKSxpKCkpLFwiY2xvc2VcIj09YiYmaigpfSl9LG9wZW46ZnVuY3Rpb24oKXt9LGNsb3NlOmZ1bmN0aW9uKCl7fX07YS5mbi50YXBUYXJnZXQ9ZnVuY3Rpb24oYyl7cmV0dXJuIGJbY118fFwib2JqZWN0XCI9PXR5cGVvZiBjP2IuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCBhLmVycm9yKFwiTWV0aG9kIFwiK2MrXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhcC10YXJnZXRcIil9fShqUXVlcnkpO1xuXG4oZnVuY3Rpb24gKCAkICkge1xuICAgICQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYSc7XG5cbiAgICAgICAgLy8gQWRkIGFjdGl2ZSBpZiBmb3JtIGF1dG8gY29tcGxldGVcbiAgICAgICAgJCggZG9jdW1lbnQgKS5vbiggJ2NoYW5nZSBpbnB1dCcsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhpc0RhdGFNaW5MZW5ndGggPSAkKCB0aGlzICkuZGF0YSggJ21pbi1sZW5ndGgnICkgIT09IHVuZGVmaW5lZCA/ICQoIHRoaXMgKS5kYXRhKCAnbWluLWxlbmd0aCcgKSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCAkKCB0aGlzICkudmFsKCkubGVuZ3RoIDwgdGhpc0RhdGFNaW5MZW5ndGggJiYgJCggdGhpcyApLnZhbCgpLmxlbmd0aCAhPT0gMCApIHtcbiAgICAgICAgICAgICAgICAkKCB0aGlzICkucmVtb3ZlQ2xhc3MoICd2YWxpZCcgKS5hZGRDbGFzcyggJ2ludmFsaWQtbWluJyApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCB0aGlzICkucmVtb3ZlQ2xhc3MoICdpbnZhbGlkLW1pbicgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuICAgIH0gKTtcbn0pKCBqUXVlcnkgKTtcbi8vIGZ1bmN0aW9uIHJlbW92ZSBldmVudCBkZWZhdWx0XG5mdW5jdGlvbiByZW1vdmVFdmVudERlZmF1bHQoZSkge1xuICAgIHZhciBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7IC8vINC10YHQu9C4INC80LXRgtC+0LQg0YHRg9GJ0LXRgdGC0LLRg9C10YJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8g0YLQviDQstGL0LfQstCw0YLRjCDQtdCz0L5cbiAgICB9IGVsc2UgeyAvLyDQuNC90LDRh9C1INCy0LDRgNC40LDQvdGCIElFOC06XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxufVxuOyhmdW5jdGlvbiAoICQgKSB7XG4gICAgdmFyIG1ldGhvZHMgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb25TaG93OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmaXhlZEl0ZW1zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50SXRlbTogMjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCggZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggc2V0IG9mIHRhYnMsIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZlxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIHRhYiBpcyBhY3RpdmUgYW5kIGl0cyBhc3NvY2lhdGVkIGNvbnRlbnRcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKCB0aGlzICk7XG5cbiAgICAgICAgICAgICAgICAkdGhpcy53aWR0aCggJzEwMCUnICk7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGFjdGl2ZSwgJGNvbnRlbnQsICRsaW5rcyA9ICR0aGlzLmZpbmQoICdsaSBhJyApLFxuICAgICAgICAgICAgICAgICAgICAkbGlua3NfbGVuZ3RoID0gJGxpbmtzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNfd2lkdGggPSAkdGhpcy53aWR0aCgpLFxuICAgICAgICAgICAgICAgICAgICAkbmF2X3dyYXAgPSAkdGhpcy5wYXJlbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgJGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50X2FsbF9saW5rcywgaV93O1xuXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbG9jYXRpb24uaGFzaCBtYXRjaGVzIG9uZSBvZiB0aGUgbGlua3MsIHVzZSB0aGF0IGFzIHRoZSBhY3RpdmUgdGFiLlxuICAgICAgICAgICAgICAgICRhY3RpdmUgPSAkKCAkbGlua3MuZmlsdGVyKCkgKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50aW5nV2lkdGgoIGVsZW1lbnRzICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJHdpZHRoX2NvbnRhaW5lciA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgJCggZWxlbWVudHMgKS5lYWNoKCBmdW5jdGlvbiAoIGluZGV4LCBlbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZWxfd2lkdGggPSAkKCBlbCApLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggJGVsX3dpZHRoID4gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2lkdGhfY29udGFpbmVyID0gJHdpZHRoX2NvbnRhaW5lciArICRlbF93aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICR3aWR0aF9jb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2xpY2sgbmF2LWJ0bi1jb250ZW50XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25DbGlja0J0blNsaWRlKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCAnLm5hdi1idG4tc2xpZGUnICkub24oICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAkbmF2X3dyYXAuaGFzQ2xhc3MoICduYXYtd3JhcHBlcicgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICRuYXZfd3JhcC5wb3NpdGlvbigpLmxlZnQgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnRfbmF2X3dyYXBwZXIgPSAkdGhpcy53aWR0aCgpIC0gKCRuYXZfd3JhcC5wYXJlbnQoKS5pbm5lcldpZHRoKCkgLSA1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRuYXZfd3JhcC52ZWxvY2l0eSggeyBcImxlZnRcIjogLWxlZnRfbmF2X3dyYXBwZXIgfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5hdl93cmFwLnZlbG9jaXR5KCB7IFwibGVmdFwiOiAwIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdpZHRoIGl0ZW1zIGxpID4gYVxuICAgICAgICAgICAgICAgIGlfdyA9IGNvdW50aW5nV2lkdGgoICR0aGlzLmZpbmQoICdsaSBhJyApICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIG9wdGlvbnMuZml4ZWRJdGVtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdl93cmFwLndpZHRoKCBpX3cgKyAoJGxpbmtzX2xlbmd0aCAqIG9wdGlvbnMuaW5kZW50SXRlbSkgKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50X2FsbF9saW5rcyA9ICR0aGlzLndpZHRoKCkgLSBpX3c7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tCdG5TbGlkZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGVudF9hbGxfbGlua3MgPSAkdGhpc193aWR0aCAtIGlfdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBubyBtYXRjaCBpcyBmb3VuZCwgdXNlIHRoZSBmaXJzdCBsaW5rIG9yIGFueSB3aXRoIGNsYXNzICdhY3RpdmUnIGFzIHRoZSBpbml0aWFsIGFjdGl2ZSB0YWIuXG4gICAgICAgICAgICAgICAgaWYgKCAkYWN0aXZlLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICQoIHRoaXMgKS5maW5kKCAnbGkgYS5hY3RpdmUnICkuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCAkYWN0aXZlLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICQoIHRoaXMgKS5maW5kKCAnbGkgYScgKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG4gICAgICAgICAgICAgICAgJGluZGV4ID0gJGxpbmtzLmluZGV4KCAkYWN0aXZlICk7XG4gICAgICAgICAgICAgICAgaWYgKCAkaW5kZXggPCAwICkge1xuICAgICAgICAgICAgICAgICAgICAkaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggJGFjdGl2ZVsgMCBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50ID0gJCggJGFjdGl2ZVsgMCBdLmhhc2ggKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgaW5kaWNhdG9yIHRoZW4gc2V0IGluZGljYXRvciB3aWR0aCB0byB0YWIgd2lkdGhcbiAgICAgICAgICAgICAgICAkdGhpcy5hcHBlbmQoICc8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+JyApO1xuICAgICAgICAgICAgICAgIHZhciAkaW5kaWNhdG9yID0gJHRoaXMuZmluZCggJy5pbmRpY2F0b3InICk7XG5cbiAgICAgICAgICAgICAgICAkaW5kaWNhdG9yLmNzcyggJ3dpZHRoJywgJGFjdGl2ZS53aWR0aCgpICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoICR0aGlzLmlzKCBcIjp2aXNpYmxlXCIgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkaW5kZXggPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5kaWNhdG9yLmNzcyggeyBcImxlZnRcIjogKCRhY3RpdmUucGFyZW50KCAnbGknICkub3V0ZXJXaWR0aCgpIC0gJGFjdGl2ZS53aWR0aCgpKSAvIDIgfSApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAkaW5kZXggPiAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGluZGljYXRvci5jc3MoIHsgXCJsZWZ0XCI6ICRhY3RpdmUucGFyZW50KCAnbGknICkucG9zaXRpb24oKS5sZWZ0ICsgKCAoJGFjdGl2ZS5wYXJlbnQoICdsaScgKS5vdXRlcldpZHRoKCkgLSAkYWN0aXZlLndpZHRoKCkpIC8gMiApIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICR0aGlzX3dpZHRoID0gJHRoaXMud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAvLyAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGhpc193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzX2xlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyAgIGlmICgkaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICRpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gICBpZiAoJHRhYl93aWR0aCAhPT0gMCAmJiAkdGhpc193aWR0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiAkdGhpc193aWR0aCAtICgoJGluZGV4ICsgMSkgKiAkdGFiX3dpZHRoKX0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6ICRpbmRleCAqICR0YWJfd2lkdGh9KTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIHJlbWFpbmluZyBjb250ZW50XG4gICAgICAgICAgICAgICAgJGxpbmtzLm5vdCggJGFjdGl2ZSApLmVhY2goIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCggdGhpcy5oYXNoICkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0gKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgICAgICR0aGlzLm9uKCAnY2xpY2snLCAnYScsIGZ1bmN0aW9uICggZSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkKCB0aGlzICkucGFyZW50KCkuaGFzQ2xhc3MoICdkaXNhYmxlZCcgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFjdCBhcyByZWd1bGFyIGxpbmsgaWYgdGFyZ2V0IGF0dHJpYnV0ZSBpcyBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICggISEkKCB0aGlzICkuYXR0ciggXCJ0YXJnZXRcIiApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgdGhlIG9sZCB0YWIgaW5hY3RpdmUuXG4gICAgICAgICAgICAgICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB2YXJpYWJsZXMgd2l0aCB0aGUgbmV3IGxpbmsgYW5kIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICQoIHRoaXMgKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQgPSAkKCB0aGlzLmhhc2ggKTtcbiAgICAgICAgICAgICAgICAgICAgJGxpbmtzID0gJHRoaXMuZmluZCggJ2xpIGEnICk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGluZGljYXRvci5jc3MoICd3aWR0aCcsICRhY3RpdmUud2lkdGgoKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciAkYWN0aXZlX3BhcmVudCA9ICRhY3RpdmUucGFyZW50KCAnbGknICksXG4gICAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlX3BhcmVudF9wcmV2QWxsID0gJGFjdGl2ZV9wYXJlbnQucHJldkFsbCggJ2xpJyApLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZV9wYXJlbnRfcHJldkFsbF93aWR0aCA9IGNvdW50aW5nV2lkdGgoICRhY3RpdmVfcGFyZW50X3ByZXZBbGwgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZV9sZWZ0X3Bvc2l0aW9uID0gKCRhY3RpdmVfcGFyZW50X3ByZXZBbGxfd2lkdGggKyAoKGluZGVudF9hbGxfbGlua3MgLyAkbGlua3NfbGVuZ3RoKSAvIDIpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHRoZSB0YWIgYWN0aXZlLlxuICAgICAgICAgICAgICAgICAgICAkYWN0aXZlLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJHByZXZfaW5kZXggPSAkaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICRpbmRleCA9ICRsaW5rcy5pbmRleCggJCggdGhpcyApICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggJGluZGV4IDwgMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgdXJsIHRvIGN1cnJlbnQgdGFiXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJGFjdGl2ZS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkY29udGVudCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Yob3B0aW9ucy5vblNob3cpID09PSBcImZ1bmN0aW9uXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vblNob3cuY2FsbCggdGhpcywgJGNvbnRlbnQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAoJGluZGV4IC0gJHByZXZfaW5kZXgpID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KCB7IFwibGVmdFwiOiBhY3RpdmVfbGVmdF9wb3NpdGlvbiB9LCB7IGR1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoIHsgXCJsZWZ0XCI6IGFjdGl2ZV9sZWZ0X3Bvc2l0aW9uIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgYW5jaG9yJ3MgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoYXQgPSAkKCB0aGlzICk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAkdGhhdC5hdHRyKCAnaHJlZicgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdF90YWI6IGZ1bmN0aW9uICggaWQgKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmQoICdhW2hyZWY9XCIjJyArIGlkICsgJ1wiXScgKS50cmlnZ2VyKCAnY2xpY2snICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5uYXZUaGVtZSA9IGZ1bmN0aW9uICggbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgICBpZiAoIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdICkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkgKTtcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkudG9vbHRpcCcgKTtcbiAgICAgICAgfVxuICAgIH07XG59KSggalF1ZXJ5ICk7XG47KGZ1bmN0aW9uICggJCApIHtcblxuICAgIHZhciBtZXRob2RzID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgbWVudVdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgZWRnZTogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoIGRlZmF1bHRzLCBvcHRpb25zICk7XG5cbiAgICAgICAgICAgICQoIHRoaXMgKS5lYWNoKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCggdGhpcyApO1xuICAgICAgICAgICAgICAgIHZhciBtZW51X2lkID0gJCggXCIjXCIgKyAkdGhpcy5hdHRyKCAnZGF0YS1hY3RpdmF0ZXMnICkgKTtcblxuICAgICAgICAgICAgICAgIC8vIFNldCB0byB3aWR0aFxuICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5tZW51V2lkdGggIT0gMzAwICkge1xuICAgICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcyggJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGggKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIG9wdGlvbnMuZWRnZSA9PSAnbGVmdCcgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVfaWQuY3NzKCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVfaWQuYWRkQ2xhc3MoICdyaWdodC1hbGlnbmVkJyApIC8vIENoYW5nZSB0ZXh0LWFsaWdubWVudCB0byByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGZpeGVkIHNpZGVuYXYsIGJyaW5nIG1lbnUgb3V0XG4gICAgICAgICAgICAgICAgaWYgKCBtZW51X2lkLmhhc0NsYXNzKCAnZml4ZWQnICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPiA5OTIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcyggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDApJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2luZG93IHJlc2l6ZSB0byByZXNldCBvbiBsYXJnZSBzY3JlZW5zIGZpeGVkXG4gICAgICAgICAgICAgICAgaWYgKCBtZW51X2lkLmhhc0NsYXNzKCAnZml4ZWQnICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoIHdpbmRvdyApLnJlc2l6ZSggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBtZW51IGlmIHdpbmRvdyBpcyByZXNpemVkIGJpZ2dlciB0aGFuIDk5MiBhbmQgdXNlciBoYXMgZml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbWVudU91dCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTWVudSggdHJ1ZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVudV9pZC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcyggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVudV9pZC5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBtZW51T3V0ID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcyggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC0xMDAlKScgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcyggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBjbG9zZU9uQ2xpY2ssIHRoZW4gYWRkIGNsb3NlIGV2ZW50IGZvciBhbGwgYSB0YWdzIGluIHNpZGUgc2lkZU5hdlxuICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVfaWQub24oIFwiY2xpY2suaXRlbWNsaWNrXCIsIFwiYTpub3QoLmNvbGxhcHNpYmxlLWhlYWRlcilcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTWVudSggcmVzdG9yZU5hdiApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZW5hYmxlIHNjcm9sbGluZ1xuICAgICAgICAgICAgICAgICAgICAkKCAnYm9keScgKS5jc3MoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBvcHRpb25zLmVkZ2UgPT09ICdsZWZ0JyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLnZlbG9jaXR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJ3RyYW5zbGF0ZVgnOiAnLTEwMCUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3RvcmVOYXYgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudV9pZC5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudV9pZC5jc3MoICd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLnZlbG9jaXR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJ3RyYW5zbGF0ZVgnOiAnMTAwJScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdG9yZU5hdiA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcyggJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGggKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCAnYm9keScgKS5yZW1vdmVDbGFzcyggJ29uU2xpZGVOYXYnICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29udGFpbmVySW5kZW50KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICEkKCAnYm9keScgKS5oYXNDbGFzcyggJ29uU2xpZGVOYXYnICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCAnYm9keScgKS5hZGRDbGFzcyggJ29uU2xpZGVOYXYnICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUb3VjaCBFdmVudFxuICAgICAgICAgICAgICAgIHZhciBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIG1lbnVPdXQgPSBmYWxzZTtcblxuXG4gICAgICAgICAgICAgICAgJHRoaXMuY2xpY2soIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZW51T3V0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxTcHlpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRib2R5ID0gJCggJ2JvZHknICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJbmRlbnQoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIGN1cnJlbnQgZHJhZyB0YXJnZXQgb24gdG9wIG9mIERPTSB0cmVlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5lZGdlID09PSAnbGVmdCcgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudV9pZC52ZWxvY2l0eSggeyAndHJhbnNsYXRlWCc6IFsgMCwgLTEgKiBvcHRpb25zLm1lbnVXaWR0aCBdIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVfaWQudmVsb2NpdHkoIHsgJ3RyYW5zbGF0ZVgnOiBbIDAsIG9wdGlvbnMubWVudVdpZHRoIF0gfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfSApO1xuXG5cbiAgICAgICAgfSxcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCAnY2xpY2snICk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoICcjc2lkZW5hdi1vdmVybGF5JyApLnRyaWdnZXIoICdjbGljaycgKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgICQuZm4uc2xpZGVOYXYgPSBmdW5jdGlvbiAoIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgICAgaWYgKCBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXSApIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICFtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQuZXJyb3IoICdNZXRob2QgJyArIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNsaWRlTmF2JyApO1xuICAgICAgICB9XG4gICAgfTsgLy8gUGx1Z2luIGVuZFxufSggalF1ZXJ5ICkpO1xuLy8gLS0tLS0tLS0tLSBmdW5jdGlvbmFsIHRvb2x0aXBzIG1ldGhvZCAtLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47KCBmdW5jdGlvbiAoICQgKSB7XG4gICAgJCggZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGxpbmtzID0gJCggJy5saW5rcyA+IC5idG4tZmxvYXRpbmcsIC5oZWxwID4gLmJ0bi1mbG9hdGluZycgKTtcblxuICAgICAgICAkbGlua3Mub24oICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudERlZmF1bHQoIGV2ZW50ICk7XG5cbiAgICAgICAgICAgIHZhciAkZnVuY1Rvb2x0aXBzID0gJCggdGhpcyApLm5leHQoICcuZnVuY3Rpb25hbC10b29sdGlwcycgKTtcbiAgICAgICAgICAgIHZhciB0aGlzUG9zaXRpb24gPSAkKCB0aGlzICkucG9zaXRpb24oKS5sZWZ0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvc2l0aW9uIHRvb2x0aXBzJywgdGhpc1Bvc2l0aW9uKTtcblxuICAgICAgICAgICAgaWYgKCAkZnVuY1Rvb2x0aXBzLmhhc0NsYXNzKCAnaGlkZScgKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXNQb3NpdGlvbiAhPT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgJGZ1bmNUb29sdGlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnaGlkZScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyggJ2xlZnQnLCAtKCB0aGlzUG9zaXRpb24gKyAyICkgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkZnVuY1Rvb2x0aXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZ1bmNUb29sdGlwcy5hZGRDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcbiAgICB9ICk7XG59ICkoIGpRdWVyeSApO1xuXG4vLyAtLS0tLS0tLS0tIGVtb2ppIG1ldGhvZCB0byB0b29sdGlwcyAgLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKCBmdW5jdGlvbiAoICQgKSB7XG4gICAgJCggZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVtb2ppID0gJCggJy5lbW9qaScgKS5nZXQoKTtcbiAgICAgICAgdmFyIGVtb2ppc0RhdGEgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdhbXVzaWVydCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0FtdXNpZXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2VkOiA0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ3Nob2tpZXJ0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2hva2llcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IDM0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ3RyYXVyaWcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUcmF1cmlnJyxcbiAgICAgICAgICAgICAgICBjbGlja2VkOiA0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ3d1dGVuZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1d1dGVuZCcsXG4gICAgICAgICAgICAgICAgY2xpY2tlZDogMTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdlcnNjaHJlY2t0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXJzY2hyZWNrdCcsXG4gICAgICAgICAgICAgICAgY2xpY2tlZDogMjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdpbmZvcm1pZXJ0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSW5mb3JtaWVydCcsXG4gICAgICAgICAgICAgICAgY2xpY2tlZDogMjU2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnbGFuZ3dlaWxpY2gnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdMYW5nd2VpbGljaCcsXG4gICAgICAgICAgICAgICAgY2xpY2tlZDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2VnYWwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdFZ2FsJyxcbiAgICAgICAgICAgICAgICBjbGlja2VkOiAyMzRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICAkZW1vamkubWFwKCBmdW5jdGlvbiAoIGVsZW1OYW1lICkge1xuICAgICAgICAgICAgdmFyICRlbGVtTmFtZSA9ICQoIGVsZW1OYW1lICk7XG5cbiAgICAgICAgICAgIGVtb2ppc0RhdGEubWFwKCBmdW5jdGlvbiAoIGVsZW1EYXRhICkge1xuICAgICAgICAgICAgICAgIGlmICggJGVsZW1OYW1lLmRhdGEoICduYW1lJyApID09PSBlbGVtRGF0YS5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1OYW1lLmF0dHIoICdkYXRhLXRvb2x0aXAnLCBlbGVtRGF0YS5jbGlja2VkICsgJyA8L2JyPiAnICsgZWxlbURhdGEubmFtZSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSApO1xuICAgICAgICAkKCAkZW1vamkgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50RGVmYXVsdCggZXZlbnQgKTtcbiAgICAgICAgICAgIHZhciAkZWxlbUNsaWNrZWQgPSAkKCB0aGlzICk7XG5cbiAgICAgICAgICAgIGVtb2ppc0RhdGEubWFwKCBmdW5jdGlvbiAoIGVsZW1EYXRhICkge1xuICAgICAgICAgICAgICAgIGlmICggJGVsZW1DbGlja2VkLmRhdGEoICduYW1lJyApID09PSBlbGVtRGF0YS5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvb2x0aXBJZCA9ICRlbGVtQ2xpY2tlZC5kYXRhKCAndG9vbHRpcC1pZCcgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoICFlbGVtRGF0YS5jbGlja2VkUHJldiB8fCBlbGVtRGF0YS5jbGlja2VkUHJldiA9PT0gZWxlbURhdGEuY2xpY2tlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbURhdGEuY2xpY2tlZFByZXYgPT09IDAgJiYgZWxlbURhdGEuY2xpY2tlZCA+IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbURhdGEuY2xpY2tlZCA9IGVsZW1EYXRhLmNsaWNrZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1EYXRhLmNsaWNrZWRQcmV2ID0gZWxlbURhdGEuY2xpY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbURhdGEuY2xpY2tlZCA9IGVsZW1EYXRhLmNsaWNrZWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1EYXRhLmNsaWNrZWRQcmV2ID0gZWxlbURhdGEuY2xpY2tlZCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCAnIycgKyB0b29sdGlwSWQgKS5maW5kKCAnc3BhbicgKS5odG1sKCBlbGVtRGF0YS5jbGlja2VkICsgJyA8L2JyPiAnICsgZWxlbURhdGEubmFtZSApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbURhdGEuY2xpY2tlZCA9IGVsZW1EYXRhLmNsaWNrZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbURhdGEuY2xpY2tlZFByZXYgPSBlbGVtRGF0YS5jbGlja2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCggJyMnICsgdG9vbHRpcElkICkuZmluZCggJ3NwYW4nICkuaHRtbCggZWxlbURhdGEuY2xpY2tlZCArICcgPC9icj4gJyArIGVsZW1EYXRhLm5hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSApO1xuICAgIH0gKTtcbn0gKSggalF1ZXJ5ICk7XG4vLyAtLS0tLS0tLS0tIFBvc3Qgc2VhcmNoIG1ldGhvZCAtLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiggZnVuY3Rpb24gKCAkICkge1xuICAgICQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRidG5BcnJheSA9ICQoICcucG9zdC1zZWFyY2gnICkuZmluZCggJy5idG4tcmVzJyApO1xuICAgICAgICB2YXIgcmVzQ29udGVudDtcblxuICAgICAgICAkYnRuQXJyYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50RGVmYXVsdCggZXZlbnQgKTtcbiAgICAgICAgICAgIHJlc0NvbnRlbnQoICQoIHRoaXMgKSApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXNDb250ZW50ID0gZnVuY3Rpb24gKCBhcmcgKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gJyNyZXNfJyArICQoIGFyZyApLmRhdGEoICdyZXMnICk7XG5cbiAgICAgICAgICAgIGlmICggJCggcmVzICkuaGFzQ2xhc3MoICdoaWRlJyApICkge1xuICAgICAgICAgICAgICAgICQoIHJlcyApLmhpZGUoKS5yZW1vdmVDbGFzcyggJ2hpZGUnICkuc2xpZGVEb3duKCA0MDAgKTtcbiAgICAgICAgICAgICAgICBpZiAoICQoIHJlcyApLm5leHQoICcucGFnaW5hdGlvbicgKS5oYXNDbGFzcyggJ2hpZGUnICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoIHJlcyApLm5leHQoICcucGFnaW5hdGlvbicgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCBhcmcgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICB9ICk7XG59ICkoIGpRdWVyeSApO1xuLy8gLS0tLS0tLS0tLSBsaXN0IGVtYWlscyBtZXRob2QgLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47KGZ1bmN0aW9uICgkKSB7XG4gICAgLyogYm9keS4uLiAqL1xuICAgIHZhciAkbGlzdF9lbWFpbCA9ICQoJy5wb3N0LWxpc3QtZW1haWwnKTtcblxuICAgICRsaXN0X2VtYWlsLmZpbmQoJy5jb2xsZWN0aW9uLWhlYWRlcicpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAgICAgIHJlbW92ZUV2ZW50RGVmYXVsdChldmVudCk7XG5cbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCcuY29sbGVjdGlvbi1pdGVtJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmNvbGxlY3Rpb24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkbGlzdF9lbWFpbC5maW5kKCcuY29sbGVjdGlvbi1pdGVtJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJGxpc3RfZW1haWwuZmluZCgnLmNvbGxlY3Rpb24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmNvbGxlY3Rpb24taXRlbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5jb2xsZWN0aW9uLWl0ZW0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKGpRdWVyeSk7XG4vLyAtLS0tLS0tLS0tLSBVc2VycyBmb3JtIG1ldGhvZCAtLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjsoZnVuY3Rpb24gKCAkICkge1xuICAgIC8vIE1ldGhvZHMgZm9yIHRlc3RpbmcgdGhlIHZhbGlkYXRpb24gZm9ybVxuICAgIC8vIC0gdXNlciBmb3Jtc1xuICAgIC8vIC0gcGFzc3dvcmRcbiAgICAvLyAtIHNlYXJjaFxuICAgIHZhciAkYnRuRGlzYWJsZWQgPSAkKCAnYnV0dG9uLmRpc2FibGVkJyApO1xuICAgIHZhciAkcGFzc3dvcmRMb2dpbiA9ICQoICcjcGFzc3dvcmRMb2dpbicgKTtcblxuICAgIC8vIC0tLS0tLS0gVXNlciBGb3JtcyAtLS0tLS0tXG4gICAgLy8gLSByZWdpc3RlclxuICAgIC8vIC0gbG9naW5cbiAgICB2YXIgJG9ial9yZWdpc3RlciA9ICQoICcjdXNlcnNMb2dpbicgKTtcbiAgICB2YXIgJHVGQnRuID0gJCggJy51LWYtYnRuLXByZXYnICk7XG4gICAgdmFyIHRoaXNfaHJlZjtcblxuICAgIGZ1bmN0aW9uIHdpZHRoX3RhYl9yZWdpc3RlciggYXJndW1lbnQgKSB7XG4gICAgICAgIHZhciBhcmd1bWVudCA9IGFyZ3VtZW50O1xuXG4gICAgICAgICRvYmpfcmVnaXN0ZXIuZmluZCggJy50YWInICkuY2xpY2soIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG5cbiAgICAgICAgICAgIHZhciB0aGlzX2hyZWYgPSAkKCB0aGlzICkuZmluZCggJ2EnICkuYXR0ciggJ2hyZWYnIClcblxuICAgICAgICAgICAgaWYgKCB0aGlzX2hyZWYgPT0gYXJndW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgJG9ial9yZWdpc3Rlci5hZGRDbGFzcyggJ3JlZ2lzdGVyLWZvcm0nICk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkb2JqX3JlZ2lzdGVyLmZpbmQoICcucmVnaXN0ZXItbmF2JyApLnJlbW92ZUNsYXNzKCAnaW52aXNpYmxlJyApO1xuICAgICAgICAgICAgICAgIH0sIDQwMCApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRvYmpfcmVnaXN0ZXIucmVtb3ZlQ2xhc3MoICdyZWdpc3Rlci1mb3JtJyApO1xuICAgICAgICAgICAgICAgICRvYmpfcmVnaXN0ZXIuZmluZCggJy5yZWdpc3Rlci1uYXYnICkuYWRkQ2xhc3MoICdpbnZpc2libGUnICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcbiAgICB9O1xuICAgIHdpZHRoX3RhYl9yZWdpc3RlciggJyN1c2VyUmVnaXN0ZXJUYWJDb250ZW50JyApO1xuXG4gICAgJG9ial9yZWdpc3Rlci5maW5kKCAnLmJ0bi1yZWdpc3Rlci1uYXYnICkuY2xpY2soIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICAgICAgdGhpc19ocmVmID0gJCggdGhpcyApLmF0dHIoICdocmVmJyApO1xuICAgICAgICAkb2JqX3JlZ2lzdGVyLmZpbmQoICcudGFicycgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICRvYmpfcmVnaXN0ZXIuZmluZCggJy5yZWdpc3Rlci1uYXYnICkuYWRkQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAkb2JqX3JlZ2lzdGVyLmZpbmQoICcucmVnaXN0ZXItZm9ybXMgPiAuY2FyZC1pbWFnZS5oaWRlJyApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcbiAgICAgICAgJCggdGhpc19ocmVmICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAkdUZCdG4ucmVtb3ZlQ2xhc3MoICdoaWRlJyApLmFkZENsYXNzKCAncHJldi1yZWdpc3Jlci1uYXYnICk7XG4gICAgfSApO1xuXG5cbiAgICAvLyAtLS0tLS0tIHBhc3N3b3JkIC0tLS0tLS0tXG4gICAgLy8gLSBwYXNzd29yZCBkaXNwbGF5IG1ldGhvZCwgYW5kIGhpZGUgaXQuXG4gICAgLy8gLSBNZXRob2RzIHRvIGRpc3BsYXkgdGhlIHBhc3N3b3JkIGVudGVyaW5nIGFuZCBmb3JtIHJlY292ZXJ5XG5cbiAgICAvLyBwYXNzd29yZCBkaXNwbGF5IG1ldGhvZCwgYW5kIGhpZGUgaXQuXG4gICAgdmFyIGlucHV0QXJyYXlQYXNzd29yZCA9ICQoICdpbnB1dFt0eXBlXj1cInBhc3N3b3JkXCJdJyApLFxuICAgICAgICBpY29uRXllID0gJCggJzxpIGNsYXNzPVwibWRpIG1kaS1leWUgcGFzc3dvcmQtZXllIHNtYWxsIGhpZGVcIj48L2k+JyApO1xuICAgIGlucHV0QXJyYXlQYXNzd29yZC5hZnRlciggaWNvbkV5ZSApO1xuXG4gICAgaW5wdXRBcnJheVBhc3N3b3JkLm9uKCAnaW5wdXQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICB2YXIgaW5wdXRFdmVudFRoaXMgPSAkKCB0aGlzICk7XG4gICAgICAgIGlmICggaW5wdXRFdmVudFRoaXMudmFsKCkubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGlucHV0RXZlbnRUaGlzLm5leHQoICdpLnBhc3N3b3JkLWV5ZScgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dEV2ZW50VGhpcy5uZXh0KCAnaS5wYXNzd29yZC1leWUnICkuYWRkQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgaW5wdXRBcnJheVBhc3N3b3JkLm5leHQoICdpLnBhc3N3b3JkLWV5ZScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgICBpZiAoICQoIHRoaXMgKS5wcmV2KCAnaW5wdXQnICkuYXR0ciggJ3R5cGUnICkgPT0gXCJwYXNzd29yZFwiICkge1xuICAgICAgICAgICAgJCggdGhpcyApLnByZXYoICdpbnB1dCcgKS5hdHRyKCAndHlwZScsICd0ZXh0JyApO1xuICAgICAgICAgICAgJCggdGhpcyApLnJlbW92ZUNsYXNzKCAnbWRpLWV5ZScgKS5hZGRDbGFzcyggJ21kaS1leWUtb2ZmJyApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCggdGhpcyApLnByZXYoICdpbnB1dCcgKS5hdHRyKCAndHlwZScsICdwYXNzd29yZCcgKTtcbiAgICAgICAgICAgICQoIHRoaXMgKS5yZW1vdmVDbGFzcyggJ21kaS1leWUtb2ZmJyApLmFkZENsYXNzKCAnbWRpLWV5ZScgKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG4gICAgLy8gTWV0aG9kcyB0byBkaXNwbGF5IHRoZSBwYXNzd29yZCBlbnRlcmluZyBhbmQgZm9ybSByZWNvdmVyeVxuICAgIHZhciAkcXVlc3Rpb25zTGluayA9ICQoICcucXVlc3Rpb25zID4gYScgKTtcbiAgICB2YXIgJHNpYmxpbmdzQ2FyZENvbnRlbnQsIGlkO1xuXG4gICAgJHF1ZXN0aW9uc0xpbmsuY2xpY2soIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICAgICAgaWQgPSAkKCB0aGlzICkuYXR0ciggJ2hyZWYnICk7XG5cbiAgICAgICAgaWYgKCAkKCBpZCApICkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnREZWZhdWx0KCBldmVudCApO1xuXG4gICAgICAgICAgICAkc2libGluZ3NDYXJkQ29udGVudCA9ICQoIGlkICkuc2libGluZ3MoICcuY2FyZC1jb250ZW50JyApO1xuICAgICAgICAgICAgJHNpYmxpbmdzQ2FyZENvbnRlbnQuYWRkQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAgICAgJCggaWQgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICAkdUZCdG4ucmVtb3ZlQ2xhc3MoICdoaWRlJyApLmFkZENsYXNzKCAncHJldi1sb2dpbicgKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgICR1RkJ0bi5jbGljayggZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgICByZW1vdmVFdmVudERlZmF1bHQoIGV2ZW50ICk7XG5cbiAgICAgICAgaWYgKCAkKCB0aGlzICkuaGFzQ2xhc3MoICdwcmV2LWxvZ2luJyApICkge1xuICAgICAgICAgICAgJCggaWQgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICAkc2libGluZ3NDYXJkQ29udGVudC5yZW1vdmVDbGFzcyggJ2hpZGUnIClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdUZCdG4uYWRkQ2xhc3MoICdoaWRlJyApLnJlbW92ZUNsYXNzKCAncHJldi1sb2dpbicgKTtcbiAgICAgICAgICAgIH0sIDUwMCApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG9ial9yZWdpc3Rlci5maW5kKCAnLnRhYnMnICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAgICAgJG9ial9yZWdpc3Rlci5maW5kKCAnLnJlZ2lzdGVyLW5hdicgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICAkb2JqX3JlZ2lzdGVyLmZpbmQoICcucmVnaXN0ZXItZm9ybXMgPiAuY2FyZC1pbWFnZScgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICAkKCB0aGlzX2hyZWYgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgICAgICAkdUZCdG4uYWRkQ2xhc3MoICdoaWRlJyApLnJlbW92ZUNsYXNzKCAncHJldi1yZWdpc3Jlci1uYXYnICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICAvLyBNZXRob2RzIGludGVyY2VwdCB0aGUgcmVxdWVzdCBhbmQgc2VuZCBhbiBhamF4IHJlcXVlc3RcbiAgICAvLyAtIGV2ZW50IGNsaWNrIHRvIGJ1dHRvblxuICAgIC8vIC0gYWpheCByZXF1ZXN0IGFuZCBwcm9jZXNzaW5nIHJlcXVlc3RcbiAgICB2YXIgJGZvcm1Mb2dpbiA9ICQoICcuZm9ybS1sb2dpbicgKTtcbiAgICB2YXIgdXNlckVtYWlsLCB1c2VyUGFzc3dvcmQsIGJ0blN1Ym1pdCwgYWpheFJlcXVlc3QsIGRhdGFBamF4UmVxdWVzdCwgdXNlckdyZWV0aW5nO1xuXG4gICAgLy8tLS0tLS0tLS0tIGV2ZW50IGNsaWNrIHRvIGJ1dHRvbiAtLS0tLS0tLS0tLVxuICAgICRmb3JtTG9naW4uZmluZCggJ2J1dHRvbicgKS5jbGljayggZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgICByZW1vdmVFdmVudERlZmF1bHQoIGV2ZW50ICk7XG5cbiAgICAgICAgdXNlckVtYWlsID0gJCggJyNlbWFpbExvZ2luJyApLnZhbCgpO1xuICAgICAgICB1c2VyUGFzc3dvcmQgPSAkKCAnI3Bhc3N3b3JkTG9naW4nICkudmFsKCk7XG5cbiAgICAgICAgaWYgKCB1c2VyRW1haWwgJiYgdXNlclBhc3N3b3JkICkge1xuICAgICAgICAgICAgYnRuU3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0blN1Ym1pdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWpheCByZXF1ZXN0XG4gICAgICAgIGlmICggYnRuU3VibWl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgZGF0YUFqYXhSZXF1ZXN0ID0geyBsb2dpbjogdXNlckVtYWlsLCBwYXNzd29yZDogdXNlclBhc3N3b3JkIH07XG4gICAgICAgICAgICBhamF4UmVxdWVzdCggZGF0YUFqYXhSZXF1ZXN0ICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICAvLy0tLS0tLS0tLS0gYWpheCByZXF1ZXN0IGFuZCBwcm9jZXNzaW5nIHJlcXVlc3QgLS0tLS0tLS0tLS1cbiAgICBhamF4UmVxdWVzdCA9IGZ1bmN0aW9uICggYXJndW1lbnQgKSB7XG4gICAgICAgICQuZ2V0KCBcImxvZ2luLnR4dFwiLCBhcmd1bWVudCwgcHJvY2Vzc2luZ1JlcXVlc3QsIFwianNvblwiICk7XG4gICAgfVxuICAgIHByb2Nlc3NpbmdSZXF1ZXN0ID0gZnVuY3Rpb24gKCBkYXRhICkge1xuICAgICAgICBpZiAoIGRhdGEubG9naW4gPT09IGRhdGFBamF4UmVxdWVzdC5sb2dpbiAmJiBkYXRhLnBhc3N3b3JkID09PSBkYXRhQWpheFJlcXVlc3QucGFzc3dvcmQgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ9CV0YHRgtGMINGC0LDQutC40LUg0LTQsNC90L3Ri9C1JyApO1xuICAgICAgICAgICAgdXNlckdyZWV0aW5nKCBkYXRhICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ9Cd0LXRgiDRgtCw0LrQuNGFINC00LDQvdC90YvRhScgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0gdXNlciBncmVldGluZyAtLS0tLS0tLS0tLS0tLVxuICAgIHVzZXJHcmVldGluZyA9IGZ1bmN0aW9uICggYXJndW1lbnQgKSB7XG4gICAgICAgIC8vIGJvZHkuLi5cbiAgICAgICAgdmFyICRmb3JtTG9naW4gPSAkKCAnLmZvcm0tbG9naW4nIClcbiAgICAgICAgdmFyIGhfZl9sID0gJGZvcm1Mb2dpbi5oZWlnaHQoKTtcbiAgICAgICAgdmFyIGRhdGFBcmd1bWVudCA9IGFyZ3VtZW50O1xuICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgdmFyICRsb2FkZXIgPSAkKCAnPGkgY2xhc3M9XCJsb2FkZXJcIj5Mb2FkaW5nLi4uPC9pPicgKTtcblxuICAgICAgICAkZm9ybUxvZ2luLmhlaWdodCggaF9mX2wgKTtcbiAgICAgICAgJGZvcm1Mb2dpbi5maW5kKCAnID4gKicgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG5cbiAgICAgICAgY29udGVudCA9ICc8cD48aW1nIGNvbXBvbmVudHM9XCIgJyArIGRhdGFBcmd1bWVudC5pbWcgKyAnIFwiIGFsdD1cIlwiIC8+PC9wPic7XG4gICAgICAgIGNvbnRlbnQgKz0gJzxoND4nICsgZGF0YUFyZ3VtZW50Lm5hbWUgKyAnPC9oND4nO1xuICAgICAgICBjb250ZW50ICs9ICc8cD4nICsgZGF0YUFyZ3VtZW50LmxvZ2luICsgJzwvcD4nO1xuICAgICAgICBjb250ZW50ICs9ICc8YSBjbGFzcz1cInNpZ24tb3V0XCIgaHJlZj1cIiMhXCI+U2lnbiBvdXQ8L2E+J1xuXG4gICAgICAgICRmb3JtTG9naW4uYWRkQ2xhc3MoICdjZW50ZXIgbG9nZ2VkJyApO1xuICAgICAgICAvLyAkZm9ybUxvZ2luLmh0bWwoJGxvYWRlcik7XG4gICAgICAgICRmb3JtTG9naW4uaHRtbCggY29udGVudCApO1xuXG4gICAgfVxuXG59KSggalF1ZXJ5ICk7XG4vLyAtLS0tLS0tLSBzZWFyY2ggZnVuY3Rpb24gLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjsoZnVuY3Rpb24gKCQpIHtcbiAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgdmFyICRzZWFyY2hCdXR0b24gPSAkKCcuc2VhcmNoLWJ1dHRvbicpO1xuICAgIHZhciAkc2VhcmNoQ2xvc2VCdXR0b24gPSAkKCcuc2VhcmNoLWNsb3NlLWJ1dHRvbicpO1xuICAgIHZhciAkc2VhcmNoV2lkZ2V0ID0gJCgnLnNlYXJjaC13aWRnZXQnKTtcbiAgICB2YXIgJGlkU2VhcmNoSW5wdXQgPSAkKCcjc2VhcmNoLWlucHV0Jyk7XG5cbiAgICBmdW5jdGlvbiBmb2N1c2VkU2VyY2hJbnB1dCgpIHtcbiAgICAgICAgaWYgKCQoJ2lucHV0OmZvY3VzJykpIHtcbiAgICAgICAgICAgICRzZWFyY2hXaWRnZXQuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRzZWFyY2hXaWRnZXQucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRzZWFyY2hCdXR0b24ub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZW1vdmVFdmVudERlZmF1bHQoZXZlbnQpO1xuICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAgICAgICRib2R5LmFkZENsYXNzKCdzZWFyY2gtb3BlbicpO1xuICAgIH0pO1xuXG4gICAgLy8gJHNlYXJjaEJ1dHRvbi5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgIC8vICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgIC8vICAgcmVtb3ZlRXZlbnREZWZhdWx0KGV2ZW50KVxuXG4gICAgLy8gICAkYm9keS5hZGRDbGFzcygnc2VhcmNoLW9wZW4nKTtcbiAgICAvLyAgICRpZFNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgLy8gICAkc2VhcmNoV2lkZ2V0LmFkZENsYXNzKCdmb2N1c2VkJyk7XG4gICAgLy8gfSk7XG5cblxuICAgICRzZWFyY2hDbG9zZUJ1dHRvbi5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICAgICAgJHNlYXJjaFdpZGdldC5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnc2VhcmNoLW9wZW4nKTtcbiAgICB9KTtcblxuXG4gICAgJGlkU2VhcmNoSW5wdXQuZm9jdXNvdXQoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICRzZWFyY2hXaWRnZXQucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICAkaWRTZWFyY2hJbnB1dC5mb2N1cyhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJHNlYXJjaFdpZGdldC5hZGRDbGFzcygnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgICRpZFNlYXJjaElucHV0Lm9uKCdpbnB1dCBrZXl1cCcsIGZ1bmN0aW9uIChldmVudE9iamVjdCkge1xuICAgICAgICB2YXIgbnVtYmVyID0gJCh0aGlzKS52YWwoKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgJHNlYXJjaFdpZGdldC5yZW1vdmVDbGFzcygndGV4dC1lbnRlcmVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2VhcmNoV2lkZ2V0LmFkZENsYXNzKCd0ZXh0LWVudGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59KGpRdWVyeSkpO1xuLy8gLS0tLS0tLS0gc2xpZGVyIGZ1bmN0aW9uIC0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47KGZ1bmN0aW9uICgkKSB7XG4gICAgdmFyIG1ldGhvZHMgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBhdXRvU2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgICAgIGludGVydmFsOiA2MDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgZWFjaCBzbGlkZXIsIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZlxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIHNsaWRlIGlzIGFjdGl2ZSBhbmQgaXRzIGFzc29jaWF0ZWQgY29udGVudFxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyICRzbGlkZXIgPSAkdGhpcy5maW5kKCd1bC5zbGlkZXMnKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHZhciAkc2xpZGVzID0gJHNsaWRlci5maW5kKCc+IGxpJyk7XG4gICAgICAgICAgICAgICAgdmFyICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgIHZhciAkYWN0aXZlLCAkaW5kaWNhdG9ycywgJGludGVydmFsLCAkbmF2aWdhdGlvbiwgJHpvb21OYXYsIGludGVydmFsRnVuY3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKCRhY3RpdmVfaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRzbGlkZXMuZXEoJGFjdGl2ZV9pbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNpdGlvbnMgdGhlIGNhcHRpb24gZGVwZW5kaW5nIG9uIGFsaWdubWVudFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhcHRpb25UcmFuc2l0aW9uKGNhcHRpb24sIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwiY2VudGVyLWFsaWduXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAtMTAwfSwge2R1cmF0aW9uOiBkdXJhdGlvbiwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcInJpZ2h0LWFsaWduXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAxMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYXB0aW9uLmhhc0NsYXNzKFwibGVmdC1hbGlnblwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMCwgdHJhbnNsYXRlWDogLTEwMH0sIHtkdXJhdGlvbjogZHVyYXRpb24sIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIHRyYW5zaXRpb24gdGhlIHNsaWRlIHRvIGFueSBpbmRleCBvZiB0aGUgbmV4dCBzbGlkZVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVUb1NsaWRlKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdyYXAgYXJvdW5kIGluZGljZXMuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49ICRzbGlkZXMubGVuZ3RoKSBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMCkgaW5kZXggPSAkc2xpZGVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBkbyBpZiBpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgIGlmICgkYWN0aXZlX2luZGV4ICE9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlID0gJHNsaWRlcy5lcSgkYWN0aXZlX2luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjYXB0aW9uID0gJGFjdGl2ZS5maW5kKCcuY2FwdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRhY3RpdmUudmVsb2NpdHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlcy5ub3QoJy5hY3RpdmUnKS52ZWxvY2l0eSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMCwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvblRyYW5zaXRpb24oJGNhcHRpb24sIG9wdGlvbnMudHJhbnNpdGlvbik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lcSgkYWN0aXZlX2luZGV4KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2xpZGVzLmVxKGluZGV4KS5maW5kKCcuY2FwdGlvbicpLnZlbG9jaXR5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IG9wdGlvbnMudHJhbnNpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbFxuICAgICAgICAgICAgICAgIGludGVydmFsRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2xpZGVzLmxlbmd0aCA9PSAkYWN0aXZlX2luZGV4ICsgMSkgJGFjdGl2ZV9pbmRleCA9IDA7IC8vIGxvb3AgdG8gc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlICRhY3RpdmVfaW5kZXggKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBpbWcgY29tcG9uZW50cyBpbnRvIGJhY2tncm91bmQtaW1hZ2VcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbWdDc3NCYWNrZ3JvdW5kKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvZHkuLi5cbiAgICAgICAgICAgICAgICAgICAgJChhcmd1bWVudCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXJCYXNlNjQgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdzcmMnKSAhPT0gcGxhY2Vob2xkZXJCYXNlNjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJCh0aGlzKS5hdHRyKCdzcmMnKSArICcpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3JjJywgcGxhY2Vob2xkZXJCYXNlNjQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaGVpZ2h0IG9mIHNsaWRlclxuICAgICAgICAgICAgICAgIC8vIElmIGZ1bGxzY3JlZW4sIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoISR0aGlzLmhhc0NsYXNzKCdmdWxsc2NyZWVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGhlaWdodCBpZiBpbmRpY2F0b3JzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5oZWlnaHQob3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuaGVpZ2h0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkc2xpZGVyLmhlaWdodChvcHRpb25zLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGNhcHRpb25zXG4gICAgICAgICAgICAgICAgJHNsaWRlcy5maW5kKCcuY2FwdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uVHJhbnNpdGlvbigkKHRoaXMpLCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgLy8gZHluYW1pY2FsbHkgYWRkIG5hdmlnYXRpb24gbmV4dCBhbmQgcHJldlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmlnYXRpb24gPSAkKCc8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1zbGlkZXJcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmlnYXRpb24uYXBwZW5kKCc8ZGl2IGNsYXNzPVwicHJldi1idG4td3JhcHBlclwiPjxkaXYgY2xhc3M9XCJwcmV2IGJ0bi1mbG9hdGluZyBpY29uLWZsb2F0aW5nIHdhdmVzLWVmZmVjdFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19iYWNrPC9pPjwvZGl2PjwvZGl2PicpXG4gICAgICAgICAgICAgICAgICAgICRuYXZpZ2F0aW9uLmFwcGVuZCgnPGRpdiBjbGFzcz1cIm5leHQtYnRuLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwibmV4dCBidG4tZmxvYXRpbmcgaWNvbi1mbG9hdGluZyB3YXZlcy1lZmZlY3RcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfZm9yd2FyZDwvaT48L2Rpdj48L2Rpdj4nKVxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5hcHBlbmQoJG5hdmlnYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICRuYXZpZ2F0aW9uLmZpbmQoJy5uZXh0JykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJG5hdmlnYXRpb24uZmluZCgnLnByZXYnKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCc0LXRgtC+0LQg0YPQstC10LvQuNGH0LXQvdC40Y8g0LrQsNGA0YLQuNC90LrQuCDQsCDRgtCw0Log0LbQtSDRgdCw0LzQsCDQvdCw0LLQuNCz0LDRhtC40Y8g0LTQu9GPINGN0YLQvtCz0L4uXG4gICAgICAgICAgICAgICAgdmFyICRET01fYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICB2YXIgeCwgeTtcbiAgICAgICAgICAgICAgICB2YXIgJGljb25NYWduaWZ5UGx1cyA9ICQoJzxpIGNsYXNzPVwibWRpIG1kaS1tYWduaWZ5LXBsdXNcIj48L2k+Jyk7XG4gICAgICAgICAgICAgICAgdmFyICRtb2RhbE92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIHZhciAkbW9kYWwgPSAkKCc8ZGl2IGlkPVwibW9kYWwtc2xpZGUtaW1nXCIgY2xhc3M9XCJtb2RhbCBtb2RhbC1zbGlkZS1pbWdcIj48ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICAgICAgJHpvb21OYXYgPSAkKCc8YSBjbGFzcz1cInpvb20tbmF2XCIgaHJlZj1cIiNtb2RhbC1zbGlkZS1pbWdcIj48L2E+JylcbiAgICAgICAgICAgICAgICAkdGhpcy5hcHBlbmQoJHpvb21OYXYpO1xuXG5cbiAgICAgICAgICAgICAgICAkem9vbU5hdi5tb3VzZW1vdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKCRpY29uTWFnbmlmeVBsdXMpO1xuICAgICAgICAgICAgICAgICAgICAkaWNvbk1hZ25pZnlQbHVzLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBldmVudC5vZmZzZXRYICsgMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGV2ZW50Lm9mZnNldFkgLSAxNVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICR6b29tTmF2Lm1vdXNlbGVhdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGJvZHkuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgJHpvb21OYXYuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgJHpvb21OYXYuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnREZWZhdWx0KGV2ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAkRE9NX2JvZHkuYXBwZW5kKCRtb2RhbE92ZXJsYXkpO1xuICAgICAgICAgICAgICAgICAgICAkRE9NX2JvZHkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJChkb2N1bWVudCkud2lkdGgoKVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyICRpbWdBY3RpdmUgPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5maW5kKCdpbWcnKS5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICRtb2RhbC5maW5kKCcubW9kYWwtY29udGVudCcpLmFwcGVuZCgkaW1nQWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgJERPTV9ib2R5LmFwcGVuZCgkbW9kYWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICRtb2RhbE92ZXJsYXkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzEwMDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJG1vZGFsLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6IDEwMDNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJG1vZGFsT3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMC41fSwge2R1cmF0aW9uOiAzNTAsIHF1ZXVlOiBmYWxzZSwgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIn0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBEZWZpbmUgQm90dG9tIFNoZWV0IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICB2YXIgZW50ZXJWZWxvY2l0eU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIlxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAkLlZlbG9jaXR5Lmhvb2soJG1vZGFsLCBcInNjYWxlWFwiLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICAkbW9kYWwuY3NzKHt0b3A6ICcwJ30pO1xuICAgICAgICAgICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoe3RvcDogJzMlJywgb3BhY2l0eTogMSwgc2NhbGVYOiAnMSd9LCBlbnRlclZlbG9jaXR5T3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRpbWdBY3RpdmUud2lkdGgoKSA+ICRpbWdBY3RpdmUuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltZ0FjdGl2ZS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGltZ0FjdGl2ZS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYXgtaGVpZ2h0JzogJCh3aW5kb3cpLmhlaWdodCgpIC0gODBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRET01fYm9keTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRtb2RhbE92ZXJsYXkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnREZWZhdWx0KGV2ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAkbW9kYWxPdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMub3V0X2R1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlT3V0UXVhcnRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpdFZlbG9jaXR5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VPdXRDdWJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGFsLmZpbmQoJy5tb2RhbC1jb250ZW50JykuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7ZGlzcGxheTogXCJub25lXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbW9kYWwuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGFsT3ZlcmxheS5kZXRhY2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9wOiAwLCBvcGFjaXR5OiAwLCBzY2FsZVg6IDAuN30sXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0VmVsb2NpdHlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgJERPTV9ib2R5LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkRE9NX2JvZHk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBkeW5hbWljYWxseSBhZGQgaW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcblxuICAgICAgICAgICAgICAgICAgICAkc2xpZGVzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGljYXRvciA9ICQoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5kaWNhdG9ySW1nQmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ2ltZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluZGljYXRvckltZ0JnID0gJCh0aGlzKS5maW5kKCdpbWcnKS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ0Nzc0JhY2tncm91bmQoJGluZGljYXRvckltZ0JnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJGluZGljYXRvci5hcHBlbmQoJGluZGljYXRvckltZ0JnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGNsaWNrcyBvbiBpbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5kaWNhdG9yLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHBhcmVudCA9ICRzbGlkZXIucGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJfaW5kZXggPSAkcGFyZW50LmZpbmQoJCh0aGlzKSkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlVG9TbGlkZShjdXJyX2luZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IGludGVydmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXV0b1Njcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxGdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmFwcGVuZCgkaW5kaWNhdG9ycyk7XG4gICAgICAgICAgICAgICAgICAgICRpbmRpY2F0b3JzID0gJHRoaXMuZmluZCgndWwuaW5kaWNhdG9ycycpLmZpbmQoJ2xpLmluZGljYXRvci1pdGVtJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHNsaWRlcy5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKCRhY3RpdmVfaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkanVzdCBoZWlnaHQgdG8gY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgICAgICRhY3RpdmUuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRhY3RpdmUuZmluZCgnLmNhcHRpb24nKS52ZWxvY2l0eSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDBcbiAgICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiBvcHRpb25zLnRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhdXRvIHNjcm9sbFxuICAgICAgICAgICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIHBhdXNlIHNjcm9sbGluZyBob3ZlclxuICAgICAgICAgICAgICAgICR0aGlzLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXV0b1Njcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBIYW1tZXJKUywgU3dpcGUgbmF2aWdhdGlvblxuXG4gICAgICAgICAgICAgICAgLy8gVG91Y2ggRXZlbnRcbiAgICAgICAgICAgICAgICB2YXIgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgc3dpcGVSaWdodCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgJHRoaXMuaGFtbWVyKHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBpbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS5nZXN0dXJlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmRlbHRhWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3Vycl9zbGlkZSA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IHhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN3aXBlIExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDQgJiYgKHggPiAoJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYIDwgLTAuNjUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTd2lwZSBSaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAyICYmICh4IDwgKC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYID4gMC42NSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZUxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIFNsaWRlIEJlaGluZCBhY3RpdmUgc2xpZGUgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRfc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRjdXJyX3NsaWRlLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRzbGlkZXMuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dF9zbGlkZS52ZWxvY2l0eSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZVJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRjdXJyX3NsaWRlLnByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dF9zbGlkZSA9ICRzbGlkZXMubGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0X3NsaWRlLnZlbG9jaXR5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSkuYmluZCgncGFuZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyX3NsaWRlID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzd2lwZVJpZ2h0ICYmICFzd2lwZUxlZnQgfHwgJHNsaWRlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBvcmlnaW5hbCBzcG90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzd2lwZUxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlVG9TbGlkZShjdXJyX2luZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAwfSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3dpcGVSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUb1NsaWRlKGN1cnJfaW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDogJHRoaXMuaW5uZXJXaWR0aCgpfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAwfSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RhcnQgaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2xpZGVzLmxlbmd0aCA9PSAkYWN0aXZlX2luZGV4ICsgMSkgJGFjdGl2ZV9pbmRleCA9IDA7IC8vIGxvb3AgdG8gc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAkYWN0aXZlX2luZGV4ICs9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQnNC10YLQvtC00Ysg0YPQv9GA0LDQstC70LXQvdC40Y8g0YHQu9Cw0LnQtNC10YDQvtC8XG4gICAgICAgICAgICAgICAgJHRoaXMub24oJ3NsaWRlclBhdXNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkdGhpcy5vbignc2xpZGVyU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxGdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICR0aGlzLm9uKCdzbGlkZXJOZXh0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHRoaXMub24oJ3NsaWRlclByZXYnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJQYXVzZScpO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJTdGFydCcpO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlck5leHQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzbGlkZXJQcmV2Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5zbGlkZXIgPSBmdW5jdGlvbiAobWV0aG9kT3JPcHRpb25zKSB7XG4gICAgICAgIGlmIChtZXRob2RzW21ldGhvZE9yT3B0aW9uc10pIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZE9yT3B0aW9ucykge1xuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50b29sdGlwJyk7XG4gICAgICAgIH1cbiAgICB9OyAvLyBQbHVnaW4gZW5kXG59KGpRdWVyeSkpO1xuKCBmdW5jdGlvbiAoJCkge1xuICAgICQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRoZWxwTWVudSA9ICQoICcjaGVscE1lbnUnICk7XG4gICAgICAgIHZhciAkaGVscENvbnRhaW5lckl0ZW1zID0gJCggJyNoZWxwQ29udGFpbmVySXRlbXMgPiBkaXYnICkuZ2V0KCk7XG4gICAgICAgIHZhciBvZmZzZXRIZWxwTWVudSA9ICRoZWxwTWVudS5vZmZzZXQoKTtcbiAgICAgICAgdmFyIGNsb25lTWVudSA9ICRoZWxwTWVudS5jbG9uZSgpO1xuICAgICAgICB2YXIgc2hvd1RydWUsIHdpbmRTY3JvbGwsIGVsT2Zmc2V0ID0gW10sIGFycmF5RWxQb3NpdGlvbiwgYWN0aXZlTGluaywgYXJyYXlBY3RpdmVFbCwgYXJyYXlJZDtcblxuICAgICAgICBjbG9uZU1lbnUuYWRkQ2xhc3MoICdjbG9uZS1tZW51IGZpeGlkLW1lbnUnICk7XG5cbiAgICAgICAgYXJyYXlJZCA9ICRoZWxwQ29udGFpbmVySXRlbXMubWFwKCBmdW5jdGlvbihlbGVtZW50LCBpZHggKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSAnIycgKyAkKCBlbGVtZW50ICkuYXR0ciggJ2lkJyApO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgYXJyYXlFbFBvc2l0aW9uID0gYXJyYXlJZC5tYXAoIGZ1bmN0aW9uKGVsZW1lbnQsIGlkeCkge1xuICAgICAgICAgICAgZWxPZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkeCxcbiAgICAgICAgICAgICAgICBlbDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICBlbFBvc2l0aW9uOiAkKCBlbGVtZW50ICkub2Zmc2V0KClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBlbE9mZnNldDtcbiAgICAgICAgfSApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2ZU1lbnVJdGVtKCBhcmcgKSB7XG4gICAgICAgICAgICBpZiAoIGFyZyApIHtcbiAgICAgICAgICAgICAgICBhcmcubWFwKGZ1bmN0aW9uKCBlbGVtZW50LCBpZHggKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5lbFBvc2l0aW9uLnRvcCA8ICggd2luZFNjcm9sbCArIDEwMCApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlBY3RpdmVFbCA9IGVsZW1lbnQuZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rID0gJCggJ2FbaHJlZj0gXCInICsgYXJyYXlBY3RpdmVFbCArICdcIl0nICkucGFyZW50KCAnbGknICk7XG4gICAgICAgICAgICAgICAgJGhlbHBNZW51LmZpbmQoICdsaS5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG4gICAgICAgICAgICAgICAgY2xvbmVNZW51LmZpbmQoICdsaS5hY3RpdmUnICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG4gICAgICAgICAgICAgICAgYWN0aXZlTGluay5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhlbHBNZW51U2Nyb2xsKCBhcmcgKSB7XG4gICAgICAgICAgICBpZiAoIGFyZyA+IG9mZnNldEhlbHBNZW51LnRvcCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd0Nsb25lTWVudSggYXJnICkge1xuICAgICAgICAgICAgaWYgKCBhcmcgKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBNZW51LmFkZENsYXNzKCAnaGlkZScgKTtcbiAgICAgICAgICAgICAgICAkKCAnYm9keScgKS5hcHBlbmQoIGNsb25lTWVudSApO1xuICAgICAgICAgICAgICAgIGNsb25lTWVudS5jc3MoIHtcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBvZmZzZXRIZWxwTWVudS5sZWZ0XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkaGVscE1lbnUucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAgICAgICAgICQoICcuY2xvbmUtbWVudScgKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggJCggJ2RpdicgKS5pcyggJyNoZWxwTWVudScgKSApIHtcbiAgICAgICAgICAgIHdpbmRTY3JvbGwgPSAkKCB3aW5kb3cgKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHNob3dUcnVlID0gaGVscE1lbnVTY3JvbGwoIHdpbmRTY3JvbGwgKTtcblxuICAgICAgICAgICAgaWYgKCBzaG93VHJ1ZSApIHtcbiAgICAgICAgICAgICAgICBzaG93Q2xvbmVNZW51KCBzaG93VHJ1ZSApO1xuICAgICAgICAgICAgICAgIGFjdGl2ZU1lbnVJdGVtKCBhcnJheUVsUG9zaXRpb24gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCggd2luZG93ICkuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kU2Nyb2xsID0gJCggd2luZG93ICkuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgc2hvd1RydWUgPSBoZWxwTWVudVNjcm9sbCggd2luZFNjcm9sbCApO1xuICAgICAgICAgICAgICAgIHNob3dDbG9uZU1lbnUoIHNob3dUcnVlICk7XG4gICAgICAgICAgICAgICAgYWN0aXZlTWVudUl0ZW0oIGFycmF5RWxQb3NpdGlvbiApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICAkKCBkb2N1bWVudCApLm9uKCdjbGljaycsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFdmVudERlZmF1bHQoIGV2ZW50ICk7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmtIcmVmSWQgPSAkKCB0aGlzICkuYXR0ciggJ2hyZWYnICk7XG4gICAgICAgICAgICAgICAgJCggJ2h0bWwsIGJvZHknICkuYW5pbWF0ZSggeyBzY3JvbGxUb3A6ICQoIGxpbmtIcmVmSWQgKS5vZmZzZXQoKS50b3AgLSAyMCB9ICk7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG59ICkoIGpRdWVyeSApO1xuKGZ1bmN0aW9uICggJCApIHtcbiAgICAkKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZXRob2RzID0ge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCBvcHRpb25zICkge1xuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW06ICQoIHRoaXMgKS5maW5kKCAnLmNhcmQtdGl0bGUgYS50aXRsZS1saW5rJyApLmdldCgpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAkKCB0aGlzICkuZmluZCggJy5jYXJkLWNvbnRlbnQgcCcgKS5nZXQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRTaWduc0ZvclRpdGxlOiA1NSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRTaWduc0ZvckNvbnRlbnQ6IDU1XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoIGRlZmF1bHRzLCBvcHRpb25zICk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiDRgW9udGVudFByb2Nlc3NpbmcoaHRtbFRpdGxlTGluaywgaHRtbENvbnRlbnQsIGxpbWl0U2lnbnNGb3JUaXRsZSwgbGltaXRTaWduc0ZvckNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRodG1sVGl0bGVMaW5rID0gJCggaHRtbFRpdGxlTGluayApLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWxDb250ZW50ID0gJCggaHRtbENvbnRlbnQgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0Q29udGVudCA9ICggJGh0bWxDb250ZW50LnRleHQoKS5sZW5ndGggLyAyICkgLSAzO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkaHRtbFRpdGxlTGluay50ZXh0KCkubGVuZ3RoID49IGxpbWl0U2lnbnNGb3JUaXRsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sVGl0bGVMaW5rLnRleHQoICRodG1sVGl0bGVMaW5rLnRleHQoKS5zdWJzdHJpbmcoIDAsIGxpbWl0U2lnbnNGb3JUaXRsZSAtIDMgKSArICcuLi4nICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbENvbnRlbnQudGV4dCggJGh0bWxDb250ZW50LnRleHQoKS5zdWJzdHJpbmcoIDAsIGxpbWl0U2lnbnNGb3JDb250ZW50IC8gMS41ICkgKyAnLi4uJyApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAkaHRtbFRpdGxlTGluay50ZXh0KCkubGVuZ3RoIDwgKCBsaW1pdFNpZ25zRm9yVGl0bGUgLyAyICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbENvbnRlbnQudGV4dCggJGh0bWxDb250ZW50LnRleHQoKS5zdWJzdHJpbmcoIDAsIGxpbWl0U2lnbnNGb3JDb250ZW50IC0gMyApICsgJy4uLicgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggJGh0bWxUaXRsZUxpbmsudGV4dCgpLmxlbmd0aCA8IGxpbWl0U2lnbnNGb3JUaXRsZSAmJiAkaHRtbFRpdGxlTGluay50ZXh0KCkubGVuZ3RoID4gKCBsaW1pdFNpZ25zRm9yVGl0bGUgLyAyICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbENvbnRlbnQudGV4dCggJGh0bWxDb250ZW50LnRleHQoKS5zdWJzdHJpbmcoIDAsIGxpbWl0U2lnbnNGb3JDb250ZW50IC8gMS41ICkgKyAnLi4uJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCggdGhpcyApLmVhY2goIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2FyZEVsZW0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb250ZW50Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgINGBb250ZW50UHJvY2Vzc2luZyhvcHRpb25zLmNhcmRFbGVtLCBvcHRpb25zLmNvbnRlbnRbMF0sIG9wdGlvbnMubGltaXRTaWduc0ZvclRpdGxlLCBvcHRpb25zLmxpbWl0U2lnbnNGb3JDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0YFvbnRlbnRQcm9jZXNzaW5nKG9wdGlvbnMuY2FyZEVsZW0sIG9wdGlvbnMuY29udGVudCwgb3B0aW9ucy5saW1pdFNpZ25zRm9yVGl0bGUsIG9wdGlvbnMubGltaXRTaWduc0ZvckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jYXJkRWxlbS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgINGBb250ZW50UHJvY2Vzc2luZyhvcHRpb25zLmNhcmRFbGVtW2ldLCBvcHRpb25zLmNvbnRlbnRbaV0sIG9wdGlvbnMubGltaXRTaWduc0ZvclRpdGxlLCBvcHRpb25zLmxpbWl0U2lnbnNGb3JDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQuZm4ubGltaXRhdGlvbk91dHB1dENoYXJlYWN0ZXJzID0gZnVuY3Rpb24gKCBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAgICAgICBpZiAoIG1ldGhvZHNbIG1ldGhvZE9yT3B0aW9ucyBdICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2RzWyBtZXRob2RPck9wdGlvbnMgXS5hcHBseSggdGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kT3JPcHRpb25zICkge1xuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgbWV0aG9kT3JPcHRpb25zICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkubGltaXRhdGlvbk91dHB1dENoYXJlYWN0ZXJzJyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9OyAvLyBQbHVnaW4gZW5kXG4gICAgfSApO1xufSkoIGpRdWVyeSApO1xuLy8gLS0tLS0tLS0tLS0tIGluaXQgY29tcG9uZW50cyAtLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4oZnVuY3Rpb24gKCAkICkge1xuXG4gICAgJCggZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLSBpbml0IGNvbXBvbmVudHMgLS0tLS0tLS0tLVxuICAgICAgICAkKCAnLmhvdC1zdG9yeScgKS5saW1pdGF0aW9uT3V0cHV0Q2hhcmVhY3RlcnMoIHsgbGltaXRTaWduc0ZvclRpdGxlOiA4NiwgbGltaXRTaWduc0ZvckNvbnRlbnQ6IDMyNyB9ICk7XG4gICAgICAgICQoICcjdG9wQmVzY2h3ZXJkZW4nICkubGltaXRhdGlvbk91dHB1dENoYXJlYWN0ZXJzKCB7IGxpbWl0U2lnbnNGb3JUaXRsZTogOTQsIGxpbWl0U2lnbnNGb3JDb250ZW50OiAxMzUgfSApO1xuICAgICAgICAkKCAnI25ldWVzdGVCZXNjaHdlcmRlbicgKS5saW1pdGF0aW9uT3V0cHV0Q2hhcmVhY3RlcnMoIHsgbGltaXRTaWduc0ZvclRpdGxlOiAxNTQsIGxpbWl0U2lnbnNGb3JDb250ZW50OiAyMjUgfSApO1xuICAgICAgICAvLyBGb3Jtc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgJCggJ3NlbGVjdCcgKS5tYXRlcmlhbF9zZWxlY3QoKTtcbiAgICAgICAgJCggJyN0ZXh0YXJlYTEnICkudHJpZ2dlciggJ2F1dG9yZXNpemUnICk7XG5cbiAgICAgICAgJCggJ2lucHV0W3R5cGUgPSBcInRleHRcIl0nICkuY2hhcmFjdGVyQ291bnRlcigpO1xuXG4gICAgICAgIHZhciAkcGFnZVdyaXRlID0gJCggJy5wYWdlLXdyaXRlJyApO1xuICAgICAgICB2YXIgJHNsaWRlSW5wdXQgPSAkcGFnZVdyaXRlLmZpbmQoICcjc2xpZGUtaW5wdXQnICk7XG5cbiAgICAgICAgJHNsaWRlSW5wdXQucmVtb3ZlQ2xhc3MoICdoaWRlJyApLnNsaWRlVXAoICdzbG93JyApLmFkZENsYXNzKCAnaGlkZScgKTtcblxuICAgICAgICAkcGFnZVdyaXRlLmZpbmQoICcuYnRuJyApLmNsaWNrKCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgdmFyIGlkID0gJCggdGhpcyApLmF0dHIoICdocmVmJyApO1xuICAgICAgICAgICAgaWYgKCBpZCA9PT0gJyNzbGlkZS1pbnB1dCcgKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnREZWZhdWx0KCBldmVudCApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCAkKCBpZCApLmhhc0NsYXNzKCAnaGlkZScgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCggaWQgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICkuc2xpZGVEb3duKCAnc2xvdycgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCBpZCApLnNsaWRlVXAoICdzbG93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCggdGhpcyApLmFkZENsYXNzKCAnaGlkZScgKTtcbiAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIFNsaWRlIE5hdlxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICQoICcuYnV0dG9uLWNvbGxhcHNlJyApLnNsaWRlTmF2KCB7XG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsIC8vIENsb3NlcyBzaWRlLW5hdiBvbiA8YT4gY2xpY2tzLCB1c2VmdWwgZm9yIEFuZ3VsYXIvTWV0ZW9yXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUgLy8gQ2hvb3NlIHdoZXRoZXIgeW91IGNhbiBkcmFnIHRvIG9wZW4gb24gdG91Y2ggc2NyZWVuc1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgLy8gU2xpZGVyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgJCggJy5zbGlkZXItcG9zdCcgKS5zbGlkZXIoIHsgaGVpZ2h0OiA0MDAsIGF1dG9TY3JvbGw6IGZhbHNlIH0gKTtcblxuICAgICAgICAvLyBTbGlja1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICQoIFwiI3RvcEJlc2Nod2VyZGVuXCIgKS5zbGljaygge1xuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA4MDAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9ICk7XG4gICAgICAgICQoIFwiI25ldWVzdGVCZXNjaHdlcmRlblwiICkuc2xpY2soIHtcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIE1vZGFsXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICQoICcubW9kYWwnICkubW9kYWwoIHtcbiAgICAgICAgICAgIGVuZGluZ190b3A6ICczJSdcbiAgICAgICAgfSApO1xuICAgICAgICAkKCAnLm1vZGFsLm1vZGFsLXJlcG9ydCcgKS5tb2RhbCgge1xuICAgICAgICAgICAgZW5kaW5nX3RvcDogJzM1JSdcbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIE5hdiBUaGVtZVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAkKCB3aW5kb3cgKS5yZXNpemUoIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4gICAgICAgICAgICAkKCAndWwjbmF2SGVhZGVyJyApLm5hdlRoZW1lKCB7IGZpeGVkSXRlbXM6IHRydWUsIGluZGVudEl0ZW06IDUwIH0gKTtcbiAgICAgICAgICAgICQoICd1bCNuYXZUb3AnICkubmF2VGhlbWUoKTtcbiAgICAgICAgICAgICQoICd1bCNuYXZDb250ZW50JyApLm5hdlRoZW1lKCB7IGZpeGVkSXRlbXM6IHRydWUgfSApO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgJCggJ3VsI25hdkhlYWRlcicgKS5uYXZUaGVtZSggeyBmaXhlZEl0ZW1zOiB0cnVlLCBpbmRlbnRJdGVtOiA1MCB9ICk7XG4gICAgICAgICQoICd1bCNuYXZUb3AnICkubmF2VGhlbWUoKTtcbiAgICAgICAgJCggJ3VsI25hdkNvbnRlbnQnICkubmF2VGhlbWUoIHsgZml4ZWRJdGVtczogdHJ1ZSB9ICk7XG5cbiAgICAgICAgLy8gVG9vbHRpcFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAkKCAnLnRvb2x0aXBwZWQnICkudG9vbHRpcCggeyBkZWxheTogNTAsIHBvc2l0aW9uOiAndG9wJyB9ICk7XG5cbiAgICAgICAgLy8gTWV0aG9kc1xuICAgICAgICAvLyAtIEltYWdlIGFkanVzdG1lbnRcbiAgICAgICAgLy8gLSBDYXJkIGNvbW1lbnQgaG92ZXJcbiAgICAgICAgLy8gLSBSYXRpbmdcbiAgICAgICAgLy8gLSBCdXR0b24gY29sbGFwc2VcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAvLyBWYXJpYWJsZXNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdmFyICR1cGxvYWRlZF9pdGVtcyA9ICQoICcudXBsb2FkZWQtaXRlbScgKSxcbiAgICAgICAgICAgICRjYXJkX2NvbW1lbnQgPSAkKCAnLmNhcmQtY29tbWVudCcgKTtcblxuICAgICAgICAvLyBJbWFnZSBhZGp1c3RtZW50IG1ldGhvZFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAkdXBsb2FkZWRfaXRlbXMuZmluZCggJ2ltZycgKS5lYWNoKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXJCYXNlNjQgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gICAgICAgICAgICBpZiAoICQoIHRoaXMgKS5hdHRyKCAnc3JjJyApICE9PSBwbGFjZWhvbGRlckJhc2U2NCApIHtcbiAgICAgICAgICAgICAgICAkKCB0aGlzICkuY3NzKCB7XG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgJCggdGhpcyApLmF0dHIoICdzcmMnICkgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInXG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICQoIHRoaXMgKS5hdHRyKCAnc3JjJywgcGxhY2Vob2xkZXJCYXNlNjQgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIENhcmQgY29tbWVudCBob3ZlclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgJGNhcmRfY29tbWVudC5ob3ZlciggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCggdGhpcyApLmZpbmQoICcucmVwb3J0LWFsZXJ0IGEuaGlkZScgKS5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoIHRoaXMgKS5maW5kKCAnLnJlcG9ydC1hbGVydCBhJyApLmFkZENsYXNzKCAnaGlkZScgKTtcbiAgICAgICAgfSApO1xuXG4gICAgICAgICQoICdhW2hyZWY9XCIjVVNFUi1NSVRHTElFRFNDSEFGVFwiXScgKS5jbGljayggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCggJy51c2VyJyApLnJlbW92ZUNsYXNzKCAnaGlkZScgKTtcbiAgICAgICAgICAgICQoICcuZmlybScgKS5hZGRDbGFzcyggJ2hpZGUnICk7XG4gICAgICAgIH0gKVxuICAgICAgICAkKCAnYVtocmVmPVwiI0ZJUk1BLU1JVEdMSUVEU0NIQUZUXCJdJyApLmNsaWNrKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCAnLmZpcm0nICkucmVtb3ZlQ2xhc3MoICdoaWRlJyApO1xuICAgICAgICAgICAgJCggJy51c2VyJyApLmFkZENsYXNzKCAnaGlkZScgKTtcbiAgICAgICAgfSApXG5cbiAgICAgICAgLy8gUmF0aW5nIG1ldGhvZHNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHZhciAkcmF0aW5nID0gJCggJy5yYXRpbmcnICksXG4gICAgICAgICAgICAkcmF0aW5nVGV4dCA9ICQoICcucmF0aW5nLXRleHQnICk7XG5cbiAgICAgICAgJHJhdGluZy5maW5kKCAnYScgKS5ob3ZlciggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHJhdGluZ1RleHQuZW1wdHkoKTtcbiAgICAgICAgICAgICRyYXRpbmdUZXh0Lmh0bWwoICQoIHRoaXMgKS5hdHRyKCAndGl0bGUnICkgKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHJhdGluZ1RleHQuaHRtbCggJCggdGhpcyApLmF0dHIoICd0aXRsZScgKSApO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgJHJhdGluZy5maW5kKCAnYScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50RGVmYXVsdCggZXZlbnQgKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCAnc3Rhci1zY2FsZScgKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcyggJ3N0YXItc2NhbGUnICk7XG4gICAgICAgICAgICB9LCA0MDAgKTtcbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIEJ1dHRvbiBjb2xsYXBzZVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICQoICcuYnV0dG9uLWNvbGxhcHNlJyApLmNsaWNrKCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnREZWZhdWx0KCBldmVudCApO1xuICAgICAgICAgICAgaWYgKCAhJCggdGhpcyApLmhhc0NsYXNzKCAnYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIC8vIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgICQoIHRoaXMgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCggdGhpcyApLnJlbW92ZUNsYXNzKCAnYWN0aXZlJyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gICAgfSApOyAvLyBlbmQgb2YgZG9jdW1lbnQgcmVhZHlcbn0pKCBqUXVlcnkgKTsgLy8gZW5kIG9mIGpRdWVyeSBuYW1lIHNwYWNlIl0sImZpbGUiOiJpbml0LmpzIn0=
