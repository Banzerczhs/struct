import Sort from "./Sort";

class Bubble extends Sort{
    constructor(arr?:Array<number>){
        super(arr);
    }

    sort():Array<any>{
        let arr=this.arr;
        let len=arr.length;
        for(let i=0;i<len;i++){
            for(let j=i+1;j<len;j++){
                if(arr[j]<arr[i]){
                    this.swap(j,i);
                }
            }
        }
        return arr;
    }
}

export default Bubble;