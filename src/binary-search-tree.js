const { NotImplementedError } = require('../extensions/index.js');

// const { nod } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using nod from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const add = new Node(data);
    if (this.rootNode == null) {
      this.rootNode = add;
    } else {
      this.insertNode(this.rootNode, add);
    }
  }

  insertNode(nod, add) {
    if (add.data < nod.data) {

      if (nod.left == null) {

        nod.left = add;
      } else {

        this.insertNode(nod.left, add);
      }
    } else {
      if (nod.right == null) {

        nod.right = add;
      } else {

        this.insertNode(nod.right, add);

      }
    }
  }

  has(data) {
    return this.searchNode(this.rootNode, data) != null;
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  searchNode(nod, data) {
    if (nod == null) {
      return null;

    } else if (data > nod.data) {

      return this.searchNode(nod.right, data);

    } else if (data < nod.data) {

      return this.searchNode(nod.left, data);

    } else {
      return nod;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(nod, key) {
    if (nod == null) {
      return null;
    } else if (key > nod.data) {
      nod.right = this.removeNode(nod.right, key);
      return nod;
    } else if (key < nod.data) {
      nod.left = this.removeNode(nod.left, key);
      return nod;
    } else {

      if (nod.left == null) {
        nod = nod.right;
        return nod;
      } else if (nod.right == null) {
        nod = nod.left;
        return nod;
      }
      if (nod.left == null && nod.right == null) {
        nod = null;
        return nod;
      }
      const dop = this.findMinNode(nod.right);
      nod.data = dop.data;
      nod.right = this.removeNode(nod.right, dop.data);
      return nod;
    }
  }

  findMinNode(nod) {
    if (nod.left == null) {
      return nod;
    } else {
      return this.findMinNode(nod.left);
    }
  }

  min() {
    if (this.rootNode == null) {
      return null;
    }

    let thisNode = this.rootNode;

    while (thisNode.left != null) {
      thisNode = thisNode.left;
    }
    return thisNode.data;
  }

  max() {

    if (this.rootNode == null) {
      return null;
    }

    let thisNode = this.rootNode;

    while (thisNode.right != null) {
      thisNode = thisNode.right;
    }

    return thisNode.data;
  }
}

module.exports = {
  BinarySearchTree
};