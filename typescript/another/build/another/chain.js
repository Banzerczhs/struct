//此文件中所有算法都是额外空间复杂度o(1)时间复杂度o(n)
class ChainNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Chain {
    constructor(arr) {
        var _a;
        let node = (_a = arr[0]) !== null && _a !== void 0 ? _a : false;
        if (node !== false) {
            this.head = new ChainNode(arr[0]);
            this.initChain(arr);
        }
    }
    initChain(arr) {
        let len = arr.length;
        let head = this.head;
        for (let i = 1; i < len; i++) {
            head.next = new ChainNode(arr[i]);
            head = head.next;
        }
    }
    getHead() {
        return this.head;
    }
    getLen() {
        let i = 0;
        let head = this.head;
        while (head) {
            i++;
            head = head.next;
        }
        return i;
    }
    reverseChain(limit) {
        let cur = this.head;
        let next = null, prev = null, i = 0;
        while (cur) {
            if (limit && i >= limit) {
                break;
            }
            next = cur.next;
            if (i == 0) {
                cur.next = null;
            }
            else {
                cur.next = prev;
            }
            prev = cur;
            cur = next;
            i++;
        }
        let result = prev;
        if (limit) {
            result = { head: prev, next: cur };
        }
        return result;
    }
    palindrome() {
        var _a;
        let result = true;
        let cur = this.head;
        let next = cur, prev = cur, i = 0;
        if (!cur) {
            return false;
        }
        let nextPoint = cur.next;
        while (nextPoint) {
            next = cur.next;
            nextPoint = (_a = nextPoint.next) === null || _a === void 0 ? void 0 : _a.next;
            if (i == 0) {
                cur.next = null;
            }
            else {
                cur.next = prev;
            }
            prev = cur;
            cur = next;
            i++;
        }
        if (i % 2) {
            cur = cur.next;
        }
        while (cur || prev) {
            if ((prev === null || prev === void 0 ? void 0 : prev.value) !== (cur === null || cur === void 0 ? void 0 : cur.value)) {
                result = false;
                break;
            }
            prev = prev.next;
            cur = cur.next;
        }
        return result;
    }
}
// let arr=[1,2,3,4,5,6,7,8];
// let chain=new Chain(arr);
// let head=chain.getHead();
// while(head){
//     console.log(head.value);
//     head=head.next;
// }
// //反转单向链表
// let headNode=chain.reverseChain();
// while(headNode){
//     console.log(headNode.value);
//     headNode=headNode.next;
// }
//打印链表公共部分
// let chain1=new Chain([2,3,8,13,19,28,35,38]);
// let chain2=new Chain([8,10,25,33,35,38,50,66,70,73,86]);
// let head1=chain1.getHead();
// let head2=chain2.getHead();
// if(chain1.getLen()<chain2.getLen()){
//     head1=chain1.getHead();
//     head2=chain2.getHead();
// }else{
//     head1=chain2.getHead();
//     head2=chain1.getHead();
// }
// //O(N)  空间O(1)
// while(head1){
//     if(head1.value<head2.value){
//         head1=head1.next;
//     }else if(head1.value==head2.value){
//         console.log(head1.value);
//         head1=head1.next;
//         head2=head2.next;
//     }else{
//         head2=head2.next;
//     }
// }
//判断链表是否是回文结构
// let chain=new Chain([0]);
// console.log(chain.palindrome());
//链表按指划分为小于放左边等于放中间大于放右边
// let chain = new Chain([9, 0, 4, 5, 3, 1]);
// let lessHead=new ChainNode(null);
// let equalHead=new ChainNode(null);
// let moreHead=new ChainNode(null);
// let less=lessHead;
// let equal=equalHead;
// let more=moreHead;
// let ref=3;
// let cur=chain.getHead();
// while(cur){
//     if(cur.value<ref){
//         less.next=cur;
//         less=cur;
//     }else if(cur.value==ref){
//         equal.next=cur;
//         equal=cur;
//     }else{
//         more.next=cur;
//         more=cur;
//     }
//     cur=cur.next;
// }
// more.next=cur;
// less.next = equalHead.next;
// equal.next = moreHead.next;
// cur = lessHead.next;
// while(cur){
//     console.log(cur.value);
//     cur=cur.next;
// }
// let chain1=new ChainNode(null);
// let referArr=[9, 0, 4, 5, 3, 1];
// let i=0;
// let cur=chain1;
// let chainArr=[];
// while(i<referArr.length){
//     let node=new ChainNode(referArr[i]);
//     chainArr.push(node);
//     cur.next=node;
//     cur=cur.next;
//     i++;
// }
// chainArr[0].rand=chainArr[2];
// chainArr[1].rand=chainArr[5];
// chainArr[2].rand=chainArr[3];
// chainArr[3].rand=chainArr[0];
// chainArr[4].rand=chainArr[1];
// chainArr[5].rand=chainArr[4];
//拷贝带有随机指针的链表节点
// cur=chain1;
// cur=cur.next;
// while(cur){
//     let copyNode=new ChainNode(cur.value);
//     let temp=cur.next;
//     cur.next=copyNode;
//     copyNode.next=temp;
//     cur = cur.next.next;
// }
// cur=chain1;
// cur=cur.next;
// while(cur){
//     let node=cur;
//     let copy=cur.next;
//     copy.rand=node.rand.next;
//     cur=cur.next.next;
// }
// cur=chain1;
// cur=cur.next;
// let chain2=new ChainNode(null);
// chain2.next=cur.next;
// while(cur){
//     cur.next=cur.next.next;
//     cur=cur.next;
// }
// console.log(chain2);
function getLoop(chain) {
    var _a;
    let result = null;
    if (!chain) {
        return result;
    }
    let fastPoint = chain;
    let slowPoint = chain;
    let state = 'fast';
    while (fastPoint) {
        if (state == 'fast') {
            fastPoint = (_a = fastPoint.next) === null || _a === void 0 ? void 0 : _a.next;
        }
        else {
            fastPoint = fastPoint.next;
        }
        slowPoint = slowPoint.next;
        if (fastPoint === slowPoint && state == 'fast') {
            state = 'slow';
            fastPoint = chain;
        }
        else if (fastPoint === slowPoint) {
            result = fastPoint;
            break;
        }
    }
    return result;
}
function noLoop(head1, head2) {
    let n = 0;
    let cur1 = head1;
    let cur2 = head2;
    while (cur1) {
        n++;
        cur1 = cur1.next;
    }
    while (cur2) {
        n--;
        cur2 = cur2.next;
    }
    if (cur2 !== cur1) {
        return null;
    }
    cur1 = n > 0 ? head1 : head2;
    n = Math.abs(n);
    cur2 = cur1 === head1 ? head2 : head1;
    while (n) {
        cur1 = cur1.next;
        n--;
    }
    while (cur1 !== cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
}
function bothLoop(head1, head2, loop1, loop2) {
    let cur1 = head1, cur2 = head2;
    let n = 0;
    let result = null;
    while (cur1 !== loop1) {
        n++;
        cur1 = cur1.next;
    }
    while (cur2 !== loop1) {
        n--;
        cur2 = cur2.next;
    }
    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 === head1 ? head2 : head1;
    n = Math.abs(n);
    while (n) {
        cur1 = cur1.next;
        n--;
    }
    if (loop1 === loop2) {
        while (cur1 !== cur2) {
            cur1 = cur1.next;
            cur2 = cur2.next;
        }
        return cur1;
    }
    else {
        let beginNode = loop1;
        loop1 = loop1.next;
        while (loop1 !== beginNode) {
            if (loop1 === loop2) {
                result = loop1;
                break;
            }
            loop1 = loop1.next;
        }
    }
    return result;
}
function getIntersectNode(head1, head2) {
    if (!head1 || !head2) {
        return null;
    }
    let head1Loop = getLoop(head1);
    let head2Loop = getLoop(head2);
    if (head1Loop == null && head2Loop == null) {
        return noLoop(head1, head2);
    }
    if (head1Loop && head2Loop) {
        return bothLoop(head1, head2, head1Loop, head2Loop);
    }
    return null;
}
// 1->2->3->4->5->6->7->null
let head1 = new ChainNode(1);
head1.next = new ChainNode(2);
head1.next.next = new ChainNode(3);
head1.next.next.next = new ChainNode(4);
head1.next.next.next.next = new ChainNode(5);
head1.next.next.next.next.next = new ChainNode(6);
head1.next.next.next.next.next.next = new ChainNode(7);
// 0->9->8->6->7->null
let head2 = new ChainNode(0);
head2.next = new ChainNode(9);
head2.next.next = new ChainNode(8);
head2.next.next.next = head1.next.next.next.next.next;
let resNode = getIntersectNode(head1, head2);
console.log(resNode === null || resNode === void 0 ? void 0 : resNode.value); //两个无环链表相交
// 0->9->8->6->7->null
head2 = new ChainNode(0);
head2.next = new ChainNode(9);
head2.next.next = new ChainNode(8);
head2.next.next.next = new ChainNode(6);
head2.next.next.next.next = new ChainNode(7);
resNode = getIntersectNode(head1, head2);
console.log(resNode === null || resNode === void 0 ? void 0 : resNode.value); //两个无环链表不相交
// 0->9->8->2->3->4->5->6->7->null
// head2 = new ChainNode(0);
// head2.next = new ChainNode(9);
// head2.next.next = new ChainNode(8);
// head2.next.next.next = head1.next;
// resNode=getIntersectNode(head1, head2);
// console.log(resNode?.value);
// 0->9->8->2->6>->7->3->2...
head2 = new ChainNode(0);
head2.next = new ChainNode(9);
head2.next.next = new ChainNode(8);
head2.next.next.next = new ChainNode(2);
head2.next.next.next.next = new ChainNode(6);
head2.next.next.next.next.next = new ChainNode(7);
head2.next.next.next.next.next.next = new ChainNode(3);
head2.next.next.next.next.next.next.next = head2.next.next.next;
resNode = getIntersectNode(head1, head2);
console.log(resNode === null || resNode === void 0 ? void 0 : resNode.value); //一个有环链表一个无环链表
let head3 = new ChainNode(0);
head3.next = new ChainNode(9);
head3.next.next = new ChainNode(8);
head3.next.next.next = new ChainNode(2);
head3.next.next.next.next = new ChainNode(3);
head3.next.next.next.next.next = head2.next.next.next;
resNode = getIntersectNode(head2, head3);
console.log(resNode === null || resNode === void 0 ? void 0 : resNode.value); //两个有环链表相交
head3 = new ChainNode(0);
head3.next = new ChainNode(9);
head3.next.next = new ChainNode(8);
head3.next.next.next = new ChainNode(2);
head3.next.next.next.next = new ChainNode(3);
head3.next.next.next.next.next = head3.next.next.next;
resNode = getIntersectNode(head2, head3);
console.log(resNode === null || resNode === void 0 ? void 0 : resNode.value); //两个有环链表不相交
// 0->9->8->6->4->5->6..
// head2 = new ChainNode(0);
// head2.next = new ChainNode(9);
// head2.next.next = new ChainNode(8);
// head2.next.next.next = head1.next.next.next.next.next;
// resNode=getIntersectNode(head1, head2);
// console.log(resNode?.value);
