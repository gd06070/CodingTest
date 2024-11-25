function solution(n, words) {
    const spoke = new Set();
    
    for (let i = 0; i < words.length; i++) {
        if (spoke.has(words[i]) || (i > 0 && words[i - 1].slice(-1) !== words[i][0])) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        spoke.add(words[i]); 
    }
    return [0, 0];  
}
