function solution(t, p) {
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const slicedT = t.slice(i, i + p.length);
        if (+slicedT <= +p) result++;
    }
    return result;
}