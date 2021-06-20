const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const dealsSchema=new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:Number, required:true},
    restaurant: {type:Date, required:true},
    price:{type:Number, required:true}
},{
    timestamps:true,
});

const Deal=mongoose.model('Exercise', exerciseSchema);

module.exports=Deal;