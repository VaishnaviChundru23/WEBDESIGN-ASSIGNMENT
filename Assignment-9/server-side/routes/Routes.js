const express =require("express");
const UserController = require('../controller/UserController');

const router = express.Router();

router.post("/login", UserController.login);
router.post("/create", UserController.createUser);
router.put("/edit", UserController.updateUser);
router.delete("/delete", UserController.deleteUser);
router.get("/getAll", UserController.getUsers);

module.exports = router;