const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const count = 0;

function linearSearch(arr, num, count = 0) {
  let result = {
    count,
    index: -1
  };

  for (let i = 0; i < arr.length; i++) {
    result.count++;

    if (arr[i] === num) {
      result.index = i;
      return result;
    }
  }

  return result;
}

function binarySearch(arr, num, count = 0) {
  let result = {
    count,
    index: -1
  };

  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;

  while(found === false && start <= end) {
    result.count++;
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === num) {
      found = true;
      result.index = middle;
      return result;
    }

    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return result;
}

function recursiceBinarySearch(arr, num, start, end, count = 0) {
  let result = {
    count: count + 1,
    index: -1
  };

  let middle = Math.floor((start + end) / 2);

  if (num === arr[middle]) {
    result.index = middle
    return result;
  }

  if (num < arr[middle]) {
    return recursiceBinarySearch(arr, num, start, middle - 1, result.count);
  } else {
    return recursiceBinarySearch(arr, num, middle + 1, end, result.count);
  }
}

const graph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];
graph.h = ['b'];

const hardGraph = {};

hardGraph.a = ['c'];
hardGraph.b = ['d'];
hardGraph.c = ['e'];
hardGraph.d = ['f'];
hardGraph.e = ['g'];
hardGraph.f = ['i'];
hardGraph.g = ['i'];
hardGraph.i = ['j'];
hardGraph.j = ['k'];
hardGraph.k = ['l'];
hardGraph.l = ['m', 'h'];
hardGraph.h = [];
hardGraph.m = [];

const matrixOfHardGraph = [
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0 && queue.length < 50) {
    console.log(queue);
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
}

const shortGraph = {};

shortGraph.a = {b: 2, c: 1};
shortGraph.b = {f: 7};
shortGraph.c = {d: 5, e: 2};
shortGraph.d = {f: 2};
shortGraph.e = {f: 1};
shortGraph.f = {g: 1};
shortGraph.g = {};

function shortPath(graph, start, end) {
  const costs = {};
  const processed = [];
  let neighbors = {};

  Object.keys(graph).forEach(node => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 10000000;
    }
  });

  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];

    Object.keys(neighbors).forEach(neighbor => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }

  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 10000000;
  let lowestNode;

  Object.keys(costs).forEach(node => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

// console.log(linearSearch(arr, 8, count));
// console.log(binarySearch(arr, 8, count));
// console.log(recursiceBinarySearch(arr, 4, 0, arr.length, count));
// console.log(breadthSearch(graph, 'a', 'h'));
// console.log(breadthSearch(hardGraph, 'a', 'f'));
// console.log(shortPath(shortGraph, 'a', 'g'));
