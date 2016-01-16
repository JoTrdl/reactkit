
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Module export for Webpack
 */
module.exports = {
  entry: {
    'app': './src/app.jsx'
  },

  output: {
    path: './src',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app', 'app.js'),
    new HtmlWebpackPlugin({
      env: 'development',
      template: './src/index.html',
      inject: false
    })
  ],

  resolve: {
    extensions: ['', '.jsx', '.js', '.css']
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }},
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(ttf|eot|svg|woff(2)?).*$/, loader: "file-loader" },
      { test: /\.(png|jpg|jp(e)?g)$/, loader: "url-loader?limit=1000" }
    ]
  },

  // Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    contentBase: './src'
  }
};
