import compileTemplate from "Utils/compile-template";

import template from "./footer.component.html";

const Footer = {
  render: async () => {
    console.group("#footer");
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
  afterRender: async () => {},
};

export default Footer;
