import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/internships', async (req, res) => {
  try {
    const response = await fetch('https://internshala.com/hiring/search');
    const data = await response.json();
    
    res.json(Object.values(data.internships_meta))
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});