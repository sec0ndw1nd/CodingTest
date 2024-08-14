function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    return Number.isInteger(+s) && parseInt(s) === +s;
}