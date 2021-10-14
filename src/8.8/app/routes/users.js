//引入Koa路由
const jwt = require('koa-jwt');
let Router = require('koa-router');
let router = new Router({prefix: '/users'});

let {find, findById, create, update, delete: del, login, checkOwner} = require('../controllers/users')

const {secret} = require('../config');

const auth = jwt({secret});

router.get('/', find);

router.post('/', create);

router.get('/:id', findById);

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del);

router.post('/login', login)

module.exports = router;