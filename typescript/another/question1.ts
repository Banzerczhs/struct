let str1='abcde123';
let str2=str1.split('');
let result:string[]=[];
for(let i=0;i<str2.length;i++){
    if(str2[i]!=='null'&&/[a-zA-Z]/.test(str2[i])){
        let re=/\d/;
        let curIndex=i+1;
        while(re.test(str2[curIndex])){
            let dis=String.fromCharCode(str2[i].charCodeAt(0)-str2[curIndex].charCodeAt(0));
            if(dis==='0'){
                if(result.length>0){
                    let numQueue:string[]=[];
                    let prev=result.pop();
                    while(prev&&/[a-zA-Z]/.test(prev)){
                        numQueue.push(prev);
                        prev=result.pop();
                    }
                    result.push(str2[i]);
                    while(prev=numQueue.pop()){
                        result.push(prev);
                    }
                    result.push(str2[curIndex]);
                }else{
                    result.push(str2[i]);
                    result.push(str2[curIndex]);
                }
                str2[curIndex]='null';
            }

            curIndex++;
        }
    }
}

console.log(result);