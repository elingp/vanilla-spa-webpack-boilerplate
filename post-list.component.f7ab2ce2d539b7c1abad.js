(self.webpackChunkvanilla_spa_webpack_boilerplate=self.webpackChunkvanilla_spa_webpack_boilerplate||[]).push([[351],{5518:function(e,a,t){"use strict";t.d(a,{U2:function(){return o},v_:function(){return r},gz:function(){return l},ob:function(){return i}});var s=t(9669);const n=t.n(s)().create({baseURL:"https://jsonplaceholder.typicode.com/"});n.interceptors.request.use((e=>e),(e=>Promise.reject(e))),n.interceptors.response.use((e=>e),(e=>{const a=e.response;401===a.status&&(window.location.href="https://elingp.github.io/vanilla-spa-webpack-boilerplate/#/login"),console.error(`Looks like there was a problem. Status Code: ${a.status}`),Promise.reject(e)}));const{get:o,post:r,put:l,delete:i}=n},3029:function(e,a,t){"use strict";var s=t(5518);const n={getAll:()=>(0,s.U2)("/posts"),get:e=>(0,s.U2)(`/posts/${e}`),create:e=>(0,s.v_)("/posts",e),update:(e,a)=>(0,s.gz)(`/posts/${e}`,a),delete:e=>(0,s.ob)(`/posts/${e}`)};a.Z=n},45:function(e,a,t){"use strict";t.d(a,{Z:function(){return n}});var s=t(2656),n={render:async()=>{let e;console.group("#footer");try{e=(0,s.Z)('<footer class="bg-light text-center"> <div class="container p-4"> <section class="mb-4"> <p> This is a footer. You should\'ve put something more useful here, instead I put this. </p> </section> </div> </footer> ')}catch(e){console.error(e)}return console.log(e),console.groupEnd(),e},afterRender:async()=>{}}},2182:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var s=t(2656),n=t(7091),o=t.n(n),r=new URL(t(2459),t.b),l='<nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top"> <div class="container"> <a class="navbar-brand" href="#/"> <img src="'+o()(r)+'" width="28" height="28"/> </a> <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link" href="#/">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#/albums">Album</a> </li> <li class="nav-item"> <a class="nav-link" href="#/comments">Comment</a> </li> <li class="nav-item"> <a class="nav-link" href="#/photos">Photo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/posts">Post</a> </li> <li class="nav-item"> <a class="nav-link" href="#/todos">Todo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/users">User</a> </li> </ul> <ul class="navbar-nav d-flex flex-row me-1"> <li class="nav-item me-3 me-lg-0"> <a class="btn btn-primary" href="#/register"> <strong>Sign up</strong> </a> <a class="btn btn-secondary" href="#/login">Log in</a> </li> </ul> </div> </div> </nav> ',i={render:async()=>{let e;console.group("#header");try{e=(0,s.Z)(l)}catch(e){console.error(e)}return console.log(e),console.groupEnd(),e},afterRender:async()=>{}}},5161:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l}});var s=t(2656),n=t(3029),o=t(2182),r=t(45),l={render:async()=>{console.group("/posts");const e=await o.Z.render(),a=await r.Z.render(),t=await n.Z.getAll(),{data:l}=t;console.log(l);const i={HeaderView:e,FooterView:a,posts:l};let c;try{c=(0,s.Z)('${ HeaderView } <section class="container section"> <h1 class="title">Posts</h1> <ul> <% posts.forEach(function (post) { %> <li><a href="#/posts/<%- post.id %>"><%- post.title %></a></li> <% }); %> </ul> </section> ${ FooterView } ',i)}catch(e){console.error(e)}return console.log(c),console.groupEnd(),c},afterRender:async()=>{await o.Z.afterRender(),await r.Z.afterRender()}}},2459:function(e,a,t){"use strict";e.exports=t.p+"assets/icon-192.74ecf6f7f1fb19ba8a73.png"}}]);
//# sourceMappingURL=post-list.component.f7ab2ce2d539b7c1abad.js.map