
class CheckData{
    constructor(){
        
    }

    generateRandom(){
        let range=1000;
        let len=100000;
        let res=[];
        for(let i=0;i<len;i++){
            res.push(Math.round(Math.random()*range));
        }

        return res;
    }

    rightMethod(arr:Array<any>){
        return arr.sort();
    }

    check(origin_sort):boolean{
        let refs=this.generateRandom();
        let arr=[].concat(refs);
        
        arr=this.rightMethod(arr);
        refs=origin_sort(refs);

        let result=true;

        for(let i=0;i<arr.length;i++){
            if(arr[i]!==refs[i]){
                result=false;
            }
        }

        return result;
    }
}