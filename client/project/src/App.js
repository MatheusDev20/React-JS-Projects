import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import SignUpPage from './Pages/Sign/SignUpPage';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard'
function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/sign" component={SignUpPage}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
  );
}

export default App;
