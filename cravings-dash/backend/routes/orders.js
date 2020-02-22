const router = require('express').Router();
let Order = require('../models/order.model');

//route('') explained at 27 mins in
router.route('/').get((req, res)=>{
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const items = req.body.items;
    const shipped = Boolean(req.body.shipped);
    const totalPrice = Number(req.body.totalPrice);
    const date = Date.parse(req.body.date);

    const newOrder = new Order({
        username,
        items,
        shipped,
        totalPrice,
        date,
    });

    newOrder.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;