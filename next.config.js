const withPlugins = require('next-compose-plugins');
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require('next-images');

module.exports = withPlugins([
    withCSS(withSass(
        {
            cssModules: true,
        }
    )),
    withImages()
]);
