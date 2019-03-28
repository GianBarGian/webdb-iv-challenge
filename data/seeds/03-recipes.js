
exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {name: 'egg and bacon 1', instructions: "gibberish", dishId: 1 },
        {name: 'egg and bacon 2', instructions: "gibberish", dishId: 1 },
        {name: 'omelette 1', instructions: "gibberish", dishId: 2 },
        {name: 'omelette 2', instructions: "gibberish", dishId: 2 },
        {name: 'pasta al sugo 1', instructions: "gibberish", dishId: 3 },
        {name: 'pasta al sugo 2', instructions: "gibberish", dishId: 3 }
      ]);
    });
};
