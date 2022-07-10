import Sort from "./index";

/**
 * 随机快排的额外空间复杂度为O(logN);
 */

class QuickSort extends Sort{
    constructor(arr:Array<number>){
        super(arr);
    }

    sort():Array<number>{
        let arr=this.arr;

        
        return arr;
    }

    private quickSort(l:number,r:number){
        if(l==r){
            return;
        }
        
        if(this.arr[l]>this.arr[r]){
            this.swap(l,r);
        }
    }
}