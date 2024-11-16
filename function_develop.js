function solution(progresses, speeds) {
    const q = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    const cntArr = [];
    
    let cnt = 1;
    let front = q[0];
    
    for (let i = 1; i < q.length; i++) {
        if (front >= q[i]) { 
            cnt += 1
        } else {
            cntArr.push(cnt) //cnt 1로 초기화 하기 전에 먼저 push
            cnt = 1
            front = q[i]
        }
    }
    
    cntArr.push(cnt);
    
    return cntArr
}
