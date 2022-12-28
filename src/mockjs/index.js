const Mock = require('../lib/mock')

// 返回值的类型是根据右侧数据类型判断的

// 'name|min-max': string
// 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
// 返回值: {key: '★ 1到10个'}
console.log(Mock.mock({
  "key|1-10": "★"
}));

// 返回值: {key: '★ 10个'}
console.log(Mock.mock({
  "key|10": "★"
}));

// 'name|min-max': number
// 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
// 返回值: {key: 1~100之间的number}
console.log(Mock.mock({
  "key|1-100": 10
}));

// 'name|min-max.dmin-dmax': number 
// 生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
// 返回值: { key1: 4.295, key2: 100.37, key3: 100.63, key4: 100.3779487417 }
console.log(Mock.mock({
  "key1|1-100.1-5": 1,
  "key2|100.2": 1,
  "key3|100.1-5": 1,
  "key4|100.10": 1,
}));

// 'name|1': boolean
// 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
// 返回值: { key: false}
console.log(Mock.mock({
  "key|1": true
}));

// 'name|min-max': value
// 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
// 返回值: { key: false}
console.log(Mock.mock({
  "key|1-10": true
}));

// 'name|count': object
// 从属性值 object 中随机选取 count 个属性。
// 返回值: { key: { age: 2, hobby: 3 } }
console.log(Mock.mock({
  "key|2": { name: 1,age: 2, hobby: 3}
}));

// 'name|min-max': object
// 从属性值 object 中随机选取 min 到 max 个属性。
console.log(Mock.mock({
  "object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }
}));

// 'name|1': array
// 从属性值 array 中随机选取 1 个元素，作为最终值。
// 返回值： { array: 'AMD' }
console.log(Mock.mock({
  "array|1": [
    "AMD",
    "CMD",
    "UMD"
  ]
}));

// 'name|+1': array
// 从属性值 array 中顺序选取 1 个元素，作为最终值。

// 'name|min-max': array
// 通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
// result: 
/**
 * {
  "array": [
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    }
  ]
}
 */
console.log(Mock.mock({
  "array|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]
    }
  ]
}));


// 书写数据生成函数
console.log(Mock.mock(() => {
  if(new Date().getSeconds() % 2 === 0){
    return {
      code: 200,
      data: 'success'
    }
  }else{
    return {
      code: 500
    }
  }
}));