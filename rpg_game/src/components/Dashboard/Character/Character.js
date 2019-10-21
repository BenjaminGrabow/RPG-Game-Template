import React from 'react';
import characterOne from "../../Node/images/character_one";
import characterTwo from "../../Node/images/character_two";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCharacter, chooseCharacter } from "../../store/actions/characterActions";

const StyledCharacter = styled.div`

`;

class Character extends Component {

  render() { 
    return ( 
      <StyledCharacter>
        <h1>Choose your character to begin a session</h1>
        <img src={characterOne} alt="character one" onClick={(this.props.chooseCharacter(playerOne))}/>
        <img src={characterTwo} alt="character two" onClick={(this.props.chooseCharacter(playerTwo))}/>        
      </StyledCharacter>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    grid: state.character.character
  };
};

export default connect(mapStateToProps, {chooseCharacter })(Character);
