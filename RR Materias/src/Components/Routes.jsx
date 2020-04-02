import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Productlist from './Productlist'
import Details from './Details'
import Cart from './cart/Cart'
import Default from './Default'
import Modal from './Modal'
class Routes extends Component {
    render() {
        return (
            <>
        <Switch>
          <Route exact path="/" component={Productlist}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
            </>
        );
    }
}

export default Routes;