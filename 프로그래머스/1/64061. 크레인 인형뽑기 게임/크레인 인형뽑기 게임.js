function solution(board, moves) {
    let count = 0;
    const stack = [];
    
    const popFrom = (n) => {
        for (let i = 0; i < board[0].length; i++) {
            if (!board[i][n - 1]) continue;
            const value = board[i][n - 1];
            board[i][n - 1] = 0;
            return value;
        }
        return 0;
    }
    
    for (let i = 0; i < moves.length; i++) {
        const picked = popFrom(moves[i]);
        if (!picked) continue;
        
        stack.push(picked);
        if (stack.at(-1) === stack.at(-2)) {
            stack.pop();
            stack.pop();
            count++;
        }
    }
    return count * 2;
}