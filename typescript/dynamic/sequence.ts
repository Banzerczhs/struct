function strSequence(arr:string,i:number,w:string){
    if(i==arr.length){
        console.log(w);
    }else{
        strSequence(arr,i+1,w+=' ');
        strSequence(arr,i+1,w+=arr[i]);
    }    
}


strSequence('abcd',0,'');