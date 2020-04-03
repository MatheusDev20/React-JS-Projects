import React, {useState} from 'react';
import './Game.css'
import iconPoints from '../../assets/points.png'
import Card from '../Card/Card'
import Button from '../Button'
import Result from '../Modal/ResultsModal'
let finsh = false;
function Game()
 {
  const [points, setPoints] = useState(0)
  const [total, setTotal] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [end, setEnd] = useState(false)
  const handleHit = () => {
    let hit = points + 20
    setPoints(hit)
  }
  const handleFail = () => {
    let fail = points -10
    if(points > 0){
    setPoints(fail)
    }
  }
  const limit = () => {
    setTotal(total + 1)
  }
  if(total > 9) {
    finsh = true
  }
  const handleResult = () => {
    setIsOpen(true)
    setEnd(true)
    setTotal(0)
  }
  return (  
    <div className="game-wrapper">
      <Result isOpen={isOpen} score={points}/>
        <div className="wrapper-countodown-points">
            <section className="section-points">
             <img className="icon-points" src={iconPoints} alt="icon-points"/>
                <span className="points-label">Score  :
                  <span style={{color:'#fff', fontFamily:'Roboto'}} className="points"> {points} </span>
                </span>
              </section>
              <section 
              style={{display: `${finsh ? 'none' : 'block'}`}}
              className="cards-left">
              Cards Left : <span style={{fontFamily:'Roboto', color: '#fff'}}>
              { 10 - total}</span>
              </section>
       </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card
            end={end}
            total={total}
            finish={finsh}
            limitCards={limit}
            handleFail={handleFail}
            handleHit={handleHit}
            handleResult={handleResult}
            />    
          </div>
        </div>
      </div>
      <Button
      onClick={ e => handleResult()}
      style={{marginLeft:'35%', marginTop:'15px', width:'300px', display:`${finsh ? 'block' : 'none'}`}}>
      <span style={{fontSize:'30px', fontFamily:'Permanent Marker'}}>Finish</span>
      </Button>

    </div>
  );
}
export default Game