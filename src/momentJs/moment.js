moment.js
//安装moment.js   npm i moment -S  使用ES6语法导入
console.log(moment());  //返回当前时间的对象
console.log(moment(new Date())) //同上
//输出moment对象Moment
// {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: Locale, _d: Thu Sep 19 2019 20:53:38 GMT+0800 (中国标准时间), …}
// _d: Thu Sep 19 2019 20: 53: 38 GMT + 0800(中国标准时间) { }
// _isAMomentObject: true
// _isUTC: false
// _isValid: true
// _locale: Locale { _calendar: { … }, _longDateFormat: { … }, _invalidDate: "Invalid date", ordinal: ƒ, _dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, … }
// _pf: { empty: false, unusedTokens: Array(0), unusedInput: Array(0), overflow: -2, charsLeftOver: 0, … }
// __proto__: Object
console.log(typeof (moment()))  //object对象

//moment（字符串）  将一个字符串转转换成moment对象  不推荐使用  因为每个浏览器编码不一致
console.log(moment("1995-12-25"))   //返回了moment对象

//moment（字符串 + 格式）
console.log(moment("12-25-1995", "MM-DD-YYYY"))     //moment对象  指定的格式转换

//If you don't know the exact format of an input string, but know it could be one of many, you can use an array of formats
moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"])  //注意Y M D 的顺序

//moment(Number)    //代表偏移 Number是距离那个点的毫秒值 the number of milliseconds since the Unix Epoch (Jan 1 1970 12AM UTC)
console.log(moment(1318781876406))  //moment 时间是Mon Oct 17 2011 00:17:56 GMT+0800 (中国标准时间)
//moment.unix(Number)   //时间戳
var day1 = moment.unix(1318781876);
console.log(day1)            //同上

//moment（Date对象）
var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);

//moment.utc()      By default, moment parses and displays in local time.If you want to parse or display a moment in UTC, you can use moment.utc() instead of moment()   说明UTC是世界标准时间就是伦敦时间  我们东八区
//默认值
moment(5, "HH");  // today, 5:00:00.000
moment({ hour: 5 });  // today, 5:00:00.000
moment({ hour: 5, minute: 10 });  // today, 5:10.00.000
moment({ hour: 5, minute: 10, seconds: 20 });  // today, 5:10.20.000
moment({ hour: 5, minute: 10, seconds: 20, milliseconds: 300 });  // today, 5:10.20.300

//moment 取值和赋值采用GET和SET方式   参数使用正负数   函数有无s都一样
//moment().seconds(30) === new Date().setSeconds(30);
//moment().seconds() === new Date().getSeconds();
//毫秒millisecond  second minute hour date day weekday

//moment 操作 
// moment().add(Number, String);        +
// moment().add(Duration);
// moment().add(Object);
//moment().subtract(7, 'days')      -
//moment().startOf(String)      开始时间   moment().startOf('year')等
//moment().endOf("year")
console.log(moment().add(7, 'days'))    //在当前时间对象上  加上七天  返回moment
console.log(moment().add(7, 'days').add(1, 'months'))
console.log(moment().add({ days: 7, months: 1 }))

//格式化
console.log(moment().format());      //默认格式  2019-09-19T22:03:06+08:00
console.log(typeof (moment().format()))     //string 类型
moment().format(String);        //我们给定的格式格式化         moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

//moment().toObject()   对象
//查询
moment('2010-10-20').isBefore('2010-12-31', 'year'); // false
moment('2010-10-20').isBefore('2011-01-01', 'year'); // true

moment('2010-10-20').isSame('2009-12-31', 'year');  // false
moment('2010-10-20').isSame('2010-01-01', 'year');  // true
moment('2010-10-20').isSame('2010-12-31', 'year');  // true
moment('2010-10-20').isSame('2011-01-01', 'year');  // false

moment('2010-10-20').isAfter('2010-01-01', 'year'); // false
moment('2010-10-20').isAfter('2009-12-31', 'year'); // true

moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year'); // false
moment('2010-10-20').isBetween('2009-12-31', '2012-01-01', 'year'); // true

Moment.js是一个轻量级的JavaScript时间库，它方便了日常开发中对时间的操作，提高了开发效率。日常开发中，通常会对时间进行下面这几个操作：比如获取时间，设置时间，格式化时间，比较时间等等。下面就是我对moment.js使用过程中的整理，方便以后查阅。

一、引入moment.js
1.Node.js方式引入
（1）安装

npm install moment  或者  yarn add moment
（2）引入

// require 方式
var moment = require('moment');

// import 方式
import moment from 'moment';
2.浏览器方式引入
    < script src = "moment.js" ></script >
        二、设定moment区域为中国
// require 方式
require('moment/locale/zh-cn')
moment.locale('zh-cn');

// import 方式
import 'moment/locale/zh-cn'
moment.locale('zh-cn');
三、使用
1.获取时间
（1）获取当前时间
moment()
（2）获取今天0时0分0秒
moment().startOf('day')
（3）获取本周第一天(周日)0时0分0秒
moment().startOf('week')
（4）获取本周周一0时0分0秒
moment().startOf('isoWeek')
（5）获取当前月第一天0时0分0秒
moment().startOf('month')
（6）获取今天23时59分59秒

moment().endOf('day')
（7）获取本周最后一天(周六)23时59分59秒

moment().endOf('week')
（8）获取本周周日23时59分59秒

