const express = require('express');
const dishesH = require('./dishesHelper');

const dishes = express.Router();

dishes.use(express.json());

dishes.get('/api/dishes', async (req, res, next) => {
    try {
        const dishesArr = await dishesH.getDishes();
        res.json(dishesArr);
    } catch {
        next()
    }
})