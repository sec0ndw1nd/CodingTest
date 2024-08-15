function solution(s) {
    return s.split(' ').map((word) => {
        return word.split('').map((v, i) => !((i+1) % 2) ? v.toLowerCase() : v.toUpperCase()).join('');
    }).join(' ');
}