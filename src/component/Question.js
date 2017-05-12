import React from 'react'
import '../css/App.css'

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    navToAnotherPage(event) {
        const path = `/thirdPage`;
        this.context.router.push(path);
    },

    render() {
        return <div>
            <button className="button"  onClick={this.navToAnotherPage.bind(this)}>Nav To Next Page</button>
        </div>
    }
})



