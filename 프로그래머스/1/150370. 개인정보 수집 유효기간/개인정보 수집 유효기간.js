function solution(today, terms, privacies) {
    const map = new Map();
    for (let i = 0; i < terms.length; i++) {
        const [type, term] = terms[i].split(' ');
        map.set(type, term * 28);
    }
    
    const [ty, tm, td] = today.split('.');
    const todayDays = ty * 28 * 12 + tm * 28 + +td;
    
    return privacies.reduce((acc, curr, i) => {
        const [currentDate, currentType] = curr.split(' ');
        const [cy, cm, cd] = currentDate.split('.');
        const currentDays = cy * 28 * 12 + cm * 28 + +cd;
        if (+map.get(currentType) <= todayDays - currentDays) acc.push(i + 1);
        return acc;
    }, []);
}