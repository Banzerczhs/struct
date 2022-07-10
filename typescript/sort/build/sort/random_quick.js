"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quick_sort_1 = require("./quick_sort");
/**
 * 随机快排的额外空间复杂度为O(logN);
 */
class RandomQuick extends quick_sort_1.default {
    constructor(arr) {
        super(arr);
    }
    partationa(left, right) {
        let pivot = Math.round(Math.random() * (right - left) + left);
        this.swap(pivot, right);
        let cur = left;
        let less = left;
        let more = right;
        while (cur < more) {
            if (this.arr[cur] < this.arr[right]) {
                this.swap(cur++, less++);
            }
            else if (this.arr[cur] > this.arr[right]) {
                this.swap(cur, --more);
            }
            else {
                cur++;
            }
        }
        return [less - 1, more];
    }
    quickSort(left, right) {
        if (left < right) {
            let partationIndex = this.partationa(left, right);
            this.quickSort(left, partationIndex[0]);
            this.quickSort(partationIndex[1], right);
        }
        return this.arr;
    }
}
exports.default = RandomQuick;
