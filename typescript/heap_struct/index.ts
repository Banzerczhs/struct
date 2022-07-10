import MaxHeap from "./MaxHeap";
import HeapSort from "./HeapSort";

let maxHeap=new MaxHeap([0]);

maxHeap.heapInstert(7);

console.log(maxHeap.heapData);

let heap_sort=new HeapSort([5,4,8,2,1,7]);

console.log(heap_sort.sort());