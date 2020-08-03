function bfs(graph, r) {
  var nodesLen = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[r] = 0;

  let queue = [r];
  let current;

  while (queue.length != 0) {
    current = queue.shift();

    let curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (let j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(exBFSGraph, 1));
