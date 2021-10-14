##Session 简介
 - 认证 ：让服务器知道你是谁
 - 授权：什么能干什么不能干

### Session的优势
- 相比于JWT,最大的优势就在于可以主动清除session
- session保存在服务器端相对比较安全
- 结合cookie使用，较为灵活，兼容性较好

### Session的劣势
- cookie+session在跨域场景表现并不好
- 如果是分布式部署，需要做多级共享session机制
- 基于cookie的机制很容易被CSRF
- 查询session信息可能会有数据库查询操作

###Session相关概念
- session：主要存放在服务器端，相对安全
- cookie:主要存放在客户端，并不是很安全
- sessionStrorage:仅在当前会话下有效，关闭页面或者浏览器后被清
- localstorage:除非被清除，否者永久保存

## JWT简介

### 什么是JWT
- JSON Web Token 是一个开放标准(RF 7519)
- 定义了一种紧凑且独立的方式，可以将各方面的信息作为JSON对象进行安全传输
- 该信息可以验证和信任，因为是通过数字验证的

###JWT构成
- 头部(Header)
- 有效载荷(Payload)
- 签名(Signature)

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmluYWxseSIsImlhdCI6MTYzNDExOTE1Mn0.CKHsG70FDqv7tTZwx1SEzxwQ9YI9GupXQgxRJ224o-A

####Header
- typ:token的类型，这里固定为JWT
- alg:使用的hash算法，例如HMAC SHA256或者RSA

####Payload
- 存储需要传递的信息，如用户ID,用户名等
- 还包含元数据，如过期时间，发布人等
- 与Header不同，Payload可以加密

#### Signature
- 对Header和Payload部分进行签名
- 保证Token在传输的或称中没有被篡改或者损坏

#### 实现用户注册
- 设计用户Schema
- 编写保证唯一性的逻辑

###实现登录并获取token
- 登录接口动作
- jsonwebtoken 生成token

###自己编写koa中间件实现用户认证与授权
- 认证：验证token，并获取用户信息
- 授权：使用中间件保护接口

###使用koa-jwt实现用户认证
- 安装koa-jwt
- 使用中间件保护接口
- 使用中间件获取用户信息