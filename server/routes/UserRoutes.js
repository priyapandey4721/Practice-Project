const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers");
const UserValidation = require("../middleware/Validation");
router.post(
  "/register",
  UserValidation.validRegister,
  UserControllers.register
);

module.exports = router;
