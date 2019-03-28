
exports.seed = function(knex, Promise) {
  return knex('recipeIngredients').del()
    .then(function () {
      return knex('recipeIngredients').insert([
        {recipeId: 1, ingredientsId: 7, quantity: 1.1},
        {recipeId: 1, ingredientsId: 8, quantity: 2},
        {recipeId: 2, ingredientsId: 7, quantity: 2},
        {recipeId: 2, ingredientsId: 8, quantity: 2},
        {recipeId: 3, ingredientsId: 7, quantity: 3},
        {recipeId: 3, ingredientsId: 9, quantity: 2},
        {recipeId: 4, ingredientsId: 7, quantity: 2},
        {recipeId: 4, ingredientsId: 9, quantity: 2},
        {recipeId: 4, ingredientsId: 12, quantity: 1},
        {recipeId: 5, ingredientsId: 10, quantity: 1},
        {recipeId: 5, ingredientsId: 11, quantity: 2},
        {recipeId: 6, ingredientsId: 10, quantity: 1.5},
        {recipeId: 6, ingredientsId: 11, quantity: 2}
      ]);
    });
};
