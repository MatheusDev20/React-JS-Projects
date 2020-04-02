import React from 'react'
import ScrollToBotton from 'react-scroll-to-bottom'
import './Messages.css'
import Message from '../Message/Message'

const Messages = ({messages,name}) => {
    return (
        <ScrollToBotton className="messages">
            {messages.map(
                (message, i) => <div key={i}><Message message={message} name={name}/></div>
            )}
        </ScrollToBotton>
    )
}

export default Messages
