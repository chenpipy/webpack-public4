// let str=require('./index1.js')
import '../index.html'
import '../css/index.css'  //默认是不支持的，需要loader处理
console.log("index")
console.log("强制刷新7")
if(module.hot){
    module.hot.accept();
}