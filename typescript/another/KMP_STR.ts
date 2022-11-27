/**
 * KMP字符串匹配算法，时间复杂度为O(n)
 */

class KMP{
    private str1:Array<string>;
    private str2:Array<string>;
    constructor(str1:Array<string>,str2:Array<string>){
        this.str1=str1;
        this.str2=str2;
    }

    indexOf():number{
        let index=-1;
        let len1=this.str1.length,len2=this.str2.length;
        let str1=this.str1;
        let str2=this.str2;
        
        if(len2>len1){
            return index;
        }
        let next=this.genNextArray(this.str2);
        let i1=0,i2=0;
        while(i1<len1 && i2<len2){
            if(str1[i1]==str2[i2]){
                i1++;
                i2++;
            }else if(next[i2]==-1){
                i1++;
            }else{
                i2=next[i2];
            }
        }

        index = i1==len1?-1:i1-i2;
        
        return index;
    }

    genNextArray(ms:Array<string>):Array<number>{
        let next=new Array(ms.length).fill(-1);
        next[0]=-1;
        next[1]=0;
        let i=2;
        let cn=next[i-1];
        while(i<ms.length){
            if(ms[i-1]==ms[cn]){
                next[i++]=++cn;
            }else if(cn>0){
                cn=next[cn];
            }else{
                next[i++]=0;
            }
        }
        return next;
    }
}

let str1='aabcsaeopiwuyqxjkal'.split('');
let str2='csaeopwwe'.split('');

let kmp=new KMP(str1,str2);

console.log(kmp.indexOf());