_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"/mEk":function(t,e,r){t.exports={indication:"ShopProductComponent_indication__1PbAx"}},"1OyB":function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},"3zBw":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),a=r.n(n),c=r("Ogzj"),o=r("Fl18"),u=r("vDqi"),s=r.n(u),i=r("20a2"),l=r("w89z"),d=r("/MKj"),f=r("rcTn"),p=r("o0o1"),m=r.n(p),_=r("HaE+"),b=r("1OyB"),g=r("vuIU"),y=r("JX7q"),P=r("Ji7U"),h=r("md7G"),v=r("foSv"),O=r("rePB"),w=r("s9F9"),j=r.n(w),A=a.a.createElement;function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var a=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var k=function(t){Object(P.a)(r,t);var e=N(r);function r(){var t;return Object(b.a)(this,r),t=e.call(this),Object(O.a)(Object(y.a)(t),"componentDidMount",Object(_.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.userData){e.next=3;break}return e.next=3,t.props.dispatch(Object(l.d)(JSON.parse(localStorage.userData)));case 3:console.log("sdfsdfgsdfg",t.props),t.fetchProducts(),t.fetchCart();case 6:case"end":return e.stop()}}),e)})))),Object(O.a)(Object(y.a)(t),"fetchProducts",Object(_.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(f.d,"/product/allProducts?page=1&size=10&specialityProduct=&conditionProduct=")).then((function(e){t.setState({products:e.data.data.list})}));case 2:case"end":return e.stop()}}),e)})))),Object(O.a)(Object(y.a)(t),"fetchCart",Object(_.a)(m.a.mark((function e(){var r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props.userDetail,console.log(r,"get cart dsfgsdfgsdfg"),n="".concat(f.d,"/cart?userId=").concat(r.userId),e.next=5,s.a.get(n).then((function(e){t.props.dispatch(Object(l.a)(e.data.data.cartData)),t.setState({cartData:e.data.data.cartData})}));case 5:case"end":return e.stop()}}),e)})))),Object(O.a)(Object(y.a)(t),"flows",(function(e){console.log("asdfasdffadgdfgsdg",e),t.props.myCart?t.props.router.push({pathname:"/SingleProduct",query:{myCart:!0,id:e._id}}):t.props.router.push({pathname:"/SingleProduct",query:{myCart:!1,id:e._id}})})),Object(O.a)(Object(y.a)(t),"addToCart",function(){var e=Object(_.a)(m.a.mark((function e(r){var n,a,c,o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.userDetail,console.log(t.props,"add cart dsfgsdfgsdfg"),a={userId:n.userId,productId:r._id,quantity:1},c="".concat(f.d,"/cart"),e.next=6,s.a.post(c,a);case 6:if(200!==(o=e.sent).status){e.next=15;break}return console.log(o),t.fetchCart(),e.next=12,t.state.cartData.map((function(t){return t.productId===r._id?r._id:-1}));case 12:u=e.sent,console.log(u),t.setState({cartIndexes:u});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.state={products:[],cartData:[],cartIndexes:[]},t}return Object(g.a)(r,[{key:"render",value:function(){var t=this,e=this.state;e.cartProducts,e.cartDetails;return A("div",{className:"row"},A("div",{className:"col-md-12"},A("div",{className:"row"},A("div",{className:"col-md-6 ".concat(j.a.menu)},A("img",{src:"/menu.png"}),A("img",{src:"/list.png"}))),A("div",{className:"row"},this.state.products.map((function(e,r){var n,a=e.id,c=e.medicineName,o=e.manufacturer,u=e.price,s=e.discountPrice,i=e.PAP,l=e.discountPercentage;t.props.myCart;return A("div",{className:"col-md-4",key:r},A("div",{className:j.a.bottom},A("div",{className:j.a.image,onClick:function(){return t.flows(e)}},A("div",{className:j.a.offerBadge},A("b",null,l,"%")),A("img",{src:"/product-3.png"})),A("div",{className:j.a.category},A("span",null,"Diabetes"),A("div",{className:j.a.right},A("span",null,e.packingSize))),A("b",{className:j.a.name},c),i&&A("img",{className:j.a.prescriptionImg,src:"/prescription.png"}),A("br",null),A("span",{className:j.a.company},"Manufacturer: ",o),A("hr",null),A("b",{className:j.a.discountPrice},"\u20b9 ",(u-s).toFixed(2)),A("span",{className:j.a.actualPrice},"MRP \u20b9 ",u),A("div",{className:j.a.right},null!==(n=t.state.cartIndexes)&&void 0!==n&&n.includes(a)?A("button",{key:a,className:j.a.btnAdded},"\u2713"):A("button",{key:a,onClick:function(){return t.addToCart(e)},className:j.a.btnAdd},"+"))))})))))}}]),r}(a.a.Component),x=Object(d.b)((function(t){return{userDetail:t.auth.userDetails,cartDetail:t.cartDetail,productList:t.productList}}))(k),D=a.a.createElement;var C=function(){var t=Object(i.useRouter)(),e=Object(d.c)(),r=Object(d.d)((function(t){return t.auth})),n=t.query.myCart;return D(x,{myCart:n,dispatch:e,router:t,userDetail:r})},S=r("/mEk"),I=r.n(S),E=a.a.createElement;var B=function(){var t=Object(i.useRouter)();return E("div",null,E("div",{className:"container"},E("div",{className:"col-md-12 ".concat(I.a.indication)},E("br",null),E("span",{onClick:function(){return t.push("/")}},"Home"),E("span",null," > All Products"),E("br",null),E("b",null,"Products"),E("hr",null)),E(C,null)))},J=a.a.createElement;e.default=function(){return J("div",null,J(c.a,null),J(B,null),J(o.a,null))}},"52n1":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ShopProductComponent",function(){return r("3zBw")}])},Ji7U:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return a}))},foSv:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},md7G:function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.d(e,"a",(function(){return c}));var a=r("JX7q");function c(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?Object(a.a)(t):e}},s9F9:function(t,e,r){t.exports={categoryTitle:"AllProduct_categoryTitle__215ow",image:"AllProduct_image__2MNqb",bottom:"AllProduct_bottom__1Z2nC",category:"AllProduct_category__2Aea7",company:"AllProduct_company__5w6wZ",right:"AllProduct_right__2nkTY",name:"AllProduct_name__16MVJ",discountPrice:"AllProduct_discountPrice__hnJY3",actualPrice:"AllProduct_actualPrice__24lne",btnAdd:"AllProduct_btnAdd__3baZl",btnAdded:"AllProduct_btnAdded__QR_A9",btnView:"AllProduct_btnView__3uFJo",categoryBorder:"AllProduct_categoryBorder__2OJ3U",offerBadge:"AllProduct_offerBadge__2ghsD",menu:"AllProduct_menu__9xEZH",sortDropdown:"AllProduct_sortDropdown__2oPGX",prescriptionImg:"AllProduct_prescriptionImg__37kB1",customCheckbox:"AllProduct_customCheckbox__2oIDA",checkboxLabel:"AllProduct_checkboxLabel__mPUsd"}},vuIU:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return a}))}},[["52n1",0,1,2,3,4]]]);