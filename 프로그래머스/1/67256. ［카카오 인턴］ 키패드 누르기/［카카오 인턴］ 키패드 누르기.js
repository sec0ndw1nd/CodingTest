function solution(numbers, hand) {
    const getPosition = (key) => {
        switch (key) {
            case '*': return [0, 3];
            case 0: return [1, 3];
            case '#': return [2, 3];
            default: return [(key + 2) % 3, Math.floor((key + 2) / 3) - 1];
        }
    }
    
    let [onL, onR] = ['*', '#'];
    return numbers.map((n) => {
        if (n === 1 || n === 4 || n === 7)  {
            onL = n;
            return 'L';
        }
        else if (n === 3 || n === 6 || n === 9) {
            onR = n;
            return 'R';
        }
        
        const targetPos = getPosition(n);
        const lPos = getPosition(onL);
        const rPos = getPosition(onR);
        const lToTarget = Math.abs(targetPos[0] - lPos[0]) + Math.abs(targetPos[1] - lPos[1]);
        const rToTarget = Math.abs(targetPos[0] - rPos[0]) + Math.abs(targetPos[1] - rPos[1]);
        if (lToTarget === rToTarget) {
            if (hand === 'left') {
                onL = n;
                return 'L'
            }
            onR = n;
            return 'R'
        } else if (lToTarget > rToTarget) {
            onR = n;
            return 'R';
        }
        onL = n;
        return 'L';
    }).join('');
}