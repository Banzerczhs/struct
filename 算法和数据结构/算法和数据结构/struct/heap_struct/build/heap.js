"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heap {
    constructor(arr) {
        this.heapData = [];
        this.refs = arr;
        this.heapSize = 0;
    }
    init(insert) {
        let heapData = this.refs;
        let index = 0;
        while (index < heapData.length) {
            let current = heapData[index++];
            insert(current);
        }
    }
    heapInstert(value, dealFn) {
        this.heapData.push(value);
        let parentIndex = 0;
        let current = this.heapSize++;
        while ((parentIndex = (current - 1) >> 1) >= 0) {
            dealFn(current, parentIndex);
            current = parentIndex;
        }
    }
    swap(firstIndex, secondIndex) {
        let temp = this.heapData[firstIndex];
        this.heapData[firstIndex] = this.heapData[secondIndex];
        this.heapData[secondIndex] = temp;
    }
    get heapData() {
        return this._heapData;
    }
    set heapData(data) {
        this._heapData = data;
    }
    get heapSize() {
        return this._heapSize;
    }
    set heapSize(size) {
        this._heapSize = size;
    }
}
exports.default = Heap;
