import { getParsedRoute } from "Utils/common";
import Loading from "../modules/commons/loading/loading.component";

const routes = {
  "/": import(
    /* webpackChunkName: "app.component" */
    /* webpackPreload: true */
    "../modules/app.component"
  ),
  "/albums": import(
    /* webpackChunkName: "album-list.component" */
    /* webpackPrefetch: true */
    "../modules/albums/album-list/album-list.component"
  ),
  "/albums/:id": import(
    /* webpackChunkName: "album-detail.component" */
    /* webpackPrefetch: true */
    "../modules/albums/album-detail/album-detail.component"
  ),
  "/comments": import(
    /* webpackChunkName: "comment-list.component" */
    /* webpackPrefetch: true */
    "../modules/comments/comment-list/comment-list.component"
  ),
  "/comments/:id": import(
    /* webpackChunkName: "comment-detail.component" */
    /* webpackPrefetch: true */
    "../modules/comments/comment-detail/comment-detail.component"
  ),
  "/photos": import(
    /* webpackChunkName: "photo-list.component" */
    /* webpackPrefetch: true */
    "../modules/photos/photo-list/photo-list.component"
  ),
  "/photos/:id": import(
    /* webpackChunkName: "photo-detail.component" */
    /* webpackPrefetch: true */
    "../modules/photos/photo-detail/photo-detail.component"
  ),
  "/posts": import(
    /* webpackChunkName: "post-list.component" */
    /* webpackPrefetch: true */
    "../modules/posts/post-list/post-list.component"
  ),
  "/posts/:id": import(
    /* webpackChunkName: "post-detail.component" */
    /* webpackPrefetch: true */
    "../modules/posts/post-detail/post-detail.component"
  ),
  "/todos": import(
    /* webpackChunkName: "todo-list.component" */
    /* webpackPrefetch: true */
    "../modules/todos/todo-list/todo-list.component"
  ),
  "/todos/:id": import(
    /* webpackChunkName: "todo-detail.component" */
    /* webpackPrefetch: true */
    "../modules/todos/todo-detail/todo-detail.component"
  ),
  "/users": import(
    /* webpackChunkName: "user-list.component" */
    /* webpackPrefetch: true */
    "../modules/users/user-list/user-list.component"
  ),
  "/users/:id": import(
    /* webpackChunkName: "user-detail.component" */
    /* webpackPrefetch: true */
    "../modules/users/user-detail/user-detail.component"
  ),
};

const router = async () => {
  const parsedRoute = getParsedRoute();
  console.log(`Going to route ${parsedRoute}`);

  // If the parsed URL is not in our list of supported routes, select the page not found instead
  const { default: page } =
    (await routes[parsedRoute]) ??
    (await import("../modules/page-not-found/page-not-found.component"));
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = await Loading.render();
    await Loading.afterRender();
    app.innerHTML = await page.render();
    await page.afterRender();
  }
};

export default router;
