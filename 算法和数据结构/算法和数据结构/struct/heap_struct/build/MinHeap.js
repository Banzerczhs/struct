"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
class MinHeap extends heap_1.default {
    constructor(arr) {
        super(arr);
        this.init();
    }
    init() {
        super.init(this.heapInstert.bind(this));
    }
    heapInstert(value) {
        let _that = this;
        super.heapInstert(value, function (current, parentIndex) {
            if (_that.heapData[current] < _that.heapData[parentIndex]) {
                _that.swap(current, parentIndex);
            }
        });
    }
    heapFly(index) {
        let left = (index << 1) + 1, right = 0;
        let size = this.heapSize;
        while (left < size) {
            right = left + 1;
            let minIndex = right < size ? this.min(left, right) : left;
            let parent = (minIndex - 1) >> 1;
            if (this.min(minIndex, parent) == minIndex) {
                this.swap(minIndex, parent);
            }
            left = (left << 1) + 1;
        }
    }
    min(first, second) {
        let heapData = this.heapData;
        if (heapData[first] < heapData[second]) {
            return first;
        }
        else {
            return second;
        }
    }
}
exports.default = MinHeap;
