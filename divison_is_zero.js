function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) {
            arr = arr.slice(0, query[i] + 1);
        } else {
            arr = arr.slice(query[i]);
        }
    }
    return arr;  
}

/* 오답 코드
function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (arr.includes(query[i])) {
            if (i % 2 === 0) {
                arr.pop()
            } else {
                arr.shift()
            }
        }
        
    }
    return arr
} 
*/
