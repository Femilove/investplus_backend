const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    approved: {
         type: Boolean, 
         default: false 
        }

});

module.exports = mongoose.model('Loan', loanSchema)