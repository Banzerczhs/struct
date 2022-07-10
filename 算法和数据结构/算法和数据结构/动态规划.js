/**
 * 爬楼梯 Fibonacci 斐波那契数列经典问题
 * @param {*} n 
 * @param {*} map 
 */

var climbStairs=function(n,map={1:1,2:2}){
    if(map[n]){
        return map[n];
    }else{
        map[n]=map[n-1]+map[n-2];
    }

    return climbStairs(n-1,map)+climbStairs(n-2,map);
}

// console.log(climbStairs(5));

/**
 * 给定一个整数n，将n分为至少两个整数，并输出这些整数最大的乘积
 * 输入 10
 * 输出 36
 * 过程 10=3+3+4  36=3*3*4
 * @param {*} n 
 */
const d=function(n){
    var dp=[];
    if(n==1){
        return 1;
    }
    
    if(dp[n]!==undefined){
        return dp[n];
    }
    
    let res=-1;
    for(let i=1;i<n;i++){
        res=Math.max(res,i*(n-i),i*d(n-i));
    }

    dp[n]=res;
    return dp[n];
}

d(10);

function integerBreak(n){
    const dp=new Array(n+1).fill(1);
    for(let i=3;i<=n;i++){
        for(let j=1;j<i;++j){
            dp[i]=Math.max(dp[i],j*(i-j),j*dp[i-j]);
        }
    }
    console.log(dp);
    return dp[n];
}

// console.log(integerBreak(4));


/**
 * 小偷偷钱，有n间房屋，现在你需要在一晚上去偷钱，唯一阻拦的问题是每个房间都安装了报警器
 * 一旦你进入连续的两间房屋，报警器就会启动。如何才能在一晚上偷取最多的金钱数量。
 * 
 * 例如 [1,3,3,1]
 * 输出：4 1+3
 */
function rob(nums){
    const len=nums.length;

    if(nums.length==0){
        return 0;
    }

    const dp=new Array(len+1);
    dp[0]=0;
    dp[1]=nums[0];
    dp[2]=nums[1];
    for(let i=3;i<=len;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i-1]);
    }

    return dp[len];
}

console.log(rob([1,2,3,1,3]));