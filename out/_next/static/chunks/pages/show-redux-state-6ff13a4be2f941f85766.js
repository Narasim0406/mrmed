_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"7vlR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show-redux-state",function(){return t("pirR")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),i=t("vNVm"),f={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=a.Children.only(v),m=w&&"object"===typeof w&&w.ref,_=(0,i.useIntersection)({rootMargin:"200px"}),E=r(_,2),L=E[0],M=E[1],O=a.default.useCallback((function(e){L(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,M,b,n,t]);var R={ref:O,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,h,y,g,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var k="undefined"!==typeof b?b:t&&t.locale,N=(0,c.getDomainLocale)(p,k,t&&t.locales,t&&t.domainLocales);R.href=N||(0,c.addBasePath)((0,c.addLocale)(p,k,t&&t.defaultLocale))}return a.default.cloneElement(w,R)};n.default=s},pirR:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("/MKj"),c=t("YFqc"),u=t.n(c),i=o.a.createElement,f={background:"#ebebeb",width:400,padding:10,border:"1px solid grey",marginBottom:10};n.default=function(){var e=Object(a.c)((function(e){return e}));return i(o.a.Fragment,null,i("pre",{style:f},i("code",null,JSON.stringify(e,null,4))),i(u.a,{href:"/"},i("a",null,"Go Back Home")))}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,a.useRef)(),f=(0,a.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||s||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,a.useEffect)((function(){u||s||(0,c.default)((function(){return d(!0)}))}),[s]),[p,s]};var a=t("q1tI"),c=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map},wx14:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},zLVn:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))}},[["7vlR",1,2,0,6]]]);