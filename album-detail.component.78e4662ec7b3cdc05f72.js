(self.webpackChunkvanilla_spa_webpack_boilerplate=self.webpackChunkvanilla_spa_webpack_boilerplate||[]).push([[239],{5097:function(e,n,t){"use strict";var r=t(5518),a={getAll:function(){return(0,r.U2)("/albums")},get:function(e){return(0,r.U2)("/albums/".concat(e))},create:function(e){return(0,r.v_)("/albums",e)},update:function(e,n){return(0,r.gz)("/albums/".concat(e),n)},delete:function(e){return(0,r.ob)("/albums/".concat(e))}};n.Z=a},5518:function(e,n,t){"use strict";t.d(n,{U2:function(){return o},v_:function(){return s},gz:function(){return i},ob:function(){return c}}),t(1539),t(8674);var r=t(9669),a=t.n(r)().create({baseURL:"https://jsonplaceholder.typicode.com/"});a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){var n=e.response;401===n.status&&(window.location.href="".concat("https://elingp.github.io/vanilla-spa-webpack-boilerplate/","#/login")),console.error("Looks like there was a problem. Status Code: ".concat(n.status)),Promise.reject(e)}));var o=a.get,s=a.post,i=a.put,c=a.delete},1090:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}}),t(1539),t(8674),t(5666);var r=t(2656),a=t(2667),o=t(5097),s=t(2182),i=t(45);function c(e,n,t,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void t(e)}i.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){c(o,r,a,s,i,"next",e)}function i(e){c(o,r,a,s,i,"throw",e)}s(void 0)}))}}var l,f,p={render:(f=u(regeneratorRuntime.mark((function e(){var n,t,c,u,l,f,p,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,a.Bv)(),t=n.id,console.group("/albums/".concat(t)),e.next=4,s.Z.render();case 4:return c=e.sent,e.next=7,i.Z.render();case 7:return u=e.sent,e.next=10,o.Z.get(t);case 10:l=e.sent,f=l.data,console.log(f),p={HeaderView:c,FooterView:u,items:f};try{v=(0,r.Z)('${ HeaderView } <section class="container section"> <h2 class="subtitle">Album Detail</h2> <% for (const key in items) { %> <p><%- key %>: <%- items[key] %></p> <% }; %> </section> ${ FooterView } ',p)}catch(e){console.error(e)}return console.log(v),console.groupEnd(),e.abrupt("return",v);case 18:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)}),afterRender:(l=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.afterRender();case 2:return e.next=4,i.Z.afterRender();case 4:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})}},45:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}}),t(1539),t(8674),t(5666);var r=t(2656);function a(e,n,t,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void t(e)}i.done?n(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function i(e){a(s,r,o,i,c,"next",e)}function c(e){a(s,r,o,i,c,"throw",e)}i(void 0)}))}}var s,i,c={render:(i=o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.group("#footer");try{n=(0,r.Z)('<footer class="bg-light text-center"> <div class="container p-4"> <section class="mb-4"> <p> This is a footer. You should\'ve put something more useful here, instead I put this. </p> </section> </div> </footer> ')}catch(e){console.error(e)}return console.log(n),console.groupEnd(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),afterRender:(s=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})}},2182:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}}),t(1539),t(8674),t(5666);var r=t(2656),a=t(7091),o=t.n(a),s=new URL(t(2459),t.b),i='<nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top"> <div class="container"> <a class="navbar-brand" href="#/"> <img src="'+o()(s)+'" width="28" height="28"/> </a> <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link" href="#/">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#/albums">Album</a> </li> <li class="nav-item"> <a class="nav-link" href="#/comments">Comment</a> </li> <li class="nav-item"> <a class="nav-link" href="#/photos">Photo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/posts">Post</a> </li> <li class="nav-item"> <a class="nav-link" href="#/todos">Todo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/users">User</a> </li> </ul> <ul class="navbar-nav d-flex flex-row me-1"> <li class="nav-item me-3 me-lg-0"> <a class="btn btn-primary" href="#/register"> <strong>Sign up</strong> </a> <a class="btn btn-secondary" href="#/login">Log in</a> </li> </ul> </div> </div> </nav> ';function c(e,n,t,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void t(e)}i.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){c(o,r,a,s,i,"next",e)}function i(e){c(o,r,a,s,i,"throw",e)}s(void 0)}))}}var l,f,p={render:(f=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.group("#header");try{n=(0,r.Z)(i)}catch(e){console.error(e)}return console.log(n),console.groupEnd(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)}),afterRender:(l=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})}},2459:function(e,n,t){"use strict";e.exports=t.p+"assets/icon-192.74ecf6f7f1fb19ba8a73.png"}}]);
//# sourceMappingURL=album-detail.component.78e4662ec7b3cdc05f72.js.map