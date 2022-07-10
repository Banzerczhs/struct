"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaxHeap_1 = require("./MaxHeap");
const HeapSort_1 = require("./HeapSort");
let maxHeap = new MaxHeap_1.default([0]);
maxHeap.heapInstert(7);
console.log(maxHeap.heapData);
let heap_sort = new HeapSort_1.default([5, 4, 8, 2, 1, 7]);
console.log(heap_sort.sort());
