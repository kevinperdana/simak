(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-053e85ad"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),s=a("58df"),r=a("7e2b"),n=a("3206");e["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},6135:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),a("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-identifier")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/variables"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-variable")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" VARIABLES ")])],1)],1):t._e(),a("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-page-layout-header")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),a("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/cache"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-cached")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CACHE ")])],1)],1):t._e(),a("v-subheader",[t._v("PLUGIN")]),t.CAN_ACCESS("PLUGINS-H2H-ZOOMAPI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/system-setting/zoom"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" ZOOM ")])],1)],1):t._e()],1)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),a("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-divider"),a("v-card-text",{staticClass:"py-2 white--text text-center"},[a("strong",[t._v("SIMAK (2021-2020)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),a("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],r=(a("ac1f"),a("5319"),a("5530")),n=a("2f62"),o={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=a("2877"),u=a("6544"),c=a.n(u),v=a("40dc"),m=a("5bc1"),f=a("8212"),h=a("8336"),_=a("b0af"),p=a("99d9"),b=a("ce7e"),A=a("553a"),E=a("132d"),T=a("adda"),S=a("8860"),g=a("da13"),C=a("8270"),I=a("5d23"),y=a("34c3"),k=a("f6c4"),V=a("e449"),N=a("f774"),R=a("2fa4"),O=a("e0c7"),x=a("afd9"),L=a("2a7f"),w=Object(d["a"])(l,i,s,!1,null,null,null);e["a"]=w.exports;c()(w,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:f["a"],VBtn:h["a"],VCard:_["a"],VCardText:p["c"],VDivider:b["a"],VFooter:A["a"],VIcon:E["a"],VImg:T["a"],VList:S["a"],VListItem:g["a"],VListItemAvatar:C["a"],VListItemContent:I["a"],VListItemIcon:y["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:k["a"],VMenu:V["a"],VNavigationDrawer:N["a"],VSpacer:R["a"],VSubheader:O["a"],VSystemBar:x["a"],VToolbarTitle:L["a"]})},b8dd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SystemConfigLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-variable ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" VARIABLES ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Mengatur berbagai macam variable default sistem. Perubahan berlaku pada Login selanjutnya. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[t._v(" PERKULIAHAN DAN PMB ")]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"12",md:"4"}},[a("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN AKADEMIK",outlined:"",rules:t.rule_default_ta},model:{value:t.formdata.default_ta,callback:function(e){t.$set(t.formdata,"default_ta",e)},expression:"formdata.default_ta"}})],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"4"}},[a("v-select",{attrs:{items:t.daftar_semester,"item-text":"text","item-value":"id",label:"SEMESTER AKADEMIK",outlined:"",rules:t.rule_default_semester},model:{value:t.formdata.default_semester,callback:function(e){t.$set(t.formdata,"default_semester",e)},expression:"formdata.default_semester"}})],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"12",md:"4"}},[a("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN PENDAFTARAN",outlined:"",rules:t.rule_tahun_pendaftaran},model:{value:t.formdata.tahun_pendaftaran,callback:function(e){t.$set(t.formdata,"tahun_pendaftaran",e)},expression:"formdata.tahun_pendaftaran"}})],1),t.$vuetify.breakpoint.xsOnly||t.$vuetify.breakpoint.smOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=a("5530"),n=(a("96cf"),a("1da1")),o=a("2f62"),l=a("6135"),d=a("e477"),u={name:"Variables",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"PERGURUAN TINGGI",disabled:!1,href:"#"},{text:"VARIABLES",disabled:!0,href:"#"}],this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.daftar_semester=this.$store.getters["uiadmin/getDaftarSemester"],this.initialize()},data:function(){return{breadcrumbs:[],btnLoading:!1,form_valid:!0,daftar_ta:[],daftar_semester:[],formdata:{default_ta:"",default_semester:"",tahun_pendaftaran:0},rule_default_ta:[function(t){return!!t||"Mohon untuk dipilih Tahun Akademik !!!"}],rule_default_semester:[function(t){return!!t||"Mohon untuk diisi Semester !!!"}],rule_tahun_pendaftaran:[function(t){return!!t||"Mohon untuk dipilih Tahun Pendaftaran !!!"}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data,i=a.setting;e.formdata.default_ta=i.DEFAULT_TA,e.formdata.default_semester=i.DEFAULT_SEMESTER,e.formdata.tahun_pendaftaran=i.DEFAULT_TAHUN_PENDAFTARAN}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"Variable default sistem",setting:JSON.stringify({201:this.formdata.default_ta,202:this.formdata.default_semester,203:this.formdata.tahun_pendaftaran})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:l["a"],ModuleHeader:d["a"]}},c=u,v=a("2877"),m=a("6544"),f=a.n(m),h=a("0798"),_=a("2bc5"),p=a("8336"),b=a("b0af"),A=a("99d9"),E=a("62ad"),T=a("a523"),S=a("4bd4"),g=a("132d"),C=a("6b53"),I=a("0fd9"),y=a("b974"),k=a("2fa4"),V=Object(v["a"])(c,i,s,!1,null,null,null);e["default"]=V.exports;f()(V,{VAlert:h["a"],VBreadcrumbs:_["a"],VBtn:p["a"],VCard:b["a"],VCardActions:A["a"],VCardText:A["c"],VCardTitle:A["d"],VCol:E["a"],VContainer:T["a"],VForm:S["a"],VIcon:g["a"],VResponsive:C["a"],VRow:I["a"],VSelect:y["a"],VSpacer:k["a"]})}}]);