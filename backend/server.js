const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',() =>{
    console.log('Mongo DB connection Succesful')
});

const exerciseRouter=require('./routes/exercises');
const UsersRouter=require('./routes/users');
const FoodiesRouter=require('./routes/foodies');
const RestaurantRouter=require('./routes/restaurant');

app.use('/exercises',exerciseRouter);
app.use('/users',UsersRouter);
app.use('/foodies',FoodiesRouter)
app.use('/restaurant',RestaurantRouter)

app.listen(port, () => {
    console.log('Server is runing on port: ${port}');
});