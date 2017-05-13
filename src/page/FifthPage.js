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
                538,
                1142
            ]
        }
    ],
    "id": 10516,
    "lvl": 64,
    "Q": "<img alt=\"\" src=\"http://data.gaomuxuexi.com/joy/_img/10516_d437ec84.png\" style=\"vertical-align:middle;FLOAT:right\"><span class=\"qseq\"></span>正三角形ABC的边长为2，动点P从点A出发，以每秒1个单位长度的速度，沿A→B→C→A的方向运动，到达点A时停止．设运动时间为x秒，y=PC<sup>2</sup>，则y关于x的函数的图象大致为（　　）",
    "notice": "本题考查了动点问题的函数图象．解答该题时，需要对点P的位置进行分类讨论，以防错选．",
    "opts": [
        "<img alt=\"\" src=\"http://data.gaomuxuexi.com/joy/_img/10516_012c622f.png\" style=\"vertical-align:middle\">",
        "<img alt=\"\" src=\"http://data.gaomuxuexi.com/joy/_img/10516_3a89bd79.png\" style=\"vertical-align:middle\">",
        "<img alt=\"\" src=\"http://data.gaomuxuexi.com/joy/_img/10516_820dde96.png\" style=\"vertical-align:middle\">",
        "<img alt=\"\" src=\"http://data.gaomuxuexi.com/joy/_img/10516_286a3f84.png\" style=\"vertical-align:middle\">"
    ],
    "src": "2014•赤峰模拟",
    "step": "解：∵正△ABC的边长为2cm，<br>∴∠A=∠B=∠C=60°，AC=2cm．<br>①当0≤x≤2时，即点P在线段AB上时，AP=xcm（0≤x≤2）；<br>根据余弦定理知cosA=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\">A<span><span>P</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+A<span><span>C</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>-P<span><span>C</span><span style=\"vertical-align:super;font-size:90%\">2</span></span></td></tr><tr><td>2PA•AC</td></tr></table></span>，<br>即 <span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black\">1</td></tr><tr><td>2</td></tr></table></span>=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\"><span><span>x</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+4-y</td></tr><tr><td>4x</td></tr></table></span>，<br>解得，y=x<sup>2</sup>-2x+4（0≤x≤2）；<br>该函数图象是开口向上的抛物线；<br>②当2＜x≤4时，即点P在线段BC上时，PC=（4-x）cm（2＜x≤4）；<br>则y=（4-x）<sup>2</sup>=（x-4）<sup>2</sup>（2＜x≤4），<br>∴该函数的图象是在2＜x≤4上的抛物线．<br>故选<ANSWER/>．",
    "way": "需要分类讨论：①当0≤x≤2，即点P在线段AB上时，根据余弦定理知cosA=<span class=\"MathJye\" mathtag=\"math\" style=\"whiteSpace:nowrap;wordSpacing:normal;wordWrap:normal\"><table cellpadding=\"-1\" cellspacing=\"-1\" style=\"margin-right:1px\"><tr><td style=\"border-bottom:1px solid black;padding-bottom:1px;font-size:90%\">A<span><span>P</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>+A<span><span>C</span><span style=\"vertical-align:super;font-size:90%\">2</span></span>-P<span><span>C</span><span style=\"vertical-align:super;font-size:90%\">2</span></span></td></tr><tr><td>2PA•AC</td></tr></table></span>，所以将相关线段的长度代入该等式，即可求得y与x的函数关系式，然后根据函数关系式确定该函数的图象．②当2＜x≤4，即点P在线段BC上时，y与x的函数关系式是y=（4-x）<sup>2</sup>=（x-4）<sup>2</sup>（2＜x≤4），根据该函数关系式可以确定该函数的图象．",
    "course": "math",
    "bref": "正三角形ABC的边长为2，动点P从点A出发，以每秒1个单位长度的速度，沿A→B→C→A的方向运动，到达点A时停止．设运动时间为x秒，y=PC2，则y关于x的函数的图象大致为（）"
};

export default React.createClass({

    getDefaultProps: function() {
        return {
            pageName: "page05",
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