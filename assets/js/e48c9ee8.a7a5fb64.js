"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[5192],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),b=o,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={title:"Listen to new blocks"},c=void 0,l={unversionedId:"api/examples/promise/listen-to-blocks",id:"api/examples/promise/listen-to-blocks",isDocsHomePage:!1,title:"Listen to new blocks",description:"This example shows how to subscribe to new blocks.",source:"@site/docs/api/examples/promise/listen-to-blocks.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/listen-to-blocks",permalink:"/docs/api/examples/promise/listen-to-blocks",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/listen-to-blocks.md",version:"current",frontMatter:{title:"Listen to new blocks"},sidebar:"reference",previous:{title:"Simple Connect",permalink:"/docs/api/examples/promise/simple-connect"},next:{title:"Listen to balance changes",permalink:"/docs/api/examples/promise/listen-to-balance-change"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how to subscribe to new blocks."),(0,i.kt)("p",null,"It displays the block number every time a new block is seen by the node you are connected to."),(0,i.kt)("p",null,"NOTE: The example runs until you stop it with CTRL+C"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\nasync function main () {\n  // Here we don't pass the (optional) provider, connecting directly to the default\n  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure\n  // the API has connected to the node and completed the initialisation process\n  const api = await ApiPromise.create();\n\n  // We only display a couple, then unsubscribe\n  let count = 0;\n\n  // Subscribe to the new headers on-chain. The callback is fired when new headers\n  // are found, the call itself returns a promise with a subscription that can be\n  // used to unsubscribe from the newHead subscription\n  const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {\n    console.log(`Chain is at block: #${header.number}`);\n\n    if (++count === 256) {\n      unsubscribe();\n      process.exit(0);\n    }\n  });\n}\n\nmain().catch(console.error);\n")))}m.isMDXComponent=!0}}]);