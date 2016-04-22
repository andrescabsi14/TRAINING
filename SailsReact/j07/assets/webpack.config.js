var path = require('path');
 
module.exports = {
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        include: [
          path.resolve(__dirname, 'js')
        ],
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};