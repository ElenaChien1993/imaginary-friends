(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),d=n(0),b=function(e){var t=e.id,n=e.name,c=e.email;return Object(d.jsxs)("div",{className:"tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?set=set5&size=200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:c})]})]})},j=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email})}))})},u=function(e){var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--blue bg-washed-yellow",type:"search",placeholder:"search friends",onChange:t})})},f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"},children:e.children})},m=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"h1",children:"Imaginary Friends"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(j,{robots:c})})]}):Object(d.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(c.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.f30acc36.chunk.js.map