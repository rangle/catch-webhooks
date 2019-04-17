(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,n,t){e.exports=t(90)},45:function(e,n,t){},61:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),c=t.n(o),i=(t(45),t(15)),l=t.n(i),u=t(31),s=t(21),d=t(2),m=t(11),v=(t(61),t(9)),p=t(6),f=t(4),b=t(20),g=t(33),h={events:[]},E={key:"root",storage:t.n(g).a},O=Object(b.a)(E,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"JSON_RECEIVED":return console.log(n),Object(p.a)({},e,{events:[].concat(Object(v.a)(e.events),[{date:new Date,json:n.json,title:"",summary:""}])});case"SET_WEBHOOK_TITLE":return Object(p.a)({},e,{events:[].concat(Object(v.a)(e.events.slice(0,n.index)),[Object(p.a)({},e.events[n.index],{title:n.title})],Object(v.a)(e.events.slice(n.index+1)))});case"SET_WEBHOOK_SUMMARY":return Object(p.a)({},e,{events:[].concat(Object(v.a)(e.events.slice(0,n.index)),[Object(p.a)({},e.events[n.index],{summary:n.summary})],Object(v.a)(e.events.slice(n.index+1)))});case"CLEAR_ALL_ACTION":return Object(p.a)({},e,{events:[]});default:return e}}),y=function(){var e=Object(f.c)(O);return{store:e,persistor:Object(b.b)(e)}},j=t(12),x=t(3);function w(){var e=Object(d.a)(["\n  display:block;\n  font-size:1.25em;\n  border: 1px solid #DDD;\n  padding: .25em;\n  border-radius:.25em;\n  margin: .5em 0;\n  width: 16em;\n  background-color: rgba(255, 255, 255, 0.2);\n"]);return w=function(){return e},e}var C=x.a.input(w()),k=function(e){var n=e.onChange,t=e.value;return r.a.createElement(C,{type:"text",placeholder:"",onChange:n,value:t})};function S(){var e=Object(d.a)(["\n  display:block;\n  font-size:1em;\n  border: 1px solid #DDD;\n  padding: .25em;\n  border-radius:.25em;\n  margin: .5em 0 2em 0;\n  background-color: rgba(255, 255, 255, 0.4);\n"]);return S=function(){return e},e}var T=x.a.textarea(S()),D=function(e){var n=e.onChange,t=e.value;return r.a.createElement(T,{type:"text",cols:50,rows:3,placeholder:"",onChange:n,value:t})},_=t(36),A=t.n(_),L=function(e){var n=e.json,t=e.config,a=(void 0===t?{}:t).expand,o=void 0===a?2:a;return r.a.createElement(A.a,{src:n,collapsed:o,collapseStringsAfterLength:32,groupArraysAfterLength:20,name:!1,sortKeys:!1})};function R(){var e=Object(d.a)(["\n  .vertical-timeline-element-content {\n    box-shadow: 2px 4px 8px 2px rgba(50, 50, 93, 0.15), 3px 5px 10px 3px rgba(112, 157, 199, 0.15);\n    background: linear-gradient(135deg, #F8F8F8, #E8F8F8);\n    text-align: left;\n  }\n"]);return R=function(){return e},e}function I(){var e=Object(d.a)(["\n  color: #777;\n"]);return I=function(){return e},e}var W=x.a.span(I()),F=Object(x.a)(m.VerticalTimelineElement)(R()),J=function(e){var n=e.index,t=e.date,a=e.json,o=e.title,c=e.summary,i=e.onTitleChange,l=e.onSummaryChange;return r.a.createElement(F,{key:n,date:t?t.toString():""},r.a.createElement(W,null,"event received"),r.a.createElement(k,{onChange:function(e){i(n,e.target.value),e.preventDefault()},value:o}),r.a.createElement(D,{onChange:function(e){l(n,e.target.value),e.preventDefault()},value:c}),r.a.createElement("div",null,r.a.createElement(L,{json:a})))},B=t(37),N=t.n(B);t(89);function K(){var e=Object(d.a)(["\n  font-size: 1.5em;\n  font-family: Open Sans, Arial;\n  margin: 0em 1em;\n  color: #999;\n  padding-top: 1em;\n"]);return K=function(){return e},e}function H(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]);return H=function(){return e},e}function M(){var e=Object(d.a)(["\n  margin-top: 1em;\n  color: #888;\n"]);return M=function(){return e},e}function U(){var e=Object(d.a)(["\n  padding:1em;\n  display:block;\n  border-radius:.5em;\n  font-weight:bold;\n  background: linear-gradient(135deg, white, #EFF);\n  border: 1px solid #DDD;\n  box-shadow: 1px 1px 4px #888;\n  margin-top:1em;\n  cursor:pointer;\n  height: 4em;\n"]);return U=function(){return e},e}var V=new WebSocket(("https:"===window.location.protocol?"wss://":"ws://")+window.location.host),z=x.a.button(U()),Y=x.a.span(M()),$=x.a.div(H()),q=x.a.div(K()),G=Object(j.b)(function(e){return{events:e.events}},function(e){return{onClear:function(n){e({type:"CLEAR_ALL_ACTION"}),n.preventDefault()},onTitleChange:function(n,t){return e(function(e,n){return{type:"SET_WEBHOOK_TITLE",index:e,title:n}}(n,t))},onSummaryChange:function(n,t){return e(function(e,n){return{type:"SET_WEBHOOK_SUMMARY",index:e,summary:n}}(n,t))},dispatchJsonReceived:function(n){return e(function(e){return{type:"JSON_RECEIVED",title:"Initial title",summary:"Some initial notes",json:e}}(n))}}})(function(e){var n=e.dispatchJsonReceived,t=e.onTitleChange,o=e.onSummaryChange,c=e.onClear,i=e.events,d=Object(a.useState)({url:null}),v=Object(s.a)(d,2),p=v[0],f=v[1];V.onopen=function(){V.onmessage=function(e){n(JSON.parse(e.data)),console.log("Received ",e.data)}},Object(a.useEffect)(function(){!function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=f,e.next=4,N.a.get("/url");case 4:e.t1=e.sent.data,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[]);var b=[],g=!0,h=!1,E=void 0;try{for(var O,y=i.entries()[Symbol.iterator]();!(g=(O=y.next()).done);g=!0){var j=O.value,x=Object(s.a)(j,2),w=x[0],C=x[1];b.push(r.a.createElement(J,{key:w,index:w,title:C.title,summary:C.summary,date:C.date,json:C.json,onTitleChange:t,onSummaryChange:o}))}}catch(k){h=!0,E=k}finally{try{g||null==y.return||y.return()}finally{if(h)throw E}}return console.log(p),r.a.createElement("div",{className:"App"},r.a.createElement($,null,r.a.createElement(q,null,"Webhook Catcher"),r.a.createElement(z,{type:"text",onClick:c},"Clear")),r.a.createElement($,null,r.a.createElement(Y,null,"Use this pattern for your webhook URLs: ",p.url,"/webhook/*")),r.a.createElement(m.VerticalTimeline,{layout:"2-columns"},b))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(38);c.a.render(r.a.createElement(j.a,{store:y().store},r.a.createElement(P.a,{loading:null,persistor:y().persistor},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.028c05fb.chunk.js.map