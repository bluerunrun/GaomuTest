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
            "A": 1,
            "kpt": [
                227,
                155,
                180,
                187
            ]
        }
    ],
    "id": 420924,
    "lvl": 60,
    "Q": "<span class=\"qseq\"></span>（2016•新乡模拟）下列运算不正确的是（　　）",
    "notice": "此题主要考查了同底数幂的乘法运算以及幂的乘方运算和合并同类项以及积的乘方运算、整式除法运算等知识，熟练掌握运算法则是解题关键．",
    "opts": [
        "a<sup>3</sup>•a<sup>2</sup>=a<sup>5</sup>",
        "（x<sup>3</sup>）<sup>2</sup>=x<sup>9</sup>",
        "x<sup>5</sup>+x<sup>5</sup>=2x<sup>5</sup>",
        "（-ab）<sup>5</sup>÷（-ab）<sup>2</sup>=-a<sup>3</sup>b<sup>3</sup>"
    ],
    "src": "",
    "step": "解：A、a<sup>3</sup>•a<sup>2</sup>=a<sup>5</sup>，正确，不合题意；<br>B、（x<sup>3</sup>）<sup>2</sup>=x<sup>6</sup>，故此选项错误，符合题意；<br>C、x<sup>5</sup>+x<sup>5</sup>=2x<sup>5</sup>，正确，不合题意；<br>D、（-ab）<sup>5</sup>÷（-ab）<sup>2</sup>=-a<sup>3</sup>b<sup>3</sup>，正确，不合题意；<br>故选<ANSWER/>",
    "way": "直接利用同底数幂的乘法运算法则以及幂的乘方运算和合并同类项法则以及积的乘方运算法则、整式除法运算法则分别判断得出答案．",
    "course": "math",
    "bref": "（2016•新乡模拟）下列运算不正确的是（ ）"
};

export default React.createClass({

    getDefaultProps: function() {
        return {
            pageName: "page03",
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