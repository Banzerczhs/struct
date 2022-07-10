import {BinaryNode, BinaryTree} from "./binaryTree";

type resultData={
    isBalance : boolean;
    iH : number
}

function isBalanceTree(head:BinaryNode|null):resultData{
    if(!head){
        return {isBalance : true,iH : 0};
    }

    let left=isBalanceTree(head.left);
    if(!left.isBalance){
        return {isBalance : false,iH : 0};
    }

    let right=isBalanceTree(head.right);
    if(!right.isBalance){
        return {isBalance : false,iH : 0};
    }

    if(Math.abs(left.iH-right.iH)>1){
        return {isBalance : false,iH : 0};
    }

    return {isBalance : true,iH : Math.max(left.iH,right.iH)+1};
}


let tree=new BinaryTree('A(B(D,F),J(H(K,L),I))#');
let root=tree.root;

console.log(isBalanceTree(root).isBalance);




