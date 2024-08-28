function solution(friends, gifts) {
    const giftMap = new Map();
    const power = new Map();
    const result = {};
    for (let i = 0; i < friends.length; i++) {
        giftMap.set(friends[i], {});
        power.set(friends[i], 0);
        result[friends[i]] = 0;
    }
    
    gifts.forEach((info) => {
        const [from, to] = info.split(' ');
        const giftData = giftMap.get(from);
        giftData[to] = (giftData[to] || 0) + 1;
        
        power.set(from, power.get(from) + 1);
        power.set(to, power.get(to) - 1);
    });
    
    for (let a = 0; a < friends.length - 1; a++) {
        for (let b = a+1 ; b < friends.length; b++) {
            const aToB = giftMap.get(friends[a])?.[friends[b]] || 0;
            const bToA = giftMap.get(friends[b])?.[friends[a]] || 0;
            if (aToB > bToA) result[friends[a]]++;
            else if (aToB < bToA) result[friends[b]]++;
            else {
                const aPower = power.get(friends[a]);
                const bPower = power.get(friends[b]);
                if (aPower > bPower) result[friends[a]]++;
                else if (aPower < bPower) result[friends[b]]++;
            }
        }
    }

    return Math.max(...Object.entries(result).map(([_, v]) => v));
}