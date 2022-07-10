class KPromise{
    static stateInfo={
        PENDING : 'pending',
        FULFILLED : 'fulfilled',
        REJECTED : 'rejected'
    }

    constructor(handle){
        if ( typeof handle !== 'function' ) 
            throw new TypeError('Promise resolver undefined is not a function');
        this.state=KPromise.stateInfo.PENDING;
        this.resolveQueue=[];       //成功函数的任务队列
        this.rejectQueue=[];        //失败函数的任务队列

        this.handle(handle);
    }

    handle(func){
        if(this.state!=='pending'){
            return;
        }
        func(this._resolve.bind(this),this._reject.bind(this));
    }

    changeState(state,callback){
        let commonHandle=function(){
            this.state=state;
            callback();
            window.removeEventListener('message',commonHandle);
        }
        window.addEventListener('message',commonHandle);

        window.postMessage('');
    }

    _resolve(val){
        let state=KPromise.stateInfo.FULFILLED;
        this.changeState(state,()=>{
            this.resolveQueue.forEach(handle=>handle(val));
        });
    }

    _reject(err){
        let state=KPromise.stateInfo.REJECTED;
        this.changeState(state,()=>{
            if(this.rejectQueue.length){
                let rejectHandle=this.rejectQueue[0];
                rejectHandle(err.message || err);
            }else{
                throw err;
            }
        });
    }

    thenHandle(value,resolve,reject){
        return function(handle){
            try{
                let result=handle(value);
                if(!result){
                    resolve(result);
                }else if(result.hasOwnProperty('then') || result instanceof KPromise){
                    result.then(resolve,reject);
                }else{
                    resolve(result);
                }
            }catch(e){
                reject(e);
            }
        }
    }

    then(resolveHandle,rejectHandle){
        let This=this;
        return new KPromise((resolve,reject)=>{
            //判断上一个promise对象的返回值是什么情况
            //1.为空，则返回成功状态
            //2.如果返回的是promise，则返回跟这个promise一样的状态
            //3.如果抛出错误则返回失败状态。
            function resolveConcat(value){
                if(resolveHandle instanceof Function){
                    This.thenHandle(value,resolve,reject)(resolveHandle);
                }else{
                    reject(value);
                }
            }

            function rejectConcat(value){
                if(rejectHandle instanceof Function){
                    This.thenHandle(value,resolve,reject)(rejectHandle);
                }else{
                    reject(value);
                }
            }

            this.resolveQueue.push(resolveConcat);
            this.rejectQueue.push(rejectConcat);
        });
    }

    catch(catchHanlde){
        return this.then(undefined,catchHanlde);
    }

    finally(finallingHandle){
        this.resolveQueue.push(finallingHandle);
        this.rejectQueue.push(finallingHandle);

        return this;
    }

    static resolve(val){
        return new KPromise((res)=>{
            res(val);
        });
    }

    static reject(val){
        return new KPromise((res,rej)=>{
            rej(val);
        });
    }

    static all(promiseQueue){
        let len=promiseQueue.length;
        let results=[];
        let i=0;

        return new KPromise((res,rej)=>{
            promiseQueue.forEach(item=>{
                item.then((val)=>{
                    results[i]=val;
                    i++;
                    if(i>=len){
                        res(results);
                    }
                },(err)=>{
                    rej(err);
                });
            });
        })
    }

    static race(promiseQueue){
        let i=0;
        function getResult(handle,val){
            i++;
            if(i===1){
                handle(val);
            }
        }

        return new KPromise((res,rej)=>{
            promiseQueue.forEach(item=>{
                item.then((val)=>{
                    getResult(res,val);
                },(err)=>{
                    getResult(rej,err);
                });
            });
        })
    }

    static allSettled(iterator) {
        let len = iterator.length;
        let i = 0;
        let vals = [];

        return new KPromise( (resolve, reject) => {
            iterator.forEach(it => {
                it.then(val => {
                    i++;
                    vals.push(val);
                    if (i === len) {
                        resolve(vals);
                    }
                },(e)=>{
                    i++;
                    vals.push(e);
                    if (i === len) {
                        resolve(vals);
                    }
                })
            });
        } );
    }
}

let p1=new KPromise(function(res,rej){
    res(123);
});

let p2=p1.then((value)=>{
    return value;
},(err)=>{
    throw err;
});

console.log(p2,p1);