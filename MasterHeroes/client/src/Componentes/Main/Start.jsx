import React, {useState} from 'react';
import './Start.css'
import styled from 'styled-components'
import welcomeImage from '../../assets/captain.png'
import Button from '../Button'
import RulesModal from '../Modal/RulesModal'


const Input = styled.input `
height: 50px;
width: 400px;
border-radius: 20px;
border: none;
font-family: 'Anton', sans-serif;
color: darkblue;
font-size: 25px;
padding: 15px;
margin-top: 10%;
`
const WelcomeMessage = styled.span`
font-family: 'Permanent Marker', sans-serif;
color: white;
font-size: 30px;
`
const WelcomeImage = styled.img`
height: 300px;
margin-left: 125px;
margin-top: 5px;
`

  function Main() {
      const [isOpen, setIsOpen] = useState(false)
      const [nickname, setNickname] = useState('')
    const handleStart = (e) => {
        e.preventDefault()
        setIsOpen(true)
    }
        return (
                <div className="wrapper">
                    <div className="welcome-container">
                       <RulesModal nickname={nickname} isOpen={isOpen}/>
                       <WelcomeMessage>
                            WELCOME TO MASTER HEROES
                        </WelcomeMessage> 
                        <br/>
                        <WelcomeImage src={welcomeImage} alt="capitão américa"/>
                        <WelcomeMessage>
                        <br/>
                          CHOOSE YOUR NICKNAME TO START
                        </WelcomeMessage>
                        <form>
                            <Input onChange={ e => setNickname(e.target.value)}/>
                            <Button  type="submit" onClick={e => handleStart(e)}>
                            <span style={{fontFamily:'Roboto'}}>START</span>
                            </Button>
                        </form>
                    </div>
                </div>
        );
    }
export default Main;