"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bucket {
    constructor(arr) {
        this.arr = arr;
    }
    getMax() {
        let max = this.arr[0];
        for (let i = 0; i < this.arr.length; i++) {
            if (max < this.arr[i]) {
                max = this.arr[i];
            }
        }
        return max;
    }
    genBucket() {
        let max = this.getMax();
        let bucket = new Array(max + 1).fill(0);
        for (let i = 0; i < bucket.length; i++) {
            bucket[this.arr[i]]++;
        }
        return bucket;
    }
    run(arr) {
        if (arr.length) {
            this.arr = arr;
        }
        let data = [];
        let bucket = this.genBucket();
        for (let i = 0; i < bucket.length; i++) {
            while (bucket[i] > 0) {
                data.push(i);
                bucket[i]--;
            }
        }
        return data;
    }
}
exports.default = Bucket;
