import { BinaryTree,BinaryNode } from "./binaryTree";

function isBstTree(head:BinaryNode): boolean {
    let root = head;
    let curNode = root;
    let stack: Array<BinaryNode> = [curNode];
    let flag = 1;
    let result=true;
    let prevLeaf=null;
    let prevRoot=null;
    while (stack.length) {
        if (curNode.left && flag == 1) {
            stack.push(curNode);
            curNode = curNode.left;
        } else if (curNode.right && flag == 2) {
            flag = 1;
            if(prevRoot&&prevRoot.value>=curNode.value){
                result=false;
                break;
            }
            prevRoot=curNode;
            curNode = curNode.right;
        } else {
            flag = 2;
            if(prevLeaf&&prevLeaf.value>=curNode.value){
                result=false;
                break;
            }
            prevLeaf=curNode;
            curNode = stack.pop() as BinaryNode;
        }
    }

    return result;
}


let tree=new BinaryTree('6(3(2(1,),4),12(10(8,11),13))#');

console.log(isBstTree(tree.root as BinaryNode));