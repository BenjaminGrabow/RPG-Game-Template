import React from "react";
import Node from "./Node/Node";
import grass from "./grass.jpg"
import styled from "styled-components";

const StyledAStar = styled.div`
  display: flex;

  .grid {
  background-image: url(${grass});
  }

  .node {
    /* border: 0.1rem solid #3f51b5; */
    width: 4rem;
    height: 4rem;
  }
`;

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
      mouseIsPressed: false
    };
  }
  componentDidMount = () => {
    const newGrid = createGrid();
    console.log(newGrid);
    this.setState({
      grid: newGrid
    });

    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        // down
        if (playerPosition.i + 1 !== rows) {
          const positionDown = grid[playerPosition.i + 1][playerPosition.j];
          if (playerPosition.neighbors.includes(positionDown) && !positionDown.treeOne && !positionDown.treeTwo && !positionDown.treeThree) {
            const newGrid = movePlayer(
              this.state.grid,
              playerPosition.i + 1,
              playerPosition.j
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      case 37:
        // left
        if (playerPosition.j !== 0) {
          const positionLeft = grid[playerPosition.i][playerPosition.j - 1];
          if (playerPosition.neighbors.includes(positionLeft) && !positionLeft.treeOne && !positionLeft.treeTwo && !positionLeft.treeThree) {
            const newGrid = movePlayer(
              this.state.grid,
              playerPosition.i,
              playerPosition.j - 1
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      case 39:
        // right
        if (playerPosition.j + 1 !== cols) {
          const positionRight = grid[playerPosition.i][playerPosition.j + 1];
          if (playerPosition.neighbors.includes(positionRight) && !positionRight.treeOne && !positionRight.treeTwo && !positionRight.treeThree) {
            const newGrid = movePlayer(
              this.state.grid,
              playerPosition.i,
              playerPosition.j + 1
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      case 38:
        // up
        if (playerPosition.i !== 0) {
          const positionUp = grid[playerPosition.i - 1][playerPosition.j];
          if (playerPosition.neighbors.includes(positionUp) && !positionUp.treeOne && !positionUp.treeTwo && !positionUp.treeThree) {
            const newGrid = movePlayer(
              this.state.grid,
              playerPosition.i - 1,
              playerPosition.j
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <StyledAStar>
        <table className="grid">
          <tbody>
            {this.state.grid
              ? this.state.grid.map((item, i) => {
                  let entry = item.map((element, j) => {
                    return (
                      <Node
                        key={j}
                        i={element.i}
                        j={element.j}
                        start={element.start}
                        treeOne={element.treeOne}
                        treeTwo={element.treeTwo}
                        treeThree={element.treeThree}
                        goldOne={element.goldOne}
                        grave={element.grave}
                        // end={element.end}
                        // wall={element.wall}
                      />
                    );
                  });
                  return <tr key={i}>{entry}</tr>;
                })
              : null}
          </tbody>
        </table>
      </StyledAStar>
    );
  }
}

const grid = [];
const rows = 10;
const cols = 15;
let playerPosition;

const createGrid = () => {
  for (let i = 0; i < rows; i++) {
    const currentRow = [];
    for (let j = 0; j < cols; j++) {
      currentRow.push(createNode(i, j));
    }
    grid.push(currentRow);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      addNeighbors(i, j);
    }

    playerPosition = grid[0][0];
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
    treeOne: i === 0 && j === 5 || i === 0 && j === 6 || i === 1 && j === 5 || i === 0 && j === 7 || i === 1 && j === 6 || i === 1 && j === 7,
    treeTwo: i === 5 && j === 10 || i === 5 && j === 11 || i === 5 && j === 12,
    treeThree: i === 8 && j === 12 || i === 8 && j === 13 || i === 9 && j === 13,
    grave: i === 0 && j === 8,
    goldOne: i === 0 && j === 9,
    // add other neccessary key value pairs for more functionality
  };
};

const addNeighbors = (i, j) => {
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

const movePlayer = (grid, i, j) => {
  grid[playerPosition.i][playerPosition.j].start = false;
  playerPosition = grid[i][j];
  grid[i][j].start = true;
  console.log(grid);
  return grid;
};
