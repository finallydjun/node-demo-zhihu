let Koa = require('koa');
let koaBody = require('koa-body')({
    multipart: true,  // 允许上传多个文件
});
let error = require('koa-json-error')
let parameter = require('koa-parameter')
let app = new Koa();
const routing = require('./routes')


app.use(error({
    postFormat: (e, {stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
}));
// app.use(async (ctx, next) => {
//     try {
//         await next();
//     } catch (err) {
//         ctx.status = err.status||err.statusCode||500;
//         ctx.body= {
//             status:err.status||err.statusCode||500,
//             message:err.message,
//         }
//     }
// })

app.use(koaBody);
app.use(parameter(app))
routing(app);

app.listen(3000, () => {
    console.log("程序启动起来了！")
})