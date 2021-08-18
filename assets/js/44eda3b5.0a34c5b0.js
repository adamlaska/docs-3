"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[1735],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},968:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Chain upgrade"},c=void 0,p={unversionedId:"api/examples/promise/upgrade-chain",id:"api/examples/promise/upgrade-chain",isDocsHomePage:!1,title:"Chain upgrade",description:"Performs a chain upgrade using the sudo module. This may brick your chain, so use it as an educational sample. (use substrate purge-chain --dev to remove DB and recover).",source:"@site/docs/api/examples/promise/upgrade-chain.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/upgrade-chain",permalink:"/docs/api/examples/promise/upgrade-chain",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/upgrade-chain.md",version:"current",frontMatter:{title:"Chain upgrade"},sidebar:"reference",previous:{title:"Transfer events",permalink:"/docs/api/examples/promise/transfer-events"},next:{title:"TS type generation",permalink:"/docs/api/examples/promise/typegen"}},u=[],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Performs a chain upgrade using the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," module. This may brick your chain, so use it as an educational sample. (use ",(0,a.kt)("inlineCode",{parentName:"p"},"substrate purge-chain --dev")," to remove DB and recover)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API & Provider and some utility functions\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\n\n// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)\nconst testKeyring = require('@polkadot/keyring/testing');\n\nconst fs = require('fs');\n\nasync function main () {\n  // Initialise the provider to connect to the local node\n  const provider = new WsProvider('ws://127.0.0.1:9944');\n\n  // Create the API and wait until ready (optional provider passed through)\n  const api = await ApiPromise.create({ provider });\n\n  // Retrieve the upgrade key from the chain state\n  const adminId = await api.query.sudo.key();\n\n  // Find the actual keypair in the keyring (if this is a changed value, the key\n  // needs to be added to the keyring before - this assumes we have defaults, i.e.\n  // Alice as the key - and this already exists on the test keyring)\n  const keyring = testKeyring.default();\n  const adminPair = keyring.getPair(adminId.toString());\n\n  // Retrieve the runtime to upgrade\n  const code = fs.readFileSync('./test.wasm').toString('hex');\n  const proposal = api.tx.system && api.tx.system.setCode\n    ? api.tx.system.setCode(`0x${code}`) // For newer versions of Substrate\n    : api.tx.consensus.setCode(`0x${code}`); // For previous versions\n\n  console.log(`Upgrading from ${adminId}, ${code.length / 2} bytes`);\n\n  // Perform the actual chain upgrade via the sudo module\n  api.tx.sudo\n    .sudo(proposal)\n    .signAndSend(adminPair, ({ events = [], status }) => {\n      console.log('Proposal status:', status.type);\n\n      if (status.isInBlock) {\n        console.error('You have just upgraded your chain');\n\n        console.log('Included at block hash', status.asInBlock.toHex());\n        console.log('Events:');\n\n        console.log(JSON.stringify(events.toHuman(), null, 2));\n      } else if (status.isFinalized) {\n        console.log('Finalized block hash', status.asFinalized.toHex());\n\n        process.exit(0);\n      }\n    });\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exit(-1);\n});\n")))}d.isMDXComponent=!0}}]);