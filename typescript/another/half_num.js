function dealProccess(arr, num) {
    let left = 0;
    let more = arr.length - 1;
    let cur = left;
    while (cur <= more) {
        if (arr[cur] < num) {
            swap(arr, cur++, left++);
        } else if (arr[cur] > num) {
            swap(arr, cur, more--);
        } else {
            cur++;
        }
    }

    return arr;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(dealProccess([5, 10, 3, 4, 3, 9, 8, 4, 2, 8],4));
