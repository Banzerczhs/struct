var firstMissingPositive = function(nums) {
    nums.push(0);
    let len=nums.length;
    for(let i=0;i<len;i++){
        if(nums[i]>0&&nums[i]<len){
            let temp=nums[nums[i]];
            while(temp!==nums[i]){
                nums[nums[i]]=nums[i];
                nums[i]=temp;
                temp=nums[nums[i]];
            }
        }
    }

    let result=-1;
    for(let i=1;i<len;i++){
        if(nums[i]!==i){
            result=i;
            break;
        }
    }

    if(result==-1){
        return len;
    }else{
        return result;
    }
};



console.log(firstMissingPositive([3,4,-1,1]));