(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(20),a=n.n(o),s=(n(27),n(28),n(0));var i=function(e){var t=e.title;return Object(s.jsx)("h1",{children:t})},l=n(12);var d=function(e){var t=e.label,n=e.uri;return Object(s.jsx)("li",{className:"hover:bg-indigo-600",children:Object(s.jsx)(l.b,{to:n,children:t})})};n(35);var j=function(){var e=[{label:"Home",uri:"/"},{label:"Todos's",uri:"/todos"},{label:"Login",uri:"/Login"}].map((function(e,t){return Object(s.jsx)(d,{label:e.label,uri:e.uri},t)}));return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:e})})};n(36);var u=function(e){var t=e.title;return Object(s.jsxs)("header",{children:[Object(s.jsx)(i,{title:t}),Object(s.jsx)(j,{})]})},b=n(8),O=n(4),p=n(13);var x=function(e){var t=e.children;return Object(s.jsx)("form",{className:"justify-items-center justify-center",children:t})};var h=function(e){var t=e.caption,n=e.onClick;return Object(s.jsx)("button",{onClick:n,className:["bg-blue-600 ","hover:bg-blue-400 ","text-white ","font-bold ","py-5 ","px-10 ","border-b-4 ","border-blue-700 ","hover:border-blue-500 ","rounded ","ml-80 "].join(""),children:t})},m=n(14);var f=function(e){var t=e.type,n=e.id,r=e.fname,c=e.onChange,o=e.caption,a=e.value,i=e.error,l=Object(m.a)(e,["type","id","fname","onChange","caption","value","error"]);return Object(s.jsxs)("section",{className:"m-52 justify-center justify-items-center",children:[Object(s.jsx)("label",{children:o}),Object(s.jsx)("input",Object(O.a)({className:["hover:bg-gray-300 ","text-white ","font-bold ","py-5 ","px-5 ","border-b-4 ","border-blue-700 ","hover:border-blue-500 ","rounded ","ml-10 "].join(""),type:t,id:n,name:r,onChange:c,value:a},l)),i?Object(s.jsx)("section",{children:i}):null]})};var v=function(){var e=Object(r.useState)({username:"",password:"",usernameError:"",passwordError:""}),t=Object(p.a)(e,2),n=t[0],c=t[1],o=function(e){var t,r=e.currentTarget,o=r.name,a=r.value,s=null;"password"===o&&(s=/^(?=.*\d)(?=.* A-Z)(?=.* a-z)(?=.* ^\w\d\s:)(^\s){8,32}$/.test(a)?null:"Contrasena Invalida"),c(Object(O.a)(Object(O.a)({},n),{},(t={},Object(b.a)(t,o,a),Object(b.a)(t,o+"Error",s),t)))};return Object(s.jsxs)(x,{children:[Object(s.jsx)(f,{type:"text",id:"username",fname:"username",onChange:o,caption:"Correo Electronico: ",value:n.username,error:n.usernameError,placeholder:"Tu correo"}),Object(s.jsx)(f,{type:"password",id:"password",fname:"password",onChange:o,caption:"Contrase\xf1a: ",value:n.password,error:n.passwordError,placeholder:"Tu contrasena"}),Object(s.jsx)(h,{caption:"Enviar",onClick:function(e){e.preventDefault(),e.stopPropagation();var t=n.username,r=n.password;alert("Usuario:".concat(t," Psswd:").concat(r))}})]})},g=n.p+"static/media/OFICIALMENU.ee3ebc11.png";var w=function(){return Object(s.jsxs)("section",{className:"flex w-full h-screen",children:[Object(s.jsx)("section",{className:"p-0 w-full m-0",children:Object(s.jsx)("img",{src:g,alt:"",className:"w-full h-full"})}),Object(s.jsx)("section",{className:"w-full m-0 p-0 h-full bg-purple-400 justify-items-center justify-center",children:Object(s.jsx)(v,{})})]})};var N=function(){return Object(s.jsx)("section",{children:Object(s.jsx)(w,{})})},y=n(2);var C=function(){return Object(s.jsx)("section",{children:Object(s.jsx)("h1",{children:"Todo WApp V1"})})};var T=function(e){var t=e.type,n=e.id,r=e.fname,c=e.onChange,o=e.caption,a=e.value,i=e.error,l=e.labelClassName,d=Object(m.a)(e,["type","id","fname","onChange","caption","value","error","labelClassName"]);return Object(s.jsxs)("section",{children:[Object(s.jsx)("label",{className:l,children:o}),Object(s.jsx)("input",Object(O.a)({type:t,id:n,name:r,onChange:c,value:a},d)),i?Object(s.jsx)("section",{children:i}):null]})},H=n(11);var k=function(e){var t=e.onChange,n=e.value,r=e.onAddNew;return Object(s.jsx)("section",{className:"TodoAddNew",children:Object(s.jsxs)("section",{className:"flex justify-between w-screen items-start px-4 border",children:[Object(s.jsx)(T,{type:"text",id:"txtNTodo",fname:"txtNTodo",onChange:t,value:n,caption:"Nuevo Todo=",className:"flex-col p-2 m-2 mt-0 ml-32 w-60 bg-white shadow border-2 border-gray-500 border-opacity-30 bor hover:border-gray-600",labelClassName:"flex  w-5/6",placeholder:"Ingrese un nuevo Todo Aqui...",onKeyUp:function(e){13==e.keyCode&&r(e)}}),Object(s.jsx)(H.a,{size:"3rem",onClick:r})]})})};function E(e){var t,n=e.descripcion,r=e.id,c=e.completed,o=e.doneHandler,a=e.deleteHandler,i=c?"striked":"";return Object(s.jsxs)("li",{className:"flex my-6 justify-between border-b-2 border-indigo-400",children:[Object(s.jsx)("span",(t={className:i},Object(b.a)(t,"className","ml-4"),Object(b.a)(t,"children",n),t)),Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsx)(H.c,{onClick:function(e){o(r)},className:"hover:bg-green-500 ml-2",size:"2rem"}),Object(s.jsx)(H.b,{onClick:function(e){a(r)},className:"hover:bg-red-600 ml-2",size:"2rem"})]})]})}var L=function(e){var t=e.todos,n=e.doneHandler,r=e.deleteHandler,c=t.map((function(e){return Object(s.jsx)(E,{descripcion:e.description,id:e.id,completed:e.completed,doneHandler:n,deleteHandler:r},e.doneHandlerid)}));return Object(s.jsx)("section",{className:"TodoList",children:Object(s.jsx)("ul",{children:c})})};n(37);var A=function(){var e=Object(r.useState)({todos:[],newTodo:""}),t=Object(p.a)(e,2),n=t[0],c=t[1];return n.todos.map((function(e){return JSON.stringify(e)})).join(" | "),Object(s.jsxs)("section",{children:[Object(s.jsx)(k,{onChange:function(e){var t=e.currentTarget,r=(t.name,t.value);c(Object(O.a)(Object(O.a)({},n),{},{newTodo:r}))},value:n.newTodo,onAddNew:function(e){var t={description:n.newTodo,completed:!1,id:(new Date).getTime()},r=n.todos;r.push(t),c({todos:r,newTodo:""})}}),Object(s.jsx)(L,{todos:n.todos,doneHandler:function(e){var t=n.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}));c(Object(O.a)(Object(O.a)({},n),{},{todos:t}))},deleteHandler:function(e){var t=n.todos.filter((function(t){return t.id!==e}));c(Object(O.a)(Object(O.a)({},n),{},{todos:t}))}})]})};var I=function(){return Object(s.jsx)(l.a,{children:Object(s.jsx)("section",{children:Object(s.jsxs)(y.c,{children:[Object(s.jsxs)(y.a,{path:"/",exact:!0,children:[Object(s.jsx)(u,{title:"Home"}),Object(s.jsx)(C,{})]}),Object(s.jsxs)(y.a,{path:"/todos",exact:!0,children:[Object(s.jsx)(u,{title:"Todos"}),Object(s.jsx)(A,{})]}),Object(s.jsxs)(y.a,{path:"/Login",exact:!0,children:[Object(s.jsx)(u,{title:"Login"}),Object(s.jsx)(N,{})]})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.2ac78fa3.chunk.js.map