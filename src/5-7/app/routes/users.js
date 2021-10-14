//引入Koa路由
let Router = require('koa-router')
let router = new Router({prefix:'/users'});

let {find,findById,create,update,delete:del} = require('../controllers/users')

router.get('/', find);

router.post('/', create);

router.get('/:id', findById);

router.put('/:id', update)

router.delete('/:id', del);

module.exports  = router;