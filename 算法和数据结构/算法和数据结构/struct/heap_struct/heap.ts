class Heap{
    protected _heapData:heapData;
    protected _heapSize:number;
    protected refs:heapData;
    constructor(arr : heapData){
        this.heapData=[];
        this.refs=arr;
        this.heapSize=0;
    }

    init(insert:(value:union)=>void){
        let heapData=this.refs;
        let index=0;
        while(index<heapData.length){
            let current : union=heapData[index++];
            insert(current);
        }
    }

    heapInstert(value:union,dealFn:(first:number,second:number)=>void){
        this.heapData.push(value);
        let parentIndex=0;
        let current=this.heapSize++;
        while((parentIndex=(current-1)>>1)>=0){
            dealFn(current,parentIndex);
            current=parentIndex;
        }
    }

    swap(this:Heap,firstIndex:number,secondIndex:number){
        let temp:union=this.heapData[firstIndex];
        this.heapData[firstIndex]=this.heapData[secondIndex];
        this.heapData[secondIndex]=temp;
    }

    get heapData() : heapData{
        return this._heapData;
    }

    set heapData(data:heapData){
        this._heapData=data;
    }

    get heapSize() : number{
        return this._heapSize;
    }

    set heapSize(size:number){
        this._heapSize=size;
    }
}

export default Heap;
