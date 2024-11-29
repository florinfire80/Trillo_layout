module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["> 1%", "not dead", "last 5 versions"],
    }),
  ],
  map: true,
};
