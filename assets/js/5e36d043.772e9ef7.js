"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2406],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9524:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"ss58 Formats"},l=void 0,c={unversionedId:"keyring/start/ss58",id:"keyring/start/ss58",isDocsHomePage:!1,title:"ss58 Formats",description:"In your previous examples, we explicitly passed the default ss58Format to the keyring. To understand the impact, we will use a real example of formatting using a known mnemonic.",source:"@site/docs/keyring/start/ss58.md",sourceDirName:"keyring/start",slug:"/keyring/start/ss58",permalink:"/docs/keyring/start/ss58",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/start/ss58.md",version:"current",frontMatter:{title:"ss58 Formats"},sidebar:"reference",previous:{title:"Create",permalink:"/docs/keyring/start/create"},next:{title:"Sign & Verify",permalink:"/docs/keyring/start/sign-verify"}},d=[{value:"How is the encoding done?",id:"how-is-the-encoding-done",children:[]},{value:"Sign &amp; verify",id:"sign--verify",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In your previous examples, we explicitly passed the default ",(0,a.kt)("inlineCode",{parentName:"p"},"ss58Format")," to the keyring. To understand the impact, we will use a real example of formatting using a known mnemonic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n// known mnemonic, well, now it is - don't use it for funds\nconst MNEMONIC = 'sample split bamboo west visual approve brain fox arch impact relief smile';\n\n// type: ed25519, ssFormat: 42 (all defaults)\nconst keyring = new Keyring();\nconst pair = keyring.createFromUri(MNEMONIC);\n\n// use the default as setup on init\n// 5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ\nconsole.log('Substrate generic', pair.address);\n\n// adjust the default ss58Format for Kusama\n// CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M\nkeyring.setSS58Format(2);\nconsole.log('Kusama', pair.address);\n\n// adjust the default ss58Format for Polkadot\n// 1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Th7h\nkeyring.setSS58Format(0);\nconsole.log('Polkadot', pair.address);\n")),(0,a.kt)("p",null,"While the pair has not changed at all since creation, each change of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ss58Format")," yields a different output. The human-readable format does not represent any difference in the underlying data, but the encoding is different."),(0,a.kt)("h2",{id:"how-is-the-encoding-done"},"How is the encoding done?"),(0,a.kt)("p",null,"To understand the above example, we will re-construct the actual encoding, based on the actual publicKey and using the underlying util-crypto libraries. First we will decode the addresses generated above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(pair.publicKey);\n\n// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(keyring.decodeAddress('5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ'));\n\n// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(keyring.decodeAddress('CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M'));\n\n// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(keyring.decodeAddress('1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Th7h'));\n")),(0,a.kt)("p",null,"Here we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"decodeAddress")," exposed on the keyring, however we could also import it from ",(0,a.kt)("inlineCode",{parentName:"p"},"@polkadot/util-crypto"),". To understand what decode does, it takes the formatted address, verifies the checksums and then extracts the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"publicKey"),". So the formatted address is a representation of the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountId"),", which on the default substrate chains maps to the ",(0,a.kt)("inlineCode",{parentName:"p"},"publicKey")," for the pair."),(0,a.kt)("p",null,"This also means we can encode from publicKey back to an address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// 5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ\nconsole.log(keyring.encodeAddress(pair.publicKey, 42));\n\n// CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M\nconsole.log(keyring.encodeAddress(pair.publicKey, 2));\n\n// 1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Th7h\nconsole.log(keyring.encodeAddress(pair.publicKey, 0));\n")),(0,a.kt)("p",null,"As per the previous example we used ",(0,a.kt)("inlineCode",{parentName:"p"},"encodeAddress")," exposed on the keyring, however it could also be imported ",(0,a.kt)("inlineCode",{parentName:"p"},"@polkadot/util-crypto"),"."),(0,a.kt)("h2",{id:"sign--verify"},"Sign & verify"),(0,a.kt)("p",null,"Now that we have an understanding of the keyring basics, time to expand our horizons and use the pairs to ",(0,a.kt)("a",{parentName:"p",href:"/docs/keyring/start/sign-verify"},"sign and verify messages"),"."))}u.isMDXComponent=!0}}]);