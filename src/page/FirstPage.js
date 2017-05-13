/**
 * Created by guopu on 2017/5/12.
 */
import React from 'react'
import Choice from '../component/Choice'
import Question from '../component/Question'

var data = {
    "type": 1,
    "A": [
        {
            "A": 0,
            "kpt": [
                305
            ]
        }
    ],
    "id": 43531,
    "lvl": 53,
    "Q": "<span class=\"qseq\"></span>已知a为实数，化简<span dealflag=\"1\" class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal;padding-top:1px\">-<table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td>a</td></tr></table></td></tr></table></span>等于（　　）",
    "notice": "本题考查了二次根式的性质与化简，注意a是小于0的数．",
    "opts": [
        "-<span dealflag=\"1\" class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal\">-a</td></tr></table></td></tr><tr><td>a</td></tr></table></span>",
        "<span dealflag=\"1\" class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\">-<table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal\">a</td></tr></table></td></tr><tr><td>a</td></tr></table></span>",
        "<span dealflag=\"1\" class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal\">-a</td></tr></table></td></tr><tr><td>a</td></tr></table></span>",
        "-<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td>a</td></tr></table></span>"
    ],
    "src": "2013秋•无为县期中",
    "step": "解：<span dealflag=\"1\" class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal;padding-top:1px\">-<table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td>a</td></tr></table></td></tr></table>=<table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal;padding-top:1px\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black\">-a</td></tr><tr><td style=\"padding-top:1px;font-size:90%\"><span><span>a</span><span style=\"vertical-align:super;font-size:90%\">2</span></span></td></tr></table></td></tr></table>=<table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal\">-a</td></tr></table></td></tr><tr><td style=\"padding-top:1px;font-size:90%\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal;padding-top:1px\"><span><span>a</span><span style=\"vertical-align:super;font-size:90%\">2</span></span></td></tr></table></td></tr></table>=-<table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\"><table cellspacing=\"-1\" cellpadding=\"-1\"><tr><td style=\"font-size: 0px\"><div hassize=\"7\"><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730U.png&apos;) repeat-y; height: 1px;overflow: hidden\" muststretch=\"v\"></div><div style=\"width:6px;background: url(&apos;http://data.gaomuxuexi.com/joy/_share/8730D.png&apos;) no-repeat; height: 7px; overflow: hidden\"></div></div></td><td style=\"padding:0;padding-left: 2px; border-top: black 1px solid;line-height:normal\">-a</td></tr></table></td></tr><tr><td>a</td></tr></table></span>，<br>故选<ANSWER/>．",
    "way": "根据分母分子都乘以同一个不为零的整式，可化简二次根式．",
    "course": "math",
    "bref": "已知a为实数，化简| -| 1  ---  a  等于（ ）"
};

export default React.createClass({

    getDefaultProps: function() {
        return {
            pageName: "page01",
            pageData: data,
        };
    },

    render() {

        var itemComponent;
        if (this.props.pageData.type === 1) {
            itemComponent = <Choice pageName={this.props.pageName} pageData={this.props.pageData}/>;
        } else {
            itemComponent = <Question pageName={this.props.pageName} pageData={this.props.pageData}/>;
        }

        return (
            <div>
                {itemComponent}
            </div>
        )
    }
});