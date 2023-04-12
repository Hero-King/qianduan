// url: https://github.com/battlefield007/Programmer-code-interview-guide_bookCode/blob/master/src/main/java/chapter_1_stackandqueue/Problem_01_GetMinStack.java

/*
	 栈和队列岛设计一个有 getMin 功能的栈
	 【 题目 】 实现一个特殊的栈，在实现栈的墓本功能的基础上．再实现返回栈中最小元素的操作。
	 【 要求 】 1 . pop 、 push 、 getMin 操作的时间复杂度都是伏 l ) .
	 2 ．设计的栈类型可以使用现成的栈结构。
	 【 难度 】 ★ ☆ ☆ ☆
	 【 当前学习程度 】 理解了思想(
	 两个栈(jdk自带的Stack  API)，
	 一个存数据，
	 一个存最小值。
	 每次更新数据栈，同时更新最小值栈。
	 保证最小值栈顶元素始终是 所有数据最小值。
	 )。
*/

class MyStack1 {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(item) {
    this.stack.push(item);
    const { min } = this;
    if (min.length > 0) {
      let preMin = min[min.length - 1];
      min.push(Math.min(preMin, item));
    } else {
      min.push(item);
    }
  }

  pop() {
    this.min.pop();
    return this.stack.pop();
  }

  getmin() {
    const {
      min: { length },
      min,
    } = this;
    return length > 0 ? min[length - 1] : null;
  }
}

let stack1 = new MyStack1();
stack1.push(3);
console.log(stack1.getmin());
stack1.push(4);
console.log(stack1.getmin());
stack1.push(1);
console.log(stack1.getmin());
console.log(stack1.pop());
console.log(stack1.getmin());
console.log(stack1.pop());
console.log(stack1.getmin());
console.log(stack1.pop());
console.log(stack1.getmin());
