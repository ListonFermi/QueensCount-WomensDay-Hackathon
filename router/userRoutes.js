const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");
const isLogin = require("../middlewares/userMiddleware.js");

router.get("/", userController.homePage);
router.get("/signuplogin", userController.signupLoginPage);
router.post("/signuplogin/signup", userController.signupPost);
router.post("/signuplogin/login", userController.loginPost);
router.post("/signuplogin/logout", userController.logoutPost);
router.get("/companydetails/:id", userController.companyDetailsPage);
router.post("/review",isLogin,userController.addReview)
router.get("/chartdata/:id",userController.getChartData)

module.exports = router;
