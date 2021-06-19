const router=require('express').Router();
let Foodies=require('../models/foodies.model');

router.route('/').get((req,res) => {
    Foodies.find()
        .then(foodies => res.json(foodies))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newFoodie=new Foodies({
        username,
        password,
        email
    });

    newFoodie.save()
        .then(()=>res.json('Foodie added'))
        .catch(err => res.status(400).json('Error: '+err));
    
});


router.route('/:id').get((req,res)=>{
    Foodies.findById(req.params.id)
        .then(foodies => res.json(foodies))
        .catch(err => res.status(400).json('Error: '+err));
});



module.exports=router;