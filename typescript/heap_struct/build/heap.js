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
    heapTop() {
        return this.heapData[0];
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
    heapShift() {
        this.swap(0, this.heapData.length - 1);
        let res = this.heapData.pop();
        this.heapSize--;
        this.heapFly();
        return res;
    }
    heapFly(index) {
        index = index ? index : 0;
        let left = (index << 1) + 1, right = 0;
        let size = this.heapSize;
        while (left < size) {
            right = left + 1;
            let comIndex = right < size ? this.comparable(left, right) : left;
            let parent = (comIndex - 1) >> 1;
            if (this.comparable(comIndex, parent) == comIndex) {
                this.swap(comIndex, parent);
            }
            left = (left << 1) + 1;
        }
    }
    comparable(first, second) {
        let heapData = this.heapData;
        if (heapData[first] < heapData[second]) {
            return first;
        }
        else {
            return second;
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
