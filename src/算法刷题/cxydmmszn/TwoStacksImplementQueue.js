/*
	 由两个栈组成的队列
	 【题目】
	 编写一个类，用两个栈实现队列，支持队列的基本操作（add、poll、peek）。
	 【难度】 ★★☆☆
	 【 当前学习程度 】 理解了思想(
	 两个栈(jdk自带的Stack  API)，
	 一个存添加的数据，
	 一个存取出的数据，
	 每次更新添加数据栈，同时更新取出数据栈。
	 保证取出数据栈 栈顶元素始终是 最先添加的那个元素。
	 )。
*/

class TwoStacksQueue {
  constructor() {
    this.stackPush = [];
    this.stackPop = [];
  }

  // 向队列中添加一个元素
  add(item) {
    this.stackPush.push(item);
  }

  //移除并返问队列头部的元素
  poll() {
    const { stackPop, stackPush } = this;
    if (stackPop.length === 0) {
      while (stackPush.length > 0) {
        stackPop.push(stackPush.pop());
      }
    }
    return stackPop.pop();
  }

  // 返回队列头部的元素
  peek() {
    const { stackPop, stackPush } = this;
    if (stackPop.length === 0) {
      while (stackPush.length > 0) {
        stackPop.push(stackPush.pop());
      }
    }
    return stackPop.length > 0 ? stackPop[stackPop.length - 1] : null;
  }
}

const test = new TwoStacksQueue();
test.add(1);
test.add(2);
test.add(3);
console.log(test.peek());
console.log(test.poll());
console.log(test.peek());
console.log(test.poll());
console.log(test.peek());
console.log(test.poll());
