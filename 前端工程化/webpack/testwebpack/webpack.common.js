const path = require('path');
const webpack = require('webpack');  // 这个插件不需要安装，是基于webpack的，需要引入webpack模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入HtmlWebpackPlugin插件
const ExtractTextPlugin = require('extract-text-webpack-plugin') //引入分离插件
module.exports = {
    entry: {
        index: path.join(__dirname, "/src/index.js"),
        index2: path.join(__dirname, "/src/index2.js")
    },
    output: {
        path: path.join(__dirname, "/dist"), // 打包后的文件存放的地方 
        filename: "[name].js" // 打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,   // 正则匹配以.css结尾的文件
                use: ExtractTextPlugin.extract({  // 这里我们需要调用分离插件内的extract方法
                    fallback: 'style-loader',  // 相当于回滚，经css-loader处理过的css最终再经过style-loader处理
                    use: ['css-loader']
                })
            },
            {
                test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
                use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),  // new一个插件的实例 
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html")// new一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new ExtractTextPlugin('css/index.css') // 将css分离到/dist文件夹下的css文件夹中的index.css 
    ]
}
