_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n("q1tI"),o=n.n(r),u=n("/MKj"),c=n("rePB"),i=n("ANjH"),a=n("5HXA");function f(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"===typeof o?o(n,r,t):e(o)}}}}var s=f();s.withExtraArgument=f;var O,p=s,_=n("ChW8"),d={userDetails:{},userToken:"",cartProducts:[]},l={auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(console.log(t.userDetails=r,"hjk"),n){case _.b:return{userDetails:r};case _.c:return{userToken:r};case _.a:return{cartProducts:r};default:return t}}},w=Object(i.combineReducers)(l);function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){return Object(i.createStore)(w,t,Object(a.composeWithDevTools)(Object(i.applyMiddleware)(p)))}function D(t){return Object(r.useMemo)((function(){return function(t){var e,n=null!==(e=O)&&void 0!==e?e:j(t);return t&&O&&(n=j(b(b({},O.getState()),t)),O=void 0),O||(O=n),n}(t)}),[t])}n("q4sD"),n("X2ca"),n("5iDs"),n("pRI8"),n("LOwk");var T=o.a.createElement;function v(t){var e=t.Component,n=t.pageProps,r=D(n.initialReduxState);return T(u.a,{store:r},T(e,n))}},"5HXA":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},"5iDs":function(t,e,n){},ChW8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var r="USER_DETAILS",o="USER_TOKEN",u="CART_PRODUCTS"},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},LOwk:function(t,e,n){},X2ca:function(t,e,n){},pRI8:function(t,e,n){},q4sD:function(t,e,n){},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}},[[0,1,2,10,0,3]]]);