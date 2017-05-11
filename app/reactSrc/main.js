/**
 * Created by blue on 2017/5/11.
 */
// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, hashHistory } from 'react-router'
// import App from './component/App'
// import About from './component/About'
// import Repos from './component/Repos'
//
// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={App}/>
//             {/* make them children of `App` */}
//         <Route path="/repos" component={Repos}/>
//         <Route path="/about" component={About}/>
//
//     </Router>
// ), document.getElementById('app'))


import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './component/App'
import FirstPage from './component/FirstPage'
import SecondPage from './component/SecondPage'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/firstPage" component={FirstPage}/>
        <Route path="/secondPage" component={SecondPage}/>

    </Router>
), document.getElementById('app'));