const mongoose = require('mongoose');


const urlSchema = mongoose.Schema({

    shortid: {
        type: String,
        required: true,
        unique: true
    },

    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ timeStamp: { type: String } }], 
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
},
 { timestamps: true });

const URL = mongoose.model('url', urlSchema);

module.exports = URL


