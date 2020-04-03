import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom'
import Start from '../Main/Start'
import Game from '../Game/Game'
class Routes  extends  Component {
    render() {
        return (
          <>
          <Redirect from="/" to="main"/>
            <Route path="/main">
              <Start/>
            </Route>
            <Route path="/game" >
              <Game/>
            </Route>
          </>
        );
    }
}

export default Routes