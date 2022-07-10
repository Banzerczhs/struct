import Heap from "./heap";

class MaxHeap extends Heap{
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
            if(_that.heapData[current]>_that.heapData[parentIndex]){
                _that.swap(current,parentIndex);
            }
        })
    }

    comparable(first:number,second:number) : number{
        let heapData=this.heapData;
        if(heapData[first]>heapData[second]){
            return first;
        }else{
            return second;
        }
    }
}

export default MaxHeap;