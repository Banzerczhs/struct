function origamiCount(n:number,i:number,down:boolean){
    if(i>n){
        return;
    }

    origamiCount(n,i+1,true);
    console.log(down?'down':'up');
    origamiCount(n,i+1,false);
}

origamiCount(2,1,true);