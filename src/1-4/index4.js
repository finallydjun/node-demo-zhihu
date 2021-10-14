let Koa = require('koa');
let app = new Koa();
const koaBody = require('koa-body')({
    multipart: true,  // 允许上传多个文件
});

//引入Koa路由
let Router = require('koa-router')
let router = new Router();
let usersRouter = new Router({prefix: '/users'});
/**
 * 什么是控制器
 * 1.拿到路由分配的任务并执行
 * 2.在Koa中，是一个中间件
 *
 * 为什么要用控制器
 * 1.获取HTTP请求参数
 * 2.处理业务逻辑
 * 3.发送http响应
 *
 * 获取HTTP请求参数
 * 1.Query String ,如？q=keyword
 * 2.Router Params ;如/users/:id
 * 3.Body ;如{name:'demo'}
 * 4.Header ;如Accept Cookie
 *
 * 发送HTTP响应
 * 1.发送Status，如200/400等
 * 2.发送Body,如{name:'李雷'}
 * 3.发送Header，如Allow  Content-Type
 *
 * 编写控制器最佳实践
 * 1.每个资源控制器放在不同的文件里面
 * 2.尽量使用类+类方法的形式编写控制器
 * 3.严谨的错误处理
 */
router.get('/', (ctx) => {
    ctx.body = "这是主页"
});

usersRouter.get('/', (ctx) => {
    console.log(ctx.query)
    ctx.body = [{
        name: "demo"
    }, {
        name: "demo1"
    },]
});

usersRouter.post('/', (ctx) => {
    console.log(ctx.request.body)
    console.log(ctx.header)
    ctx.body = {name: 'demo'}
});

usersRouter.get('/:id', (ctx) => {
    console.log(ctx.params)
    ctx.body = {name: 'demo1'}
});
usersRouter.post('/:id', (ctx) => {
    console.log(ctx.request.body)
    console.log(ctx.header)
    ctx.body = {name: 'demo2'}
});
usersRouter.put('/:id', (ctx) => {
    ctx.body = {name: 'demo3'}
});

usersRouter.delete('/:id', (ctx) => {
    ctx.status = 204
});

app.use(koaBody);
app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods())

app.listen(3000)