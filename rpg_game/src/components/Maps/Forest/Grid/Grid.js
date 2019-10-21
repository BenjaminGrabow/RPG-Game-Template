import React from "react";
import Node from "../Node/Node";
import grass from "../images/background_two.png"
import styled from "styled-components";
import createForest from "../Forest";
import { withRouter, NavLink } from 'react-router-dom';

const StyledAStar = styled.div`
  display: flex;

  .grid {
  background-image: url(${grass});  
  }

  .node {
    width: 2rem;
    height: 2rem;
  }
`;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
    };
  }
  componentDidMount = () => {
    console.log(this.state.grid)
    const newGrid = createForest();

    this.setState({
      grid: newGrid
    });

    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });

    grid = newGrid;
    playerPosition = grid[0][0];
  };

  handleKeyDown = e => {
    console.log(this.props.location)
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
          if(positionRight.toStreet) {
            this.props.history.push("/");
          }
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
          if(positionUp.toStreet) {
            this.props.history.push("/");
          }
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
                        toStreet={element.toStreet}
                      />
                    );
                  });
                  return <tr key={i}>{entry}</tr>;
                })
              : null}
          </tbody>
        </table>
        <NavLink to="/">FOREST</NavLink>
      </StyledAStar>
    );
  }
}

export default Grid

const rows = 10;
const cols = 15;
let playerPosition;
let grid;

const movePlayer = (grid, i, j) => {
  grid[playerPosition.i][playerPosition.j].start = false;
  playerPosition = grid[i][j];
  grid[i][j].start = true;
  console.log(grid);
  return grid;
};
