function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = [...arr].sort((a, b) => a - b)[0];
    return arr.filter((v) => v !== min);
}