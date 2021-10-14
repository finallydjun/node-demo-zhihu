//引入Koa路由
let Router = require('koa-router')
let router = new Router();
let {index, upload} = require('../controllers/home')

router.get('/', index);
router.post('/upload', upload);

module.exports = router;