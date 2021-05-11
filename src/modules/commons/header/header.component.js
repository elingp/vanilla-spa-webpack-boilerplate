import compileTemplate from "Utils/compile-template";

import template from "./header.component.html";

const Header = {
  render: async () => {
    console.group("#header");
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

export default Header;
