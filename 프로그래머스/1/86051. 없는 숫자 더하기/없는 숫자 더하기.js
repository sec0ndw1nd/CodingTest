function solution(numbers) {
    return 9*10/2 - numbers.reduce((acc, curr) => acc += curr);
}