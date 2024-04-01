
const Card=require("../models/card");
const Headercard = require("../models/headercard");

exports.getAllRestaurantsData=async(req, res)=>{
    try {
        const data = await Card.find()
       await res.json(data);
    } catch (err) {
        console.error("Error fetching restaurants:", err);
        res.status(500).json({
            error: "An internal server error occurred"
        });
    }
};



exports.getHeaderData=async(req, res)=>{
    try {
        const data = await Headercard.find();
       await res.json(data);
       console.log(data);
    } catch (err) {
        console.error("Error fetching restaurants:", err);
        res.status(500).json({
            error: "An internal server error occurred"
        });
    }
};