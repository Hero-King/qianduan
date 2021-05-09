/**
 * 
    <script src="example.js"></script>
这个例子在页面中加载了一个名为 example.js 的外部文件。文件本身只需包含要放在<script>的
起始及结束标签中间的 JavaScript 代码。与解释行内 JavaScript 一样，在解释外部 JavaScript 文件时，页
面也会阻塞。（阻塞时间也包含下载文件的时间。）

浏览器在解析这个资源时，会向 src 属性指定的路径发送一个 GET 请求，以取得相应资源，假定
是一个 JavaScript 文件。这个初始的请求不受浏览器同源策略限制，但返回并被执行的 JavaScript 则受限
制。当然，这个请求仍然受父页面 HTTP/HTTPS 协议的限制。

不管包含的是什么代码，浏览器都会按照<script>在页面中出现的顺序依次解释它们，前提是它
们没有使用 defer 和 async 属性。第二个<script>元素的代码必须在第一个<script>元素的代码解
释完毕才能开始解释，第三个则必须等第二个解释完，以此类推。

script 标签位置
过去，所有<script>元素都被放在页面的<head>标签内，如下面的例子所示：
<!DOCTYPE html>
<html>
 <head>
 <title>Example HTML Page</title>
 <script src="example1.js"></script>
 <script src="example2.js"></script>
 </head>
 <body>
 <!-- 这里是页面内容 -->
 </body>
</html>
这种做法的主要目的是把外部的 CSS 和 JavaScript 文件都集中放到一起。不过，把所有 JavaScript
文件都放在<head>里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲
染页面（页面在浏览器解析到<body>的起始标签时开始渲染）。。对于需要很多 JavaScript 的页面，这会
导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。
为解决这个问题，现代 Web 应用程序通常将所有 JavaScript 引用放在<body>元素中的页面内容后面，

为<script>元素定义了一个叫 defer 的属性。这个属性表示脚本在执行的时候不会改
变页面的结构。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在<script>元素上
设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行。
<!DOCTYPE html>
<html>
 <head>
 <title>Example HTML Page</title>
 <script defer src="example1.js"></script>
 <script defer src="example2.js"></script>
 </head>
 <body>
 <!-- 这里是页面内容 -->
 </body>
</html>
虽然这个例子中的<script>元素包含在页面的<head>中，但它们会在浏览器解析到结束的
</html>标签后才会执行。

标记为 async 的脚本并不保证能按照它们出现的次序执行

<script>标签还是要放到最后 </body>上面  性能最好 不影响渲染 webpack打包后就是这样的</script>


变量
var aa = "" 定义变量  
function test() {
 var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错！

function test() {
 message = "hi"; // 全局变量
}
test();
console.log(message); // "hi"   
去掉之前的 var 操作符之后，message 就变成了全局变量。只要调用一次函数 test()，就会定义
这个变量，并且可以在函数外部访问到。

var 声明提升
使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域
顶部：
function foo() {
 console.log(age);
 var age = 26;
}
foo(); // undefined
等价于
function foo() {
 var age;
 console.log(age);
 age = 26;
}
foo(); // undefined
let 声明的范围是块作用域，
而 var 声明的范围是函数作用域。
if (true) {
 var name = 'Matt';
 console.log(name); // Matt
}
console.log(name); // Matt

let 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升。
// name 会被提升
console.log(name); // undefined
var name = 'Matt';
// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26; 
与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性（var 声
明的变量则会）。
var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); 
 
const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，
那么修改这个对象内部的属性并不违反 const 的限制。

浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。例如，0.1 加 0.2 得到的不
是 0.3，而是 0.300 000 000 000 000 04。由于这种微小的舍入错误，导致很难测试特定的浮点值。比如下
面的例子：
if (a + b == 0.3) { // 别这么干！
 console.log("You got 0.3.");
} 

字符串插值通过在${}中使用一个 JavaScript 表达式实现
所有插入的值都会使用 toString()强制转型为字符串
console.log(`Hello, ${ `World` }!`); // Hello, World!
将表达式转换为字符串时会调用 toString()：
let foo = { toString: () => 'World' };
console.log(`Hello, ${ foo }!`); // Hello, World! 

JSON.stringify 第二个参数是过滤器，可以是数组或函数；第三个参数是用于缩进结果 JSON 字符串的选项。
JSON.stringify({name: 12,age: 10},["age"])  // "{"age":10}"  //如果第二个参数是一个数组，那么 JSON.stringify()返回的结果只会包含该数组中列出的对象
属性。
JSON.stringify()方法的第三个参数控制缩进和空格

fetch方法
fetch()方法是暴露在全局作用域中的，包括主页面执行线程、模块和工作线程。调用这个方法，
浏览器就会向给定 URL 发送请求。
fetch(url,options对象)
不依赖其他的组件也可以发送ajax了


工作者线程简介
JavaScript 环境实际上是运行在托管操作系统中的虚拟环境。在浏览器中每打开一个页面，就会分
配一个它自己的环境。这样，每个页面都有自己的内存、事件循环、DOM，等等。每个页面就相当于
一个沙盒，不会干扰其他页面。对于浏览器来说，同时管理多个环境是非常简单的，因为所有这些环境
都是并行执行的。
使用工作者线程，浏览器可以在原始页面环境之外再分配一个完全独立的二级子环境。这个子环境
不能与依赖单线程交互的 API（如 DOM）互操作，但可以与父环境并行执行代码。

chrome 一个请求的timing
queueing 请求文件顺序的排序    浏览器线程有限制,发请求不能一次全部发出,而是要把请求放到队列里面去,记录的是添加到待处理队列 到 事件开始处理的时间
stalled (失速的)  浏览器得到要发送请求的指令,到真正发送请求的等待时间  主要代理协商 等待tcp连接
dns lookup 
initial connect 建立tcp连接的时间
request send 发送请求占用的时间
waiting (TTFB time to first byte ) 等待接受第一个字节的时间   服务器优化这个时间
content download 下载时间

元素尺寸:  pdf 第四版498
offsetHeight 元素在垂直方向上占用的像素尺寸，包括它的高度、水平滚动条高度（如果可
见）和上、下边框的高度。
 offsetLeft，元素左边框外侧距离包含元素左边框内侧的像素数。
 offsetTop，元素上边框外侧距离包含元素上边框内侧的像素数。
 offsetWidth，元素在水平方向上占用的像素尺寸，包括它的宽度、垂直滚动条宽度（如果可
见）和左、右边框的宽度。
，offsetLeft 和 offsetTop 是相对于包含元素的，包含元素保存在 offsetParent 属性中。
offsetParent 不一定是 parentNode。比如，<td>元素的 offsetParent 是作为其祖先的<table>
元素，因为<table>是节点层级中第一个提供尺寸的元素。

事件对象e
e.target 就是真实点击的dom元素
e.currentTarget 是当前事件处理程序所在的元素
鼠标事件: 
e.clientX  e.clientY  。这两个属性表示事件发生时鼠标光标在视口中的坐标，所有浏览器都支持。。注意客户端坐标不考虑页面滚动，因此这两个值并不代表鼠标在页面
上的位置。但是clientX与clientY获取的是相对于当前屏幕的坐标，忽略页面滚动因素，这在很多条件下很有用，但当我们需要考虑页面滚动，也就是相对于文档(body元素)的坐标时怎么办呢？加上滚动的位移就可以了，下边我们试试怎么计算页面滚动的位移。
其实在Firefox下问题会简单很多，因为Firefox支持属性pageX,与pageY属性，这两个属性已经把页面滚动计算在内了。 

通过 event 对象的 pageX 和 pageY 可以获取。这两个属性表示鼠标光标在页面上的位置，
因此反映的是光标到页面而非视口左边与上边的距离。

鼠标事件不仅是在浏览器窗口中发生的，也是在整个屏幕上发生的。可以通过 event 对象的
screenX 和 screenY 属性获取鼠标光标在屏幕上的坐标   针对的是显示器的xy坐标
*/

function aa(params) {
    console.log("js加载完成并执行了");
}
aa()