

class Sort{
    protected arr=[];
    constructor(arr:union){
        
    }

    sort(): Array<any>{
        let arr=[].concat(this.arr);
        return arr.sort();
    }

    swap(first:number,second:number){
        let temp=this.arr[first];
        this.arr[first]=this.arr[second];
        this.arr[second]=temp;
    }
}

export default Sort;