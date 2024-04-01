const mongoose = require('mongoose');
const { Menu } = require('../models/menu');

exports.getAllMenuDetails = async (req, res) => {
    try {
        const id = req.params['id'];
        console.log("iddddddddd"+id);
        
        const data = await Menu.findOne({id}).populate({
            path: 'titleMenu',
            populate: {
                path: 'menuCards',
                model: 'MenuCard'
            }
        })
        .exec();
       
       await res.json(data);

       console.log('Populated menu:', data);
    } catch (error) {
        console.error('Error finding menu:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





