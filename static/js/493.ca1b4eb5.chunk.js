"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{355:function(n,t,e){e.d(t,{Ch:function(){return h},Xv:function(){return u},YR:function(){return s},qK:function(){return o},yC:function(){return a}});var r=e(861),i=e(757),c=e.n(i),o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}},n.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",t).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}));case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},h=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},s=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},493:function(n,t,e){e.r(t);var r=e(861),i=e(439),c=e(757),o=e.n(c),a=e(355),u=e(791),h=e(689),s=e(184);t.default=function(){var n=(0,h.UO)().id,t=(0,u.useState)([]),e=(0,i.Z)(t,2),c=e[0],l=e[1],f=(0,u.useState)(!1),j=(0,i.Z)(f,2),I=(j[0],j[1]);return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.Ch)(n);case 3:e=t.sent,l(e),I(!1),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),I(!0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),c?(0,s.jsx)("ul",{children:c.length>0?c.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:n.name}),n.profile_path?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.profile_path),alt:n.name}):(0,s.jsx)("p",{children:"No image available"}),(0,s.jsxs)("p",{children:["Character: ",n.character]})]},n.id)})):(0,s.jsx)("li",{children:"No cast available"})}):(0,s.jsx)("div",{children:"There's no data"})}},861:function(n,t,e){function r(n,t,e,r,i,c,o){try{var a=n[c](o),u=a.value}catch(h){return void e(h)}a.done?t(u):Promise.resolve(u).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,c){var o=n.apply(t,e);function a(n){r(o,i,c,a,u,"next",n)}function u(n){r(o,i,c,a,u,"throw",n)}a(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=493.ca1b4eb5.chunk.js.map