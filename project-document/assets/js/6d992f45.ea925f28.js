"use strict";(self.webpackChunkproject_document=self.webpackChunkproject_document||[]).push([[232],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),l=o,g=m["".concat(s,".").concat(l)]||m[l]||d[l]||i;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9686:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(7462),o=(r(7294),r(3905));const i={},a="ER Diagram",c={unversionedId:"database/er-diagram",id:"database/er-diagram",title:"ER Diagram",description:"",source:"@site/docs/database/er-diagram.md",sourceDirName:"database",slug:"/database/er-diagram",permalink:"/nishiki-documents/project-document/database/er-diagram",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Initialize Function",permalink:"/nishiki-documents/project-document/system-architecture/functions/user-initialize-function"},next:{title:"DynamoDB Design",permalink:"/nishiki-documents/project-document/database/"}},s={},u=[],p={toc:u},m="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"er-diagram"},"ER Diagram"),(0,o.kt)("mermaid",{value:'erDiagram\n\nUser {\n    string user_id\n    string name\n    string email_address\n}\n\nUserGroup {\n    string user_id\n    string group_id\n}\n\nGroup {\n    int group_id\n    string name\n}\n\nContainer {\n    string container_id\n    string group_id\n    string name\n}\n\nFood {\n    string name\n    string food_id\n    string container_id\n    string unit\n    int quantity\n    Datetime expiry\n    Datetime created_datetime\n}\n\nShareLink {\n    string url\n    string group_id\n    Datetime expired\n}\n\nUser || --|{ UserGroup : "one to one or more"\nGroup ||--|{ UserGroup : "one to one or more"\nGroup ||--o{ Container : "one to zero or more"\nContainer ||--o{ Food : "zero or more"\nGroup ||--o{ ShareLink : "zero or more"\n\n'}))}d.isMDXComponent=!0}}]);