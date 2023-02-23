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
let test = 'abcd';
printStr(test.split(''), 0);
