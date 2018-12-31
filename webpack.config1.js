//基于commonjs规范
let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin');
let CleanWebpackPlugin=require("clean-webpack-plugin");
module.exports={
    entry:'./src/js/index.js', //入口
    output:{
       filename:'build.[hash:8].js',   //文件名
        path:path.resolve('./build') //必须是绝对路径 path.resolve：根据当前路径解析出绝对路径
    }, //出口
    devServer:{
        contentBase:'./build',   //默认的根目录
        port:3000,
        compress:true,//服务器压缩
        open:true, //自动打开浏览器
       /* hot:true*/
    }, //开发服务器
    module:{}, //模块配置
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title:"webpack配置",
            hash:true,  //带上hash值,上线的时候，可以和之前的版本区别开来
            minify: {
                removeAttributeQuotes:true,  //移除属性的双引号
                // collapseWhitespace:true,   //把代码折叠成一行
            }
        }),
        new CleanWebpackPlugin([
            './build'  //把build文件夹清空
        ]),
    ], //插件的配置
    mode:'development', //可以更改模式
    resolve: {} //配置解析
}