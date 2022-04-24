import{S as ee,i as te,s as ne,e as o,a as N,c as ie,b as u,d as _,f as L,g as i,m as se,l as T,F as le,h as ae,t as F,j as Y,k as X,n as oe,r as de,o as pe,p as ge,q as me,u as R,X as re,Z as _e,_ as we,v as be,w as A,x as ce,C as E,U as ue,y as ve,$ as J,A as ye,D as K,a0 as Q,a1 as V,a2 as W}from"./index.25bde9fa.js";import{S as Ce,G as fe,y as H}from"./short-unique-id.0d977aa9.js";function $(n){let s,l,t,a,d,m,f,D,r,p,g,k,w,b,M,v,S,e,c,y;function U(h){n[8](h)}let q={style:n[4],columns:n[6],data:n[3].codes||[],pagination:{enabled:!0,limit:6},search:!0};return n[1]!==void 0&&(q.instance=n[1]),w=new fe({props:q}),A.push(()=>ce(w,"instance",U)),{c(){s=o("div"),l=o("div"),t=o("div"),a=o("div"),a.textContent="Set new Report",d=N(),m=o("div"),f=o("button"),D=N(),r=o("div"),p=o("fieldset"),g=o("div"),k=o("fieldset"),ie(w.$$.fragment),M=N(),v=o("section"),S=o("button"),S.textContent="Close",u(a,"class","title-bar-text"),u(f,"aria-label","Close"),u(m,"class","title-bar-controls"),u(t,"class","title-bar"),u(g,"class","field-row"),_(g,"justify-content","center"),u(p,"class","text-center"),u(v,"class","field-row"),_(v,"justify-content","space-around"),_(v,"align-content","center"),u(r,"class","window-body relative-position"),_(r,"max-height","64vh",!1),u(l,"class","window full-width"),u(s,"class","absolute-center "),_(s,"width","100%"),_(s,"max-width","100%"),_(s,"min-width","40%"),_(s,"height","65vh")},m(h,I){L(h,s,I),i(s,l),i(l,t),i(t,a),i(t,d),i(t,m),i(m,f),i(l,D),i(l,r),i(r,p),i(p,g),i(g,k),se(w,k,null),i(r,M),i(r,v),i(v,S),n[9](s),e=!0,c||(y=[T(f,"click",le(n[7])),T(S,"click",n[5])],c=!0)},p(h,I){const j={};I&8&&(j.data=h[3].codes||[]),!b&&I&2&&(b=!0,j.instance=h[1],ae(()=>b=!1)),w.$set(j)},i(h){e||(F(w.$$.fragment,h),e=!0)},o(h){Y(w.$$.fragment,h),e=!1},d(h){h&&X(s),oe(w),n[9](null),c=!1,de(y)}}}function ke(n){let s,l,t=n[0]&&$(n);return{c(){t&&t.c(),s=pe()},m(a,d){t&&t.m(a,d),L(a,s,d),l=!0},p(a,[d]){a[0]?t?(t.p(a,d),d&1&&F(t,1)):(t=$(a),t.c(),F(t,1),t.m(s.parentNode,s)):t&&(ge(),Y(t,1,1,()=>{t=null}),me())},i(a){l||(F(t),l=!0)},o(a){Y(t),l=!1},d(a){t&&t.d(a),a&&X(s)}}}function De(n,s,l){let t,a,d;R(n,re,e=>l(10,t=e)),R(n,_e,e=>l(11,a=e)),R(n,we,e=>l(3,d=e));let m=new Ce({length:5}),f,D;const r=be();let{open:p=!1}=s;const g={table:{width:"100%",height:"100%"},header:{display:"flex",alignItems:"center",flexDirection:"row-reverse"},footer:{width:"100%"}};function k(){l(0,p=!1),r("closeModal")}const w=[{id:"id",name:"Code ID",width:"3%"},{id:"code",name:"Code",width:"10%"},{id:"desc",name:"Code Description",width:"20%"},{id:"add",name:"Action",formatter:(e,c)=>H("button",{onClick:()=>{b(c.cells[0].data,c.cells[2].data)}},"Select"),width:"10%"}];function b(e,c){a.some(y=>y.code===e&&y.callsign===t.callsign)||E("sendHelpRequest",{uid:m(),code:e,text:c,callsign:t.callsign,taked:!1})}const M=()=>ue("/");function v(e){f=e,l(1,f)}function S(e){A[e?"unshift":"push"](()=>{D=e,l(2,D)})}return n.$$set=e=>{"open"in e&&l(0,p=e.open)},[p,f,D,d,g,k,w,M,v,S]}class Me extends ee{constructor(s){super(),te(this,s,De,ke,ne,{open:0})}}function Se(n){let s,l,t,a,d,m,f,D,r,p,g,k,w,b,M=n[3]===!0?"YES":"NO",v,S,e,c,y,U,q,h,I,j,G,z,P,Z;function he(C){n[11](C)}let x={style:n[4],columns:n[5],data:n[1]||[]};return n[0]!==void 0&&(x.instance=n[0]),y=new fe({props:x}),A.push(()=>ce(y,"instance",he)),{c(){s=o("div"),l=o("div"),t=o("div"),a=o("div"),a.textContent="MY TOOL",d=N(),m=o("div"),f=o("button"),D=N(),r=o("div"),p=o("fieldset"),g=o("div"),k=o("p"),k.textContent="On Duty:",w=N(),b=o("span"),v=ve(M),S=N(),e=o("div"),c=o("fieldset"),ie(y.$$.fragment),q=N(),h=o("section"),I=o("button"),I.textContent="Change Duty",j=N(),G=o("button"),G.textContent="Request Back Up",u(a,"class","title-bar-text"),u(f,"aria-label","Close"),u(m,"class","title-bar-controls"),u(t,"class","title-bar"),u(k,"class","nameField text-h6 text-weight-light  svelte-325c33"),u(b,"class","inputField text-h6 text-weight-medium svelte-325c33"),J(b,"dutyon",!!n[3]),u(g,"class","field-row"),_(g,"justify-content","center"),u(e,"class","field-row"),_(e,"justify-content","center"),u(p,"class","text-center"),u(h,"class","field-row"),_(h,"justify-content","space-around"),_(h,"align-content","center"),u(r,"class","window-body relative-position full-height"),_(r,"max-height","100vh",!1),u(l,"class","window full-width full-height"),u(s,"class","absolute-center "),_(s,"width","70%"),_(s,"max-width","100%"),_(s,"min-width","40%")},m(C,O){L(C,s,O),i(s,l),i(l,t),i(t,a),i(t,d),i(t,m),i(m,f),i(l,D),i(l,r),i(r,p),i(p,g),i(g,k),i(g,w),i(g,b),i(b,v),i(p,S),i(p,e),i(e,c),se(y,c,null),i(r,q),i(r,h),i(h,I),i(h,j),i(h,G),n[12](s),z=!0,P||(Z=[T(f,"click",le(n[10])),T(I,"click",n[6]),T(G,"click",n[7])],P=!0)},p(C,[O]){(!z||O&8)&&M!==(M=C[3]===!0?"YES":"NO")&&ye(v,M),O&8&&J(b,"dutyon",!!C[3]);const B={};O&2&&(B.data=C[1]||[]),!U&&O&1&&(U=!0,B.instance=C[0],ae(()=>U=!1)),y.$set(B)},i(C){z||(F(y.$$.fragment,C),z=!0)},o(C){Y(y.$$.fragment,C),z=!1},d(C){C&&X(s),oe(y),n[12](null),P=!1,de(Z)}}}function Ie(n,s,l){let t,a,d;R(n,V,e=>l(3,t=e)),R(n,re,e=>l(9,a=e)),R(n,W,e=>l(1,d=e));let m,f;const D={table:{width:"100%"},header:{display:"flex",alignItems:"center",flexDirection:"row-reverse"},footer:{width:"100%"}};let{params:r={}}=s;K(()=>{f.forceRender()});const p=[{id:"casid",name:"Case ID",width:"10%"},{id:"name",name:"Citizen Name",width:"10%"},{id:"citizenid",name:"Citizenid",width:"10%"},{id:"coordinates",name:"Coordinates",formatter:(e,c)=>H("button",{onClick:()=>{g(c.cells[3].data)}},"Set"),width:"10%"},{id:"delete",name:"Delete",formatter:(e,c)=>H("button",{onClick:()=>{k(c.cells[0].data)}},"Delete"),width:"10%"}];async function g(e){await E("setDestination",{coords:e})}async function k(e){try{E("deleteAssignment",{id:e,callsign:a.callsign}).then(c=>{c&&f.updateConfig({data:d!=null?d:[]}).forceRender()})}catch(c){console.log(`Error on MyTool 105 ${c}`)}}K(()=>{f.forceRender()});async function w(){try{await E("changeDuty",{user:a.citizenid,duty:t}).then(e=>{Q(V,t=e,t)})}catch{}}function b(){let e=!0,c=new Me({target:m,props:{open:e}});return c.$on("closeModal",()=>e=!1),c}const M=()=>ue("/");function v(e){f=e,l(0,f)}function S(e){A[e?"unshift":"push"](()=>{m=e,l(2,m)})}return n.$$set=e=>{"params"in e&&l(8,r=e.params)},n.$$.update=()=>{n.$$.dirty&771&&r.reload&&(E("getMycalls",{cs:a.callsign}).then(e=>{Q(W,d=e,d),f.updateConfig({data:d!=null?d:[]}).forceRender()}),l(8,r.reload=!1,r))},[f,d,m,t,D,p,w,b,r,a,M,v,S]}class Oe extends ee{constructor(s){super(),te(this,s,Ie,Se,ne,{params:8})}}export{Oe as default};