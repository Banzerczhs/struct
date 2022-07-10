"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaxHeap_1 = require("../heap_struct/MaxHeap");
const MinHeap_1 = require("../heap_struct/MinHeap");
class MiddleNum {
    constructor(arr) {
        this.maxHeap = new MaxHeap_1.default([]);
        this.minHeap = new MinHeap_1.default([]);
        this.arr = arr;
    }
    dealProcess() {
        let cur = this.getNum();
        let minSize = this.minHeap.heapSize;
        let maxSize = this.maxHeap.heapSize;
        if (minSize == 0 && maxSize == 0) {
            this.minHeap.heapInstert(cur);
        }
        else {
            let different = Math.abs(maxSize - minSize);
            if (different > 1) {
                if (maxSize > minSize) {
                    this.minHeap.heapInstert(this.maxHeap.heapShift());
                }
                else {
                    this.maxHeap.heapInstert(this.minHeap.heapShift());
                }
            }
            let top = this.minHeap.heapTop();
            if (cur > top) {
                this.minHeap.heapInstert(cur);
            }
            else {
                this.maxHeap.heapInstert(cur);
            }
        }
    }
    getNum() {
        return this.arr.shift();
    }
    getMiddleNum() {
        let minTop = this.minHeap.heapTop() || 0;
        let maxTop = this.maxHeap.heapTop() || 0;
        if (maxTop && minTop) {
            return (maxTop + minTop) / 2;
        }
        else {
            return (minTop || maxTop);
        }
    }
}
let middle = new MiddleNum([
    34, 68, 76, 97, 44, 39, 56, 67, 27, 7, 89, 55
]);
setInterval(function () {
    middle.dealProcess();
    console.log(middle.getMiddleNum());
}, 1000);
