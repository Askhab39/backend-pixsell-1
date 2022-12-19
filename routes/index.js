const { Router } = require('express')
const router = Router()

router.use(require('./users.route'))
router.use(require('./games.route'))
router.use(require('./reviews.route'))

module.exports = router