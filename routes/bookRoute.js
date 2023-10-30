const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create a new book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a list of all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get details of a specific book by its ID
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404).json({ error: 'Sorry! No Such book Exists!' });
  } else {
    res.json(book);
  }
});

// Update a book's details by its ID
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a book by its ID
router.delete('/:id', async (req, res) => {
  const result = await Book.findByIdAndDelete(req.params.id);
  if (!result) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.status(204).send();
  }
});

module.exports = router;