moment().endOf('isoWeek')
（9）获取当前月最后一天23时59分59秒

moment().endOf('month')
（10）获取当前月的总天数

moment().daysInMonth()
（11）获取时间戳(以秒为单位)

moment().format('X') // 返回值为字符串类型
moment().unix() // 返回值为数值型
（12）获取时间戳(以毫秒为单位)

moment().format('x') // 返回值为字符串类型
moment().valueOf() // 返回值为数值型
（13）获取年份

moment().year()
moment().get('year')
（14）获取月份

moment().month()  // (0~11, 0: January, 11: December)
moment().get('month')
（15）获取一个月中的某一天

moment().date()
moment().get('date')
（16）获取一个星期中的某一天

moment().day() // (0~6, 0: Sunday, 6: Saturday)
moment().weekday() // (0~6, 0: Sunday, 6: Saturday)
moment().isoWeekday() // (1~7, 1: Monday, 7: Sunday)
moment().get('day')
mment().get('weekday')
moment().get('isoWeekday')
（17）获取小时

moment().hours()
moment().get('hours')
（18）获取分钟

moment().minutes()
moment().get('minutes')
（19）获取秒数

moment().seconds()
moment().get('seconds')
（20）获取当前的年月日时分秒

moment().toArray() // [years, months, date, hours, minutes, seconds, milliseconds]
moment().toObject() // {years: xxxx, months: x, date: xx ...}
2.设置时间
（1）设置年份

moment().year(2019)
moment().set('year', 2019)
moment().set({ year: 2019 })
（2）设置月份

moment().month(11)  // (0~11, 0: January, 11: December)
moment().set('month', 11)
（3）设置某个月中的某一天

moment().date(15)
moment().set('date', 15)
（4）设置某个星期中的某一天

moment().weekday(0) // 设置日期为本周第一天（周日）
moment().isoWeekday(1) // 设置日期为本周周一
moment().set('weekday', 0)
moment().set('isoWeekday', 1)
（5）设置小时

moment().hours(12)
moment().set('hours', 12)
（6）设置分钟

moment().minutes(30)
moment().set('minutes', 30)
（7）设置秒数

moment().seconds(30)
moment().set('seconds', 30)
（8）年份 + 1

moment().add(1, 'years')
moment().add({ years: 1 })
（9）月份 + 1

moment().add(1, 'months')
（10）日期 + 1

moment().add(1, 'days')
（11）星期 + 1

moment().add(1, 'weeks')
（12）小时 + 1

moment().add(1, 'hours')
（13）分钟 + 1

moment().add(1, 'minutes')
（14）秒数 + 1

moment().add(1, 'seconds')
（15）年份 - 1

moment().subtract(1, 'years')
moment().subtract({ years: 1 })
（16）月份 - 1

moment().subtract(1, 'months')
（17）日期 - 1

moment().subtract(1, 'days')
（18）星期 - 1

moment().subtract(1, 'weeks')
（19）小时 - 1

moment().subtract(1, 'hours')
（20）分钟 - 1

moment().subtract(1, 'minutes')
（21）秒数 - 1

moment().subtract(1, 'seconds')
3.格式化时间
格式代码	说明	返回值例子
M	数字表示的月份，没有前导零	1到12
MM	数字表示的月份，有前导零	01到12
MMM	三个字母缩写表示的月份	Jan到Dec
MMMM	月份，完整的文本格式	January到December
Q	季度	1到4
D	月份中的第几天，没有前导零	1到31
DD	月份中的第几天，有前导零	01到31
d	星期中的第几天，数字表示	0到6，0表示周日，6表示周六
ddd	三个字母表示星期中的第几天	Sun到Sat
dddd	星期几，完整的星期文本	从Sunday到Saturday
w	年份中的第几周	如42：表示第42周
YYYY	四位数字完整表示的年份	如：2014 或 2000
YY	两位数字表示的年份	如：14 或 98
A	大写的AM PM	AM PM
a	小写的am pm	am pm
HH	小时，24小时制，有前导零	00到23
H	小时，24小时制，无前导零	0到23
hh	小时，12小时制，有前导零	00到12
h	小时，12小时制，无前导零	0到12
m	没有前导零的分钟数	0到59
mm	有前导零的分钟数	00到59
s	没有前导零的秒数	1到59
ss	有前导零的描述	01到59
X	Unix时间戳	1411572969
（1）格式化年月日： 'xxxx年xx月xx日'

moment().format('YYYY年MM月DD日')
（2）格式化年月日： 'xxxx-xx-xx'

moment().format('YYYY-MM-DD')
（3）格式化时分秒(24小时制) ： 'xx时xx分xx秒'

moment().format('HH时mm分ss秒')
（4）格式化时分秒(12小时制) ：'xx:xx:xx am/pm'

moment().format('hh:mm:ss a')
（5）格式化时间戳(以毫秒为单位)

moment().format('x') // 返回值为字符串类型
4.比较时间
（1）获取两个日期之间的时间差

let start_date = moment().subtract(1, 'weeks')
let end_date = moment()

end_date.diff(start_date) // 返回毫秒数

end_date.diff(start_date, 'months') // 0
end_date.diff(start_date, 'weeks') // 1
end_date.diff(start_date, 'days') // 7
start_date.diff(end_date, 'days') // -7
5.转化为JavaScript原生Date对象
moment().toDate()
new Date(moment())
