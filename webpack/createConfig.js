
const path = require('path')
const webpack = require('webpack')
const StaticSiteGeneratorWebpackPlugin = require('static-site-generator-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = (options) => {
  return {

    entry: {
      main: './src/entry.js',
    },

    output: {
      filename: options.outputFilename,
      path: path.resolve('build'),
      libraryTarget: 'umd',
    },

    module: {
      rules: [{
        test: /.js$/,
        include: /src/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-stage-2', ['@babel/preset-react', { pragma: 'Glamor.createElement' }]]
          }
        }],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
              name: '[hash]-[name].[ext]'
            } 
        }]
      }],
    },

    plugins: [
      new StaticSiteGeneratorWebpackPlugin('main', ['/']),
      new webpack.ProvidePlugin({ Glamor: 'glamor/react' }),
    ].concat(options.plugins)

  };
}
