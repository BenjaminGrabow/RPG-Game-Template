import React from 'react';

export default class Grid extends React.Component {
    state = { 
      grid = []
    }

    componentDidMount = () => {
     const newGrid = createGrid();

     this.setState({
      grid: newGrid
     });
    };

  render() { 
    return ( 

     );
  }
}
 
let grid = [];
rows = 20;
cols = 20;

const createGrid = () => {
for (let i = 0; i < rows; i++) {
  currentRow = [];
for (let j = 0; j < cols; j++) {
  currentRow.push(createNode(i,j));
}
grid.push(currentRow);
}

for (let i = 0; i < rows; i++) {
for (let j = 0; j < cols; j++) {
  addNeighbors(i, j)
}
}
};

const createNode = (i, j) => {
 return {
   i: i,
   j: j,
   start: start, // create start point
   end: end, // create start point
   neighbors: []
   // add other neccessary key value pairs for more functionality
 }
};

const addNeighbors = (i, j) => {
if (i < cols -1) {
  grid[i][j].neighbors.push(grid[i + 1][j]);
}
if (i > 0) {
  grid[i][j].neighbors.push(grid[i - 1][j]);  
}
if (j < rows -1) {
  grid[i][j].neighbors.push(grid[i][j + 1]);
}
if (j > 0) {
    grid[i][j].neighbors.push(grid[i][j - 1]);
}
};
