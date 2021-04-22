import React, { Component } from 'react'
import defa, { test, add, } from '../uitls'
import MyReact from '../myreact/React'
import { _render, render , MyComponent} from '../myreact/ReactDOM'
// jsx转成虚拟dom对象 使用的是React.createElement()方法
// let ele = MyReact.createElement("div",{title: "title"} , "content" )
// let ele = MyReact.createElement("div", { title: "title" }, "content，", MyReact.createElement("span", { className: "spanclass" }, "span") )
const ele2 = <Home title="home title"/>


class HomeClass extends MyComponent{
    constructor(props){
        super(props);
        this.state= {
            num : "0",
            title: "title"
        }
    }

    componentWillMount(){
        console.log("willMount");
    }

    componentDidMount(){
        console.log("didmount");
        setTimeout(() => {
            // _render(ele)
            this.setState({})
        }, 2000);
    }

    componentWillReceiveProps(){
        console.log( " componentWillReceiveProps");
    }

    componentWillUpdate(){
        console.log("will update");
    }

    componentDidUpdate() {
        console.log("did update");
    }

    handleClick(e){
        console.log(e);
        
    }

    render () {
        {
            console.log("render")
        }
        return <div title={this.state.title} className="myclass" onClick={this.handleClick.bind(this) }><span id="myspan">Home class</span></div>
    }
}

const ele = <HomeClass title="homeclass title" />
const yuans = <div title="divtitle" >divText  <span>spanText</span></div>
// const yuans = <div title="divtitle" >divText  </div>
let container = document.getElementById("myrender")
let firstRender = render( yuans ,container, null )
console.log(firstRender);
setTimeout(() => {
    
    // render(yuans, null , firstRender)
}, 1000);
// render( <Home title="home title"/>, document.getElementById("myrender"))
// render( ele , document.getElementById("myrender"))



function Home(props) {
    return <div><span>Home</span></div>
}

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // test();
        // defa();
        // add();
    }

    render() {
        return <div>111</div>
    }
}