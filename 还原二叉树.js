class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

let buildTree = function(preorder, inorder) {
    if(preorder.length==0){
        return null;
    }
    let node=new TreeNode(preorder[0]);
    let currentIndex=inorder.indexOf(preorder[0]);
    node.left=buildTree(preorder.slice(1,currentIndex+1),inorder.slice(0,currentIndex));
    node.right=buildTree(preorder.slice(currentIndex+1),inorder.slice(currentIndex+1));
    return node;
};


let first_list='GDAFEMHZ',inorder_list='ADEFGHMZ';
first_list=first_list.split('');
inorder_list=inorder_list.split('');
let node=buildTree(first_list,inorder_list);

function getLayer(node){
    if(!node){
        return 0;
    }
    return Math.max(getLayer(node.left)+1,getLayer(node.right)+1);
}

console.log(getLayer(node));