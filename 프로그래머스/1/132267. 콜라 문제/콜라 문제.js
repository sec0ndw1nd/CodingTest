function solution(a, b, n) {
    let stock = n;
    let result = 0;

    while(stock >= a) {
        let take = Math.floor(stock / a) * b;
        result += take;
        stock = take + stock % a;
    }
    return result;
}