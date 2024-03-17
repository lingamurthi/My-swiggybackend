const mongoose = require('mongoose');

const headercardSchema = new mongoose.Schema({
    imageId: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

// Pre-save hook to generate custom id based on ObjectId
headercardSchema.pre('save', function(next) {
    if (!this.id) {
        this.id = this._id.toString();
    }
    next();
});

const Headercard = mongoose.model('Headercard', headercardSchema);

module.exports = Headercard;
