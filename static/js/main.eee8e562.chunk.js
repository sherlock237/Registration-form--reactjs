(this.webpackJsonpregistration=this.webpackJsonpregistration||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(4),i=a.n(r),l=(a(13),a.p,a(14),a(5)),c=a(6),d=a(2),o=a(8),u=a(7),h=(a(15),a(0)),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).firsthandler=function(e){n.setState({firstName:e.target.value})},n.lasthandler=function(e){n.setState({lastName:e.target.value})},n.passwordhandler=function(e){n.setState({password:e.target.value})},n.genderhandler=function(e){n.setState({gender:e.target.value})},n.handleSubmit=function(e){alert("NAME:-  ".concat(n.state.firstName," \nLAST NAME:-  ").concat(n.state.lastName," \nGENDER:-  ").concat(n.state.gender," \nPASSWORD:-  ").concat(n.state.password," \n\nRegistered Successfully !!!!")),console.log(n.state),n.setState({firstName:"",lastName:"",password:"",gender:""}),window.location.reload(),e.preventDefault()},n.state={firstName:"",lastName:"",password:"",gender:""},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("h1",{children:"User Registration"}),Object(h.jsx)("label",{children:"FirstName :"})," ",Object(h.jsx)("input",{type:"text",value:this.state.firstName,onChange:this.firsthandler,placeholder:"FirstName...",style:{width:"auto"},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"LastName :"})," ",Object(h.jsx)("input",{type:"text",value:this.state.lastName,onChange:this.lasthandler,placeholder:"LastName...",style:{width:"auto"},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Password :"})," ",Object(h.jsx)("input",{type:"password",value:this.state.password,onChange:this.passwordhandler,placeholder:"Password...",style:{width:"auto"},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Gender :"}),"\xa0 \xa0 ",Object(h.jsxs)("select",{onChange:this.genderhandler,defaultValue:"Gender",style:{width:"auto"},required:!0,children:[Object(h.jsx)("option",{value:"",children:"Select Gender"}),Object(h.jsx)("option",{value:"male",children:"Male"}),Object(h.jsx)("option",{value:"female",children:"Female"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"submit",type:"submit",value:"Submit"})]})})}}]),a}(n.Component);var b=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(j,{})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.eee8e562.chunk.js.map