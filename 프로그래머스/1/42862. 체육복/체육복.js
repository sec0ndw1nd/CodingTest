function solution(n, lost, reserve) {
    const map = new Map();
    for (let i = 0; i < reserve.length; i++) {
        map.set(reserve[i], 1);
    }
    
    const lostSoSad = [];
    for (let i = 0; i < lost.length; i++) {
        map.has(lost[i]) ? map.set(lost[i], 0) : lostSoSad.push(lost[i]);
    }
    if (!lostSoSad.length) return n;
    
    lostSoSad.sort((a, b) => a - b);
    let lostLength = lostSoSad.length;
    for (let i = 0; i < lostSoSad.length; i++) {
        if (map.get(lostSoSad[i] - 1)) {
            map.set(lostSoSad[i]-1, 0);
            lostLength--;
        } else if (map.get(lostSoSad[i] + 1)) {
            map.set(lostSoSad[i]+1, 0);
            lostLength--;
        } 
        if (lostLength === 0) break;
    }
    return n - lostLength;
}