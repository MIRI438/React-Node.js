const db = require('./db');
const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;


const producersController = require('./Controllers/ProducersController');
const eventsController = require('./Controllers/eventsController');

app.use(express.json());

app.use('/api/producer', producersController);  
app.use('/api/event', eventsController);  
app.use('/api//by-email', producersController);  


app.use('/api/*', (req, res, next) => {  
  res.status(404).json({ error: 'API endpoint not found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});