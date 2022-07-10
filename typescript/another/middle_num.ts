import MaxHeap from "../heap_struct/MaxHeap";
import MinHeap from "../heap_struct/MinHeap";


class MiddleNum {
    private arr: Array<any>;
    private maxHeap: MaxHeap;
    private minHeap: MinHeap;
    constructor(arr) {
        this.maxHeap = new MaxHeap([]);
        this.minHeap = new MinHeap([]);
        this.arr = arr;
    }

    dealProcess() {
        let cur = this.getNum();
        let minSize = this.minHeap.heapSize;
        let maxSize = this.maxHeap.heapSize;
        if (minSize == 0 && maxSize == 0) {
            this.minHeap.heapInstert(cur);
        } else {
            let different = Math.abs(maxSize - minSize);
            if (different > 1) {
                if (maxSize > minSize) {
                    this.minHeap.heapInstert(this.maxHeap.heapShift());
                } else {
                    this.maxHeap.heapInstert(this.minHeap.heapShift());
                }
            }

            let top = this.minHeap.heapTop();
            if (cur > top) {
                this.minHeap.heapInstert(cur);
            } else {
                this.maxHeap.heapInstert(cur);
            }
        }
    }

    getNum(): number {
        return this.arr.shift();
    }

    getMiddleNum(): number {
        let minTop=this.minHeap.heapTop()||0;
        let maxTop=this.maxHeap.heapTop()||0;

        if(maxTop&&minTop){
            return ((maxTop as number)+(minTop as number))/2;
        }else{
            return (minTop||maxTop) as number;
        }
    }
}


let middle = new MiddleNum([
    34, 68, 76, 97, 44, 39, 56, 67, 27, 7, 89, 55
]);

setInterval(function(){
    middle.dealProcess();

    console.log(middle.getMiddleNum());
},1000);
