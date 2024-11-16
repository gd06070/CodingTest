function solution(record) {
    const result = [];
    const obj = {}; // 유저 아이디와 닉네임을 매핑할 객체 생성
    const test = record.map(element => element.split(' '));
    //test[i][0] : Enter, Leave, Change
    // test[i][1] : 유저 아이디, test[i][2] : 닉네임

    // 닉네임 change
    test.forEach(element => {
        if (element.length === 3) { //leave 가 아닌 상황은 배열길이가 모두 3임
            obj[element[1]] = element[2];
        }
    });

    test.forEach(element => {
        if (element[0] === 'Enter') {
            result.push(`${obj[element[1]]}님이 들어왔습니다.`);
        } else if (element[0] === 'Leave') {
            result.push(`${obj[element[1]]}님이 나갔습니다.`);
        }
    });

    return result;
}
