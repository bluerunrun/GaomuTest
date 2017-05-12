import React from 'react'
import FirstPage from './FirstPage'


export default React.createClass({
    render() {
        return (
            <div>
                <FirstPage />
                {this.props.children}
            </div>
        )
    }
})

