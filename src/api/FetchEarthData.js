import axios from 'axios';

export async function fetchEarthData() {
    try {
        const res = await axios.get('http://localhost:5000/api/earthdata');
        return res.data;
    } catch (err) {
        console.error("Proxy fetch error:", err);
        throw new Error("Unable to load Earth data");
    }
}
