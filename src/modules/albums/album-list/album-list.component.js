// eslint-disable-next-line import/no-extraneous-dependencies
import { forEach } from "lodash";

import compileTemplate from "Utils/compile-template";

import AlbumAPI from "Apis/album.service";

import Header from "../../commons/header/header.component";
import Footer from "../../commons/footer/footer.component";

import template from "./album-list.component.html";

const AlbumList = {
  render: async () => {
    console.group("/albums");
    const HeaderView = await Header.render();
    const FooterView = await Footer.render();
    const response = await AlbumAPI.getAll();
    const { data } = response;
    console.log(data);
    const templateData = {
      HeaderView,
      FooterView,
      albums: data,
    };
    const options = { imports: { forEach } };
    let view;
    try {
      view = compileTemplate(template, templateData, options);
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

export default AlbumList;
