/**
 * Created by blue on 2017/5/14.
 */

var commonUtil = {

    // 浅拷贝 一层对象拷贝可用 深层会一样只是指针赋值
    copy(obj) {
        var newobj = {};
        for ( var attr in obj) {
            newobj[attr] = obj[attr];
        }
        return newobj;
    },

    // 深拷贝
     deepCopy(obj) {
        if(typeof obj !== 'object'){
            return obj;
        }
        var newobj = {};
        for ( var attr in obj) {
            newobj[attr] = deepCopy(obj[attr]);
        }
        return newobj;
    },

}

module.exports = commonUtil;
