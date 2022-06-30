(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[389],{36139:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favorites",function(){return r(12285)}])},18935:function(t,e,r){"use strict";r.d(e,{r:function(){return i}});var n=r(88767),o=r(15012),a=r(54740),i=function(){var t=(0,o.a)().user,e=(0,n.useQuery)("Favorite movies",(function(){return a.K.getFavorites()}),{select:function(t){return t.data},enabled:!!t});return{isLoading:e.isLoading,favoritesMovies:e.data,refetch:e.refetch}}},34333:function(t,e,r){"use strict";var n=r(85893),o=r(94184),a=r.n(o),i=r(67294),u=r(88767),c=r(15012),s=r(54740),f=r(82623),l=r(18935),p=r(30889),v=r.n(p);e.Z=function(t){var e=t.movieId;if(!(0,c.a)().user)return null;var r=(0,i.useState)(!1),o=r[0],p=r[1],d=(0,l.r)(),m=d.favoritesMovies,h=d.refetch;(0,i.useEffect)((function(){if(m){var t=m.some((function(t){return t._id===e}));o!==t&&p(t)}}),[m,o,e]);var x,_,g,F=(0,u.useMutation)("update actor",(function(){return s.K.toggleFavorite(e)}),{onError:function(t){(0,f._)(t,"Update favorite list")},onSuccess:function(){p(!o),h()}}).mutateAsync;return(0,n.jsx)("button",{onClick:function(){return F()},className:a()(v().button,(x={},_=v().animate,g=o,_ in x?Object.defineProperty(x,_,{value:g,enumerable:!0,configurable:!0,writable:!0}):x[_]=g,x)),style:{backgroundImage:"url('/heart-animation.png')"}})}},13505:function(t,e,r){"use strict";var n=r(85893);e.Z=function(t){var e=t.title,r=t.className;return(0,n.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null===r||void 0===r?void 0:r.includes("xl"))?"":"text-3xl"," ").concat(r),children:e})}},54740:function(t,e,r){"use strict";r.d(e,{K:function(){return s}});var n=r(34051),o=r.n(n),a=r(78423),i=r(66846);function u(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}var s={getProfile:function(){return c(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.Z.get((0,i.Il)("/profile")));case 1:case"end":return t.stop()}}),t)})))()},updateProfile:function(t){return c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.put((0,i.Il)("/profile"),t));case 1:case"end":return e.stop()}}),e)})))()},getAll:function(t){return c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.get((0,i.Il)(""),{params:t?{searchTerm:t}:{}}));case 1:case"end":return e.stop()}}),e)})))()},getById:function(t){return c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.get((0,i.Il)("/".concat(t))));case 1:case"end":return e.stop()}}),e)})))()},getUser:function(t){return c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.get((0,i.Il)("/".concat(t))));case 1:case"end":return e.stop()}}),e)})))()},update:function(t,e){return c(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a.Z.put((0,i.Il)("/".concat(t)),e));case 1:case"end":return r.stop()}}),r)})))()},deleteUser:function(t){return c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.delete((0,i.Il)("/".concat(t))));case 1:case"end":return e.stop()}}),e)})))()},getFavorites:function(){return c(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.Z.get((0,i.Il)("/profile/favorites")));case 1:case"end":return t.stop()}}),t)})))()},toggleFavorite:function(t){return c(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.put((0,i.Il)("/profile/favorites"),{movieId:t}));case 1:case"end":return e.stop()}}),e)})))()}}},44087:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(85893),o=r(9008),a=r(11163),i=r(79247),u="Online cinema",c=function(t){return"".concat(t," | ").concat(u)},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return e&&(r=r.slice(0,e)+"..."),r},f=function(t){var e=t.title,r=t.description,f=t.image,l=t.children,p=(0,a.useRouter)().asPath,v="".concat("http://localhost:3000").concat(p);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{itemProp:"headline",children:c(e)}),r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{itemProp:"description",name:"description",content:s(r,152)}),(0,n.jsx)("link",{rel:"canonical",href:v}),(0,n.jsx)("meta",{property:"og:locale",content:"en"}),(0,n.jsx)("meta",{property:"og:title",content:c(e)}),(0,n.jsx)("meta",{property:"og:url",content:v}),(0,n.jsx)("meta",{property:"og:image",content:f||i.Z}),(0,n.jsx)("meta",{property:"og:site_name",content:u}),(0,n.jsx)("meta",{property:"og:description",content:s(r,197)})]}):(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),l]})}},12285:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var n=r(85893),o=r(1478),a=r(13505),i=r(15012),u=r(44087),c=r(25675),s=r(41664),f=r(60961),l=r(34333),p=r(20386),v=r.n(p),d=function(t){var e=t.movie,r=(0,i.a)().user;return(0,n.jsxs)("div",{className:v().itemWrapper,children:[r&&(0,n.jsx)(l.Z,{movieId:e._id}),(0,n.jsx)(s.default,{href:(0,f.Xl)(e.slug),children:(0,n.jsxs)("a",{className:v().item,children:[(0,n.jsx)(c.default,{alt:e.title,src:e.bigPoster,layout:"fill",draggable:!1,priority:!0}),(0,n.jsx)("div",{className:v().title,children:e.title})]})})]})},m=r(18935),h=function(){var t=(0,m.r)(),e=t.favoritesMovies,r=t.isLoading;return(0,i.a)().user?(0,n.jsxs)(u.Z,{title:"Favorites",children:[(0,n.jsx)(a.Z,{title:"Favorites"}),(0,n.jsx)("section",{className:v().favorites,children:r?(0,n.jsx)(o.Z,{count:3,className:v().skeletonLoader,containerClassName:v().containerLoader}):e&&e.length>0?null===e||void 0===e?void 0:e.map((function(t){return(0,n.jsx)(d,{movie:t},t._id)})):(0,n.jsx)("p",{className:"text-white text-opacity-80",children:"You have no favorite movies."})})]}):null},x=function(){return(0,n.jsx)(h,{})}},20386:function(t){t.exports={favorites:"Favorites_favorites__jA0hJ",containerLoader:"Favorites_containerLoader__48q7J",skeletonLoader:"Favorites_skeletonLoader__k25df",itemWrapper:"Favorites_itemWrapper__O7aiB",fade:"Favorites_fade__XNhas",item:"Favorites_item__olMgf",title:"Favorites_title__2ucxx"}},30889:function(t){t.exports={button:"FavoriteButton_button__4HnpL",animate:"FavoriteButton_animate__4b8kX","heart-burst":"FavoriteButton_heart-burst__jgos5"}}},function(t){t.O(0,[774,888,179],(function(){return e=36139,t(t.s=e);var e}));var e=t.O();_N_E=e}]);