_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"7/EZ":function(e,a,r){e.exports={accountDetails:"Account_accountDetails__2QXpL",myAccount:"Account_myAccount__a__6t",accountList:"Account_accountList__1yhPQ",accountActiveList:"Account_accountActiveList__Xwri7"}},"L/5Q":function(e,a,r){"use strict";r.d(a,"a",(function(){return l}));var t=r("q1tI"),n=r.n(t),o=r("7/EZ"),s=r.n(o),c=r("20a2"),i=n.a.createElement;function l(){var e=Object(c.useRouter)();return i("div",{className:s.a.hideX},i("div",{className:"container"},i("div",{className:"row"},i("div",{className:"col-md-12 ".concat(s.a.myAccount," content")},i("br",null),i("span",{onClick:function(){return e.push("/")}},"Home"),i("span",null,"> My Accuount"),i("br",null),i("b",null,"My Account Details"),i("hr",null)))))}},TH1C:function(e,a,r){"use strict";r.r(a);var t=r("q1tI"),n=r.n(t),o=r("Ogzj"),s=r("Fl18"),c=r("20a2"),i=r("oNif"),l=r.n(i),d=n.a.createElement;var u=function(){var e=Object(c.useRouter)(),a=Object(t.useState)([{id:" #3456856815",sub:"Import medicine order is Being Reviewed",content:"Your medicine will be imported soon!",estimation:"Estimate Delivery to be calculated",imp:!0},{id:" #3456856815",sub:"Order is Being Reviewed",content:"Your presciption is being reviewed, we will update the order soon!",estimation:"Estimate Delivery to be calculated",imp:!1},{id:" #3456856815",sub:"Order is Being Reviewed",content:"Your presciption is being reviewed, we will update the order soon!",estimation:"Your Order is reviewed",imp:!1}]),r=a[0];return a[1],d("div",{className:l.a.trackBorder},d("div",{className:l.a.myOrder},d("b",null,"My Orders")),d("div",{className:"row"},d("div",{className:"col-md-12"},r.map((function(a,r){return d("div",{key:r,className:l.a.orderStatus},d("div",{className:"row ".concat(l.a.in_box)},d("div",{className:l.a.pres_img},d("img",{src:"/prescription-img.png",alt:"prescription"})),d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"\xa0#3456856815"),d("div",{className:l.a.orderReview},d("b",{className:l.a.Order_header},a.sub),d("p",{className:l.a.price_match},a.content))),d("div",{className:l.a.order_esti},d("p",{className:l.a.or_right},a.estimation),d("button",{onClick:function(){return e.push("/Orders/OrderDetail")},className:l.a.btnTracks},"VIEW ORDER"))))})),d("div",{className:l.a.orderStatus},d("div",{className:"row"},d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"\xa0#3456856815")),d("div",{className:"col-md-6"},d("div",{className:l.a.orderShipped},d("span",null,"Order Shipped")))),d("div",{className:"row"},d("div",{className:"col-md-6"},d("div",{className:l.a.orderName},d("b",{className:l.a.orderName},"John Doe")),d("div",{className:l.a.orderAddress},d("span",{className:l.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),d("div",{className:l.a.deliveryDate},d("span",null,"Delivered on 20 Nov"))),d("div",{className:"col-md-6"},d("div",{className:l.a.amountDetails},d("span",null,"Paid Amount:"),d("b",null,"\u20b9150"),d("button",{onClick:function(){return e.push("/Orders/ArTrackOrder")},className:l.a.btnTrack},"TRACK ORDER"))))),d("div",{className:l.a.orderStatus},d("div",{className:"row"},d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"#3456856815")),d("div",{className:"col-md-6"},d("div",{className:l.a.orderDelivered},d("span",null,"Order Delivered")))),d("div",{className:"row"},d("div",{className:"col-md-6"},d("div",{className:l.a.orderName},d("b",{className:l.a.orderName},"John Doe")),d("div",{className:l.a.orderAddress},d("span",{className:l.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),d("div",{className:l.a.deliveryDate},d("span",null,"Delivered on 20 Nov"))),d("div",{className:"col-md-6"},d("div",{className:l.a.amountDetails},d("span",{className:l.a.paid},"Paid Amount:"),d("b",{className:l.a.paidAmount},"\u20b9150"),d("button",{className:l.a.btnReorder},"REORDER"))))),d("div",{className:l.a.orderStatus},d("div",{className:"row"},d("div",{className:"col-md-6"},d("b",{className:l.a.orderId},"Order ID: "),d("b",{className:l.a.idNumber},"#3456856815")),d("div",{className:"col-md-6"},d("div",{className:l.a.orderDelivered},d("span",null,"Order Delivered")))),d("div",{className:"row"},d("div",{className:"col-md-6"},d("div",{className:l.a.orderName},d("b",{className:l.a.orderName},"John Doe")),d("div",{className:l.a.orderAddress},d("span",{className:l.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),d("div",{className:l.a.deliveryDate},d("span",null,"Delivered on 20 Nov"))),d("div",{className:"col-md-6"},d("div",{className:l.a.amountDetails},d("span",{className:l.a.paid},"Paid Amount:"),d("b",{className:l.a.paidAmount},"\u20b9150"),d("button",{className:l.a.btnReorder},"REORDER"))))))))},m=r("L/5Q"),_=r("tvUw"),p=n.a.createElement;a.default=function(){return p("div",null,p(o.a,null),p("div",{className:"container"},p(m.a,null),p("div",{className:"d-flex"},p(_.a,null),p(u,null))),p(s.a,null))}},YFqc:function(e,a,r){e.exports=r("cTJO")},cTJO:function(e,a,r){"use strict";var t=r("J4zp"),n=r("284h");a.__esModule=!0,a.default=void 0;var o=n(r("q1tI")),s=r("elyg"),c=r("nOHt"),i=r("vNVm"),l={};function d(e,a,r,t){if(e&&(0,s.isLocalURL)(a)){e.prefetch(a,r,t).catch((function(e){0}));var n=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[a+"%"+r+(n?"%"+n:"")]=!0}}var u=function(e){var a=!1!==e.prefetch,r=(0,c.useRouter)(),n=r&&r.pathname||"/",u=o.default.useMemo((function(){var a=(0,s.resolveHref)(n,e.href,!0),r=t(a,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,s.resolveHref)(n,e.as):c||o}}),[n,e.href,e.as]),m=u.href,_=u.as,p=e.children,v=e.replace,N=e.shallow,f=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=o.Children.only(p),h=y&&"object"===typeof y&&y.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),w=t(O,2),R=w[0],C=w[1],E=o.default.useCallback((function(e){R(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,R]);(0,o.useEffect)((function(){var e=C&&a&&(0,s.isLocalURL)(m),t="undefined"!==typeof b?b:r&&r.locale,n=l[m+"%"+_+(t?"%"+t:"")];e&&!n&&d(r,m,_,{locale:t})}),[_,m,C,b,a,r]);var g={ref:E,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,a,r,t,n,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=t.indexOf("#")<0),a[n?"replace":"push"](r,t,{shallow:o,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,r,m,_,v,N,f,b)},onMouseEnter:function(e){(0,s.isLocalURL)(m)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(r,m,_,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var A="undefined"!==typeof b?b:r&&r.locale,D=(0,s.getDomainLocale)(_,A,r&&r.locales,r&&r.domainLocales);g.href=D||(0,s.addBasePath)((0,s.addLocale)(_,A,r&&r.defaultLocale))}return o.default.cloneElement(y,g)};a.default=u},fdKU:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accounts/Order",function(){return r("TH1C")}])},oNif:function(e,a,r){e.exports={trackBorder:"OrderComponent_trackBorder__o5Xs2",myOrder:"OrderComponent_myOrder__1RfUR",in_box:"OrderComponent_in_box__3ci4g",orderStatus:"OrderComponent_orderStatus__1kygB",pres_img:"OrderComponent_pres_img__1GIZb",orderId:"OrderComponent_orderId__2yCRl",idNumber:"OrderComponent_idNumber__2XT-P",orderName:"OrderComponent_orderName__29nsj",orderAddress:"OrderComponent_orderAddress__3xoMC",deliveryDate:"OrderComponent_deliveryDate__2O14t",amountDetails:"OrderComponent_amountDetails__xNExh",orderShipped:"OrderComponent_orderShipped__3y_iW",orderDelivered:"OrderComponent_orderDelivered__2EVAL",btnTrack:"OrderComponent_btnTrack__1qTFK",btnTracks:"OrderComponent_btnTracks__3g2S5",btnReorder:"OrderComponent_btnReorder__xjpOH",or_right:"OrderComponent_or_right__2Fqrd",price_match:"OrderComponent_price_match__AA_Mx",orderReview:"OrderComponent_orderReview__2DSVF",Order_header:"OrderComponent_Order_header__3vZBc",order_esti:"OrderComponent_order_esti__3Wkxq"}},pqpu:function(e,a,r){e.exports={icons:"style_icons__2jNpL","icon-user":"style_icon-user__4grKo","icon-shopping-cart":"style_icon-shopping-cart__fwI4K","icon-pap-5":"style_icon-pap-5__323_i",path1:"style_path1__10Bpk",path2:"style_path2__1qvpZ",path3:"style_path3__3k11U",path4:"style_path4__1W_nS","icon-pap-3":"style_icon-pap-3__-tT0u",path5:"style_path5__2Thsk",path6:"style_path6__17tam",path7:"style_path7__3G2Vg","icon-pap-2":"style_icon-pap-2__C4f8H","icon-pap-1":"style_icon-pap-1__-xxXN","icon-pap-4":"style_icon-pap-4__3gzBM","icon-imported-1":"style_icon-imported-1__1PbGe","icon-imported-2":"style_icon-imported-2__3cFRz","icon-imported-3":"style_icon-imported-3__1yip2","icon-imported-4":"style_icon-imported-4__1ygZJ","icon-delivery":"style_icon-delivery__1Ah8l","icon-wishlist":"style_icon-wishlist__2I8LL","icon-exit":"style_icon-exit__2Onyx","icon-padlock":"style_icon-padlock__2rJpI","icon-member-card":"style_icon-member-card__fOtFF","icon-address":"style_icon-address__3FH9o","icon-credit-card":"style_icon-credit-card__33wMB","icon-invite":"style_icon-invite__1hOb1","icon-prescription":"style_icon-prescription__u298Q"}},tvUw:function(e,a,r){"use strict";var t=r("q1tI"),n=r.n(t),o=r("YFqc"),s=r.n(o),c=r("7/EZ"),i=r.n(c),l=r("pqpu"),d=r.n(l),u=r("20a2"),m=n.a.createElement;a.a=function(){var e=Object(u.useRouter)(),a=Object(t.useState)([{to:"/Accounts/Profiles",icon:"icon-member-card",label:"MY PROFILE"},{to:"/Accounts/Order",icon:"icon-delivery",label:"MY ORDER"},{to:"/Accounts/MyPrescription",icon:"icon-prescription",label:"MY PRESCRIPTION"},{to:"/Accounts/Payments",icon:"icon-credit-card",label:"PAYMENTS"},,{to:"/Accounts/ChangeNumbers",icon:"icon-padlock",label:"CHANGE NUMBER"},{to:"/Accounts/Invites",icon:"icon-invite",label:"INVITE / PEER"},{to:"",icon:"icon-exit",label:"LOGOUT"}]),r=a[0];return a[1],m("div",{className:"col-md-3"},m("div",{className:i.a.accountDetails},m("ul",null,r.map((function(a,r){var t=a.icon,n=a.to,o=a.label;return m("div",{key:r},m(s.a,{href:n},m("li",{className:"".concat(i.a.accountList," ").concat(e.pathname===n?i.a.accountActiveList:"")},m("i",{className:"".concat(d.a.icons," ").concat(d.a[t])}),m("b",null,o))))})))))}},vNVm:function(e,a,r){"use strict";var t=r("J4zp"),n=r("TqRt");a.__esModule=!0,a.useIntersection=function(e){var a=e.rootMargin,r=e.disabled||!c,n=(0,o.useRef)(),l=(0,o.useState)(!1),d=t(l,2),u=d[0],m=d[1],_=(0,o.useCallback)((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,a,r){var t=function(e){var a=e.rootMargin||"",r=i.get(a);if(r)return r;var t=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var a=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;a&&r&&a(r)}))}),e);return i.set(a,r={id:a,observer:n,elements:t}),r}(r),n=t.id,o=t.observer,s=t.elements;return s.set(e,a),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(n))}}(e,(function(e){return e&&m(e)}),{rootMargin:a}))}),[r,a,u]);return(0,o.useEffect)((function(){c||u||(0,s.default)((function(){return m(!0)}))}),[u]),[_,u]};var o=r("q1tI"),s=n(r("0G5g")),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["fdKU",0,1,2,3,4,5]]]);