import{_ as y}from"./nuxt-link.c764aec9.js";import{g as v}from"./global.fa016f35.js";import{_ as h,o as t,c as s,a as e,b as c,w as f,t as x,h as g,g as b,n as i,F as u,r as p,d as m,y as k}from"./entry.cf6c62f4.js";const $={mixins:[v],setup(){return{}},data(){return{isOpen:!1}}},O=""+globalThis.__publicAssetsURL("images/favicon.png"),C={class:"w-full bg-[rgba(0,0,0,.8)] md:bg-[rgba(255,255,255,.9)] block px-2 sm:px-4 py-2.5 fixed lg:shadow-md"},M={class:"container flex flex-wrap justify-between items-center mx-auto w-full"},B=e("img",{src:O,class:"mr-3 h-6 sm:h-9",alt:"Marx Logo"},null,-1),L=["textContent"],N=e("span",{class:"sr-only"},"Open main menu",-1),z=e("svg",{class:"w-6 h-6 text-white md:text-black","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),H=[N,z],R={key:1,type:"button",class:"inline-flex items-center p-2 ml-3 text-sm text-white"},V=e("span",{class:"material-symbols-outlined w-6 h-6 text-white"}," close ",-1),F=[V],S={class:"sub-container flex h-screen"},A={class:"m-auto"},D={class:"p-4 md:text-sm md:font-medium md:border-0 text-center menu-options"},T=["href"],j={class:"text-center menu-social"},q={class:"inline p-2"},E=["href","title"];function U(o,l,d,_,n,w){const r=y;return t(),s("header",null,[e("nav",C,[e("div",M,[c(r,{to:o.findMenuBySlug("about").value,class:"flex items-center"},{default:f(()=>[B,e("span",{class:"text-gray-400",textContent:x(o.quote)},null,8,L)]),_:1},8,["to"]),n.isOpen==!1?(t(),s("button",{key:0,"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg","aria-controls":"navbar-default","aria-expanded":"false",onClick:l[0]||(l[0]=g(a=>{n.isOpen=!0},["prevent"]))},H)):b("",!0),n.isOpen==!0?(t(),s("button",R,F)):b("",!0),e("div",{class:i(["w-full block w-auto",{open:n.isOpen==!0,close:n.isOpen==!1}]),id:"navbar-modal-backdrop",onClick:l[1]||(l[1]=g(a=>n.isOpen=!1,["prevent"]))},null,2),e("div",{class:i(["w-full block w-auto shadow-[22px_2px_20px_0px_rgba(0,0,0,1)]",{open:n.isOpen==!0,close:n.isOpen==!1}]),id:"navbar-container"},[e("div",S,[e("div",A,[e("ul",D,[(t(!0),s(u,null,p(o.menu,a=>(t(),s("li",null,[c(r,{onClick:l[2]||(l[2]=le=>n.isOpen=!1),to:a.value,class:"block py-2 pr-4 pl-3 text-gray-800 hover:text-gray-900"},{default:f(()=>[m(x(a.text),1)]),_:2},1032,["to"])]))),256)),e("li",null,[e("a",{target:"_blank",href:o.externalLinks.resume,class:"block py-2 pr-4 pl-3 text-gray-800 hover:text-gray-900","aria-current":"page"},"Download Resume",8,T)])]),e("ul",j,[(t(!0),s(u,null,p(o.footer.social,a=>(t(),s("li",q,[e("a",{href:a.href,target:"_blank",title:a.text},[e("span",{class:i(a.icon)},null,2)],8,E)]))),256))])])])],2)])])])}const G=h($,[["render",U]]),J={mixins:[v],setup(){return{}}},K={class:"text-center mb-[20px]"},P={class:"text-center menu-social mt-[2em]"},Q={class:"inline p-2"},W=["href","title"],X=e("footer",{class:"p-4 text-gray-400 bg-slate-100 border-t-[1px] border-gray-300"},[e("span",{class:"block text-sm text-center"},[m(" © "),e("span",{"x-text":"footer.year"}),m(". All Rights Reserved. ")])],-1);function Y(o,l,d,_,n,w){return t(),s("div",null,[e("div",K,[e("ul",P,[(t(!0),s(u,null,p(o.footer.social,r=>(t(),s("li",Q,[e("a",{href:r.href,target:"_blank",title:r.text,class:"hover:text-gray-400"},[e("span",{class:i(r.icon)},null,2)],8,W)]))),256))])]),X])}const Z=h(J,[["render",Y]]),I={},ee={class:"grid grid-cols-1 lg:grid-cols-5 gap-1"},te=e("div",{class:"hidden lg:flex col-span-1"},null,-1),se={class:"col-span-3 py-4 px-4 min-h-screen"},ne=e("div",{class:"hidden lg:flex col-span-1"},null,-1);function oe(o,l){const d=G,_=Z;return t(),s("div",null,[c(d),e("div",ee,[te,e("div",se,[k(o.$slots,"default")]),ne]),c(_)])}const ce=h(I,[["render",oe]]);export{ce as default};