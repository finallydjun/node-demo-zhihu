let Koa = require('koa');

let app = new Koa();
const koaBody = require('koa-body')({
    multipart: true,  // 允许上传多个文件
});

const routing = require('./routes')

app.use(koaBody);
routing(app);

app.listen(3000,()=>{console.log("程序启动起来了！")})