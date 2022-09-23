class KMP{
    private str1:Array<string>;
    private str2:Array<string>;
    constructor(str1:Array<string>,str2:Array<string>){
        this.str1=str1;
        this.str2=str2;
    }

    indexOf():number{
        let index=0;
        return index;
    }

    genNextArray(ms:Array<string>):Array<number>{
        let next=new Array(ms.length).fill(-1);
        return next;
    }
}