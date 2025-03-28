/**
 * Routes for Hit Counter Service
 */
const express = require('express');
const router = express.Router();

// Global counter variable equivalent to the one in the Flask app
let hits = 0;

/**
 * @swagger
 * /hits:
 *   get:
 *     summary: Returns the current hit count
 *     description: Get the current number of hits
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 counter:
 *                   type: integer
 */
router.get('/', (req, res) => {
  res.status(200).json({ counter: hits });
});

/**
 * @swagger
 * /hits:
 *   put:
 *     summary: Increments the hit counter
 *     description: Increments the counter by 1
 *     responses:
 *       200:
 *         description: Counter incremented successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 counter:
 *                   type: integer
 */
router.put('/', (req, res) => {
  hits += 1;
  res.status(200).json({ counter: hits });
});

module.exports = router;