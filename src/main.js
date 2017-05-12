/**
 * Created by blue on 2017/5/11.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './page/App'
import FirstPage from './page/FirstPage'
import SecondPage from './page/SecondPage'
import ThirdPage from './page/ThirdPage'
import FourthPage from './page/FourthPage'
import FifthPage from './page/FifthPage'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/page01" component={FirstPage}/>
        <Route path="/page02" component={SecondPage}/>
        <Route path="/page03" component={ThirdPage}/>
        <Route path="/page04" component={FourthPage}/>
        <Route path="/page05" component={FifthPage}/>
    </Router>
), document.getElementById('app'));