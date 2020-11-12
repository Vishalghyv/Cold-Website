const mongoose = require('mongoose')

const event = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    moreDetails: {
        type: Boolean
    },
    moreDetailsLink: {
        type: String
    }
});

module.exports = Event = mongoose.model('event',event);
