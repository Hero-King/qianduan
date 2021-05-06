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

const m1 = new Map([
 ["key1", "val1"],
 ["key2", "val2"],
 ["key3", "val3"]
]);
alert(m1.size); // 3
Object 只能使用数值、字符串或符号作为键不同，Map 可以使用任何 JavaScript 数据类型作为键 基本上相当于使用严格对象相等的标准来检查键的匹配性。
与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执
行迭代操作。
const m = new Map([
 ["key1", "val1"],
 ["key2", "val2"],
 ["key3", "val3"]
]);
alert(m.entries === m[Symbol.iterator]); // true
for (let pair of m.entries()) {
 alert(pair);
}
// [key1,val1]
// [key2,val2]
// [key3,val3]

WeakMap 
是 Map 的“兄弟”类型，其 API 也是 Map 的子集。WeakMap 中的“weak”（弱），
描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式。
弱映射中的键只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会抛出
TypeError。值的类型没有限制。

P195 
WeakMap 中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，
不会阻止垃圾回收。但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。只要键存在，键/值
对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。
来看下面的例子：
const wm = new WeakMap();
wm.set({}, "val");
在查看wm 时候 数据丢失了
set()方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用，
所以当这行代码执行完成后，这个对象键就会被当作垃圾回收。然后，这个键/值对就从弱映射中消失
了，使其成为一个空映射。在这个例子中，因为值也没有被引用，所以这对键/值被破坏以后，值本身
也会成为垃圾回收的目标。
再看一个稍微不同的例子
const wm = new WeakMap();
const container = {
 key: {}
};
wm.set(container.key, "val");
function removeReference() {
 container.key = null;
}
这一次，container 对象维护着一个对弱映射键的引用，因此这个对象键不会成为垃圾回收的目
标。不过，如果调用了 removeReference()，就会摧毁键对象的最后一个引用，垃圾回收程序就可以
把这个键/值对清理掉。

因为 WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力。

迭代
实现 Iterable 接口（可迭代协议）要求同时具备两种能力：支持迭代的自我识别能力和创建实现
Iterator 接口的对象的能力。在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而
且这个属性必须使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂
函数，调用这个工厂函数必须返回一个新迭代器。
很多内置类型都实现了 Iterable 接口：
 字符串
 数组
 映射
 集合
 arguments 对象
 NodeList 等 DOM 集合类型

let num = 1;
let obj = {};
// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined

let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');
// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
console.log(els[Symbol.iterator]); // f values() { [native code] }

// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {}
console.log(arr[Symbol.iterator]()); // ArrayIterator {}
console.log(map[Symbol.iterator]()); // MapIterator {}
console.log(set[Symbol.iterator]()); // SetIterator {}
console.log(els[Symbol.iterator]()); // ArrayIterator {}

迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。迭代器 API 使用 next()方法
在可迭代对象中遍历数据。每次成功调用 next()，都会返回一个 IteratorResult 对象，其中包含迭
代器返回的下一个值。若不调用 next()，则无法知道迭代器的当前位置。
next()方法返回的迭代器对象 IteratorResult 包含两个属性：done 和 value。done 是一个布
尔值，表示是否还可以再次调用 next()取得下一个值；value 包含可迭代对象的下一个值（done 为
false），或者 undefined（done 为 true）。done: true 状态称为“耗尽”。

自定义迭代器: 手写Symbol.interator属性 和next方法
提前终止迭代器: 可选的 return()方法用于指定在迭代器提前关闭时执行的逻辑。


生成器


 */