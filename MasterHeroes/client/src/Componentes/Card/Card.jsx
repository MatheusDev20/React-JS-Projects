import React, {useState, useEffect} from 'react';
import './Card.css'
import api from '../../services/api'
import HeroImage from './HeroImage'
import { randomNumber, shufflefunction} from '../../helpers/helpers'
import styled from 'styled-components'
import Loading from 'react-loading'
import all from '../../services/all.json'
var idArray = []

const arrayofIds = () => {
  for(let i=0; i<all.length; i++){
    idArray[i] = all[i].id
  }
}
arrayofIds()
 function Card({handleHit,handleFail,handleResult,limitCards,total,finish}) {
    const [rightHeroName, setRightHeroName] = useState('')
    const [heroImg, setHeroImg] = useState('')
    const [heroPowerStats, setHeroPowerStats] = useState([])
    const [heroId, setHeroId] = useState(idArray[randomNumber(1,563)])
    const [HeroNames , setHeroNames] = useState([])
    const [loading, setLoading] = useState(false)

    const Alternative = styled.button`
    width: 320px;
    height: 45px;
    border: none;
    border-radius: 3px;
    background: var(--mainBlue);
    color: #fff;
    :hover{
        background: #eead2d;
        transform: scale(1.1)
    }`
    const LoadingDiv = styled.div`
    display: ${loading ? 'block' : 'none'};
    `
  
    useEffect(()=>{
      async function getHeroData(){
        const rightHero = await api.get(`/id/${heroId}.json`)
        let hero1 = idArray[randomNumber(1,563)]
        let hero2 = idArray[randomNumber(1,563)]
        let responseHero1Name = await api.get(`id/${hero1}.json`)
        let responseHero2Name = await api.get(`id/${hero2}.json`)
        if(responseHero1Name.data.name === rightHero.data.name || responseHero1Name.data.name === responseHero2Name.data.name){
          hero1 = idArray[randomNumber(1,563)]
          responseHero1Name = await api.get(`id/${hero1}.json`)
        }
        if(responseHero2Name.data.name === rightHero.data.name || responseHero2Name.data.name === responseHero1Name.data.name){
          hero2 = idArray[randomNumber(1,563)]
          responseHero2Name = await api.get(`id/${hero2}.json`)
        }
        setRightHeroName(rightHero.data.name)
        setHeroImg(rightHero.data.images.md)
        setHeroPowerStats(rightHero.data.powerstats)
        let arr = [rightHero.data.name, responseHero1Name.data.name, responseHero2Name.data.name]
        shufflefunction(arr)
        setHeroNames(arr)
      } 
        getHeroData()  
      },[heroId])
      const handleAlternative = (answer) => {
        if(finish === true) {
          alert("The number of cards is over, please click on the finish button to see the results")
          handleResult()
        }
        else{
        limitCards()
        if (answer === rightHeroName && finish === false)
          handleHit()
        else {
          if(finish === false)
          handleFail()
        }
      if(total < 9){
        setHeroId(idArray[randomNumber(1,563)])
      } 
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2500)
    }
      }
  return(
    <>
      <LoadingDiv>
        <Loading type="spin" height={40} color="darkblue"/>
      </LoadingDiv>
      <div className="card-wrapper">
          <HeroImage src={heroImg}/>
          <div className="card-stats">
            <span className="stats">
                Name : <span>?</span>
            </span>
            <span className="stats">
                Inteligence : <span>{heroPowerStats.intelligence === "null" ? '?' : heroPowerStats.intelligence }</span>
            </span>
            <span className="stats">
                Strength: <span>{heroPowerStats.strength === "null" ? '?' : heroPowerStats.strength}</span>
            </span>
            <span className="stats">
                Speed: <span>{heroPowerStats.speed === "null" ? '?' : heroPowerStats.speed}</span>
            </span>
            <span className="stats">
                Durability: <span>{heroPowerStats.durability === "null" ? '?' : heroPowerStats.durability}</span>
            </span>
            <span className="stats">
                Power: <span>{heroPowerStats.power === "null" ? '?' : heroPowerStats.power}</span>
            </span>
            <span className="stats">
                Combat: <span>{heroPowerStats.combat === "null" ? '?': heroPowerStats.combat}</span>
            </span>
          </div>
          <div className="answers">
            {HeroNames.map((name)=>
            (
              <>
                <Alternative 
                onClick={ e=> handleAlternative(name)}>
                  <span>{name}</span>
                </Alternative>
              <br/>
              </>
            ))}
        </div>
    </div>
  </>
  );
}
export default Card
