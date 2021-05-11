import compileTemplate from "Utils/compile-template";

import Header from "./commons/header/header.component";
import Footer from "./commons/footer/footer.component";
import Home from "./home/home.component";

import template from "./app.component.html";

const App = {
  render: async () => {
    console.group(`/`);
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const HomeView = await Home.render();
    const templateData = { HeaderView, FooterView, HomeView };
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
  afterRender: async () => {
    await Header.afterRender();
    await Footer.afterRender();
    await Home.afterRender();
  },
};

export default App;
