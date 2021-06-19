const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const foodiesSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        unique:false,
        minlength:8
    },
    email:{
        type:String,
        required:true
    }
},{
    timestamps:true,
});


const Foodies=mongoose.model('Foodies',foodiesSchema)

module.exports=Foodies;