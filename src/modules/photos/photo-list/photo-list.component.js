import compileTemplate from "Utils/compile-template";

import PhotoAPI from "Apis/photo.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./photo-list.component.html";

const PhotoList = {
  render: async () => {
    console.group("/photos");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await PhotoAPI.getAll();
    const { data } = response;
    console.log(data);
    const templateData = { HeaderView, FooterView, photos: data };
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

export default PhotoList;
