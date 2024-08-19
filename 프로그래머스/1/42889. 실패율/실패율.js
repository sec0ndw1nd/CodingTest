function solution(N, stages) {
    const failureRates = [];
    let prevClear = stages.length;
    for (let currentStage = 1; currentStage < N+1; currentStage++) {
        let failed = 0;
        for (let i = 0; i < stages.length; i++) {
            if (stages[i] - currentStage === 0) failed++;
        }
        failureRates.push(failed / prevClear);
        prevClear -= failed;
    }
    return failureRates.map((rate, i) => [rate, i+1]).sort((a, b) => b[0] - a[0]).map((v) => v[1]);
}