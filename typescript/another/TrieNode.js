var TrieNode = /** @class */ (function () {
    function TrieNode(val) {
        this.path = 0;
        this.end = 0;
        this.next = [];
        this.value = val;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.insert = function (word) {
        if (word == null) {
            return;
        }
        var chs = word.split('');
        var node = this.root;
        var _loop_1 = function (i) {
            var chNode = node.next.filter(function (item) { return item.value == chs[i]; })[0];
            if (chNode == null) {
                chNode = new TrieNode(chs[i]);
                node.next.push(chNode);
            }
            node = chNode;
            node.path++;
        };
        for (var i = 0; i < chs.length; i++) {
            _loop_1(i);
        }
        node.end++;
    };
    Trie.prototype["delete"] = function (word) {
        if (this.search(word) != 0) {
            var chs_1 = word.split('');
            var node = this.root;
            var _loop_2 = function (i) {
                var chNode = node.next.filter(function (item) { return item.value == chs_1[i]; })[0];
                if (--chNode.path == 0) {
                    chNode = null;
                    return { value: void 0 };
                }
                node = chNode;
            };
            for (var i = 0; i < chs_1.length; i++) {
                var state_1 = _loop_2(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            node.end--;
        }
    };
    //前缀树中是否存在以该字符串为结尾的前缀串
    Trie.prototype.search = function (word) {
        if (word == null) {
            return 0;
        }
        var chs = word.split('');
        var node = this.root;
        var _loop_3 = function (i) {
            var chNode = node.next.filter(function (item) { return item.value == chs[i]; })[0];
            if (chNode == null) {
                return { value: 0 };
            }
            node = chNode;
        };
        for (var i = 0; i < chs.length; i++) {
            var state_2 = _loop_3(i);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return node.end;
    };
    Trie.prototype.prefixNumber = function (pre) {
        if (pre == null) {
            return 0;
        }
        var chs = pre.split('');
        var node = this.root;
        var _loop_4 = function (i) {
            var chNode = node.next.filter(function (item) { return item.value == chs[i]; })[0];
            if (chNode == null) {
                return { value: 0 };
            }
            node = chNode;
        };
        for (var i = 0; i < chs.length; i++) {
            var state_3 = _loop_4(i);
            if (typeof state_3 === "object")
                return state_3.value;
        }
        return node.path;
    };
    return Trie;
}());
var trie = new Trie();
trie.insert('我爱北京天安门');
trie.insert('我爱北京的天安门');
// trie.insert('为什么switch不提升机能');
console.log(trie.prefixNumber('我爱北京'));
