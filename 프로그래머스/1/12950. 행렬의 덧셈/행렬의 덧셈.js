function solution(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        const inner = [];
        for (let j = 0; j < arr1[0].length; j++) {
            inner.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(inner);
    }
    return result;
}