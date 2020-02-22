const router = require('express').Router();
let Profile = require('../models/profile.model');

//route('') explained at 27 mins in
router.route('/').get((req, res)=>{
    Profile.find()
        .then(profiles => res.json(profiles))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newProfile = new Profile({username});

    newProfile.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;