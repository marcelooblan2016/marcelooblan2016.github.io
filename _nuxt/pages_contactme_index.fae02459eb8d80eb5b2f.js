webpackJsonp([6],{"8V4N":function(t,e,s){"use strict";e.a={WEBSITE_NAME:"Marcelo Oblan III",WEBSITE_URL:"http://localhost/marxoblan5/"}},EIDg:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",["partial"==this.type?e("div",[e("section",{staticClass:"content-section bg-primary text-white"},[e("div",{staticClass:"container text-center"},[e("h2",{staticClass:"mb-4"},[this._v("Need some help? Contact Me")]),e("nuxt-link",{staticClass:"btn btn-light btn-xl js-scroll-trigger",attrs:{to:"/contactme"}},[e("span",{staticClass:"fa fa-gg"}),this._v("\n                            Contact Me\n                    ")])],1)])]):"call-to-action"==this.type?e("div",[e("div",{staticStyle:{"text-align":"right",padding:"10px"}},[e("nuxt-link",{staticClass:"btn btn-dark btn-xl js-scroll-trigger",attrs:{to:"/contactme"}},[this._v("\n                Need some help? Contact Me\n           ")])],1)]):e("div",[this._m(0)])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content-section bg-light",attrs:{id:"contact"}},[e("div",{staticClass:"container text-center"},[e("div",{staticClass:"content-section-heading text-center"},[e("h3",{staticClass:"text-secondary mb-0"},[this._v("Get in touch.")]),e("h2",{staticClass:"mb-5"},[this._v("Contact Details")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("p",[this._v("\n                            Github does not allow me to have a backend process in the website so as an alternative see the other ways to contact me, See below.\n                        ")])]),e("div",{staticClass:"col-md-12"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"qr-holder"},[e("div",{staticClass:"qr-code email"}),this._v("\n                                    Email Address: \n                                    "),e("a",{attrs:{target:"_blank",href:"mailto:marcelo.oblan2016@gmail.com"}},[this._v("marcelo.oblan2016@gmail.com")])])]),e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"qr-holder"},[e("div",{staticClass:"qr-code fb"}),this._v("\n                                    Facebook Account: \n                                    "),e("a",{attrs:{target:"_blank",href:"https://web.facebook.com/Mr.AllTimeHigh"}},[this._v("Marx Oblan")])])])])])])])])}]};e.a=i},ML3e:function(t,e,s){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("contact-me")};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},RL1z:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("h+kn"),i=s("ML3e"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="pages/contactme/index.vue",e.default=n.exports},UXGt:function(t,e,s){"use strict";var a=s("Zpys"),i=s("EIDg"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="components/sections/ContactMe.vue",e.a=n.exports},Zpys:function(t,e,s){"use strict";e.a={props:["type"],created:function(){console.log("Contact ME Component LOADED")}}},"h+kn":function(t,e,s){"use strict";var a=s("8V4N"),i=s("UXGt");e.a={data:function(){return{title:"Contact Me"}},components:{ContactMe:i.a},created:function(){this.title+=" | "+a.a.WEBSITE_NAME,this.welcomex()},methods:{welcomex:function(){console.log("Contact Me Page")}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Need some help? Contact me :)"}]}}}}});