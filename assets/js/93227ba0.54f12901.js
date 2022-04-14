"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[967],{54852:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(49231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),u=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(f.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,m=l["".concat(f,".").concat(d)]||l[d]||c[d]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=l;var a={};for(var f in r)hasOwnProperty.call(r,f)&&(a[f]=r[f]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},49290:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return f},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var n=t(14380),o=t(8240),i=(t(49231),t(54852)),s=["components"],a={sidebar_position:6,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},f=void 0,u={unversionedId:"guides/features/server-side/bff/bff-proxy",id:"guides/features/server-side/bff/bff-proxy",title:"\u4f7f\u7528 BFF \u4ee3\u7406",description:"\u901a\u8fc7\u914d\u7f6e BFF \u4ee3\u7406\uff0c\u65e0\u9700\u624b\u52a8\u5199\u7801\uff0c\u5373\u53ef\u5bf9 API \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002",source:"@site/docs/guides/features/server-side/bff/bff-proxy.md",sourceDirName:"guides/features/server-side/bff",slug:"/guides/features/server-side/bff/bff-proxy",permalink:"/docs/guides/features/server-side/bff/bff-proxy",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},sidebar:"guidesSidebar",previous:{title:"\u8fd0\u884c\u65f6\u6846\u67b6",permalink:"/docs/guides/features/server-side/bff/frameworks"},next:{title:"Web Server \u7b80\u8ff0",permalink:"/docs/guides/features/server-side/deploy/modern-server/web-server"}},p={},c=[],l={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e BFF \u4ee3\u7406\uff0c\u65e0\u9700\u624b\u52a8\u5199\u7801\uff0c\u5373\u53ef\u5bf9 API \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.server-runtime.config.js")," \u6587\u4ef6\u4e2d\u7f16\u5199\u4ee5\u4e0b BFF \u4ee3\u7406\u914d\u7f6e\uff0c\u4f1a\u5c06\u53d1\u9001\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/v1/topics")," \u7684\u8bf7\u6c42\u4ee3\u7406\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cnodejs.org/api/v1/topics"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.server-runtime.config.js"',title:'"modern.server-runtime.config.js"'},"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u5177\u4f53 API \u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/bff/proxy"},"BFF \u4ee3\u7406"),"\uff0c\u66f4\u591a Modern.js \u4ee3\u7406\u7684\u80fd\u529b\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/usages/debug/proxy-and-mock"},"\u8c03\u8bd5\u4ee3\u7406"),"\u3002"))}d.isMDXComponent=!0}}]);