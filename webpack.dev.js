/**
 * @file
 * @author
 * @dete
 */
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        // 测试定义的环境变量的值在代码中取用的时候是不是原有的类型
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev'),
            'process.env.TEST': true,
            'process.env.NUMBER': 1,
        }),
    ],
});
