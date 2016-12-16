var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src', //__dirname is the root of the project and src is the source
  entry: {
    app:'./app.js',
  },
  output: {
    path: __dirname + '/dist', // /dist is the destination of the bundle
    filename: '[name].bundle.js',
  },
  module: {
    rules: {
      test: /\.js$/, //check for all js files
      use: [{
        loader: 'babel-loader',
        options: {presets: ['es2015']}
      }]
    },
  }
  //to run the dev server
  devServer: {
    contentBase: __dirname + '/src',
  },
};
