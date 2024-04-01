

const express = require("express");
const { getAllMenuDetails } = require("../controllers/menu");

const router = express.Router();



router.get("/restaurantsmenu/:id",getAllMenuDetails)

module.exports = router;