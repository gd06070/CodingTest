const strList = ['apple', 'banana', 'cherry']
const queryList = ['banana', 'kiwi', 'melon', 'apple'];

//문자열 해싱 
function hash(str) {
    const p = 31;
    const m = 1000000007;
    
    let total = 0;
    for (let s of str) {
        let v = s.charCodeAt(0) - 96;
        total = (v + (total * p)) % m; //주어진 문자열 해싱 방법 식 사용
    }
    return total;
}

function solution(strList, queryList) {
    const result = [];
    const hashStr = strList.map((str) => hash(str)); //strList를 해싱
    
    let r = false; //default : false 
    
    queryList.forEach(element => {
        const hashQuery = hash(element);
        if (hashStr.includes(hashQuery)) { result.push(!r) } 
        //queryList 문자열들이 strList에 있으면 true push
        else { result.push(r) }
    });

    return result
}
