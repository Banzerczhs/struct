"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./Sort");
class Bubble extends Sort_1.default {
    constructor(arr) {
        super(arr);
    }
    sort() {
        let arr = this.arr;
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[i]) {
                    this.swap(j, i);
                }
            }
        }
        return arr;
    }
}
exports.default = Bubble;
