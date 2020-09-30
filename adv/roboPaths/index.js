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
};
