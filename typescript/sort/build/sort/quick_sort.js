"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
class QuickSort extends Sort_1.default {
    constructor(arr) {
        super(arr);
    }
    sort() {
        let arr = this.quickSort(0, this.arr.length - 1);
        return arr;
    }
    partation(l, r) {
        let pivot = l;
        let index = pivot + 1;
        for (let i = index; i <= r; i++) {
            if (this.arr[i] < this.arr[pivot]) {
                this.swap(i, index);
                index++;
            }
        }
        this.swap(pivot, index - 1);
        return index - 1;
    }
    quickSort(left, right) {
        var len = this.arr.length, partitionIndex, left = typeof left != 'number' ? 0 : left, right = typeof right != 'number' ? len - 1 : right;
        if (left < right) {
            partitionIndex = this.partation(left, right);
            this.quickSort(left, partitionIndex - 1);
            this.quickSort(partitionIndex + 1, right);
        }
        return this.arr;
    }
}
exports.default = QuickSort;
