function solution(n) {
    let total = 0;
    for (let i = 2; i <= n; i++) {
        const sqrtI = Math.floor(Math.sqrt(i));
        let isSosu = true;
        for (let j = 2; j <= sqrtI; j++) {
            if (!(i % j)) {
                isSosu = false;
                break;
            }
        }
        if (isSosu) total++;
    }
    return total;
}