# require.config-
一个简单的requireJs配置文件

同时加了一个版本的控制

在使用 Requirejs 实践中，将require.config()作为全局配置是一个好习惯,在引用js文件时，对于不同级的文件我们可以通过配置，不需要在引用时加上路径

注意： require.config({
 paths: 'xxxx'
})
//这里的paths 不要写成path


结果：
 ![image](https://github.com/xuqian1004/require.config-/blob/master/requireJSconfig/%E6%8D%95%E8%8E%B7.PNG)
