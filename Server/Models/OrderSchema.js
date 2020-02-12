const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema({
    orderNo: {
        type: String
    },
    dueDate:{
        type: String
    },
    customer: String,
    address: String,
    phone: String,
    total: Number
},{minimize:false});

module.exports = mongoose.model('Orders',Order,'Orders');