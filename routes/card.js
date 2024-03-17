const express = require("express");
const { getAllRestaurantsData } = require("../controllers/card");
const router = express.Router();
const { getHeaderData } = require("../controllers/card");



router.get("/restaurants",getAllRestaurantsData)
router.get("/headercard",getHeaderData)

module.exports = router;