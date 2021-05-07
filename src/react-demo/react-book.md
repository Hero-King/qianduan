## 学习深入react技术栈
### 事件系统
合成事件主要做了两件事: 事件委派和自动绑定
- 事件委派
vdom 是在内存中以对象的形式存在,在这些对象上添加事件很方便.react并不是把事件绑定在真实的节点上,而是把事件绑定在最外层,使用一个统一的监听器,监听器维持一个映射:组件内部的事件监听和处理函数,采用事件冒泡机制,冒泡到最外层节点,进行处理
- 自动绑定
react中每个方法的上下文都指向当前组件的实例
> react 事件是组件往父组建冒泡，不管元素dom的位置，可以参见react protal 用法，dom不存在子父关系的时候，也可以冒泡事件
### 组件通信
> 没有嵌套关系的组件
可以使用发布订阅/ redux
### 高阶组件
实现高阶组件有两种方式:
- 属性代理: 高阶组件包裹react组件来操作props
可以使用@高阶组件名书写
```javascript
const MyContainer = (WrappedComponent) => {
    // 函数返回一个组件
    class extends Component{
        render(){
            return <WrappedConponent />
        }
    }
}
@MyContainer    //高阶组件语法糖
class MyConponent extends Component{
    render(){
    }
}
```

- 反向继承: 高阶组件继承被包裹的react组件
```javascript
const MyContainer = (WrappedComponent) => {
    // 函数返回一个组件
    class extends WrappedComponent{
        render(){
            return super.render()
        }
    }
}
```

### purerender
react只对参数进行浅比较, 浅比较相同时候不会触发渲染
purerender 进行深比较

## React
React是用于构建用户界面的js库
能够通过组建化的方式构建快速响应的大型web应用程序

### 虚拟dom
优点：
处理了浏览器差异性，避免用户操作真实的dom
内容经过xss处理，防范xss攻击
容易跨平台
实现差异更新，减少dom操作
缺点： 
首次更新并不会快
占用内存

### 函数组建和类组建
怎么区分的： Component.prototype.isreactComponent = {}
不同：    
函数组建是函数式编程思想， 类组建需要创建实例，面向对象思想
类组建创建实例并保存，需要占用内存，函数组建不需要创建实例
函数组建方便书写单元测试
函数组建具有值捕获特性   使用定时器三秒后打印值  还是三妙前的数值，而类组建由于共享一个实例，打印的值是三妙后的新值
生命周期
跳过更新的方式不同 purecomponent  react.memo
类组建编译出来的代码多很多

### purecomponent
里面重写了shouldcomponentUpdate 
浅比较了oldstate  newstate   oldprops newprops 如果相同 就返回false 不更新组建

