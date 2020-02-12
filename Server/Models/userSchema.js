const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    userName: {
        type: String
    },
    password:{
        type: String
    }
},{minimize:false});

module.exports = mongoose.model('Users',User,'Users');