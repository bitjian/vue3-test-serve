var router = require('koa-router')()

router.get('/', function* (next) {
  yield this.render('index', {
    title: 'Hello World Koa!',
  })
})

router.post('/clist', function async(ctx) {
  const { token, cid } = this.request.body
  if (token !== '123456') {
    this.body = {
      code: 4,
      data: [],
      message: 'token过期',
    }
    return
  }
  this.body = {
    code: 0,
    data: [
      {
        cid: 1,
        cname: '聊天',
      },
      {
        cid: 2,
        cname: '音影',
      },
    ],
    message: '',
  }
})

router.post('/slist', function async(next) {
  const { token, cid } = this.request.body
  if (token !== '123456') {
    this.body = {
      code: 4,
      data: [],
      message: 'token过期',
    }
    return
  }
  if (Number(cid) === 1) {
    this.body = {
      code: 0,
      data: [
        { sid: 1, sname: '扣扣' },
        { sid: 2, sname: '默默' },
      ],
      message: '',
    }
    return
  }
  if (Number(cid) === 2) {
    this.body = {
      code: 0,
      data: [
        { sid: 3, sname: 'tx视频' },
        { sid: 4, sname: 'aqiyi' },
      ],
      message: '',
    }
    return
  }
  this.body = {
    code:0,
    data:[],
    message:''
  }
  return
})
router.get('/foo', function* (next) {
  yield this.render('index', {
    title: 'Hello World foo!',
  })
})

module.exports = router
