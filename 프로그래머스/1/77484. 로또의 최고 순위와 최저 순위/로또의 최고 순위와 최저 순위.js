function solution(lottos, win_nums) {
    
    
    const hash = {};
    for (let i = 0; i < lottos.length; i++) {
        hash[lottos[i]] = (hash[lottos[i]] || 0) + 1;
    }
    
    let [unknown, same] = [(hash[0] || 0), 0];
    for (let i = 0; i < win_nums.length; i++) {
        if (hash[win_nums[i]]) same++;
    }
    
    const best = (same + unknown < 1) ? 6 : 7 - (same + unknown);
    const worst = (same > 0) ? 7 - same : 6;
    return [best, worst];
}