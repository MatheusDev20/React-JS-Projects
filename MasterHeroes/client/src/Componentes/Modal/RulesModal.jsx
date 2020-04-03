import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import rulesImage1 from '../../assets/hulk.png'
import {Link} from 'react-router-dom'


function RulesModal(props) {
let {isOpen, nickname} = props
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
    <h6 className="rules-title">Welcome to Master Heroes <span style={{color:'#ff4040', marginLeft:'80px'}}>{nickname}</span></h6>
      <img className="rules-image" alt="hulk" src={rulesImage1}/>
      <ul className="rules">
        <li>Each card, three name options</li>
       <li> Each hit + 20 points</li>
       <li> Each failed -10 points </li>
       <li> Total of 10 cards</li>
       <li>Good luck and have fun</li>
      </ul>
      <Link to="/game">
        <Button 
        style={{marginLeft:'40%'}}>
        GOT IT!
        </Button>
      </Link>
  </div>
</Modal>
)
}
export default RulesModal
