import{i as P,j as w,k as g,l as O,m as I,q as f,_ as B,u as L,s as j,c,a as r,F as p,r as b,o as i,b as k,t as _,v,x as h}from"./entry.b20c72aa.js";import{g as C}from"./global.1522e115.js";var D=Object.defineProperty,S=Object.defineProperties,$=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,y=(e,t,s)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,M=(e,t)=>{for(var s in t||(t={}))E.call(t,s)&&y(e,s,t[s]);if(x)for(var s of x(t))H.call(t,s)&&y(e,s,t[s]);return e},T=(e,t)=>S(e,$(t)),z={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:s,emit:d}){const o=P(null),n=w({observer:null,intersected:!1,loaded:!1}),m=g(()=>n.intersected&&e.src?e.src:e.srcPlaceholder),a=g(()=>n.intersected&&e.srcset?e.srcset:!1),u=()=>{o.value&&o.value.getAttribute("src")!==e.srcPlaceholder&&(n.loaded=!0,d("load",o.value))},A=()=>d("error",o.value);return O(()=>{"IntersectionObserver"in window&&(n.observer=new IntersectionObserver(l=>{l[0].isIntersecting&&(n.intersected=!0,n.observer.disconnect(),d("intersect"))},e.intersectionOptions),n.observer.observe(o.value))}),I(()=>{"IntersectionObserver"in window&&n.observer&&n.observer.disconnect()}),()=>{const l=f("img",T(M({ref:o,src:m.value,srcset:a.value||null},t),{class:[t.class,"v-lazy-image",{"v-lazy-image-loaded":n.loaded}],onLoad:u,onError:A}));return e.usePicture?f("picture",{ref:o,onLoad:u},n.intersected?[s.default,l]:[l]):l}}};const F={components:{VLazyImage:z},mixins:[C],setup(){return L({title:"Porfolio | Marcelo Oblan"}),{}}},V={class:"mt-[3em]"},N={class:"mb-[2em] w-full"},q={class:"flex sm:h-auto"},R={class:"m-auto w-full"},G=r("h1",{class:"text-4xl text-center font-normal leading-normal mb-2 mt-[3rem] md:mt-[3rem]"},[r("span",{class:"title-font text-gray-500"},"Portfolio"),r("span",{class:"fa fa-star-o align-middle mx-3"})],-1),Q=r("hr",{class:"my-2 h-px border-dashed border-2 border-slate-300"},null,-1),U={class:"grid grid-cols-1 md:grid-cols-2 gap-5"},J={class:"p-5 min-h-[100px] bg-[rgba(255,255,255,0.6)] border border-2 border-gray-100] border-3 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] text-center"},K={class:"p-6 w-full bg-[rgba(255,255,255,0)] rounded-lg my-1"},W={class:"my-2"},X=["textContent"],Y=r("hr",{class:"w-[20%] border-gray-300 mx-auto mb-1"},null,-1),Z={class:"text-md text-gray-500"},ee=["href","innerHTML"],te=["innerHTML"],re=["textContent"],se=["textContent"];function ne(e,t,s,d,o,n){const m=j("v-lazy-image");return i(),c("div",V,[r("div",N,[r("div",q,[r("div",R,[G,Q,r("div",U,[(i(!0),c(p,null,b(e.portfolios,a=>(i(),c("div",J,[r("div",K,[r("div",null,[r("div",W,[k(m,{draggable:"false",class:"object-contain h-auto w-full p-1 bg-gray-600 border border-1 border-gray-300 rounded min-h-[250px] md:min-h-[300px]",src:`/images/portfolio/${e.frontPhoto(a.photos)}`},null,8,["src"])]),r("h2",{class:"text-2xl text-center font-normal leading-normal mt-0",textContent:_(a.title)},null,8,X),Y,v(r("div",Z,[r("a",{href:a.url,target:"_blank",class:"break-all",innerHTML:`<span class='fa fa-link align-middle'></span> ${a.url}`},null,8,ee)],512),[[h,a.url!=null]]),v(r("p",{class:"mb-3 text-sm font-normal text-center",innerHTML:`<span class='fa fa-hourglass-start'></span> ${e.getPortfolioDateFromAndTo(a)}`},null,8,te),[[h,e.getPortfolioDateFromAndTo(a)!=null]]),r("p",{class:"mb-3 font-normal",textContent:_(a.description)},null,8,re),(i(!0),c(p,null,b(a.tech_used,u=>(i(),c("span",{class:"bg-gray-100 inline-block text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 border border-1",textContent:_(u)},null,8,se))),256))])])]))),256))])])])])])}const ce=B(F,[["render",ne]]);export{ce as default};
