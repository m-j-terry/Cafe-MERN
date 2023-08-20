const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection 

db.on('connected', () => {
    console.log(`connected to ${db.name} at ${db.host}`)
})