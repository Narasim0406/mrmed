_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"2L1c":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),c=t("Ogzj"),s=t("Fl18"),l=t("L/5Q"),i=t("CvHn"),r=t.n(i),d=t("W757"),u=o.a.createElement;var p=function(){return u("div",{className:r.a.trackBorder},u("div",{className:r.a.personalDetail},u("b",null,"Personal Details")),u("div",{className:"row"},u("div",{className:"col-md-6"},u("div",{className:r.a.profileField},u("span",null,"Full Name")),u("input",{className:r.a.profileInput,type:"text",placeholder:"Enter Name"})),u("div",{className:"col-md-6"},u("div",{className:r.a.profileField},u("span",null,"Date of Birth")),u("input",{className:r.a.profileInput,type:"text",placeholder:"Enter Name"})),u("div",{className:"col-md-6"},u("div",{className:r.a.profileField},u("span",null,"Gender")),u("input",{className:r.a.profileInput,type:"text",placeholder:"Enter Name"})),u("div",{className:"col-md-6"},u("div",{className:r.a.profileField},u("span",null,"Blood Group")),u("input",{className:r.a.profileInput,type:"text",placeholder:"Enter Name"}))),u("button",{className:r.a.btnSave},u("b",null,"SAVE")),u(d.a,null))},_=t("tvUw"),m=o.a.createElement;n.default=function(){return m("div",null,m(c.a,null),m("div",{className:"container"},m(l.a,null),m("div",{className:"d-flex"},m(_.a,null),m(p,null))),m(s.a,null))}},"7/EZ":function(e,n,t){e.exports={accountDetails:"Account_accountDetails__2QXpL",myAccount:"Account_myAccount__a__6t",accountList:"Account_accountList__1yhPQ",accountActiveList:"Account_accountActiveList__Xwri7"}},CvHn:function(e,n,t){e.exports={trackBorder:"ProfileComponent_trackBorder__1XhZB",personalDetail:"ProfileComponent_personalDetail__1nEKN",profileField:"ProfileComponent_profileField__2NfEV",profileInput:"ProfileComponent_profileInput__1dAWj",btnSave:"ProfileComponent_btnSave__r1ToK"}},"L/5Q":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),o=t.n(a),c=t("7/EZ"),s=t.n(c),l=t("20a2"),i=o.a.createElement;function r(){var e=Object(l.useRouter)();return i("div",{className:s.a.hideX},i("div",{className:"container"},i("div",{className:"row"},i("div",{className:"col-md-12 ".concat(s.a.myAccount," content")},i("br",null),i("span",{onClick:function(){return e.push("/")}},"Home"),i("span",null,"> My Accuount"),i("br",null),i("b",null,"My Account Details"),i("hr",null)))))}},W757:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),c=t("c0LS"),s=t.n(c),l=o.a.createElement;n.a=function(){return l(o.a.Fragment,null,l("div",{className:"".concat(s.a.addressDetail," mt-5")},l("b",null,"Saved Address Details")),l("div",{className:"row"},l("div",{className:"col-md-5 col-12"},l("div",{className:s.a.addressBox},l("div",{className:"row"},l("div",{className:"col-md-8 col-8"},l("b",{className:s.a.addressName},"John Doe"),l("div",{className:s.a.addressNumber},l("span",null,"+91 56182 16548"))),l("div",{className:"col-md-4 col-4"},l("div",{className:s.a.place},l("span",null,"Home")))),l("p",{className:s.a.address},"12 Random street in random city Chennai, Tamil nadu - 600000"))),l("div",{className:"col-md-5 col-12"},l("div",{className:s.a.addressBox},l("div",{className:"row"},l("div",{className:"col-md-8 col-8"},l("b",{className:s.a.addressName},"John Doe"),l("div",{className:s.a.addressNumber},l("span",null,"+91 56182 16548"))),l("div",{className:"col-md-4 col-4"},l("div",{className:s.a.place},l("span",null,"Office")))),l("p",{className:s.a.address},"12 Random street in random city Chennai, Tamil nadu - 600000")))),l("button",{className:s.a.btnNew},l("b",null,"ADD NEW")))}},YFqc:function(e,n,t){e.exports=t("cTJO")},c0LS:function(e,n,t){e.exports={trackBorder:"AddressComponent_trackBorder__1oC3Q",addressDetail:"AddressComponent_addressDetail__2LUUe",addressBox:"AddressComponent_addressBox__2lhlo",place:"AddressComponent_place__1IP5p",addressName:"AddressComponent_addressName__1iYIk",addressNumber:"AddressComponent_addressNumber__2Hoc2",address:"AddressComponent_address__2Qwhn",btnNew:"AddressComponent_btnNew__2HTOC"}},cTJO:function(e,n,t){"use strict";var a=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),s=t("elyg"),l=t("nOHt"),i=t("vNVm"),r={};function d(e,n,t,a){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,a).catch((function(e){0}));var o=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;r[n+"%"+t+(o?"%"+o:"")]=!0}}var u=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.pathname||"/",u=c.default.useMemo((function(){var n=(0,s.resolveHref)(o,e.href,!0),t=a(n,2),c=t[0],l=t[1];return{href:c,as:e.as?(0,s.resolveHref)(o,e.as):l||c}}),[o,e.href,e.as]),p=u.href,_=u.as,m=e.children,f=e.replace,v=e.shallow,N=e.scroll,y=e.locale;"string"===typeof m&&(m=c.default.createElement("a",null,m));var h=c.Children.only(m),b=h&&"object"===typeof h&&h.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),A=a(E,2),w=A[0],L=A[1],C=c.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,c.useEffect)((function(){var e=L&&n&&(0,s.isLocalURL)(p),a="undefined"!==typeof y?y:t&&t.locale,o=r[p+"%"+_+(a?"%"+a:"")];e&&!o&&d(t,p,_,{locale:a})}),[_,p,L,y,n,t]);var I={ref:C,onClick:function(e){h.props&&"function"===typeof h.props.onClick&&h.props.onClick(e),e.defaultPrevented||function(e,n,t,a,o,c,l,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=a.indexOf("#")<0),n[o?"replace":"push"](t,a,{shallow:c,locale:i,scroll:l}).then((function(e){e&&l&&document.body.focus()})))}(e,t,p,_,f,v,N,y)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(h.props&&"function"===typeof h.props.onMouseEnter&&h.props.onMouseEnter(e),d(t,p,_,{priority:!0}))}};if(e.passHref||"a"===h.type&&!("href"in h.props)){var g="undefined"!==typeof y?y:t&&t.locale,x=(0,s.getDomainLocale)(_,g,t&&t.locales,t&&t.domainLocales);I.href=x||(0,s.addBasePath)((0,s.addLocale)(_,g,t&&t.defaultLocale))}return c.default.cloneElement(h,I)};n.default=u},jqU2:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accounts/Profiles",function(){return t("2L1c")}])},pqpu:function(e,n,t){e.exports={icons:"style_icons__2jNpL","icon-user":"style_icon-user__4grKo","icon-shopping-cart":"style_icon-shopping-cart__fwI4K","icon-pap-5":"style_icon-pap-5__323_i",path1:"style_path1__10Bpk",path2:"style_path2__1qvpZ",path3:"style_path3__3k11U",path4:"style_path4__1W_nS","icon-pap-3":"style_icon-pap-3__-tT0u",path5:"style_path5__2Thsk",path6:"style_path6__17tam",path7:"style_path7__3G2Vg","icon-pap-2":"style_icon-pap-2__C4f8H","icon-pap-1":"style_icon-pap-1__-xxXN","icon-pap-4":"style_icon-pap-4__3gzBM","icon-imported-1":"style_icon-imported-1__1PbGe","icon-imported-2":"style_icon-imported-2__3cFRz","icon-imported-3":"style_icon-imported-3__1yip2","icon-imported-4":"style_icon-imported-4__1ygZJ","icon-delivery":"style_icon-delivery__1Ah8l","icon-wishlist":"style_icon-wishlist__2I8LL","icon-exit":"style_icon-exit__2Onyx","icon-padlock":"style_icon-padlock__2rJpI","icon-member-card":"style_icon-member-card__fOtFF","icon-address":"style_icon-address__3FH9o","icon-credit-card":"style_icon-credit-card__33wMB","icon-invite":"style_icon-invite__1hOb1","icon-prescription":"style_icon-prescription__u298Q"}},tvUw:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),c=t("YFqc"),s=t.n(c),l=t("7/EZ"),i=t.n(l),r=t("pqpu"),d=t.n(r),u=t("20a2"),p=o.a.createElement;n.a=function(){var e=Object(u.useRouter)(),n=Object(a.useState)([{to:"/Accounts/Profiles",icon:"icon-member-card",label:"MY PROFILE"},{to:"/Accounts/Order",icon:"icon-delivery",label:"MY ORDER"},{to:"/Accounts/MyPrescription",icon:"icon-prescription",label:"MY PRESCRIPTION"},{to:"/Accounts/Payments",icon:"icon-credit-card",label:"PAYMENTS"},,{to:"/Accounts/ChangeNumbers",icon:"icon-padlock",label:"CHANGE NUMBER"},{to:"/Accounts/Invites",icon:"icon-invite",label:"INVITE / PEER"},{to:"",icon:"icon-exit",label:"LOGOUT"}]),t=n[0];return n[1],p("div",{className:"col-md-3"},p("div",{className:i.a.accountDetails},p("ul",null,t.map((function(n,t){var a=n.icon,o=n.to,c=n.label;return p("div",{key:t},p(s.a,{href:o},p("li",{className:"".concat(i.a.accountList," ").concat(e.pathname===o?i.a.accountActiveList:"")},p("i",{className:"".concat(d.a.icons," ").concat(d.a[a])}),p("b",null,c))))})))))}},vNVm:function(e,n,t){"use strict";var a=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,o=(0,c.useRef)(),r=(0,c.useState)(!1),d=a(r,2),u=d[0],p=d[1],_=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,n,t){var a=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:a}),t}(t),o=a.id,c=a.observer,s=a.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,u]);return(0,c.useEffect)((function(){l||u||(0,s.default)((function(){return p(!0)}))}),[u]),[_,u]};var c=t("q1tI"),s=o(t("0G5g")),l="undefined"!==typeof IntersectionObserver;var i=new Map}},[["jqU2",1,2,0,3,4,5]]]);