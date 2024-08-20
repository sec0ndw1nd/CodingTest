function solution(s) {
    let [result, i] = [0, 0];

    while (i < s.length) {
        let x = s[i];
        let xCount = 0;
        let notXCount = 0;

        while (i < s.length) {
            if (s[i] === x) xCount++;
            else notXCount++;

            i++;
            if (xCount === notXCount) break;
        }
        result++;
    }
    return result;
}