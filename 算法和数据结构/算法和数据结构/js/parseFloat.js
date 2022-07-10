function _parseFloat(str){
    return oSNum(str);     //字符串转数字
}

function oSNum(str){
    var Intstr='';   //整数部分
    var Decstr='';   //小数部分
    var DecPoint=0; //小数点位置
    var num=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=='.'){
            DecPoint=i;
            break;
        }
        Intstr+=str[i];
    }

    for(var i=DecPoint+1;i<str.length;i++){
        Decstr+=str[i];
    }

    createInt(Intstr);      //创建整数
    createDec(Decstr);      //创建小数

    var num=createInt(Intstr)+createDec(Decstr);
    return num;
}

function createInt(IntStr){
    var num=0;
    for(var i=0;i<IntStr.length;i++){
        num+=(IntStr.charCodeAt(i)-48)*Math.pow(10,IntStr.length-(i+1));
    }

    return num;
}

function createDec(DecStr){
    var num=0;
    for(var i=0;i<DecStr.length;i++){
        num+=(DecStr.charCodeAt(i)-48)*Math.pow(10,-(i+1));
    }

    return num;
}