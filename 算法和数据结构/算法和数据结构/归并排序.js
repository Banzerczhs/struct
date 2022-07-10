function merageArr(arr){
    if(arr.length===1){
        return arr;
    }

    let merge=Math.floor(arr.length/2);
    let left=arr.slice(0,merge);
    let right=arr.slice(merge);
    
    return mergeArrto(merageArr(left),merageArr(right));
}

function mergeArrto(left,right){
    let result=[];
    while(left.length>0&&right.length>0){
        if(left[0]>right[0]){
            result.push(right.shift());
        }else{
            result.push(left.shift());
        }
    }

    return result.concat(left,right);
}

console.log(merageArr(
    [
        12,6,15,23,8,10,31,41,2,50,20,7
    ]
))