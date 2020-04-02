import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../src/logo.png'
import {ButtonContainer} from './Button'
import {NavWrap} from './NavWraper'
 class Navbar extends Component {
     render() {
         return (
             <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-5"> {/* Isso aqui é Boostrap (Estudar) */}
                <Link to="/">
                    <img id="x" src={logo} alt="store"
                    className="navbar-brand"/>
                </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            <span style={{color:'yellow'}}>RR MATERIAIS</span>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus"/> 
                            </span>
                                Meu Carrinho
                            </ButtonContainer>
                    </Link>
             </NavWrap>
         );
     }
 }
 export default Navbar;