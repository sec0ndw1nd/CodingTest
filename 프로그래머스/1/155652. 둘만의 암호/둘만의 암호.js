function solution(s, skip, index) {
    let lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < skip.length; i++) {
        lowerCases = lowerCases.replace(skip[i], '');
    }
    
    const hash = {};
    for (let i = 0; i < lowerCases.length; i++) {
        hash[lowerCases[i]] = i;
    }
    
    return s.split('').map((v) => {
        const i = (hash[v] + index) % lowerCases.length
        return lowerCases[i];
    }).join('');
}
