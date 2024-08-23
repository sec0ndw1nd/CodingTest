function solution(participant, completion) {
    const hash = {};
    for (let i = 0; i < completion.length; i++) {
        hash[completion[i]] = (hash[completion[i]] || 0) + 1;
    }
    for (let i = 0; i < participant.length; i++) {
        if (!hash[participant[i]]) return participant[i];
        hash[participant[i]]--;
    }
}