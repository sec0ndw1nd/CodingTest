function solution(n, arr1, arr2) {
    return arr1.map((v, i) => {
        const or = v | arr2[i];
        const converted = or.toString(2).split('').map((bin) => +bin ? '#' : ' ').join('');
        return ' '.repeat(n - converted.length) + converted;
    });
}