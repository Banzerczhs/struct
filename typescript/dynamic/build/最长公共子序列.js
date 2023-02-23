//暴力递归版本
function commonSequence(aIndex, bIndex, a, b) {
    let result = '';
    if (aIndex == a.length || bIndex == b.length) {
        return '';
    }
    if (a[aIndex] == b[bIndex]) {
        result += a[aIndex];
        result += commonSequence(aIndex + 1, bIndex + 1, a, b);
        return result;
    }
    else {
        let a_common = commonSequence(aIndex + 1, bIndex, a, b);
        let b_common = commonSequence(aIndex, bIndex + 1, a, b);
        result += (a_common.length > b_common.length ? a_common : b_common);
        return result;
    }
}
function lcs(a, b) {
    let a_str = '', b_str = '';
    if (a.length > b.length) {
        a_str = a;
        b_str = b;
    }
    else {
        a_str = b;
        b_str = a;
    }
    let len = new Array(b_str.length + 1);
    for (let i = 0; i < b_str.length + 1; i++) {
        len[i] = new Array(a_str.length + 1).fill('');
    }
    len[b_str.length][a_str.length] = '';
    for (let i = 0; i < a_str.length; i++) {
        len[b_str.length][i] = '';
    }
    for (let i = 0; i < b_str.length; i++) {
        len[i][a_str.length] = '';
    }
    for (let i = b_str.length - 1; i >= 0; i--) {
        for (let j = a_str.length - 1; j >= 0; j--) {
            if (a_str[j] == b_str[i]) {
                len[i][j] += (a_str[j] + len[i + 1][j + 1]);
            }
            else if (len[i][j + 1].length > len[i + 1][j].length) {
                len[i][j] = len[i][j + 1];
            }
            else {
                len[i][j] = len[i + 1][j];
            }
        }
    }
    return len[0][0];
}
// let res=commonSequence(0,0,'javascript','pjsp');
let res = lcs('bdcaba', 'abcbdab');
console.log(res);
// 结果为3 
// result=result.filter(item=>item);
