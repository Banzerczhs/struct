let arr=[105,50,30,25,85,40,100,12,10,28];
let end=arr.length;

for(let i=0;i<arr.length;i++){
    for(let j=end;j>=i+1;j--){
        if(arr[j]<arr[j-1]){
            let temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
        }
    }
}