(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{75952:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(85893),o=n(94184),i=n.n(o),a=n(41664),c=n(11163),u=n(41317),l=n.n(u);var s=function(e){var r,n,o,u=e.item,s=u.link,f=u.title,p=(0,c.useRouter)().asPath;return(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:s,children:(0,t.jsx)("a",{className:i()((r={},n=l().active,o=p===s,n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r)),children:f})})})},f=n(60961),p=[{title:"Statistics",link:(0,f.wk)()},{title:"Users",link:(0,f.A7)("users")},{title:"Movies",link:(0,f.A7)("movies")},{title:"Actors",link:(0,f.A7)("actors")},{title:"Genres",link:(0,f.A7)("genres")}],d=function(){return(0,t.jsx)("nav",{className:l().nav,children:(0,t.jsx)("ul",{children:p.map((function(e){return(0,t.jsx)(s,{item:e},e.link)}))})})}},44520:function(e,r,n){"use strict";var t=n(85893),o=n(94184),i=n.n(o),a=n(91e3),c=n.n(a);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}r.Z=function(e){var r=e.children,n=e.className,o=l(e,["children","className"]);return(0,t.jsx)("button",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}({className:i()(c().button,n)},o,{children:r}))}},33144:function(e,r,n){"use strict";var t=n(85893),o=n(94184),i=n.n(o),a=n(67294),c=n(91e3),u=n.n(c);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){l(e,r,n[r])}))}return e}function f(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=(0,a.forwardRef)((function(e,r){var n=e.placeholder,o=e.error,a=e.type,c=void 0===a?"text":a,l=e.style,p=f(e,["placeholder","error","type","style"]);return(0,t.jsxs)("div",{className:i()(u().common,u().field),style:l,children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:n}),(0,t.jsx)("input",s({ref:r,type:c},p))]}),o&&(0,t.jsx)("div",{className:u().error,children:o.message})]})}));p.displayName="Field",r.Z=p},96765:function(e,r,n){"use strict";var t=n(85893),o=n(33144),i=n(56245),a=n.n(i);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){c(e,r,n[r])}))}return e}r.Z=function(e){var r=e.generate,n=e.register,i=e.error;return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(o.Z,u({},n("slug",{required:"Slug is required!"}),{placeholder:"Slug",error:i})),(0,t.jsx)("div",{className:a().badge,onClick:r,children:"generate"})]})}},66665:function(e,r,n){"use strict";n.d(r,{Z:function(){return x}});var t=n(85893),o=n(94184),i=n.n(o),a=n(25675),c=n(1478),u=n(91e3),l=n.n(u),s=n(34051),f=n.n(s),p=n(67294),d=n(88767),m=n(78423);function v(e,r,n,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?r(u):Promise.resolve(u).then(t,o)}var h=function(e,r){return(n=f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",m.Z.post("/files",e,{params:{folder:r},headers:{"Content-Type":"multipart/form-data"}}));case 1:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(e){v(i,t,o,a,c,"next",e)}function c(e){v(i,t,o,a,c,"throw",e)}a(void 0)}))})();var n},b=n(82623);function g(e,r,n,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?r(u):Promise.resolve(u).then(t,o)}var y=function(e,r){var n=(0,p.useState)(!1),t=n[0],o=n[1],i=(0,d.useMutation)("upload file",(function(e){return h(e,r)}),{onSuccess:function(r){var n=r.data;e(n[0].url)},onError:function(e){(0,b._)(e,"Upload image")}}).mutateAsync,a=(0,p.useCallback)(function(){var e,r=(e=f().mark((function e(r){var n,t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),!(null===(n=r.target.files)||void 0===n?void 0:n.length)){e.next=8;break}return(t=new FormData).append("file",n[0]),e.next=7,i(t);case 7:setTimeout((function(){o(!1)}),1e3);case 8:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){g(i,t,o,a,c,"next",e)}function c(e){g(i,t,o,a,c,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}(),[i]);return(0,p.useMemo)((function(){return{uploadFile:a,isLoading:t}}),[a,t])},x=function(e){var r=e.placeholder,n=e.error,o=e.style,u=e.value,s=e.folder,f=e.onChange,p=e.isNoImage,d=void 0!==p&&p,m=y(f,s),v=m.uploadFile,h=m.isLoading;return(0,t.jsx)("div",{className:i()(l().field,l().uploadField),style:o,children:(0,t.jsxs)("div",{className:l().uploadFlex,children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:r}),(0,t.jsx)("input",{type:"file",onChange:v}),n&&(0,t.jsx)("div",{className:l().error,children:n.message})]}),!d&&(0,t.jsx)("div",{className:l().uploadImageContainer,children:h?(0,t.jsx)(c.Z,{count:1,className:"w-full h-full"}):u&&(0,t.jsx)(a.default,{src:u,alt:"",layout:"fill"})})]})})}},13505:function(e,r,n){"use strict";var t=n(85893);r.Z=function(e){var r=e.title,n=e.className;return(0,t.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null===n||void 0===n?void 0:n.includes("xl"))?"":"text-3xl"," ").concat(n),children:r})}},258:function(e,r,n){"use strict";n.d(r,{V:function(){return l}});var t=n(34051),o=n.n(t),i=n(78423),a=n(66846);function c(e,r,n,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?r(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){c(i,t,o,a,u,"next",e)}function u(e){c(i,t,o,a,u,"throw",e)}a(void 0)}))}}var l={getAll:function(e){return u(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.v.get((0,a.q2)(""),{params:e?{searchTerm:e}:{}}));case 1:case"end":return r.stop()}}),r)})))()},getBySlug:function(e){return u(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.v.get((0,a.q2)("/by-slug/".concat(e))));case 1:case"end":return r.stop()}}),r)})))()},getById:function(e){return u(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.Z.get((0,a.q2)("/".concat(e))));case 1:case"end":return r.stop()}}),r)})))()},create:function(){return u(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.Z.post((0,a.q2)("/")));case 1:case"end":return e.stop()}}),e)})))()},update:function(e,r){return u(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i.Z.put((0,a.q2)("/".concat(e)),r));case 1:case"end":return n.stop()}}),n)})))()},delete:function(e){return u(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",i.Z.delete((0,a.q2)("/".concat(e))));case 1:case"end":return r.stop()}}),r)})))()}}},44087:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(85893),o=n(9008),i=n(11163),a=n(79247),c="Online cinema",u=function(e){return"".concat(e," | ").concat(c)},l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return r&&(n=n.slice(0,r)+"..."),n},s=function(e){var r=e.title,n=e.description,s=e.image,f=e.children,p=(0,i.useRouter)().asPath,d="".concat("http://localhost:3000").concat(p);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{itemProp:"headline",children:u(r)}),n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{itemProp:"description",name:"description",content:l(n,152)}),(0,t.jsx)("link",{rel:"canonical",href:d}),(0,t.jsx)("meta",{property:"og:locale",content:"en"}),(0,t.jsx)("meta",{property:"og:title",content:u(r)}),(0,t.jsx)("meta",{property:"og:url",content:d}),(0,t.jsx)("meta",{property:"og:image",content:s||a.Z}),(0,t.jsx)("meta",{property:"og:site_name",content:c}),(0,t.jsx)("meta",{property:"og:description",content:l(n,197)})]}):(0,t.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),f]})}},51981:function(e,r,n){"use strict";n.d(r,{R:function(){return t}});var t=function(e){return Object.keys(e)}},43829:function(e,r,n){"use strict";n.d(r,{G:function(){return t}});var t=function(e){var r=e.replace(/[\s]+/gi,"-");return r=function(e){for(var r="\u0410-\u0430-\u0411-\u0431-\u0412-\u0432-\u0490-\u0491-\u0413-\u0433-\u0414-\u0434-\u0415-\u0435-\u0401-\u0451-\u0404-\u0454-\u0416-\u0436-\u0417-\u0437-\u0418-\u0438-\u0406-\u0456-\u0407-\u0457-\u0419-\u0439-\u041a-\u043a-\u041b-\u043b-\u041c-\u043c-\u041d-\u043d-\u041e-\u043e-\u041f-\u043f-\u0420-\u0440-\u0421-\u0441-\u0422-\u0442-\u0423-\u0443-\u0424-\u0444-\u0425-\u0445-\u0426-\u0446-\u0427-\u0447-\u0428-\u0448-\u0429-\u0449-\u042a-\u044a-\u042b-\u044b-\u042c-\u044c-\u042d-\u044d-\u042e-\u044e-\u042f-\u044f".split("-"),n="A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split("-"),t="",o=0,i=e.length;o<i;o++){var a=e.charAt(o),c=r.indexOf(a);t+=c>=0?n[c]:a}return t}(r),r=r.replace(/[^0-9a-z_\-]+/gi,"").replace("---","-").replace("--","-").toLowerCase()}},41317:function(e){e.exports={nav:"AdminNavigation_nav__jmpMb",active:"AdminNavigation_active__DYQnj"}},56245:function(e){e.exports={badge:"SlugField_badge__pd3af"}},65830:function(e){e.exports={form:"admin-form_form__CY7pU",fields:"admin-form_fields__r6P1o"}},91e3:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP"}}}]);