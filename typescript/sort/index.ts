import RandomQuick from "./random_quick";
import CheckData from "../tools/checkData";
import QuickSort from "./quick_sort";
import Bubble from "./bubble";
import Bucket from "./bucket";

// let sort = new Bubble([
//     34, 68, 76, 97, 44, 39, 56, 67, 27, 7, 89, 55
// ]);

let sort_fun=new Bucket();

let check = new CheckData();

console.log(check.check(sort_fun.run.bind(sort_fun)));