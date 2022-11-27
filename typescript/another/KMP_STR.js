var KMP = /** @class */ (function () {
    function KMP(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }
    KMP.prototype.indexOf = function () {
        var index = -1;
        var len1 = this.str1.length, len2 = this.str2.length;
        var str1 = this.str1;
        var str2 = this.str2;
        if (len2 > len1) {
            return index;
        }
        var next = this.genNextArray(this.str2);
        var i1 = 0, i2 = 0;
        while (i1 < len1 && i2 < len2) {
            if (str1[i1] == str2[i2]) {
                i1++;
                i2++;
            }
            else if (next[i2] == -1) {
                i1++;
            }
            else {
                i2 = next[i2];
            }
        }
        index = i1 == len1 ? -1 : i1 - i2;
        return index;
    };
    KMP.prototype.genNextArray = function (ms) {
        var next = new Array(ms.length).fill(-1);
        next[0] = -1;
        next[1] = 0;
        var i = 2;
        var cn = next[i - 1];
        while (i < ms.length) {
            if (ms[i - 1] == ms[cn]) {
                next[i++] = ++cn;
            }
            else if (cn > 0) {
                cn = next[cn];
            }
            else {
                next[i++] = 0;
            }
        }
        return next;
    };
    return KMP;
}());
var str1 = 'aabcsaeopiwuyqxjkal'.split('');
var str2 = 'csaeopwwe'.split('');
var kmp = new KMP(str1, str2);
console.log(kmp.indexOf());
