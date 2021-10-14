let Koa = require('koa');

let app = new Koa();

//引入Koa路由
let Router = require('koa-router')
let router = new Router();
let usersRouter = new Router({prefix: '/users'});

let auth = async (ctx, next) => {
    if (ctx.url !== '/users') {
        ctx.throw(401)
    }
    await next()
};
//4.restful 最佳实践 增删改查应该返回什么响应
router.get('/', (ctx) => {
    ctx.body = "这是主页！"
})

usersRouter.get('/', auth, (ctx) => {
    ctx.body = "这里是用户列表！"
})

usersRouter.post('/', auth, (ctx) => {
    ctx.body = "创建用户！"
})

usersRouter.get('/:id', auth, (ctx) => {
    ctx.body = `这是用户${ctx.params.id}`
})

app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.listen(3000)