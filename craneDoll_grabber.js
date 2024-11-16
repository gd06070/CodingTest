function solution(board, moves) {
    const stack = []
    const movesLen = moves.length;
    const boardLen = board.length;
    
    let cnt = 0;
    // console.log(board[0]) => [0 0,0,0,0]
    for(let i = 0; i < movesLen; i++) {
        const c = moves[i]-1;
        
        for (let  j = 0; j < boardLen; j++) {
            if (board[j][c] !== 0) {
                stack.push(board[j][m]);
                board[j][c] = 0
                
                const top = stack[stack.length - 1];
                const top2 = stack[stack.length - 2];
                
                if ((stack.length > 1 && top) === top2) {
                    stack.pop();
                    stack.pop();
                    
                    cnt += 2;
                }
                break
            } 
        }
    }
    return cnt
}
