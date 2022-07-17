import {BinaryNode, BinaryTree} from "./binaryTree";

let tree=new BinaryTree('A(B)#');

function nodeNumber(node:BinaryNode):number{
    if(!node){
        return 0;
    }
    let layerL=tree.getLevel(node.left as BinaryNode);
    let layerR=tree.getLevel(node.right as BinaryNode);

    if(layerL==layerR){
        let countR=nodeNumber(node.right as BinaryNode)+1;
        let countL=layerL?Math.pow(2,layerL)-1:0;
        return countL+countR;
    }

    if(Math.abs(layerL-layerR)==1){
        let countL=nodeNumber(node.left as BinaryNode)+1;
        let countR=layerR?Math.pow(2,layerR)-1:0;

        return countL+countR;
    }

    return 0;
}

let root=tree.root as BinaryNode;

console.log(nodeNumber(root));