import{d as h,u as w,r as c,e as y,o as r,c as S,a as e,k as p,v as d,h as b,g as x,j as _,f as k,w as V,C as E,p as I,i as L,H as N}from"./file_index.3100ad69.js";import{_ as B}from"./file_Message.3634c436.js";import{_ as C}from"./file__plugin-vue_export-helper.e718e6fb.js";const i=a=>(I("data-v-dfe5600a"),a=a(),L(),a),M={class:"flex"},z=i(()=>e("h1",null,"LOG IN",-1)),P=["onSubmit"],T={class:"p-2"},U=i(()=>e("label",{for:""},"Email",-1)),j={class:"p-2"},A=i(()=>e("label",{for:""},"Password",-1)),D=i(()=>e("button",{class:"button is-success",type:"submit"},"Log in",-1)),G={__name:"Login",setup(a){const m=h(),v=w(),o=c("garciagonzalezalba@gmail.com"),t=c("1234567"),s=c({message:"",type:"",isShow:!1}),f=async()=>{console.log("formulario enviado",o.value,t.value);const l=await N(o.value,t.value);console.log(l),l===!1?(s.value.message="Email incorrecto",s.value.type="is-danger",s.value.isShow=!0):(v.login(o,l),m.push({name:"home"}))};return(l,n)=>{const g=y("router-link");return r(),S("div",M,[z,e("form",{onSubmit:E(f,["prevent"])},[e("div",T,[U,p(e("input",{"onUpdate:modelValue":n[0]||(n[0]=u=>o.value=u),class:"input is-success",type:"email",placeholder:"Email"},null,512),[[d,o.value]])]),e("div",j,[A,p(e("input",{"onUpdate:modelValue":n[1]||(n[1]=u=>t.value=u),class:"input is-success",type:"password",placeholder:"Password"},null,512),[[d,t.value]])]),D,s.value.isShow?(r(),b(B,{key:0,message:s.value.message,type:s.value.type},null,8,["message","type"])):x("",!0),e("div",null,[e("p",null,[_("\xBFEres nuevo? "),k(g,{to:{name:"signin"}},{default:V(()=>[_("Sign in")]),_:1})])])],40,P)])}}},$=C(G,[["__scopeId","data-v-dfe5600a"]]);export{$ as default};
