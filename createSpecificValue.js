const arr = [1,2,3,4,8];
const target = 6;

function Solution(arr, target) {
    const hashMap = new Map();
    
    let r = false; // 두 숫자의 합이 target과 일치하는 경우를 기록할 변수

    arr.forEach((element) => {
        const t = target - element; // 현재 요소와 target을 만들기 위해 필요한 숫자를 계산
        
        if (hashMap.has(t)) {
            r = true; // hashMap에 있는 경우, target을 만드는 두 숫자를 찾은 것
        }
        hashMap.set(element, true) // 현재 요소를 hashMap에 추가
        
    });
    
    return r
}

Solution(arr, target)
