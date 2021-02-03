const withPlugins = require('next-compose-plugins');
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require('next-images');
const path = require('path')

module.exports = withPlugins([
    withCSS(withSass(
        {
            cssModules: true,
        }
    )),
    withImages()
]);
// module.exports = {
//     webpack: (config, options) => {
//       config.module.rules.push(
//         {
//           test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
//           loader: 'url-loader?limit=100000' 
//         }
//       )
//       return config
//     },
//   }


module.exports = {
    // exportTrailingSlash:true,
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
       
        '/': { page: '/home' },

    //   '/registration/:id': { page: '/PapAssistance' },
      }
    },
  }