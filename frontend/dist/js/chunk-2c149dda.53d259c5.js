(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c149dda"],{"0160":function(t,e,i){},"1e06":function(t,e,i){"use strict";i("c96a");var n=i("5530"),a=i("58df"),o=i("9d26"),s=i("7560"),r=i("a9ad"),l=Object(a["a"])(r["a"],s["a"]);e["a"]=l.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(o["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(n["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(n["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}})},"277e":function(t,e,i){"use strict";i("a9e3");var n=i("f977"),a=i("d9bd"),o=i("2b0e");e["a"]=o["a"].extend({name:"scrollable",directives:{Scroll:n["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(a["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fe6c"),a=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"40dc":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var n=i("5530"),a=(i("8b0d"),i("71d9")),o=i("f977"),s=i("3a66"),r=i("277e"),l=i("d10f"),c=i("f2e7"),h=i("80d2"),d=i("58df"),u=Object(d["a"])(a["a"],r["a"],l["a"],c["a"],Object(s["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=u.extend({name:"v-app-bar",directives:{Scroll:o["b"]},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return r["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return a["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=a["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:a["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return a["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.styles.call(this)),{},{fontSize:Object(h["g"])(this.computedFontSize,"rem"),marginTop:Object(h["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(h["g"])(this.computedTransform),")"),left:Object(h["g"])(this.computedLeft),right:Object(h["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=a["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=a["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},5215:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FrontLayout",[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("h2",{staticClass:"title"},[t._v("ALUR PROSES PENDAFTARAN DAN SELEKSI")]),i("v-divider")],1),i("v-col",{attrs:{cols:"12"}},[i("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},[i("v-timeline-item",{attrs:{small:"",color:"orange"},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("span",{class:"headline font-weight-bold orange--text"},[t._v(" TAHAP KE - 1 ")])]},proxy:!0}])},[i("div",{staticClass:"py-4"},[i("h2",{class:"headline font-weight-light mb-4"},[t._v(" MEMBUAT AKUN ")]),i("div",[t._v(" Klik menu PENDAFTARAN maka muncul halaman pendaftaran, yang terdiri dari beberapa bagian yang wajib untuk diisi, yaitu : "),i("ol",{attrs:{type:"a"}},[i("li",[t._v("Nama Lengkap")]),i("li",[t._v("Nomor HP / WA dengan format seperti contoh +6281234567")]),i("li",[t._v("Email yang valid dan aktif")]),i("li",[t._v("Program studi yang di pilih Sistem Informasi atau Teknik Informatika")]),i("li",[t._v("Tentukan Username dan Password")]),i("li",[t._v("Ceklis Recaptcha / I'm Not Robot")])]),t._v(' Setelah tekan tombol "Daftar" maka akan muncul konfirmasi pendaftaran yang menyatakan proses pengisian form telah berhasil; Sistem akan mengirimkan kode aktivasi bila sudah tersedia kode tersebut tekan tombol "Konfirmasi". ')])])]),i("v-timeline-item",{attrs:{small:"",color:"green"},scopedSlots:t._u([{key:"opposite",fn:function(){return[i("span",{class:"headline font-weight-bold green--text"},[t._v(" TAHAP KE - 2 ")])]},proxy:!0}])},[i("div",{staticClass:"py-4"},[i("h2",{class:"headline font-weight-light mb-4"},[t._v(" LENGKAPI FORMULIR PENDAFTARAN ")]),i("div",[t._v(' Klik tombol Login di menu utama, Setelah berhasil login ke dalam SIMAK, klik tombol "Isi Formulir" yang terdiri dari beberapa bagian yang wajib untuk diisi, yaitu : '),i("ol",[i("li",[t._v("Identitas Diri")]),i("li",[t._v("Alamat Domisili")]),i("li",[t._v("Rencana Studi dan Menentukan Kelas (Pagi, Sore, Karyawan)")])]),t._v(' Setelah tekan tombol "Simpan" maka lanjutkan langkah 3. Selanjutnya lakukan pembayaran dengan cara ditransfer ke : '),i("v-alert",{attrs:{type:"tkinfo"}},[t._v(" BNI (BANK NEGARA INDONESIA) "),i("br"),t._v(" NOMOR REKENING : 10-0062-8460 "),i("br"),t._v(" A.N : STMIK BANDUNG BALI "),i("br")])],1)])])],1)],1)],1)],1)],1)},a=[],o=i("632e"),s={name:"CaraPendaftaran",data:function(){return{}},components:{FrontLayout:o["a"]}},r=s,l=i("2877"),c=i("6544"),h=i.n(c),d=i("0798"),u=i("62ad"),p=i("a523"),f=i("ce7e"),m=i("0fd9"),v=i("8414"),g=i("1e06"),b=Object(l["a"])(r,n,a,!1,null,null,null);e["default"]=b.exports;h()(b,{VAlert:d["a"],VCol:u["a"],VContainer:p["a"],VDivider:f["a"],VRow:m["a"],VTimeline:v["a"],VTimelineItem:g["a"]})},"553a":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var n=i("5530"),a=(i("b5b6"),i("8dd9")),o=i("3a66"),s=i("d10f"),r=i("58df"),l=i("80d2");e["a"]=Object(r["a"])(a["a"],Object(o["a"])("footer",["height","inset"]),s["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(l["g"])(t),left:Object(l["g"])(this.computedLeft),right:Object(l["g"])(this.computedRight),bottom:Object(l["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},"632e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{app:"",elevation:"0"}},[i("v-toolbar-title",[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.namaPTAlias))])]),i("v-spacer"),i("v-btn",{staticClass:"mr-2",attrs:{to:"/",color:"primary",text:"",large:""}},[t._v(" Home ")]),i("v-btn",{staticClass:"mr-2",attrs:{to:"/blog/cara-pendaftaran",color:"primary",text:"",large:""}},[t._v(" CARA PENDAFTARAN ")]),i("v-btn",{staticClass:"mr-2",attrs:{to:"/pmb",color:"primary",text:"",large:""}},[t._v(" PENDAFTARAN ")]),i("v-btn",{attrs:{to:"/login",color:"primary",text:"",large:""}},[t._v(" LOGIN ")])],1),i("v-main",[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:"",dark:""}},[i("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 white--text text-center"},[i("strong",[t._v("SIMAK (2021-2020)")]),t._v(" dikembangkan oleh TIM IT STMIK Bandung Bali "),i("v-btn",{attrs:{dark:"",icon:"",href:"https://github.com/stmikbdgbali/simak"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},a=[],o=i("5530"),s=i("2f62"),r={name:"FrontLayout",created:function(){this.$store.dispatch("uifront/init",this.$ajax)},computed:Object(o["a"])({},Object(s["b"])("uifront",{namaPTAlias:"getNamaPTAlias"}))},l=r,c=i("2877"),h=i("6544"),d=i.n(h),u=i("40dc"),p=i("8336"),f=i("b0af"),m=i("99d9"),v=i("ce7e"),g=i("553a"),b=i("132d"),S=i("f6c4"),y=i("2fa4"),O=i("2a7f"),A=Object(c["a"])(l,n,a,!1,null,null,null);e["a"]=A.exports;d()(A,{VAppBar:u["a"],VBtn:p["a"],VCard:f["a"],VCardText:m["c"],VDivider:v["a"],VFooter:g["a"],VIcon:b["a"],VMain:S["a"],VSpacer:y["a"],VToolbarTitle:O["a"]})},8414:function(t,e,i){"use strict";var n=i("5530"),a=(i("0160"),i("58df")),o=i("7560");e["a"]=Object(a["a"])(o["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(n["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},"8b0d":function(t,e,i){},"8ce9":function(t,e,i){},b5b6:function(t,e,i){},bd0c:function(t,e,i){},ce7e:function(t,e,i){"use strict";var n=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d10f:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},f6c4:function(t,e,i){"use strict";i("bd0c");var n=i("d10f");e["a"]=n["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,a=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(a+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},f977:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("53ca");function a(t,e){var i=e.modifiers||{},a=i.self,o=void 0!==a&&a,s=e.value,r="object"===Object(n["a"])(s)&&s.options||{passive:!0},l="function"===typeof s||"handleEvent"in s?s:s.handler,c=o?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",l,r),t._onScroll={handler:l,options:r,target:o?void 0:c})}function o(t){if(t._onScroll){var e=t._onScroll,i=e.handler,n=e.options,a=e.target,o=void 0===a?t:a;o.removeEventListener("scroll",i,n),delete t._onScroll}}var s={inserted:a,unbind:o};e["b"]=s}}]);