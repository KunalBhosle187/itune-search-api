(this.webpackJsonpitune_search=this.webpackJsonpitune_search||[]).push([[0],{33:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(5),s=c.n(r),i=(c(33),c(11)),o=c.n(i),d=c(21),u=c(12),p=c(76),j=c(22),h=c.n(j),l=(c(53),c(54),c(1)),m=function(e){var t=e.artistName,c=e.songName,a=e.image;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card_img",children:Object(l.jsx)("img",{src:a})}),Object(l.jsxs)("div",{className:"card_footer",children:[Object(l.jsx)("h4",{children:c}),Object(l.jsx)("h5",{children:t})]})]})};c(56);var b=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],j=s[1];function b(){return(b=Object(d.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://itunes.apple.com/search?term=".concat(c),"https://cors-anywhere.herokuapp.com/",document.querySelector("#app_body_grid"),e.next=5,h.a.get("https://cors-anywhere.herokuapp.com/"+t);case 5:a=e.sent,n=a.data.results,console.log(n),j(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return document.getElementById("app_body"),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"app_header",children:[Object(l.jsx)("input",{type:"text",value:c,onChange:function(e){return n(e.target.value)},placeholder:"search song"}),Object(l.jsx)(p.a,{type:"submit",onClick:function(){!function(){b.apply(this,arguments)}(),n(" ")},children:"Search"})]}),Object(l.jsxs)("div",{className:"app_body",children:[Object(l.jsx)("h2",{children:c}),Object(l.jsx)("div",{className:"app_body_grid",children:i.map((function(e){return Object(l.jsx)(m,{image:e.artworkUrl100,songName:e.trackCensoredName,artistName:e.artistName},e.trackId)}))})]})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.ee7d11f8.chunk.js.map