(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{20:function(t,e,r){},27:function(t,e,r){"use strict";r.r(e);var c=r(1),n=r(0),i=r.n(n),a=r(6),s=r.n(a),u=(r(20),r(13)),o=r.p+"static/media/play_arrow-24px.f303159b.svg",d=r(3),l=r(14),j=r(2),b="tracker/ADD_TRACKER",f="tracker/DELETE_TRACKER",m="tracker/PAUSE_TRACKER",O="tracker/UNPAUSE_TRACKER",p="tracker/UPDATE_TIME",v={trackers:[]},k=function(t){return{type:b,title:t}},_=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),r=e[0],i=e[1],a=Object(d.c)((function(t){return t.tracker.trackers})),s=Object(d.b)(),l=function(){if(""===r.trim()){var t=a.length+1;s(k("No name tracker #".concat(t)))}else s(k(r.trim())),i("")};return Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter tracker name",value:r,onChange:function(t){return function(t){i(t.target.value)}(t)},onKeyPress:function(t){return function(t){"Enter"===t.key&&l()}(t)}}),Object(c.jsx)("button",{type:"submit",onClick:function(){return l()},children:Object(c.jsx)("img",{src:o,alt:"start"})})]})},h=r.p+"static/media/play_circle_outline-24px.6fd9f684.svg",T=r.p+"static/media/pause_circle_outline-24px.7dc9fc12.svg",x=r.p+"static/media/remove_circle_outline-24px.594713c1.svg",g=function(t){var e=parseInt(t/3600);t%=3600;var r=parseInt(t/60);return(e<10?"0":"")+e+":"+(r<10?"0":"")+r+":"+((t=parseInt(t%60))<10?"0":"")+t},E=function(t){var e=t.id,r=t.title,i=t.startTime,a=t.pauseTime,s=t.secondsLeft,u=t.isActive,o=Object(d.b)(),l=Object(n.useRef)(),j=function(){l.current&&(clearInterval(l.current),l.current=void 0)},b=function(){l.current||(l.current=setInterval((function(){o(function(t){return{type:p,id:t}}(e))}),1e3))};return Object(n.useEffect)((function(){return u&&b(),function(){return j()}}),[]),Object(c.jsxs)("div",{className:u?"timer timer-active":"timer",children:[Object(c.jsx)("div",{className:"timer__title",children:Object(c.jsx)("span",{children:r})}),Object(c.jsxs)("div",{className:"timer__dashboard",children:[Object(c.jsx)("span",{children:g(s)}),Object(c.jsxs)("div",{className:"timer__dashboard__buttons",children:[Object(c.jsx)("img",{src:u?T:h,onClick:function(){u?(o(function(t){return{type:m,id:t}}(e)),j()):(o(function(t,e){return{type:O,id:t,startTime:e}}(e,i+(Date.now()-a))),b())},alt:"pause"}),Object(c.jsx)("img",{className:"buttons_remove",src:x,alt:"remove tracker",onClick:function(){o(function(t){return{type:f,id:t}}(e)),j()}})]})]})]})};var N=function(){var t=Object(d.c)((function(t){return t.tracker.trackers}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"tracker"})}),Object(c.jsx)(_,{}),Object(c.jsx)("div",{className:"timers",children:t.map((function(t){return Object(c.jsx)(E,{id:t.id,title:t.title,startTime:t.startTime,pauseTime:t.pauseTime,secondsLeft:t.secondsLeft,isActive:t.isActive},t.id)}))})]})},y=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(e){var r=e.getCLS,c=e.getFID,n=e.getFCP,i=e.getLCP,a=e.getTTFB;r(t),c(t),n(t),i(t),a(t)}))},A=r(5),D=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),S=Object(A.b)({tracker:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(j.a)(Object(j.a)({},t),{},{trackers:[{id:Date.now(),title:e.title,startTime:Date.now(),pauseTime:0,secondsLeft:0,isActive:!0}].concat(Object(l.a)(t.trackers))});case p:return Object(j.a)(Object(j.a)({},t),{},{trackers:t.trackers.map((function(t){return t.id===e.id&&(t.secondsLeft=parseInt((Date.now()-t.startTime)/1e3)),t}))});case f:return Object(j.a)(Object(j.a)({},t),{},{trackers:t.trackers.filter((function(t){return t.id!==e.id}))});case m:return Object(j.a)(Object(j.a)({},t),{},{trackers:t.trackers.map((function(t){return t.id===e.id&&(t.pauseTime=Date.now(),t.isActive=!1),t}))});case O:return Object(j.a)(Object(j.a)({},t),{},{trackers:t.trackers.map((function(t){return t.id===e.id&&(t.startTime=e.startTime,t.pauseTime=0,t.isActive=!0),t}))});default:return t}}}),w=Object(A.c)(S,D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());w.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(r){}}({tracker:w.getState().tracker})}));var I=w;s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d.a,{store:I,children:Object(c.jsx)(N,{})})}),document.getElementById("root")),y()}},[[27,1,2]]]);
//# sourceMappingURL=main.3b85981e.chunk.js.map