function solution(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(+s[i])) {
            result += s[i];
            continue;
        }
        
        let dummy = s[i++];
        for (i; i < s.length; i++) {
            dummy += s[i];
            const index = words.indexOf(dummy);
            if (index >= 0) {
                result += index;
                break;
            }
        }
    }
    return +result;
}