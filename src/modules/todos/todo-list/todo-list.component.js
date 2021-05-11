import compileTemplate from "Utils/compile-template";

import TodoAPI from "Apis/todo.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./todo-list.component.html";

const TodoList = {
  render: async () => {
    console.group("/todos");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await TodoAPI.getAll();
    const { data } = response;
    console.log(data);
    const templateData = { HeaderView, FooterView, todos: data };
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

export default TodoList;
