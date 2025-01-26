const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all todos
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while trying to get all todos.' });
    }
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const result = await pool.query('INSERT INTO todos (title) VALUES ($1) RETURNING *', [title]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while trying to create a new todo.' });
  }
});

module.exports = router;