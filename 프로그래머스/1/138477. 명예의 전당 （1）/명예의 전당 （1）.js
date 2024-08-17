function solution(k, score) {
    const topK = [];
    return score.reduce((acc, curr, i) => {
        topK.push(curr);
        topK.sort((a, b) => b - a);
        if (topK.length <= k) {
            acc.push(topK.at(-1));
            return acc;
        }
        topK.pop();
        acc.push(topK[k - 1]);
        return acc;
    }, []);
}