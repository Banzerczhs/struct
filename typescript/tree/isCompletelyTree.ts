import {BinaryNode, BinaryTree} from "./binaryTree";

let tree=new BinaryTree('A(B(D(K,O),F(Y)),J(H,I))#');

function isCompletelyTree(root:BinaryNode):boolean{
    if(!root){
        return false;
    }
    let flag=false;
    let queue=[root];
    let result=true;
    while(queue.length){
        let node=queue.shift() as BinaryNode;
        if(flag&&(node.left||node.right)){
            result=false;
            break;
        }

        if(!node.left&&node.right){
            result=false;
            break;
        }else if((node.left&&!node.right)||(!node.left&&!node.right)){
            flag=true;
        }

        node.left&&queue.push(node.left);
        node.right&&queue.push(node.right);
    }

    return result;
}

let root=tree.root as BinaryNode;
console.log(isCompletelyTree(root));