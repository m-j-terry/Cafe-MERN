require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Espresso', sortOrder: 10},
        {name: 'Specialties', sortOrder: 20},
        {name: 'Drip', sortOrder: 30},
        {name: 'Tea', sortOrder: 40},
        {name: 'Pastries', sortOrder: 50},
        // {name: 'Desserts', sortOrder: 60},
        // {name: 'Drinks', sortOrder: 70},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Espresso', emoji: '', category: categories[0], price: 3.50},
        {name: 'Macchiato', emoji: '', category: categories[1], price: 3.75},
        {name: 'Cortado', emoji: '', category: categories[1], price: 4.00},
        {name: 'Cappuccino', emoji: '', category: categories[1], price: 4.25},
        {name: 'Latte', emoji: '', category: categories[1], price: 4.75},
        {name: 'Mocha (small)', emoji: '', category: categories[1], price: 4.50},
        {name: 'Mocha (large)', emoji: '', category: categories[1], price: 5.00},
        {name: 'Matcha (small)', emoji: '', category: categories[1], price: 5.00},
        {name: 'Matcha (large)', emoji: '', category: categories[1], price: 5.75},
        {name: 'Turmeric Latte (small)', emoji: '', category: categories[1], price: 5.00},
        {name: 'Turmeric Latte (large)', emoji: '', category: categories[1], price: 5.75},
        {name: 'Hot Chocolate (small)', emoji: '', category: categories[1], price: 3.75},
        {name: 'Hot Chocolate (large)', emoji: '', category: categories[1], price: 4.25},
        {name: 'Drip (small)', emoji: '', category: categories[2], price: 2.50},
        {name: 'Drip (medium)', emoji: '', category: categories[2], price: 3.00},
        {name: 'Drip (large)', emoji: '', category: categories[2], price: 3.50},
        {name: 'Tea', emoji: '', category: categories[3], price: 1.95},
        {name: 'Muffin', emoji: '', category: categories[4], price: 6.25},
        {name: 'Pistachio Bread', emoji: '', category: categories[4], price: 8.75},
        // {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
        // {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
        // {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
        // {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
        // {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
        // {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
        // {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
        // {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
        // {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
    ]);

    console.log(items)

    process.exit();

})();