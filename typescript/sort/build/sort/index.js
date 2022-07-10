"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkData_1 = require("../tools/checkData");
const bucket_1 = require("./bucket");
// let sort = new Bubble([
//     34, 68, 76, 97, 44, 39, 56, 67, 27, 7, 89, 55
// ]);
let sort_fun = new bucket_1.default();
let check = new checkData_1.default();
console.log(check.check(sort_fun.run.bind(sort_fun)));
