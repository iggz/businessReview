const express = require('express');
const router = express.Router();
const businessesModel = require('../models/businesses')

router.get('/', async (req, res, next) => {
    const allBusinesses = await businessesModel.getAll();
    console.log(allBusinesses);
    
    res.render('template', {
        locals: {
            title: 'List of Businesses',
            businessesList: allBusinesses
        },
        partials: {
            partial: 'businesses-partial'
        }
    });
});

router.post('/', (req,res) => {
    const { business, address, category } = req.body;


    businessesModel.add(business, address, category)
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;