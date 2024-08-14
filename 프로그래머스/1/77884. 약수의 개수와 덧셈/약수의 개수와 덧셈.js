function solution(left, right) {
    const convertedArr = Array(right-left+1).fill().map((_, i) => {
        const num = left + i;
        return Number.isInteger(Math.sqrt(num)) ? -(num) : num;
    });
    let result = 0;
    for (let i = 0; i < convertedArr.length; i++) {
        result += convertedArr[i];
    }
    return result;
}