const knex = require('knex')
const knexConfig = require('../../knexfile').development;
const db = knex(knexConfig);

const getRecipes = () => {
    return db('recipes')
        .select('recipes.id', 'recipes.name as recipe', 'dishes.name as dish')
        .innerJoin('dishes', 'recipes.dishId', 'dishes.id');
}

const getRecipe = id => {
    return db('recipes')
        .select('recipes.id', 'recipes.name as recipe', 'dishes.name as dish')
        .innerJoin('dishes', 'recipes.dishId', 'dishes.id')
        .where({ id });
}

const addRecipe = recipe => {
    return db('recipes')
        .insert(recipe)
        .first();
}

module.exports = {
    getRecipes,
    getRecipe,
    addRecipe
}