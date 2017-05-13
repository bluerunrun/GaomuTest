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
                282,
                283
            ]
        }
    ],
    "id": 421229,
    "lvl": 85,
    "Q": "<span class=\"qseq\"></span>下列分式中，为最简分式的是（　　）",
    "notice": "本题考查了最简分式的定义及求法．一个分式的分子与分母没有公因式时，叫最简分式．分式的化简过程，首先要把分子分母分解因式，互为相反数的因式是比较易忽视的问题．在解题中一定要引起注意．",
    "opts": [
        "<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\"><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">a</font></font>+3</td></tr><tr><td style=\"padding-top:1px;font-size:90%\"><span><span><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">a</font></font></span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+3</td></tr></tbody></table></span>",
        "<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\"><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">a</font></font>+<font class=\"MathJye_mi\"><font class=\"MathJye_mi\">b</font></font></td></tr><tr><td style=\"padding-top:1px;font-size:90%\"><span><span><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">a</font></font></span><span style=\"vertical-align:super;font-size:90%\">2</span></span>−<span><span><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">b</font></font></span><span style=\"vertical-align:super;font-size:90%\">2</span></span></td></tr></tbody></table></span>",
        "<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\">12</td></tr><tr><td>3<font class=\"MathJye_mi\"><font class=\"MathJye_mi\">x</font></font>−3<font class=\"MathJye_mi\"><font class=\"MathJye_mi\">y</font></font></td></tr></tbody></table></span>",
        "<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\"><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">x</font></font></td></tr><tr><td><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">x</font></font><font class=\"MathJye_mi\"><font class=\"MathJye_mi\">y</font></font></td></tr></tbody></table></span>"
    ],
    "src": "2015春•宜阳县期末",
    "step": "解：A、<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\"><font class=\"MathJye_mi\">a</font>+3</td></tr><tr><td style=\"padding-top:1px;font-size:90%\"><span><span><font class=\"MathJye_mi\">a</font></span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+3</td></tr></tbody></table></span>的分子、分母都不能再分解，且不能约分，是最简分式；<br>B、<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\"><font class=\"MathJye_mi\">a</font>+<font class=\"MathJye_mi\">b</font></td></tr><tr><td style=\"padding-top:1px;font-size:90%\"><span><span><font class=\"MathJye_mi\">a</font></span><span style=\"vertical-align:super;font-size:90%\">2</span></span>−<span><span><font class=\"MathJye_mi\">b</font></span><span style=\"vertical-align:super;font-size:90%\">2</span></span></td></tr></tbody></table></span>=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td><font class=\"MathJye_mi\">a</font>−<font class=\"MathJye_mi\">b</font></td></tr></tbody></table></span>；<br>C、<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\">12</td></tr><tr><td>3<font class=\"MathJye_mi\">x</font>−3<font class=\"MathJye_mi\">y</font></td></tr></tbody></table></span>=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\">4</td></tr><tr><td><font class=\"MathJye_mi\">x</font>−<font class=\"MathJye_mi\">y</font></td></tr></tbody></table></span>；<br>D、<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\"><font class=\"MathJye_mi\">x</font></td></tr><tr><td><font class=\"MathJye_mi\">x</font><font class=\"MathJye_mi\">y</font></td></tr></tbody></table></span>=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tbody><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td><font class=\"MathJye_mi\">y</font></td></tr></tbody></table></span>；<br>故选<ANSWER/>",
    "way": "最简分式的标准是分子，分母中不含有公因式，不能再约分．判断的方法是把分子、分母分解因式，并且观察有无互为相反数的因式，这样的因式可以通过符号变化化为相同的因式从而进行约分．",
    "course": "math",
    "bref": "下列分式中，为最简分式的是（ ）"
};

export default React.createClass({

    getDefaultProps: function() {
        return {
            pageName: "page04",
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