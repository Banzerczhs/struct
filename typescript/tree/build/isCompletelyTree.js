"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTree_1 = require("./binaryTree");
let tree = new binaryTree_1.BinaryTree('A(B(D(K,O),F(Y)),J(H,I))#');
function isCompletelyTree(root) {
    if (!root) {
        return false;
    }
    let flag = false;
    let queue = [root];
    let result = true;
    while (queue.length) {
        let node = queue.shift();
        if (flag && (node.left || node.right)) {
            result = false;
            break;
        }
        if (!node.left && node.right) {
            result = false;
            break;
        }
        else if ((node.left && !node.right) || (!node.left && !node.right)) {
            flag = true;
        }
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}
let root = tree.root;
console.log(isCompletelyTree(root));
