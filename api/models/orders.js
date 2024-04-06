const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},//reference to the Product model
   quantity:{type:Number,default:1} //number of products in this order
});

module.exports=mongoose.model('Order',orderSchema)