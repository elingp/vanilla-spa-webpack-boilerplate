import compileTemplate from "Utils/compile-template";

import CommentAPI from "Apis/comment.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./comment-list.component.html";

const CommentList = {
  render: async () => {
    console.group("/comments");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await CommentAPI.getAll();
    const { data } = response;
    console.log(data);
    const templateData = { HeaderView, FooterView, comments: data };
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
  },
};

export default CommentList;
