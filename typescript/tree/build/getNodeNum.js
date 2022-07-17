"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTree_1 = require("./binaryTree");
let tree = new binaryTree_1.BinaryTree('A(B)#');
function nodeNumber(node) {
    if (!node) {
        return 0;
    }
    let layerL = tree.getLevel(node.left);
    let layerR = tree.getLevel(node.right);
    if (layerL == layerR) {
        let countR = nodeNumber(node.right) + 1;
        let countL = layerL ? Math.pow(2, layerL) - 1 : 0;
        return countL + countR;
    }
    if (Math.abs(layerL - layerR) == 1) {
        let countL = nodeNumber(node.left) + 1;
        let countR = layerR ? Math.pow(2, layerR) - 1 : 0;
        return countL + countR;
    }
    return 0;
}
let root = tree.root;
console.log(nodeNumber(root));
