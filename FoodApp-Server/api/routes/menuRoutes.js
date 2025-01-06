const express = require("express");
const Menu = require("../model/Menu");
const router = express.Router();

const menuController = require("../controllers/menuControllers");

router.get("/", menuController.getAllMenuItems);
router.post("/", menuController.postMenuItem);
router.delete("/:id", menuController.deleteMenuItem);
router.get("/:id", menuController.singleMenuItem);
router.patch("/:id", menuController.updateMenuItem);

module.exports = router;
