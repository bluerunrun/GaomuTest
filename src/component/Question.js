import React from 'react'
import '../css/App.css'

export default React.createClass({

    getDefaultProps: function() {
        return {
            pageName: "firstPage"
        };
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    // 切換到另一個頁面
    navToAnotherPage(event) {
        var pageName = this.props.pageName;
        switch (pageName){
            case "page01":{
                pageName = "page02";
                break;
            }
            case "page02":{
                pageName = "page03";
                break;
            }
            case "page03":{
                pageName = "page04";
                break;
            }
            case "page04":{
                pageName = "page05";
                break;
            }
            case "page05":{
                pageName = "page01";
                break;
            }
            default:{
                break;
            }
        }
        const path = `/`+pageName;
        this.context.router.push(path);
    },

    render() {
        return <div>
            <button className="button"  onClick={this.navToAnotherPage.bind(this)}>Nav To Next Page</button>
        </div>
    }
})



