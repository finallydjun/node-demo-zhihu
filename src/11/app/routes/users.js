//引入Koa路由
const jwt = require('koa-jwt');
let Router = require('koa-router');
let router = new Router({prefix: '/users'});
let {find, findById, create, update, delete: del, login, checkOwner, listFollowing, listFollowers, checkUserExist, follow, unfollow} = require('../controllers/users')
const {secret} = require('../config');

const auth = jwt({secret});

router.get('/', find);
router.post('/', create);
router.get('/:id', findById);
router.patch('/:id', auth, checkOwner, update)
router.delete('/:id', auth, checkOwner, del);
router.post('/login', login);
router.get('/:id/following', listFollowing);
router.get('/:id/followers', listFollowers);
router.put('/following/:id', auth, checkUserExist, follow);
router.delete('/following/:id', auth, checkUserExist, unfollow);
module.exports = router;