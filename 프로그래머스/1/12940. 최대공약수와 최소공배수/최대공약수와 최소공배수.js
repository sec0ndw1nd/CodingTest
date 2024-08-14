function solution(n, m) {
    // max의 약수 배열 구하고 큰값부터 순환하여 그 값이 min으로 나누어떨어지면 그것이 최대공약수
    // n * m / 최대공약수 = 최소공배수
    const result = [];
    const rest = [];
    const [min, max] = [n, m].sort((a, b) => a - b);
    const sqrtMax = Math.sqrt(max);
    for (let i = 1; i < sqrtMax; i++) {
        if (!(max % i)) {
            result.push(i);
            rest.push(max / i);
        }
    }
    if (Number.isInteger(sqrtMax)) result.push(sqrtMax);
    const reversed = rest.concat(result.reverse());

    for (let i = 0; i < reversed.length; i++) {
        const [v, d] = [reversed[i], min].sort((a, b) => b - a);
        if (!(v % d)) return [d, min*max/d];
    }
}