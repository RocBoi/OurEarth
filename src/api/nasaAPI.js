// Importing necessary libraries
import axios from 'axios';

// Function to fetch Earth data from NASA API
export async function fetchEarthData() {
    const token = "eyJ0eXAiOiJKV1QiLCJvcmlnaW4iOiJFYXJ0aGRhdGEgTG9naW4iLCJzaWciOiJlZGxqd3RwdWJrZXlfb3BzIiwiYWxnIjoiUlMyNTYifQ.eyJ0eXBlIjoiVXNlciIsInVpZCI6Im91cmVhcnRoIiwiZXhwIjoxNzUwNjQwMzMxLCJpYXQiOjE3NDU0NTYzMzEsImlzcyI6Imh0dHBzOi8vdXJzLmVhcnRoZGF0YS5uYXNhLmdvdiIsImlkZW50aXR5X3Byb3ZpZGVyIjoiZWRsX29wcyIsImFjciI6ImVkbCIsImFzc3VyYW5jZV9sZXZlbCI6M30.Ae3_y0CnZ3TBTUcx2u015nU4Z29rbuhmZWMdBOuRXJBC4FQVTxYzDeXQkOsF8s-N9TDU9bnrMLb_hgmz3k5PWHjojG8T1B1KIT_tEZAagqduyjre4VctAiECBD_EEuknPIhLMUJ9ixSb-8XGBX4jz1niKGuKsGBiYr7Cs7FAFfwzSDodhnZXdjFjBTi_jPwuhVxer5Urv8yOudv-tuQRRHQFXdGUqegStifKREk9uZmmbKpaDGb67eusACiV-q7P96M_X6_Z3MjYLDM5u8ZlKAMshhMUO7tj1LLM9S1eiP0QotyAdzblomR6nXQunPhLpyrI9IWmEDpkjoCSwDWsZA";

    const headers = {
        "Authorization": `Bearer ${token}`,
    };

    try {
        const response = await axios.get('https://api.nasa.gov/earthdata/api/v1/data', {
            headers: headers,
        });

        console.log("Fetched Data:", response.data);  // For debugging
        return response.data;
    } catch (error) {
        console.error("Error fetching data from NASA API:", error);
        throw new Error("Could not fetch data");
    }
}
