function solution(s) {
    const isEven = Number.isInteger(s.length / 2);
    const startIndex = Math.floor(s.length / 2);
    return isEven ? s.slice(startIndex-1, startIndex+1) : s[startIndex];
}