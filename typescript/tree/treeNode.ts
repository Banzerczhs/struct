class TreeNode{
    public left:TreeNode | null;
    public right:TreeNode | null;
    public value:number|string;
    constructor(val:number|string){
        this.value=val;
    }
}

export default TreeNode;