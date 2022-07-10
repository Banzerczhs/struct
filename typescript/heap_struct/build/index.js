"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaxHeap_1 = require("./MaxHeap");
let maxHeap = new MaxHeap_1.default([0]);
maxHeap.heapInstert(7);
console.log(maxHeap.heapData);
