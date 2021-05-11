// eslint-disable-next-line no-unused-vars
import * as mdb from "mdb-ui-kit/js/mdb.min";
import router from "./routers/router";
import "./styles/style.css";

console.info(`App is on ${process.env.NODE_ENV} mode!`);

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
