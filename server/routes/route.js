const express = require("express");
const router = express.Router();

const {addnewItem} = require('../controler/AddItemCon')

router.route("/stock").post(addnewItem)

module.exports = router;