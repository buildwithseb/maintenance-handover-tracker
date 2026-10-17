const express = require("express");

const isAuth = require("../middleware/is-auth");
const trackerControllers = require('../controllers/tracker');

const router = express.Router();


router.get("/csrf-token", trackerControllers.getCsrf);

router.get("/general-note", trackerControllers.getGeneralNote);

router.get("/remote-level", trackerControllers.getRemoteLevel);

router.post("/general-note", isAuth, trackerControllers.postAddGeneralNote);

router.post("/remote-level", isAuth, trackerControllers.postAddRemoteLevel);

router.put("/general-note/:id", isAuth, trackerControllers.updateGeneralNote);

router.put("/remote-level/:id", isAuth, trackerControllers.updateRemoteLevel);

router.delete("/general-note/:id", isAuth, trackerControllers.deleteGeneralNote);

router.delete("/remote-level/:id", isAuth, trackerControllers.deleteRemoteLevel);


module.exports = router;