import Sort from "../sort/Sort";
import MaxHeap from "./MaxHeap";

class HeapSort{
    private maxHeap:MaxHeap
    private arr:Array<any>
    constructor(arr:Array<any>){
        this.arr=arr;
        this.maxHeap=new MaxHeap(arr);
    }

    sort():Array<any>{
        let heapSize=this.maxHeap.heapSize;
        
        while(heapSize>0){
            this.maxHeap.swap(0,heapSize-1);
            heapSize=--this.maxHeap.heapSize;
            this.maxHeap.heapFly();
        }

        return this.maxHeap.heapData;
    }
}

export default HeapSort;