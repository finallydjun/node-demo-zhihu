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


//3..使用koa-router实现路由 优雅实现路由基本功能  ，高级路由功能呢，前缀，多中间件 。。http options 方法的作用是什么

/**
 * http options 方法的作用
 * 1.检测服务器所支持的请求方法
 * 2.cors中的预检请求
 */

/**
 * allowedMethods的作用
 * 1.响应options方法，告诉它所支持的请求方法
 * 2.相应的返回405(不允许)和501(没实现)
 */
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


//2.手写编写路由中间件，处理不同url，处理不同的https方法 解析URL上的参数
// app.use(async (ctx) => {
//     if (ctx.url === '/') {
//         ctx.body = "主页"
//     } else if (ctx.url === '/users') {
//         if (ctx.method==='GET'){
//             ctx.body = "这里是用户列表"
//         }else if (ctx.method==='POST'){
//             ctx.body = "创建用户"
//         }else{
//             ctx.status =405
//         }
//     }else if (ctx.url.match(/\/users\/\w+/)){
//         let userId  = ctx.url.match(/\/users\/(\w+)/)[1]
//         ctx.body = `这是用户${userId}`
//     } else {
//         ctx.status = 404;
//     }
// })


//1..koa中间件洋葱模型
// app.use(async (ctx, next) => {
//     console.log("---------------------------------------")
//     console.log(1)
//     await next();
//     console.log((2))
//     ctx.body = "hello world  api";
// })
// app.use(async (ctx, next) => {
//     console.log(3)
//     await next();
//     console.log(4)
// })
// app.use(async (ctx) => {
//     console.log(5)
// })
app.listen(3000)