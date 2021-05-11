import compileTemplate from "Utils/compile-template";

import template from "./loading.component.html";

const Loading = {
  render: async () => {
    console.group("#loading");
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

export default Loading;
