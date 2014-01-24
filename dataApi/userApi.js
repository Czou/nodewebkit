/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-24 下午12:06
 * --------------------------------------------------------
 */

var userApi = {},
	user = require('./data/user.js');

userApi.login=function(username,password,callback) {
	user.login(username,password,callback);
}

module.exports=userApi;