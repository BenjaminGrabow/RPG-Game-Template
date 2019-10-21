import React from 'react';
import Grid from "../../Grid/Grid"
import Node from "../../Grid/Node";
import connect from "react-redux";

class Street extends Component {
  
  render() { 
    return ( 
      <Grid>
        <Node/>
      </Grid>
     );
  }
}

const mapStateToProps = state => {
  return {
    grid: state.grid.grid 
  }
};
 
export default connect(mapStateToProps)(Street);