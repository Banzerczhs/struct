class Heap{
    protected _heapData:heapData;
    protected _heapSize:number;
    protected refs:heapData;
    constructor(arr: heapData){
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

    heapTop():union{
        return this.heapData[0];
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

    heapShift():union{
        this.swap(0,this.heapData.length-1);
        let res=this.heapData.pop();
        this.heapSize--;
        this.heapFly();

        return res;
    }

    heapFly(index?:number){
        index=index?index:0;
        let left=(index<<1)+1,right=0;
        let size=this.heapSize;
        while(left<size){
            right=left+1;
            let comIndex=right<size?this.comparable(left,right):left;
            let parent=(comIndex-1)>>1;
            if(this.comparable(comIndex,parent)==comIndex){
                this.swap(comIndex,parent);
            }
            left=(left<<1)+1;
        }
    }

    comparable(first:number,second:number):number{
        let heapData=this.heapData;
        if(heapData[first]<heapData[second]){
            return first;
        }else{
            return second;
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
