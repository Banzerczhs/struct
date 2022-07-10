"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sort {
    constructor(arr) {
        this.arr = [];
        this.arr = arr;
    }
    sort() {
        let arr = [].concat(this.arr);
        return arr.sort();
    }
    run(arr) {
        this.arr = arr;
        return this.sort();
    }
    swap(first, second) {
        let temp = this.arr[first];
        this.arr[first] = this.arr[second];
        this.arr[second] = temp;
    }
}
exports.default = Sort;
