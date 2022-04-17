import{S as $,i as ee,a as te,e as o,o as I,B as ne,f as u,p as _,h as J,j as i,C as ie,l as q,A as se,a2 as le,F as G,G as x,n as K,H as ae,K as oe,Q as he,I as pe,J as ge,x as L,y as me,L as E,a3 as de,z as re,t as _e,T as V,k as we,M as be,P as W}from"./vendor.25b3d23e.js";import{U as ce,N as ve,f as z,O as X,c as B}from"./index.f673854e.js";import{S as ye,G as ue,y as H}from"./short-unique-id.f3ce1907.js";var Ce=[{code:"2",value:"No Lights And Sirens"},{code:"3",value:"Lights And Sirens"}];function Z(n){let s,l,t,a,r,g,f,S,c,w,m,D,b,v,N,y,d,e,p,k;function j(h){n[7](h)}let A={style:n[3],columns:n[5],data:Ce||[],pagination:{enabled:!0,limit:6},search:!0};return n[1]!==void 0&&(A.instance=n[1]),b=new ue({props:A}),E.push(()=>de(b,"instance",j)),{c(){s=o("div"),l=o("div"),t=o("div"),a=o("div"),a.textContent="Set new Report",r=I(),g=o("div"),f=o("button"),S=I(),c=o("div"),w=o("fieldset"),m=o("div"),D=o("fieldset"),ne(b.$$.fragment),N=I(),y=o("section"),d=o("button"),d.textContent="Close",u(a,"class","title-bar-text"),u(f,"aria-label","Close"),u(g,"class","title-bar-controls"),u(t,"class","title-bar"),u(m,"class","field-row"),_(m,"justify-content","center"),u(w,"class","text-center"),u(y,"class","field-row"),_(y,"justify-content","space-around"),_(y,"align-content","center"),u(c,"class","window-body relative-position"),_(c,"max-height","64vh",!1),u(l,"class","window full-width"),u(s,"class","absolute-center "),_(s,"width","100%"),_(s,"max-width","100%"),_(s,"min-width","40%"),_(s,"height","65vh")},m(h,M){J(h,s,M),i(s,l),i(l,t),i(t,a),i(t,r),i(t,g),i(g,f),i(l,S),i(l,c),i(c,w),i(w,m),i(m,D),ie(b,D,null),i(c,N),i(c,y),i(y,d),n[8](s),e=!0,p||(k=[q(f,"click",se(n[6])),q(d,"click",n[4])],p=!0)},p(h,M){const R={};!v&&M&2&&(v=!0,R.instance=h[1],le(()=>v=!1)),b.$set(R)},i(h){e||(G(b.$$.fragment,h),e=!0)},o(h){x(b.$$.fragment,h),e=!1},d(h){h&&K(s),ae(b),n[8](null),p=!1,oe(k)}}}function ke(n){let s,l,t=n[0]&&Z(n);return{c(){t&&t.c(),s=he()},m(a,r){t&&t.m(a,r),J(a,s,r),l=!0},p(a,[r]){a[0]?t?(t.p(a,r),r&1&&G(t,1)):(t=Z(a),t.c(),G(t,1),t.m(s.parentNode,s)):t&&(pe(),x(t,1,1,()=>{t=null}),ge())},i(a){l||(G(t),l=!0)},o(a){x(t),l=!1},d(a){t&&t.d(a),a&&K(s)}}}function De(n,s,l){let t,a;L(n,ce,d=>l(9,t=d)),L(n,ve,d=>l(10,a=d));let r=new ye({length:5}),g,f;const S=me();let{open:c=!1}=s;const w={table:{width:"100%",height:"100%"},header:{display:"flex",alignItems:"center",flexDirection:"row-reverse"},footer:{width:"100%"}};function m(){l(0,c=!1),S("closeModal")}const D=[{id:"code",name:"Code",width:"10%"},{id:"value",name:"Code Description",width:"20%"},{id:"add",name:"Action",formatter:(d,e)=>H("button",{onClick:()=>{b(e.cells[0].data,e.cells[1].data)}},"Delete"),width:"10%"}];function b(d,e){console.log(d),a.some(p=>p.code===d&&p.callsign===t.callsign)||z("sendHelpRequest",{uid:r(),code:d,text:e,callsign:t.callsign,taked:!1})}const v=()=>re("/");function N(d){g=d,l(1,g)}function y(d){E[d?"unshift":"push"](()=>{f=d,l(2,f)})}return n.$$set=d=>{"open"in d&&l(0,c=d.open)},[c,g,f,w,m,D,v,N,y]}class Ne extends ${constructor(s){super();ee(this,s,De,ke,te,{open:0})}}function Se(n){let s,l,t,a,r,g,f,S,c,w,m,D,b,v,N=n[3]===!0?"YES":"NO",y,d,e,p,k,j,A,h,M,R,T,U,F,P;function fe(C){n[11](C)}let Q={style:n[4],columns:n[5],data:n[1]||[]};return n[0]!==void 0&&(Q.instance=n[0]),k=new ue({props:Q}),E.push(()=>de(k,"instance",fe)),{c(){s=o("div"),l=o("div"),t=o("div"),a=o("div"),a.textContent="MY TOOL",r=I(),g=o("div"),f=o("button"),S=I(),c=o("div"),w=o("fieldset"),m=o("div"),D=o("p"),D.textContent="On Duty:",b=I(),v=o("span"),y=_e(N),d=I(),e=o("div"),p=o("fieldset"),ne(k.$$.fragment),A=I(),h=o("section"),M=o("button"),M.textContent="Change Duty",R=I(),T=o("button"),T.textContent="Request Back Up",u(a,"class","title-bar-text"),u(f,"aria-label","Close"),u(g,"class","title-bar-controls"),u(t,"class","title-bar"),u(D,"class","nameField text-h6 text-weight-light  svelte-325c33"),u(v,"class","inputField text-h6 text-weight-medium svelte-325c33"),V(v,"dutyon",!!n[3]),u(m,"class","field-row"),_(m,"justify-content","center"),u(e,"class","field-row"),_(e,"justify-content","center"),u(w,"class","text-center"),u(h,"class","field-row"),_(h,"justify-content","space-around"),_(h,"align-content","center"),u(c,"class","window-body relative-position full-height"),_(c,"max-height","100vh",!1),u(l,"class","window full-width full-height"),u(s,"class","absolute-center "),_(s,"width","70%"),_(s,"max-width","100%"),_(s,"min-width","40%")},m(C,O){J(C,s,O),i(s,l),i(l,t),i(t,a),i(t,r),i(t,g),i(g,f),i(l,S),i(l,c),i(c,w),i(w,m),i(m,D),i(m,b),i(m,v),i(v,y),i(w,d),i(w,e),i(e,p),ie(k,p,null),i(c,A),i(c,h),i(h,M),i(h,R),i(h,T),n[12](s),U=!0,F||(P=[q(f,"click",se(n[10])),q(M,"click",n[6]),q(T,"click",n[7])],F=!0)},p(C,[O]){(!U||O&8)&&N!==(N=C[3]===!0?"YES":"NO")&&we(y,N),O&8&&V(v,"dutyon",!!C[3]);const Y={};O&2&&(Y.data=C[1]||[]),!j&&O&1&&(j=!0,Y.instance=C[0],le(()=>j=!1)),k.$set(Y)},i(C){U||(G(k.$$.fragment,C),U=!0)},o(C){x(k.$$.fragment,C),U=!1},d(C){C&&K(s),ae(k),n[12](null),F=!1,oe(P)}}}function Ie(n,s,l){let t,a,r;L(n,X,e=>l(3,t=e)),L(n,ce,e=>l(9,a=e)),L(n,B,e=>l(1,r=e));let g,f;const S={table:{width:"100%"},header:{display:"flex",alignItems:"center",flexDirection:"row-reverse"},footer:{width:"100%"}};let{params:c={}}=s;const w=[{id:"casid",name:"Case ID",width:"10%"},{id:"name",name:"Citizen Name",width:"10%"},{id:"citizenid",name:"Citizenid",width:"10%"},{id:"coordinates",name:"Coordinates",formatter:(e,p)=>H("button",{onClick:()=>{m(p.cells[3].data)}},"Set"),width:"10%"},{id:"delete",name:"Delete",formatter:(e,p)=>H("button",{onClick:()=>{D(p.cells[0].data)}},"Delete"),width:"10%"}];async function m(e){await z("setDestination",{coords:e})}function D(e){z("deleteAssignment",{id:e}).then(async p=>{p&&(r.splice(r.findIndex(k=>k.id===e),1),B.set(r),await f.updateConfig({data:r}).forceRender())})}be(()=>{f.forceRender()});async function b(){await z("changeDuty",{user:a.citizenid,duty:t}).then(e=>{W(X,t=e,t),console.log(e)})}function v(){let e=!0,p=new Ne({target:g,props:{open:e}});return p.$on("closeModal",()=>e=!1),p}const N=()=>re("/");function y(e){f=e,l(0,f)}function d(e){E[e?"unshift":"push"](()=>{g=e,l(2,g)})}return n.$$set=e=>{"params"in e&&l(8,c=e.params)},n.$$.update=()=>{n.$$.dirty&771&&c.reload&&(z("getMycalls",{cs:a.callsign}).then(e=>{W(B,r=e,r),f.updateConfig({data:r!=null?r:[]}).forceRender()}),l(8,c.reload=!1,c))},[f,r,g,t,S,w,b,v,c,a,N,y,d]}class Ae extends ${constructor(s){super();ee(this,s,Ie,Se,te,{params:8})}}export{Ae as default};
