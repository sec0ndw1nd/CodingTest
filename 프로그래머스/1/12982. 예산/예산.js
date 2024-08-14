function solution(d, budget) {
    const sorted = [...d].sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < sorted.length; i++) {
        total += sorted[i];
        if (total > budget) return i;
    }
    return sorted.length;
}