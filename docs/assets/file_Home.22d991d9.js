import{o as c,c as d,a as s,t as T,n as $,u as B,b as U,d as Y,r as p,e as q,f as k,w as z,g as h,h as G,l as H,p as M,i as N,j as I,k as D,v as x,m as A,q as y,s as R,x as L,y as Q,z as E,A as J,B as K,C as P,F as W,D as X,E as Z,G as ss}from"./file_index.3100ad69.js";import{_ as es}from"./file_Message.3634c436.js";import{_ as S}from"./file__plugin-vue_export-helper.e718e6fb.js";const ts={class:"modal-card"},as={class:"modal-card-body"},V={__name:"Modalquestion",props:{modal:Object},emits:["yes","no"],setup(n,{emit:e}){const o=n,l=()=>{e("yes")},t=()=>{e("no")};return(i,a)=>(c(),d("div",{class:$(["modal",o.modal.isShow?"is-active":" "])},[s("div",{onClick:t,class:"modal-background"}),s("div",ts,[s("header",{class:"modal-card-head"},[s("button",{onClick:t,class:"delete","aria-label":"close"})]),s("section",as,T(o.modal.message),1),s("footer",{class:"modal-card-foot"},[s("button",{onClick:l,class:"button is-success"},"yes"),s("button",{onClick:t,class:"button is-danger"},"No")])])],2))}};const O=n=>(M("data-v-30d20d53"),n=n(),N(),n),os={class:"navbar rel section pb-0 pt-0",role:"navigation","aria-label":"main navigation "},ns=O(()=>s("div",{class:"navbar-brand"},[s("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"}),s("span",{"aria-hidden":"true"})])],-1)),ls={id:"navbarBasicExample",class:"navbar-menu"},is={class:"navbar-start"},cs=O(()=>s("h1",{class:"title"},"AskYourTask",-1)),ds={class:"navbar-end"},rs={class:"navbar-item"},us={class:"buttons"},_s={key:0,class:"fa-solid fa-moon"},ms={key:1,class:"fa-solid fa-sun"},vs={__name:"Navbar",props:{task:Object},setup(n){const e=B(),o=U(),l=Y(),t=p({message:"",type:"",isShow:!1}),i=p(!1),a=p({message:"\xBFQuieres salir de la aplicaci\xF3n?",isShow:!1}),_=()=>{a.value.isShow=!a.value.isShow,console.log(a.value.isShow)},m=async()=>{a.value.isShow=!a.value.isShow,await H()===!1?(t.value.message="Ha habido un error intentelo de nuevo m\xE1s tarde",t.value.type="is-danger",t.value.isShow=!0):(t.value.message="\xA1Hasta pronto!",t.value.type="is-success",t.value.isShow=!0,e.logout(),setTimeout(()=>{l.push({name:"login"})},1e3))},w=()=>{i.value=!i.value,o.isTheme=!o.isTheme,o.loadTheme()};return(b,f)=>{const g=q("router-link");return c(),d("div",null,[s("nav",os,[ns,s("div",ls,[s("div",is,[k(g,{to:{name:"home"},class:"navbar-item"},{default:z(()=>[cs]),_:1})]),s("div",ds,[s("div",rs,[s("div",us,[s("button",{onClick:w,class:"button"},[i.value?h("",!0):(c(),d("i",_s)),i.value?(c(),d("i",ms)):h("",!0)]),s("button",{onClick:_,class:"button is-danger"},"Log Out")])])])]),k(V,{onYes:m,onNo:_,modal:a.value},null,8,["modal"]),t.value.isShow?(c(),G(es,{key:0,class:"abs",message:t.value.message,type:t.value.type},null,8,["message","type"])):h("",!0)])])}}},ps=S(vs,[["__scopeId","data-v-30d20d53"]]),ks={},fs={class:"footer"},hs=s("div",{class:"content has-text-centered"},[s("p",null,[s("strong",null,"AskYourTask"),I(" by "),s("a",{href:""},"Alba Garcia Gonzalez"),I(". ")])],-1),bs=[hs];function gs(n,e){return c(),d("footer",fs,bs)}const ys=S(ks,[["render",gs]]);const j=n=>(M("data-v-322b53c0"),n=n(),N(),n),Ts={class:"modal is-active"},ws={class:"modal-card"},$s={class:"modal-card-body"},Ss={class:"card-content"},Cs=j(()=>s("label",{class:"modal-label",for:""},"Task name",-1)),Ds={class:"card-content"},xs=j(()=>s("label",{class:"modal-label",for:""},"Task description",-1)),Es={__name:"Modaledit",props:{modal:Object,taskEdited:Object},emits:["done","cancel"],setup(n,{emit:e}){const o=n,l=()=>{e("done")},t=()=>{e("cancel")};return(i,a)=>(c(),d("div",Ts,[s("div",{onClick:a[0]||(a[0]=(..._)=>i.onNo&&i.onNo(..._)),class:"modal-background"}),s("div",ws,[s("header",{class:"modal-card-head"},[s("button",{onClick:t,class:"delete","aria-label":"close"})]),s("section",$s,[s("header",Ss,[Cs,D(s("input",{"onUpdate:modelValue":a[1]||(a[1]=_=>o.taskEdited.title=_),class:"input is-success"},null,512),[[x,o.taskEdited.title]])]),s("div",Ds,[xs,D(s("textarea",{"onUpdate:modelValue":a[2]||(a[2]=_=>o.taskEdited.description=_),class:"input is-success",type:"text",placeholder:"Task"}," ",512),[[x,o.taskEdited.description]])])]),s("footer",{class:"modal-card-foot"},[s("button",{onClick:l,class:"button is-success"},"Done"),s("button",{onClick:t,class:"button is-danger"},"Cancel")])])]))}},Ms=S(Es,[["__scopeId","data-v-322b53c0"]]),Ns=n=>{const e=Math.floor(n/1e3),o=Math.floor(e/60),l=Math.floor(o/60),t=Math.floor(l/24);return{seconds:e,minutes:o,hours:l,days:t}},Is=n=>{let e=Math.floor(new Date(n)-new Date);e>0&&(e=0);const{seconds:o,minutes:l,hours:t,days:i}=Ns(e),a=new Intl.RelativeTimeFormat("en-EN",{numeric:"auto"});return o>-60?a.format(o,"seconds"):l>-60?a.format(l,"minutes"):t>-24?a.format(t,"hours"):a.format(i,"days")};const Bs={class:"card-header-title"},As={class:"card-content"},Vs={class:"time",datetime:"2016-1-1"},Os={key:0,class:"card-footer"},js={key:1,class:"card-footer"},Fs={key:1},Us={__name:"Task",props:{task:Object},setup(n){const e=n,o=A(),l=p(!1),t=p(!1),i=p({message:"\xBFEst\xE1s seguro?",isShow:!1}),a=p({title:e.task.title,description:e.task.description,isDone:!1});console.log("valor taskstore",o.tasks);const _=Is(e.task.created_at),m=()=>{i.value.isShow=!i.value.isShow,console.log(i.value.isShow)},w=async()=>{i.value.isShow=!i.value.isShow,o.deleteTask(e.task.id),await R(e.task.id)},b=()=>{l.value=!0},f=async()=>{l.value=!1,a.value.title=e.task.title,a.value.description=e.task.description},g=async()=>{l.value=!1,await L(e.task.id,a.value),o.updateTask(e.task.id,a.value)},C=async()=>{a.value.isDone=!a.value.isDone,t.value=!t.value,await Q(e.task.id,a.value.isDone),o.updateTask(e.task.id,a.value),console.log("valor",e.task.id,a.value)};return(u,r)=>l.value?(c(),d("div",Fs,[k(Ms,{onDone:g,onCancel:f,modal:i.value,taskEdited:a.value},null,8,["modal","taskEdited"])])):(c(),d("div",{key:0,class:$(["card",e.task.isDone?"is-done ":""])},[s("header",{class:$(["card-header",e.task.isDone?" text-done":""])},[s("p",Bs," Task: "+T(e.task.title),1)],2),s("div",As,[s("div",{class:$(["content br",e.task.isDone?" text-done":""])},T(e.task.description),3),s("div",null,[s("time",Vs,T(y(_)),1)])]),e.task.isDone?h("",!0):(c(),d("footer",Os,[s("i",{onClick:C,class:"fa-solid fa-square-check card-footer-item"}),s("i",{onClick:b,class:"fa-regular fa-pen-to-square card-footer-item"}),s("i",{onClick:m,class:"fa-solid fa-trash card-footer-item"})])),e.task.isDone?(c(),d("footer",js,[s("i",{onClick:C,class:"fa-solid fa-rotate-right card-footer-item"}),s("i",{onClick:m,class:"fa-solid fa-trash card-footer-item"})])):h("",!0),k(V,{onYes:w,onNo:m,modal:i.value},null,8,["modal"])],2))}},Ys=S(Us,[["__scopeId","data-v-06f12486"]]);const F=n=>(M("data-v-b0c5d484"),n=n(),N(),n),qs={class:"section wholepage"},zs=["value","max"],Gs={key:0,class:"mb-2"},Hs={key:1,class:"mb-2"},Rs={class:"p-2"},Ls=F(()=>s("label",{for:""},"Task name",-1)),Qs={class:"p-2"},Js=F(()=>s("label",{for:""},"Task",-1)),Ks={class:"columns is-multiline is-mobile"},Ps={__name:"Addtask",setup(n){const e=B(),o=A(),l=p(!1),t=p({user_id:e.id,title:"",description:""}),i=p(!1),a=()=>{l.value=!0},_=()=>{l.value=!1},m=p(2),w=E(()=>{if(m.value===0)return o.tasks.filter(u=>u.isDone===!1);if(m.value===1)return o.tasks.filter(u=>u.isDone===!0);if(m.value===2)return o.tasks}),b=E(()=>o.tasks.length),f=E(()=>o.tasks.filter(r=>r.isDone===!0).length);J(()=>f.value,u=>{console.log("watch",f.value),i.value=!i.value});const g=async()=>{const u=await Z();return o.setTask(u),console.log(u),u},C=async()=>{l.value=!1,console.log(t.value.description),await ss(t.value),await g(),t.value.description="",t.value.title=""};return K(async()=>{await g()}),(u,r)=>(c(),d("div",qs,[s("button",{onClick:a,class:"button is-success"},"Add new task"),s("div",null,[s("progress",{class:"progress mt-2 mb-2",value:y(f),max:y(b)},null,8,zs)]),s("div",{class:$(["animate__animated animate__faster",i.value?"animate__bounceInDown":" animate__bounceInUp"])},T(y(f))+"/"+T(y(b)),3),l.value?h("",!0):(c(),d("div",Gs,[s("button",{onClick:r[0]||(r[0]=v=>m.value=0),class:"button mr-2"},"To do"),s("button",{onClick:r[1]||(r[1]=v=>m.value=1),class:"button mr-2"},"Done"),s("button",{onClick:r[2]||(r[2]=v=>m.value=2),class:"button"},"All")])),l.value?(c(),d("div",Hs,[s("form",{onSubmit:r[5]||(r[5]=P((...v)=>u.onSubmit&&u.onSubmit(...v),["prevent"]))},[s("div",Rs,[Ls,D(s("input",{"onUpdate:modelValue":r[3]||(r[3]=v=>t.value.title=v),class:"input is-success",type:"text",placeholder:"Task name"},null,512),[[x,t.value.title]])]),s("div",Qs,[Js,D(s("textarea",{"onUpdate:modelValue":r[4]||(r[4]=v=>t.value.description=v),class:"input is-success",type:"text",placeholder:"Task"}," ",512),[[x,t.value.description]])]),s("button",{onClick:C,class:"button is-success",type:"submit"},"Done"),s("button",{onClick:_,class:"button is-danger ml-2",type:"submit"},"Cancel")],32)])):h("",!0),s("div",Ks,[(c(!0),d(W,null,X(y(w),v=>(c(),d("div",{class:"column is-3-desktop is-6-tablet is-12-mobile",key:v.id},[k(Ys,{task:v},null,8,["task"])]))),128))])]))}},Ws=S(Ps,[["__scopeId","data-v-b0c5d484"]]),ee={__name:"Home",setup(n){return(e,o)=>(c(),d("div",null,[k(ps),k(Ws),k(ys)]))}};export{ee as default};
