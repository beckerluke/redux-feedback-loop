const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get feedback data from database
router.get('/', (req, res) => {
  let queryText = 'SELECT feeling, understanding, support, comments FROM "feedback";';
  pool.query(queryText).then(result => {
    // Sends back the array of objects holding feedback data 
    console.log(result.rows);
    
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting books', error);
    res.sendStatus(500);
  });
});

module.exports = router