(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3672],{7882:function(t,a,e){"use strict";var s=e(7294),r=s.createElement;function n(t){var a=t.title,e=t.subTitle;return r("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},r("div",{className:"container"},r("h1",{className:"page-title"},a,r("span",null,e))))}a.Z=s.memo(n)},784:function(t,a,e){"use strict";e.r(a);var s=e(6265),r=e(7294),n=e(8216),i=e(8335),l=e(812),c=e(7882),o=e(2806),m=e(6442),u=r.createElement;function p(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?p(Object(e),!0).forEach((function(a){(0,s.Z)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}a.default=(0,n.$j)((function(t){return{cartItems:t.cartlist.data}}),d({},o.Nw))((function(t){var a=(0,r.useState)([]),e=a[0],s=a[1],n=(0,r.useState)(0),o=n[0],p=n[1];function b(t){p(t)}return(0,r.useEffect)((function(){s(t.cartItems)}),[t.cartItems]),u("div",{className:"main"},u(c.Z,{title:"Shopping Cart",subTitle:"Shop"}),u("nav",{className:"breadcrumb-nav"},u("div",{className:"container"},u("ol",{className:"breadcrumb"},u("li",{className:"breadcrumb-item"},u(i.Z,{href:"/"},"Home")),u("li",{className:"breadcrumb-item"},u(i.Z,{href:"/shop/sidebar/list"},"Shop")),u("li",{className:"breadcrumb-item active"},"Shopping Cart")))),u("div",{className:"page-content pb-5"},u("div",{className:"cart"},u("div",{className:"container"},e.length>0?u("div",{className:"row"},u("div",{className:"col-lg-9"},u("table",{className:"table table-cart table-mobile"},u("thead",null,u("tr",null,u("th",null,"Product"),u("th",null,"Price"),u("th",null,"Quantity"),u("th",null,"Total"),u("th",null))),u("tbody",null,e.length>0?e.map((function(a,r){return u("tr",{key:r},u("td",{className:"product-col"},u("div",{className:"product"},u("figure",{className:"product-media"},u(i.Z,{href:"/product/default/".concat(a.slug),className:"product-image"},u("img",{src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,alt:"product"}))),u("h4",{className:"product-title"},u(i.Z,{href:"/product/default/".concat(a.slug)},a.name)))),u("td",{className:"price-col"},"$",a.sale_price?a.sale_price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):a.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),u("td",{className:"quantity-col"},u(l.Z,{value:a.qty,changeQty:function(t){return function(t,a){s(e.map((function(e,s){return s==a?d(d({},e),{},{qty:t,sum:(e.sale_price?e.sale_price:e.price)*t}):e})))}(t,r)},adClass:"cart-product-quantity"})),u("td",{className:"total-col"},"$",a.sum.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})),u("td",{className:"remove-col"},u("button",{className:"btn-remove",onClick:function(){return t.removeFromCart(a)}},u("i",{className:"icon-close"}))))})):u("tr",null,u("td",null,u("p",{className:"pl-2 pt-1 pb-1"}," No Products in Cart "))))),u("div",{className:"cart-bottom"},u("div",{className:"cart-discount"},u("form",{action:"#"},u("div",{className:"input-group"},u("input",{type:"text",className:"form-control",required:!0,placeholder:"coupon code"}),u("div",{className:"input-group-append"},u("button",{className:"btn btn-outline-primary-2",type:"submit"},u("i",{className:"icon-long-arrow-right"})))))),u("button",{className:"btn btn-outline-dark-2",onClick:function(a){var s=a.currentTarget;s.querySelector(".icon-refresh").classList.add("load-more-rotating"),setTimeout((function(){t.updateCart(e),s.querySelector(".icon-refresh").classList.remove("load-more-rotating")}),400)}},u("span",null,"UPDATE CART"),u("i",{className:"icon-refresh"})))),u("aside",{className:"col-lg-3"},u("div",{className:"summary summary-cart"},u("h3",{className:"summary-title"},"Cart Total"),u("table",{className:"table table-summary"},u("tbody",null,u("tr",{className:"summary-subtotal"},u("td",null,"Subtotal:"),u("td",null,"$",(0,m.bS)(t.cartItems).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))),u("tr",{className:"summary-shipping"},u("td",null,"Shipping:"),u("td",null,"\xa0")),u("tr",{className:"summary-shipping-row"},u("td",null,u("div",{className:"custom-control custom-radio"},u("input",{type:"radio",id:"free-shipping",name:"shipping",className:"custom-control-input",onChange:function(t){return b(0)},defaultChecked:!0}),u("label",{className:"custom-control-label",htmlFor:"free-shipping"},"Free Shipping"))),u("td",null,"$0.00")),u("tr",{className:"summary-shipping-row"},u("td",null,u("div",{className:"custom-control custom-radio"},u("input",{type:"radio",id:"standard-shipping",name:"shipping",className:"custom-control-input",onChange:function(t){return b(10)}}),u("label",{className:"custom-control-label",htmlFor:"standard-shipping"},"Standard:"))),u("td",null,"$10.00")),u("tr",{className:"summary-shipping-row"},u("td",null,u("div",{className:"custom-control custom-radio"},u("input",{type:"radio",id:"express-shipping",name:"shipping",className:"custom-control-input",onChange:function(t){return b(20)}}),u("label",{className:"custom-control-label",htmlFor:"express-shipping"},"Express:"))),u("td",null,"$20.00")),u("tr",{className:"summary-shipping-estimate"},u("td",null,"Estimate for Your Country",u("br",null)," ",u(i.Z,{href:"/shop/dashboard"},"Change address")),u("td",null,"\xa0")),u("tr",{className:"summary-total"},u("td",null,"Total:"),u("td",null,"$",((0,m.bS)(t.cartItems)+o).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))))),u(i.Z,{className:"btn btn-outline-primary-2 btn-order btn-block",href:"/shop/checkout"},"PROCEED TO CHECKOUT")),u(i.Z,{href:"/shop/sidebar/list",className:"btn btn-outline-dark-2 btn-block mb-3"},u("span",null,"CONTINUE SHOPPING"),u("i",{className:"icon-refresh"})))):u("div",{className:"row"},u("div",{className:"col-12"},u("div",{className:"cart-empty-page text-center"},u("i",{className:"cart-empty icon-shopping-cart",style:{lineHeight:1,fontSize:"15rem"}}),u("p",{className:"px-3 py-2 cart-empty mb-3"},"No products added to the cart"),u("p",{className:"return-to-shop mb-0"},u(i.Z,{href:"/shop/sidebar/list",className:"btn btn-primary"},"RETURN TO SHOP")))))))))}))},9399:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/cart",function(){return e(784)}])}},function(t){t.O(0,[9774,2888,179],(function(){return a=9399,t(t.s=a);var a}));var a=t.O();_N_E=a}]);