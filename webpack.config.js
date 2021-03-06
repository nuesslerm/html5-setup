// webpack setup tutorial for js|jsx, html:
// https://www.valentinog.com/blog/babel/

// webpack setup tutorial for s|css:
// https://github.com/pixelgoo/simple_webpack_boilerplate,
// https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5

const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          // },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: 'postcss-loader',
          },
          {
            // First we transform SASS to standard CSS
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  // there is a html plugin that will automatically create html from template
  // and insert your JS bundle there.
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      // needs to be index.html
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      // filename doesn't need to be specified; will be main.css
      filename: '[name].css',
      // chunkFilename: '[id].css',
    }),
  ],
};
