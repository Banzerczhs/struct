"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heap_1 = require("./heap");
class MinHeap extends heap_1.default {
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
            if (_that.heapData[current] < _that.heapData[parentIndex]) {
                _that.swap(current, parentIndex);
            }
        });
    }
    comparable(first, second) {
        return super.comparable(first, second);
    }
}
exports.default = MinHeap;
