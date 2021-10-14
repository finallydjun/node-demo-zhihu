## NOSql简介

### 什么是nosql
- 对于不同于传统的关系型数据库的数据库管理系统的统称

### nosql数据库的分类
- 列存储（HBase）
- 文档存储（MongDB）按JSON来存储
- key-value存储（Redis）
- 图存储（FlockDB）
- 对象存储（db4o）
- XML存储（BaseX）

##为什么使用nosql
- 简单（没有原子性，一致性，隔离性等复杂规范）
- 便于横向拓展
- 适合超大规模的数据存储
- 很灵活的存储复杂结构的数据（Schema Free）

### 什么是MongoDB
- 来自于英文单词‘Humongous’,中文意思为‘庞大’
- 面向文档存储开源数据库
- 由C++编写而成

### 为什么要使用MongoDb
- 性能好（内存计算）
- 大规模数据存储（可拓张性）
- 可靠安全性（本地复制，自动故障转移）
- 很灵活的存储复杂结构的数据（Schema Free）

###云MongoDB MongoDB Atlas
- 创建集群
- 添加数据库用户
- 设置ip地址白名单
- 获取链接地址

###安装mongoose

` npm i mongoose --save`

##设计用户模块的Schema
- 分析用户模块属性
- 编写用户模块的Schema
- 使用Schema生成用户Model(定义数据库表结构)

##MongoDB实现增删改查
- 使用内存数据库编写的话重启便会清空，使数据持久化使用MongoDB数据库