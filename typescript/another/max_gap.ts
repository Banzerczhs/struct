
class MaxGap{
    arr:Array<any>
    constructor(arr:Array<any>){
        this.arr=arr;
    }

    posBucket(cur:number,min:number,max:number,len:number):number{
        return Math.floor((cur-min)*len/(max-min));
    }

    getExtremum():Array<number>{
        let max=this.arr[0],min=this.arr[0];
        for(let i=0;i<this.arr.length;i++){
            if(max<this.arr[i]){
                max=this.arr[i];
            }
            if(min>this.arr[i]){
                min=this.arr[i];
            }
        }

        return [max,min];
    }

    getMaxGap():number{
        let res=0;
        let arr=this.arr;
        let [maxNum,minNum]=this.getExtremum();
        let hasNum=Array(arr.length+1).fill(false);
        let iMax=Array(arr.length+1).fill(0);
        let iMin=Array(arr.length+1).fill(0);
        
        iMin[0]=minNum;
        iMin[0]=maxNum;
        iMax[arr.length]=maxNum;
        iMin[arr.length]=maxNum;
        for(let i=0;i<arr.length;i++){
            let pos=this.posBucket(arr[i],minNum,maxNum,arr.length);

            iMax[pos]=hasNum[pos] ? Math.max(iMax[pos],arr[i]) : arr[i];
            iMin[pos]=hasNum[pos] ? Math.min(iMin[pos],arr[i]) : arr[i];
            hasNum[pos]=true;
        }

        let lastMax=iMax[0];
        for(let i=1;i<arr.length+1;i++){
            if(hasNum[i]){
                res=Math.max(res,iMin[i]-lastMax);
                lastMax=iMax[i];
            }
        }

        return res;
    }
}

let max_gap=new MaxGap([5,17,27,35,50,66,82,90]);

let res_arr=max_gap.getMaxGap();
console.log(res_arr);