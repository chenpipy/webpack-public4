//基于commonjs规范
//多入口，多出口的配置
let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin');
let CleanWebpackPlugin=require("clean-webpack-plugin");
module.exports={
    // entry:['./src/js/index.js','./src/js/index1.js'],    //entry是数组，那么数组中的js文件，会打包成一个js文件
    // entry:'./src/js/index.js', //入口
    entry:{   //多个入口，就要配置多个出口的js文件 把output中的filename配置成：'[name].[hash:8].js' ，[name是动态变量，会自动将入口的js文件分别打包
        index:'./src/js/index.js',
        index1:'./src/js/index1.js'
    },
    output:{
        // filename:'build.[hash:8].js',   //文件名
        filename:'[name].[hash:8].js',
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
        //多个html引用多个js，需要配置多个插件
        new HtmlWebpackPlugin({
            filename:'index.html',  //如果是单文件入口，可以不加
            template: "./src/index.html",
            title:"webpack配置",
            hash:true,  //带上hash值,上线的时候，可以和之前的版本区别开来
            chunks: ['index.js'], //该html需要引用的js文件，单文件不需要，若不加，默认引用所有的js文件
            minify: {
                removeAttributeQuotes:true,  //移除属性的双引号
                // collapseWhitespace:true,   //把代码折叠成一行
            }
        }),
        new HtmlWebpackPlugin({
            filename:'index1.html',
            template: "./src/index1.html",
            title:"webpack配置",
            hash:true,  //带上hash值,上线的时候，可以和之前的版本区别开来
            chunks: ['index1.js'],
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