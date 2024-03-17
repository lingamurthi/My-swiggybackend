const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id:{
type:Number,
required:true
    },
    name: {
        type: String,
        required: true
    },
    cloudinaryImageId: {
        type: String,
        required: true
    },
    costForTwo: {
        type: Number,
        required: true
    },
    cuisines: {
        type: [String],
        required: true
    },
    avgRating: {
        type: Number,
        default: 0 // Default value for average rating
    },
    veg: {
        type: Boolean,
        default: false // Default value for veg
    },
    sla: {
        deliveryTime: {
            type: Number,
            required: true
        }
    }
});


const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
