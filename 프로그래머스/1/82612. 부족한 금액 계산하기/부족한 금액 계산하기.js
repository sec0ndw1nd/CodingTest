function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i < count+1; i++) {
        total += price * i;
    }
    const result = money - total;
    return result < 0 ? -result : 0;
}