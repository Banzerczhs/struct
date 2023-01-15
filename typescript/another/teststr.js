function S(n){
    if(n==1 || n==2) return 1;
    return S(n-1)+S(n-2);
}

console.log(S(50));