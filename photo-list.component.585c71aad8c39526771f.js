(self.webpackChunkvanilla_spa_webpack_boilerplate=self.webpackChunkvanilla_spa_webpack_boilerplate||[]).push([[191],{5518:function(e,a,t){"use strict";t.d(a,{U2:function(){return n},v_:function(){return r},gz:function(){return l},ob:function(){return i}});var o=t(9669);const s=t.n(o)().create({baseURL:"https://jsonplaceholder.typicode.com/"});s.interceptors.request.use((e=>e),(e=>Promise.reject(e))),s.interceptors.response.use((e=>e),(e=>{const a=e.response;401===a.status&&(window.location.href="https://elingp.github.io/vanilla-spa-webpack-boilerplate/#/login"),console.error(`Looks like there was a problem. Status Code: ${a.status}`),Promise.reject(e)}));const{get:n,post:r,put:l,delete:i}=s},291:function(e,a,t){"use strict";var o=t(5518);const s={getAll:()=>(0,o.U2)("/photos"),get:e=>(0,o.U2)(`/photos/${e}`),create:e=>(0,o.v_)("/photos",e),update:(e,a)=>(0,o.gz)(`/photos/${e}`,a),delete:e=>(0,o.ob)(`/photos/${e}`)};a.Z=s},45:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var o=t(2656),s={render:async()=>{let e;console.group("#footer");try{e=(0,o.Z)('<footer class="bg-light text-center"> <div class="container p-4"> <section class="mb-4"> <p> This is a footer. You should\'ve put something more useful here, instead I put this. </p> </section> </div> </footer> ')}catch(e){console.error(e)}return console.log(e),console.groupEnd(),e},afterRender:async()=>{}}},2182:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var o=t(2656),s=t(7091),n=t.n(s),r=new URL(t(2459),t.b),l='<nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top"> <div class="container"> <a class="navbar-brand" href="#/"> <img src="'+n()(r)+'" width="28" height="28"/> </a> <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link" href="#/">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#/albums">Album</a> </li> <li class="nav-item"> <a class="nav-link" href="#/comments">Comment</a> </li> <li class="nav-item"> <a class="nav-link" href="#/photos">Photo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/posts">Post</a> </li> <li class="nav-item"> <a class="nav-link" href="#/todos">Todo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/users">User</a> </li> </ul> <ul class="navbar-nav d-flex flex-row me-1"> <li class="nav-item me-3 me-lg-0"> <a class="btn btn-primary" href="#/register"> <strong>Sign up</strong> </a> <a class="btn btn-secondary" href="#/login">Log in</a> </li> </ul> </div> </div> </nav> ',i={render:async()=>{let e;console.group("#header");try{e=(0,o.Z)(l)}catch(e){console.error(e)}return console.log(e),console.groupEnd(),e},afterRender:async()=>{}}},7020:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l}});var o=t(2656),s=t(291),n=t(2182),r=t(45),l={render:async()=>{console.group("/photos");const e=await n.Z.render(),a=await r.Z.render(),t=await s.Z.getAll(),{data:l}=t;console.log(l);const i={HeaderView:e,FooterView:a,photos:l};let c;try{c=(0,o.Z)('${ HeaderView } <section class="container section"> <h1 class="title">Photos</h1> <ul> <% photos.forEach(function (photo) { %> <li><a href="#/photos/<%- photo.id %>"><%- photo.title %></a></li> <% }); %> </ul> </section> ${ FooterView } ',i)}catch(e){console.error(e)}return console.log(c),console.groupEnd(),c},afterRender:async()=>{await n.Z.afterRender(),await r.Z.afterRender()}}},2459:function(e,a,t){"use strict";e.exports=t.p+"assets/icon-192.74ecf6f7f1fb19ba8a73.png"}}]);
//# sourceMappingURL=photo-list.component.585c71aad8c39526771f.js.map