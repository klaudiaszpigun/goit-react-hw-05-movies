"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{355:function(n,e,t){t.d(e,{Ch:function(){return h},Xv:function(){return a},YR:function(){return s},qK:function(){return o},yC:function(){return u}});var r=t(861),i=t(757),c=t.n(i),o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}},n.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",e).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}));case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(n){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).catch((function(n){return console.error(n)}))},h=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},s=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4OTE5ZjIxOTY4OTQzY2ZiMGFkZjQ4MzhlNzJmOSIsInN1YiI6IjY2NDNhMTVjNmExMjJjYWRlMzk2MjRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wc7El1PeyuwB90rW2ZO0hYttHm8uVHfdQanPtR5mLAk"}}).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},736:function(n,e,t){t.r(e);var r=t(861),i=t(439),c=t(757),o=t.n(c),u=t(355),a=t(791),h=t(689),s=t(184);e.default=function(){var n=(0,h.UO)().id,e=(0,a.useState)([]),t=(0,i.Z)(e,2),c=t[0],f=t[1],l=(0,a.useState)(!1),j=(0,i.Z)(l,2),I=(j[0],j[1]);return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.YR)(n);case 3:t=e.sent,f(t),I(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching reviews:",e.t0),I(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),c?(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Reviews"}),c.length>0?(0,s.jsx)("ul",{children:c.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:n.author}),(0,s.jsx)("p",{children:n.content})]},n.id)}))}):(0,s.jsx)("p",{children:"There are no reviews."})]}):(0,s.jsx)("div",{children:"There's no data"})}},861:function(n,e,t){function r(n,e,t,r,i,c,o){try{var u=n[c](o),a=u.value}catch(h){return void t(h)}u.done?e(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,c){var o=n.apply(e,t);function u(n){r(o,i,c,u,a,"next",n)}function a(n){r(o,i,c,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=736.61203170.chunk.js.map