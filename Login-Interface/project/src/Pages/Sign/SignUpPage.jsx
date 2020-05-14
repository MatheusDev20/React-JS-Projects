import React, { useState } from 'react';
import './SignUp.css';
import api from '../../Services/api'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus,faUser, faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons';
const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const[match, setMatch] = useState(null);
  function checkPassword(pass1,pass2) {
    
    if(pass1 !== pass2){
      setMatch(false);
    }
    else {
      setMatch(true);
    }
  }
const handleSubmit = (event) => {
    event.preventDefault();
    checkPassword(password,confirmPassword)
    if(match === false){
      alert('Passwords dont match');
    } else {
      api.post('/users', {
        Username: username,
        email: email,
        Password: password,
        ConfirmPassword: confirmPassword
      }).then((response) => {
      })
    }
    }
    return (
        <>
          <div className="container">
                <div className="sign-form-wrapper">
                  <div className="sign-title">
                    <h1>Create Account</h1>
                    <FontAwesomeIcon icon={faUserPlus} className="plus-icon"/>
                  </div>
                <div className="form">
                  <form onSubmit={handleSubmit}>
                    <div className="sign-input-div">
                      <FontAwesomeIcon icon={faUser} style={{color:'#7F63FF'}}/>
                      <input className="sign-up-input" type="text" placeholder="Username..." name="username"
                      onChange={ e=> setUsername(e.target.value)}/>
                    </div>
                    <div className="sign-input-div">
                      <FontAwesomeIcon icon={faEnvelope} style={{color:'#7F63FF'}}/>
                      <input className="sign-up-input" type="email" placeholder="Email..." name="email"
                      onChange={ e => setEmail(e.target.value)}/>
                    </div>
                    <div className="sign-input-div">
                      <FontAwesomeIcon icon={faKey} style={{color:'#7F63FF'}}/>
                      <input className="sign-up-input" type="password" placeholder="Password..." name="password"
                      onChange={ e=> setPassword(e.target.value)}/>
                    </div>
                    <div className="sign-input-div">
                      <FontAwesomeIcon icon={faKey} style={{color:'#7F63FF'}}/>
                      <input className="sign-up-input" type="password" placeholder="Confirm Password..." name="confirm-password"
                      onChange={ e=> setConfirmPassword(e.target.value)}/>
                    </div>
                    <button className="sign-btn" type="submit" >Create</button>
                  </form>
                </div>
              </div>
          </div>
        </>
    )
}

export default SignUpPage;
