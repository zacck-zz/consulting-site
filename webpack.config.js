'use strict'
var webpack = require('webpack');

module.exports = {
  //webpack reads the entry or entries from here
  context: __dirname + '/src', //__dirname is the root of the project and src is the source
  entry: {
    app:'./app.jsx',
  },
  //wepack dumps it compiled output here
  output: {
    path: __dirname + '/dist', // /dist is the destination of the bundle
    filename: '[name].bundle.js',
    publicPath: '/assets', //This works with webpack-dev-server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //check for all js files
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015', 'react', 'stage-0']}
        }]
      },
      {
        test: /\.(sass|scss)$/, //check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]

  },
  resolve: {
    modules: [
      'node_modules',
      '.src/components',
    ]
  }
  //to run the dev server
  devServer: {
    contentBase: __dirname + '/src',
  },
};
