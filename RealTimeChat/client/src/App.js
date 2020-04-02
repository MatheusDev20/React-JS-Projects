import React from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
const App = () => (
    <Router>
            <Redirect from='/' to="login"/>
            <Route path="/login" exact component={Join}/>
            <Route path="/chat" component={Chat}/>

    </Router>

)
export default App