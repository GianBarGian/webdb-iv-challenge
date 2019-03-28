const db = require('../../knexfile');

const getDishes = () => {
    db('dishes')
        .select('id', 'name');
}

const addDish = dish => {
    db('dishes')
        .insert(dish)
        .first();
}

const getDish = id => {
    db('dishes')
        .select('id', 'name')
        .where({ id })
        .first();
}

module.exports = {
    getDishes,
    addDish,
    getDish
}