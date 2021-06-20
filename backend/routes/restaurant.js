const router=require('express').Router();
let Restaurant=require('../models/restaurant.model');

router.route('/').get((req,res) => {
    Restaurant.find()
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const location = req.body.location;
    const image = req.body.image;
    const password=req.body.password;

    const newRestaurant=new Restaurant({
        name,
        location,
        password,
        image
    });

    newRestaurant.save()
        .then(()=>res.json('Restaurant added'))
        .catch(err => res.status(400).json('Error: '+err));
    
});


router.route('/:id').get((req,res)=>{
    Restaurant.findById(req.params.id)
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error: '+err));
});



module.exports=router;