const { Router } = require('express')
const { gamesController } = require('../controllers/games.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const gamesImageMiddleware = require('../middlewares/gamesImage.middleware')
const router = Router()

router.get('/games', gamesController.getGames)
router.get('/get/games', gamesController.printGames)
router.patch('/games/genre/:id', gamesController.addGenreForGame)
router.post('/games', gamesController.addGame)
router.post('/images', gamesImageMiddleware.array('images', 4), gamesController.addImageForGame)
router.post('/games/reviews/:id', authMiddleware, gamesController.addReviewForGame)
router.post(
  "/images",
  gamesImageMiddleware.array("images", 4),
  gamesController.addImageForGame
);

module.exports = router;
