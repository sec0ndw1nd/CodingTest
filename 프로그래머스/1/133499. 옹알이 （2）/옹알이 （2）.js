function solution(babbling) {
    const speakablePattern = /^(aya|ye|woo|ma)+$/;
    const repeatPattern = /(aya|ye|woo|ma)\1/;

    return babbling.reduce((acc, word) => {
        if (speakablePattern.test(word) && !repeatPattern.test(word)) {
            acc++;
        }
        return acc;
    }, 0);
}