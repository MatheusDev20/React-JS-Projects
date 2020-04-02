import React from 'react'
import onlineIcon from '../../assets/onlineIcon.png'
import closeIcon from '../../assets/closeIcon.png'
import './Infobar.css'
const Infobar = ({room}) => {
    return (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon}
            
            alt="icon" className="onlineIcon"/>
            <h3>{room}</h3>

        </div>
        <div className="rightInnerContainer">
            <a href="/"> <img src={closeIcon}
             alt="closeIcon"/>
            </a>

        </div>


    </div>
    )
}
export default Infobar