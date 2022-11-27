
/**
 * 前缀树算法复杂度 o(K)
 * N为前缀树中有多少个字符串
 * K为所提供的前缀串的长度为多少
 */
class TrieNode{
    path:number=0;
    end:number=0;
    value:any;
    next:TrieNode[]=[];
    constructor(val?:any){
        this.value=val;
    }
}

class Trie{
    private root:TrieNode;
    constructor(){
        this.root=new TrieNode();
    }

    insert(word:String){
        if (word == null) {
            return;
        }
        let chs=word.split('');
        let node=this.root;
        for(let i=0;i<chs.length;i++){
            let chNode=node.next.filter(item=>item.value==chs[i])[0];
            if(chNode==null){
                chNode=new TrieNode(chs[i]);
                node.next.push(chNode);
            }
            node=chNode;
            node.path++;
        }

        node.end++;
    }

    delete(word:String){
        if (this.search(word) != 0) {
            let chs = word.split('');
            let node = this.root;
            for (let i = 0; i < chs.length; i++) {
                let chNode=node.next.filter(item=>item.value==chs[i])[0];
                if (--chNode.path == 0) {
                    chNode = null as unknown as TrieNode;
                    return;
                }
                node = chNode;
            }
            node.end--;
        }
    }

    //前缀树中是否存在以该字符串为结尾的前缀串
    search(word:String){
        if(word==null){
            return 0;
        }

        let chs=word.split('');
        let node=this.root;
        for(let i=0;i<chs.length;i++){
            let chNode=node.next.filter(item=>item.value==chs[i])[0];
            if(chNode == null){
                return 0;
            }
            node=chNode;
        }

        return node.end;
    }

    prefixNumber(pre:String) {
        if (pre == null) {
            return 0;
        }
        let chs = pre.split('');
        let node = this.root;
        for (let i = 0; i < chs.length; i++) {
            let chNode=node.next.filter(item=>item.value==chs[i])[0];
            if (chNode == null) {
                return 0;
            }
            node = chNode;
        }
        return node.path;
    }
}

let trie=new Trie();

trie.insert('我爱北京天安门');
trie.insert('我爱北京的天安门');

// trie.insert('为什么switch不提升机能');

console.log(trie.prefixNumber('我爱北京'));