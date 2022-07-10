import Sort from "./Sort";


class QuickSort extends Sort{
    constructor(arr?:Array<number>){
        super(arr);
    }

    sort():Array<any>{
        let arr=this.quickSort(0,this.arr.length-1);
        return arr;
    }

    partation(l:number,r:number):number{
        let pivot=l;
        let index=pivot+1;
        
        for(let i=index;i<=r;i++){
            if(this.arr[i]<this.arr[pivot]){
                this.swap(i,index);
                index++;
            }
        }

        this.swap(pivot,index-1);
        return index-1;
    }

    quickSort(left:number,right:number):Array<any>{
        var len = this.arr.length,
            partitionIndex,
            left = typeof left != 'number' ? 0 : left,
            right = typeof right != 'number' ? len - 1 : right;

        if (left < right) {
            partitionIndex = this.partation( left, right);
            this.quickSort( left, partitionIndex-1);
            this.quickSort(partitionIndex+1, right);
        }

        return this.arr;
    }
}

export default QuickSort;