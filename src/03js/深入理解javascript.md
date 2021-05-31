## 深入理解javascript 
参考链接： 汤姆大叔 https://www.cnblogs.com/TomXu/archive/2011/12/28/2286877.html
W3C https://www.w3cschool.cn/deep_learn_javascript/deep_learn_javascript-1sry284r.html

### 编写高质量JavaScript代码的基本要点
- 避免使用全局变量
- 合理使用 hasOwnProperty
```
// 1.
// for-in 循环
for (var i in man) {
   if (man.hasOwnProperty(i)) { // 过滤
      console.log(i, ":", man[i]);
   }
}
/* 控制台显示结果
hands : 2
legs : 2
heads : 1
*/
// 2.
// 反面例子:
// for-in loop without checking hasOwnProperty()
for (var i in man) {
   console.log(i, ":", man[i]);
}
/*
控制台显示结果
hands : 2
legs : 2
heads : 1
clone: function()
*/
```
- parseInt()下的数值转换总是指定基数参数。
```
var month = "06",
    year = "09";
month = parseInt(month, 10);
year = parseInt(year, 10);
```
- 使用一个下划线前缀来表示一个私有属性或方法

### 揭秘命名函数表达式

  var f = function foo(){
    return typeof foo; // foo是在内部作用域内有效
  };
  // foo在外部用于是不可见的
  typeof foo; // "undefined"
  f(); // "function"

- JScript的内存管理
```
  var f = (function(){
    if (true) {
      return function g(){};
    }
    return function g(){};
  })();
  我们知道，这个匿名函数调用返回的函数（带有标识符g的函数），然后赋值给了外部的f。我们也知道，命名函数表达式会导致产生多余的函数对象，而该对象与返回的函数对象不是一回事。所以这个多余的g函数就死在了返回函数的闭包中了，因此内存问题就出现了。这是因为if语句内部的函数与g是在同一个作用域中被声明的。这种情况下 ，除非我们显式断开对g函数的引用，否则它一直占着内存不放。
    var f = (function(){
        var f, g;
        if (true) {
          f = function g(){};
        }
        else {
          f = function g(){};
        }
        // 设置g为null以后它就不会再占内存了
        g = null;
        return f;
  })();

  其实，如果我们不想要这个描述性名字的话，我们就可以用最简单的形式来做，也就是在函数内部声明一个函数（而不是函数表达式），然后返回该函数
```
- 自执行函数
```
// 下面2个括弧()都会立即执行

(function () { /* code */ } ()); // 推荐使用这个
(function () { /* code */ })(); // 但是这个也是可以用的
```