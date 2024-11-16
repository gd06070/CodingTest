function solution(want, number, discount) {
    const obj = {}; 
    
    let cnt = 0; // 정현이가 만족하는 조건에 해당하는 회원등록 날짜의 총 일수 세는데 쓰일거 
    
    for (let i = 0; i < want.length; i++) {
    // obj => { banana: 3, apple: 2, rice: 2, pork: 2, pot: 1 }
        obj[want[i]] = number[i];
    }

    // 예제로 치면 discount.length - 9는 5가 나오는데 이는 14일동안 10일이 몇 번 가능?한지 계산해서
    // 가능한 10일 뭉텅이 개수동안 반복 (1~10일, 2~11일, 3~12일, 4~13일, 5~14일 해서 뭉텅이는 5개 나옴)
    for (let i = 0; i < discount.length - 9; i++) {
        const currentCnt = {}; // 현재 뭉텅이의 제품 개수를 담아놓을 객체
        
        // 뭉텅이에 해당하는 제품 수량을 카운트
        for (let j = 0; j < 10; j++) {
		        //10일 뭉텅이들의 각각 해당하는 10개의 discount 제품들
            const product = discount[i + j];
            
            // 뭉텅이들의 해당하는 제품들이 있다면 현재 뭉텅이의 제품 개수에 1개 늘림
            currentCnt[product] = (currentCnt[product] || 0) + 1; 
            //Product: chicken, Count: 1
						//Product: apple, Count: 1
						//Product: apple, Count: 2
        }
        
        // 현재 해당하는 뭉텅이의 제품 개수가 구매하고 싶은 개수(number)와 같은지 확인
        let r = true;
        for (const k in obj) {
            if (currentCnt[k] !== obj[k]) {
                r = false;
                break;
            }
        }
        
        if (r) {
            cnt++;
        }
    }

    return cnt;
}
