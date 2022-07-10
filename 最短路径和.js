class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

let arrGrid=[[1,3,1],[1,5,1],[4,2,1]];

const COLUMN=arrGrid[0].length;
const ROW=arrGrid.length;


/**
 * 
 * @param {*} grid 
 * @returns 
 */
function minPathsum(grid){
    //长注释
    let newArr=[[]]; //短注释
    
    newArr[0][0]=grid[0][0];
    for(let i=1;i<grid[0].length;i++){
        newArr[0][i]=newArr[0][i-1]+grid[0][i];
    }
    
    for(let i=1;i<grid.length;i++){
        newArr[i]=[];
        newArr[i][0]=newArr[i-1][0]+grid[i][0];
    }
    
    for(let i=1;i<grid.length;i++){
        for(let j=1;j<grid[i].length;j++){
            newArr[i][j]=Math.min(newArr[i-1][j],newArr[i][j-1])+grid[i][j];
        }
    }

    let row=grid.length-1;
    let col=grid[row].length-1;
    return newArr[row][col];
}

minPathsum(arrGrid);