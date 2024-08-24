function solution(survey, choices) {
    const hash = {};
    for (let i = 0; i < survey.length; i++) {
        const [t1, t2] = survey[i].split('');
        if (choices[i] < 4) hash[t1] = (hash[t1] || 0) + 4 - choices[i];
        else if (choices[i] > 4) hash[t2] = (hash[t2] || 0) + choices[i] - 4;
    }
    
    return ['RT', 'CF', 'JM', 'AN'].map((t) => {
        const [t1, t2] = t.split('');
        return (hash[t1] || 0) >= (hash[t2] || 0) ? t1 : t2;
    }).join('');
}