import React from 'react';
import { connect } from "react-redux";
import { getCharacter, chooseCharacter } from "../../store/actions/characterActions";

class Character extends Component {

  render() { 
    return (  );
  }
}
 
const mapStateToProps = state => {
  return {
    grid: state.grid.grid
  };
};

export default connect(mapStateToProps, {getCharacter, chooseCharacter })(Character);
