import compileTemplate from "Utils/compile-template";

import Header from "../commons/header/header.component";
import Footer from "../commons/footer/footer.component";

import template from "./page-not-found.component.html";

const PageNotFound = {
  render: async () => {
    console.group("/page-not-found");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const templateData = { HeaderView, FooterView };
    let view;
    try {
      view = compileTemplate(template, templateData);
    } catch (error) {
      console.error(error);
    }
    console.log(view);
    console.groupEnd();
    return view;
  },
  afterRender: async () => {},
};

export default PageNotFound;
