// const path = require("path");
// const customConfig = require(path.resolve("./tailwind.config.custom.js"));
const customConfig = require("./tailwind.config.custom.js");

module.exports = {
  presets: [customConfig],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
    },
  },
};
