import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Componentes/Routes/Routes'
import NavBar from './Componentes/Navbar/Navbar'
// import {Button} from 'react-bootstrap'
class App extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <Routes/>
            </>
        );
    }
}

export default App;