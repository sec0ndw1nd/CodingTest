function solution(answers) {
    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2,1,2,3,2,4,2,5];
    const pattern3 = [3,3,1,1,2,2,4,4,5,5];
    let [p1, p2, p3] = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern1[i % pattern1.length]) {
            p1++;
        }
        if (answers[i] === pattern2[i % pattern2.length]) {
            p2++;
        }
        if (answers[i] === pattern3[i % pattern3.length]) {
            p3++;
        }
    }
    
    const max = Math.max(p1, p2, p3);
    const result = [[1, p1], [2, p2], [3,p3]].filter((d) => d[1] === max);
    if (result.length > 1) result.sort((a, b) => a[1] - b[1]);
    return result.map((p) => p[0]);
}