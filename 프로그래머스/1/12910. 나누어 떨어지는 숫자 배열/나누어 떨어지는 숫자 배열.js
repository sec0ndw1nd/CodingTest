function solution(arr, divisor) {
    const result = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);
    return !result.length ? [-1] : result;
}