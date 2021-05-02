(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),r=n(12),a=n.n(r),o=(n(24),n(17)),l=n(13),i=n(14),h=n(15),d=n(19),u=n(18),j=(n(25),n(16)),m=n.n(j),b={getUsers:function(){return m.a.get("https://randomuser.me/api/?results=10")}},p=n(0);var f=function(e){return Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Picture"}),Object(p.jsx)("th",{scope:"col",onClick:e.sort,children:"First"}),Object(p.jsx)("th",{scope:"col",onClick:e.sort,children:"Last"}),Object(p.jsx)("th",{scope:"col",children:"Email"}),Object(p.jsx)("th",{scope:"col",children:"Cell"})]})}),Object(p.jsx)("tbody",{children:e.employees.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.picture.thumbnail,alt:"profile"})}),Object(p.jsx)("td",{children:e.name.first}),Object(p.jsx)("td",{children:e.name.last}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:e.cell})]},"employee -".concat(t+1))}))})]})};var O=function(e){return Object(p.jsx)("form",{children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"search"}),Object(p.jsx)("input",{onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Search for Employees",id:"search"}),Object(p.jsx)("button",{onClick:e.submit,className:"btn btn-primary mt-3",children:"Search"})]})})},x=(n(45),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleInputChange=function(e){var t=e.target.name,n=e.target.value;s.setState(Object(l.a)({},t,n))},s.handleFormSubmit=function(e){e.preventDefault(),console.log(s.state.search);var t=s.state.search.toLowerCase(),n=s.state.items;n=n.filter((function(e){return console.log(e),e.name.first.toLowerCase().includes(t)||e.name.last.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.cell.includes(t)})),console.log(n)},s.handleSort=function(e,t){var n=Object(o.a)(s.state.employees);n.sort((function(n,s){return n[e]>s[e]?1*t:-1*t})),s.setState({employees:n})},s.handleRemove=function(e){s.setState({employees:s.state.employees.filter((function(t){return t.id!==e}))})},s.state={items:[],loading:!1},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getUsers().then((function(t){console.log(t.data.results),e.setState({items:t.data.results,loading:!0,search:""})}))}},{key:"render",value:function(){var e=this.state.items;if(this.state.search){var t=this.state.search.toLowerCase();e=e.filter((function(e){return e.name.first.toLowerCase().includes(t)||e.name.last.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.cell.includes(t)}))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"form-control",children:"Employee Directory"}),this.state.items.map,Object(p.jsx)(O,{search:this.state.search,submit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleSort:this.handleSort}),Object(p.jsx)(f,{search:this.state.search,employees:e,handleRemove:this.handleRemove,handleSort:this.handleSort})]})}}]),n}(s.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.1b705f54.chunk.js.map