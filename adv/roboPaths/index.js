// how many possible paths can a robot travel to a designated tile, without returning to a tile twice

var MakeGrid = function (n) {
  var grid = [];
  for (let i = 0; i < n; i++) {
    grid.push([]);
    for (let j = 0; j < n; j++) {
      grid[i].push(false);
    }
  }

  grid.toggle = function (i, j) {
    grid[i][j] = !grid[i][j];
  };

  grid.visited = function (i, j) {
    return grid[i][j];
  };

  return grid;
};

var pathsCounter = function (n) {
  var paths = 0;
  const grid = MakeGrid(n);

  var findPaths = function (i, j) {
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return;
    }
    if (grid.visited(i, j)) {
      return;
    } else {
      grid.toggle(i, j);
      findPaths(i, j + 1);
      findPaths(i + 1, j);
      findPaths(i, j - 1);
      findPaths(i - 1, j);
      grid.toggle(i, j);
    }
  };
  findPaths(0, 0);
  return paths;
};
