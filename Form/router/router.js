const Router = require('express')
const router = new Router()
const controller = require('../controller/controller.js')

router.post('/create', controller.create)
router.get('/all', controller.get)

module.exports = router;