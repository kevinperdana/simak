(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fbfa622"],{"0bc6":function(t,e,i){},"2c64":function(t,e,i){},"3d86":function(t,e,i){},"43a6":function(t,e,i){"use strict";var a=i("5530"),s=(i("a9e3"),i("ec29"),i("3d86"),i("c37a")),n=i("604c"),o=i("8547"),r=i("58df"),l=Object(r["a"])(o["a"],n["a"],s["a"]);e["a"]=l.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},s["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:n["a"].options.methods.onClick}})},"4bd4":function(t,e,i){"use strict";var a=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),n=i("7e2b"),o=i("3206");e["a"]=Object(s["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,i){"use strict";var a=i("5607"),s=i("2b0e");e["a"]=s["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"553a":function(t,e,i){"use strict";var a=i("5530"),s=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),n=i("3a66"),o=i("d10f"),r=i("58df"),l=i("80d2");e["a"]=Object(r["a"])(s["a"],Object(n["a"])("footer",["height","inset"]),o["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["g"])(t),left:Object(l["g"])(this.computedLeft),right:Object(l["g"])(this.computedRight),bottom:Object(l["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},6135:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),i("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-identifier")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/variables"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-variable")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" VARIABLES ")])],1)],1):t._e(),i("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-page-layout-header")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),i("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTINGp-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/cache"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-cached")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CACHE ")])],1)],1):t._e(),i("v-subheader",[t._v("PLUGIN")]),t.CAN_ACCESS("PLUGINS-H2H-ZOOMAPI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/zoom"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" ZOOM ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-subheader",[t._v("THEMES")]):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/themes/colordashboard"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" WARNA DASHBOARD ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-THEMES_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/themes/layout"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" LAYOUT ")])],1)],1):t._e()],1)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[i("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 white--text text-center"},[i("strong",[t._v("SIMAK (2021-2022)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),i("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],n=i("5530"),o=(i("5319"),i("ac1f"),i("2f62")),r={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])(Object(n["a"])({},Object(o["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"SIMAK v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=r,u=i("2877"),c=i("6544"),d=i.n(c),h=i("40dc"),p=i("5bc1"),m=i("8212"),v=i("8336"),f=i("b0af"),b=i("99d9"),g=i("ce7e"),_=i("553a"),S=i("132d"),A=i("adda"),E=i("8860"),T=i("da13"),C=i("8270"),I=i("5d23"),y=i("34c3"),k=i("f6c4"),N=i("e449"),V=i("f774"),O=i("2fa4"),R=i("e0c7"),B=i("afd9"),$=i("2a7f"),x=Object(u["a"])(l,a,s,!1,null,null,null);e["a"]=x.exports;d()(x,{VAppBar:h["a"],VAppBarNavIcon:p["a"],VAvatar:m["a"],VBtn:v["a"],VCard:f["a"],VCardText:b["c"],VDivider:g["a"],VFooter:_["a"],VIcon:S["a"],VImg:A["a"],VList:E["a"],VListItem:T["a"],VListItemAvatar:C["a"],VListItemContent:I["a"],VListItemIcon:y["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:k["a"],VMenu:N["a"],VNavigationDrawer:V["a"],VSpacer:O["a"],VSubheader:R["a"],VSystemBar:B["a"],VToolbarTitle:$["b"]})},"67b6":function(t,e,i){"use strict";var a=i("5530"),s=(i("b0c0"),i("2c64"),i("ba87")),n=i("9d26"),o=i("c37a"),r=i("7e2b"),l=i("a9ad"),u=i("4e82"),c=i("5311"),d=i("7560"),h=i("fe09"),p=i("80d2"),m=i("58df"),v=i("d9f7"),f=Object(m["a"])(r["a"],l["a"],c["a"],Object(u["a"])("radioGroup"),d["a"]);e["a"]=f.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return h["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return o["a"].options.computed.computedId.call(this)},hasLabel:o["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return h["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return h["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(s["a"],{on:{click:h["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(p["s"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(a["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(v["c"])({click:this.onChange},this.listeners$)};return t("div",e,[this.genRadio(),this.genLabel()])}})},8547:function(t,e,i){"use strict";var a=i("2b0e"),s=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["j"]}}})},a899:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SystemConfigLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-identifier ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" IDENTITAS DIRI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Mengatur halaman informasi dan bentuk perguruan tinggi. Perubahan berlaku pada Login selanjutnya. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-title",[t._v(" PERGURUAN TINGGI ")]),i("v-card-text",[i("v-text-field",{attrs:{label:"NAMA PERGURUAN TINGGI",outlined:"",rules:t.rule_nama_pt},model:{value:t.formdata.nama_pt,callback:function(e){t.$set(t.formdata,"nama_pt",e)},expression:"formdata.nama_pt"}}),i("v-text-field",{attrs:{label:"NAMA SINGKATAN PERGURUAN TINGGI",outlined:"",rules:t.rule_nama_singkatan_pt},model:{value:t.formdata.nama_alias_pt,callback:function(e){t.$set(t.formdata,"nama_alias_pt",e)},expression:"formdata.nama_alias_pt"}}),i("v-radio-group",{attrs:{row:""},model:{value:t.formdata.bentuk_pt,callback:function(e){t.$set(t.formdata,"bentuk_pt",e)},expression:"formdata.bentuk_pt"}},[t._v(" BENTUK PERGURUAN TINGGI : "),i("v-radio",{attrs:{label:"SEKOLAH TINGGI",value:"sekolahtinggi"}}),i("v-radio",{attrs:{label:"UNIVERSITAS",value:"universitas"}})],1),i("v-text-field",{attrs:{label:"KODE PERGURUAN TINGGI (SESUAI FORLAP)",outlined:"",rules:t.rule_kode_pt},model:{value:t.formdata.kode_pt,callback:function(e){t.$set(t.formdata,"kode_pt",e)},expression:"formdata.kode_pt"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],n=i("5530"),o=i("1da1"),r=(i("96cf"),i("2f62")),l=i("6135"),u=i("e477"),c={name:"IdentitasDiri",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"PERGURUAN TINGGI",disabled:!1,href:"#"},{text:"IDENTITAS DIRI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],btnLoading:!1,form_valid:!0,formdata:{nama_pt:"",nama_alias_pt:"",bentuk_pt:"",kode_pt:0},rule_nama_pt:[function(t){return!!t||"Mohon untuk di isi Nama Perguruan Tinggi !!!"}],rule_nama_singkatan_pt:[function(t){return!!t||"Mohon untuk di isi Nama Alias Perguruan Tinggi !!!"}],rule_kode_pt:[function(t){return!!t||"Mohon untuk di isi Kode Perguruan Tinggi !!!"},function(t){return/^[0-9]+$/.test(t)||"Kode Perguruan Tinggi hanya boleh angka"}]}},methods:{initialize:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data,a=i.setting;e.formdata.nama_pt=a.NAMA_PT,e.formdata.nama_alias_pt=a.NAMA_PT_ALIAS,e.formdata.bentuk_pt=a.BENTUK_PT,e.formdata.kode_pt=a.KODE_PT}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"Identitas Perguruan Tinggi",setting:JSON.stringify({101:this.formdata.nama_pt,102:this.formdata.nama_alias_pt,103:this.formdata.bentuk_pt,104:this.formdata.kode_pt})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(n["a"])({},Object(r["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:l["a"],ModuleHeader:u["a"]}},d=c,h=i("2877"),p=i("6544"),m=i.n(p),v=i("0798"),f=i("2bc5"),b=i("8336"),g=i("b0af"),_=i("99d9"),S=i("62ad"),A=i("a523"),E=i("4bd4"),T=i("132d"),C=i("67b6"),I=i("43a6"),y=i("0fd9"),k=i("2fa4"),N=i("8654"),V=Object(h["a"])(d,a,s,!1,null,null,null);e["default"]=V.exports;m()(V,{VAlert:v["a"],VBreadcrumbs:f["a"],VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:S["a"],VContainer:A["a"],VForm:E["a"],VIcon:T["a"],VRadio:C["a"],VRadioGroup:I["a"],VRow:y["a"],VSpacer:k["a"],VTextField:N["a"]})},b5b6:function(t,e,i){},e0c7:function(t,e,i){"use strict";var a=i("5530"),s=(i("0bc6"),i("7560")),n=i("58df");e["a"]=Object(n["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i("d3b7"),i("25f0"),i("4de4");var a=i("c37a"),s=i("5311"),n=i("8547"),o=i("58df");function r(t){t.preventDefault()}e["a"]=Object(o["a"])(a["a"],s["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);