import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/internships', async (req, res) => {
  try {
    const response = await fetch(process.env.VITE_INTERNSHALA_API_URL);
    const data = await response.json();
    console.log('Fetched data from Internshala API:', data);
    
    res.json(Object.values(data.internships_meta))
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});