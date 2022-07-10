import Heap from "./heap";

class MinHeap extends Heap{
    constructor(arr?:heapData){
        let data=arr.length?arr:[];
        super(data);
        this.init();
    }
    
    init(){
        super.init(this.heapInstert.bind(this));
    }

    heapInstert(value:union){
        let _that=this;
        super.heapInstert(value,function(current,parentIndex){
            if(_that.heapData[current]<_that.heapData[parentIndex]){
                _that.swap(current,parentIndex);
            }
        })
    }

    comparable(first:number,second:number):number{
        return super.comparable(first,second);
    }
}

export default MinHeap;