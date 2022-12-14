// diff 的作用是计算两颗虚拟dom数的差异， 得到patch对象  在使用patch方法更新到真实的dom数上
// dom-diff 看这个  不要看diff.js  这是就版本的源码,16以后使用了fiber 解决性能问题
// 不写了  直接看这个https://blog.csdn.net/qq_36380426/article/details/104832238
// 用的深度优先遍历  全局index
import Reac, { createElement } from "react";
const vnode1 = Reac.createElement("ul", { className: list }, [
  createElement(" li", { className: "item" }, ["a"]),
  createElement(" li", { className: "item" }, ["b"]),
  createElement(" li", { className: "item" }, ["c"]),
]);

const vnode2 = Reac.createElement("ul", { className: list }, [
  createElement(" li", { className: "item" }, ["a"]),
  createElement(" li", { className: "item" }, ["b"]),
  createElement(" li", { className: "item" }, ["3"]),
]);

const patch = diff(vnode1, vnode2);

function diff(oldTree, newTree) {
  let ptaches = {};

  let index = 0;
  // 递归树 比较后的结果放到补丁里
  walk(oldTree, newTree, index, patches);

  return ptaches;
}

function walk(oldNode, newNode, index, patches) {
  if (oldNode.type == newNode.type) {
    diffAttr(oldNode.props, newNode.props);
  }
}

function isString(obj) {
  return typeof obj === "string";
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  // 判断老的属性中和新的属性的关系
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key]; // 有可能还是undefined
    }
  }

  for (let key in newAttrs) {
    // 老节点没有新节点的属性
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}
