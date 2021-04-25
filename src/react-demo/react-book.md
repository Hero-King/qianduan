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
