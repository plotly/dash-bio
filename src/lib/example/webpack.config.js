const path = require('path');

module.exports = {
  entry: {
    example: ['./example/js/main.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/js/',
    filename: 'bundle.[name].js',
  },
  devServer: {
    port: '4000',
    hot: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      }, {
        test: /\.scss$/,
        include: /example\/css/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  devtool: 'source-map',
};
