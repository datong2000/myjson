# 一个可以临时存储json数据的页面

演示网址 http://dt2000.cn

### 运行步骤

1. `myjson` 文件夹 执行 `npm i -S or cnpm i `
2. 启动 `npm run serve`
3. `myjson_koa` 文件夹 执行 `npm i`
4. 启动 `npm run start` **要有`nodemon`才可以**
5. 如果没有就  `npm i nodemon`

### 简单介绍功能

1. 可以在前端输入你想存储的数据，最好是 `JSON` 对象 
2. **注意！！！前端这里我没有进行数据的验证**
3. 然后保存，会保存到 服务端 json 目录下，创建一个随机json文件
4. 之后返回一个接口，通过这个接口，就可以获得存储的数据.
5. myjson文件夹里修改 src/view/readjson 里的URL地址

##### 原网站是 www.myjson.com 这个网站最近不可以用了，就自己写了一个