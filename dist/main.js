(function () {
	'use strict';

	var n,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function y(){return {current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g);}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=o.__v+1,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)));});}function m(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}g=$(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y]);}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l);}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type+!1](n.event?n.event(l):l);}function N(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function $(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new d(g,x),v.constructor=P,v.render=M),b&&b.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),T(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i);}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function H(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else {if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o);}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l);}function S(n,l){O(n,l,o);}function q(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),h(n.type,f,i||n.key,t||n.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l;}throw n},__v:0},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var t$1,u$1,r$1,o$1=0,i$1=[],c$1=n.__b,f$1=n.__r,e$1=n.diffed,a$1=n.__c,v$1=n.unmount;function m$1(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o$1=1,p$1(w$1,n)}function p$1(n,r,o){var i=m$1(t$1++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function y$1(r,o){var i=m$1(t$1++,3);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function h$1(r,o){var i=m$1(t$1++,4);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__h.push(i));}function s$1(n){return o$1=5,d$1(function(){return {current:n}},[])}function _$1(n,t,u){o$1=6,h$1(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function d$1(n,u){var r=m$1(t$1++,7);return k$1(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o$1=8,d$1(function(){return n},t)}function F(n){var r=u$1.context[n.__c],o=m$1(t$1++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u$1)),r.props.value):n.__}function T$1(t,u){n.useDebugValue&&n.useDebugValue(u?u(t):t);}function q$1(n){var r=m$1(t$1++,10),o=l();return r.__=n,u$1.componentDidCatch||(u$1.componentDidCatch=function(n){r.__&&r.__(n),o[1](n);}),[o[0],function(){o[1](void 0);}]}function x$1(){i$1.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i$1=[];}n.__b=function(n){u$1=null,c$1&&c$1(n);},n.__r=function(n){f$1&&f$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},n.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$1.push(o)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x$1)),u$1=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a$1&&a$1(t,u);},n.unmount=function(t){v$1&&v$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};var b$1="function"==typeof requestAnimationFrame;function g$1(n){var t=u$1;"function"==typeof n.__c&&n.__c(),u$1=t;}function j$1(n){var t=u$1;n.__c=n.__(),u$1=t;}function k$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

	function S$1(n,t){for(var e in t)n[e]=t[e];return n}function g$2(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w$2(n){this.props=n;}function C$1(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:g$2(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(w$2.prototype=new d).isPureReactComponent=!0,w$2.prototype.shouldComponentUpdate=function(n,t){return g$2(this.props,n)||g$2(this.state,t)};var R=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var x$2="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k$2(n){function t(t,e){var r=S$1({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=x$2,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A$2=function(n,t){return null==n?null:b(b(n).map(t))},N$1={map:A$2,forEach:A$2,count:function(n){return n?b(n).length:0},only:function(n){var t=b(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:b},O$1=n.__e;function L$1(n){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),(n=S$1({},n)).__c=null,n.__k=n.__k&&n.__k.map(L$1)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function F$1(){this.__u=0,this.t=null,this.__b=null;}function M$1(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return v(e,u)}return u.displayName="Lazy",u.__f=!0,u}function I$1(){this.u=null,this.o=null;}n.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);O$1(n,t,e);},(F$1.prototype=new d).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=M$1(r.__v),o=!1,i=function(){o||(o=!0,e.componentWillUnmount=e.__c,u?u(c):c());};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c();};var c=function(){var n;if(!--r.__u)for(r.__v.__k[0]=U(r.state.__e),r.setState({__e:r.__b=null});n=r.t.pop();)n.forceUpdate();};!0===t.__h||r.__u++||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},F$1.prototype.componentWillUnmount=function(){this.t=[];},F$1.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L$1(this.__b)),this.__b=null);var e=t.__e&&v(p,null,n.fallback);return e&&(e.__h=null),[v(p,null,t.__e?null:n.children),e]};var T$2=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function W(n){return this.getChildContext=function(){return n.context},n.children}function j$2(n){var t=this,e=n.i,r=v(W,{context:t.context},n.__v);t.componentWillUnmount=function(){var n=t.l.parentNode;n&&n.removeChild(t.l),L(t.s);},t.i&&t.i!==e&&(t.componentWillUnmount(),t.h=!1),n.__v?t.h?(e.__k=t.__k,O(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),t.__k=e.__k,S("",e),e.appendChild(t.l),t.h=!0,t.i=e,O(r,e,t.l),e.__k=t.__k,t.__k=t.l.__k):t.h&&t.componentWillUnmount(),t.s=r;}function P$1(n,t){return v(j$2,{__v:n,i:t})}(I$1.prototype=new d).__e=function(n){var t=this,e=M$1(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T$2(t,n,r)):u();};e?e(o):o();}},I$1.prototype.render=function(n){this.u=null,this.o=new Map;var t=b(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},I$1.prototype.componentDidUpdate=I$1.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T$2(n,e,t);});};var z$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B$1="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;function H$1(n,t,e){return null==t.__k&&(t.textContent=""),O(n,t),"function"==typeof e&&e(),n?n.__c:null}function Z(n,t,e){return S(n,t),"function"==typeof e&&e(),n?n.__c:null}d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var Y=n.event;function $$1(){}function q$2(){return this.cancelBubble}function G(){return this.defaultPrevented}n.event=function(n){return Y&&(n=Y(n)),n.persist=$$1,n.isPropagationStopped=q$2,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=n.vnode;n.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B$1.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o;}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=b(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),n.props=r;}t&&e.class!=e.className&&(K.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",K)),n.$$typeof=z$1,Q&&Q(n);};var X=n.__r;n.__r=function(n){X&&X(n),J=n.__c;};var nn={ReactCurrentDispatcher:{current:{readContext:function(n){return J.__n[n.__c].props.value}}}},tn="16.8.0";function en(n){return v.bind(null,n)}function rn(n){return !!n&&n.$$typeof===z$1}function un(n){return rn(n)?q.apply(null,arguments):n}function on(n){return !!n.__k&&(O(null,n),!0)}function cn(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=p;var compat_module = {useState:l,useReducer:p$1,useEffect:y$1,useLayoutEffect:h$1,useRef:s$1,useImperativeHandle:_$1,useMemo:d$1,useCallback:A$1,useContext:F,useDebugValue:T$1,version:"16.8.0",Children:N$1,render:H$1,hydrate:Z,unmountComponentAtNode:on,createPortal:P$1,createElement:v,createContext:B,createFactory:en,cloneElement:un,createRef:y,Fragment:p,isValidElement:rn,findDOMNode:cn,Component:d,PureComponent:w$2,memo:C$1,forwardRef:k$2,unstable_batchedUpdates:ln,StrictMode:p,Suspense:F$1,SuspenseList:I$1,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:nn};

	var compat_module$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': compat_module,
		version: tn,
		Children: N$1,
		render: H$1,
		hydrate: Z,
		unmountComponentAtNode: on,
		createPortal: P$1,
		createFactory: en,
		cloneElement: un,
		isValidElement: rn,
		findDOMNode: cn,
		PureComponent: w$2,
		memo: C$1,
		forwardRef: k$2,
		unstable_batchedUpdates: ln,
		StrictMode: fn,
		Suspense: F$1,
		SuspenseList: I$1,
		lazy: D,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: nn,
		createElement: v,
		createContext: B,
		createRef: y,
		Fragment: p,
		Component: d,
		useState: l,
		useReducer: p$1,
		useEffect: y$1,
		useLayoutEffect: h$1,
		useRef: s$1,
		useImperativeHandle: _$1,
		useMemo: d$1,
		useCallback: A$1,
		useContext: F,
		useDebugValue: T$1,
		useErrorBoundary: q$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(compat_module$1);

	var thunkReducer = createCommonjsModule(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(require$$0);
	})(typeof self !== 'undefined' ? self : commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_react__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/dist/";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/thunk-reducer.js");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "./src/thunk-reducer.js":
	/*!******************************!*\
	  !*** ./src/thunk-reducer.js ***!
	  \******************************/
	/*! exports provided: useThunkReducer, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	__webpack_require__.r(__webpack_exports__);
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThunkReducer", function() { return useThunkReducer; });
	/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


	/**
	 * @function Thunk
	 * @param {Dispatch} dispatch
	 * @param {Function} getState
	 * @returns {void|*}
	 */

	/**
	 * @function Dispatch
	 * @param {Object|Thunk} action
	 * @returns {void|*}
	 */

	/**
	 * Augments React's useReducer() hook so that the action
	 * dispatcher supports thunks.
	 *
	 * @param {Function} reducer
	 * @param {*} initialArg
	 * @param {Function} [init]
	 * @returns {[*, Dispatch]}
	 */

	function useThunkReducer(reducer, initialArg) {
	  var init = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a) {
	    return a;
	  };

	  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(init(initialArg)),
	      _useState2 = _slicedToArray(_useState, 2),
	      hookState = _useState2[0],
	      setHookState = _useState2[1]; // State management.


	  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(hookState);
	  var getState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
	    return state.current;
	  }, [state]);
	  var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
	    state.current = newState;
	    setHookState(newState);
	  }, [state, setHookState]); // Reducer.

	  var reduce = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (action) {
	    return reducer(getState(), action);
	  }, [reducer, getState]); // Augmented dispatcher.

	  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (action) {
	    return typeof action === 'function' ? action(dispatch, getState) : setState(reduce(action));
	  }, [getState, setState, reduce]);
	  return [hookState, dispatch];
	}
	/* harmony default export */ __webpack_exports__["default"] = (useThunkReducer);

	/***/ }),

	/***/ "react":
	/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
	  \**************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

	/***/ })

	/******/ });
	});

	});

	var n$1=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n$1(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$2=new Map;function htm(s){var r=t$2.get(this);return r||(r=new Map,t$2.set(this,r)),(r=n$1(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

	const html = htm.bind(v);

	const clamp = (start, end, val) =>
	  Math.max(start, Math.min(end, val));

	/**
	 * This is a simple HTML5 video player API designed to be similar to the HTML5 fetch
	 * API. It prevents the VideoPlayer React Component from having to do too much and
	 * makes unit testing a little easier.
	 */

	let videoEl;

	const registerVideoElement = (el) => {
	  videoEl = el;
	};

	const play = () => {
	  let result;

	  result = videoEl.play();
	  if (result) {
	    result.catch(console.error);
	  }
	};

	const pause = () => {
	  videoEl.pause();
	};

	const setVolume = (level) => {
	  videoEl.volume = level;
	};

	const setMuted = (muted) => {
	  videoEl.muted = muted;
	};

	const setPosition = (position) => {
	  videoEl.currentTime = position;
	};

	// PASSIVE ACTIONS -- THINGS THAT HAVE HAPPENED

	const DURATION_SET = "DURATION_SET";
	const durationSet = (duration) => ({
	  type: DURATION_SET,
	  payload: {
	    duration
	  }
	});

	const VIDEO_STARTED = "VIDEO_STARTED";
	const videoStarted = () => ({
	  type: VIDEO_STARTED
	});

	const VIDEO_PAUSED = "VIDEO_PAUSED";
	const videoPaused = () => ({
	  type: VIDEO_PAUSED
	});

	const VOLUME_CHANGED = "VOLUME_CHANGED";
	const volumeChanged = (volume, muted) => ({
	  type: VOLUME_CHANGED,
	  payload: {
	    volume,
	    muted
	  },
	});

	const TICK = "TICK";
	const tick = (position) => ({
	  type: TICK,
	  payload: {
	    position
	  }
	});

	// ACTIVE ACTIONS -- THINGS THAT NEED TO HAPPEN

	const setPlaying = (playing) => (dispatch) => {
	  if (playing) {
	    play();
	    // play() is a request, so we do not change the state
	  } else {
	    pause();
	    dispatch(videoPaused());
	  }
	};

	const setVolume$1 = (level) => () => {
	  level = clamp(0, 1, level);
	  setVolume(level);
	};

	const setMuted$1 = (muted) => () => {
	  setMuted(muted);
	};

	const setPosition$1 = (position) => () => {
	  setPosition(position);
	};

	const initialState = {
	  duration: 0,
	  playing: false,
	  position: 0,
	  volume: 0,
	  muted: false,
	};

	const reducer = (state, action) => {
	  console.log("⚡", action.type);

	  const inner = (state, action) => {
	    switch (action.type) {
	      case DURATION_SET:
	        return { ...state, duration: action.payload.duration };
	      case TICK:
	        return { ...state, position: action.payload.position };
	      case VIDEO_STARTED:
	        return { ...state, playing: true };
	      case VIDEO_PAUSED:
	        return { ...state, playing: false };
	      case VOLUME_CHANGED:
	        return { ...state, volume: action.payload.volume, muted: action.payload.muted };
	      default:
	        console.error("Unrecognized action in reducer:", action);
	        return state;
	    }
	  };

	  const result = inner(state, action);
	  console.log(result);

	  return result;
	};

	const MED = 0.33;
	const HIGH = 0.66;

	const LeftPanel = ({ state, dispatch }) => {

	  const onPositionChange = (e) => {
	    const val = Number(e.target.value);
	    if (!isNaN(val)) {
	      if (val >= 0 && val <= state.duration) {
	        dispatch(setPosition$1(val));
	      }
	    }
	  };

	  const range1 = d$1(() => state.volume < MED, [state.volume]);
	  const range2 = d$1(() => state.volume >= MED && state.volume < HIGH, [state.volume]);
	  const range3 = d$1(() => state.volume >= HIGH, [state.volume]);

	  return html`
    <div class="panel left">
    
      <div class="form-group">
        <label>
          <input
            type="checkbox"
            checked=${state.playing}
            onclick=${(e) => dispatch(setPlaying(e.target.checked))}
          /> Playing
        </label>
      </div>
    
      <div class="form-group">
        <label>
          <input
            type="checkbox"
            checked=${state.muted}
            onclick=${(e) => dispatch(setMuted$1(e.target.checked))}
          /> Muted
        </label>
      </div>

      <div class="form-group">
        <label>Volume</label><br/>
        <label>
          <input
            type="radio" name="volume" value="low"
            checked=${range1}
            onclick=${() => dispatch(setVolume$1(0.3))}
          /> Low
        </label><br/>
        <label>
          <input
            type="radio" name="volume" value="medium"
            checked=${range2}
            onclick=${() => dispatch(setVolume$1(0.6))}
          /> Medium
        </label><br/>
        <label>
          <input
            type="radio" name="volume" value="high"
            checked=${range3}
            onclick=${() => dispatch(setVolume$1(1))}
          /> High
        </label>
      </div>

      <div class="form-group">
        <label for="position">Position</label>
        <input
          id="position"
          type="text"
          value=${state.position}
          onchange=${onPositionChange}
        />
      </div>

    </div>
  `;
	};

	const debounce = (fn, ms) => {
	  let handle;

	  return (...args) => {
	    let context, later;

	    context = undefined;
	    later = () => {
	      handle = null;
	      fn.apply(context, args);
	    };

	    window.clearTimeout(handle);
	    handle = window.setTimeout(later, ms);
	  };
	};

	const RightPanel = ({ state, dispatch }) => {

	  const onPlayingChange = (e) => dispatch(setPlaying(e.target.value === "playing"));
	  const onVolumeChange = debounce((e) => {
	    const val = Number(e.target.value);
	    if (!isNaN(val) && val >= 0 && val <= 1) {
	      dispatch(setVolume$1(val));
	    }
	  }, 500);

	  const p25 = d$1(() => Math.floor(state.duration / 4), [state.duration]);
	  const p50 = d$1(() => Math.floor(state.duration / 2), [state.duration]);
	  const p75 = d$1(() => Math.floor(3 * state.duration / 4), [state.duration]);

	  const p0to25 = d$1(
	    () => state.position < p25, 
	    [state.position, p25]
	  );
	  const p25to50 = d$1(
	    () => state.position >= p25 && state.position < p50, 
	    [state.position, p25, p50]
	  );
	  const p50to75 = d$1(
	    () => state.position >= p50 && state.position < p75,
	    [state.position, p50, p75]
	  );
	  const p75to100 = d$1(
	    () => state.position >= p75,
	    [state.position, p75]
	  );

	  return html`
    <div class="panel right">

      <div class="form-group">
        <select onchange=${onPlayingChange}>
          <option value="paused" selected=${!state.playing}>Paused</option>
          <option value="playing" selected=${state.playing}>Playing</option>
        </select>
      </div>

      <div class="form-group">
        <label for="volume">Volume</label>
        <input
          id="volume"
          type="text"
          value=${state.volume}
          onchange=${onVolumeChange}
        />
      </div>

      <div class="form-group">
        <label>Position</label><br/>
        <label>
          <input
            type="radio" name="position" value="p0to25"
            checked=${p0to25}
            onclick=${() => dispatch(setPosition$1(0))}
          /> 0-25%
        </label><br/>
        <label>
          <input
            type="radio" name="position" value="p25to50"
            checked=${p25to50}
            onclick=${() => dispatch(setPosition$1(p25))}
          /> 25-50%
        </label><br/>
        <label>
          <input
            type="radio" name="position" value="p50to75"
            checked=${p50to75}
            onclick=${() => dispatch(setPosition$1(p50))}
          /> 50-75%
        </label><br/>
        <label>
          <input
            type="radio" name="position" value="p75to100"
            checked=${p75to100}
            onclick=${() => dispatch(setPosition$1(p75))}
          /> 75-100%
        </label><br/>
      </div>

    </div>
  `;
	};

	const StatusBar = ({ state }) => {
	  let msg, msgClass, seconds;

	  if (state.playing) {
	    msg = "Playing";
	    msgClass = "success";
	  } else {
	    msg = "Paused";
	    msgClass = "info";
	  }

	  seconds = Math.round(state.position * 10 * (1 + Number.EPSILON)) / 10;

	  return html`
    <div class="status">
      <div><span class=${msgClass}>${msg}</span></div>
      <div class="text-right">${seconds} s</div>
    </div>
  `;
	};

	const VideoPlayer = ({ dispatch }) => {
	  const onReady = (videoEl) => {
	    registerVideoElement(videoEl);
	    dispatch(durationSet(videoEl.duration));
	    dispatch(volumeChanged(videoEl.volume, videoEl.muted));
	  };

	  return html`
    <div class="player">
      <video
        src="nasa-flares-480p30.m4v" controls
        onloadeddata=${(e) => onReady(e.target)}
        onpause=${() => dispatch(videoPaused())}
        onplaying=${() => dispatch(videoStarted())}
        ontimeupdate=${(e) => dispatch(tick(e.target.currentTime))}
        onvolumechange=${(e) => dispatch(volumeChanged(e.target.volume, e.target.muted))}
        onwaiting=${() => dispatch(videoPaused())}
      ></video>
    </div>
  `;
	};

	const App = () => {
	  const [state, dispatch] = thunkReducer.useThunkReducer(reducer, initialState);

	  return html`
    <${LeftPanel} state=${state} dispatch=${dispatch} />
    <${VideoPlayer} state=${state} dispatch=${dispatch} />
    <${RightPanel} state=${state} dispatch=${dispatch} />
    <${StatusBar} state=${state} />
  `;
	};

	// Fix for packages that are still checking for process.env.NODE_ENV in ES6 module builds
	window.process = { env: { NODE_DEV: "production" } };

	O(html`<${App}/>`, document.getElementById("app"));

}());
//# sourceMappingURL=main.js.map
