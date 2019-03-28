
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Egg and Bacon'},
        {name: 'Omelette'},
        {name: 'Pasta al sugo'}
      ]);
    });
};
