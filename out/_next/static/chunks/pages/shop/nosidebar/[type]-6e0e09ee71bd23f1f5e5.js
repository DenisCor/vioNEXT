(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3402],{7795:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var s=a(9999),r=a(4121),o=a(7294),c=a(1163),i=a(7934),l=a(8335),n=a(7882),u=a(6265),d=a(8216),p=a(2679),m=a(5708),f=a(2806),b=a(9792),v=a(2870),N=a(6442),h=o.createElement;function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,u.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=(0,d.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),y(y(y(y({},m.Nw),f.Nw),b.Nw),v.Nw))((function(e){var t=(0,c.useRouter)(),a=e.product,s=e.wishlist,r=(0,o.useState)(0),i=r[0],n=r[1],u=(0,o.useState)(99999),d=u[0],m=u[1];function f(t){t.preventDefault(),e.showQuickView(a.slug)}return(0,o.useEffect)((function(){var e=d,t=i;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),m(e),n(t)}),[]),h("div",{className:"product"},h("figure",{className:"product-media"},a.new?h("span",{className:"product-label label-new"},"New"):"",a.sale_price?h("span",{className:"product-label label-sale"},"Sale"):"",a.top?h("span",{className:"product-label label-top"},"Top"):"",a.stock&&0!=a.stock?"":h("span",{className:"product-label label-out"},"Out of Stock"),h(l.Z,{href:"/product/default/".concat(a.slug)},h(p.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),a.sm_pictures.length>=2?h(p.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),a.stock&&0!==a.stock?h("div",{className:"product-action action-icon-top"},a.variants.length>0?h(l.Z,{href:"/product/default/".concat(a.slug),className:"btn-product btn-cart btn-select"},h("span",null,"select options")):h("button",{className:"btn-product btn-cart",onClick:function(t){t.preventDefault(),e.addToCart(a)}},h("span",null,"add to cart")),h("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:f},h("span",null,"quick view"))):h("div",{className:"product-action action-icon-top"},h("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:f},h("span",null,"quick view")))),h("div",{className:"product-body product-action-inner"},(0,N.QY)(s,a)?h(l.Z,{href:"/shop/wishlist",className:"btn-product btn-wishlist added-to-wishlist"},h("span",null,"go to wishlist")):h("a",{href:"#",className:"btn-product btn-wishlist",onClick:function(s){s.preventDefault(),(0,N.QY)(e.wishlist,a)?t.push("/pages/wishlist"):e.addToWishlist(a)}},h("span",null,"add to wishlist")),h("div",{className:"product-cat"},a.category.map((function(e,t){return h(o.Fragment,{key:e.slug+"-"+t},h(l.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),t<a.category.length-1?", ":"")}))),h("h3",{className:"product-title"},h(l.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?d==i?h("div",{className:"product-price"},"$",d.toFixed(2)):0==a.variants.length?h("div",{className:"product-price"},h("span",{className:"new-price"},"$",d.toFixed(2)),h("span",{className:"old-price"},"$",i.toFixed(2))):h("div",{className:"product-price"},"$",d.toFixed(2),"\u2013$",i.toFixed(2)):h("div",{className:"product-price"},h("span",{className:"out-price"},"$",a.price.toFixed(2))),h("div",{className:"ratings-container"},h("div",{className:"ratings"},h("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),h("span",{className:"tooltip-text"},a.ratings.toFixed(2))),h("span",{className:"ratings-text"},"( ",a.review," Reviews )")),a.variants.length>0?h("div",{className:"product-nav product-nav-dots"},h("div",{className:"row no-gutters"},a.variants.map((function(e,t){return h(l.Z,{href:"#",style:{backgroundColor:e.color},key:t},h("span",{className:"sr-only"},"Color Name"))})))):""))})),k=o.createElement;function x(e){var t=e.products,a=void 0===t?[]:t,s=e.loading,r=(0,o.useState)(""),i=r[0],l=r[1],n=(0,c.useRouter)().query;return(0,o.useEffect)((function(){l("boxed"==n.type?"col-6 col-md-4 col-lg-4 col-xl-3":"col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2")}),[n]),k("div",{className:"products mb-3 content-overlay skeleton-body skel-shop-products ".concat(s?"":"loaded")},0!=a.length||s?k("div",{className:"row"},s?[1,2,3,4,5,6,7,8].map((function(e,t){return k("div",{className:i,key:t},k("div",{className:"skel-pro"}))})):a.map((function(e,t){return k("div",{className:i,key:t},k(w,{product:e}))}))):k("p",{className:"no-results"},"No products matching your selection."))}var S=o.memo(x),P=a(101),_=a(3615),O=a(9638),C=o.createElement;var E=(0,_.Z)({ssr:!1})((function(){var e=(0,c.useRouter)(),t=e.query.type,a=e.query,u=(0,i.t)(O.tT),d=(0,r.Z)(u,2),p=d[0],m=d[1],f=m.data,b=m.loading,v=m.error,h=(0,i.t)(O.tT),g=(0,r.Z)(h,2),y=g[0],w=g[1].data,k=(0,o.useState)(8),x=k[0],_=k[1],E=(0,o.useState)("container"),Z=E[0],q=E[1],T=(0,o.useState)("Boxed No Sidebar"),j=T[0],B=T[1],D=(0,o.useState)(!1),F=D[0],L=D[1],z=(0,o.useState)([]),$=z[0],I=z[1],Q=f&&f.products.totalCount;return(0,o.useLayoutEffect)((function(){f&&I(f.products.data)}),[f]),(0,o.useEffect)((function(){p({variables:{searchTerm:a.searchTerm,color:a.color?a.color.split(","):[],size:a.size?a.size.split(","):[],brand:a.brand?a.brand.split(","):[],minPrice:parseInt(a.minPrice),maxPrice:parseInt(a.maxPrice),category:a.category,sortBy:a.sortBy?a.sortBy:"default",page:1,perPage:x}}),(0,N.qN)()}),[a]),(0,o.useEffect)((function(){y({variables:{searchTerm:a.searchTerm,color:a.color?a.color.split(","):[],size:a.size?a.size.split(","):[],brand:a.brand?a.brand.split(","):[],minPrice:parseInt(a.minPrice),maxPrice:parseInt(a.maxPrice),category:a.category,sortBy:a.sortBy?a.sortBy:"default",page:1,from:x,perPage:4}})}),[x]),(0,o.useEffect)((function(){w&&I([].concat((0,s.Z)($),(0,s.Z)(w.products.data)))}),[w]),(0,o.useEffect)((function(){B("boxed"==t?"Boxed No Sidebar":"Fullwidth No Sidebar"),q("fullwidth"==t?"container-fluid":"container")}),[t]),v?C("div",null):C("main",{className:"main shop"},C(n.Z,{title:j,subTitle:"Shop"}),C("nav",{className:"breadcrumb-nav mb-2"},C("div",{className:Z},C("ol",{className:"breadcrumb"},C("li",{className:"breadcrumb-item"},C(l.Z,{href:"/"},"Home")),C("li",{className:"breadcrumb-item"},C(l.Z,{href:"/shop/sidebar/list"},"Shop")),C("li",{className:"breadcrumb-item active"},j),a.search?C("li",{className:"breadcrumb-item"},C("span",null,"Search - ",a.searchTerm)):""))),C("div",{className:"page-content"},C("div",{className:Z},C("div",{className:"toolbox"},C("div",{className:"toolbox-left d-none d-lg-flex"},C("a",{href:"#",className:"sidebar-toggler mr-0 mr-md-5",onClick:function(e){e.preventDefault(),document.querySelector("body").classList.add("sidebar-filter-active")}},C("i",{className:"icon-bars"}),"Filters")),C("div",{className:"toolbox-center"},!b&&$?C("div",{className:"toolbox-info"},"Showing",C("span",null," ",$.length," of ",Q)," Products"):""),C("div",{className:"toolbox-right"},C("div",{className:"toolbox-sort"},C("label",{htmlFor:"sortby"},"Sort by:"),C("div",{className:"select-custom"},C("select",{name:"sortby",id:"sortby",className:"form-control",onChange:function(t){var s=e.query,r=e.pathname.replace("[type]",a.type)+"?";for(var o in s)"type"!==o&&"sortBy"!==o&&(r+=o+"="+s[o]+"&");e.push(r+"sortBy="+t.target.value)},value:a.sortBy?a.sortBy:"default"},C("option",{value:"default"},"Default"),C("option",{value:"featured"},"Most Popular"),C("option",{value:"rating"},"Most Rated"),C("option",{value:"new"},"Date")))))),C(S,{products:$,loading:b}),C("div",{className:"load-more-container text-center ".concat(Q>x||F?"":"d-none")},C("a",{href:"#",className:"btn btn-outline-darker btn-load-more",onClick:function(e){e.preventDefault(),x<Q&&(L(!0),setTimeout((function(){_(x+4),L(!1)}),500))}},"More Products",C("i",{className:"icon-refresh ".concat(F?"load-more-rotating":"")}))),C("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}}),C(P.Z,{toggle:!0}),C("button",{className:"sidebar-fixed-toggler d-lg-none",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},C("i",{className:"icon-cog"})))))}))},2861:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/nosidebar/[type]",function(){return a(7795)}])}},function(e){e.O(0,[917,4866,3459,9774,2888,179],(function(){return t=2861,e(e.s=t);var t}));var t=e.O();_N_E=t}]);