
//暴力递归版本
let result:Array<string>=[];

let temp=''
function S(a, b) {
    if (a.length === 0 || b.length === 0) {
        return "";
    };
    
    let ans='';
    if (a[a.length - 1] === b[b.length - 1]) {
        ans = a[a.length - 1] + S(a.slice(0, -1), b.slice(0, -1)) as string;
    } else {
        let an1=S(a.slice(0, -1), b);
        let an2=S(a, b.slice(0, -1));
        ans=an1.length>an2.length?an1:an2;
    }
    
    return ans;
}

// 结果为3 
// result=result.filter(item=>item);
console.log('-----char----',S("javascript", "bjsp"));