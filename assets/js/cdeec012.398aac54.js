"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4399],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3244:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Verify Signature"},c=void 0,u={unversionedId:"util-crypto/examples/verify-signature",id:"util-crypto/examples/verify-signature",isDocsHomePage:!1,title:"Verify Signature",description:"This function will return true if a message passed as parameter has been signed by the passed address",source:"@site/docs/util-crypto/examples/verify-signature.md",sourceDirName:"util-crypto/examples",slug:"/util-crypto/examples/verify-signature",permalink:"/docs/util-crypto/examples/verify-signature",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/examples/verify-signature.md",version:"current",frontMatter:{title:"Verify Signature"},sidebar:"reference",previous:{title:"Generate a Multisig Account",permalink:"/docs/util-crypto/examples/create-multisig"},next:{title:"Hash Data",permalink:"/docs/util-crypto/examples/hash-data"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function will return true if a message passed as parameter has been signed by the passed address "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { decodeAddress, signatureVerify } = require('@polkadot/util-crypto');\nconst { u8aToHex } = require('@polkadot/util');\n\nconst isValidSignature = (signedMessage, signature, address) => {\n  const publicKey = decodeAddress(address);\n  const hexPublicKey = u8aToHex(publicKey);\n\n  return signatureVerify(signedMessage, signature, hexPublicKey).isValid;\n};\n\nconst isValid = isValidSignature(\n  'This is a text message',\n  '0x2aeaa98e26062cf65161c68c5cb7aa31ca050cb5bdd07abc80a475d2a2eebc7b7a9c9546fbdff971b29419ddd9982bf4148c81a49df550154e1674a6b58bac84',\n  '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'\n);\n\nconsole.log(isValid)\n// true\n")))}d.isMDXComponent=!0}}]);