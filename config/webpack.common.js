const path = require('path');
const { htmlWebpackPlugin, cleanWebpackPlugin } = require('./webpack.plugins.js');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    cleanWebpackPlugin
  ],
};
