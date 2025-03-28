/**
 * Express app configuration
 */
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Create Express app
const app = express();

// Parse JSON request body
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hit Counter Service',
      version: '0.0.1',
      description: 'This service counts the number of hits to a URL',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Load routes
const hitsRoutes = require('./routes/hits');
app.use('/hits', hitsRoutes);

module.exports = app;