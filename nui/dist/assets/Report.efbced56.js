var Zn=Object.defineProperty,xn=Object.defineProperties;var $n=Object.getOwnPropertyDescriptors;var Pn=Object.getOwnPropertySymbols;var ei=Object.prototype.hasOwnProperty,ti=Object.prototype.propertyIsEnumerable;var An=(l,a,t)=>a in l?Zn(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,zn=(l,a)=>{for(var t in a||(a={}))ei.call(a,t)&&An(l,t,a[t]);if(Pn)for(var t of Pn(a))ti.call(a,t)&&An(l,t,a[t]);return l},Fn=(l,a)=>xn(l,$n(a));import{S as ze,i as Fe,s as Te,e as s,a as v,c as et,b as i,d as U,f as V,g as e,m as tt,l as N,h as kt,t as J,j as le,k as W,n as lt,r as nt,o as Ct,p as gl,q as wl,u as te,P as $e,v as Dt,w as je,x as Lt,y as E,z as G,A as j,B as Wl,C as ke,D as kl,E as wt,F as Jl,G as Ze,H as Tn,I as ql,J as _l,K as vl,L as Qn,Y as Xn,R as Gl,M as li,N as ni,O as gt,Q as xe,T as ii,U as jn,V as ai,W as si,X as oi,Z as ri}from"./index.fda6368c.js";import{G as yt,y as he,S as ui}from"./short-unique-id.856da91a.js";import ci from"./About.3f50a9d2.js";import{U as di,O as fi,S as pi,A as bl}from"./ObservationsModal.fd1e975f.js";function Un(l){let a,t,n,o,r,b,L,p,h,k,f,c,d,m,u,g;function A(C){l[5](C)}let I={data:l[2]||[],columns:l[3],height:"30vh",fixedHeader:!0};return l[1]!==void 0&&(I.instance=l[1]),h=new yt({props:I}),je.push(()=>Lt(h,"instance",A)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="$_('polices-added')",o=v(),r=s("div"),b=s("button"),L=v(),p=s("div"),et(h.$$.fragment),f=v(),c=s("section"),d=s("button"),d.textContent="Close",i(n,"class","title-bar-text"),i(b,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(c,"class","field-row"),U(c,"justify-content","flex-end"),i(p,"class","window-body"),i(a,"class","window absolute-center"),U(a,"max-width","100vh")},m(C,T){V(C,a,T),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(a,L),e(a,p),tt(h,p,null),e(p,f),e(p,c),e(c,d),m=!0,u||(g=[N(b,"click",l[4]),N(d,"click",l[4])],u=!0)},p(C,T){const B={};T&4&&(B.data=C[2]||[]),!k&&T&2&&(k=!0,B.instance=C[1],kt(()=>k=!1)),h.$set(B)},i(C){m||(J(h.$$.fragment,C),m=!0)},o(C){le(h.$$.fragment,C),m=!1},d(C){C&&W(a),lt(h),u=!1,nt(g)}}}function mi(l){let a,t,n=l[0]&&Un(l);return{c(){n&&n.c(),a=Ct()},m(o,r){n&&n.m(o,r),V(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&J(n,1)):(n=Un(o),n.c(),J(n,1),n.m(a.parentNode,a)):n&&(gl(),le(n,1,1,()=>{n=null}),wl())},i(o){t||(J(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&W(a)}}}function hi(l,a,t){let n;te(l,$e,f=>t(2,n=f));let{open:o=!1}=a;const r=Dt();let b;const L=["ID","Name","Last Name","Rank",{name:"Action",formatter:(f,c)=>he("button",{onClick:()=>{p(c.cells[0].data)}},"Delete")}];async function p(f){n.splice(n.findIndex(c=>c.id===f),1),$e.set(n);try{await b.forceRender()}catch(c){console.log(`PoliceList ${c}`)}}function h(){t(0,o=!1),r("closeModal",{})}function k(f){b=f,t(1,b)}return l.$$set=f=>{"open"in f&&t(0,o=f.open)},[o,b,n,L,h,k]}class bi extends ze{constructor(a){super(),Fe(this,a,hi,mi,Te,{open:0})}}function Bn(l){let a,t,n,o,r,b,L,p,h,k,f,c,d,m,u,g,A,I,C,T,B;return{c(){a=s("div"),t=s("div"),n=s("div"),o=s("div"),r=E("Search by "),b=E(l[1]),L=v(),p=s("div"),h=s("button"),k=v(),f=s("div"),c=s("label"),d=s("input"),m=v(),u=s("button"),g=E("Search"),I=v(),C=s("div"),i(o,"class","title-bar-text"),i(h,"aria-label","Close"),i(p,"class","title-bar-controls"),i(n,"class","title-bar"),i(d,"type","text"),i(d,"name","Search"),i(d,"id","Search"),i(c,"for","Search"),i(c,"label","Search"),u.disabled=A=l[2].length<3,i(f,"class","window-body"),i(t,"class","window"),U(t,"max-width","100vh"),i(a,"class","absolute-center"),i(C,"id","id")},m(z,P){V(z,a,P),e(a,t),e(t,n),e(n,o),e(o,r),e(o,b),e(n,L),e(n,p),e(p,h),e(t,k),e(t,f),e(f,c),e(c,d),G(d,l[2]),e(f,m),e(f,u),e(u,g),V(z,I,P),V(z,C,P),T||(B=[N(h,"click",l[3]),N(d,"input",l[5]),N(u,"click",l[6])],T=!0)},p(z,P){P&2&&j(b,z[1]),P&4&&d.value!==z[2]&&G(d,z[2]),P&4&&A!==(A=z[2].length<3)&&(u.disabled=A)},d(z){z&&W(a),z&&W(I),z&&W(C),T=!1,nt(B)}}}function _i(l){let a,t=l[0]&&Bn(l);return{c(){t&&t.c(),a=Ct()},m(n,o){t&&t.m(n,o),V(n,a,o)},p(n,[o]){n[0]?t?t.p(n,o):(t=Bn(n),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:Wl,o:Wl,d(n){t&&t.d(n),n&&W(a)}}}function vi(l,a,t){let n,{open:o=!1}=a,{type:r=""}=a;const b=Dt(),L=()=>{t(0,o=!1),b("closeModal",!1)};async function p(){let f=!0;try{await ke("searchPlayer",{name:n,app:"report",type:r}).then(c=>{if(c){let d=new di({target:document.getElementById("id"),props:{open:f,data:c}});return d.$on("sendData",m=>{const u=m.detail,g={Name:String,LastName:String,citizenid:String};g.Name=u.Name,g.LastName=u.LastName,g.citizenid=u.citizenid,b("closeSearch",g),b("closeModal",!1)}),f=!1,d}})}catch(c){console.log(`Search ${c}`)}}function h(){n=this.value,t(2,n)}const k=()=>p();return l.$$set=f=>{"open"in f&&t(0,o=f.open),"type"in f&&t(1,r=f.type)},t(2,n=""),[o,r,n,L,p,h,k]}class gi extends ze{constructor(a){super(),Fe(this,a,vi,_i,Te,{open:0,type:1})}}function On(l){let a,t,n,o,r,b,L,p,h,k,f,c,d,m,u,g;function A(C){l[5](C)}let I={data:l[1],height:"30vh",columns:l[3],autoWidth:!0,fixedHeader:!0};return l[2]!==void 0&&(I.instance=l[2]),h=new yt({props:I}),je.push(()=>Lt(h,"instance",A)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="Police Window",o=v(),r=s("div"),b=s("button"),L=v(),p=s("div"),et(h.$$.fragment),f=v(),c=s("section"),d=s("button"),d.textContent="Close",i(n,"class","title-bar-text"),i(b,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(c,"class","field-row"),U(c,"justify-content","space-around"),i(p,"class","window-body"),i(a,"class","window absolute-center "),U(a,"max-width","200vh"),U(a,"width","100vh"),U(a,"max-height","70vh")},m(C,T){V(C,a,T),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(a,L),e(a,p),tt(h,p,null),e(p,f),e(p,c),e(c,d),m=!0,u||(g=[N(b,"click",l[4]),N(d,"click",l[4])],u=!0)},p(C,T){const B={};T&2&&(B.data=C[1]),!k&&T&4&&(k=!0,B.instance=C[2],kt(()=>k=!1)),h.$set(B)},i(C){m||(J(h.$$.fragment,C),m=!0)},o(C){le(h.$$.fragment,C),m=!1},d(C){C&&W(a),lt(h),u=!1,nt(g)}}}function wi(l){let a,t,n=l[0]&&On(l);return{c(){n&&n.c(),a=Ct()},m(o,r){n&&n.m(o,r),V(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&J(n,1)):(n=On(o),n.c(),J(n,1),n.m(a.parentNode,a)):n&&(gl(),le(n,1,1,()=>{n=null}),wl())},i(o){t||(J(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&W(a)}}}function ki(l,a,t){let n;te(l,$e,c=>t(6,n=c));let{open:o=!1}=a,{polices:r=[]}=a,b;kl(()=>{wt($e,n.length=0,n),console.log("CALLED polices")}),Jl(()=>{r.length>0&&b.forceRender()});const L=["Citizenid","Name","Lastname","Rank",{name:"Action",formatter:(c,d)=>he("button",{onClick:()=>{k(d.cells[0].data,d.cells[1].data,d.cells[2].data,d.cells[3].data)}},"Add")}],p=Dt();function h(){t(0,o=!1),p("closeModal",{})}function k(c,d,m,u){n.some(g=>g.id===c)||(n.push({id:c,name:d,lastName:m,rank:u}),$e.set(n))}function f(c){b=c,t(2,b)}return l.$$set=c=>{"open"in c&&t(0,o=c.open),"polices"in c&&t(1,r=c.polices)},[o,r,b,L,h,f]}class Ci extends ze{constructor(a){super(),Fe(this,a,ki,wi,Te,{open:0,polices:1})}}function Hn(l){let a,t,n,o,r,b,L,p,h,k,f,c,d,m,u,g,A,I,C,T;function B(P){l[6](P)}let z={data:l[1],columns:l[3],height:"30vh",fixedHeader:!0};return l[2]!==void 0&&(z.instance=l[2]),d=new yt({props:z}),je.push(()=>Lt(d,"instance",B)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="Evidence Window",o=v(),r=s("div"),b=s("button"),L=v(),p=s("button"),h=v(),k=s("button"),f=v(),c=s("div"),et(d.$$.fragment),u=v(),g=s("section"),A=s("button"),A.textContent="Close",i(n,"class","title-bar-text"),i(b,"aria-label","Minimize"),i(p,"aria-label","Maximize"),i(k,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(g,"class","field-row"),U(g,"justify-content","space-around"),i(c,"class","window-body"),i(a,"class","window absolute-center "),U(a,"max-width","100vh"),U(a,"width","70vh"),U(a,"max-height","70vh")},m(P,D){V(P,a,D),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(r,L),e(r,p),e(r,h),e(r,k),e(a,f),e(a,c),tt(d,c,null),e(c,u),e(c,g),e(g,A),I=!0,C||(T=[N(k,"click",l[4]),N(A,"click",l[4])],C=!0)},p(P,D){const S={};D&2&&(S.data=P[1]),D&8&&(S.columns=P[3]),!m&&D&4&&(m=!0,S.instance=P[2],kt(()=>m=!1)),d.$set(S)},i(P){I||(J(d.$$.fragment,P),I=!0)},o(P){le(d.$$.fragment,P),I=!1},d(P){P&&W(a),lt(d),C=!1,nt(T)}}}function Di(l){let a,t,n=l[0]&&Hn(l);return{c(){n&&n.c(),a=Ct()},m(o,r){n&&n.m(o,r),V(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&J(n,1)):(n=Hn(o),n.c(),J(n,1),n.m(a.parentNode,a)):n&&(gl(),le(n,1,1,()=>{n=null}),wl())},i(o){t||(J(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&W(a)}}}function Li(l,a,t){let n;te(l,Ze,m=>t(7,n=m));const o=Dt();let{open:r=!1}=a,{Evidence:b=[]}=a,{viewEvidence:L=!1}=a,p,h;kl(()=>{wt(Ze,n.length=0,n),console.log("CALLED EVIDENCE")});function k(m,u,g,A){return n.some(I=>I.id===m)||(n.push({id:m,label:u,street:g,type:A}),Ze.set(n)),!0}async function f(m){n.splice(n.findIndex(u=>u.id===m),1),Ze.set(n),await p.forceRender()}function c(){t(0,r=!1),o("closeModal",{})}function d(m){p=m,t(2,p)}return l.$$set=m=>{"open"in m&&t(0,r=m.open),"Evidence"in m&&t(1,b=m.Evidence),"viewEvidence"in m&&t(5,L=m.viewEvidence)},l.$$.update=()=>{l.$$.dirty&32&&(L?t(3,h=["ID","Label","Street","Type",{name:"Action",formatter:(m,u)=>he("button",{onClick:()=>{f(u.cells[0].data)}},"Delete")}]):t(3,h=["ID","Label","Street","Type",{name:"Action",formatter:(m,u)=>he("button",{onClick:()=>{k(u.cells[0].data,u.cells[1].data,u.cells[2].data,u.cells[3].data)}},"Add")}]))},[r,b,p,h,c,L,d]}class Vn extends ze{constructor(a){super(),Fe(this,a,Li,Di,Te,{open:0,Evidence:1,viewEvidence:5})}}function Wn(l,a,t){const n=l.slice();return n[21]=a[t],n}function qn(l){let a,t,n,o,r,b,L=l[21].name+"",p,h,k,f,c;return{c(){a=s("div"),t=s("input"),r=v(),b=s("label"),p=E(L),k=v(),t.checked=!0,i(t,"type","radio"),i(t,"id",n=l[21].name),i(t,"name","box"),t.__value=o=l[21].value,t.value=t.__value,l[13][0].push(t),i(b,"for",h=l[21].name),i(a,"class","field-row")},m(d,m){V(d,a,m),e(a,t),t.checked=t.__value===l[3],e(a,r),e(a,b),e(b,p),e(a,k),f||(c=N(t,"change",l[12]),f=!0)},p(d,m){m&8&&(t.checked=t.__value===d[3])},d(d){d&&W(a),l[13][0].splice(l[13][0].indexOf(t),1),f=!1,c()}}}function yi(l){let a,t,n,o,r=l[4]("page.rsapp.rsbuttons.rsbsearch")+"",b,L,p,h,k,f=l[4]("page.rsapp.rsbuttons.rsbsearch")+"",c,d,m,u=l[4]("page.rsapp.rsbuttons.rsbreload")+"",g,A,I,C,T,B,z,P,D,S,H,ie,ne=l[10],O=[];for(let R=0;R<ne.length;R+=1)O[R]=qn(Wn(l,ne,R));function Ce(R){l[14](R)}let De={style:l[6],pagination:{enabled:!0,limit:3},autoWidth:!0,data:l[5]||[],columns:l[7]};return l[0]!==void 0&&(De.instance=l[0]),z=new yt({props:De}),je.push(()=>Lt(z,"instance",Ce)),{c(){a=s("div"),t=s("fieldset"),n=s("div"),o=s("label"),b=E(r),L=v(),p=s("input"),h=v(),k=s("button"),c=E(f),d=v(),m=s("button"),g=E(u),A=v(),I=s("fieldset"),C=E(`Search By:\r
			`),T=s("div");for(let R=0;R<O.length;R+=1)O[R].c();B=v(),et(z.$$.fragment),i(o,"for","asd"),i(p,"type","text"),i(p,"name","asd"),i(p,"id","ss"),i(n,"class","text-center"),i(T,"class","field-row"),U(T,"justify-content","space-between"),i(a,"class","grid full-width full-height scroll hide-scrollbar")},m(R,Y){V(R,a,Y),e(a,t),e(t,n),e(n,o),e(o,b),e(n,L),e(n,p),G(p,l[2]),e(n,h),e(n,k),e(k,c),e(n,d),e(n,m),e(m,g),e(t,A),e(t,I),e(I,C),e(I,T);for(let x=0;x<O.length;x+=1)O[x].m(T,null);e(a,B),tt(z,a,null),l[15](a),S=!0,H||(ie=[N(p,"input",l[11]),N(k,"click",Tn(l[8])),N(m,"click",Tn(l[9]))],H=!0)},p(R,[Y]){if((!S||Y&16)&&r!==(r=R[4]("page.rsapp.rsbuttons.rsbsearch")+"")&&j(b,r),Y&4&&p.value!==R[2]&&G(p,R[2]),(!S||Y&16)&&f!==(f=R[4]("page.rsapp.rsbuttons.rsbsearch")+"")&&j(c,f),(!S||Y&16)&&u!==(u=R[4]("page.rsapp.rsbuttons.rsbreload")+"")&&j(g,u),Y&1032){ne=R[10];let q;for(q=0;q<ne.length;q+=1){const Le=Wn(R,ne,q);O[q]?O[q].p(Le,Y):(O[q]=qn(Le),O[q].c(),O[q].m(T,null))}for(;q<O.length;q+=1)O[q].d(1);O.length=ne.length}const x={};Y&32&&(x.data=R[5]||[]),!P&&Y&1&&(P=!0,x.instance=R[0],kt(()=>P=!1)),z.$set(x)},i(R){S||(J(z.$$.fragment,R),ql(()=>{D||(D=_l(a,vl,{},!0)),D.run(1)}),S=!0)},o(R){le(z.$$.fragment,R),D||(D=_l(a,vl,{},!1)),D.run(0),S=!1},d(R){R&&W(a),Qn(O,R),lt(z),l[15](null),R&&D&&D.end(),H=!1,nt(ie)}}}function Ei(l,a,t){let n,o,r,b,L,p;te(l,Xn,D=>t(4,r=D)),te(l,Gl,D=>t(5,b=D)),te(l,li,D=>t(16,L=D)),te(l,ni,D=>t(17,p=D));let h,k;Jl(()=>{h.forceRender()});const f={table:{width:"100%"},header:{display:"flex",alignItems:"center",flexDirection:"row-reverse"},footer:{width:"100%"}},c=[{id:"id",name:"ID"},{id:"title",name:"Title"},{id:"name",name:"Name"},{id:"lastname",name:"Last Name"},{id:"citizenid",name:"Citizenid"},{id:"location",name:"Location"},{id:"isvehicle",name:"Vehicle Involved"},{id:"data",name:"Data",formatter:(D,S)=>he("button",{onClick:()=>{u(S.cells[0].data,S.cells[7].data)}},"Open")},{id:"observations",name:"Observations",formatter:(D,S)=>he("button",{onClick:()=>{d(S.cells[8].data)}},"Open")},p?{id:"delete",name:"Delete Report",formatter:(D,S)=>he("button",{onClick:()=>{m(S.cells[0].data,S.cells[6].data)}},"Delete")}:{id:"delete",name:"Can't Delete"}];function d(D){let S=!0,H=new fi({target:k,props:{open:S,obs:D}});return H.$on("closeModal",()=>S=!1),H}async function m(D,S){if(!gt())try{await ke("deleteReport",{id:D,callsign:L,isvehicle:S}).then(H=>{H&&h.updateConfig({data:b}).forceRender()})}catch(H){console.log(`SearchReports ${H}`)}}function u(D,S){let H=!0;if(!gt()){let ie=new pi({target:k,props:{open:H,data:S,caseID:D}});return ie.$on("closeModal1",()=>H=!1),ie}}async function g(){if(await h.updateConfig({data:b}).forceRender(),!gt())try{await ke("getReportData",{type:n,value:o}).then(async D=>{D&&await h.updateConfig({data:D}).forceRender()})}catch(D){console.log(`SearchReports ${D}`)}}function A(){h.updateConfig({data:b}).forceRender()}const I=[{name:r("page.rsapp.rsmenu.rname"),value:"name"},{name:r("page.rsapp.rsmenu.rcid"),value:"citizenid"},{name:r("page.rsapp.rsmenu.rlocation"),value:"localization"},{name:r("page.rsapp.rsmenu.rsid"),value:"id"},{name:r("page.rsapp.rsmenu.rspolice"),value:"data"}],C=[[]];function T(){o=this.value,t(2,o)}function B(){n=this.__value,t(3,n)}function z(D){h=D,t(0,h)}function P(D){je[D?"unshift":"push"](()=>{k=D,t(1,k)})}return t(3,n=[0]),t(2,o=""),[h,k,o,n,r,b,f,c,g,A,I,T,B,C,z,P]}class Ri extends ze{constructor(a){super(),Fe(this,a,Ei,yi,Te,{})}}function Gn(l){let a,t,n,o,r,b,L,p,h,k,f,c,d;function m(g){l[7](g)}let u={data:l[1]?l[3]:l[4],sort:!0,columns:l[6],search:!0,resizable:!0,pagination:{enabled:!0,limit:5}};return l[2]!==void 0&&(u.instance=l[2]),h=new yt({props:u}),je.push(()=>Lt(h,"instance",m)),{c(){a=s("div"),t=s("div"),n=s("div"),n.textContent="Fines Window",o=v(),r=s("div"),b=s("button"),L=v(),p=s("div"),et(h.$$.fragment),i(n,"class","title-bar-text"),i(b,"aria-label","Close"),i(r,"class","title-bar-controls"),i(t,"class","title-bar"),i(p,"class","window-body"),i(a,"class","window absolute-center "),U(a,"max-width","200vh"),U(a,"width","100vh"),U(a,"max-height","70vh")},m(g,A){V(g,a,A),e(a,t),e(t,n),e(t,o),e(t,r),e(r,b),e(a,L),e(a,p),tt(h,p,null),f=!0,c||(d=N(b,"click",l[5]),c=!0)},p(g,A){const I={};A&26&&(I.data=g[1]?g[3]:g[4]),!k&&A&4&&(k=!0,I.instance=g[2],kt(()=>k=!1)),h.$set(I)},i(g){f||(J(h.$$.fragment,g),f=!0)},o(g){le(h.$$.fragment,g),f=!1},d(g){g&&W(a),lt(h),c=!1,d()}}}function Ni(l){let a,t,n=l[0]&&Gn(l);return{c(){n&&n.c(),a=Ct()},m(o,r){n&&n.m(o,r),V(o,a,r),t=!0},p(o,[r]){o[0]?n?(n.p(o,r),r&1&&J(n,1)):(n=Gn(o),n.c(),J(n,1),n.m(a.parentNode,a)):n&&(gl(),le(n,1,1,()=>{n=null}),wl())},i(o){t||(J(n),t=!0)},o(o){le(n),t=!1},d(o){n&&n.d(o),o&&W(a)}}}function Si(l,a,t){let n,o;te(l,xe,d=>t(3,n=d)),te(l,ii,d=>t(4,o=d));let r;const b=Dt();function L(){t(0,p=!1),b("closeModal",{})}let{open:p=!1}=a,{show:h=!0}=a;const k=["ID","Label",{name:"Amount"},"Jailtime",h?{name:"Delete",formatter:(d,m)=>he("button",{onClick:()=>{f("delete",m.cells[0].data)}},"Delete")}:{name:"Add",formatter:(d,m)=>he("button",{onClick:()=>{f("add",m.cells[0].data)}},"Add")}];function f(d,m){d==="add"?n.some(u=>u.id===m)||(n.push(o[m-1]),xe.set(n)):d==="delete"&&(n.splice(n.findIndex(u=>u.id===m),1),xe.set(n),r.forceRender())}kl(()=>{wt(xe,n.length=0,n),console.log("CALLED fines")});function c(d){r=d,t(2,r)}return l.$$set=d=>{"open"in d&&t(0,p=d.open),"show"in d&&t(1,h=d.show)},[p,h,r,n,o,L,k,c]}class Mi extends ze{constructor(a){super(),Fe(this,a,Si,Ni,Te,{open:0,show:1})}}function Jn(l,a,t){const n=l.slice();return n[43]=a[t],n}function Yn(l){let a,t,n,o,r,b,L;return{c(){a=s("div"),t=s("span"),n=s("label"),n.textContent="Plate:",o=v(),r=s("input"),i(n,"class","nameField svelte-1vht49a"),i(n,"for","Plate"),i(r,"class","inputField svelte-1vht49a"),i(r,"type","text"),i(r,"name","Plate"),i(r,"id","Local"),i(a,"class","field-row ")},m(p,h){V(p,a,h),e(a,t),e(t,n),e(t,o),e(t,r),G(r,l[1].plate),b||(L=N(r,"input",l[30]),b=!0)},p(p,h){h[0]&66&&r.value!==p[1].plate&&G(r,p[1].plate)},d(p){p&&W(a),b=!1,L()}}}function Kn(l){let a,t=l[43].text+"",n,o;return{c(){a=s("option"),n=E(t),a.__value=o=l[43].id,a.value=a.__value},m(r,b){V(r,a,b),e(a,n)},p:Wl,d(r){r&&W(a)}}}function Ii(l){let a,t,n,o,r=l[5]("page.report.title")+"",b,L,p,h,k,f,c,d=l[5]("page.report.menu.add")+"",m,u,g,A,I,C=l[5]("page.report.menu.addmenu.close")+"",T,B,z,P,D=l[5]("page.report.menu.addmenu.street")+"",S,H,ie,ne,O=l[5]("page.report.menu.addmenu.police")+"",Ce,De,R,Y,x=l[5]("page.report.menu.addmenu.evidence")+"",q,Le,Ue,Be,Oe=l[5]("page.report.menu.addmenu.fine")+"",it,Et,He,Rt,de,w=l[5]("page.report.menu.search")+"",F,K,ae,ce,ye,Ee=l[5]("page.report.menu.searchmenu.name")+"",Ve,Yl,Nt,St,Kl,be,Mt=l[5]("page.report.menu.view")+"",Cl,Ql,_e,It,Pt,At=l[5]("page.report.menu.viewmenu.vpolice")+"",Dl,Xl,zt,Ft,Tt=l[5]("page.report.menu.viewmenu.vevidence")+"",Ll,Zl,jt,Ut,Bt=l[5]("page.report.menu.viewmenu.vfines")+"",yl,xl,Re,$l,We,Ot,en,Ht,Vt,tn,at,pe,Ne,qe,Wt=l[5]("page.report.rcreate")+"",El,ln,st,qt=l[5]("page.report.rsearch")+"",Rl,nn,ot,Ge,Se,Je,Nl,Gt=l[5]("page.report.rbody.rinfo")+"",Sl,an,Z,Jt,rt,ut,Yt=l[5]("page.report.rbody.rtitle")+"",Ml,sn,fe,on,Kt,ct,dt,Qt=l[5]("page.report.rbody.rname")+"",Il,rn,se,un,Xt,ft,pt,Zt=l[5]("page.report.rbody.rlname")+"",Pl,cn,oe,dn,xt,mt,ht,$t=l[5]("page.report.rbody.rcid")+"",Al,fn,re,pn,el,bt,_t,tl=l[5]("page.report.rbody.rlocation")+"",zl,mn,ue,hn,bn,Me,ll,nl=l[5]("page.report.rbody.robs")+"",Fl,_n,il,al,Q,vn,sl,me,ve,gn,Ie,wn,ol,kn,Pe,Tl,rl=l[5]("page.report.rbuttons.rcancel")+"",jl,Cn,Ye,ul=l[5]("page.report.rbuttons.radd")+"",Ul,cl,Dn,Ae,dl,Ke,Ln,ge,vt,yn,fl=l[1].id+"",Bl,En,pl,Rn,Qe,Nn,ml=l[2].toFixed(0)+"",Ol,Sn,we,Hl,hl,M,Vl,Mn,$=l[1].isvehicle&&Yn(l),Xe=l[6],ee=[];for(let _=0;_<Xe.length;_+=1)ee[_]=Kn(Jn(l,Xe,_));return Ke=new Ri({}),{c(){a=s("div"),t=s("div"),n=s("div"),o=s("div"),b=E(r),L=v(),p=s("div"),h=s("button"),k=v(),f=s("ul"),c=s("li"),m=E(d),u=v(),g=s("ul"),A=s("li"),I=s("a"),T=E(C),B=v(),z=s("li"),P=s("a"),S=E(D),H=v(),ie=s("li"),ne=s("a"),Ce=E(O),De=v(),R=s("li"),Y=s("a"),q=E(x),Le=v(),Ue=s("li"),Be=s("a"),it=E(Oe),Et=v(),He=s("li"),He.innerHTML="<a>Add Images</a>",Rt=v(),de=s("li"),F=E(w),K=v(),ae=s("ul"),ce=s("li"),ye=s("a"),Ve=E(Ee),Yl=v(),Nt=s("li"),St=s("a"),St.textContent="By Vehicle Plate",Kl=v(),be=s("li"),Cl=E(Mt),Ql=v(),_e=s("ul"),It=s("li"),Pt=s("a"),Dl=E(At),Xl=v(),zt=s("li"),Ft=s("a"),Ll=E(Tt),Zl=v(),jt=s("li"),Ut=s("a"),yl=E(Bt),xl=v(),Re=s("li"),$l=E(`Help\r
				`),We=s("ul"),Ot=s("li"),Ot.innerHTML="<a>View Help</a>",en=v(),Ht=s("li"),Vt=s("a"),Vt.textContent="About",tn=v(),at=s("div"),pe=s("section"),Ne=s("menu"),qe=s("button"),El=E(Wt),ln=v(),st=s("button"),Rl=E(qt),nn=v(),ot=s("article"),Ge=s("div"),Se=s("fieldset"),Je=s("fieldset"),Nl=s("legend"),Sl=E(Gt),an=v(),Z=s("div"),Jt=s("div"),rt=s("span"),ut=s("label"),Ml=E(Yt),sn=v(),fe=s("input"),on=v(),Kt=s("div"),ct=s("span"),dt=s("label"),Il=E(Qt),rn=v(),se=s("input"),un=v(),Xt=s("div"),ft=s("span"),pt=s("label"),Pl=E(Zt),cn=v(),oe=s("input"),dn=v(),xt=s("div"),mt=s("span"),ht=s("label"),Al=E($t),fn=v(),re=s("input"),pn=v(),el=s("div"),bt=s("span"),_t=s("label"),zl=E(tl),mn=v(),ue=s("input"),hn=v(),$&&$.c(),bn=v(),Me=s("fieldset"),ll=s("legend"),Fl=E(nl),_n=v(),il=s("div"),al=s("div"),Q=s("textarea"),vn=v(),sl=s("fieldset"),me=s("div"),ve=s("select");for(let _=0;_<ee.length;_+=1)ee[_].c();gn=v(),Ie=s("input"),wn=v(),ol=s("label"),ol.textContent="Is Vehicle",kn=v(),Pe=s("section"),Tl=s("button"),jl=E(rl),Cn=v(),Ye=s("button"),Ul=E(ul),Dn=v(),Ae=s("article"),dl=s("div"),et(Ke.$$.fragment),Ln=v(),ge=s("div"),vt=s("p"),yn=E("Report ID: "),Bl=E(fl),En=v(),pl=s("p"),pl.textContent="Report Tool",Rn=v(),Qe=s("p"),Nn=E("CPU Usage: "),Ol=E(ml),Sn=E("%"),Hl=v(),hl=s("div"),i(o,"class","title-bar-text"),i(h,"aria-label","Close"),i(p,"class","title-bar-controls"),i(n,"class","title-bar"),i(A,"role","menuitem"),i(A,"class","has-divider"),i(z,"role","menuitem"),i(ie,"role","menuitem"),i(R,"role","menuitem"),i(Ue,"role","menuitem"),i(He,"role","menuitem"),i(g,"role","menu"),i(c,"role","menuitem"),i(c,"tabindex","0"),i(c,"aria-haspopup","true"),i(ce,"role","menuitem"),i(Nt,"role","menuitem"),i(ae,"role","menu"),i(de,"role","menuitem"),i(de,"tabindex","0"),i(de,"aria-haspopup","true"),i(It,"role","menuitem"),i(zt,"role","menuitem"),i(jt,"role","menuitem"),i(_e,"role","menu"),i(be,"role","menuitem"),i(be,"tabindex","0"),i(be,"aria-haspopup","true"),i(Ot,"role","menuitem"),i(Ht,"role","menuitem"),i(We,"role","menu"),i(Re,"role","menuitem"),i(Re,"tabindex","0"),i(Re,"aria-haspopup","true"),i(f,"role","menubar"),i(f,"class","can-hover"),i(qe,"role","tab"),i(qe,"aria-selected","true"),i(qe,"aria-controls","reports-tab"),i(st,"role","tab"),i(st,"aria-controls","search-reports-tab"),i(Ne,"role","tablist"),i(Ne,"aria-label","Tabsitos"),i(ut,"class","nameField svelte-1vht49a"),i(ut,"for","User"),i(fe,"type","text"),i(fe,"class","inputField svelte-1vht49a"),i(fe,"name","Something"),i(fe,"id","Title"),i(Jt,"class","field-row"),i(dt,"class","nameField svelte-1vht49a"),i(dt,"for","User"),se.disabled=l[3],i(se,"type","text"),i(se,"class","inputField svelte-1vht49a"),i(se,"name","Something"),i(se,"id","User"),i(Kt,"class","field-row"),i(pt,"class","nameField svelte-1vht49a"),i(pt,"for","LName"),oe.disabled=l[3],i(oe,"class","inputField svelte-1vht49a"),i(oe,"type","text"),i(oe,"name","LName"),i(oe,"id","LName"),i(Xt,"class","field-row "),i(ht,"class","nameField svelte-1vht49a"),i(ht,"for","CID"),re.disabled=l[3],i(re,"class","inputField svelte-1vht49a"),i(re,"type","text"),i(re,"name","CID"),i(re,"id","CID"),i(xt,"class","field-row "),i(_t,"class","nameField svelte-1vht49a"),i(_t,"for","Local"),ue.disabled=l[4],i(ue,"class","inputField svelte-1vht49a"),i(ue,"type","text"),i(ue,"name","Local"),i(ue,"id","Local"),i(el,"class","field-row "),i(Z,"class","infoUser"),i(Je,"class","float-left"),i(ll,"class","text-center"),i(Q,"name","Observations"),i(Q,"class","text-h6"),i(Q,"id","jere"),i(Q,"cols","8"),i(Q,"rows","8"),U(Q,"width","32.760416666666664vw"),U(Q,"height","24.24557752341311vh"),U(Q,"max-width","32.760416666666664vw"),U(Q,"min-width","15.625vw"),U(Q,"max-height","24.24557752341311vh"),U(Q,"min-height","24.24557752341311vh"),i(al,"class","field-row-stacked"),i(il,"class","infoUser"),i(Me,"class","float-left q-ml-md"),U(Me,"max-width","629px",!1),l[1].type===void 0&&ql(()=>l[32].call(ve)),i(Ie,"type","checkbox"),i(Ie,"id","example2"),i(ol,"for","example2"),i(me,"class","field-row"),U(me,"justify-content","space-between"),i(sl,"class","float-left full-width"),Ye.disabled=cl=l[1].title.length<3,i(Pe,"class","field-row"),U(Pe,"justify-content","space-around"),i(Ge,"class","jerico relative-position full-width"),i(ot,"role","tabpanel"),i(ot,"id","reports-tab"),i(dl,"class","jerico relative-position full-width"),i(Ae,"role","tabpanel"),i(Ae,"id","search-reports-tab"),U(Ae,"display","none"),i(Ae,"class","svelte-1vht49a"),i(pe,"class","tabs relative-position full-width"),U(pe,"max-width","200vh"),i(at,"class","window-body "),U(at,"height","47vh"),i(vt,"class","status-bar-field"),i(pl,"class","status-bar-field"),i(Qe,"class","status-bar-field"),i(ge,"class","status-bar"),i(t,"class","window"),U(t,"max-width","200vh"),U(t,"width","102vh"),i(a,"class","absolute-center")},m(_,y){V(_,a,y),e(a,t),e(t,n),e(n,o),e(o,b),e(n,L),e(n,p),e(p,h),e(t,k),e(t,f),e(f,c),e(c,m),e(c,u),e(c,g),e(g,A),e(A,I),e(I,T),e(g,B),e(g,z),e(z,P),e(P,S),e(g,H),e(g,ie),e(ie,ne),e(ne,Ce),e(g,De),e(g,R),e(R,Y),e(Y,q),e(g,Le),e(g,Ue),e(Ue,Be),e(Be,it),e(g,Et),e(g,He),e(f,Rt),e(f,de),e(de,F),e(de,K),e(de,ae),e(ae,ce),e(ce,ye),e(ye,Ve),e(ae,Yl),e(ae,Nt),e(Nt,St),e(f,Kl),e(f,be),e(be,Cl),e(be,Ql),e(be,_e),e(_e,It),e(It,Pt),e(Pt,Dl),e(_e,Xl),e(_e,zt),e(zt,Ft),e(Ft,Ll),e(_e,Zl),e(_e,jt),e(jt,Ut),e(Ut,yl),e(f,xl),e(f,Re),e(Re,$l),e(Re,We),e(We,Ot),e(We,en),e(We,Ht),e(Ht,Vt),e(t,tn),e(t,at),e(at,pe),e(pe,Ne),e(Ne,qe),e(qe,El),e(Ne,ln),e(Ne,st),e(st,Rl),e(pe,nn),e(pe,ot),e(ot,Ge),e(Ge,Se),e(Se,Je),e(Je,Nl),e(Nl,Sl),e(Je,an),e(Je,Z),e(Z,Jt),e(Jt,rt),e(rt,ut),e(ut,Ml),e(rt,sn),e(rt,fe),G(fe,l[1].title),e(Z,on),e(Z,Kt),e(Kt,ct),e(ct,dt),e(dt,Il),e(ct,rn),e(ct,se),G(se,l[1].name),e(Z,un),e(Z,Xt),e(Xt,ft),e(ft,pt),e(pt,Pl),e(ft,cn),e(ft,oe),G(oe,l[1].lastname),e(Z,dn),e(Z,xt),e(xt,mt),e(mt,ht),e(ht,Al),e(mt,fn),e(mt,re),G(re,l[1].citizenid),e(Z,pn),e(Z,el),e(el,bt),e(bt,_t),e(_t,zl),e(bt,mn),e(bt,ue),G(ue,l[1].location),e(Z,hn),$&&$.m(Z,null),e(Se,bn),e(Se,Me),e(Me,ll),e(ll,Fl),e(Me,_n),e(Me,il),e(il,al),e(al,Q),G(Q,l[1].observations),e(Se,vn),e(Se,sl),e(sl,me),e(me,ve);for(let X=0;X<ee.length;X+=1)ee[X].m(ve,null);jn(ve,l[1].type),e(me,gn),e(me,Ie),Ie.checked=l[1].isvehicle,e(me,wn),e(me,ol),e(Ge,kn),e(Ge,Pe),e(Pe,Tl),e(Tl,jl),e(Pe,Cn),e(Pe,Ye),e(Ye,Ul),e(pe,Dn),e(pe,Ae),e(Ae,dl),tt(Ke,dl,null),e(t,Ln),e(t,ge),e(ge,vt),e(vt,yn),e(vt,Bl),e(ge,En),e(ge,pl),e(ge,Rn),e(ge,Qe),e(Qe,Nn),e(Qe,Ol),e(Qe,Sn),V(_,Hl,y),V(_,hl,y),l[34](hl),M=!0,Vl||(Mn=[N(h,"click",l[18]),N(I,"click",l[15]),N(P,"click",l[11]),N(ne,"click",l[9]),N(Y,"click",l[19]),N(Be,"click",l[20]),N(ye,"click",l[21]),N(St,"click",l[22]),N(Pt,"click",l[12]),N(Ft,"click",l[23]),N(Ut,"click",l[24]),N(Vt,"click",l[7]),N(fe,"input",l[25]),N(se,"input",l[26]),N(oe,"input",l[27]),N(re,"input",l[28]),N(ue,"input",l[29]),N(Q,"input",l[31]),N(ve,"change",l[32]),N(Ie,"change",l[33]),N(Ye,"click",l[13])],Vl=!0)},p(_,y){if((!M||y[0]&32)&&r!==(r=_[5]("page.report.title")+"")&&j(b,r),(!M||y[0]&32)&&d!==(d=_[5]("page.report.menu.add")+"")&&j(m,d),(!M||y[0]&32)&&C!==(C=_[5]("page.report.menu.addmenu.close")+"")&&j(T,C),(!M||y[0]&32)&&D!==(D=_[5]("page.report.menu.addmenu.street")+"")&&j(S,D),(!M||y[0]&32)&&O!==(O=_[5]("page.report.menu.addmenu.police")+"")&&j(Ce,O),(!M||y[0]&32)&&x!==(x=_[5]("page.report.menu.addmenu.evidence")+"")&&j(q,x),(!M||y[0]&32)&&Oe!==(Oe=_[5]("page.report.menu.addmenu.fine")+"")&&j(it,Oe),(!M||y[0]&32)&&w!==(w=_[5]("page.report.menu.search")+"")&&j(F,w),(!M||y[0]&32)&&Ee!==(Ee=_[5]("page.report.menu.searchmenu.name")+"")&&j(Ve,Ee),(!M||y[0]&32)&&Mt!==(Mt=_[5]("page.report.menu.view")+"")&&j(Cl,Mt),(!M||y[0]&32)&&At!==(At=_[5]("page.report.menu.viewmenu.vpolice")+"")&&j(Dl,At),(!M||y[0]&32)&&Tt!==(Tt=_[5]("page.report.menu.viewmenu.vevidence")+"")&&j(Ll,Tt),(!M||y[0]&32)&&Bt!==(Bt=_[5]("page.report.menu.viewmenu.vfines")+"")&&j(yl,Bt),(!M||y[0]&32)&&Wt!==(Wt=_[5]("page.report.rcreate")+"")&&j(El,Wt),(!M||y[0]&32)&&qt!==(qt=_[5]("page.report.rsearch")+"")&&j(Rl,qt),(!M||y[0]&32)&&Gt!==(Gt=_[5]("page.report.rbody.rinfo")+"")&&j(Sl,Gt),(!M||y[0]&32)&&Yt!==(Yt=_[5]("page.report.rbody.rtitle")+"")&&j(Ml,Yt),y[0]&66&&fe.value!==_[1].title&&G(fe,_[1].title),(!M||y[0]&32)&&Qt!==(Qt=_[5]("page.report.rbody.rname")+"")&&j(Il,Qt),(!M||y[0]&8)&&(se.disabled=_[3]),y[0]&66&&se.value!==_[1].name&&G(se,_[1].name),(!M||y[0]&32)&&Zt!==(Zt=_[5]("page.report.rbody.rlname")+"")&&j(Pl,Zt),(!M||y[0]&8)&&(oe.disabled=_[3]),y[0]&66&&oe.value!==_[1].lastname&&G(oe,_[1].lastname),(!M||y[0]&32)&&$t!==($t=_[5]("page.report.rbody.rcid")+"")&&j(Al,$t),(!M||y[0]&8)&&(re.disabled=_[3]),y[0]&66&&re.value!==_[1].citizenid&&G(re,_[1].citizenid),(!M||y[0]&32)&&tl!==(tl=_[5]("page.report.rbody.rlocation")+"")&&j(zl,tl),(!M||y[0]&16)&&(ue.disabled=_[4]),y[0]&66&&ue.value!==_[1].location&&G(ue,_[1].location),_[1].isvehicle?$?$.p(_,y):($=Yn(_),$.c(),$.m(Z,null)):$&&($.d(1),$=null),(!M||y[0]&32)&&nl!==(nl=_[5]("page.report.rbody.robs")+"")&&j(Fl,nl),y[0]&66&&G(Q,_[1].observations),y[0]&64){Xe=_[6];let X;for(X=0;X<Xe.length;X+=1){const In=Jn(_,Xe,X);ee[X]?ee[X].p(In,y):(ee[X]=Kn(In),ee[X].c(),ee[X].m(ve,null))}for(;X<ee.length;X+=1)ee[X].d(1);ee.length=Xe.length}y[0]&66&&jn(ve,_[1].type),y[0]&66&&(Ie.checked=_[1].isvehicle),(!M||y[0]&32)&&rl!==(rl=_[5]("page.report.rbuttons.rcancel")+"")&&j(jl,rl),(!M||y[0]&32)&&ul!==(ul=_[5]("page.report.rbuttons.radd")+"")&&j(Ul,ul),(!M||y[0]&66&&cl!==(cl=_[1].title.length<3))&&(Ye.disabled=cl),(!M||y[0]&2)&&fl!==(fl=_[1].id+"")&&j(Bl,fl),(!M||y[0]&4)&&ml!==(ml=_[2].toFixed(0)+"")&&j(Ol,ml)},i(_){M||(J(Ke.$$.fragment,_),ql(()=>{we||(we=_l(a,vl,{duration:100},!0)),we.run(1)}),M=!0)},o(_){le(Ke.$$.fragment,_),we||(we=_l(a,vl,{duration:100},!1)),we.run(0),M=!1},d(_){_&&W(a),$&&$.d(),Qn(ee,_),lt(Ke),_&&we&&we.end(),_&&W(Hl),_&&W(hl),l[34](null),Vl=!1,nt(Mn)}}}function Pi(l,a,t){let n,o,r,b,L,p,h,k;te(l,xe,w=>t(17,b=w)),te(l,Ze,w=>t(37,L=w)),te(l,Xn,w=>t(5,p=w)),te(l,Gl,w=>t(38,h=w)),te(l,$e,w=>t(39,k=w));let{params:f={name:null,lastname:"",citizenid:"",plate:"",title:null,isvehicle:!1,observations:""}}=a,c,d=new ui({length:5});Jl(()=>{ai()});const m=[{id:"bolo",text:"Bolo"},{id:"warrant",text:"Warrant"},{id:"basic",text:"Basic"},{id:"report",text:"Report"}];let u={id:d(),name:"",lastname:"",rank:"",citizenid:"",location:"",coords:"",plate:"",bolo:!1,observations:"No observations",title:"",type:m[3].id,amount:0,isvehicle:!1,data:{evidences:[],polices:[],fines:[]},reset:()=>{this.name="",this.lastname="",this.rank="",this.citizenid="",this.location="",this.coords="",this.observations="No observations",this.title="",this.type=m[2].id,this.amount=0,this.data={evidences:[],polices:[],fines:[]},this.isvehicle=!1,this.plate=""}};u.data.evidences=L,u.data.polices=k,u.data.fines=b;let g=0,A=setInterval(()=>{t(2,g=Math.random()*100)},5e3);function I(){let w=!0,F=new ci({target:c,props:{open:w}});return F.$on("closeAbout",()=>w=!1),F}function C(w){let F=!0,K=new gi({target:c,props:{open:F,type:w}});return K.$on("closeSearch",ae=>{var ye,Ee,Ve;const ce=ae.detail;t(1,u.citizenid=((ye=ce[0])==null?void 0:ye.citizenid)||ce.citizenid,u),t(1,u.name=((Ee=ce[0])==null?void 0:Ee.Name)||ce.Name,u),t(1,u.lastname=((Ve=ce[0])==null?void 0:Ve.LastName)||ce.LastName,u),t(3,o=!0)}),K.$on("closeModal",ae=>F=!1),K}async function T(){let w=!0;try{await ke("getAllPolices").then(F=>{new Ci({target:c,props:{open:w,polices:F}}).$on("closeAbout",()=>w=!1)})}catch(F){console.log(`Report ${F}`)}}async function B(w){let F=!0;if(gt())new Vn({target:c,props:{open:F,Evidence:L,viewEvidence:w}}).$on("closeAbout",()=>F=!1);else try{await ke("getEvidence").then(K=>{K&&new Vn({target:c,props:{open:F,Evidence:w===!0?L:K,viewEvidence:w}}).$on("closeAbout",()=>F=!1)})}catch(K){console.log(`Report 160 ${K}`)}}async function z(){await ke("getCurrentLocation").then(w=>t(1,u.location=w,u)),t(4,r=!0)}function P(){let w=!0,F=new bi({target:c,props:{open:w}});return F.$on("closeAbout",()=>w=!1),F}async function D(){let w=!0;if(t(1,u.amount=n,u),u.isvehicle&&u.plate.length<4){new bl({target:c,props:{open:w,message:p("please-fill-the-plate")}}).$on("closeModal",()=>w=!1);return}else if(gt()){let F=new bl({target:c,props:{open:w,message:p("report-created",{values:{0:u.id}})}});t(1,u.id=d(),u),F.$on("closeModal",()=>w=!1)}else try{t(1,u.bolo=u.isvehicle,u),await ke("sendNewReport",{report:u}).then(F=>{if(F){let K=new bl({target:c,props:{open:w,message:p("report-created",{values:{0:u.id}})}});!h.some(ae=>ae.id===u.id)&&u.type!=="basic"&&(h.push(u),Gl.set(h)),t(1,u.id=d(),u),H(),u.reset(),K.$on("closeModal",()=>w=!1)}else new bl({target:c,props:{open:w,message:p("error-creating-the-report")}}).$on("closeModal",()=>w=!1)})}catch{}}function S(w){let F=!0;new Mi({target:c,props:{open:F,show:w}}).$on("closeModal",()=>F=!1)}function H(){wt(Ze,L.length=0,L),wt(xe,b.length=0,b)}async function ie(){try{await ke("getClosestPlayerData",{}).then(w=>{w?(t(1,u.name=w.name,u),t(1,u.citizenid=w.citizenid,u),t(1,u.lastname=w.lastname,u),t(3,o=!0)):si("NO PLAYER DETECTED")})}catch(w){console.log(w)}}kl(()=>{clearInterval(A),H()});const ne=()=>oi("/"),O=()=>B(!1),Ce=()=>S(!1),De=()=>C("name"),R=()=>C("plate"),Y=()=>B(!0),x=()=>S(!0);function q(){u.title=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function Le(){u.name=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function Ue(){u.lastname=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function Be(){u.citizenid=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function Oe(){u.location=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function it(){u.plate=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function Et(){u.observations=this.value,t(1,u),t(16,f),t(40,d),t(6,m)}function He(){u.type=ri(this),t(1,u),t(16,f),t(40,d),t(6,m)}function Rt(){u.isvehicle=this.checked,t(1,u),t(16,f),t(40,d),t(6,m)}function de(w){je[w?"unshift":"push"](()=>{c=w,t(0,c)})}return l.$$set=w=>{"params"in w&&t(16,f=w.params)},l.$$.update=()=>{l.$$.dirty[0]&65536&&f.title!==null&&t(1,u=Fn(zn({},f),{id:d(),location:"",type:m[0].id,bolo:!0,amount:0,data:{evidences:[],polices:[],fines:[]},rank:"",coords:"",reset:()=>{this.name="",this.lastname="",this.rank="",this.citizenid="",this.location="",this.coords="",this.observations="No observations",this.title="",this.type=m[2].id,this.amount=0,this.data={evidences:[],polices:[],fines:[]},this.isvehicle=!1,this.plate=""}})),l.$$.dirty[0]&131072&&(n=b.reduce((w,{amount:F})=>w+F,0))},t(3,o=!1),t(4,r=!1),[c,u,g,o,r,p,m,I,C,T,B,z,P,D,S,ie,f,b,ne,O,Ce,De,R,Y,x,q,Le,Ue,Be,Oe,it,Et,He,Rt,de]}class Ui extends ze{constructor(a){super(),Fe(this,a,Pi,Ii,Te,{params:16},null,[-1,-1])}}export{Ui as default};