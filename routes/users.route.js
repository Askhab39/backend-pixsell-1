const { userController } = require("../controllers/users.controller");
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
// const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const { walletControler } = require("../controllers/wallet.controller");

router.get("/users", roleMiddleware, userController.getAllUsers);
router.post(
  "/auth",
  [check("usersName", "Имя пользователя не может быть пустым").notEmpty()],
  [
    check(
      "password",
      "Пароль должен быть больше 4 символов, но не более 15 символов"
    ).isLength({ min: 4, max: 15 }),
  ],
  userController.registerUser
);
router.post("/login", userController.loginUser);
router.post("/role",  userController.createRoles);
router.delete("/users/:id", roleMiddleware, userController.deleteUsers);
router.patch('/users/walley', authMiddleware, walletControler.addingMoney)
router.get("/users/wallet", authMiddleware, walletControler.getBalance);


module.exports = router;
