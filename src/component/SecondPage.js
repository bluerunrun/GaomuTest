import React from 'react'
import '../css/App.css'

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    navToAnotherPage(event) {
        const path = `/firstPage`;
        this.context.router.push(path);
    },

    render() {
        return <div>
            <h1>SecondPage:</h1>
            <button className="button"  onClick={this.navToAnotherPage.bind(this)}>Back to First Page</button>
        </div>
    }
})



