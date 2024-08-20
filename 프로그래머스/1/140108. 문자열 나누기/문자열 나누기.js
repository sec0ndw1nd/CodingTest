function solution(s) {
    let splitCount = 0;
    let xIndex = 0;
    let [xCount, notXCount] = [0, 0];
    for (let i = 0; i < s.length; i++) {
        if (s[xIndex] === s[i]) xCount++;
        else notXCount++;
 
        if (xCount === notXCount) {
            xIndex = i + 1;
            xCount = 0;
            notXCount = 0;
            
            if (i+1 !== s.length) splitCount++;
        }
    }
    return splitCount + 1;
}