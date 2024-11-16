function solution (input) {
    let n = '';
    
    const stack = []
    while(input > 0) {
        stack.push(input % 2)
        // console.log(stack) 
        input = Math.floor(input/2)
    }
    
    for (let i = 0; stack.length > 0; i++) {
        // console.log(stack.pop())
        n += stack.pop()
    }
    
    return n
}
// console.log(solution(10));
