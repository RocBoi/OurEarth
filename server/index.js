import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/earthdata', async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/earthdata/api/v1/data', {
            headers: {
                Authorization: `Bearer ${process.env.NASA_TOKEN}`,
            },
        });
        res.json(response.data);
    } catch (err) {
        console.error("NASA API error:", err);
        res.status(500).json({ error: 'Failed to fetch Earth data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
