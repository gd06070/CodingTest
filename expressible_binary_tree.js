function solution(numbers) {
  let answer = [];

  function nodeCount(binary) {
    let depth = 0; // 이진트리의 개수에 맞추기 위해 더미 노드(0) 추가
    let cnt = 0; // 필요한 노드 개수 세는 거

    while (binary.length > cnt) {
      cnt += 2 ** depth; // 현재 depth 에서 가능한 노드 개수 추가
      depth++; 
    }

    return cnt; // 필요한 노드 수 return
  }

  // 이진 트리의 구조 확인
  function chkTree(binary) {
    if (!binary.length) return true;

    let parentNode = Math.floor(binary.length / 2); // 해결 방법에 작성한 중위 순회의 root 인덱스 계산
	
    if (binary[parentNode] === '0') {
      for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') return false; // 자식 노드 = 1 => false 
      }
    }

    let leftTree = binary.slice(0, parentNode);
    let rightTree = binary.slice(parentNode + 1);

    return chkTree(leftTree) && chkTree(rightTree);
  }

  for (let num of numbers) {
    let binary = num.toString(2); // 이진수 -> String
    let cnt = nodeCount(binary); // 노드 개수 계산

    binary = binary.padStart(cnt, '0'); // 더미 노드(0)으로 채워서 길이 맞춰줌
    answer.push(chkTree(binary) ? 1 : 0);
  }

  return answer;
}
