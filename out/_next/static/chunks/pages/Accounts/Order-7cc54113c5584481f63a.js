_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"7/EZ":function(e,r,a){e.exports={accountDetails:"Account_accountDetails__2QXpL",myAccount:"Account_myAccount__a__6t",accountList:"Account_accountList__1yhPQ",accountActiveList:"Account_accountActiveList__Xwri7"}},"L/5Q":function(e,r,a){"use strict";a.d(r,"a",(function(){return l}));var n=a("q1tI"),t=a.n(n),o=a("7/EZ"),c=a.n(o),s=a("20a2"),i=t.a.createElement;function l(){var e=Object(s.useRouter)();return i("div",{className:c.a.hideX},i("div",{className:"container"},i("div",{className:"row"},i("div",{className:"col-md-12 ".concat(c.a.myAccount," content")},i("br",null),i("span",{onClick:function(){return e.push("/")}},"Home"),i("span",null,"> My Accuount"),i("br",null),i("b",null,"My Account Details"),i("hr",null)))))}},TH1C:function(e,r,a){"use strict";a.r(r);var n=a("q1tI"),t=a.n(n),o=a("Ogzj"),c=a("Fl18"),s=a("20a2"),i=a("oNif"),l=a.n(i),d=t.a.createElement;var u=function(){var e=Object(s.useRouter)();return d("div",{className:l.a.trackBorder},d("div",{className:l.a.myOrder},d("b",null,"My Orders")),d("div",{className:"row"},d("div",{className:"col-md-12"},d("div",{className:l.a.orderStatus},d("div",{className:"row ".concat(l.a.in_box)},d("div",{className:l.a.pres_img},d("img",{src:a("kEYw"),alt:"prescription"})),d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"\xa0#3456856815"),d("div",{className:l.a.orderReview},d("b",{className:l.a.Order_header},"Order is Being Reviewed"),d("p",{className:l.a.price_match},"Your prescription is being reviewed, We will ",d("br",null)," update you soon"))),d("div",{className:l.a.order_esti},d("p",{className:l.a.or_right},"Estimate Delivery to be calculated"),d("button",{onClick:function(){return e.push("/Orders/TrackYourOrders")},className:l.a.btnTracks},"TRACK ORDER")))),d("div",{className:l.a.orderStatus},d("div",{className:"row"},d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"\xa0#3456856815")),d("div",{className:"col-md-6"},d("div",{className:l.a.orderShipped},d("span",null,"Order Shipped")))),d("div",{className:"row"},d("div",{className:"col-md-6"},d("div",{className:l.a.orderName},d("b",{className:l.a.orderName},"John Doe")),d("div",{className:l.a.orderAddress},d("span",{className:l.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),d("div",{className:l.a.deliveryDate},d("span",null,"Delivered on 20 Nov"))),d("div",{className:"col-md-6"},d("div",{className:l.a.amountDetails},d("span",null,"Paid Amount:"),d("b",null,"\u20b9150"),d("button",{onClick:function(){return e.push("/Orders/ArTrackOrder")},className:l.a.btnTrack},"TRACK ORDER"))))),d("div",{className:l.a.orderStatus},d("div",{className:"row"},d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"#3456856815")),d("div",{className:"col-md-6"},d("div",{className:l.a.orderDelivered},d("span",null,"Order Delivered")))),d("div",{className:"row"},d("div",{className:"col-md-6"},d("div",{className:l.a.orderName},d("b",{className:l.a.orderName},"John Doe")),d("div",{className:l.a.orderAddress},d("span",{className:l.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),d("div",{className:l.a.deliveryDate},d("span",null,"Delivered on 20 Nov"))),d("div",{className:"col-md-6"},d("div",{className:l.a.amountDetails},d("span",{className:l.a.paid},"Paid Amount:"),d("b",{className:l.a.paidAmount},"\u20b9150"),d("button",{className:l.a.btnReorder},"REORDER"))))))))},_=a("L/5Q"),p=a("tvUw"),m=t.a.createElement;r.default=function(){return m("div",null,m(o.a,null),m("div",{className:"container"},m(_.a,null),m("div",{className:"d-flex"},m(p.a,null),m(u,null))),m(c.a,null))}},YFqc:function(e,r,a){e.exports=a("cTJO")},cTJO:function(e,r,a){"use strict";var n=a("J4zp"),t=a("284h");r.__esModule=!0,r.default=void 0;var o=t(a("q1tI")),c=a("elyg"),s=a("nOHt"),i=a("vNVm"),l={};function d(e,r,a,n){if(e&&(0,c.isLocalURL)(r)){e.prefetch(r,a,n).catch((function(e){0}));var t=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+a+(t?"%"+t:"")]=!0}}var u=function(e){var r=!1!==e.prefetch,a=(0,s.useRouter)(),t=a&&a.pathname||"/",u=o.default.useMemo((function(){var r=(0,c.resolveHref)(t,e.href,!0),a=n(r,2),o=a[0],s=a[1];return{href:o,as:e.as?(0,c.resolveHref)(t,e.as):s||o}}),[t,e.href,e.as]),_=u.href,p=u.as,m=e.children,v=e.replace,f=e.shallow,N=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=o.Children.only(m),h=b&&"object"===typeof b&&b.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),C=n(O,2),E=C[0],g=C[1],w=o.default.useCallback((function(e){E(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,E]);(0,o.useEffect)((function(){var e=g&&r&&(0,c.isLocalURL)(_),n="undefined"!==typeof y?y:a&&a.locale,t=l[_+"%"+p+(n?"%"+n:"")];e&&!t&&d(a,_,p,{locale:n})}),[p,_,g,y,r,a]);var A={ref:w,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,r,a,n,t,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(a))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),r[t?"replace":"push"](a,n,{shallow:o,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,a,_,p,v,f,N,y)},onMouseEnter:function(e){(0,c.isLocalURL)(_)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(a,_,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var R="undefined"!==typeof y?y:a&&a.locale,k=(0,c.getDomainLocale)(p,R,a&&a.locales,a&&a.domainLocales);A.href=k||(0,c.addBasePath)((0,c.addLocale)(p,R,a&&a.defaultLocale))}return o.default.cloneElement(b,A)};r.default=u},fdKU:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accounts/Order",function(){return a("TH1C")}])},kEYw:function(e,r){e.exports="/_next/static/images/prescription-img-2bc3c7aab2955c486ace7fec5ed3b167.png"},oNif:function(e,r,a){e.exports={trackBorder:"OrderComponent_trackBorder__o5Xs2",myOrder:"OrderComponent_myOrder__1RfUR",in_box:"OrderComponent_in_box__3ci4g",orderStatus:"OrderComponent_orderStatus__1kygB",pres_img:"OrderComponent_pres_img__1GIZb",orderId:"OrderComponent_orderId__2yCRl",idNumber:"OrderComponent_idNumber__2XT-P",orderName:"OrderComponent_orderName__29nsj",orderAddress:"OrderComponent_orderAddress__3xoMC",deliveryDate:"OrderComponent_deliveryDate__2O14t",amountDetails:"OrderComponent_amountDetails__xNExh",orderShipped:"OrderComponent_orderShipped__3y_iW",orderDelivered:"OrderComponent_orderDelivered__2EVAL",btnTrack:"OrderComponent_btnTrack__1qTFK",btnTracks:"OrderComponent_btnTracks__3g2S5",btnReorder:"OrderComponent_btnReorder__xjpOH",or_right:"OrderComponent_or_right__2Fqrd",price_match:"OrderComponent_price_match__AA_Mx",orderReview:"OrderComponent_orderReview__2DSVF",Order_header:"OrderComponent_Order_header__3vZBc",order_esti:"OrderComponent_order_esti__3Wkxq"}},pqpu:function(e,r,a){e.exports={icons:"style_icons__2jNpL","icon-user":"style_icon-user__4grKo","icon-shopping-cart":"style_icon-shopping-cart__fwI4K","icon-pap-5":"style_icon-pap-5__323_i",path1:"style_path1__10Bpk",path2:"style_path2__1qvpZ",path3:"style_path3__3k11U",path4:"style_path4__1W_nS","icon-pap-3":"style_icon-pap-3__-tT0u",path5:"style_path5__2Thsk",path6:"style_path6__17tam",path7:"style_path7__3G2Vg","icon-pap-2":"style_icon-pap-2__C4f8H","icon-pap-1":"style_icon-pap-1__-xxXN","icon-pap-4":"style_icon-pap-4__3gzBM","icon-imported-1":"style_icon-imported-1__1PbGe","icon-imported-2":"style_icon-imported-2__3cFRz","icon-imported-3":"style_icon-imported-3__1yip2","icon-imported-4":"style_icon-imported-4__1ygZJ","icon-delivery":"style_icon-delivery__1Ah8l","icon-wishlist":"style_icon-wishlist__2I8LL","icon-exit":"style_icon-exit__2Onyx","icon-padlock":"style_icon-padlock__2rJpI","icon-member-card":"style_icon-member-card__fOtFF","icon-address":"style_icon-address__3FH9o","icon-credit-card":"style_icon-credit-card__33wMB","icon-invite":"style_icon-invite__1hOb1","icon-prescription":"style_icon-prescription__u298Q"}},tvUw:function(e,r,a){"use strict";var n=a("q1tI"),t=a.n(n),o=a("YFqc"),c=a.n(o),s=a("7/EZ"),i=a.n(s),l=a("pqpu"),d=a.n(l),u=(a("/1DH"),a("20a2")),_=t.a.createElement;r.a=function(){var e=Object(u.useRouter)(),r=Object(n.useState)([{to:"/Accounts/Profiles",icon:"icon-member-card",label:"MY PROFILE"},{to:"/Accounts/Order",icon:"icon-delivery",label:"MY ORDER"},{to:"/Accounts/MyPrescription",icon:"icon-prescription",label:"MY PRESCRIPTION"},{to:"/Accounts/Payments",icon:"icon-credit-card",label:"PAYMENTS"},,{to:"/Accounts/ChangeNumbers",icon:"icon-padlock",label:"CHANGE NUMBER"},{to:"/Accounts/Invites",icon:"icon-invite",label:"INVITE / PEER"},{to:"",icon:"icon-exit",label:"LOGOUT"}]),a=r[0];return r[1],_("div",{className:"col-md-3"},_("div",{className:i.a.accountDetails},_("ul",null,a.map((function(r,a){var n=r.icon,t=r.to,o=r.label;return _("div",{key:a},_(c.a,{href:t},_("li",{className:"".concat(i.a.accountList," ").concat(e.pathname===t?i.a.accountActiveList:"")},_("i",{className:"".concat(d.a.icons," ").concat(d.a[n])}),_("b",null,o))))})))))}},vNVm:function(e,r,a){"use strict";var n=a("J4zp"),t=a("TqRt");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,a=e.disabled||!s,t=(0,o.useRef)(),l=(0,o.useState)(!1),d=n(l,2),u=d[0],_=d[1],p=(0,o.useCallback)((function(e){t.current&&(t.current(),t.current=void 0),a||u||e&&e.tagName&&(t.current=function(e,r,a){var n=function(e){var r=e.rootMargin||"",a=i.get(r);if(a)return a;var n=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;r&&a&&r(a)}))}),e);return i.set(r,a={id:r,observer:t,elements:n}),a}(a),t=n.id,o=n.observer,c=n.elements;return c.set(e,r),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(t))}}(e,(function(e){return e&&_(e)}),{rootMargin:r}))}),[a,r,u]);return(0,o.useEffect)((function(){s||u||(0,c.default)((function(){return _(!0)}))}),[u]),[p,u]};var o=a("q1tI"),c=t(a("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map}},[["fdKU",1,2,0,3,4]]]);