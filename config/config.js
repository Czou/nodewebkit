
module.exports = {

    server:'http://127.0.0.1:3000/',
//redis配置
    redisPort:'6379',
    redisIp:'192.168.1.207',
    redisMaxPoll:500,//redis最大连接池
    redisTimeOut:600000,//连接过期时间，过期连接将被删除//单位ms//现在定义为10分钟
    redisDataBase:1//默认使用的redis数据库下标，默认从0开始
}