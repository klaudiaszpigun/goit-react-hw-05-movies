"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{355:function(n,t,e){e.d(t,{Ch:function(){return h},Xv:function(){return a},qK:function(){return o},yC:function(){return u}});var r=e(861),i=e(757),c=e.n(i),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}},n.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",t).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}));case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},h=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))}},415:function(n,t,e){e.r(t);var r=e(861),i=e(439),c=e(757),o=e.n(c),u=e(355),a=e(791),h=e(87),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],c=t[1];return(0,a.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.qK)();case 2:t=n.sent,e=t.filter((function(n){return n.title})),c(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending today:"}),(0,s.jsx)("ul",{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(h.rU,{to:"/movies/".concat(n.id),state:{from:"/"},children:n.title})},n.id)}))})]})}},861:function(n,t,e){function r(n,t,e,r,i,c,o){try{var u=n[c](o),a=u.value}catch(h){return void e(h)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,c){var o=n.apply(t,e);function u(n){r(o,i,c,u,a,"next",n)}function a(n){r(o,i,c,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=415.eca611ed.chunk.js.map