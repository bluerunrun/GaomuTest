/**
 * Created by blue on 2017/5/11.
 */
/**
 * Created by blue on 2017/5/11.
 */
// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})
