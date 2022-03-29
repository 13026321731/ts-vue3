(()=>{
    function sayHi(str){
        return '您好啊' + str
    }
    let text = '仙女'
    sayHi(text)
    console.log(sayHi(text))
})()

// ts的文件中如果直接使用了js的语法代码，那么在html文件中直接引入ts文件，在谷歌浏览器中是可以直接使用的
// ts的文件中如果使用了ts的语法代码，那么就需要把这个ts文件编译成js文件，在html中直接引入js的文件来使用
// ts文件中函数中的形参，如果使用了某个类型进行修饰，那么最终在编译的js文件中是没有这个类型的
// ts文件中的变量最终使用的是let进行修饰，编译后的js文件中的修饰符就变成var了
