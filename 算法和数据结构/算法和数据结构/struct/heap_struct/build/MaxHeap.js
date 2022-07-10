"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
class MaxHeap extends heap_1.default {
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
            if (_that.heapData[current] > _that.heapData[parentIndex]) {
                _that.swap(current, parentIndex);
            }
        });
    }
    heapFly(index) {
        let left = (index << 1) + 1, right = 0;
        let size = this.heapSize;
        while (left < size) {
            right = left + 1;
            let maxIndex = right < size ? this.max(left, right) : left;
            let parent = (maxIndex - 1) >> 1;
            if (this.max(maxIndex, parent) == maxIndex) {
                this.swap(maxIndex, parent);
            }
            left = (left << 1) + 1;
        }
    }
    max(first, second) {
        let heapData = this.heapData;
        if (heapData[first] > heapData[second]) {
            return first;
        }
        else {
            return second;
        }
    }
}
exports.default = MaxHeap;
