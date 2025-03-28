/**
 * Main server file for the Express Hit Counter app
 */
require('dotenv').config();
const app = require('./app');

// Get port from environment or use 8000 as default
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});