class Node {
  _left = null;
  _right = null;

  constructor(val) {
    this._val = val;

  }

  get val() {
    return this._val;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  setLeft(node) {
    this._left = node;
  }

  setRight(node) {
    this._right = node;
  }
}

class Queue {
  _list = [];

  enqueue(val) {
    this._list.push(val);
  }

  dequeue() {
    const [x, ...rest] = this._list;
    this._list = rest;

    return x;
  }

  peek() {
    return this._list[0];
  }

  isEmpty() {
    return this._list.length === 0;
  }
}

class Stack {
  _list = [];

  push(val) {
    this._list.push(val);
  }

  pop() {
    return this._list.pop()
  }

  peek() {
    return this._list[this._list.length-1];
  }

  isEmpty() {
    return this._list.length === 0;
  }
}

class Tree {
  constructor(head) {
    this._head = new Node(head);
  }

  addLeaf(val) {
    let current = this._head;

    while(true) {
      if (current.val < val) {
        if (current.right) {
          current = current.right;
        } else {
          current.setRight(new Node(val));
          return;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.setLeft(new Node(val));
          return;
        }
      }
    }
  }

  readBFS() {
    let visitedQueue = new Queue();

    visitedQueue.enqueue(this._head);

    while(!visitedQueue.isEmpty()) {
      let current = visitedQueue.dequeue();

      console.log({ current: current.val });

      if (current.left) {
        visitedQueue.enqueue(current.left)
      }

      if (current.right) {
        visitedQueue.enqueue(current.right)
      }
    }


  }

  readDFS() {
    let visitedStack = new Stack();

    visitedStack.push(this._head);

    while(!visitedStack.isEmpty()) {
      
    }
  }
}

const myTree = new Tree(6);
myTree.addLeaf(8);
myTree.addLeaf(2);
myTree.addLeaf(9);
myTree.addLeaf(1);
myTree.addLeaf(10);
myTree.addLeaf(3);
myTree.addLeaf(4);
myTree.addLeaf(7);
myTree.readBFS();