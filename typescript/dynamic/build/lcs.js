//暴力递归版本
function commonSequence(a, b) {
    let result = '';
    if (a.length == 0 || b.length == 0) {
        return result;
    }
    if (a[0] == b[0]) {
        result += a[0];
        result += commonSequence(a.slice(1), b.slice(1));
        return result;
    }
    else {
        let a_common = commonSequence(a.slice(1), b);
        let b_common = commonSequence(a, b.slice(1));
        result += (a_common.length > b_common.length ? a_common : b_common);
        return result;
    }
}
let res = commonSequence('abc', 'bjc');
console.log(res);
// 结果为3 
// result=result.filter(item=>item);
