_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/1DH":function(e,t){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n| <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n| <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>')},"7/EZ":function(e,t,n){e.exports={accountDetails:"Account_accountDetails__2QXpL",myAccount:"Account_myAccount__a__6t",accountList:"Account_accountList__1yhPQ",accountActiveList:"Account_accountActiveList__Xwri7"}},Ada9:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),c=n.n(o),i=n("Ogzj"),r=n("Fl18"),a=n("U9ru"),s=n.n(a),l=c.a.createElement;var u=function(){var e=Object(o.useState)([{},{}]),t=e[0];return e[1],l("div",{className:s.a.trackBorder},l("div",{className:s.a.prescriptionTitle},l("b",null,"My Prescription")),l("div",{className:"row"},t.map((function(e,t){return l("div",{className:"col-md-5"},l("div",{className:s.a.prescriptionBox},l("div",{className:"row"},l("div",{className:"col-md-8"},l("img",{src:"/prescription-img.png"})),l("div",{className:"col-md-4"},l("div",{className:s.a.alignRight},l("img",{src:"/deltee.png"}),l("br",null),l("img",{src:"/elipse.png"}),l("br",null),l("img",{src:"/download.png"}))))))}))))},p=n("L/5Q"),_=n("tvUw"),d=c.a.createElement;t.default=function(){return d("div",null,d(i.a,null),d("div",{className:"container"},d(p.a,null),d("div",{className:"d-flex"},d(_.a,null),d(u,null))),d(r.a,null))}},"L/5Q":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("q1tI"),c=n.n(o),i=n("7/EZ"),r=n.n(i),a=n("20a2"),s=c.a.createElement;function l(){var e=Object(a.useRouter)();return s("div",{className:r.a.hideX},s("div",{className:"container"},s("div",{className:"row"},s("div",{className:"col-md-12 ".concat(r.a.myAccount," content")},s("br",null),s("span",{onClick:function(){return e.push("/")}},"Home"),s("span",null,"> My Accuount"),s("br",null),s("b",null,"My Account Details"),s("hr",null)))))}},LFIU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Accounts/MyPrescription",function(){return n("Ada9")}])},U9ru:function(e,t,n){e.exports={trackBorder:"PrescriptionComponent_trackBorder__1SEQa",prescriptionBox:"PrescriptionComponent_prescriptionBox__VLRir",alignRight:"PrescriptionComponent_alignRight__2lXsb",prescriptionTitle:"PrescriptionComponent_prescriptionTitle__2ZuxB"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var i=c(n("q1tI")),r=n("elyg"),a=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,o){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var c=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),c=n&&n.pathname||"/",p=i.default.useMemo((function(){var t=(0,r.resolveHref)(c,e.href,!0),n=o(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,r.resolveHref)(c,e.as):a||i}}),[c,e.href,e.as]),_=p.href,d=p.as,f=e.children,v=e.replace,m=e.shallow,h=e.scroll,y=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var g=i.Children.only(f),b=g&&"object"===typeof g&&g.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),N=o(w,2),E=N[0],L=N[1],k=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);(0,i.useEffect)((function(){var e=L&&t&&(0,r.isLocalURL)(_),o="undefined"!==typeof y?y:n&&n.locale,c=l[_+"%"+d+(o?"%"+o:"")];e&&!c&&u(n,_,d,{locale:o})}),[d,_,L,y,t,n]);var M={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,o,c,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=o.indexOf("#")<0),t[c?"replace":"push"](n,o,{shallow:i,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,_,d,v,m,h,y)},onMouseEnter:function(e){(0,r.isLocalURL)(_)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,_,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var A="undefined"!==typeof y?y:n&&n.locale,C=(0,r.getDomainLocale)(d,A,n&&n.locales,n&&n.domainLocales);M.href=C||(0,r.addBasePath)((0,r.addLocale)(d,A,n&&n.defaultLocale))}return i.default.cloneElement(g,M)};t.default=p},pqpu:function(e,t,n){e.exports={icons:"style_icons__2jNpL","icon-user":"style_icon-user__4grKo","icon-shopping-cart":"style_icon-shopping-cart__fwI4K","icon-pap-5":"style_icon-pap-5__323_i",path1:"style_path1__10Bpk",path2:"style_path2__1qvpZ",path3:"style_path3__3k11U",path4:"style_path4__1W_nS","icon-pap-3":"style_icon-pap-3__-tT0u",path5:"style_path5__2Thsk",path6:"style_path6__17tam",path7:"style_path7__3G2Vg","icon-pap-2":"style_icon-pap-2__C4f8H","icon-pap-1":"style_icon-pap-1__-xxXN","icon-pap-4":"style_icon-pap-4__3gzBM","icon-imported-1":"style_icon-imported-1__1PbGe","icon-imported-2":"style_icon-imported-2__3cFRz","icon-imported-3":"style_icon-imported-3__1yip2","icon-imported-4":"style_icon-imported-4__1ygZJ","icon-delivery":"style_icon-delivery__1Ah8l","icon-wishlist":"style_icon-wishlist__2I8LL","icon-exit":"style_icon-exit__2Onyx","icon-padlock":"style_icon-padlock__2rJpI","icon-member-card":"style_icon-member-card__fOtFF","icon-address":"style_icon-address__3FH9o","icon-credit-card":"style_icon-credit-card__33wMB","icon-invite":"style_icon-invite__1hOb1","icon-prescription":"style_icon-prescription__u298Q"}},tvUw:function(e,t,n){"use strict";var o=n("q1tI"),c=n.n(o),i=n("YFqc"),r=n.n(i),a=n("7/EZ"),s=n.n(a),l=n("pqpu"),u=n.n(l),p=(n("/1DH"),n("20a2")),_=c.a.createElement;t.a=function(){var e=Object(p.useRouter)(),t=Object(o.useState)([{to:"/Accounts/Profiles",icon:"icon-member-card",label:"MY PROFILE"},{to:"/Accounts/Order",icon:"icon-delivery",label:"MY ORDER"},{to:"/Accounts/MyPrescription",icon:"icon-prescription",label:"MY PRESCRIPTION"},{to:"/Accounts/Payments",icon:"icon-credit-card",label:"PAYMENTS"},,{to:"/Accounts/ChangeNumbers",icon:"icon-padlock",label:"CHANGE NUMBER"},{to:"/Accounts/Invites",icon:"icon-invite",label:"INVITE / PEER"},{to:"",icon:"icon-exit",label:"LOGOUT"}]),n=t[0];return t[1],_("div",{className:"col-md-3"},_("div",{className:s.a.accountDetails},_("ul",null,n.map((function(t,n){var o=t.icon,c=t.to,i=t.label;return _("div",{key:n},_(r.a,{href:c},_("li",{className:"".concat(s.a.accountList," ").concat(e.pathname===c?s.a.accountActiveList:"")},_("i",{className:"".concat(u.a.icons," ").concat(u.a[o])}),_("b",null,i))))})))))}},vNVm:function(e,t,n){"use strict";var o=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,i.useRef)(),l=(0,i.useState)(!1),u=o(l,2),p=u[0],_=u[1],d=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||p||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:c,elements:o}),n}(n),c=o.id,i=o.observer,r=o.elements;return r.set(e,t),i.observe(e),function(){r.delete(e),i.unobserve(e),0===r.size&&(i.disconnect(),s.delete(c))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[n,t,p]);return(0,i.useEffect)((function(){a||p||(0,r.default)((function(){return _(!0)}))}),[p]),[d,p]};var i=n("q1tI"),r=c(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var s=new Map}},[["LFIU",1,2,0,3,4,5]]]);