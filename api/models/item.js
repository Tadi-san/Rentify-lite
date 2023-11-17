const mongoose =  require('mongoose')
const {Schema} = mongoose

const itemSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title:String,
    address:String,
    photos:[String],
    description:String,
    type:String,
    condition:String,
    price:Number,
    currency:String,
    PhoneNumber:Number,
    
});

const itemModel = mongoose.model('Item', itemSchema)

module.exports = itemModel