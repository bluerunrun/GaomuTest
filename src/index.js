/**
 * Created by blue on 2017/5/11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './component/App';
import About from './component/About';
import Tags from './component/Tags';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/tags" component={Tags}/>
        <Route path="/about" component={About}/>

    </Router>
), document.getElementById('root'));