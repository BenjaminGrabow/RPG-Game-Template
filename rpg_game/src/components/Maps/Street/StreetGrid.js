import React from "react";
import Node from "./Node/StreetNode";
import street from "../images/street.png";
import styled from "styled-components";
import createStreet from "./Street";
import connect from "react-redux";

const StyledStreetGrid = styled.div`
  display: flex;

  .grid {
    background-image: url(${street});
  }

  .node {
    width: 2rem;
    height: 2rem;
  }
`;

class StreetGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
    };
  }
  componentDidMount = () => {
      const newGrid = createStreet();
  
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
    switch (e.keyCode) {
      case 40:
        // down
        if (playerPosition.i + 1 !== rows) {
          const positionDown = grid[playerPosition.i + 1][playerPosition.j];
          if(positionDown.toForest) {
            this.props.history.push("/forest")
          }
          if (
            playerPosition.neighbors.includes(positionDown) &&
            !positionDown.treeOne &&
            !positionDown.treeTwo &&
            !positionDown.treeThree
          ) {
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
          if(positionLeft.toForest) {
            this.props.history.push("/forest") 
          }
          if (
            playerPosition.neighbors.includes(positionLeft) &&
            !positionLeft.treeOne &&
            !positionLeft.treeTwo &&
            !positionLeft.treeThree
          ) {
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
          if(positionRight.toForest) {                     
            this.props.history.push("/forest")  
          }
          if (
            playerPosition.neighbors.includes(positionRight) &&
            !positionRight.treeOne &&
            !positionRight.treeTwo &&
            !positionRight.treeThree
          ) {
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
          if (
            playerPosition.neighbors.includes(positionUp) &&
            !positionUp.treeOne &&
            !positionUp.treeTwo &&
            !positionUp.treeThree
          ) {
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
      <StyledStreetGrid>
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
                        goldStatue={element.goldStatue}
                        skeleton={element.skeleton}
                        toForest={element.toForest}
                      />
                    );
                  });
                  return <tr key={i}>{entry}</tr>;
                })
              : null}
          </tbody>
        </table>
        <NavLink to="/forest">FOREST</NavLink>
      </StyledStreetGrid>
    );
  }
}

const mapStateToProps = state => {
  return {
    grid: state.grid.grid 
  }
};
 
export default connect(mapStateToProps)(StreetGrid);

const rows = 10;
const cols = 15;
let playerPosition;
let grid;

const movePlayer = (grid, i, j) => {
  grid[playerPosition.i][playerPosition.j].start = false;
  playerPosition = grid[i][j];
  grid[i][j].start = true;
  return grid;
};
