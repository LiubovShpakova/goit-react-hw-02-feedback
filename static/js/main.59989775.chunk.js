(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={title:"Section_title__3YCbH"}},function(e,t,n){e.exports={buttons:"feedback_buttons__1l9Gw"}},function(e,t,n){e.exports={list:"Statistics_list__3t5B5"}},function(e,t,n){e.exports={message:"Notification_message__1QtO_"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),o=n.n(r),s=(n(17),n(4)),i=n(5),l=n(6),d=n(12),b=n(11),u=(n(18),n(7)),j=n.n(u),h=n(0),f=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:j.a.title,children:t}),n]})},g=n(8),v=n.n(g),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:v.a.buttons,children:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",name:e,onClick:n,children:e})},e)}))})},x=n(9),p=n.n(x),k=n(10),m=n.n(k),_=function(e){var t=e.message;return Object(h.jsx)("h2",{className:m.a.message,children:t})},F=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage,o=r>=50?"green":"red";return Object(h.jsx)(h.Fragment,{children:c>0?Object(h.jsxs)("ul",{className:p.a.list,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",a]}),Object(h.jsxs)("li",{children:["Total: ",c]}),Object(h.jsxs)("li",{style:{color:o},children:["Positive feedback: ",r,"%"]})]}):Object(h.jsx)(_,{message:"No feedback given"})})};F.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var P=F,N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return parseInt(t/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(f,{title:"Statistics",children:Object(h.jsx)(P,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.59989775.chunk.js.map