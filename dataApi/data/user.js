/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-21 下午7:17
 * --------------------------------------------------------
 */
var user={},
	  sqlite3=require('sqlite3').verbose(),
	  db=new sqlite3.Database('data.sqlite');

//sqlite测试
user.test=function() {

	db.serialize(function() {
		db.run("CREATE TABLE lorem (info TEXT)");

		var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
		for (var i = 0; i < 10; i++) {
			stmt.run("Ipsum " + i);
		}
		stmt.finalize();

		db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
			console.log(row.id + ": " + row.info);
		});
	});
	db.close();
}



module.exports=user;