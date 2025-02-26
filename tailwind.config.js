const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,njk}",
    //"./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bronze': '##ca8a04'
      }
    },
  },
  //plugins: [ require("tw-elements/plugin.cjs") ],
  darkMode: "class"
});
