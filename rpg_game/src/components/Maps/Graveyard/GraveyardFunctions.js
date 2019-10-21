const rows = 10;
const cols = 15;

const createGraveyard = (grid) => {
  for (let i = 0; i < rows; i++) {
    const currentRow = [];
    for (let j = 0; j < cols; j++) {
      currentRow.push(createNode(i, j));
    }
    grid.push(currentRow);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      addNeighbors(grid, i, j);
    }
  }

  return grid;
};

const createNode = (i, j) => {
  return {
    i: i,
    j: j,
    start: i === 0 && j === 0, // create start point
    //  end: end, // create end point
    neighbors: [],
    // add other neccessary key value pairs for more functionality
  };
};

const addNeighbors = (grid, i, j) => {
  if (i < rows - 1) {
    grid[i][j].neighbors.push(grid[i + 1][j]);
  }
  if (i > 0) {
    grid[i][j].neighbors.push(grid[i - 1][j]);
  }
  if (j < cols - 1) {
    grid[i][j].neighbors.push(grid[i][j + 1]);
  }
  if (j > 0) {
    grid[i][j].neighbors.push(grid[i][j - 1]);
  }
};

export default createGraveyard;
