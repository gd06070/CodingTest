const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);

function solution(n, k) {
    const q = [];
    const arr = [];
    let cnt = 1;

    for(let i = 0; i < n; i++) {
        q.push(i+1);
    } 

    while(q.length) {
        cnt % k === 0 ? arr.push(q.shift()) : q.push(q.shift());
        cnt += 1;
    }
    console.log(`<${arr.join(', ')}>`);
}

solution(n,k);
