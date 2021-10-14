const path = require('path')

class HomeCtl {
    index(ctx) {
        ctx.body = "主页"
    }

    upload(ctx) {
        console.log(ctx.request.files);
        const file = ctx.request.files.file;
        const basename = path.basename(file.path);
        ctx.body = {
            url: `${ctx.origin}/uploads/${basename}`,
            path: file.path
        };
    }
}

module.exports = new HomeCtl();
