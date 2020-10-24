const mongoose = require('mongoose');
const UserView = require('../models/userView');
require('../config/db.config');


const getRandomDate = function (from, to) {
    from = from.getTime();
    to = to.getTime();
    return new Date(from + Math.random() * (to - from));
}
const documents = [];
const randomStartDate = new Date('2020-10');
const randomEndDate = new Date();

for (let productId = 1; productId <= 50; productId++) {
    for (let userId = 1; userId <= 10; userId++) {
        documents.push({
            productId,
            userId,
            date: getRandomDate(randomStartDate, randomEndDate)
        })
    }
}

UserView.insertMany(documents, function (error, docs) {
    if (error) {
        console.log(`Error while populating data`);
    } else {
        console.log(`documents inserted successfully`);
    }
})