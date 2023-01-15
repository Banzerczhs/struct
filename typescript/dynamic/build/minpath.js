function dpTable(matrix, row, col) {
    //暴力递归转动态规划要点
    /**
     * 1.确认所需要的位置
     * 2.确认所有basic case的值
     * 3.找出一个普遍位置的值的计算方式
     */
    /**
     * dp表的维度
     * 1.找出暴力递归中的可变参数
     * 2.可变参数有多少，dp表的维度就为多大
     */
    let dp = new Array(row);
    for (let i = 0; i < row; i++) {
        dp[i] = new Array(col).fill(0);
    }
    row--, col--;
    //这道题可变参数就两个一个行一个列，所以dp表的维度为2
    dp[row][col] = matrix[row][col];
    //确认最后一行的值
    for (let i = row - 1; i >= 0; i--) {
        dp[i][col] = matrix[i][col] + dp[i + 1][col];
    }
    //确认最后一列的值
    for (let j = col - 1; j >= 0; j--) {
        dp[row][j] = matrix[row][j] + dp[row][j + 1];
    }
    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
        }
    }
    //所需要求的位置
    return dp[0][0];
}
//暴力递归
function processing(matrix, row, col, i, j) {
    if (i == row && j == col) {
        //basic case 
        return matrix[i][j];
    }
    if (i == row) {
        //basic case 
        return matrix[i][j] + processing(matrix, row, col, i, j + 1);
    }
    if (j == col) {
        //basic case 
        return matrix[i][j] + processing(matrix, row, col, i + 1, j);
    }
    let minR = processing(matrix, row, col, i, j + 1);
    let minD = processing(matrix, row, col, i + 1, j);
    return matrix[i][j] + Math.min(minR, minD);
}
function minPath(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    // return processing(matrix,row-1,col-1,0,0);
    return dpTable(matrix, row, col);
}
let matrix = [
    [3, 2, 6, 4],
    [1, 5, 2, 1],
    [3, 7, 6, 2]
];
console.log(minPath(matrix));
