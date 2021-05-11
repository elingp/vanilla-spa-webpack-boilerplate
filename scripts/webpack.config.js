/* eslint-disable global-require, import/no-dynamic-require */
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
