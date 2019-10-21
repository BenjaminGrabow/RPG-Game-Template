import React from "react";
import Node from "../Node/Node";
// import grass from "../images/background_two.png"
import styled from "styled-components";
import { withRouter, NavLink } from 'react-router-dom';

const StyledGrid = styled.div`
  display: flex;

  /* .grid {
  background-image: url(${grass});  
  } */

  .node {
    width: 2rem;
    height: 2rem;
  }
`;


const Grid = (props) => {
  const { grid, background } = props;
  
  return ( <StyledGrid>
    <table className="grid" style={{backgroundImage: `url(${background})`}}>
      <tbody>
        {grid
          ? grid.map((item, i) => {
              let entry = item.map((element, j) => {
                return (
                  <Node
                    key={j}
                    i={element.i}
                    j={element.j}
                    start={element.start}
                    // FOR FOREST
                    treeOne={element.treeOne}
                    treeTwo={element.treeTwo}
                    treeThree={element.treeThree}
                    goldOne={element.goldOne}
                    grave={element.grave}
                    toStreet={element.toStreet}
                    //FOR STREET
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
  </StyledGrid> );
}
 
export default Grid;
