const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET feedback data from database if necessary
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "feedback";`;
  pool.query(queryText).then(result => {
    // Sends back the array of objects holding feedback data 
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

// POST user input data into database
router.post('/', (req, res) => {
    const newFeedback = req.body;
    
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    
    // Sending to DATABASE
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error posting: ', err);
            res.sendStatus(500);
        });

});

module.exports = router;