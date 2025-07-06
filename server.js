
const express = require('express');
const cors = require('cors');
const headlines = require('./utils/headlines');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const data = {
    rating: 4.3,
    reviews: Math.floor(Math.random() * 500) + 1,
    headline: headlines.generateHeadline(name, location),
  };
  res.json(data);
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const headline = headlines.generateHeadline(name, location);
  res.json({ headline });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
