(self.webpackChunkvanilla_spa_webpack_boilerplate=self.webpackChunkvanilla_spa_webpack_boilerplate||[]).push([[930],{5518:function(e,t,a){"use strict";a.d(t,{U2:function(){return o},v_:function(){return r},gz:function(){return l},ob:function(){return i}});var s=a(9669);const n=a.n(s)().create({baseURL:"https://jsonplaceholder.typicode.com/"});n.interceptors.request.use((e=>e),(e=>Promise.reject(e))),n.interceptors.response.use((e=>e),(e=>{const t=e.response;401===t.status&&(window.location.href="https://elingp.github.io/vanilla-spa-webpack-boilerplate/#/login"),console.error(`Looks like there was a problem. Status Code: ${t.status}`),Promise.reject(e)}));const{get:o,post:r,put:l,delete:i}=n},291:function(e,t,a){"use strict";var s=a(5518);const n={getAll:()=>(0,s.U2)("/photos"),get:e=>(0,s.U2)(`/photos/${e}`),create:e=>(0,s.v_)("/photos",e),update:(e,t)=>(0,s.gz)(`/photos/${e}`,t),delete:e=>(0,s.ob)(`/photos/${e}`)};t.Z=n},45:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(2656),n={render:async()=>{let e;console.group("#footer");try{e=(0,s.Z)('<footer class="bg-light text-center"> <div class="container p-4"> <section class="mb-4"> <p> This is a footer. You should\'ve put something more useful here, instead I put this. </p> </section> </div> </footer> ')}catch(e){console.error(e)}return console.log(e),console.groupEnd(),e},afterRender:async()=>{}}},2182:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(2656),n=a(7091),o=a.n(n),r=new URL(a(2459),a.b),l='<nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top"> <div class="container"> <a class="navbar-brand" href="#/"> <img src="'+o()(r)+'" width="28" height="28"/> </a> <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"> <a class="nav-link" href="#/">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#/albums">Album</a> </li> <li class="nav-item"> <a class="nav-link" href="#/comments">Comment</a> </li> <li class="nav-item"> <a class="nav-link" href="#/photos">Photo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/posts">Post</a> </li> <li class="nav-item"> <a class="nav-link" href="#/todos">Todo</a> </li> <li class="nav-item"> <a class="nav-link" href="#/users">User</a> </li> </ul> <ul class="navbar-nav d-flex flex-row me-1"> <li class="nav-item me-3 me-lg-0"> <a class="btn btn-primary" href="#/register"> <strong>Sign up</strong> </a> <a class="btn btn-secondary" href="#/login">Log in</a> </li> </ul> </div> </div> </nav> ',i={render:async()=>{let e;console.group("#header");try{e=(0,s.Z)(l)}catch(e){console.error(e)}return console.log(e),console.groupEnd(),e},afterRender:async()=>{}}},4448:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var s=a(2656),n=a(2667),o=a(291),r=a(2182),l=a(45),i={render:async()=>{const{id:e}=(0,n.Bv)();console.group(`/photos/${e}`);const t=await r.Z.render(),a=await l.Z.render(),i=await o.Z.get(e),{data:c}=i;console.log(c);const u={HeaderView:t,FooterView:a,items:c};let p;try{p=(0,s.Z)('${ HeaderView } <section class="container section"> <h2 class="subtitle">Photo Detail</h2> <% for (const key in items) { %> <p><%- key %>: <%- items[key] %></p> <% }; %> <div> <p>Images</p> <img src="<%- items.url %>" alt="<%- items.title %>"/> </div> <div> <p>Thumbnail Images</p> <img src="<%- items.thumbnailUrl %>" alt="<%- items.title %>"/> </div> </section> ${ FooterView } ',u)}catch(e){console.error(e)}return console.log(p),console.groupEnd(),p},afterRender:async()=>{await r.Z.afterRender(),await l.Z.afterRender()}}},2459:function(e,t,a){"use strict";e.exports=a.p+"assets/icon-192.74ecf6f7f1fb19ba8a73.png"}}]);
//# sourceMappingURL=photo-detail.component.762120c3b9a23d760f80.js.map