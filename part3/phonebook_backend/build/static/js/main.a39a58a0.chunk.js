(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(15),u=t.n(r),i=(t(20),t(6)),o=t(3),s=t(0),l=function(e){var n=e.handleFilterChange;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{onChange:n})]})},d=function(e){var n=e.addName,t=e.newName,c=e.newNumber,a=e.handleNameChange,r=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:a})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:c,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.persons,t=e.filterString,c=e.handleDelete;return n.filter((function(e){return e.name.includes(t)})).map((function(e){return Object(s.jsxs)("div",{children:[e.name," ",e.number," ",Object(s.jsx)("button",{onClick:function(n){return c(n,e.id,e.name)},children:"delete"})]},e.name)}))},b=t(4),f=t.n(b),h="/api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},g=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete(h+"/"+String(e))},v=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"notification",children:n})},x=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"errorMessage",children:n})},w=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),b=u[0],f=u[1],h=Object(c.useState)(""),w=Object(o.a)(h,2),C=w[0],N=w[1],S=Object(c.useState)(""),k=Object(o.a)(S,2),D=k[0],F=k[1],T=Object(c.useState)(null),y=Object(o.a)(T,2),I=y[0],P=y[1],A=Object(c.useState)(null),B=Object(o.a)(A,2),E=B[0],J=B[1];Object(c.useEffect)((function(){m().then((function(e){a(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(v,{message:I}),Object(s.jsx)(x,{message:E}),Object(s.jsx)(l,{handleFilterChange:function(e){F(e.target.value)}}),Object(s.jsx)("h2",{children:"Add a new"}),Object(s.jsx)(d,{addName:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(b)){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===b})),c=Object(i.a)(Object(i.a)({},n),{},{number:C});g(c.id,c).then((function(e){a(t.map((function(n){return n.id!==c.id?n:e}))),f(""),N(""),P("Updated ".concat(e.name)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){J("Information of ".concat(b," has already been removed from server")),setTimeout((function(){J(null)}),5e3)}))}}else O({name:b,number:C}).then((function(e){a(t.concat(e)),f(""),N(""),P("Added ".concat(e.name)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){J(e.response.data.error),setTimeout((function(){J(null)}),5e3)}))},newName:b,newNumber:C,handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){N(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(j,{persons:t,filterString:D,handleDelete:function(e,n,c){e.preventDefault(),window.confirm("Delete ".concat(c,"?"))&&p(n).then((function(e){a(t.filter((function(e){return e.id!==n})))}))}})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,u=n.getTTFB;t(e),c(e),a(e),r(e),u(e)}))};u.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.a39a58a0.chunk.js.map