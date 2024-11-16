const fs = require('fs');
const rfs = 'index.txt';

const input = fs.readFileSync(rfs).toString().trim().split('\n');
const N = parseInt(input[0]);
const enq = []; //삽입
const deq = []; //제거
const answer = [];

function solution(N) {
    for (let i = 1; i <= N; i++) {
        const test = input[i];

        if (test.includes('push')) {
            const v = test.split(' ');
            enq.push(v[1]);
        } else if (test === 'pop') {
            if (deq.length === 0) {
                while (enq.length) {
                    deq.push(enq.pop());
                }
            }
            answer.push(deq.length === 0 ? -1 : deq.pop());
        } else if (test === 'size') {
            answer.push(enq.length + deq.length);
        } else if (test === 'empty') {
            answer.push(enq.length + deq.length === 0 ? 1 : 0);
        } else if (test === 'front') {
            if (deq.length === 0) {
                while (enq.length) {
                    deq.push(enq.pop());
                }
            }
            answer.push(deq.length === 0 ? -1 : deq[deq.length - 1]);
        } else if (test === 'back') {
            answer.push(enq.length === 0 ? (deq.length === 0 ? -1 : deq[0]) : enq[enq.length - 1]);
        }
    }
    console.log(answer.join('\n'));
}

solution(N);
