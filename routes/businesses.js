const express = require('express');
const router = express.Router();
const businessesModel = require('../models/businesses')

function getById(id) {
    let name = '';
    if (id === '1') {
        name = 'Chipotle'
    }
    return name;
}

/* GET home page */
router.get('/', async (req, res, next) => {
    const allBusinesses = await businessesModel.getAll();
    console.log(allBusinesses);
    
    res.render('template', {
        locals: {
            title: 'List of Businesses',
            allBusinesses: allBusinesses
        },
        partials: {
            partial: 'businesses-partial'
        }
    });
});

router.get('/:business_name', (req, res, next) => {
    console.log(req.params);
    const businessName = req.params.business_name;
    res.send(getById(businessName)).end();
});

router.post('/', (req,res) => {
    const { business, address, category } = req.body;
    businessesModel.add(business, address, category)
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;