//  A(65) ~ Z(90)  a(97) ~ z(122)
function solution(s, n) {
    let result = '';
    const isOutOfRange = (c) => ((c <= 90 && c + n > 90) || (c + n > 122));
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += s[i];
            continue;
        }
        
        let nextCharCode = +s[i].charCodeAt();
        if (isOutOfRange(nextCharCode)) nextCharCode -= 26; // a-z length
        result += String.fromCharCode(nextCharCode + n);
    }
    return result;
}