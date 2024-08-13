function solution(num) {
    if (num === 1) return 0;
    
    let n = num;
    let count = 0;
    while (n > 1) {
        n = n%2 ? (n*3)+1 : n/2;
        count++;
        if (count >= 500) return -1;
    }
    return count;
}