import compileTemplate from "Utils/compile-template";
import { getRoute } from "Utils/common";

import CommentAPI from "Apis/comment.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./comment-detail.component.html";

const CommentDetail = {
  render: async () => {
    const { id } = getRoute();
    console.group(`/comments/${id}`);
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await CommentAPI.get(id);
    const { data } = response;
    console.log(data);
    const templateData = { HeaderView, FooterView, items: data };
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

export default CommentDetail;
