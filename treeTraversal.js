const nodes = [1, 2, 3, 4, 5, 6, 7];

class Node { 
	constructor(value) {
		this.value = value; //노드 값 설정
		this.left = null; // 왼쪽 노드 
		this.right = null; //오른쪽 노드
	}
}

function binaryTree(nodes, i = 0) {
	if (i >= nodes.length) return null; //노드가 없을때

    const currentNode = new Node(nodes[i]);
    currentNode.left = binaryTree(nodes, 2 * i + 1);
    currentNode.right = binaryTree(nodes, 2 * i + 2);

    return currentNode;
}

function preorder(nodes) {
    if (nodes === null) return [];
    return [nodes.value, ...preorder(nodes.left), ...preorder(nodes.right)]
}

function inorder(nodes) {
    if (nodes === null) return [];
    return [...inorder(nodes.left), nodes.value, ...inorder(nodes.right)]
}

function postorder(nodes) {
    if (nodes === null) return [];
    return [...postorder(nodes.left), ...postorder(nodes.right), nodes.value]
}

function solution(nodes) {
    const root = binaryTree(nodes); //이진 트리 구성
    const result = (r) => r(root).join(" "); //return 조건에 맞게 변환

    return [result(preorder), result(inorder), result(postorder)];
}

console.log(solution(nodes));
