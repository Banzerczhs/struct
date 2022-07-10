"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaxHeap_1 = require("./MaxHeap");
class HeapSort {
    constructor(arr) {
        this.arr = arr;
        this.maxHeap = new MaxHeap_1.default(arr);
    }
    sort() {
        let heapSize = this.maxHeap.heapSize;
        while (heapSize > 0) {
            this.maxHeap.swap(0, heapSize - 1);
            heapSize = --this.maxHeap.heapSize;
            this.maxHeap.heapFly();
        }
        return this.maxHeap.heapData;
    }
}
exports.default = HeapSort;
