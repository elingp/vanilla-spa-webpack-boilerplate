import compileTemplate from "Utils/compile-template";

import UserAPI from "Apis/user.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./user-list.component.html";

const UserList = {
  render: async () => {
    console.group("/users");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await UserAPI.getAll();
    const { data } = response;
    console.log(data);
    const templateData = { HeaderView, FooterView, users: data };
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

export default UserList;
