class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // 빈 루트 가지고 시작
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) { //노드 유무 확인
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined; // 삽입하려는 노드가 이미 있다면 undefined 리턴
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root, found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

function solution(lst, searchList) {
  const tree = new BinarySearchTree();
  lst.forEach((value) => tree.insert(value)); // lst 값(노드) 트리에 insert

  const result = searchList.map((value) => tree.contains(value)); // searchList에 있는 노드들을 트리에 있는지 탐색
  return result;
}

// const lst = [5, 3, 8, 4, 2, 1, 7, 10];
// const searchList = [1, 2, 5, 6];
const lst = [1, 3, 5, 7, 9];
const searchList = [2, 4, 6, 8, 10];
console.log(solution(lst, searchList));
