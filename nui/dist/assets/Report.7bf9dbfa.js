var Qn=Object.defineProperty,Xn=Object.defineProperties;var Zn=Object.getOwnPropertyDescriptors;var En=Object.getOwnPropertySymbols;var xn=Object.prototype.hasOwnProperty,$n=Object.prototype.propertyIsEnumerable;var Pn=(l,a,t)=>a in l?Qn(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,zn=(l,a)=>{for(var t in a||(a={}))xn.call(a,t)&&Pn(l,t,a[t]);if(En)for(var t of En(a))$n.call(a,t)&&Pn(l,t,a[t]);return l},Fn=(l,a)=>Xn(l,Zn(a));import{S as Ie,i as Ae,s as je,e as s,a as v,c as Xe,b as i,d as U,f as W,g as e,m as Ze,l as E,h as _t,t as Y,j as le,k as V,n as xe,r as $e,o as vt,p as _l,q as vl,u as te,P as bt,v as gt,w as Te,x as wt,y as R,z as J,A as T,B as Hl,C as ke,D as ql,E as pl,F as In,G as Wl,H as hl,I as bl,J as Yn,Y as Kn,R as Vl,K as ei,L as ti,M as ht,N as ml,O as li,Q as An,T as ni,U as ii,V as ai,W as si}from"./index.27028e84.js";import{G as kt,y as he,S as oi}from"./short-unique-id.94ffff3d.js";import ri from"./About.cb613e80.js";import{U as ui,O as ci,S as di,A as fl}from"./ObservationsModal.4fe335cf.js";function jn(l){let a,t,n,o,r,b,y,m,h,C,f,c,d,p,u,g;function F(D){l[5](D)}let M={data:l[2]||[],columns:l[3],height:"30vh",fixedHeader:!0};return l[1]!==void 0&&(M.instance=l[1]),h=new kt({props:M}),Te.push(()=>wt(h,"instance",F)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="$_('polices-added')",o=v(),r=s("div"),b=s("button"),y=v(),m=s("div"),Xe(h.$$.fragment),f=v(),c=s("section"),d=s("button"),d.textContent="Close",i(n,"class","title-bar-text"),i(b,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(c,"class","field-row"),U(c,"justify-content","flex-end"),i(m,"class","window-body"),i(a,"class","window absolute-center"),U(a,"max-width","100vh")},m(D,I){W(D,a,I),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(a,y),e(a,m),Ze(h,m,null),e(m,f),e(m,c),e(c,d),p=!0,u||(g=[E(b,"click",l[4]),E(d,"click",l[4])],u=!0)},p(D,I){const B={};I&4&&(B.data=D[2]||[]),!C&&I&2&&(C=!0,B.instance=D[1],_t(()=>C=!1)),h.$set(B)},i(D){p||(Y(h.$$.fragment,D),p=!0)},o(D){le(h.$$.fragment,D),p=!1},d(D){D&&V(a),xe(h),u=!1,$e(g)}}}function fi(l){let a,t,n=l[0]&&jn(l);return{c(){n&&n.c(),a=vt()},m(o,r){n&&n.m(o,r),W(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&Y(n,1)):(n=jn(o),n.c(),Y(n,1),n.m(a.parentNode,a)):n&&(_l(),le(n,1,1,()=>{n=null}),vl())},i(o){t||(Y(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&V(a)}}}function pi(l,a,t){let n;te(l,bt,f=>t(2,n=f));let{open:o=!1}=a;const r=gt();let b;const y=["ID","Name","Last Name","Rank",{name:"Action",formatter:(f,c)=>he("button",{onClick:()=>{m(c.cells[0].data)}},"Delete")}];async function m(f){n.splice(n.findIndex(c=>c.id===f),1),bt.set(n);try{await b.forceRender()}catch(c){console.log(`PoliceList ${c}`)}}function h(){t(0,o=!1),r("closeModal",{})}function C(f){b=f,t(1,b)}return l.$$set=f=>{"open"in f&&t(0,o=f.open)},[o,b,n,y,h,C]}class mi extends Ie{constructor(a){super(),Ae(this,a,pi,fi,je,{open:0})}}function Tn(l){let a,t,n,o,r,b,y,m,h,C,f,c,d,p,u,g,F,M,D,I,B;return{c(){a=s("div"),t=s("div"),n=s("div"),o=s("div"),r=R("Search by "),b=R(l[1]),y=v(),m=s("div"),h=s("button"),C=v(),f=s("div"),c=s("label"),d=s("input"),p=v(),u=s("button"),g=R("Search"),M=v(),D=s("div"),i(o,"class","title-bar-text"),i(h,"aria-label","Close"),i(m,"class","title-bar-controls"),i(n,"class","title-bar"),i(d,"type","text"),i(d,"name","Search"),i(d,"id","Search"),i(c,"for","Search"),i(c,"label","Search"),u.disabled=F=l[2].length<3,i(f,"class","window-body"),i(t,"class","window"),U(t,"max-width","100vh"),i(a,"class","absolute-center"),i(D,"id","id")},m(A,z){W(A,a,z),e(a,t),e(t,n),e(n,o),e(o,r),e(o,b),e(n,y),e(n,m),e(m,h),e(t,C),e(t,f),e(f,c),e(c,d),J(d,l[2]),e(f,p),e(f,u),e(u,g),W(A,M,z),W(A,D,z),I||(B=[E(h,"click",l[3]),E(d,"input",l[5]),E(u,"click",l[6])],I=!0)},p(A,z){z&2&&T(b,A[1]),z&4&&d.value!==A[2]&&J(d,A[2]),z&4&&F!==(F=A[2].length<3)&&(u.disabled=F)},d(A){A&&V(a),A&&V(M),A&&V(D),I=!1,$e(B)}}}function hi(l){let a,t=l[0]&&Tn(l);return{c(){t&&t.c(),a=vt()},m(n,o){t&&t.m(n,o),W(n,a,o)},p(n,[o]){n[0]?t?t.p(n,o):(t=Tn(n),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:Hl,o:Hl,d(n){t&&t.d(n),n&&V(a)}}}function bi(l,a,t){let n,{open:o=!1}=a,{type:r=""}=a;const b=gt(),y=()=>{t(0,o=!1),b("closeModal",!1)};async function m(){let f=!0;try{await ke("searchPlayer",{name:n,app:"report",type:r}).then(c=>{if(c){let d=new ui({target:document.getElementById("id"),props:{open:f,data:c}});return d.$on("sendData",p=>{const u=p.detail,g={Name:String,LastName:String,citizenid:String};g.Name=u.Name,g.LastName=u.LastName,g.citizenid=u.citizenid,b("closeSearch",g),b("closeModal",!1)}),f=!1,d}})}catch(c){console.log(`Search ${c}`)}}function h(){n=this.value,t(2,n)}const C=()=>m();return l.$$set=f=>{"open"in f&&t(0,o=f.open),"type"in f&&t(1,r=f.type)},t(2,n=""),[o,r,n,y,m,h,C]}class _i extends Ie{constructor(a){super(),Ae(this,a,bi,hi,je,{open:0,type:1})}}function Un(l){let a,t,n,o,r,b,y,m,h,C,f,c,d,p,u,g;function F(D){l[5](D)}let M={data:l[1],height:"30vh",columns:l[3],autoWidth:!0,fixedHeader:!0};return l[2]!==void 0&&(M.instance=l[2]),h=new kt({props:M}),Te.push(()=>wt(h,"instance",F)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="Police Window",o=v(),r=s("div"),b=s("button"),y=v(),m=s("div"),Xe(h.$$.fragment),f=v(),c=s("section"),d=s("button"),d.textContent="Close",i(n,"class","title-bar-text"),i(b,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(c,"class","field-row"),U(c,"justify-content","space-around"),i(m,"class","window-body"),i(a,"class","window absolute-center "),U(a,"max-width","200vh"),U(a,"width","100vh"),U(a,"max-height","70vh")},m(D,I){W(D,a,I),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(a,y),e(a,m),Ze(h,m,null),e(m,f),e(m,c),e(c,d),p=!0,u||(g=[E(b,"click",l[4]),E(d,"click",l[4])],u=!0)},p(D,I){const B={};I&2&&(B.data=D[1]),!C&&I&4&&(C=!0,B.instance=D[2],_t(()=>C=!1)),h.$set(B)},i(D){p||(Y(h.$$.fragment,D),p=!0)},o(D){le(h.$$.fragment,D),p=!1},d(D){D&&V(a),xe(h),u=!1,$e(g)}}}function vi(l){let a,t,n=l[0]&&Un(l);return{c(){n&&n.c(),a=vt()},m(o,r){n&&n.m(o,r),W(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&Y(n,1)):(n=Un(o),n.c(),Y(n,1),n.m(a.parentNode,a)):n&&(_l(),le(n,1,1,()=>{n=null}),vl())},i(o){t||(Y(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&V(a)}}}function gi(l,a,t){let n;te(l,bt,c=>t(6,n=c));let{open:o=!1}=a,{polices:r=[]}=a,b;ql(()=>{r.length>0&&b.forceRender()});const y=["Citizenid","Name","Lastname","Rank",{name:"Action",formatter:(c,d)=>he("button",{onClick:()=>{C(d.cells[0].data,d.cells[1].data,d.cells[2].data,d.cells[3].data)}},"Add")}],m=gt();function h(){t(0,o=!1),m("closeModal",{})}function C(c,d,p,u){n.some(g=>g.id===c)||(n.push({id:c,name:d,lastName:p,rank:u}),bt.set(n))}function f(c){b=c,t(2,b)}return l.$$set=c=>{"open"in c&&t(0,o=c.open),"polices"in c&&t(1,r=c.polices)},[o,r,b,y,h,f]}class wi extends Ie{constructor(a){super(),Ae(this,a,gi,vi,je,{open:0,polices:1})}}function Bn(l){let a,t,n,o,r,b,y,m,h,C,f,c,d,p,u,g,F,M,D,I;function B(z){l[6](z)}let A={data:l[1],columns:l[3],height:"30vh",fixedHeader:!0};return l[2]!==void 0&&(A.instance=l[2]),d=new kt({props:A}),Te.push(()=>wt(d,"instance",B)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="Evidence Window",o=v(),r=s("div"),b=s("button"),y=v(),m=s("button"),h=v(),C=s("button"),f=v(),c=s("div"),Xe(d.$$.fragment),u=v(),g=s("section"),F=s("button"),F.textContent="Close",i(n,"class","title-bar-text"),i(b,"aria-label","Minimize"),i(m,"aria-label","Maximize"),i(C,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(g,"class","field-row"),U(g,"justify-content","space-around"),i(c,"class","window-body"),i(a,"class","window absolute-center "),U(a,"max-width","100vh"),U(a,"width","70vh"),U(a,"max-height","70vh")},m(z,k){W(z,a,k),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(r,y),e(r,m),e(r,h),e(r,C),e(a,f),e(a,c),Ze(d,c,null),e(c,u),e(c,g),e(g,F),M=!0,D||(I=[E(C,"click",l[4]),E(F,"click",l[4])],D=!0)},p(z,k){const j={};k&2&&(j.data=z[1]),k&8&&(j.columns=z[3]),!p&&k&4&&(p=!0,j.instance=z[2],_t(()=>p=!1)),d.$set(j)},i(z){M||(Y(d.$$.fragment,z),M=!0)},o(z){le(d.$$.fragment,z),M=!1},d(z){z&&V(a),xe(d),D=!1,$e(I)}}}function ki(l){let a,t,n=l[0]&&Bn(l);return{c(){n&&n.c(),a=vt()},m(o,r){n&&n.m(o,r),W(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&Y(n,1)):(n=Bn(o),n.c(),Y(n,1),n.m(a.parentNode,a)):n&&(_l(),le(n,1,1,()=>{n=null}),vl())},i(o){t||(Y(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&V(a)}}}function Ci(l,a,t){let n;te(l,pl,p=>t(7,n=p));const o=gt();let{open:r=!1}=a,{Evidence:b=[]}=a,{viewEvidence:y=!1}=a,m,h;function C(p,u,g,F){return n.some(M=>M.id===p)||(n.push({id:p,label:u,street:g,type:F}),pl.set(n)),!0}async function f(p){n.splice(n.findIndex(u=>u.id===p),1),pl.set(n),await m.forceRender()}function c(){t(0,r=!1),o("closeModal",{})}function d(p){m=p,t(2,m)}return l.$$set=p=>{"open"in p&&t(0,r=p.open),"Evidence"in p&&t(1,b=p.Evidence),"viewEvidence"in p&&t(5,y=p.viewEvidence)},l.$$.update=()=>{l.$$.dirty&32&&(y?t(3,h=["ID","Label","Street","Type",{name:"Action",formatter:(p,u)=>he("button",{onClick:()=>{f(u.cells[0].data)}},"Delete")}]):t(3,h=["ID","Label","Street","Type",{name:"Action",formatter:(p,u)=>he("button",{onClick:()=>{C(u.cells[0].data,u.cells[1].data,u.cells[2].data,u.cells[3].data)}},"Add")}]))},[r,b,m,h,c,y,d]}class On extends Ie{constructor(a){super(),Ae(this,a,Ci,ki,je,{open:0,Evidence:1,viewEvidence:5})}}function Hn(l,a,t){const n=l.slice();return n[21]=a[t],n}function Wn(l){let a,t,n,o,r,b,y=l[21].name+"",m,h,C,f,c;return{c(){a=s("div"),t=s("input"),r=v(),b=s("label"),m=R(y),C=v(),t.checked=!0,i(t,"type","radio"),i(t,"id",n=l[21].name),i(t,"name","box"),t.__value=o=l[21].value,t.value=t.__value,l[13][0].push(t),i(b,"for",h=l[21].name),i(a,"class","field-row")},m(d,p){W(d,a,p),e(a,t),t.checked=t.__value===l[3],e(a,r),e(a,b),e(b,m),e(a,C),f||(c=E(t,"change",l[12]),f=!0)},p(d,p){p&8&&(t.checked=t.__value===d[3])},d(d){d&&V(a),l[13][0].splice(l[13][0].indexOf(t),1),f=!1,c()}}}function Di(l){let a,t,n,o,r=l[4]("page.rsapp.rsbuttons.rsbsearch")+"",b,y,m,h,C,f=l[4]("page.rsapp.rsbuttons.rsbsearch")+"",c,d,p,u=l[4]("page.rsapp.rsbuttons.rsbreload")+"",g,F,M,D,I,B,A,z,k,j,q,ie,ne=l[10],O=[];for(let N=0;N<ne.length;N+=1)O[N]=Wn(Hn(l,ne,N));function Ce(N){l[14](N)}let De={style:l[6],pagination:{enabled:!0,limit:3},autoWidth:!0,data:l[5]||[],columns:l[7]};return l[0]!==void 0&&(De.instance=l[0]),A=new kt({props:De}),Te.push(()=>wt(A,"instance",Ce)),{c(){a=s("div"),t=s("fieldset"),n=s("div"),o=s("label"),b=R(r),y=v(),m=s("input"),h=v(),C=s("button"),c=R(f),d=v(),p=s("button"),g=R(u),F=v(),M=s("fieldset"),D=R(`Search By:\r
			`),I=s("div");for(let N=0;N<O.length;N+=1)O[N].c();B=v(),Xe(A.$$.fragment),i(o,"for","asd"),i(m,"type","text"),i(m,"name","asd"),i(m,"id","ss"),i(n,"class","text-center"),i(I,"class","field-row"),U(I,"justify-content","space-between"),i(a,"class","grid full-width full-height scroll hide-scrollbar")},m(N,K){W(N,a,K),e(a,t),e(t,n),e(n,o),e(o,b),e(n,y),e(n,m),J(m,l[2]),e(n,h),e(n,C),e(C,c),e(n,d),e(n,p),e(p,g),e(t,F),e(t,M),e(M,D),e(M,I);for(let x=0;x<O.length;x+=1)O[x].m(I,null);e(a,B),Ze(A,a,null),l[15](a),j=!0,q||(ie=[E(m,"input",l[11]),E(C,"click",In(l[8])),E(p,"click",In(l[9]))],q=!0)},p(N,[K]){if((!j||K&16)&&r!==(r=N[4]("page.rsapp.rsbuttons.rsbsearch")+"")&&T(b,r),K&4&&m.value!==N[2]&&J(m,N[2]),(!j||K&16)&&f!==(f=N[4]("page.rsapp.rsbuttons.rsbsearch")+"")&&T(c,f),(!j||K&16)&&u!==(u=N[4]("page.rsapp.rsbuttons.rsbreload")+"")&&T(g,u),K&1032){ne=N[10];let G;for(G=0;G<ne.length;G+=1){const Le=Hn(N,ne,G);O[G]?O[G].p(Le,K):(O[G]=Wn(Le),O[G].c(),O[G].m(I,null))}for(;G<O.length;G+=1)O[G].d(1);O.length=ne.length}const x={};K&32&&(x.data=N[5]||[]),!z&&K&1&&(z=!0,x.instance=N[0],_t(()=>z=!1)),A.$set(x)},i(N){j||(Y(A.$$.fragment,N),Wl(()=>{k||(k=hl(a,bl,{},!0)),k.run(1)}),j=!0)},o(N){le(A.$$.fragment,N),k||(k=hl(a,bl,{},!1)),k.run(0),j=!1},d(N){N&&V(a),Yn(O,N),xe(A),l[15](null),N&&k&&k.end(),q=!1,$e(ie)}}}function Li(l,a,t){let n,o,r,b,y,m;te(l,Kn,k=>t(4,r=k)),te(l,Vl,k=>t(5,b=k)),te(l,ei,k=>t(16,y=k)),te(l,ti,k=>t(17,m=k));let h,C;ql(()=>{h.forceRender()});const f={table:{width:"100%"},header:{display:"flex",alignItems:"center",flexDirection:"row-reverse"},footer:{width:"100%"}},c=[{id:"id",name:"ID"},{id:"title",name:"Title"},{id:"name",name:"Name"},{id:"lastname",name:"Last Name"},{id:"citizenid",name:"Citizenid"},{id:"location",name:"Location"},{id:"isvehicle",name:"Vehicle Involved"},{id:"data",name:"Data",formatter:(k,j)=>he("button",{onClick:()=>{u(j.cells[0].data,j.cells[7].data)}},"Open")},{id:"observations",name:"Observations",formatter:(k,j)=>he("button",{onClick:()=>{d(j.cells[8].data)}},"Open")},m?{id:"delete",name:"Delete Report",formatter:(k,j)=>he("button",{onClick:()=>{p(j.cells[0].data,j.cells[6].data)}},"Delete")}:{id:"delete",name:"Can't Delete"}];function d(k){let j=!0,q=new ci({target:C,props:{open:j,obs:k}});return q.$on("closeModal",()=>j=!1),q}async function p(k,j){if(!ht())try{await ke("deleteReport",{id:k,callsign:y,isvehicle:j}).then(q=>{q&&h.updateConfig({data:b}).forceRender()})}catch(q){console.log(`SearchReports ${q}`)}}function u(k,j){let q=!0;if(!ht()){let ie=new di({target:C,props:{open:q,data:j,caseID:k}});return ie.$on("closeModal1",()=>q=!1),ie}}async function g(){if(await h.updateConfig({data:b}).forceRender(),!ht())try{await ke("getReportData",{type:n,value:o}).then(async k=>{k&&await h.updateConfig({data:k}).forceRender()})}catch(k){console.log(`SearchReports ${k}`)}}function F(){h.updateConfig({data:b}).forceRender()}const M=[{name:r("page.rsapp.rsmenu.rname"),value:"name"},{name:r("page.rsapp.rsmenu.rcid"),value:"citizenid"},{name:r("page.rsapp.rsmenu.rlocation"),value:"localization"},{name:r("page.rsapp.rsmenu.rsid"),value:"id"},{name:r("page.rsapp.rsmenu.rspolice"),value:"data"}],D=[[]];function I(){o=this.value,t(2,o)}function B(){n=this.__value,t(3,n)}function A(k){h=k,t(0,h)}function z(k){Te[k?"unshift":"push"](()=>{C=k,t(1,C)})}return t(3,n=[0]),t(2,o=""),[h,C,o,n,r,b,f,c,g,F,M,I,B,D,A,z]}class yi extends Ie{constructor(a){super(),Ae(this,a,Li,Di,je,{})}}function Vn(l){let a,t,n,o,r,b,y,m,h,C,f,c,d;function p(g){l[7](g)}let u={data:l[1]?l[3]:l[4],sort:!0,columns:l[6],search:!0,resizable:!0,pagination:{enabled:!0,limit:5}};return l[2]!==void 0&&(u.instance=l[2]),h=new kt({props:u}),Te.push(()=>wt(h,"instance",p)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="Fines Window",o=v(),r=s("div"),b=s("button"),y=v(),m=s("div"),Xe(h.$$.fragment),i(n,"class","title-bar-text"),i(b,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(m,"class","window-body"),i(a,"class","window absolute-center "),U(a,"max-width","200vh"),U(a,"width","100vh"),U(a,"max-height","70vh")},m(g,F){W(g,a,F),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(a,y),e(a,m),Ze(h,m,null),f=!0,c||(d=E(b,"click",l[5]),c=!0)},p(g,F){const M={};F&26&&(M.data=g[1]?g[3]:g[4]),!C&&F&4&&(C=!0,M.instance=g[2],_t(()=>C=!1)),h.$set(M)},i(g){f||(Y(h.$$.fragment,g),f=!0)},o(g){le(h.$$.fragment,g),f=!1},d(g){g&&V(a),xe(h),c=!1,d()}}}function Ri(l){let a,t,n=l[0]&&Vn(l);return{c(){n&&n.c(),a=vt()},m(o,r){n&&n.m(o,r),W(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&Y(n,1)):(n=Vn(o),n.c(),Y(n,1),n.m(a.parentNode,a)):n&&(_l(),le(n,1,1,()=>{n=null}),vl())},i(o){t||(Y(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&V(a)}}}function Ni(l,a,t){let n,o;te(l,ml,d=>t(3,n=d)),te(l,li,d=>t(4,o=d));let r;const b=gt();function y(){t(0,m=!1),b("closeModal",{})}let{open:m=!1}=a,{show:h=!0}=a;const C=["ID","Label",{name:"Amount"},"Jailtime",h?{name:"Delete",formatter:(d,p)=>he("button",{onClick:()=>{f("delete",p.cells[0].data)}},"Delete")}:{name:"Add",formatter:(d,p)=>he("button",{onClick:()=>{f("add",p.cells[0].data)}},"Add")}];function f(d,p){d==="add"?n.some(u=>u.id===p)||(n.push(o[p-1]),ml.set(n)):d==="delete"&&(n.splice(n.findIndex(u=>u.id===p),1),ml.set(n),r.forceRender())}function c(d){r=d,t(2,r)}return l.$$set=d=>{"open"in d&&t(0,m=d.open),"show"in d&&t(1,h=d.show)},[m,h,r,n,o,y,C,c]}class Si extends Ie{constructor(a){super(),Ae(this,a,Ni,Ri,je,{open:0,show:1})}}function qn(l,a,t){const n=l.slice();return n[41]=a[t],n}function Gn(l){let a,t,n,o,r,b,y;return{c(){a=s("div"),t=s("span"),n=s("label"),n.textContent="Plate:",o=v(),r=s("input"),i(n,"class","nameField svelte-1vht49a"),i(n,"for","Plate"),i(r,"class","inputField svelte-1vht49a"),i(r,"type","text"),i(r,"name","Plate"),i(r,"id","Local"),i(a,"class","field-row ")},m(m,h){W(m,a,h),e(a,t),e(t,n),e(t,o),e(t,r),J(r,l[1].plate),b||(y=E(r,"input",l[30]),b=!0)},p(m,h){h[0]&66&&r.value!==m[1].plate&&J(r,m[1].plate)},d(m){m&&V(a),b=!1,y()}}}function Jn(l){let a,t=l[41].text+"",n,o;return{c(){a=s("option"),n=R(t),a.__value=o=l[41].id,a.value=a.__value},m(r,b){W(r,a,b),e(a,n)},p:Hl,d(r){r&&V(a)}}}function Mi(l){let a,t,n,o,r=l[5]("page.report.title")+"",b,y,m,h,C,f,c,d=l[5]("page.report.menu.add")+"",p,u,g,F,M,D=l[5]("page.report.menu.addmenu.close")+"",I,B,A,z,k=l[5]("page.report.menu.addmenu.street")+"",j,q,ie,ne,O=l[5]("page.report.menu.addmenu.police")+"",Ce,De,N,K,x=l[5]("page.report.menu.addmenu.evidence")+"",G,Le,Ue,Be,Oe=l[5]("page.report.menu.addmenu.fine")+"",et,Ct,He,w,S,H=l[5]("page.report.menu.search")+"",ce,de,fe,ye,Re,Dt=l[5]("page.report.menu.searchmenu.name")+"",gl,Gl,Lt,yt,Jl,be,Rt=l[5]("page.report.menu.view")+"",wl,Yl,_e,Nt,St,Mt=l[5]("page.report.menu.viewmenu.vpolice")+"",kl,Kl,Et,Pt,zt=l[5]("page.report.menu.viewmenu.vevidence")+"",Cl,Ql,Ft,It,At=l[5]("page.report.menu.viewmenu.vfines")+"",Dl,Xl,Ne,Zl,We,jt,xl,Tt,Ut,$l,tt,pe,Se,Ve,Bt=l[5]("page.report.rcreate")+"",Ll,en,lt,Ot=l[5]("page.report.rsearch")+"",yl,tn,nt,qe,Me,Ge,Rl,Ht=l[5]("page.report.rbody.rinfo")+"",Nl,ln,Z,Wt,it,at,Vt=l[5]("page.report.rbody.rtitle")+"",Sl,nn,ue,an,qt,st,ot,Gt=l[5]("page.report.rbody.rname")+"",Ml,sn,ae,on,Jt,rt,ut,Yt=l[5]("page.report.rbody.rlname")+"",El,rn,se,un,Kt,ct,dt,Qt=l[5]("page.report.rbody.rcid")+"",Pl,cn,oe,dn,Xt,ft,pt,Zt=l[5]("page.report.rbody.rlocation")+"",zl,fn,re,pn,mn,Ee,xt,$t=l[5]("page.report.rbody.robs")+"",Fl,hn,el,tl,Q,bn,ll,me,ve,_n,Pe,vn,nl,gn,ze,Il,il=l[5]("page.report.rbuttons.rcancel")+"",Al,wn,Je,al=l[5]("page.report.rbuttons.radd")+"",jl,sl,kn,Fe,ol,Ye,Cn,ge,mt,Dn,rl=l[1].id+"",Tl,Ln,ul,yn,Ke,Rn,cl=l[2].toFixed(0)+"",Ul,Nn,we,Bl,dl,P,Ol,Sn,$=l[1].isvehicle&&Gn(l),Qe=l[6],ee=[];for(let _=0;_<Qe.length;_+=1)ee[_]=Jn(qn(l,Qe,_));return Ye=new yi({}),{c(){a=s("div"),t=s("div"),n=s("div"),o=s("div"),b=R(r),y=v(),m=s("div"),h=s("button"),C=v(),f=s("ul"),c=s("li"),p=R(d),u=v(),g=s("ul"),F=s("li"),M=s("a"),I=R(D),B=v(),A=s("li"),z=s("a"),j=R(k),q=v(),ie=s("li"),ne=s("a"),Ce=R(O),De=v(),N=s("li"),K=s("a"),G=R(x),Le=v(),Ue=s("li"),Be=s("a"),et=R(Oe),Ct=v(),He=s("li"),He.innerHTML="<a>Add Images</a>",w=v(),S=s("li"),ce=R(H),de=v(),fe=s("ul"),ye=s("li"),Re=s("a"),gl=R(Dt),Gl=v(),Lt=s("li"),yt=s("a"),yt.textContent="By Vehicle Plate",Jl=v(),be=s("li"),wl=R(Rt),Yl=v(),_e=s("ul"),Nt=s("li"),St=s("a"),kl=R(Mt),Kl=v(),Et=s("li"),Pt=s("a"),Cl=R(zt),Ql=v(),Ft=s("li"),It=s("a"),Dl=R(At),Xl=v(),Ne=s("li"),Zl=R(`Help\r
				`),We=s("ul"),jt=s("li"),jt.innerHTML="<a>View Help</a>",xl=v(),Tt=s("li"),Ut=s("a"),Ut.textContent="About",$l=v(),tt=s("div"),pe=s("section"),Se=s("menu"),Ve=s("button"),Ll=R(Bt),en=v(),lt=s("button"),yl=R(Ot),tn=v(),nt=s("article"),qe=s("div"),Me=s("fieldset"),Ge=s("fieldset"),Rl=s("legend"),Nl=R(Ht),ln=v(),Z=s("div"),Wt=s("div"),it=s("span"),at=s("label"),Sl=R(Vt),nn=v(),ue=s("input"),an=v(),qt=s("div"),st=s("span"),ot=s("label"),Ml=R(Gt),sn=v(),ae=s("input"),on=v(),Jt=s("div"),rt=s("span"),ut=s("label"),El=R(Yt),rn=v(),se=s("input"),un=v(),Kt=s("div"),ct=s("span"),dt=s("label"),Pl=R(Qt),cn=v(),oe=s("input"),dn=v(),Xt=s("div"),ft=s("span"),pt=s("label"),zl=R(Zt),fn=v(),re=s("input"),pn=v(),$&&$.c(),mn=v(),Ee=s("fieldset"),xt=s("legend"),Fl=R($t),hn=v(),el=s("div"),tl=s("div"),Q=s("textarea"),bn=v(),ll=s("fieldset"),me=s("div"),ve=s("select");for(let _=0;_<ee.length;_+=1)ee[_].c();_n=v(),Pe=s("input"),vn=v(),nl=s("label"),nl.textContent="Is Vehicle",gn=v(),ze=s("section"),Il=s("button"),Al=R(il),wn=v(),Je=s("button"),jl=R(al),kn=v(),Fe=s("article"),ol=s("div"),Xe(Ye.$$.fragment),Cn=v(),ge=s("div"),mt=s("p"),Dn=R("Report ID: "),Tl=R(rl),Ln=v(),ul=s("p"),ul.textContent="Report Tool",yn=v(),Ke=s("p"),Rn=R("CPU Usage: "),Ul=R(cl),Nn=R("%"),Bl=v(),dl=s("div"),i(o,"class","title-bar-text"),i(h,"aria-label","Close"),i(m,"class","title-bar-controls"),i(n,"class","title-bar"),i(F,"role","menuitem"),i(F,"class","has-divider"),i(A,"role","menuitem"),i(ie,"role","menuitem"),i(N,"role","menuitem"),i(Ue,"role","menuitem"),i(He,"role","menuitem"),i(g,"role","menu"),i(c,"role","menuitem"),i(c,"tabindex","0"),i(c,"aria-haspopup","true"),i(ye,"role","menuitem"),i(Lt,"role","menuitem"),i(fe,"role","menu"),i(S,"role","menuitem"),i(S,"tabindex","0"),i(S,"aria-haspopup","true"),i(Nt,"role","menuitem"),i(Et,"role","menuitem"),i(Ft,"role","menuitem"),i(_e,"role","menu"),i(be,"role","menuitem"),i(be,"tabindex","0"),i(be,"aria-haspopup","true"),i(jt,"role","menuitem"),i(Tt,"role","menuitem"),i(We,"role","menu"),i(Ne,"role","menuitem"),i(Ne,"tabindex","0"),i(Ne,"aria-haspopup","true"),i(f,"role","menubar"),i(f,"class","can-hover"),i(Ve,"role","tab"),i(Ve,"aria-selected","true"),i(Ve,"aria-controls","reports-tab"),i(lt,"role","tab"),i(lt,"aria-controls","search-reports-tab"),i(Se,"role","tablist"),i(Se,"aria-label","Tabsitos"),i(at,"class","nameField svelte-1vht49a"),i(at,"for","User"),i(ue,"type","text"),i(ue,"class","inputField svelte-1vht49a"),i(ue,"name","Something"),i(ue,"id","Title"),i(Wt,"class","field-row"),i(ot,"class","nameField svelte-1vht49a"),i(ot,"for","User"),ae.disabled=l[3],i(ae,"type","text"),i(ae,"class","inputField svelte-1vht49a"),i(ae,"name","Something"),i(ae,"id","User"),i(qt,"class","field-row"),i(ut,"class","nameField svelte-1vht49a"),i(ut,"for","LName"),se.disabled=l[3],i(se,"class","inputField svelte-1vht49a"),i(se,"type","text"),i(se,"name","LName"),i(se,"id","LName"),i(Jt,"class","field-row "),i(dt,"class","nameField svelte-1vht49a"),i(dt,"for","CID"),oe.disabled=l[3],i(oe,"class","inputField svelte-1vht49a"),i(oe,"type","text"),i(oe,"name","CID"),i(oe,"id","CID"),i(Kt,"class","field-row "),i(pt,"class","nameField svelte-1vht49a"),i(pt,"for","Local"),re.disabled=l[4],i(re,"class","inputField svelte-1vht49a"),i(re,"type","text"),i(re,"name","Local"),i(re,"id","Local"),i(Xt,"class","field-row "),i(Z,"class","infoUser"),i(Ge,"class","float-left"),i(xt,"class","text-center"),i(Q,"name","Observations"),i(Q,"class","text-h6"),i(Q,"id","jere"),i(Q,"cols","8"),i(Q,"rows","8"),U(Q,"width","32.760416666666664vw"),U(Q,"height","24.24557752341311vh"),U(Q,"max-width","32.760416666666664vw"),U(Q,"min-width","15.625vw"),U(Q,"max-height","24.24557752341311vh"),U(Q,"min-height","24.24557752341311vh"),i(tl,"class","field-row-stacked"),i(el,"class","infoUser"),i(Ee,"class","float-left q-ml-md"),U(Ee,"max-width","629px",!1),l[1].type===void 0&&Wl(()=>l[32].call(ve)),i(Pe,"type","checkbox"),i(Pe,"id","example2"),i(nl,"for","example2"),i(me,"class","field-row"),U(me,"justify-content","space-between"),i(ll,"class","float-left full-width"),Je.disabled=sl=l[1].title.length<3,i(ze,"class","field-row"),U(ze,"justify-content","space-around"),i(qe,"class","jerico relative-position full-width"),i(nt,"role","tabpanel"),i(nt,"id","reports-tab"),i(ol,"class","jerico relative-position full-width"),i(Fe,"role","tabpanel"),i(Fe,"id","search-reports-tab"),U(Fe,"display","none"),i(Fe,"class","svelte-1vht49a"),i(pe,"class","tabs relative-position full-width"),U(pe,"max-width","200vh"),i(tt,"class","window-body "),U(tt,"height","47vh"),i(mt,"class","status-bar-field"),i(ul,"class","status-bar-field"),i(Ke,"class","status-bar-field"),i(ge,"class","status-bar"),i(t,"class","window"),U(t,"max-width","200vh"),U(t,"width","102vh"),i(a,"class","absolute-center")},m(_,L){W(_,a,L),e(a,t),e(t,n),e(n,o),e(o,b),e(n,y),e(n,m),e(m,h),e(t,C),e(t,f),e(f,c),e(c,p),e(c,u),e(c,g),e(g,F),e(F,M),e(M,I),e(g,B),e(g,A),e(A,z),e(z,j),e(g,q),e(g,ie),e(ie,ne),e(ne,Ce),e(g,De),e(g,N),e(N,K),e(K,G),e(g,Le),e(g,Ue),e(Ue,Be),e(Be,et),e(g,Ct),e(g,He),e(f,w),e(f,S),e(S,ce),e(S,de),e(S,fe),e(fe,ye),e(ye,Re),e(Re,gl),e(fe,Gl),e(fe,Lt),e(Lt,yt),e(f,Jl),e(f,be),e(be,wl),e(be,Yl),e(be,_e),e(_e,Nt),e(Nt,St),e(St,kl),e(_e,Kl),e(_e,Et),e(Et,Pt),e(Pt,Cl),e(_e,Ql),e(_e,Ft),e(Ft,It),e(It,Dl),e(f,Xl),e(f,Ne),e(Ne,Zl),e(Ne,We),e(We,jt),e(We,xl),e(We,Tt),e(Tt,Ut),e(t,$l),e(t,tt),e(tt,pe),e(pe,Se),e(Se,Ve),e(Ve,Ll),e(Se,en),e(Se,lt),e(lt,yl),e(pe,tn),e(pe,nt),e(nt,qe),e(qe,Me),e(Me,Ge),e(Ge,Rl),e(Rl,Nl),e(Ge,ln),e(Ge,Z),e(Z,Wt),e(Wt,it),e(it,at),e(at,Sl),e(it,nn),e(it,ue),J(ue,l[1].title),e(Z,an),e(Z,qt),e(qt,st),e(st,ot),e(ot,Ml),e(st,sn),e(st,ae),J(ae,l[1].name),e(Z,on),e(Z,Jt),e(Jt,rt),e(rt,ut),e(ut,El),e(rt,rn),e(rt,se),J(se,l[1].lastname),e(Z,un),e(Z,Kt),e(Kt,ct),e(ct,dt),e(dt,Pl),e(ct,cn),e(ct,oe),J(oe,l[1].citizenid),e(Z,dn),e(Z,Xt),e(Xt,ft),e(ft,pt),e(pt,zl),e(ft,fn),e(ft,re),J(re,l[1].location),e(Z,pn),$&&$.m(Z,null),e(Me,mn),e(Me,Ee),e(Ee,xt),e(xt,Fl),e(Ee,hn),e(Ee,el),e(el,tl),e(tl,Q),J(Q,l[1].observations),e(Me,bn),e(Me,ll),e(ll,me),e(me,ve);for(let X=0;X<ee.length;X+=1)ee[X].m(ve,null);An(ve,l[1].type),e(me,_n),e(me,Pe),Pe.checked=l[1].isvehicle,e(me,vn),e(me,nl),e(qe,gn),e(qe,ze),e(ze,Il),e(Il,Al),e(ze,wn),e(ze,Je),e(Je,jl),e(pe,kn),e(pe,Fe),e(Fe,ol),Ze(Ye,ol,null),e(t,Cn),e(t,ge),e(ge,mt),e(mt,Dn),e(mt,Tl),e(ge,Ln),e(ge,ul),e(ge,yn),e(ge,Ke),e(Ke,Rn),e(Ke,Ul),e(Ke,Nn),W(_,Bl,L),W(_,dl,L),l[34](dl),P=!0,Ol||(Sn=[E(h,"click",l[18]),E(M,"click",l[15]),E(z,"click",l[11]),E(ne,"click",l[9]),E(K,"click",l[19]),E(Be,"click",l[20]),E(Re,"click",l[21]),E(yt,"click",l[22]),E(St,"click",l[12]),E(Pt,"click",l[23]),E(It,"click",l[24]),E(Ut,"click",l[7]),E(ue,"input",l[25]),E(ae,"input",l[26]),E(se,"input",l[27]),E(oe,"input",l[28]),E(re,"input",l[29]),E(Q,"input",l[31]),E(ve,"change",l[32]),E(Pe,"change",l[33]),E(Je,"click",l[13])],Ol=!0)},p(_,L){if((!P||L[0]&32)&&r!==(r=_[5]("page.report.title")+"")&&T(b,r),(!P||L[0]&32)&&d!==(d=_[5]("page.report.menu.add")+"")&&T(p,d),(!P||L[0]&32)&&D!==(D=_[5]("page.report.menu.addmenu.close")+"")&&T(I,D),(!P||L[0]&32)&&k!==(k=_[5]("page.report.menu.addmenu.street")+"")&&T(j,k),(!P||L[0]&32)&&O!==(O=_[5]("page.report.menu.addmenu.police")+"")&&T(Ce,O),(!P||L[0]&32)&&x!==(x=_[5]("page.report.menu.addmenu.evidence")+"")&&T(G,x),(!P||L[0]&32)&&Oe!==(Oe=_[5]("page.report.menu.addmenu.fine")+"")&&T(et,Oe),(!P||L[0]&32)&&H!==(H=_[5]("page.report.menu.search")+"")&&T(ce,H),(!P||L[0]&32)&&Dt!==(Dt=_[5]("page.report.menu.searchmenu.name")+"")&&T(gl,Dt),(!P||L[0]&32)&&Rt!==(Rt=_[5]("page.report.menu.view")+"")&&T(wl,Rt),(!P||L[0]&32)&&Mt!==(Mt=_[5]("page.report.menu.viewmenu.vpolice")+"")&&T(kl,Mt),(!P||L[0]&32)&&zt!==(zt=_[5]("page.report.menu.viewmenu.vevidence")+"")&&T(Cl,zt),(!P||L[0]&32)&&At!==(At=_[5]("page.report.menu.viewmenu.vfines")+"")&&T(Dl,At),(!P||L[0]&32)&&Bt!==(Bt=_[5]("page.report.rcreate")+"")&&T(Ll,Bt),(!P||L[0]&32)&&Ot!==(Ot=_[5]("page.report.rsearch")+"")&&T(yl,Ot),(!P||L[0]&32)&&Ht!==(Ht=_[5]("page.report.rbody.rinfo")+"")&&T(Nl,Ht),(!P||L[0]&32)&&Vt!==(Vt=_[5]("page.report.rbody.rtitle")+"")&&T(Sl,Vt),L[0]&66&&ue.value!==_[1].title&&J(ue,_[1].title),(!P||L[0]&32)&&Gt!==(Gt=_[5]("page.report.rbody.rname")+"")&&T(Ml,Gt),(!P||L[0]&8)&&(ae.disabled=_[3]),L[0]&66&&ae.value!==_[1].name&&J(ae,_[1].name),(!P||L[0]&32)&&Yt!==(Yt=_[5]("page.report.rbody.rlname")+"")&&T(El,Yt),(!P||L[0]&8)&&(se.disabled=_[3]),L[0]&66&&se.value!==_[1].lastname&&J(se,_[1].lastname),(!P||L[0]&32)&&Qt!==(Qt=_[5]("page.report.rbody.rcid")+"")&&T(Pl,Qt),(!P||L[0]&8)&&(oe.disabled=_[3]),L[0]&66&&oe.value!==_[1].citizenid&&J(oe,_[1].citizenid),(!P||L[0]&32)&&Zt!==(Zt=_[5]("page.report.rbody.rlocation")+"")&&T(zl,Zt),(!P||L[0]&16)&&(re.disabled=_[4]),L[0]&66&&re.value!==_[1].location&&J(re,_[1].location),_[1].isvehicle?$?$.p(_,L):($=Gn(_),$.c(),$.m(Z,null)):$&&($.d(1),$=null),(!P||L[0]&32)&&$t!==($t=_[5]("page.report.rbody.robs")+"")&&T(Fl,$t),L[0]&66&&J(Q,_[1].observations),L[0]&64){Qe=_[6];let X;for(X=0;X<Qe.length;X+=1){const Mn=qn(_,Qe,X);ee[X]?ee[X].p(Mn,L):(ee[X]=Jn(Mn),ee[X].c(),ee[X].m(ve,null))}for(;X<ee.length;X+=1)ee[X].d(1);ee.length=Qe.length}L[0]&66&&An(ve,_[1].type),L[0]&66&&(Pe.checked=_[1].isvehicle),(!P||L[0]&32)&&il!==(il=_[5]("page.report.rbuttons.rcancel")+"")&&T(Al,il),(!P||L[0]&32)&&al!==(al=_[5]("page.report.rbuttons.radd")+"")&&T(jl,al),(!P||L[0]&66&&sl!==(sl=_[1].title.length<3))&&(Je.disabled=sl),(!P||L[0]&2)&&rl!==(rl=_[1].id+"")&&T(Tl,rl),(!P||L[0]&4)&&cl!==(cl=_[2].toFixed(0)+"")&&T(Ul,cl)},i(_){P||(Y(Ye.$$.fragment,_),Wl(()=>{we||(we=hl(a,bl,{duration:100},!0)),we.run(1)}),P=!0)},o(_){le(Ye.$$.fragment,_),we||(we=hl(a,bl,{duration:100},!1)),we.run(0),P=!1},d(_){_&&V(a),$&&$.d(),Yn(ee,_),xe(Ye),_&&we&&we.end(),_&&V(Bl),_&&V(dl),l[34](null),Ol=!1,$e(Sn)}}}function Ei(l,a,t){let n,o,r,b,y,m,h,C;te(l,Kn,w=>t(5,b=w)),te(l,Vl,w=>t(37,y=w)),te(l,pl,w=>t(38,m=w)),te(l,ml,w=>t(17,h=w)),te(l,bt,w=>t(39,C=w));let{params:f={name:null,lastname:"",citizenid:"",plate:"",title:null,isvehicle:!1,observations:""}}=a,c,d=new oi({length:5});ql(()=>{ni()});const p=[{id:"bolo",text:"Bolo"},{id:"warrant",text:"Warrant"},{id:"basic",text:"Basic"},{id:"report",text:"Report"}];let u={id:d(),name:"",lastname:"",rank:"",citizenid:"",location:"",coords:"",plate:"",bolo:!1,observations:"No observations",title:"",type:p[3].id,amount:0,isvehicle:!1,data:{evidences:[],polices:[],fines:[]},reset:()=>{this.name="",this.lastname="",this.rank="",this.citizenid="",this.location="",this.coords="",this.observations="No observations",this.title="",this.type=p[2].id,this.amount=0,this.data={evidences:[],polices:[],fines:[]},this.isvehicle=!1,this.plate=""}};u.data.evidences=m,u.data.polices=C,u.data.fines=h;let g=0;setInterval(()=>{t(2,g=Math.random()*100)},5e3);function F(){let w=!0,S=new ri({target:c,props:{open:w}});return S.$on("closeAbout",()=>w=!1),S}function M(w){let S=!0,H=new _i({target:c,props:{open:S,type:w}});return H.$on("closeSearch",ce=>{var fe,ye,Re;const de=ce.detail;t(1,u.citizenid=((fe=de[0])==null?void 0:fe.citizenid)||de.citizenid,u),t(1,u.name=((ye=de[0])==null?void 0:ye.Name)||de.Name,u),t(1,u.lastname=((Re=de[0])==null?void 0:Re.LastName)||de.LastName,u),t(3,o=!0)}),H.$on("closeModal",ce=>S=!1),H}async function D(){let w=!0;try{await ke("getAllPolices").then(S=>{new wi({target:c,props:{open:w,polices:S}}).$on("closeAbout",()=>w=!1)})}catch(S){console.log(`Report ${S}`)}}async function I(w){let S=!0;if(ht())new On({target:c,props:{open:S,Evidence:m,viewEvidence:w}}).$on("closeAbout",()=>S=!1);else try{await ke("getEvidence").then(H=>{H&&new On({target:c,props:{open:S,Evidence:w===!0?m:H,viewEvidence:w}}).$on("closeAbout",()=>S=!1)})}catch(H){console.log(`Report 160 ${H}`)}}async function B(){await ke("getCurrentLocation").then(w=>t(1,u.location=w,u)),t(4,r=!0)}function A(){let w=!0,S=new mi({target:c,props:{open:w}});return S.$on("closeAbout",()=>w=!1),S}async function z(){let w=!0;if(t(1,u.amount=n,u),u.isvehicle&&u.plate.length<4){new fl({target:c,props:{open:w,message:b("please-fill-the-plate")}}).$on("closeModal",()=>w=!1);return}else if(ht()){let S=new fl({target:c,props:{open:w,message:b("report-created",{values:{0:u.id}})}});t(1,u.id=d(),u),S.$on("closeModal",()=>w=!1)}else try{t(1,u.bolo=u.isvehicle,u),await ke("sendNewReport",{report:u}).then(S=>{if(S){let H=new fl({target:c,props:{open:w,message:b("report-created",{values:{0:u.id}})}});y.some(ce=>ce.id===u.id)||(y.push(u),Vl.set(y)),t(1,u.id=d(),u),u.reset(),H.$on("closeModal",()=>w=!1)}else new fl({target:c,props:{open:w,message:b("error-creating-the-report")}}).$on("closeModal",()=>w=!1)})}catch{}}function k(w){let S=!0;new Si({target:c,props:{open:S,show:w}}).$on("closeModal",()=>S=!1)}async function j(){try{await ke("getClosestPlayerData",{}).then(w=>{w?(t(1,u.name=w.name,u),t(1,u.citizenid=w.citizenid,u),t(1,u.lastname=w.lastname,u),t(3,o=!0)):ii("NO PLAYER DETECTED")})}catch(w){console.log(w)}}const q=()=>ai("/"),ie=()=>I(!1),ne=()=>k(!1),O=()=>M("name"),Ce=()=>M("plate"),De=()=>I(!0),N=()=>k(!0);function K(){u.title=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function x(){u.name=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function G(){u.lastname=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function Le(){u.citizenid=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function Ue(){u.location=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function Be(){u.plate=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function Oe(){u.observations=this.value,t(1,u),t(16,f),t(40,d),t(6,p)}function et(){u.type=si(this),t(1,u),t(16,f),t(40,d),t(6,p)}function Ct(){u.isvehicle=this.checked,t(1,u),t(16,f),t(40,d),t(6,p)}function He(w){Te[w?"unshift":"push"](()=>{c=w,t(0,c)})}return l.$$set=w=>{"params"in w&&t(16,f=w.params)},l.$$.update=()=>{l.$$.dirty[0]&65536&&f.title!==null&&t(1,u=Fn(zn({},f),{id:d(),location:"",type:p[0].id,bolo:!0,amount:0,data:{evidences:[],polices:[],fines:[]},rank:"",coords:"",reset:()=>{this.name="",this.lastname="",this.rank="",this.citizenid="",this.location="",this.coords="",this.observations="No observations",this.title="",this.type=p[2].id,this.amount=0,this.data={evidences:[],polices:[],fines:[]},this.isvehicle=!1,this.plate=""}})),l.$$.dirty[0]&131072&&(n=h.reduce((w,{amount:S})=>w+S,0))},t(3,o=!1),t(4,r=!1),[c,u,g,o,r,b,p,F,M,D,I,B,A,z,k,j,f,h,q,ie,ne,O,Ce,De,N,K,x,G,Le,Ue,Be,Oe,et,Ct,He]}class ji extends Ie{constructor(a){super(),Ae(this,a,Ei,Mi,je,{params:16},null,[-1,-1])}}export{ji as default};
