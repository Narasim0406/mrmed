_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"7/EZ":function(e,a,r){e.exports={accountDetails:"Account_accountDetails__2QXpL",myAccount:"Account_myAccount__a__6t",accountList:"Account_accountList__1yhPQ",accountActiveList:"Account_accountActiveList__Xwri7"}},"L/5Q":function(e,a,r){"use strict";r.d(a,"a",(function(){return d}));var o=r("q1tI"),s=r.n(o),n=r("7/EZ"),t=r.n(n),i=r("20a2"),c=s.a.createElement;function d(){var e=Object(i.useRouter)();return c("div",{className:t.a.hideX},c("div",{className:"container"},c("div",{className:"row"},c("div",{className:"col-md-12 ".concat(t.a.myAccount," content")},c("br",null),c("span",{onClick:function(){return e.push("/")}},"Home"),c("span",null,"> My Accuount"),c("br",null),c("b",null,"My Account Details"),c("hr",null)))))}},TH1C:function(e,a,r){"use strict";r.r(a);var o=r("q1tI"),s=r.n(o),n=r("Ogzj"),t=r("Fl18"),i=r("20a2"),c=r("oNif"),d=r.n(c),l=s.a.createElement;var _=function(){var e=Object(i.useRouter)(),a=Object(o.useState)([{id:" #3456856815",sub:"Import medicine order is Being Reviewed",content:"Your medicine will be imported soon!",estimation:"Estimate Delivery to be calculated",imp:!0},{id:" #3456856815",sub:"Order is Being Reviewed",content:"Your presciption is being reviewed, we will update the order soon!",estimation:"Estimate Delivery to be calculated",imp:!1},{id:" #3456856815",sub:"Order is Being Reviewed",content:"Your presciption is being reviewed, we will update the order soon!",estimation:"Your Order is reviewed",imp:!1}]),r=a[0];return a[1],l("div",{className:d.a.trackBorder},l("div",{className:d.a.myOrder},l("b",null,"My Orders")),l("div",{className:"row"},l("div",{className:"col-md-12"},r.map((function(a,r){return l("div",{key:r,className:d.a.orderStatus},l("div",{className:"row ".concat(d.a.in_box)},l("div",{className:d.a.pres_img},l("img",{src:"/prescription-img.png",alt:"prescription"})),l("div",{className:"col-md-6"},l("b",{className:d.a.orderId},"Order ID: "),l("b",{className:d.a.idNumber},"\xa0#3456856815"),l("div",{className:d.a.orderReview},l("b",{className:d.a.Order_header},a.sub),l("p",{className:d.a.price_match},a.content))),l("div",{className:d.a.order_esti},l("p",{className:d.a.or_right},a.estimation),l("button",{onClick:function(){return e.push("/Orders/OrderDetail")},className:d.a.btnTracks},"VIEW ORDER"))))})),l("div",{className:d.a.orderStatus},l("div",{className:"row"},l("div",{className:"col-md-6"},l("b",{className:d.a.orderId},"Order ID: "),l("b",{className:d.a.idNumber},"\xa0#3456856815")),l("div",{className:"col-md-6"},l("div",{className:d.a.orderShipped},l("span",null,"Order Shipped")))),l("div",{className:"row"},l("div",{className:"col-md-6"},l("div",{className:d.a.orderName},l("b",{className:d.a.orderName},"John Doe")),l("div",{className:d.a.orderAddress},l("span",{className:d.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),l("div",{className:d.a.deliveryDate},l("span",null,"Delivered on 20 Nov"))),l("div",{className:"col-md-6"},l("div",{className:d.a.amountDetails},l("span",null,"Paid Amount:"),l("b",null,"\u20b9150"),l("button",{onClick:function(){return e.push("/Orders/ArTrackOrder")},className:d.a.btnTrack},"TRACK ORDER"))))),l("div",{className:d.a.orderStatus},l("div",{className:"row"},l("div",{className:"col-md-6"},l("b",{className:d.a.orderId},"Order ID: "),l("b",{className:d.a.idNumber},"#3456856815")),l("div",{className:"col-md-6"},l("div",{className:d.a.orderDelivered},l("span",null,"Order Delivered")))),l("div",{className:"row"},l("div",{className:"col-md-6"},l("div",{className:d.a.orderName},l("b",{className:d.a.orderName},"John Doe")),l("div",{className:d.a.orderAddress},l("span",{className:d.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),l("div",{className:d.a.deliveryDate},l("span",null,"Delivered on 20 Nov"))),l("div",{className:"col-md-6"},l("div",{className:d.a.amountDetails},l("span",{className:d.a.paid},"Paid Amount:"),l("b",{className:d.a.paidAmount},"\u20b9150"),l("button",{className:d.a.btnReorder},"REORDER"))))),l("div",{className:d.a.orderStatus},l("div",{className:"row"},l("div",{className:"col-md-6"},l("b",{className:d.a.orderId},"Order ID: "),l("b",{className:d.a.idNumber},"#3456856815")),l("div",{className:"col-md-6"},l("div",{className:d.a.orderDelivered},l("span",null,"Order Delivered")))),l("div",{className:"row"},l("div",{className:"col-md-6"},l("div",{className:d.a.orderName},l("b",{className:d.a.orderName},"John Doe")),l("div",{className:d.a.orderAddress},l("span",{className:d.a.orderAddress},"NO:115, Park Street, Mylapore, Chennai - 63")),l("div",{className:d.a.deliveryDate},l("span",null,"Delivered on 20 Nov"))),l("div",{className:"col-md-6"},l("div",{className:d.a.amountDetails},l("span",{className:d.a.paid},"Paid Amount:"),l("b",{className:d.a.paidAmount},"\u20b9150"),l("button",{className:d.a.btnReorder},"REORDER"))))))))},m=r("L/5Q"),p=r("tvUw"),u=s.a.createElement;a.default=function(){return u("div",null,u(n.a,null),u("div",{className:"container"},u(m.a,null),u("div",{className:"d-flex"},u(p.a,null),u(_,null))),u(t.a,null))}},fdKU:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accounts/Order",function(){return r("TH1C")}])},oNif:function(e,a,r){e.exports={trackBorder:"OrderComponent_trackBorder__o5Xs2",myOrder:"OrderComponent_myOrder__1RfUR",in_box:"OrderComponent_in_box__3ci4g",orderStatus:"OrderComponent_orderStatus__1kygB",pres_img:"OrderComponent_pres_img__1GIZb",orderId:"OrderComponent_orderId__2yCRl",idNumber:"OrderComponent_idNumber__2XT-P",orderName:"OrderComponent_orderName__29nsj",orderAddress:"OrderComponent_orderAddress__3xoMC",deliveryDate:"OrderComponent_deliveryDate__2O14t",amountDetails:"OrderComponent_amountDetails__xNExh",orderShipped:"OrderComponent_orderShipped__3y_iW",orderDelivered:"OrderComponent_orderDelivered__2EVAL",btnTrack:"OrderComponent_btnTrack__1qTFK",btnTracks:"OrderComponent_btnTracks__3g2S5",btnReorder:"OrderComponent_btnReorder__xjpOH",or_right:"OrderComponent_or_right__2Fqrd",price_match:"OrderComponent_price_match__AA_Mx",orderReview:"OrderComponent_orderReview__2DSVF",Order_header:"OrderComponent_Order_header__3vZBc",order_esti:"OrderComponent_order_esti__3Wkxq"}},pqpu:function(e,a,r){e.exports={icons:"style_icons__2jNpL","icon-user":"style_icon-user__4grKo","icon-shopping-cart":"style_icon-shopping-cart__fwI4K","icon-pap-5":"style_icon-pap-5__323_i",path1:"style_path1__10Bpk",path2:"style_path2__1qvpZ",path3:"style_path3__3k11U",path4:"style_path4__1W_nS","icon-pap-3":"style_icon-pap-3__-tT0u",path5:"style_path5__2Thsk",path6:"style_path6__17tam",path7:"style_path7__3G2Vg","icon-pap-2":"style_icon-pap-2__C4f8H","icon-pap-1":"style_icon-pap-1__-xxXN","icon-pap-4":"style_icon-pap-4__3gzBM","icon-imported-1":"style_icon-imported-1__1PbGe","icon-imported-2":"style_icon-imported-2__3cFRz","icon-imported-3":"style_icon-imported-3__1yip2","icon-imported-4":"style_icon-imported-4__1ygZJ","icon-delivery":"style_icon-delivery__1Ah8l","icon-wishlist":"style_icon-wishlist__2I8LL","icon-exit":"style_icon-exit__2Onyx","icon-padlock":"style_icon-padlock__2rJpI","icon-member-card":"style_icon-member-card__fOtFF","icon-address":"style_icon-address__3FH9o","icon-credit-card":"style_icon-credit-card__33wMB","icon-invite":"style_icon-invite__1hOb1","icon-prescription":"style_icon-prescription__u298Q"}},tvUw:function(e,a,r){"use strict";var o=r("q1tI"),s=r.n(o),n=r("YFqc"),t=r.n(n),i=r("7/EZ"),c=r.n(i),d=r("pqpu"),l=r.n(d),_=r("20a2"),m=s.a.createElement;a.a=function(){var e=Object(_.useRouter)(),a=Object(o.useState)([{to:"/Accounts/Profiles",icon:"icon-member-card",label:"MY PROFILE"},{to:"/Accounts/Order",icon:"icon-delivery",label:"MY ORDER"},{to:"/Accounts/MyPrescription",icon:"icon-prescription",label:"MY PRESCRIPTION"},{to:"/Accounts/Payments",icon:"icon-credit-card",label:"PAYMENTS"},,{to:"/Accounts/ChangeNumbers",icon:"icon-padlock",label:"CHANGE NUMBER"},{to:"/Accounts/Invites",icon:"icon-invite",label:"INVITE / PEER"},{to:"",icon:"icon-exit",label:"LOGOUT"}]),r=a[0];return a[1],m("div",{className:"col-md-3"},m("div",{className:c.a.accountDetails},m("ul",null,r.map((function(a,r){var o=a.icon,s=a.to,n=a.label;return m("div",{key:r},m(t.a,{href:s},m("li",{className:"".concat(c.a.accountList," ").concat(e.pathname===s?c.a.accountActiveList:"")},m("i",{className:"".concat(l.a.icons," ").concat(l.a[o])}),m("b",null,n))))})))))}}},[["fdKU",0,1,2,3,4,5]]]);