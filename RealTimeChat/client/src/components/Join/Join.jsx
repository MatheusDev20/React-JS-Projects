import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Join.css'
// import { Container } from './styles';
 const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('')
 
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Entre no Chat</h1>
        <div><input placeholder="Nome" className="joinInput" type="text" onChange={(event)=> setName(event.target.value)}/></div>
        <div><input placeholder="Sala" className="joinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value)}/></div>
          <Link  onClick={event => (!name || !room) ? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" type="submit">Entrar</button>
          </Link>
      </div>

    </div>
  );
 }

export default Join
