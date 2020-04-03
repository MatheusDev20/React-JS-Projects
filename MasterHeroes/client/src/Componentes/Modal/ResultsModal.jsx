import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import resultsImage from '../../assets/wolverine.png'
import {Link} from 'react-router-dom'


function RulesModal({isOpen,score,newGame}) {

const Modal = styled.div`
  display: ${isOpen ? 'block' : 'none'};
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`
return (
<Modal>
  <div className="modal-content">
    <h6 className="rules-title">Congratulations</h6>
    <h6 className="results">Your Score: <span style={{color:'darkblue', fontSize:'50px'}}>{score}</span></h6>
    <h6 className="results">HIT %: <span style={{color:'darkblue',fontSize:'50px'}}>{(score/200)*100}%</span></h6>
      <img className="rules-image" alt="hulk" src={resultsImage}/>
      <a href="https://master-heroes-game.netlify.com">
        <Button 
        style={{marginLeft:'40%'}}>
        Back to Start
        </Button>
      </a>
  </div>
</Modal>
)
}
export default RulesModal
