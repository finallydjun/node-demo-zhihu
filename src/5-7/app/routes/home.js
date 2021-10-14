//引入Koa路由
let Router = require('koa-router')
let router = new Router();
let {index} = require('../controllers/home')

router.get('/', index)

module.exports = router;