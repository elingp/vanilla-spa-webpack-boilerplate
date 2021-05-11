import compileTemplate from "Utils/compile-template";
import { getRoute } from "Utils/common";

import PhotoAPI from "Apis/photo.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./photo-detail.component.html";

const PhotoDetail = {
  render: async () => {
    const { id } = getRoute();
    console.group(`/photos/${id}`);
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await PhotoAPI.get(id);
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

export default PhotoDetail;
