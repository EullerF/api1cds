const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/user", userController.createUser);
router.get("/user", userController.readUsers);
router.put("/user/:cpf", userController.updateUser);
router.delete("/user/:cpf", userController.deleteUser);
router.post("/login",userController.loginUser);

module.exports = router;
