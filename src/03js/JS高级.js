/**
 *  JS 原型  每一个构造函数都有一个属性叫 prototype  是一个对象,可以给他动态添加属性和方法  这些属性和方法对象可以
 * 直接调用
 *
 * https://blog.csdn.net/u014465934/article/details/84836731
 * 得到： Function是顶层的构造器， Object是顶层的构造函数
 *          原型上： Function继承了Object
 *          构造器上： Function构造了Object
    自己创建出来的对象有个属性 __proto__ 指向了构造函数的原型对象
    对象的__proto__属性和构造函数中的prototype属性是一个对象
    原型对象中有个属性constructor 指向了构造函数  Person.prototype.constructor === Person  Person.__proto__ === Function.prototype
    原型对象是对象,它的__proto__是object对象,即Object构造函数的原型对象  在往上就是null
   构造函数内部的方法，创建实例的时候会复制函数，但是原型对像上面的不会
    通常我们自己定义的构造函数里面定义一些属性,方法定义到原型对象上面达到节约内存的目的
    Student.prototype = {
         方法
    }
    但是这样导致对象的原型里面缺少constructor属性
    可以在上面添加该属性 constructor: Student
    注意: 想要使用自己定义的构造和原型对象,需要在定义好了原型后在new对象
    给内置对象的原型对象添加属性或者方法只能通过.的方式 Array.prototype.getSum= 不能Array.protorype={}  保护作用
    在原型对象里面  this表示啥?  代表调用这个属性/方法的实例啊  记住了

    体会好面向对象编程
    所有的JS文件命名的变量都是在全局作用域里面的,难免会存在命令冲突的问题.我们可以使用匿名函数自调用的方式降低冲突,但是我们怎么使用
    匿名函数中的重要内容呢? 可以在匿名中 挂载使用的对象到window对象下面
    自调用函数避免结合出错,在函数前面加一个;
    自调用参数常会有 (window,undefined)
      window的作用是使得代码用到的window对象变成参数,参数就可以在压缩代码时候变成单个字母,减少代码体积
      undefined同上,同时 undefined在老版本中可以被重新定义;防止自调用函数中用到被更改的undefined
   定时器里面回调函数的this是window,因为是window执行的代码
    function aa(){}.bind(对象,参数1,参数2)  返回一个函数,里面this指向对象  相当是对象.aa但是没有调用哦
    call 函数,改变this指向并直接调用 fn.call(对象,参数1,参数2)   想用哪个方法就先找到哪个方法然后.call传入要处理的数据和参数
    Function.apply(obj, [])
    apply 就是对数组做处理的时候想想可不可以用已经存在的函数可以就用apply将数组当参数传入
    bind  不调用函数,用于定时器回调  事件处理函数
    降低网页请求数量和请求资源的体积(压缩代码)

    继承:
      原型继承,设置构造函数的prototype 为某一个父类对象  Student.prototype = new Person 或者Person的原型(这个会使得儿子添加方法父亲也有)
         缺点是无法设置构造函数的参数
      借用构造函数  在儿子中调用父亲函数并把this指向儿子对象 儿子构造中Person.call(this,name,age)
         缺点: 构造函数的方法根据我们分析应该写在原型对象里面,所以恰恰这种方法不能继承原型中的方法
      组合继承    前两种结合
   高阶函数: 函数作为参数或者作为返回值

   任务队列的代码只有等到其他顺序代码执行完毕才会执行
   对象的拷贝:
      浅拷贝: 遍历对象key 依次赋值  只能把对象的以一层属性拷贝,属性的属性是共享的
      深拷贝: 遍历对象key 如果属性值是对象,数组,递归拷贝
   遍历DOM树:
      function bianli (parent){
         for(let i=0;i<parent.children.length;i++){
            let child = parent.children[i];
            bianli(child)
         }
      }
 *
 *
 *


使用<script>的方式有两种：通过它直接在网页中嵌入 JavaScript 代码，以及通过它在网页中包含
外部 JavaScript 文件。

<script src="example.js"></script>
这个例子在页面中加载了一个名为 example.js 的外部文件。文件本身只需包含要放在<script>的
起始及结束标签中间的 JavaScript 代码。与解释行内 JavaScript 一样，在解释外部 JavaScript 文件时，页
面也会阻塞。（阻塞时间也包含下载文件的时间。）
使用了 src 属性的<script>元素不应该再在<script>和</script>标签中再包含其他
JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。
deffer 脚本会被延迟到整个页面都解析完毕后再运行。 相当于告诉浏览器立即下载，但延迟执行。

XHTML 将 HTML 作为 XML的应用重新包装的结果。


let var const
var是函数作用域,没有块作用域的概念   var会声明提前
 let 声明的变量不会在作用域中被提升。
 与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性（var 声
明的变量则会）。 但是不能重复声明
const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，

数据类型:
ECMAScript 有 6 种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、
String 和 Symbol。Symbol（符号）是 ECMAScript 6 新增的。还有一种复杂数据类型叫 Object（对
象）。

数据转换: 直接调用 Number()  String()  不要new 
型使用 IEEE 754 格式表示整数和浮点值（在某些语言中也叫双精度值）。
null和udefined 没有toString 方法  想变成string可以  先用String()转型

转成整数: Number()  
 布尔值，true 转换为 1，false 转换为 0。
 数值，直接返回。
 null，返回 0。
 undefined，返回 NaN。
 对象，调用 valueOf()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用
toString()方法，再按照转换字符串的规则转换。
推荐优先使用parseInt  如果第一个字符不是数值字符、加号或减号，parseInt()立即
返回 NaN。这意味着空字符串也会返回 NaN（这一点跟 Number()不一样，它返回 0）。
parseInt(123abc)  => 123
parseInt(null)  => NAN

模板字符串插值通过在${}中使用一个 JavaScript 表达式实现  `${true ? 12 : 90} `  => "12"

Symbol（符号）是 ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
符号需要使用 Symbol()函数初始化。因为符号本身是原始类型，所以 typeof 操作符对符号返回
symbol。
let sym = Symbol();
console.log(typeof sym); // symbol









 */