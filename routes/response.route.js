const { responseController } = require("../controllers/response.controller")
const { Router } = require("express")

const router = Router()

router.post("/response", responseController.postResponse)
router.get("/response", responseController.getAllResponse)

module.exports = router