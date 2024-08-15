function solution(s) {
    const data = {};
    return s.split('').map((v, i) => {
        const latestIndex = data[v];
        data[v] = i;
        return (typeof latestIndex !== 'undefined') ? i - latestIndex : -1;
    });
}