const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
};
