
class CheckData{
    generateRandom(){
        let range=100000000;
        let len=10000;
        let res=[];
        for(let i=0;i<len;i++){
            res.push(Math.round(Math.random()*(range-2)+2));
        }

        return res;
    }

    rightMethod(arr:Array<any>){
        return arr.sort((a,b)=>{
            return a-b;
        });
    }

    check(origin_sort:Function):boolean{
        let refs=this.generateRandom();
        let arr=[...refs];
        
        arr=this.rightMethod(arr);
        let afterTime=Date.now();
        refs=origin_sort(refs);
        console.log((Date.now()-afterTime)+'ms');

        let result=true;

        for(let i=0;i<arr.length;i++){
            if(arr[i]!==refs[i]){
                result=false;
            }
        }

        return result;
    }
}

export default CheckData;