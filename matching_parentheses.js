const s = '(())()'
// const s = '((())()'
function solution(s) {
    const stack = []
    const arr = Array.from(s)

    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] === '(' ) {
            stack.push(arr[i]) 
        } else {
            if (stack.length === 0 ) {
                return false
             } else {
                stack.pop()
             } 
        } 
    }
    return stack.length  === 0
}

console.log(solution(s))
