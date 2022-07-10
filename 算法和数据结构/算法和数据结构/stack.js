function Queue() {
    var items = [];

    this.size = items.length;

    this.enqueue = function (item) {
        items.push(item);
        this.size++;
    }

    this.dequeue = function () {
        this.size--;
        return items.shift();
    }

    this.head = function () {
        return items[0];
    }

    this.tail = function () {
        return items[items.length - 1];
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.clear = function () {
        items = [];
    }
}


function Stack() {
    let queue1 = new Queue();
    let queue2 = new Queue();

    this.push = function (item) {
        queue1.enqueue(item);
    }

    this.pop = function () {
        while(queue1.size>1){
            let tmp=queue1.dequeue();
            queue2.enqueue(tmp);
        }
        
        let result=queue1.dequeue();
        swap();
        return result;
    }


    function swap(){
        let temp=queue1;
        queue1=queue2;
        queue2=temp; 
    }

    this.top = function () {
        return queue1.head();
    }
}


let stack=new Stack();

stack.push(1);
stack.push(3);
stack.push(2);
stack.push(4);

console.log(stack.pop());
console.log(stack.pop());