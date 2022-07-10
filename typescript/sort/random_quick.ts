import QuickSort from "./quick_sort";

/**
 * 随机快排的额外空间复杂度为O(logN);
 */

class RandomQuick extends QuickSort{
    constructor(arr?:Array<any>){
        super(arr);
    }

    partationa(left:number,right:number):Array<number>{
        let pivot = Math.round(Math.random() * (right - left) + left);
        this.swap(pivot,right);
        let cur=left;
        let less=left;
        let more=right;
        while(cur<more){
            if(this.arr[cur]<this.arr[right]){
                this.swap(cur++,less++);
            }else if(this.arr[cur]>this.arr[right]){
                this.swap(cur,--more);
            }else{
                cur++;
            }
        }
        return [less-1,more];
    }

    quickSort(left:number,right:number):Array<any>{
        if(left<right){
            let partationIndex=this.partationa(left,right);
            this.quickSort(left,partationIndex[0]);
            this.quickSort(partationIndex[1],right);
        }

        return this.arr;
    }
}


export default RandomQuick;
