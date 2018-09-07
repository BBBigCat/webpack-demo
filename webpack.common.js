//生产环境中，我们的目标则转向于关注更小的 bundle，
// 更轻量的 source map，以及更优化的资源，以改善加载时间。
// 由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
  entry: {
    app: './src/index.js'
  },plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
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
          , {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          }
    ]
  }
};