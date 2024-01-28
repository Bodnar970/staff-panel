if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define the port

const playerDataRouter = require('./routes/playerData');

// Use the playerDataRouter for /api routes
app.use('/api', playerDataRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
