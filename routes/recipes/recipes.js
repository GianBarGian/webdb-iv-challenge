const express = require('express');
const recipesH = require('./recipesHelper');

const recipes = express.Router();

recipes.use(express.json());

recipes.get('/api/recipes', async (req, res, next) => {
    try {
        const recipesArr = await recipesH.getRecipes();
        res.json(recipesArr);
    } catch {
        next()
    }
})

recipes.post('/api/recipes', async (req, res, next) => {
    try {
        const id = await recipesH.addRecipe(req.body)
        const newRecipe = await recipesH.getRecipe(id);
        res.json(newRecipe);
    } catch {
        next()
    }
})

module.exports = recipes;