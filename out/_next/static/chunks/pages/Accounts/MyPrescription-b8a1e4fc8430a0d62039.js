_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"7/EZ":function(e,t,n){e.exports={accountDetails:"Account_accountDetails__2QXpL",myAccount:"Account_myAccount__a__6t",accountList:"Account_accountList__1yhPQ",accountActiveList:"Account_accountActiveList__Xwri7"}},Ada9:function(e,t,n){"use strict";n.r(t);var c=n("q1tI"),o=n.n(c),i=n("Ogzj"),r=n("Fl18"),a=n("U9ru"),s=n.n(a),l=o.a.createElement;var u=function(){var e=Object(c.useState)([{},{}]),t=e[0];return e[1],l("div",{className:s.a.trackBorder},l("div",{className:s.a.prescriptionTitle},l("b",null,"My Prescription")),l("div",{className:"row"},t.map((function(e,t){return l("div",{className:"col-md-5"},l("div",{className:s.a.prescriptionBox},l("div",{className:"row"},l("div",{className:"col-md-8"},l("img",{src:"/prescription-img.png"})),l("div",{className:"col-md-4"},l("div",{className:s.a.alignRight},l("img",{src:"/deltee.png"}),l("br",null),l("img",{src:"/elipse.png"}),l("br",null),l("img",{src:"/download.png"}))))))}))))},p=n("L/5Q"),_=n("tvUw"),d=o.a.createElement;t.default=function(){return d("div",null,d(i.a,null),d("div",{className:"container"},d(p.a,null),d("div",{className:"d-flex"},d(_.a,null),d(u,null))),d(r.a,null))}},"L/5Q":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n("q1tI"),o=n.n(c),i=n("7/EZ"),r=n.n(i),a=n("20a2"),s=o.a.createElement;function l(){var e=Object(a.useRouter)();return s("div",{className:r.a.hideX},s("div",{className:"container"},s("div",{className:"row"},s("div",{className:"col-md-12 ".concat(r.a.myAccount," content")},s("br",null),s("span",{onClick:function(){return e.push("/")}},"Home"),s("span",null,"> My Accuount"),s("br",null),s("b",null,"My Account Details"),s("hr",null)))))}},LFIU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accounts/MyPrescription",function(){return n("Ada9")}])},U9ru:function(e,t,n){e.exports={trackBorder:"PrescriptionComponent_trackBorder__1SEQa",prescriptionBox:"PrescriptionComponent_prescriptionBox__VLRir",alignRight:"PrescriptionComponent_alignRight__2lXsb",prescriptionTitle:"PrescriptionComponent_prescriptionTitle__2ZuxB"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),r=n("elyg"),a=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,c){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,c).catch((function(e){0}));var o=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",p=i.default.useMemo((function(){var t=(0,r.resolveHref)(o,e.href,!0),n=c(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,r.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),_=p.href,d=p.as,f=e.children,v=e.replace,m=e.shallow,y=e.scroll,h=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var b=i.Children.only(f),g=b&&"object"===typeof b&&b.ref,N=(0,s.useIntersection)({rootMargin:"200px"}),E=c(N,2),L=E[0],w=E[1],A=i.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);(0,i.useEffect)((function(){var e=w&&t&&(0,r.isLocalURL)(_),c="undefined"!==typeof h?h:n&&n.locale,o=l[_+"%"+d+(c?"%"+c:"")];e&&!o&&u(n,_,d,{locale:c})}),[d,_,w,h,t,n]);var M={ref:A,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,c,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=c.indexOf("#")<0),t[o?"replace":"push"](n,c,{shallow:i,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,_,d,v,m,y,h)},onMouseEnter:function(e){(0,r.isLocalURL)(_)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,_,d,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var R="undefined"!==typeof h?h:n&&n.locale,I=(0,r.getDomainLocale)(d,R,n&&n.locales,n&&n.domainLocales);M.href=I||(0,r.addBasePath)((0,r.addLocale)(d,R,n&&n.defaultLocale))}return i.default.cloneElement(b,M)};t.default=p},pqpu:function(e,t,n){e.exports={icons:"style_icons__2jNpL","icon-user":"style_icon-user__4grKo","icon-shopping-cart":"style_icon-shopping-cart__fwI4K","icon-pap-5":"style_icon-pap-5__323_i",path1:"style_path1__10Bpk",path2:"style_path2__1qvpZ",path3:"style_path3__3k11U",path4:"style_path4__1W_nS","icon-pap-3":"style_icon-pap-3__-tT0u",path5:"style_path5__2Thsk",path6:"style_path6__17tam",path7:"style_path7__3G2Vg","icon-pap-2":"style_icon-pap-2__C4f8H","icon-pap-1":"style_icon-pap-1__-xxXN","icon-pap-4":"style_icon-pap-4__3gzBM","icon-imported-1":"style_icon-imported-1__1PbGe","icon-imported-2":"style_icon-imported-2__3cFRz","icon-imported-3":"style_icon-imported-3__1yip2","icon-imported-4":"style_icon-imported-4__1ygZJ","icon-delivery":"style_icon-delivery__1Ah8l","icon-wishlist":"style_icon-wishlist__2I8LL","icon-exit":"style_icon-exit__2Onyx","icon-padlock":"style_icon-padlock__2rJpI","icon-member-card":"style_icon-member-card__fOtFF","icon-address":"style_icon-address__3FH9o","icon-credit-card":"style_icon-credit-card__33wMB","icon-invite":"style_icon-invite__1hOb1","icon-prescription":"style_icon-prescription__u298Q"}},tvUw:function(e,t,n){"use strict";var c=n("q1tI"),o=n.n(c),i=n("YFqc"),r=n.n(i),a=n("7/EZ"),s=n.n(a),l=n("pqpu"),u=n.n(l),p=n("20a2"),_=o.a.createElement;t.a=function(){var e=Object(p.useRouter)(),t=Object(c.useState)([{to:"/Accounts/Profiles",icon:"icon-member-card",label:"MY PROFILE"},{to:"/Accounts/Order",icon:"icon-delivery",label:"MY ORDER"},{to:"/Accounts/MyPrescription",icon:"icon-prescription",label:"MY PRESCRIPTION"},{to:"/Accounts/Payments",icon:"icon-credit-card",label:"PAYMENTS"},,{to:"/Accounts/ChangeNumbers",icon:"icon-padlock",label:"CHANGE NUMBER"},{to:"/Accounts/Invites",icon:"icon-invite",label:"INVITE / PEER"},{to:"",icon:"icon-exit",label:"LOGOUT"}]),n=t[0];return t[1],_("div",{className:"col-md-3"},_("div",{className:s.a.accountDetails},_("ul",null,n.map((function(t,n){var c=t.icon,o=t.to,i=t.label;return _("div",{key:n},_(r.a,{href:o},_("li",{className:"".concat(s.a.accountList," ").concat(e.pathname===o?s.a.accountActiveList:"")},_("i",{className:"".concat(u.a.icons," ").concat(u.a[c])}),_("b",null,i))))})))))}},vNVm:function(e,t,n){"use strict";var c=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=(0,i.useRef)(),l=(0,i.useState)(!1),u=c(l,2),p=u[0],_=u[1],d=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||p||e&&e.tagName&&(o.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var c=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:c}),n}(n),o=c.id,i=c.observer,r=c.elements;return r.set(e,t),i.observe(e),function(){r.delete(e),i.unobserve(e),0===r.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[n,t,p]);return(0,i.useEffect)((function(){a||p||(0,r.default)((function(){return _(!0)}))}),[p]),[d,p]};var i=n("q1tI"),r=o(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var s=new Map}},[["LFIU",1,2,0,3,4,5]]]);