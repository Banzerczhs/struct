//打印字符串子序列
function strSequence(arr, i, w) {
    if (i == arr.length) {
        console.log(w);
    }
    else {
        strSequence(arr, i + 1, w += ' ');
        strSequence(arr, i + 1, w += arr[i]);
    }
}
strSequence('abcd', 0, '');
