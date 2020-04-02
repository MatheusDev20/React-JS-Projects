import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // Import do arquivo do Boostrap
import NavBar from './Components/Navbar'
import Routes from './Components/Routes'
// A NavBar não fica Wrapped no Switch por que ela não muda com os componentens é fixa.
class App extends React.Component {
  render() {
    return(
    <React.Fragment>
        <NavBar/>
        <Routes/>
    </React.Fragment>
    )
  }
}


export default App;
