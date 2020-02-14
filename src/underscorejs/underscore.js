//https://www.html.cn/doc/underscore/   中文文档
let arr = [1, 2, 3, 4, 5]
let object = { one: 1, two: 2, three: 3 }
//集合函数    对对象进行操作的时候，先是（value,key）return 控制条件和数组中的内容
_.each(arr, i => console.log(i * 2))        //2 4 6 8 10 对于数组相当于forEach的用法
_.each(object, i => console.log(i))         //1 2 3     遍历对象的value值

console.log(_.map(arr, i => i > 3))         //[false, false, false, true, true]
console.log(_.map(arr, i => i * i))         //[1, 4, 9, 16, 25]
console.log(_.map(object, i => i * i))         //[1,4,9]    一个参数的时候代表value
console.log(_.map(object, (key, value) => value + 1))        //["one1", "two1", "three1"] 
console.log(_.map(object, (num, key) => num + 2))           //[3,4,5]   注意相反 第一个位置是value 第二个位置是key   所以使用可以如下  为什么这么设计，当我们第二个参数不传入的时候，遍历的值需要是对象的value啊
console.log(_.map({ name: 'wang', age: '18' }, (value, key) => value + 1))    //["wang1", "181"]
console.log(_.mapObject({ name: 'wang', age: '18' }, (value, key) => value + 1))    //{name: "wang1", age: "181"}   返回的就是对象   有了1 是因为return

console.log(_.find(arr, (item) => item > 2))        //3
console.log(_.find(object, (item) => item > 2))     //3
console.log(_.find(object, (value, key) => {
    console.log(key);   //one  two three
    return key.length > 3   //3  把符合条件的属性值返回了
    //return key.length > 5   //undefined
}))
console.log(typeof (_.find(object, i => i > 2)))    //number
console.log((_.find(object, (value, key) => key.startsWith('t'))))    //number2把符合条件的属性值返回了
console.log(_.filter(arr, i => i % 2 === 0))     //[2,4]
console.log(_.filter(object, i => i % 2 > 0))   //[1,3]
console.log(_.filter(object, (value, key) => key.startsWith('t')))   //[2,3]   是2，3 数组 并不是一个对象 
console.log(_.filter({ name: 'wang', age: '18' }, (value, key) => value + 1))   //["wang", "18"]   是2，3 数组 并不是一个对象 

var odds = _.reject([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
console.log(odds)   //与filter用法相反  【 1,3,5 】
console.log(_.every([2, 4, 5], function (num) { return num % 2 == 0; }))//false 判断是否数组/对象中每一个元素都满足我们的条件
console.log(_.some([1, 2, 3], (i) => i > 2))    //true
console.log(_.contains([1, 2, 3], 3))   //true  如果list包含指定的value则返回true
//_.pluck(list, propertyName)
//pluck也许是map最常使用的用例模型的简化版本，即萃取数组对象中某属性值，返回一个数组。
var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
_.pluck(stooges, 'name');       //= ["moe", "larry", "curly"]

_.max(arr) //不仅可以得到数组的最大值，也可以遍历对象，得到我们指定条件最大的对象
console.log(_.max([{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }], (obj) => obj.age))    //{name: "curly", age: 60}

//_.toArray(list)  把list(任何可以迭代的对象)转换成一个数组，在转换 arguments 对象时非常有用
//_.size(list)  返回list的长度  对象没有.length属性


_.size({ one: 1, two: 2, three: 3 })    //3

//_.object(list, [values])  将数组转换为对象。传递任何一个单独[key, value]对的列表，或者一个键的列表和一个值得列表。成对（Pairs）传递 则是 pairs 的反函数。 如果存在重复键，最后一个值将被返回

//有关对象的方法
//_.keys(object)  检索object拥有的所有可枚举属性的名称数组
//_.values(object)   返回object对象所有的属性值数组
//_.mapObject(object, iteratee, [context]) 它类似于map，但是这用于对象。转换每个属性的值  返回值是对象
_.mapObject({ start: 5, end: 12 }, function (val, key) {
    return val + 5;
})  //{start: 10, end: 17}
//_.isUndefined(value) 如果value是undefined，返回true