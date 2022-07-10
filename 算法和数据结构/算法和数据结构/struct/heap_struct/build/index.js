"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaxHeap_1 = require("./MaxHeap");
let maxHeap = new MaxHeap_1.default([5, 2, 3, 1, 6, 5, 4]);
maxHeap.heapFly(0);
console.log(maxHeap.heapData);
