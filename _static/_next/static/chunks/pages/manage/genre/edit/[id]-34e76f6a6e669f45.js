(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{75122:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/genre/edit/[id]",function(){return n(75007)}])},75952:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var t=n(85893),o=n(94184),i=n.n(o),c=n(41664),u=n(11163),a=n(41317),l=n.n(a);var s=function(e){var r,n,o,a=e.item,s=a.link,f=a.title,d=(0,u.useRouter)().asPath;return(0,t.jsx)("li",{children:(0,t.jsx)(c.default,{href:s,children:(0,t.jsx)("a",{className:i()((r={},n=l().active,o=d===s,n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r)),children:f})})})},f=n(60961),d=[{title:"Statistics",link:(0,f.wk)()},{title:"Users",link:(0,f.A7)("users")},{title:"Movies",link:(0,f.A7)("movies")},{title:"Actors",link:(0,f.A7)("actors")},{title:"Genres",link:(0,f.A7)("genres")}],p=function(){return(0,t.jsx)("nav",{className:l().nav,children:(0,t.jsx)("ul",{children:d.map((function(e){return(0,t.jsx)(s,{item:e},e.link)}))})})}},44520:function(e,r,n){"use strict";var t=n(85893),o=n(94184),i=n.n(o),c=n(91e3),u=n.n(c);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}r.Z=function(e){var r=e.children,n=e.className,o=l(e,["children","className"]);return(0,t.jsx)("button",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({className:i()(u().button,n)},o,{children:r}))}},33144:function(e,r,n){"use strict";var t=n(85893),o=n(94184),i=n.n(o),c=n(67294),u=n(91e3),a=n.n(u);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){l(e,r,n[r])}))}return e}function f(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=(0,c.forwardRef)((function(e,r){var n=e.placeholder,o=e.error,c=e.type,u=void 0===c?"text":c,l=e.style,d=f(e,["placeholder","error","type","style"]);return(0,t.jsxs)("div",{className:i()(a().common,a().field),style:l,children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:n}),(0,t.jsx)("input",s({ref:r,type:u},d))]}),o&&(0,t.jsx)("div",{className:a().error,children:o.message})]})}));d.displayName="Field",r.Z=d},96765:function(e,r,n){"use strict";var t=n(85893),o=n(33144),i=n(56245),c=n.n(i);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}r.Z=function(e){var r=e.generate,n=e.register,i=e.error;return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(o.Z,a({},n("slug",{required:"Slug is required!"}),{placeholder:"Slug",error:i})),(0,t.jsx)("div",{className:c().badge,onClick:r,children:"generate"})]})}},13505:function(e,r,n){"use strict";var t=n(85893);r.Z=function(e){var r=e.title,n=e.className;return(0,t.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null===n||void 0===n?void 0:n.includes("xl"))?"":"text-3xl"," ").concat(n),children:r})}},44087:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(85893),o=n(9008),i=n(11163),c=n(79247),u="Online cinema",a=function(e){return"".concat(e," | ").concat(u)},l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return r&&(n=n.slice(0,r)+"..."),n},s=function(e){var r=e.title,n=e.description,s=e.image,f=e.children,d=(0,i.useRouter)().asPath,p="".concat("http://localhost:3000").concat(d);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{itemProp:"headline",children:a(r)}),n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{itemProp:"description",name:"description",content:l(n,152)}),(0,t.jsx)("link",{rel:"canonical",href:p}),(0,t.jsx)("meta",{property:"og:locale",content:"en"}),(0,t.jsx)("meta",{property:"og:title",content:a(r)}),(0,t.jsx)("meta",{property:"og:url",content:p}),(0,t.jsx)("meta",{property:"og:image",content:s||c.Z}),(0,t.jsx)("meta",{property:"og:site_name",content:u}),(0,t.jsx)("meta",{property:"og:description",content:l(n,197)})]}):(0,t.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),f]})}},51981:function(e,r,n){"use strict";n.d(r,{R:function(){return t}});var t=function(e){return Object.keys(e)}},43829:function(e,r,n){"use strict";n.d(r,{G:function(){return t}});var t=function(e){var r=e.replace(/[\s]+/gi,"-");return r=function(e){for(var r="\u0410-\u0430-\u0411-\u0431-\u0412-\u0432-\u0490-\u0491-\u0413-\u0433-\u0414-\u0434-\u0415-\u0435-\u0401-\u0451-\u0404-\u0454-\u0416-\u0436-\u0417-\u0437-\u0418-\u0438-\u0406-\u0456-\u0407-\u0457-\u0419-\u0439-\u041a-\u043a-\u041b-\u043b-\u041c-\u043c-\u041d-\u043d-\u041e-\u043e-\u041f-\u043f-\u0420-\u0440-\u0421-\u0441-\u0422-\u0442-\u0423-\u0443-\u0424-\u0444-\u0425-\u0445-\u0426-\u0446-\u0427-\u0447-\u0428-\u0448-\u0429-\u0449-\u042a-\u044a-\u042b-\u044b-\u042c-\u044c-\u042d-\u044d-\u042e-\u044e-\u042f-\u044f".split("-"),n="A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split("-"),t="",o=0,i=e.length;o<i;o++){var c=e.charAt(o),u=r.indexOf(c);t+=u>=0?n[u]:c}return t}(r),r=r.replace(/[^0-9a-z_\-]+/gi,"").replace("---","-").replace("--","-").toLowerCase()}},75007:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return C}});var t=n(85893),o=n(5152),i=n(87536),c=n(74234),u=n(1478),a=n(75952),l=n(44520),s=n(33144),f=n(96765),d=n(65830),p=n.n(d),m=n(13505),g=n(44087),b=n(43829),v=n(34051),h=n.n(v),j=n(11163),y=n(88767),x=n(16938),_=n(66948),O=n(51981),w=n(82623),P=n(60961);function S(e,r,n,t,o,i,c){try{var u=e[i](c),a=u.value}catch(l){return void n(l)}u.done?r(a):Promise.resolve(a).then(t,o)}var F=function(e){var r=(0,j.useRouter)(),n=r.query,t=r.push,o=String(n.id),i=(0,y.useQuery)(["genre",o],(function(){return _.c.getById(o)}),{onSuccess:function(r){var n=r.data;(0,O.R)(n).forEach((function(r){return e(r,n[r])}))},onError:function(e){(0,w._)(e,"Get genre")},enabled:!!n.id}).isLoading,c=(0,y.useMutation)("update genre",(function(e){return _.c.update(o,e)}),{onError:function(e){(0,w._)(e,"Update genre")},onSuccess:function(){x.Rt.success("Update genre","update was successful"),t((0,P.A7)("genres"))}}).mutateAsync,u=function(){var e,r=(e=h().mark((function e(r){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r);case 2:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function c(e){S(i,t,o,c,u,"next",e)}function u(e){S(i,t,o,c,u,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}();return{onSubmit:u,isLoading:i}};function k(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){k(e,r,n[r])}))}return e}var E=(0,o.default)((function(){return Promise.all([n.e(925),n.e(353),n.e(513)]).then(n.bind(n,27513))}),{loadableGenerated:{webpack:function(){return[27513]}},ssr:!1}),D=function(){var e=(0,i.cI)({mode:"onChange"}),r=e.handleSubmit,n=e.register,o=e.formState.errors,d=e.control,v=e.setValue,h=e.getValues,j=F(v),y=j.isLoading,x=j.onSubmit;return(0,t.jsxs)(g.Z,{title:"Edit genre",children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)(m.Z,{title:"Edit genre"}),(0,t.jsx)("form",{onSubmit:r(x),className:p().form,children:y?(0,t.jsx)(u.Z,{count:3}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:p().fields,children:[(0,t.jsx)(s.Z,N({},n("name",{required:"Name is required!"}),{placeholder:"Name",error:o.name,style:{width:"31%"}})),(0,t.jsx)("div",{style:{width:"31%"},children:(0,t.jsx)(f.Z,{register:n,error:o.slug,generate:function(){v("slug",(0,b.G)(h("name")))}})}),(0,t.jsx)(s.Z,N({},n("icon",{required:"Icon is required!"}),{placeholder:"Icon",error:o.icon,style:{width:"31%"}}))]}),(0,t.jsx)(i.Qr,{name:"description",control:d,defaultValue:"",render:function(e){var r=e.field,n=r.value,o=r.onChange,i=e.fieldState.error;return(0,t.jsx)(E,{onChange:o,value:n,error:i,placeholder:"Description"})},rules:{validate:{required:function(e){return e&&(0,c.Vt)(e).result.length>0||"Description is required!"}}}}),(0,t.jsx)(l.Z,{children:"Update"})]})})]})},Z=function(){return(0,t.jsx)(D,{})};Z.isOnlyAdmin=!0;var C=Z},41317:function(e){e.exports={nav:"AdminNavigation_nav__jmpMb",active:"AdminNavigation_active__DYQnj"}},56245:function(e){e.exports={badge:"SlugField_badge__pd3af"}},65830:function(e){e.exports={form:"admin-form_form__CY7pU",fields:"admin-form_fields__r6P1o"}},91e3:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP"}}},function(e){e.O(0,[536,234,774,888,179],(function(){return r=75122,e(e.s=r);var r}));var r=e.O();_N_E=r}]);