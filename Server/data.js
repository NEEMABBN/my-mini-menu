const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');
const data = express();
const port = 2081;

data.use(cors());

data.get('/', (req, res) => {
    const products = [
        {
            "name": "Chocolate waffles",
            "category": "Waffle",
            "price": 7.50,
            "image": faker.image.url(),
            "id": 1
        },
        {
            "name": "Tiramisu",
            "category": "Tiramisu",
            "price": 9.25,
            "image": faker.image.url(),
            "id": 2
        },
        {
            "name": "Baklava",
            "category": "Cake",
            "price": 13.80,
            "image": faker.image.url(),
            "id": 3
        },
        {
            "name": "Brownie cake",
            "category": "Cake",
            "price": 9.50,
            "image": faker.image.url(),
            "id": 4
        },
        {
            "name": "Nonella Cheesecake",
            "category": "Cheesecake",
            "price": 18.50,
            "image": faker.image.url(),
            "id": 5
        },
        {
            "name": "Strawberry cheesecake",
            "category": "Cheesecake",
            "price": 15.50,
            "image": faker.image.url(),
            "id": 6
        },
        {
            "name": "Chocolate cookie",
            "category": "Cake",
            "price": 6.50,
            "image": faker.image.url(),
            "id": 7
        },
        {
            "name": "Lotus cheesecake",
            "category": "cheesecake",
            "price": 15.85,
            "image": faker.image.url(),
            "id": 8
        }
    ]
    res.json(products)
})

data.listen(port, () => {
    console.log(`Data listening at http://localhost:${port}`);
})