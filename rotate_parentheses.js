function solution(s) {
    const n = s.length;
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
        const stack = [];
        let chk = true;

        for (let j = 0; j < n; j++) {
            if (s[(i+j) % n] === '[' || s[(i+j) % n] === '{' || s[(i+j) % n] === '(') {
                stack.push(s[(i+j) % n]);
            } else {
                if (stack.length === 0) {
                    chk = false;
                    break
                }
                const top = stack[stack.length - 1];
                if (s[(i+j) % n] === ']' && top === '[') {
                    stack.pop();
                } else if (s[(i+j) % n] === ')' && top === '(') {
                    stack.pop();
                } else if (s[(i+j) % n] === '}' && top === '{') {
                    stack.pop();
                } else {
                    chk = false;
                    break
                }
            }
        }

        if (chk && stack.length === 0) {
            cnt += 1;
        }
    }

    return cnt
}
