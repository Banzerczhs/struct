function decodeString(s){
    let result='';
    let count='';
    let referQueue=[];
    if(!s.length){
        return;
    }

    for(let i=0;i<s.length;i++){
        if( !isNaN(s[i]) ){                    //1）数字 => 将数字字符 —> 整数，用于：后续倍数计算
            count = count*10 + (s[i]-0);         //有时数字是：连续出现的，eg: '23[b]2[c]' => 需要：读取 23
        }else if(s[i]=="["){
            referQueue.push({
                num : count,
                value : result
            });
            count=0;
            result='';
        }else if(s[i]=="]"){
            let charItem=referQueue.pop();
            let {num : len,value}=charItem;
            let str=value;
            for(let k=0;k<len;k++){
                str+=result;
            }
            result=str;
        }else{
            result+=s[i];
        }
    }

    return result;
}