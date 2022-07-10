import Heap from "./heap";

class MaxHeap extends Heap{
    constructor(arr:heapData){
        super(arr);
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

    heapFly(index:number){
        let left=(index<<1)+1,right=0;
        let size=this.heapSize;
        while(left<size){
            right=left+1;
            let maxIndex=right<size?this.max(left,right):left;
            let parent=(maxIndex-1)>>1;
            if(this.max(maxIndex,parent)==maxIndex){
                this.swap(maxIndex,parent);
            }
            left=(left<<1)+1;
        }
    }

    max(first:number,second:number) : number{
        let heapData=this.heapData;
        if(heapData[first]>heapData[second]){
            return first;
        }else{
            return second;
        }
    }
}

export default MaxHeap;