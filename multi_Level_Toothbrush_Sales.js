function solution(enroll, referral, seller, amount) {
    const profit = {}; // 이익
    const referralMap = {}; // 셀러가 누구한테 추천받았는지 저장

    // 각 셀러의 이름(key)에 대한 이익 초기화
    enroll.forEach(name => {
        profit[name] = 0;
    });

    // 추천인 관계 ('-' => 추천인 X)
    enroll.forEach((name, i) => {
        referralMap[name] = referral[i] === '-' ? null : referral[i];
    });

    // 각 셀러에 대해 이익을 계산하고 분배
    function distribute(seller, amount) {
        let curSeller = seller;
        let profitToShare = amount * 100;  // 판매 이익 (칫솔 한 개당 100원)

        while (curSeller !== null) {
            const referralProfit = Math.floor(profitToShare * 0.1);  // 추천인 10%
            profit[curSeller] += profitToShare - referralProfit;  // 셀러 90%

            // 추천인에게 전달할 금액이 0일 때
            if (referralProfit === 0) break;

            // 다음 셀러를 추천인으로 변경 
            curSeller = referralMap[curSeller];
            // 이익 10%
            profitToShare = referralProfit;
        }
    }

    // 각 판매 기록에 대해 이익 분배
    seller.forEach((name, idx) => {
        distribute(name, amount[idx]);
    });

    // 셀러들 순서에 맞춰 각각 이익을 배열로 return
    return enroll.map(name => profit[name]);
}
