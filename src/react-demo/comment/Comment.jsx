import React, { Component } from 'react'
import defa, { test, add, } from '../uitls'
import MyReact from '../myreact/React'
import MyReactDOM from '../myreact/ReactDOM'
// let ele = MyReact.createElement("div",{title: "title"} , "content" )
let ele = MyReact.createElement("div", { title: "title" }, "content，", MyReact.createElement("span", { className: "spanclass" }, "span") )
const ele2 = <Home/>
console.log(ele2);
MyReactDOM.render( ele, document.getElementById("myrender"))


function Home(params) {
    return <div>home</div>
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