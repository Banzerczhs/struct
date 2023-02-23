class Item{
    value;
    constructor(val){
        this.value=val;
    }
}

class UnionFind{
    elementMap:Map<any,Item>;
    fatherMap:Map<Item,Item>;
    sizeMap:Map<Item,number>;
    constructor(list:Array<any>){
        this.elementMap=new Map();
        this.fatherMap=new Map();
        this.sizeMap=new Map();
    }

    init(list:Array<any>){
        for(let i=0;i<list.length;i++){
            let val=list[i];
            let item=new Item(val);
            this.elementMap.set(val,item);
            this.fatherMap.set(item,item);
            this.sizeMap.set(item,1);
        }
    }

    findHead(elem:Item): Item{
        let father=this.fatherMap.get(elem) as Item;
        let path:Array<Item>=[elem];
        while(elem!==father){
            elem=this.fatherMap.get(father) as Item;
            path.push(elem);
            father=this.fatherMap.get(elem) as Item;
        }

        while(path.length>0){
            this.fatherMap.set(path.pop() as Item,elem);
        }

        return elem as Item;
    }

    isSameSet(a,b){
        if(this.elementMap.has(a) && this.elementMap.has(b)){
            return this.findHead(this.elementMap.get(a) as Item)==this.findHead(this.elementMap.get(b) as Item);
        }

        return false;
    }

    union(a,b){
        if(this.elementMap.has(a) && this.elementMap.has(b)){
            let fatherA=this.fatherMap.get(a) as Item;
            let fatherB=this.fatherMap.get(b) as Item;

            if(fatherA!==fatherB){
                let sizeA=this.sizeMap.get(fatherA) as number;
                let sizeB=this.sizeMap.get(fatherB) as number;
                let big=sizeA >= sizeB ? fatherA : fatherB;
                let small=big==fatherA?fatherB : fatherA;

                this.fatherMap.set(big,small);
                this.sizeMap.set(big,sizeA+sizeB);
                this.sizeMap.delete(small);
            }
        }
    }
}