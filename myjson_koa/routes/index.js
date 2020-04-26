const router = require('koa-router')()
const fs = require('fs')


//查看文件存在天数
router.get('/api/checkfiles', async (ctx) => {
  var files = [] // 目录下的所有文件
  //  循环json文件夹下的所有文件
  fs.readdirSync('json').map((file) => {
    let list = { // 每个文件的名字和创建时间
      name: {},
      time: {}
    }
    // 获取文件创建时间戳
    const {
      ctimeMs
    } = fs.statSync(`json/${file}`);
    // 计算天数
    const time = Math.floor((Date.now() - parseInt(ctimeMs)) / 86400000)

    // 判断是否大于30天
    if (time > 30) {
      fs.unlink(`json/${file}`, err => {
        if (err) throw err
      })
    } else {
      // 添加到对象里
      list.name = file
      list.time = time
      files.push(list)
    }
  });
  ctx.body = {
    data: files
  }
})

// 读取文件
router.post('/api/readjson', async (ctx, next) => {
  let data = fs.readFileSync(`json/${ctx.request.body.url}.json`, {
    encoding: 'utf-8'
  })
  ctx.body = {
    data
  }
})

// 保存文件
router.post('/api/writejson', async (ctx, next) => {
  //文件名称
  filename = Math.random().toString(36).substr(7);
  // 写入文件
  fs.writeFileSync(`./json/${filename}.json`, ctx.request.body.data)
  ctx.body = {
    url: filename
  }
})

// get请求api
router.get(`/api/:address`, async (ctx) => {
  let data = fs.readFileSync(`json/${ctx.params.address}.json`, {
    encoding: 'utf-8'
  })
  ctx.body = {
    data
  }
})

module.exports = router