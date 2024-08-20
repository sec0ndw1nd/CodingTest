function solution(dartResult) {
    const pattern = /\d+(S|D|T)(\*|#)?/g;
    const numberOnly = /\d+/g;
    const strOnly = /\D+/g;
                                
    const temp = [];
    const result = dartResult.match(pattern);
    for (let i = 0; i < result.length; i++) {
        let point = +result[i].match(numberOnly);
        const [power, opt] = result[i].match(strOnly)[0].split('');
        
        if (power === 'D') point **= 2;
        else if (power === 'T') point **= 3;

        if (opt === '#') point *= -1;
        else if (opt === '*') {
            if (temp[i-1]) temp[i-1] *= 2;
            point *= 2;
        }
        temp.push(point);
    }
    return temp.reduce((acc, curr) => acc += curr);
}