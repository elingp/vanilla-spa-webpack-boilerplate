import compileTemplate from "Utils/compile-template";
import { getRoute } from "Utils/common";

import PostAPI from "Apis/post.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./post-detail.component.html";

const PostDetail = {
  render: async () => {
    const { id } = getRoute();
    console.group(`/posts/${id}`);
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await PostAPI.get(id);
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

export default PostDetail;
