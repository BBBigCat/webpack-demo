const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "production",//webpack4中多加一个mode判断是开发还是生产环境
  // entry: './src/index.js',
  entry: {
    // app:'./src/index.js',
    // print:'./src/print.js'
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: { //告诉开发服务器，在哪里查找文件
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
  //     , {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     }
    ]
  }
};