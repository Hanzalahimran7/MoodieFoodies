const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const restaurantSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    location:{
        type:String,
        required:true,
        unique:false,
        minlength:2
    },
    password:{
        type:String,
        required:true,
        unique:false,
        minlength:8
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true,
});


const Restaurant=mongoose.model('Restaurant',restaurantSchema)

module.exports=Restaurant;