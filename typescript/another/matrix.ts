//矩阵算法之宏观调度问题

class Matrix{
    matrix:Array<Array<any>>;
    col:number;
    row:number;
    constructor(matrix:Array<Array<any>>){
        this.matrix=matrix;
        this.col=matrix[0].length;
        this.row=matrix.length;
    }

    circleMatrix(){
        let _this=this;
        function run(a:number,b:number,c:number,d:number){
            let origina=a,originb=b;
            while(a<c){
                console.log(_this.matrix[b][a++]);
            }
            while(b<d){
                console.log(_this.matrix[b++][a]);
            }
            a=origina,b=originb;
            while(c>a){
                console.log(_this.matrix[d][c--]);
            }
            while(d>b){
                console.log(_this.matrix[d--][c]);
            }
        }

        let beginCol=0,beginRow=0;
        let endCol=this.col-1,endRow=this.row-1;

        while(beginCol<=endCol){
            run(beginCol,beginRow,endCol,endRow);
            beginCol++;
            beginRow++;
            endCol--;
            endRow--;
        }
    }

    rotateMatrix(){
        let _this=this;
        function run(a:number,b:number,c:number,d:number){
            let origina=a,originb=b,originc=c,origind=d;
            while(c>origina||d>originb){
                let temp=_this.matrix[origina][b];
                _this.matrix[origina][b++]=_this.matrix[c][originb];
                _this.matrix[c--][originb]=_this.matrix[originc][d];
                _this.matrix[originc][d--]=_this.matrix[a][origind];
                _this.matrix[a++][origind]=temp;
            }
        }

        let beginCol=0,beginRow=0;
        let endCol=this.col-1,endRow=this.row-1;
        
        while(beginCol<=endCol){
            run(beginCol,beginRow,endCol,endRow);
            beginCol++;
            beginRow++;
            endCol--;
            endRow--;
        }
    }

    zTypeMatrix(){
        let _this=this;
        function run(a:number,b:number,c:number,d:number,state:boolean){
            if(state){
                while(a<=c){
                    console.log(_this.matrix[a++][b--]);
                }
            }else{
                while(c>=a){
                    console.log(_this.matrix[c--][d++]);
                }
            }
        }


        let nc=0,nr=0,tc=0,tr=0,state=true;
        let endCol=this.col-1,endRow=this.row-1;
        while(tc<=endCol){
            run(nr,nc,tr,tc,state);
            nr=nc>=endCol?++nr:nr;
            nc=nc>=endCol?nc:++nc;
            tc=tr>=endRow?++tc:tc;
            tr=tr>=endRow?tr:++tr;
            state=!state;
        }
    }

    findNumber(num:number):boolean{
        let isExist=false;
        
        let beginRow=0;
        let i=0;
        while(!isExist&&beginRow<=this.row-1){
            if(this.matrix[0][0]>num){
                break;
            }

            if(this.matrix[beginRow][i]<num&&i<this.col-1){
                i++;
            }else if(this.matrix[beginRow][i]!=num){
                if(i!=0&&this.matrix[beginRow][--i]>num){
                    break;
                }else if(this.matrix[beginRow][i]<num){
                    beginRow++;
                }
            }else{
                isExist=true;
            }
        }
        return isExist;
    }
}

// let matrix1=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12]
// ];

// let circleMatrix=new Matrix(matrix1);
//转圈打印矩阵
// circleMatrix.circleMatrix();

let matrix2=[
    [1,2,3],
    [5,6,7],
    [9,10,11],
    [13,14,15]
]
// let rotateMatrix=new Matrix(matrix2);
//旋转矩阵
// rotateMatrix.rotateMatrix();

// console.log(rotateMatrix.matrix);

//之字打印矩阵
// rotateMatrix.zTypeMatrix();

let matrix3=[
    [0,1,2,5],
    [2,3,4,7],
    [4,4,4,8],
    [5,7,7,9]
]

//矩阵中找指定值
let matrix=new Matrix(matrix3);

console.log(matrix.findNumber(6));




