let str="ac";

var longestPalindrome = function(s) {
    let string=0,result=[],i=0,sign=0;
    let char=s[0];
    if(!s.length){
        return "";
    }

    for(let j=s.length-1;j>0;j--){
        let lastIndex=j;
        beginIndex=i;
        if(s[beginIndex]==s[lastIndex]){
            string=s.substring(beginIndex,lastIndex+1);
            do{
                beginIndex++,lastIndex--;
                if(lastIndex<=beginIndex){
                    result.push(string);
                    break;
                }
            }while(s[beginIndex]==s[lastIndex]);
        }else{
            if(sign%2==0){
                i++;
            }else{
                j--;
            }
        }

        sign++;
    }

    if(s.length&&!result.length){
        return char;
    }

    return result.sort((a,b)=>b.length-a.length)[0];
};


console.log(longestPalindrome(str));