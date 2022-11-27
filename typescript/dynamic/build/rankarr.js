function printStr(str, k) {
    if (k == str.length) {
        let chars = '';
        for (let i = 0; i < str.length; i++) {
            chars += str[i];
        }
        console.log(chars);
    }
    for (let i = k; i < str.length; i++) {
        let t = str[k];
        str[k] = str[i];
        str[i] = t;
        printStr(str, k + 1);
        t = str[k];
        str[k] = str[i];
        str[i] = t;
    }
}
function rankArr(str, cur, res) {
    if (res.length == str.length) {
        console.log(res);
        return;
    }
    let temp = '';
    let origin = cur.concat([]);
    for (let i = 0; i < cur.length; i++) {
        temp = cur[i];
        if (cur[i] !== cur[cur.length - 1]) {
            cur[i] = cur[cur.length - 1];
            cur[cur.length - 1] = temp;
        }
        let tempArr = cur.concat([]);
        tempArr.length--;
        rankArr(str, tempArr, res + temp);
        cur = origin.concat([]);
    }
}
let test = 'abcd';
// printStr(test.split(''),0);
let arr = test.split('');
rankArr(arr, arr.concat([]), '');
