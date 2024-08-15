function solution(numbers) {
    const hash = {};
    const result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (hash[numbers[i]]) continue;
        
        hash[numbers[i]] = true;
        for (let j = i+1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    return Array.from(new Set(result)).sort((a, b) => a - b);
}