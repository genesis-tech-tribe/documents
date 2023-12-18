"use strict";(self.webpackChunkproject_document=self.webpackChunkproject_document||[]).push([[490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="User Context",u={unversionedId:"domain-model/user-context/user",id:"domain-model/user-context/user",title:"User Context",description:"User ID (Identifier)",source:"@site/docs/domain-model/user-context/user.md",sourceDirName:"domain-model/user-context",slug:"/domain-model/user-context/user",permalink:"/nishiki-documents/project-document/domain-model/user-context/user",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Domain Model",permalink:"/nishiki-documents/project-document/domain-model/"},next:{title:"Group",permalink:"/nishiki-documents/project-document/domain-model/group-context/group-aggregate/group"}},s={},l=[{value:"User ID (Identifier)",id:"user-id-identifier",level:2},{value:"User (Aggregate Root)",id:"user-aggregate-root",level:2},{value:"User Name (Value Object)",id:"user-name-value-object",level:3},{value:"Email Address (Value Object)",id:"email-address-value-object",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-context"},"User Context"),(0,o.kt)("h2",{id:"user-id-identifier"},"User ID (Identifier)"),(0,o.kt)("p",null,"The user ID is the UUID."),(0,o.kt)("h2",{id:"user-aggregate-root"},"User (Aggregate Root)"),(0,o.kt)("p",null,"The user is the user of Nishiki."),(0,o.kt)("h3",{id:"user-name-value-object"},"User Name (Value Object)"),(0,o.kt)("p",null,"The user can set a username as they like. It must be less than equal to 30 letters and greater than equal to 1.\nThis name can change anytime."),(0,o.kt)("h2",{id:"email-address-value-object"},"Email Address (Value Object)"),(0,o.kt)("p",null,"User has an email address."))}m.isMDXComponent=!0}}]);