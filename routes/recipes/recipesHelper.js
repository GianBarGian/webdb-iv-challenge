const db = require('../../knexfile');

const getRecipes = () => {
    db('recipes')
        .select('recipes.id', 'recipes.name as recipe', 'dishes.name as dish')
        .innerJoin('dishes', 'recipes.dishId', 'dishes.id');
}

const addRecipe = recipe => {
    db('recipes')
        .insert(recipe)
        .first();
}

module.exports = {
    getRecipes,
    addRecipe
}