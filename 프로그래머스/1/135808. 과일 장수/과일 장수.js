function solution(k, m, score) {
    const sorted = [...score].sort((a, b) => b - a);
    const maxLen = Math.floor(score.length / m) * m;
    let total = 0;
    for (let i = 0; i < maxLen; i+=m) {
        total += sorted[i+m-1] * m;
    }
    return total;
}