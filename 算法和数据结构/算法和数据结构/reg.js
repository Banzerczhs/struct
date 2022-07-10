function match(s,p){
    let re=new RegExp(p);
    return re.test(s);
}

console.log(match("a c","a(bc)*c"));