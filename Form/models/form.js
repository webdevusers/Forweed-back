const {Schema, model} = require('mongoose')

const Form = new Schema({
    name: {type: String},
    surname: {type: String},
    adress: {type: String},
    zipcode: {type: String},
    city: {type: String},
    country: {type: String},
    email: {type: String},
    phone: {type: String},
    order: {type: Object},
})

module.exports = model('Form', Form)