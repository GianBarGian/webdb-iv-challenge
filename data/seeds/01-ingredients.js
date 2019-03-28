
exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {name: 'Egg'},
        {name: 'Bacon'},
        {name: 'Parmigiano'},
        {name: 'Spaghetti'},
        {name: 'Ragù sauce'},
        {name: 'Veggies'}
      ]);
    });
};
