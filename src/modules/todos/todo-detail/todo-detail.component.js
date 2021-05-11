import compileTemplate from "Utils/compile-template";
import { getRoute } from "Utils/common";

import TodoAPI from "Apis/todo.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./todo-detail.component.html";

const TodoDetail = {
  render: async () => {
    const { id } = getRoute();
    console.group(`/todos/${id}`);
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await TodoAPI.get(id);
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

export default TodoDetail;
