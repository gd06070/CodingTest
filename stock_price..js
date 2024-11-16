function solution(prices) {
    const pricesLen = prices.length;
    const cnt = new Array(pricesLen).fill(0);
    const stack = [];

    for (let i = 0; i < pricesLen; i++) {
        while (stack.length > 0) {
            const top = stack[stack.length - 1]; 
            if (prices[top] > prices[i]) { 
                const idx = stack.pop();
                cnt[idx] = i - idx; 
            } else {
                break
            }
        }
        stack.push(i); 
    }

    while (stack.length > 0) {
        const idx = stack.pop();
        cnt[idx] = pricesLen - 1 - idx;
    }

    return cnt;
}
