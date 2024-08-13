function solution(n) {
    if (n >= 0 && n < 2) return n;
    
    const resultArr = [];
    const sqrtN = Math.sqrt(n);
    const centerN = Math.floor(sqrtN);
    
    for (let i = 1; i <= centerN; i++) {
        if (!(n % i)) resultArr.push(i);
    }
    
    const rest = [...resultArr];
    if (resultArr.at(-1) === sqrtN) rest.pop();
    return resultArr.concat(rest.reverse().map((v) => n / v)).reduce((acc, curr) => acc += curr);
}