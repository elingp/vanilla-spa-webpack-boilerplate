import compileTemplate from "Utils/compile-template";

import PostAPI from "Apis/post.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./post-list.component.html";

const PostList = {
  render: async () => {
    console.group("/posts");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await PostAPI.getAll();
    const { data } = response;
    console.log(data);
    const templateData = { HeaderView, FooterView, posts: data };
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

export default PostList;
