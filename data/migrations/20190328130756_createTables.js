
exports.up = function(knex, Promise) {
  const createDishesTable = () => {
    return knex.schema.createTable('dishes', table => {
          table
            .increments();
          table
            .string('name', 128)
            .notNullable;
          table
            .timestamps(true, true);
    })
  }

  const createRecipesTable = () => {
    return knex.schema.createTable('recipes', table => {
        table
            .increments();
        table
            .string('name', 128)
            .notNullable;
        table
            .string('instructions', 256);
        table
            .int('dishId')
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table
            .timestamps(true, true);
    })
  }

  const createRecipeIngredientsTable = () => {
    return knex.schema.createTable('recipeIngredients', table => {
        table
            .increments();
        table
            .int('recipeId')
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table
            .int('ingredientsId')
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table
            .float('quantity')
            .notNullable;
        table
            .timestamps(true, true);
    })
  }

  const createIngredientsTable = () => {
    return knex.schema.createTable('ingredients', table => {
        table
            .increments();
        table
            .string('name')
            .notNullable;
        table
            .timestamps(true, true);
    })
  }

    return createDishesTable()
        .then(createRecipesTable)
        .then(createIngredientsTable)
        .then(createRecipeIngredientsTable);
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
        .then(knex.schema.dropTableIfExists('recipes'))
        .then(knex.schema.dropTableIfExists('ingredients'))
        .then(knex.schema.dropTableIfExists('recipeIngredients'))
};
