const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.get("/reviews", reviewsController.getReviews);
router.get('/reviews/isexistence', authMiddleware, reviewsController.existenceReview)
router.patch("/reviews/:id", reviewsController.updateReview);
router.delete("/reviews/:id", reviewsController.deleteReview);


module.exports = router;
