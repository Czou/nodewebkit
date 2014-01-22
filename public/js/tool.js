/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-22 下午4:14
 * --------------------------------------------------------
 */
var tool={};
/**
 * 获取cookie操作
 * @param c
 * @param name
 * @returns {string}
 */
tool.cookie.getCookie=function(c,name) {
	var v="0";
	var t=document.cookie;
	var us=t.split(';');
	for (var i=0;i<us.length;i++){
		if($.trim(us[i].split('=')[0])==c){
			var ut=us[i].replace(c+"=","").split('&');
			for(var j=0;j<ut.length;j++){
				if($.trim(ut[j].split('=')[0])==name){
					v=decodeURI(ut[j].split('=')[1]);
					break;
				}
			}
		}
	}
	return v;
}
/**
 * 设置cookie
 * @param c
 * @param s
 * @param vs
 * @param d
 * @param p
 */
tool.cookie.setCookie=function(c,s,vs,d,p) {
	var v=c + '=' + s + '=' + vs;
	v+=d ? '; max-age='+(d*24*60*60) : '';
	v+= p ? '; path=' + p : '; path=/';
	document.cookie=v;
}