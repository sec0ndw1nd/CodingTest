function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, i) => acc += signs[i] ? absolutes[i] : -absolutes[i], 0);
}