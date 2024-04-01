const mongoose = require('mongoose');

// Define menuItem schema
const MenuCardSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageId: String
});

// Define menuItem model
const MenuCard = mongoose.model('MenuCard', MenuCardSchema);


// Define titleMenuCards schema
const titleMenuCardsSchema = new mongoose.Schema({
    title: String,
    menuCards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuCard' }]
});

// Define titleMenu model
const TitleMenu = mongoose.model('TitleMenu', titleMenuCardsSchema);


// Define menu schema
const menuSchema = new mongoose.Schema({
    id:String,
    titleMenu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TitleMenu' }]
});

// Define menu model
const Menu = mongoose.model('Menu', menuSchema);
module.exports = {  MenuCard, TitleMenu, Menu};
