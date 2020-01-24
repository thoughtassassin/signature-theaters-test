const withBabelMinify = require("next-babel-minify")();
module.exports = withBabelMinify();
const withCss = require("@zeit/next-css");
module.exports = withCss();
