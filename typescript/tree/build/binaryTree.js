"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.BinaryNode = void 0;
const treeNode_1 = require("./treeNode");
class BinaryNode extends treeNode_1.default {
    constructor(val) {
        super(val);
    }
}
exports.BinaryNode = BinaryNode;
class BinaryTree {
    constructor(str) {
        this.serializeStr = str;
        this.root = this.initTree();
    }
    initTree() {
        let stack = [];
        let flag = 0;
        let curNode = null;
        let len = this.serializeStr.length;
        let root = null;
        for (let i = 0; i < len; i++) {
            let { val, index } = this.getItem(i);
            let item = val;
            i = i < index ? index - 1 : i;
            if (item == "#") {
                break;
            }
            if (item == "(") {
                stack.push(curNode);
                flag = 1;
            }
            else if (item == ",") {
                flag = 2;
            }
            else if (item == ")") {
                stack.pop();
            }
            else {
                curNode = new BinaryNode(item);
                let parentNode = stack[stack.length - 1];
                curNode.parent = parentNode || null;
                if (!root) {
                    root = curNode;
                }
                else if (flag == 1) {
                    parentNode.left = curNode;
                }
                else if (flag == 2) {
                    parentNode.right = curNode;
                }
            }
        }
        return root;
    }
    getItem(index) {
        let char = '';
        let reg = new RegExp('[\(\)\,\#]');
        let curStr = this.serializeStr[index];
        while (!reg.test(curStr)) {
            char += curStr;
            curStr = this.serializeStr[++index];
        }
        if (!char) {
            char = curStr;
        }
        char = (isNaN(+char) ? char : +char);
        return { val: char, index: index };
    }
    preOrderTree(node) {
        let root = node;
        let curNode = root;
        let stack = [curNode];
        let flag = 1;
        while (stack.length) {
            if (curNode.left && flag == 1) {
                stack.push(curNode);
                console.log(curNode.value);
                curNode = curNode.left;
            }
            else if (curNode.right && flag == 2) {
                flag = 1;
                curNode = curNode.right;
            }
            else {
                flag = 2;
                console.log(curNode.value);
                curNode = stack.pop();
            }
        }
    }
    inOrderTree(node) {
        let root = node;
        let curNode = root;
        let stack = [curNode];
        let flag = 1;
        while (stack.length) {
            if (curNode.left && flag == 1) {
                stack.push(curNode);
                curNode = curNode.left;
            }
            else if (curNode.right && flag == 2) {
                flag = 1;
                console.log(curNode.value);
                curNode = curNode.right;
            }
            else {
                flag = 2;
                console.log(curNode.value);
                curNode = stack.pop();
            }
        }
    }
    afterOrderTree(node) {
        let root = node;
        let curNode = root;
        let stack = [];
        while (true) {
            if (curNode.left) {
                stack.push(curNode);
                curNode = curNode.left;
            }
            else if (curNode.right) {
                curNode = curNode.right;
            }
            else {
                console.log(curNode.value);
                curNode = stack[stack.length - 1];
                if (curNode.left) {
                    curNode.left = null;
                }
                else if (curNode.right) {
                    curNode = stack.pop();
                    curNode.right = null;
                }
            }
            if (!stack.length) {
                console.log(curNode.value);
                break;
            }
        }
    }
    successOrNode(node) {
        if (!node) {
            return null;
        }
        if (node.right) {
            let result = node.right;
            while (result.left) {
                result = result.left;
            }
            return result;
        }
        else {
            let parent = node.parent;
            while (parent !== null && parent.left !== node) {
                node = parent;
                parent = node.parent;
            }
            return parent;
        }
    }
    getLevel(node) {
        let level = 0;
        while (node) {
            level++;
            node = node.left;
        }
        return level;
    }
}
exports.BinaryTree = BinaryTree;
// let tree=new BinaryTree('A(B(D,F),J(H(K,L),I))#');
// let root=tree.initTree();
// console.log(root);
// // tree.preOrderTree(root);
// tree.inOrderTree(root);
// console.log(tree.successOrNode(root.right.left.right));
// tree.afterOrderTree(root);
