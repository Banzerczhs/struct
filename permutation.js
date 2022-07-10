const util=require('util');


function permutation(str){
    let baseStr=str;
    if(str.length==1) return [str];
    return baseStr.split('').map(char=>{
        return [char].concat(permutation(baseStr.replace(char,'')));
    })
}

console.log(util.inspect(permutation('1234'),false,null,true));