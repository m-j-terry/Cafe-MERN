require('dotenv').config()
require('./database')

const Category = require('../models/category')
const Item = require('../models/item')

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Espresso', sortOrder: 10},
        {name: 'Specialties', sortOrder: 20},
        {name: 'Drip', sortOrder: 30},
        {name: 'Tea', sortOrder: 40},
        {name: 'Pastries', sortOrder: 50},
        {name: 'Coffee', sortOrder: 60}
    ]);

    await Item.deleteMany({})
    const items = await Item.create([
        {name: 'Espresso', imageUrl: 'https://media.istockphoto.com/id/545335342/photo/coffee-espresso-in-white-background.jpg?s=170667a&w=0&k=20&c=HwMb50CqrDXuXnARCw4rJPt0YddeepHHZx1QkvVrSLg=', category: categories[0], price: 3.50},
        {name: 'Macchiato', imageUrl: 'https://img.freepik.com/premium-photo/glass-with-latte-macchiato-white-background_392895-105815.jpg?w=740', category: categories[1], price: 3.75},
        {name: 'Cortado', imageUrl: 'https://img.freepik.com/premium-photo/cortado-latte-isolated-white-background_972841-63.jpg', category: categories[1], price: 4.00},
        {name: 'Cappuccino', imageUrl: 'https://img.freepik.com/premium-photo/hot-coffee-cappuccino-with-foam-white-background_33725-33.jpg?w=1380', category: categories[1], price: 4.25},
        {name: 'Latte', imageUrl: 'https://img.freepik.com/premium-photo/white-cup-latte-coffee-isolated-white-background-file-contains-with-clipping-path-so-easy-work_24076-852.jpg?w=2000', category: categories[1], price: 4.75},
        {name: 'Mocha (small)', imageUrl: 'https://www.coffeeisland.ae/assets/img/product/SpanishLatte4.png', category: categories[1], price: 4.50},
        {name: 'Mocha (large)', imageUrl: 'https://www.coffeeisland.ae/assets/img/product/SpanishLatte4.png', category: categories[1], price: 5.00},
        {name: 'Matcha (small)', imageUrl: 'https://pantenger.com/cdn/shop/articles/latte_2000x.jpg?v=1546938206', category: categories[1], price: 5.00},
        {name: 'Matcha (large)',  imageUrl: 'https://pantenger.com/cdn/shop/articles/latte_2000x.jpg?v=1546938206', category: categories[1], price: 5.75},
        {name: 'Turmeric Latte (small)',  imageUrl: 'https://img.freepik.com/premium-photo/golden-milk-with-turmeric-powder-glass-white-background_245188-7.jpg?w=2000', category: categories[1], price: 5.00},
        {name: 'Turmeric Latte (large)',  imageUrl: 'https://img.freepik.com/premium-photo/golden-milk-with-turmeric-powder-glass-white-background_245188-7.jpg?w=2000', category: categories[1], price: 5.75},
        {name: 'Hot Chocolate (small)',  imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/124/457/original/hot-chocolate-with-coffee-cup-isolated-on-white-background-include-clipping-path-free-photo.jpg', category: categories[1], price: 3.75},
        {name: 'Hot Chocolate (large)',  imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/124/457/original/hot-chocolate-with-coffee-cup-isolated-on-white-background-include-clipping-path-free-photo.jpg', category: categories[1], price: 4.25},
        {name: 'Drip (small)',  imageUrl: 'https://www.tgroastonline.com/uploads/1/3/1/2/131295982/s528531668236995328_p47_i1_w1000.jpeg', category: categories[2], price: 2.50},
        {name: 'Drip (medium)',  imageUrl: 'https://www.tgroastonline.com/uploads/1/3/1/2/131295982/s528531668236995328_p47_i1_w1000.jpeg', category: categories[2], price: 3.00},
        {name: 'Drip (large)',  imageUrl: 'https://www.tgroastonline.com/uploads/1/3/1/2/131295982/s528531668236995328_p47_i1_w1000.jpeg', category: categories[2], price: 3.50},
        {name: 'Tea',  imageUrl: 'https://img3.goodfon.com/wallpaper/big/1/e2/tea-chay-chashka-blyudce-listiki.jpg', category: categories[3], price: 1.95},
        {name: 'Muffin',  imageUrl: 'https://img.freepik.com/premium-photo/blueberry-muffins-white-background_1205-5086.jpg?w=2000', category: categories[4], price: 6.25},
        {name: 'Pistachio Bread',  imageUrl: 'https://www.savvysavingcouple.net/wp-content/uploads/2023/02/Pistachio-bread-on-white-plate-1.jpg', category: categories[4], price: 8.75},
        {name: 'Little Wolf, Laayyoo', imageUrl: 'https://sprudge.com/wp-content/uploads/2017/03/Bag-Front-740x493.jpg', category: categories[5], price: 19.95},
        {name: 'Coptic Light, Las Palmas', imageUrl: 'https://copticlight.org/cdn/shop/articles/B_W_bag_Oct2020_small_22e153ca-8726-4c71-ac64-98040c120f32_1024x1024.jpg?v=1603813947', category: categories[5], price: 18.75}
    ]);

    console.log(items)

    process.exit()

})()