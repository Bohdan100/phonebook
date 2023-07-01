"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[474],{474:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,o,i,u,c,a,s,l,f,h=t(7689),m=t(6907),d=t(4165),p=t(5861),g=t(6697),b=t(5501),x=t(3103),v=t(864),y=t(5705),w=t(6439),Z=t(5218),j=t(168),z=t(6444),k=z.ZP.div(r||(r=(0,j.Z)(['\n  display: flex;\n  flex-direction: column;\n\n  font-family: "Segoe UI";\n  font-weight: ',";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: 0.01em;\n  color: ",";\n\n  @media screen and (min-width: 400px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.colors.grayFirst}),(function(n){return n.theme.fontSizes.m})),S=z.ZP.label(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),F=z.ZP.label(i||(i=(0,j.Z)(["\n  margin-bottom: 8px;\n"]))),C=z.ZP.input(u||(u=(0,j.Z)(["\n  width: 100%;\n  height: ","px;\n  padding-left: ","px;\n  margin-bottom: ","px;\n\n  background-color: ",";\n  color: ",";\n  border: 2px solid rgba(33, 33, 33, 0.2);\n  border-radius: ",";\n\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    outline: none;\n    border: 2px solid ",";\n  }\n"])),(function(n){return n.theme.space[8]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.whiteFirst}),(function(n){return n.theme.colors.grayFirst}),(function(n){return n.theme.radii.smart}),(function(n){return n.theme.colors.brownFirst})),P=z.ZP.p(c||(c=(0,j.Z)(['\n  margin-bottom: 20px;\n  font-family: "Segoe UI";\n  font-size: ',";\n  line-height: ",";\n  letter-spacing: 0.01em;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.colors.brownFirst})),A=z.ZP.button(a||(a=(0,j.Z)(["\n  width: 140px;\n  height: 30px;\n  margin: ",'px auto;\n\n  font-family: "Segoe UI";\n  font-size: ',";\n  line-height: ",";\n  letter-spacing: 0.01em;\n  color: ",";\n  background: ",";\n\n  border: ",";\n  border-radius: ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background: ",";\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    color: ",";\n  }\n\n  @media screen and (min-width: 400px) {\n    width: 160px;\n    height: 40px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.colors.grayFirst}),(function(n){return n.theme.colors.whiteThird}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.colors.brownFirst}),(function(n){return n.theme.colors.whiteFirst}),(function(n){return n.theme.fontSizes.m})),E=t(3329),q=function(){var n=(0,g.V)(),e=(0,h.s0)(),t=(0,g.n)(x.K2),r=function(){var r=(0,p.Z)((0,d.Z)().mark((function r(o,i){var u,c;return(0,d.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=i.resetForm,!(0,v.TB)(o.name,t)){r.next=4;break}return Z.ZP.error("".concat(o.name," is already in contacts"),v.om),r.abrupt("return");case 4:c={name:o.name,number:o.number},n((0,b.uK)(c)).unwrap().then((function(){Z.ZP.success("Contact created!",v.Zk)})).catch((function(){return Z.ZP.error("Can't created contact",v.om)})),u(),e("/contacts",{replace:!0});case 8:case"end":return r.stop()}}),r)})));return function(n,e){return r.apply(this,arguments)}}(),o={initialValues:{name:"",number:""},validationSchema:w.$O,onSubmit:r},i=(0,y.TA)(o);return(0,E.jsx)("form",{onSubmit:i.handleSubmit,children:(0,E.jsxs)(k,{children:[(0,E.jsxs)(S,{children:[(0,E.jsx)(F,{htmlFor:"name",children:"Name"}),(0,E.jsx)(C,{id:"name",name:"name",type:"text",placeholder:"Enter contact name",required:!0,onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name}),i.errors.name?(0,E.jsx)(P,{children:i.errors.name}):null]}),(0,E.jsxs)(S,{children:[(0,E.jsx)(F,{htmlFor:"number",children:"Number"}),(0,E.jsx)(C,{id:"number",name:"number",type:"tel",placeholder:"Enter phone number, at least 3 character",required:!0,onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.number}),i.errors.number?(0,E.jsx)(P,{children:i.errors.number}):null]}),(0,E.jsx)(A,{type:"submit","aria-label":"add contact",children:"Add contact"})]})})},B=t(1087),H=z.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[4]})),O=z.ZP.h1(l||(l=(0,j.Z)(["\n  margin-bottom: ","px;\n  text-align: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: 0.03em;\n  padding-bottom: 6px;\n  border-bottom: 1px solid ",";\n  color: ",";\n\n  @media screen and (min-width: 400px) {\n    font-size: 30px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.position.center}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.thick}),(function(n){return n.theme.colors.brownSecond}),(function(n){return n.theme.colors.brownSecond})),K=(0,z.ZP)(B.rU)(f||(f=(0,j.Z)(["\n  margin: ","px auto;\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: 0.01em;\n  color: ",";\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover {\n    color: ",";\n    text-decoration: underline;\n  }\n\n  @media screen and (min-width: 400px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[8]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.heading}),(function(n){return n.theme.colors.grayFirst}),(function(n){return n.theme.colors.brownFirst}),(function(n){return n.theme.fontSizes.m})),N=function(){var n,e,t=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,E.jsxs)(H,{children:[(0,E.jsxs)(m.ql,{children:[(0,E.jsx)("title",{children:"Add own contact to your personal Phone book"}),(0,E.jsx)("meta",{name:"description",content:"Add new contact to own contact list with name and phone number fields."}),(0,E.jsx)("meta",{name:"Author",content:"Bohdan100"})]}),(0,E.jsx)(O,{children:"New Contact"}),(0,E.jsx)(q,{}),(0,E.jsx)(K,{to:t,children:(0,E.jsx)("span",{children:"Go to contacts page"})})]})}},3103:function(n,e,t){t.d(e,{K2:function(){return o},vK:function(){return u},zK:function(){return i}});var r=t(6916),o=function(n){return n.contacts.items},i=function(n){return n.filter},u=(0,r.P1)([o,i],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).sort((function(n,e){return n.name>e.name?1:n.name<e.name?-1:0}))}))},6916:function(n,e,t){t.d(e,{P1:function(){return a}});var r="NOT_FOUND";var o=function(n,e){return n===e};function i(n,e){var t="object"===typeof e?e:{equalityCheck:e},i=t.equalityCheck,u=void 0===i?o:i,c=t.maxSize,a=void 0===c?1:c,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(u),f=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function o(n){var o=t.findIndex((function(t){return e(n,t.key)}));if(o>-1){var i=t[o];return o>0&&(t.splice(o,1),t.unshift(i)),i.value}return r}return{get:o,put:function(e,i){o(e)===r&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function h(){var e=f.get(arguments);if(e===r){if(e=n.apply(null,arguments),s){var t=f.getEntries(),o=t.find((function(n){return s(n.value,e)}));o&&(e=o.value)}f.put(arguments,e)}return e}return h.clearCache=function(){return f.clear()},h}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,c=0,a={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(a=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=a,f=l.memoizeOptions,h=void 0===f?t:f,m=Array.isArray(h)?h:[h],d=u(r),p=n.apply(void 0,[function(){return c++,s.apply(null,arguments)}].concat(m)),g=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return i=p.apply(null,n)}));return Object.assign(g,{resultFunc:s,memoizedResultFunc:p,dependencies:d,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),g};return o}var a=c(i)}}]);
//# sourceMappingURL=474.59a47064.chunk.js.map