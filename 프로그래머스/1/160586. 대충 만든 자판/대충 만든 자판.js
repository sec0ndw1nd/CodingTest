function solution(keymap, targets) {
    const hash = {};
    for (let i = 0; i < keymap.length; i++) {
        hash[i] = {};
        for (let j = 0; j < keymap[i].length; j++) {
            if (typeof hash[i][keymap[i][j]] !== 'undefined') continue;
            hash[i][keymap[i][j]] = j + 1;
        }   
    }
    
    return targets.map((target) => {
        let sum = 0;
        for (let z = 0; z < target.length; z++) {
            const keyIndex = [];
            for (let i = 0; i < keymap.length; i++) {
                if (typeof hash[i][target[z]] !== 'undefined') keyIndex.push(hash[i][target[z]]);
            }
            if (keyIndex.length > 0) sum += Math.min(...keyIndex);
            else {
                sum = -1;
                break;
            }
        }
        return sum;
    });
}