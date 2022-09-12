let isLand = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0]
];
function infect(row, col, bound_row, bound_col) {
    if (row < 0 || row >= bound_row || col < 0 || col >= bound_col || isLand[row][col] !== 1) {
        return;
    }
    isLand[row][col] = 2;
    infect(row + 1, col, bound_row, bound_col);
    infect(row - 1, col, bound_row, bound_col);
    infect(row, col + 1, bound_row, bound_col);
    infect(row, col - 1, bound_row, bound_col);
}
function count_isLand(bound_row, bound_col) {
    let count = 0;
    for (let i = 0; i < bound_row; i++) {
        for (let j = 0; j < bound_col; j++) {
            if (isLand[i][j] == 1) {
                count++;
                infect(i, j, bound_row, bound_col);
            }
        }
    }
    return count;
}
let row = isLand.length;
let col = isLand[0].length;
console.log(count_isLand(row, col));
