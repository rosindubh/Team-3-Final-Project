const mongoose = require('mongoose');
require('dotenv').config();

const connection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected to Database...');
    } catch (error) {
        console.log(error);
    }
}

connection();