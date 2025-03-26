const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require("path");
require('dotenv').config();
const serverless = require('serverless-http');

const app = express();
const PORT = process.env.PORT || 5000;

const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../client/dist")

app.use(express.static(buildpath))
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data.slice(0, 3);
    res.json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

module.exports.handler = serverless(app);