function solution(number, limit, power) {
    return Array.from({length: number}).map((_, i) => {
        const n = i + 1;
        const sqrtN = Math.sqrt(n);
        const yaksu = [];
        for (let j = 1; j < sqrtN; j++) {
            if (!(n % j)) yaksu.push(j);
        }
        let len = yaksu.length * 2;
        if (Number.isInteger(sqrtN)) len++;
        return len > limit ? power : len;
    }).reduce((acc, curr) => acc += curr);
}