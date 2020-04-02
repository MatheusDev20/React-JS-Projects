import React from 'react'

import './Input.css'

const Input = ({setMessage, message, sendMessage}) => {
    return  (
    <form className="form">
        <input
        className="input"
        type="text"
        placeholder="Type Message"
        value={message}
        onChange={(event)=>setMessage(event.target.value)} 
        onKeyPress={event=> event.key === 'Enter' ? sendMessage(event) : null}
    
        />
        <button className="sendButton" onClick={event => sendMessage(event)}>
        SEND
        </button>
    </form>
    )
}
export default Input