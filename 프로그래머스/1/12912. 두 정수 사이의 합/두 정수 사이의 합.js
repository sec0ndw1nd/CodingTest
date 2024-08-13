function solution(a, b) {
    if (a === b) return a;
    const [from, to] = [a, b].sort((a, b) => a - b);
    return (to-from+1)/2*(from+to);
}