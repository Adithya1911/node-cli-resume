const welcome = require("cli-welcome");
const pkg = require("./../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = ({ clear = true }) => {
  unhandled();
  welcome({
    title: `cli-resume`,
    tagLine: `by Asif😁😎😉`,
    description: pkg.description,
    version: pkg.version,
    bgColor: "#6cc24a",
    color: "#000000",
    bold: true,
    clear,
  });
};
