/**
 * Created by guopu on 2017/5/12.
 */
import React from 'react'
import Choice from '../component/Choice'
import Question from '../component/Question'

export default React.createClass({

    render() {
        return (
            <div>
                <h1>First Page:</h1>
                <Choice pageName="page01"/>
            </div>
        )
    }
});