function find(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find(parent, parent[x]); 
    }
    return parent[x];
  }
  
  function union(parent, x, y) {
    const xRoot = find(parent, x);
    const yRoot = find(parent, y);
  
    if (xRoot === yRoot) {
        return 0;
    }
  
    if (xRoot < yRoot) {
      parent[yRoot] = xRoot;
    } else {
      parent[xRoot] = yRoot;
    }
  }
  
  function solution(k, operations) {
    const parent = new Array(k).fill().map((_, i) => i); 
  
    for (const [op, x, y] of operations) {
      if (op === 'u') {
        union(parent, x, y);
      } else {
        find(parent, x);
      }
    }
  
    const rootNodes = new Set();
    for (let i = 0; i < k; i++) {
      rootNodes.add(find(parent, i));
    }
    return rootNodes.size; 
  }
