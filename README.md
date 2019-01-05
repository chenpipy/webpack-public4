### 0 配置4.0+
#### 使用webpack
#### 初始化package.json
```
npm init -y 
```

#### 本地安装webpack
```
cnpm install webpack webpack-cli -D
```

#### 直接运行webpack
> 会直接运行node_modules对应的bin目录下的webpack.cmd，如果没有安装webpack，还会自动安装
```
npx webpack
```
- 新建配置文件
> webpack.config.js

#### 在webpack中如何配置我们的开发服务器
> webpack-dev-server 
```
cnpm install webpack-dev-server -D
```
#### npm run build和npm run start的区别是什么？
> npm run build 是打包上线的时候使用，在dis目录产生build.js

> npm run start 是开发的时候使用，启动服务器，默认生成的build.js在内存中

#### webpack插件 
##### 1. html-webpack-plugin
> 将html打包到build下可以自动引用生产的js文件
```
cnpm install html-webpack-plugin -D
```
##### 2. clean-webpack-plugin
> 自动删除文件或者文件夹
```
cnpm install clean-webpack-plugin -D
```
##### 2. extract-text-webpack-plugin@next(新版本)   mini-css-plugin(替代者)
> 抽离样式 抽离到一个css文件 通过css的方式来引用
```
cnpm install extract-text-webpack-plugin@next -D
```

##### 4. purifycss-webpack purify-css glob 
> purifycss-webpack purify-css glob 作用是将引用的css进行打包，如果没有引用，就忽略掉，提高效率
```
cnpm install purifycss-webpack purify-css glob -D
```
##### 4. postcss-loader  autoprefixer
> postcss-loader 加上前缀的，-webkit,提高css浏览器的兼容性
> autoprefixer 可以自动加上前缀
```
cnpm install postcss-loader  autoprefixer -D
```
##### 5. copy-webpack-plugin 
> copy-webpack-plugin 可以自动拷贝文档目录至dis文件夹
```
cnpm install copy-webpack-plugin -D
```
#### webPack中的loader
> loader的作用：loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

##### 1. style-loader css-loader less-loader less less-loader
> style-loader 自动将样式文件通过style的方式引入 
> css-loader 可以将css变成一个模块，再通过style-loader插入到html中
```
cnpm install style-loader css-loader  -D
```
##### 2.babel-loader  babel-core babel-preset-env  新版，不然不兼容
> 1. babel-loader: babel-loader作为webpack的loader的一种，作用同其他loader一样，实现对特定文件类型的处理
> 2. babel-core:babel-core的作用在于提供一系列api。这便是说，当webpack使用babel-loader处理文件时，babel-loader实际上调用了babel-core的api
> 3. babel-preset-env:作用是告诉babel使用哪种转码规则进行文件处理
> 4. babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env @babel表示自版本7开始
```
cnpm install babel-loader@8 @babel/core @babel/preset-env  -D
```
#### 如何查看各种插件的帮助文档
> http://www.npmjs.com/package/插件的名称



