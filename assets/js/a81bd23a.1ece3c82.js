"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8296],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=a(r),f=o,m=b["".concat(c,".").concat(f)]||b[f]||l[f]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<s;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5733:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return p},default:function(){return b}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),i=["components"],u={},c="Unsubscribe from listening to updates",a={unversionedId:"api/examples/rxjs/unsubscribe/README",id:"api/examples/rxjs/unsubscribe/README",isDocsHomePage:!1,title:"Unsubscribe from listening to updates",description:"This example shows how to subscribe to and later unsubscribe from listening to block updates.",source:"@site/docs/api/examples/rxjs/04_unsubscribe/README.md",sourceDirName:"api/examples/rxjs/04_unsubscribe",slug:"/api/examples/rxjs/unsubscribe/README",permalink:"/docs/api/examples/rxjs/unsubscribe/README",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/rxjs/04_unsubscribe/README.md",version:"current",frontMatter:{}},p=[],l={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unsubscribe-from-listening-to-updates"},"Unsubscribe from listening to updates"),(0,s.kt)("p",null,"This example shows how to subscribe to and later unsubscribe from listening to block updates."),(0,s.kt)("p",null,"In this example we're calling the built-in unsubscribe() function after a timeOut of 20s to cleanup and unsubscribe from listening to updates."),(0,s.kt)("p",null,"<<< @/docs/examples/rx/04_unsubscribe/index.js"))}b.isMDXComponent=!0}}]);