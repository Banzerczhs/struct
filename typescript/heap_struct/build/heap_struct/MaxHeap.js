"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
class MaxHeap extends heap_1.default {
    constructor(arr) {
        let data = arr.length ? arr : [];
        super(data);
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
    comparable(first, second) {
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
