function solution(x) {
    return !(x % (x + '').split('').reduce((acc, curr) => acc += +curr, 0));
}