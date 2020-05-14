import React, {useState} from 'react';
import './Login.css';
import side_image from '../../assets/side-image.svg';
import logo from '../../assets/logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import Button from '../../Components/Button/index';
import {Link} from 'react-router-dom';
import api from '../../Services/api';
import {useHistory} from 'react-router-dom';


const Login = () => {

let history = useHistory();

const [email, setEmail] = useState('');
const [Password, setPassword] = useState('');
const [isAuth, setIsAuth] = useState(null);
const text = 'Login'
    const handleSubmit = event => {
        let arr = [];
        event.preventDefault();
        // Request
        api.post('/login', {
            email: email,
            Password: Password
        }).then((response) => {
            if(response.data.user_logged){
                 arr = Object.values(response.data.user_logged)
            }
            setIsAuth(response.data.auth);
                if(isAuth){
                   history.push({
                       pathname:"/dashboard",
                       state: {
                           detail: arr
                       }
                   })
                }
        }) 
    }
    return (
        <div className="container">
            <div className="form-wrapper">
                <div className="form-left">
                    <img src={side_image} alt="Left_Image"/>
                </div>
                <div className="form-right">
                    <div className="upside">
                        <h1>Welcome Back</h1>
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-div">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} style={{color:'#6C63FF'}}/>
                            </div>
                                <input type="text" placeholder="Email..." className="input_field" name="email"
                                onChange={e => setEmail(e.target.value)}
                               />
                        </div>
                        <div className="input-div">
                            <div className="icon">
                                <FontAwesomeIcon icon={faKey} style={{color:'#6C63FF'}}/>
                            </div>
                            <input 
                            type="text" 
                            placeholder="Password..."
                            name="password"
                            className="input_field" 
                            onChange={e => setPassword(e.target.value)}/>
                        </div>
                        { isAuth === false  &&
                              <span className="error-msg">Please check your Email and Password again</span>
                        }
                         <Button type="submit" text={text} />
                            <div className="links">
                                <Link to="sign">
                                    <span className="create">Create your Account <FontAwesomeIcon icon={faArrowRight}/>
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Login;


