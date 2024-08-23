function solution(X, Y) {
    const result = [];
    
    const map = new Map();
    for (let i = 0; i < X.length; i++) {
        map.set(+X[i], (map.get(+X[i]) || 0) + 1);
    }
    
    for (let i = 0; i < Y.length; i++) {
        if (map.get(+Y[i])) {
            result.push(Y[i]);
            map.set(+Y[i], map.get(+Y[i]) - 1);
        }
    }
    
    if (!result.length) return '-1';
    const joined = result.sort((a, b) => b - a).join('');
    return +joined ? joined : '0';
}