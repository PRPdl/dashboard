(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bb2bc7bc","chunk-1cdedfcc":"79830ef3","chunk-ebf2222e":"e94b9432"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-1cdedfcc":1,"chunk-ebf2222e":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"d06ed787","chunk-1cdedfcc":"9cd66b1a","chunk-ebf2222e":"a5663751"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09e0":function(t,e,a){},"1c17":function(t,e,a){},"2b56":function(t,e,a){"use strict";a("09e0")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",{staticClass:"mx-4 mb-4 grey lighten-4"},[a("router-view")],1)],1)},s=[],o={components:{},name:"app",data:function(){return{}}},i=o,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("f6c4"),m=Object(c["a"])(i,n,s,!1,null,"27b1cbd8",null),f=m.exports;u()(m,{VApp:d["a"],VMain:p["a"]});a("b0c0"),a("d3b7");var v=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg4:""}},[a("v-snackbar",{attrs:{color:"success",timeout:"4000",top:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({attrs:{color:"purple",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackMessage)+" ")]),a("v-card",{staticClass:"text-center",attrs:{"max-width":""}},[a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[t._v(" Login ")]),a("v-card-subtitle",[t._v(" Get a "),a("a",{staticClass:"text-decoration-none",attrs:{href:"/register"}},[t._v("New Account")])]),a("v-form",{ref:"loginForm",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("v-card-subtitle",{directives:[{name:"show",rawName:"v-show",value:t.loginError,expression:"loginError"}],ref:"error",staticClass:"red--text"},[t._v(t._s(t.loginError))]),a("v-text-field",{staticClass:"px-16",attrs:{name:"email",label:"Email",id:"email",placeholder:" ",rules:t.emailRules,"prepend-icon":"mdi-account-circle"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{ref:"passwordField",staticClass:"px-16",attrs:{name:"password",placeholder:" ",rules:t.passwordRules,type:t.showPassword?"text":"password",label:"Enter your password",hint:"At least 8 characters",min:"8","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{attrs:{color:"primary",disabled:!t.isValid,loading:t.loginLoading},on:{click:t.login}},[t._v("Login")])],1),a("v-card-subtitle",[t._v(" Reset Password "),a("a",{staticClass:"text-decoration-none",attrs:{href:"/reset"}},[t._v("here")])])],1)],1)],1)},b=[],g=a("9138"),w=(a("96cf"),a("1da1")),x=(a("af87"),a("2f62")),y=a("0e44");r["a"].use(x["a"]);var _=new x["a"].Store({state:{userProfile:[],info:{},snackbar:!1},getters:{},actions:{register:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.dispatch,a.next=3,g["a"].auth.createUserWithEmailAndPassword(e.email,e.password);case 3:return r=a.sent,n=r.user,a.next=7,g["a"].db.collection("users").doc(n.uid).set({name:e.name,email:e.email}).catch((function(t){console.log(t.message)}));case 7:At.push("/login");case 8:case"end":return a.stop()}}),a)})))()},login:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.dispatch,a.next=3,g["a"].auth.signInWithEmailAndPassword(e.email,e.password);case 3:n=a.sent,s=n.user,r("fetchUserProfile",s);case 6:case"end":return a.stop()}}),a)})))()},fetchUserProfile:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.commit,a.next=3,g["a"].db.collection("users").doc(e.uid).get();case 3:n=a.sent,r("setUserProfile",n.data()),"/login"===At.currentRoute.path&&At.push("/");case 6:case"end":return a.stop()}}),a)})))()},logout:function(t){return Object(w["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,g["a"].auth.signOut();case 3:a("setUserProfile",{}),At.push("/login");case 5:case"end":return e.stop()}}),e)})))()}},mutations:{setUserProfile:function(t,e){t.userProfile=e}},modules:{},plugins:[Object(y["a"])()]}),k={name:"login",data:function(){return{snackbar:_.state.snackbar,snackMessage:"Reset link sent to your email.",email:"",password:"",loginLoading:!1,loginError:"",showPassword:!1,isValid:!0,passwordRules:[function(t){return!t||t.length>=8||"Minimum 8 characters required."}],emailRules:[function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},methods:{login:function(){var t=this;this.email&&this.password?(this.loginLoading=!0,this.$store.dispatch("login",{email:this.email,password:this.password}).catch((function(e){console.log(e.code+e.message),t.loginError=e.message,t.loginLoading=!1}))):(this.loginError="Please enter your correct details.",this.loginLoading=!1)},sentReset:function(t){console.log(t)}},mounted:function(){this.$root.$on("sentreset",(function(t){console.log(t)})),console.log()}},C=k,V=(a("642e"),a("8336")),j=a("b0af"),P=a("99d9"),E=a("0e8f"),S=a("4bd4"),O=a("a722"),R=a("2db4"),T=a("8654"),L=Object(c["a"])(C,h,b,!1,null,"7ff25a5a",null),A=L.exports;u()(L,{VBtn:V["a"],VCard:j["a"],VCardSubtitle:P["b"],VCardTitle:P["d"],VFlex:E["a"],VForm:S["a"],VLayout:O["a"],VSnackbar:R["a"],VTextField:T["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg4:""}},[a("v-card",{staticClass:"text-center",attrs:{"max-width":""}},[a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[t._v(" Register A New Account ")]),a("v-card-subtitle",[t._v(" Already Have an Account? "),a("a",{staticClass:"text-decoration-none",attrs:{href:"/login"}},[t._v("Login")])]),a("v-form",{ref:"loginForm",model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("v-card-subtitle",{directives:[{name:"show",rawName:"v-show",value:t.loginError,expression:"loginError"}],ref:"error",staticClass:"red--text"},[t._v(t._s(t.loginError))]),a("v-text-field",{staticClass:"px-16",attrs:{name:"name",label:"Name",id:"name",rules:t.nameRules,"prepend-icon":"mdi-account-circle"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{staticClass:"px-16",attrs:{name:"email",label:"Email",id:"email",autocomplete:"new-email",rules:t.emailRules,"prepend-icon":"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{ref:"passwordField",staticClass:"px-16",attrs:{name:"password",type:"password",autocomplete:"new-password",rules:t.passwordRules,label:"Enter your new password",hint:"At least 8 characters",min:"8","prepend-icon":"mdi-lock"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{ref:"passwordField",staticClass:"px-16",attrs:{name:"password",type:"password",autocomplete:"new-password",rules:t.passwordConfirmRules,label:"Confirm your password",hint:"At least 8 characters",min:"8","prepend-icon":"mdi-lock"},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}}),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.isValid,loading:t.resetLoading},on:{click:t.register}},[t._v("Register")])],1),a("v-card-subtitle",[t._v(" Need to contact Us? "),a("a",{staticClass:"text-decoration-none",attrs:{href:"/register"}},[t._v("Contact")])])],1)],1)],1)},I=[],N={data:function(){var t=this;return{name:"",password:"",passwordConfirm:"",isValid:!1,loginError:"",email:"",resetLoading:!1,nameRules:[function(t){return!!t&&t.length>=3||"Mimimum 3 characters"}],passwordRules:[function(t){return!!t||"Please type password."},function(t){return!!t&&t.length>=8||"Minimum 8 characters"}],passwordConfirmRules:[function(t){return!!t||"Type confirm password"},function(e){return e===t.password||"The password confirmation does not match."}],emailRules:[function(t){return!!t&&/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}},methods:{register:function(t){t.preventDefault(),this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password}).catch((function(t){console.log(t.message)}))}}},F=N,$=(a("989f"),Object(c["a"])(F,B,I,!1,null,"1b871a7c",null)),D=$.exports;u()($,{VBtn:V["a"],VCard:j["a"],VCardSubtitle:P["b"],VCardTitle:P["d"],VFlex:E["a"],VForm:S["a"],VLayout:O["a"],VTextField:T["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),a("v-container",{directives:[{name:"show",rawName:"v-show",value:t.dashboard,expression:"dashboard"}],staticClass:"my-5"},[a("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}}},r),[a("v-icon",{attrs:{small:"",left:""}},[t._v("folder")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By project name")])],1)]}}])},[a("span",[t._v("By Project Name")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("person")}}},r),[a("v-icon",{attrs:{small:"",left:""}},[t._v("person")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By person name")])],1)]}}])},[a("span",[t._v("By Person Name")])])],1),t._l(t.projects,(function(e){return a("v-card",{key:e.id,attrs:{elevation:"1"}},[a("v-layout",{class:"project "+e.status+" mt-2",attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card-title",{staticClass:"grey--text body-2"},[t._v(" Title ")]),a("v-card-subtitle",[t._v(" "+t._s(e.title)+" ")])],1),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("v-card-title",{staticClass:"grey--text body-2"},[t._v(" Assigned To ")]),a("v-card-subtitle",[t._v(" "+t._s(e.person)+" ")])],1),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("v-card-title",{staticClass:"grey--text body-2"},[t._v(" Due By ")]),a("v-card-subtitle",[t._v(" "+t._s(e.due)+" ")])],1),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("v-card-subtitle",{staticClass:"d-sm-flex justify-end mr-5"},[a("v-chip",{class:e.status+" white--text caption my-2",attrs:{id:"chipContainer",small:""}},[t._v(" "+t._s(e.status)+" ")])],1)],1)],1)],1)}))],2)],1)},U=[],q=(a("4160"),a("159b"),a("5530")),z={data:function(){return{projects:[]}},methods:{project_status:function(t){return"complete"===t?"rgb(42, 112, 218)":"ongoing"===t?"orange":"rgb(238, 41, 6)"},sortBy:function(t){this.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))}},computed:{dashboard:function(){return this.projects.length>0}},created:function(){var t=this;g["a"].db.collection("projects").onSnapshot((function(e){var a=e.docChanges();a.forEach((function(e){"added"===e.type&&t.projects.push(Object(q["a"])(Object(q["a"])({},e.doc.data()),{},{id:e.doc.id}))}))}))}},H=z,K=(a("2b56"),a("cc20")),W=a("a523"),G=a("132d"),J=a("3a2f"),Z=Object(c["a"])(H,M,U,!1,null,null,null),Q=Z.exports;u()(Z,{VBtn:V["a"],VCard:j["a"],VCardSubtitle:P["b"],VCardTitle:P["d"],VChip:K["a"],VContainer:W["a"],VFlex:E["a"],VIcon:G["a"],VLayout:O["a"],VTooltip:J["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("navbar"),a("router-view")],1)},Y=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-snackbar",{attrs:{color:"success",timeout:"4000",top:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({attrs:{color:"purple",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackMessage)+" ")]),a("v-app-bar",{attrs:{flat:"",app:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[a("v-app-bar-nav-icon",{attrs:{color:"red"},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase red--text"},[a("span",{staticClass:"font-weight-bold"},[t._v("TOdo:")]),a("span",[t._v(" "+t._s(t.loggedInUser.split(" ")[0]))])]),a("v-spacer"),a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"red--text",attrs:{text:"",color:"gery"}},r),[a("v-icon",{attrs:{left:""}},[t._v("expand_more")]),a("span",[t._v("Menu")])],1)]}}])},[a("v-list",{staticClass:"ml-0"},t._l(t.links,(function(e){return a("v-list-item",{key:e.id,attrs:{color:"primary",router:"",to:e.route}},[a("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(e.text))])],1)})),1)],1)],1),this.loggedin?a("v-btn",{attrs:{text:"",color:"red"},on:{click:t.logout}},[a("span",[t._v("Sign Out")]),a("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1):t._e()],1),a("v-navigation-drawer",{attrs:{app:"","hide-overlay":"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"100"},on:{click:t.profile}},[a("img",{attrs:{src:"/avatar1.png"}})]),a("p",{staticClass:"d-flex justify-center white--text"},[t._v(t._s(t.loggedInUser))])],1),a("v-flex",{attrs:{"mt-4":"","mb-3":""}},[a("popup",{on:{projectAdded:function(e){t.snackbar=!0,t.drawer=!1}}})],1)],1),a("v-list",t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-action",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"",overlay:!1,"max-width":"500px",transition:"dialog-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"white--text",attrs:{color:"#00897B"},on:{click:function(e){t.dialog=!0}}},"v-btn",n,!1),r),[t._v("Add New Project")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" New Project ")]),a("v-card-text",[a("v-form",{ref:"projectForm",staticClass:"px-3"},[a("v-text-field",{attrs:{name:"name",label:"Title",id:"title","prepend-icon":"folder",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{label:"Information",name:"information",textarea:"","prepend-icon":"edit",rules:t.inputRules},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{value:t.formattedDate,label:"Pick a due date.","prepend-icon":"mdi-calendar",readonly:"",rules:t.inputRules}},"v-text-field",n,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",min:t.today},on:{input:function(e){t.menu=!1}},model:{value:t.due,callback:function(e){t.due=e},expression:"due"}})],1),a("v-btn",{attrs:{text:"",color:"primary",loading:t.updateLoader},on:{click:t.submit}},[t._v("Submit")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.cancle}},[t._v("Cancle")])],1)],1)],1)],1)},rt=[],nt={data:function(){return{dialog:!1,title:"",content:"",menu:!1,due:(new Date).toISOString().substr(0,10),today:(new Date).toISOString().substr(0,10),updateLoader:!1,inputRules:[function(t){return t&&t.length>=5||"Minimum of 5 characters required."}]}},methods:{submit:function(t){var e=this;if(this.$refs.projectForm.validate()){this.updateLoader=!0;var a={title:this.title,content:this.content,due:this.due,person:this.$store.state.userProfile.name,status:"ongoing"};g["a"].db.collection("projects").add(a).then((function(){e.updateLoader=!1,e.dialog=!1,e.$emit("projectAdded")})).catch((function(t){console.log(t.message)})),this.$refs.projectForm.reset()}this.updateLoader=!1,t.preventDefault()},cancle:function(t){this.dialog=!1,this.$refs.projectForm.reset(),t.preventDefault()}},computed:{formattedDate:function(){return this.due?new Date(this.due).toUTCString().substring(5,16):""}}},st=nt,ot=a("2e4b"),it=a("169a"),ct=a("e449"),lt=a("a844"),ut=Object(c["a"])(st,at,rt,!1,null,null,null),dt=ut.exports;u()(ut,{VBtn:V["a"],VCard:j["a"],VCardText:P["c"],VCardTitle:P["d"],VDatePicker:ot["a"],VDialog:it["a"],VForm:S["a"],VMenu:ct["a"],VTextField:T["a"],VTextarea:lt["a"]});var pt={components:{Popup:dt},data:function(){return{loggedInUser:_.state.userProfile.name,loggedin:_.state.userProfile,drawer:!1,snackbar:!1,snackMessage:"New Project added.",links:[{icon:"dashboard",text:"Dashboard",route:"/dashboard"},{icon:"folder",text:"My Project",route:"/project"},{icon:"person",text:"Team",route:"/team"}]}},methods:{logout:function(){this.$store.dispatch("logout")},profile:function(){}}},mt=pt,ft=(a("cf03"),a("40dc")),vt=a("5bc1"),ht=a("8212"),bt=a("8860"),gt=a("da13"),wt=a("1800"),xt=a("5d23"),yt=a("f774"),_t=a("2fa4"),kt=a("2a7f"),Ct=Object(c["a"])(mt,tt,et,!1,null,"31d8c1ac",null),Vt=Ct.exports;u()(Ct,{VAppBar:ft["a"],VAppBarNavIcon:vt["a"],VAvatar:ht["a"],VBtn:V["a"],VFlex:E["a"],VIcon:G["a"],VLayout:O["a"],VList:bt["a"],VListItem:gt["a"],VListItemAction:wt["a"],VListItemContent:xt["a"],VListItemTitle:xt["b"],VMenu:ct["a"],VNavigationDrawer:yt["a"],VSnackbar:R["a"],VSpacer:_t["a"],VToolbarTitle:kt["a"]});var jt={components:{Navbar:Vt},data:function(){return{dialog:!1}},methods:{}},Pt=jt,Et=Object(c["a"])(Pt,X,Y,!1,null,null,null),St=Et.exports;r["a"].use(v["a"]);var Ot="history",Rt=[{path:"/login",name:"login",component:A},{path:"/register",name:"register",component:D},{path:"/reset",name:"reset",component:function(){return a.e("chunk-1cdedfcc").then(a.bind(null,"50a3"))}},{path:"/test",name:"test",component:function(){return a.e("chunk-ebf2222e").then(a.bind(null,"2762"))}},{path:"/",redirect:"/dashboard",name:"home",component:St,beforeEnter:function(t,e,a){return Tt()?a():a({name:"login"})},children:[{path:"dashboard",name:"dashboard",component:Q},{path:"project",name:"Project",component:function(){return a.e("about").then(a.bind(null,"07bd"))}},{path:"team",name:"Team",component:function(){return a.e("about").then(a.bind(null,"0767"))}}]},{path:"*",name:"err404",component:function(){return a.e("about").then(a.bind(null,"6163"))}}];function Tt(){return!!_.state.userProfile.name}var Lt=new v["a"]({mode:Ot,routes:Rt}),At=Lt,Bt=a("f309");r["a"].use(Bt["a"]);var It,Nt=new Bt["a"]({});a("d1e78");r["a"].config.productionTip=!1,g["a"].auth.onAuthStateChanged((function(t){It||(It=new r["a"]({router:At,store:_,vuetify:Nt,render:function(t){return t(f)}}).$mount("#app"))}))},"642e":function(t,e,a){"use strict";a("a7fc")},9138:function(t,e,a){"use strict";var r=a("260b"),n=(a("e71f"),a("ea7b"),{apiKey:"AIzaSyAZ2-N_NHFlrBSpm24zt7miCeyT08Iy6pc",authDomain:"todo-pradip.firebaseapp.com",databaseURL:"https://todo-pradip.firebaseio.com",projectId:"todo-pradip",storageBucket:"todo-pradip.appspot.com",messagingSenderId:"1007719990363",appId:"1:1007719990363:web:ddf49fac4d5dc0d8516b7e",measurementId:"G-H0K3P8WB90"});r["a"].initializeApp(n);var s=r["a"].firestore(),o=r["a"].auth();s.settings({timestampsInSnapshots:!0}),e["a"]={db:s,auth:o}},"989f":function(t,e,a){"use strict";a("1c17")},a7fc:function(t,e,a){},b955:function(t,e,a){},cf03:function(t,e,a){"use strict";a("b955")}});
//# sourceMappingURL=app.6a447e12.js.map