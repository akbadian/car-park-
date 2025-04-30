const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, model: 'Toyota Corolla' }, { id: 2, model: 'Honda Civic' }])});

module.exports = router;

// This code defines a route for the Express application that responds to GET requests to the root URL ("/") with a JSON array of car objects.
// Each car object contains an id and a model name. The route is defined using the Express Router, which allows for modular route handling.