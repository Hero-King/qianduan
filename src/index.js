import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let divdom = document.createElement("div");
divdom.onclick = function (e) {
  console.log("dom create div click");
};
divdom.innerText = "i am dom create div";
document.body.appendChild(divdom);

ReactDOM.render(<App />, document.getElementById("root"));

let rootElement = React.createElement(
  "div",
  { title: "iam title" },
  <div>i am children</div>
);
// console.log("react.createElemetn" , rootElement)
/**
 * {
 * $$typeof: Symbol(react.element)
key: null
props: {title: "iam title", children: {…}}
ref: null
type: "div"
_owner: null
_store: {validated: false}
_self: null
_source: null}
 */

// console.log(<div>jsx</div>)
/**
 * {
 * $$typeof: Symbol(react.element)
key: null
props: {children: "jsx"}
ref: null
type: "div"
_owner: null
_store: {validated: false}
_self: null  }
 */
ReactDOM.render(rootElement, document.getElementById("myrendertest"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
