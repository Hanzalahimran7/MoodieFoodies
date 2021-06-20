const router=require('express').Router();
let Deals=require('../models/Deals.model');

router.route('/').get((req,res) => {
    Deals.find()
        .then(deals => res.json(deals))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const image = req.body.image;
    const restaurant=req.body.restaurant;

    const newDeal=new Deals({
        name,
        description,
        price,
        image,
        restaurant
    });

    newExercise.save()
        .then(()=>res.json('Deal added'))
        .catch(err => res.status(400).json('Error: '+err));
    
});


router.route('/:id').get((req,res)=>{
    Deals.findById(req.params.id)
        .then(deal => res.json(deal))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Deals.findByIdAndDelete(req.params.id)
        .then(deal => res.json('Deal deleted.'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Deals.findById(req.params.id)
        .then(exercise => {
            deal.name=req.body.username;
            deal.description=req.body.description;
            deal.price=Number(req.body.duration);
            deal.restaurant=req.body.date;
            deal.image=req.body.image;

            exercise.save()
            .then(()=>res.json('Exercise updated'))
            .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports=router;