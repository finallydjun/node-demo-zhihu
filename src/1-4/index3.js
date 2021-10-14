let Koa = require('koa');

let app = new Koa();

//引入Koa路由
let Router = require('koa-router')
let router = new Router();
let usersRouter = new Router({prefix: '/users'});

//实现增删改查 最佳实践
usersRouter.get('/', (ctx) => {
    ctx.body = [{
        name: "demo"
    }, {
        name: "demo1"
    },]
});

usersRouter.post('/', (ctx) => {
    ctx.body = {name: 'demo'}
});

usersRouter.get('/:id', (ctx) => {
    ctx.body = {name: 'demo1'}
});
usersRouter.post('/:id', (ctx) => {
    ctx.body = {name: 'demo2'}
});
usersRouter.put('/:id', (ctx) => {
    ctx.body = {name: 'demo3'}
});

usersRouter.delete('/:id', (ctx) => {
    ctx.status = 204
});

app.use(usersRouter.routes());

app.listen(3000)