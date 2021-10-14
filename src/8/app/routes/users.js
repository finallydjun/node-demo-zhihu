//引入Koa路由
const jsonwebtoken = require('jsonwebtoken')
let Router = require('koa-router')
let router = new Router({prefix: '/users'});

let {find, findById, create, update, delete: del, login, checkOwner} = require('../controllers/users')

const {secret} = require('../config')

const auth = async (ctx, next) => {
    const {authorization = ''} = ctx.request.header;
    const token = authorization.replace('Bearer ', '')
    try {
        const user = jsonwebtoken.verify(token, secret)
        ctx.state.user = user;
    } catch (e) {
        ctx.throw(401, e.message)
    }
    await next()
}

router.get('/', find);

router.post('/', create);

router.get('/:id', findById);

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del);

router.post('/login', login)

module.exports = router;