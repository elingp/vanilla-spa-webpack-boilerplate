import compileTemplate from "Utils/compile-template";

import template from "./home.component.html";

const Home = {
  render: async () => {
    console.group("#home");
    let view;
    try {
      view = compileTemplate(template);
    } catch (error) {
      console.error(error);
    }
    console.log(view);
    console.groupEnd();
    return view;
  },
  afterRender: async () => {
    // Using DOM API
    function component() {
      const element = document.createElement("div");
      element.innerHTML = ["This", "is", "afterRender"].join(" ");
      element.classList.add("hello");
      element.classList.add("animate__animated");
      element.classList.add("animate__bounce");
      return element;
    }
    const app = document.getElementById("main");
    app.appendChild(component());
  },
};

export default Home;
