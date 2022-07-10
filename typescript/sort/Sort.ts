

class Sort{
    protected arr=[];
    constructor(arr?:Array<any>){
        this.arr=arr;
    }

    sort(): Array<any>{
        let arr=[].concat(this.arr);
        return arr.sort();
    }

    run(arr:Array<any>):Array<any>{
        this.arr=arr;
        return this.sort();
    }

    swap(first:number,second:number){
        let temp=this.arr[first];
        this.arr[first]=this.arr[second];
        this.arr[second]=temp;
    }
}

export default Sort;