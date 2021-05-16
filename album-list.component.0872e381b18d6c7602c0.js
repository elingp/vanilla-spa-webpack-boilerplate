(self.webpackChunkvanilla_spa_webpack_boilerplate=self.webpackChunkvanilla_spa_webpack_boilerplate||[]).push([[739],{5097:function(e,n,r){"use strict";var t=r(5518),a={getAll:function(){return(0,t.U2)("/albums")},get:function(e){return(0,t.U2)("/albums/".concat(e))},create:function(e){return(0,t.v_)("/albums",e)},update:function(e,n){return(0,t.gz)("/albums/".concat(e),n)},delete:function(e){return(0,t.ob)("/albums/".concat(e))}};n.Z=a},5518:function(e,n,r){"use strict";r.d(n,{U2:function(){return o},v_:function(){return s},gz:function(){return i},ob:function(){return c}}),r(1539),r(8674);var t=r(9669),a=r.n(t)().create({baseURL:"https://jsonplaceholder.typicode.com/"});a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){var n=e.response;401===n.status&&(window.location.href="".concat("https://elingp.github.io/vanilla-spa-webpack-boilerplate/","#/login")),console.error("Looks like there was a problem. Status Code: ".concat(n.status)),Promise.reject(e)}));var o=a.get,s=a.post,i=a.put,c=a.delete},9321:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var t=r(1277),a=(r(1539),r(8674),r(5666),r(2656)),o=r(5097),s=r(2182),i=r(45);function c(e,n,r,t,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?n(c):Promise.resolve(c).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function s(e){c(o,t,a,s,i,"next",e)}function i(e){c(o,t,a,s,i,"throw",e)}s(void 0)}))}}var l,f,p={render:(f=u(regeneratorRuntime.mark((function e(){var n,r,c,u,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.group("/albums"),e.next=3,s.Z.render();case 3:return n=e.sent,e.next=6,i.Z.render();case 6:return r=e.sent,e.next=9,o.Z.getAll();case 9:c=e.sent,u=c.data,console.log(u),l={HeaderView:n,FooterView:r,albums:u},f={imports:{forEach:t.Z}};try{p=(0,a.Z)('${ HeaderView } <section class="container section"> <h1 class="title">Albums</h1> <ul> <% forEach(albums, function (album) { %> <li><a href="#/albums/<%- album.id %>"><%- album.title %></a></li> <% }); %> </ul> </section> ${ FooterView } ',l,f)}catch(e){console.error(e)}return console.log(p),console.groupEnd(),e.abrupt("return",p);case 18:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)}),afterRender:(l=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.afterRender();case 2:return e.next=4,i.Z.afterRender();case 4:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})}},45:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}}),r(1539),r(8674),r(5666);var t=r(2656);function a(e,n,r,t,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?n(c):Promise.resolve(c).then(t,a)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var s=e.apply(n,r);function i(e){a(s,t,o,i,c,"next",e)}function c(e){a(s,t,o,i,c,"throw",e)}i(void 0)}))}}var s,i,c={render:(i=o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.group("#footer");try{n=(0,t.Z)('<footer class="bg-light text-center"> <div class="container p-4"> <section class="mb-4"> <p> This is a footer. You should\'ve put something more useful here, instead I put this. </p> </section> </div> </footer> ')}catch(e){console.error(e)}return console.log(n),console.groupEnd(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),afterRender:(s=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})}},2182:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}}),r(1539),r(8674),r(5666);var t=r(2656),a=r(7091),o=r.n(a),s=new URL(r(2459),r.b),i='<nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top"> <div class="container"> <a class="navbar-brand" href="#/"> <img src="'+o()(s)+'" width="28" height="28"/> </a> <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link" href="#/">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#/albums">Album</a> </li> <li class="nav-item"> <a class="nav-link" href="#/comments">Comment</a> </li> <li class="nav-item"> <a class="nav-link" href="#/photos">Photo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/posts">Post</a> </li> <li class="nav-item"> <a class="nav-link" href="#/todos">Todo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/users">User</a> </li> </ul> <ul class="navbar-nav d-flex flex-row me-1"> <li class="nav-item me-3 me-lg-0"> <a class="btn btn-primary" href="#/register"> <strong>Sign up</strong> </a> <a class="btn btn-secondary" href="#/login">Log in</a> </li> </ul> </div> </div> </nav> ';function c(e,n,r,t,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?n(c):Promise.resolve(c).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function s(e){c(o,t,a,s,i,"next",e)}function i(e){c(o,t,a,s,i,"throw",e)}s(void 0)}))}}var l,f,p={render:(f=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.group("#header");try{n=(0,t.Z)(i)}catch(e){console.error(e)}return console.log(n),console.groupEnd(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(){return f.apply(this,arguments)}),afterRender:(l=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})}},2459:function(e,n,r){"use strict";e.exports=r.p+"assets/icon-192.74ecf6f7f1fb19ba8a73.png"}}]);
//# sourceMappingURL=album-list.component.0872e381b18d6c7602c0.js.map