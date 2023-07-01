"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[64],{2064:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var o,r,i,c,s,u,a,d,l,f,h,m,p,x,g=t(7689),b=t(6907),w=t(828),Z=t(2791),j=t(6697),y=t(5501),S=t(3103),z=t(5218),v=t(864),P=t(6856),k=t(6355),C=t(168),A=t(6444),F=t(1087),H=A.ZP.li(o||(o=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ",'px;\n\n  font-family: "Segoe UI";\n  font-weight: ',";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: 0.01em;\n  border: 1px solid ",";\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n\n  @media screen and (min-width: 767px) {\n    padding: ","px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.colors.brownSecond}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.m})),K=A.ZP.div(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  color: ",";\n"])),(function(n){return n.theme.colors.brownSecond})),U=A.ZP.div(i||(i=(0,C.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),T=A.ZP.a(c||(c=(0,C.Z)(["\n  text-decoration: none;\n"]))),L=A.ZP.div(s||(s=(0,C.Z)(["\n  display: flex;\n  gap: 5px;\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.brownThird}),(function(n){return n.theme.colors.brownThirdAccent})),V=A.ZP.div(u||(u=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n\n  @media screen and (min-width: 1024px) {\n    gap: 10px;\n  }\n"]))),W=(0,A.ZP)(F.rU)(a||(a=(0,C.Z)(["\n  color: ",";\n  text-decoration: none;\n  background: inherit;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.brownSecondAccent}),(function(n){return n.theme.colors.redFirst})),B=A.ZP.button(d||(d=(0,C.Z)(["\n  color: ",";\n  cursor: pointer;\n  background: inherit;\n  border: none;\n  padding: 0;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.brownSecondAccent}),(function(n){return n.theme.colors.redFirst})),G=t(3329),I=function(n){var e=n.contact,t=e.name,o=e.number,r=e.id,i=(0,j.V)(),c=(0,g.TH)();return(0,G.jsxs)(H,{children:[(0,G.jsxs)(K,{children:[(0,G.jsxs)(U,{children:[(0,G.jsx)(w.Bmn,{style:{fontSize:"18px"}})," ",t]}),(0,G.jsx)(T,{href:"tel:".concat(o),children:(0,G.jsxs)(L,{children:[(0,G.jsx)(w.MdO,{style:{fontSize:"18px"}}),o]})})]}),(0,G.jsxs)(V,{children:[(0,G.jsx)(W,{to:"/contacts/update",state:{from:c,id:"".concat(r),name:"".concat(t),number:"".concat(o)},children:(0,G.jsx)(k.fmQ,{style:{fontSize:" 20px"}})}),(0,G.jsx)(B,{type:"button","aria-label":"delete contact",onClick:function(){return i((0,y.GK)(r)).unwrap().then((function(){z.ZP.success("Contact deleted!",v.Zk)})).catch((function(){return z.ZP.error("An error occurred while deleting a contact, please try again",v.om)}))},children:(0,G.jsx)(P.tGS,{style:{fontSize:" 25px"}})})]})]})},q=A.ZP.ul(l||(l=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),R=function(){var n=(0,j.n)(S.vK),e=(0,j.V)();return(0,Z.useEffect)((function(){e((0,y.CL)())}),[e]),(0,G.jsx)(q,{children:n&&n.map((function(n){return(0,G.jsx)(I,{contact:n},n.id)}))})},E=t(6751),M=A.ZP.input(f||(f=(0,C.Z)(["\n  width: 100%;\n  margin-bottom: 24px;\n  padding: 6px ",'px;\n\n  font-family: "Segoe UI";\n  font-weight: ',";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: 0.03em;\n\n  background-color: ",";\n  border-radius: ",";\n  border: 2px solid ",";\n  outline: none;\n\n  &:focus {\n    border: 2px solid ",";\n  }\n\n  @media screen and (min-width: 400px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.body}),(function(n){return n.theme.colors.whiteFirst}),(function(n){return n.theme.radii.highRound}),(function(n){return n.filter?"#713200":"#89888ba6"}),(function(n){return n.theme.colors.brownFirst}),(function(n){return n.theme.fontSizes.m})),N=function(){var n=(0,j.n)(S.zK),e=(0,j.V)();return(0,G.jsx)(M,{filter:n,type:"text",pattern:"/^([0-9a-zA-Z\u0430-\u044f\u0451\u0410-\u042f\u0401\u0407\u0457\u0404\u0454\u0490\u0491]\\s?)*$/",title:"The name can contain letters, numbers and and spaces between the words. Not contain dashes, apostrophe, signs * & etc. For example: Hermion Vue, Liza Grace, etc.",placeholder:"Find contacts by name",required:!0,onChange:function(n){return e((0,E.W)(n.target.value))}})},O=A.ZP.div(h||(h=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[4]})),Q=A.ZP.div(m||(m=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  margin-bottom: ","px;\n  text-align: ",";\n\n  border-bottom: 1px solid ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding-left: ","px;\n    padding-right: ","px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.position.center}),(function(n){return n.theme.colors.brownSecond}),(function(n){return n.theme.colors.brownSecond}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),$=A.ZP.h2(p||(p=(0,C.Z)(['\n  font-family: "Segoe UI";\n  font-weight: ',";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: 0.03em;\n\n  @media screen and (min-width: 400px) {\n    font-size: 30px;\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.thick})),D=(0,A.ZP)(F.rU)(x||(x=(0,C.Z)(["\n  color: ",";\n  cursor: pointer;\n  background: inherit;\n  border: ",";\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.brownSecond}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.blueSecond})),J=function(){var n=(0,g.TH)();return(0,G.jsxs)(O,{children:[(0,G.jsxs)(b.ql,{children:[(0,G.jsx)("title",{children:"Contacts list in Phone book"}),(0,G.jsx)("meta",{name:"description",content:"Use your contact list, search for a contact by name and change the values of the fields in the contact."}),(0,G.jsx)("meta",{name:"Author",content:"Bohdan100"})]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(w.ciw,{style:{fontSize:"30px"}}),(0,G.jsx)($,{children:"Contacts"}),(0,G.jsx)(D,{to:"/contacts/add",state:{from:n},children:(0,G.jsx)(w.BR5,{style:{fontSize:"30px"}})})]}),(0,G.jsx)(N,{}),(0,G.jsx)(R,{})]})}},3103:function(n,e,t){t.d(e,{K2:function(){return r},vK:function(){return c},zK:function(){return i}});var o=t(6916),r=function(n){return n.contacts.items},i=function(n){return n.filter},c=(0,o.P1)([r,i],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).sort((function(n,e){return n.name>e.name?1:n.name<e.name?-1:0}))}))}}]);
//# sourceMappingURL=64.45f2f008.chunk.js.map