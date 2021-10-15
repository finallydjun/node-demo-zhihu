let Koa = require('koa');
let koaBody = require('koa-body');
let error = require('koa-json-error');
let koaStatic = require('koa-static');
const path = require('path');
let parameter = require('koa-parameter');
let mongoose = require('mongoose');
let app = new Koa();
const {connectionStr} = require('./config');
const routing = require('./routes');

mongoose.connect(connectionStr, {useNewUrlParser: true}, () => {
    console.log('mongoDB连接成功！')
})

mongoose.connection.on('error', console.error)

app.use(error({
    postFormat: (e, {stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
}));

app.use(koaStatic(path.join(__dirname, 'public')));

app.use(koaBody({
    multipart: true,  // 允许上传多个文件
    formidable: {
        uploadDir: path.join(__dirname, '/public/uploads'),//保存文件目录
        keepExtensions: true,//保留拓展名
    }
}));
app.use(parameter(app))
routing(app);

app.listen(3000, () => {
    console.log("程序启动起来了！")
})