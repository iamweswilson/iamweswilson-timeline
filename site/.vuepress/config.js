const json = require("../pages.json");

module.exports = {
  title: "iamweswilson",
  description: "iamweswilson",
  themeConfig: {
    docsDir: "site",
    nav: json.nav
  },
  head: [["link", { rel: "icon", href: "/favicons/favicon.ico" }]]
};
