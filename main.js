// Function to fetch real-time atmospheric data from NASA API and display it
async function fetchEarthData() {
    const token = "eyJ0eXAiOiJKV1QiLCJvcmlnaW4iOiJFYXJ0aGRhdGEgTG9naW4iLCJzaWciOiJlZGxqd3RwdWJrZXlfb3BzIiwiYWxnIjoiUlMyNTYifQ.eyJ0eXBlIjoiVXNlciIsInVpZCI6Im91cmVhcnRoIiwiZXhwIjoxNzUwNjQwMzMxLCJpYXQiOjE3NDU0NTYzMzEsImlzcyI6Imh0dHBzOi8vdXJzLmVhcnRoZGF0YS5uYXNhLmdvdiIsImlkZW50aXR5X3Byb3ZpZGVyIjoiZWRsX29wcyIsImFjciI6ImVkbCIsImFzc3VyYW5jZV9sZXZlbCI6M30.Ae3_y0CnZ3TBTUcx2u015nU4Z29rbuhmZWMdBOuRXJBC4FQVTxYzDeXQkOsF8s-N9TDU9bnrMLb_hgmz3k5PWHjojG8T1B1KIT_tEZAagqduyjre4VctAiECBD_EEuknPIhLMUJ9ixSb-8XGBX4jz1niKGuKsGBiYr7Cs7FAFfwzSDodhnZXdjFjBTi_jPwuhVxer5Urv8yOudv-tuQRRHQFXdGUqegStifKREk9uZmmbKpaDGb67eusACiV-q7P96M_X6_Z3MjYLDM5u8ZlKAMshhMUO7tj1LLM9S1eiP0QotyAdzblomR6nXQunPhLpyrI9IWmEDpkjoCSwDWsZA";

    const headers = {
        "Authorization": `Bearer ${token}`,
    };

    try {
        const response = await fetch('https://api.nasa.gov/earthdata/api/v1/data', {
            method: 'GET',
            headers: headers,
        });
        const data = await response.json();

        // Display data in the HTML section
        document.getElementById("atm-data").innerHTML = `
            <p>Data from NASA Earth: ${JSON.stringify(data)}</p>
        `;

        // Process and render specific data for visualization
        renderChart(data);
        renderNobleGasChart(data);
    } catch (error) {
        console.error('Error fetching data from NASA:', error);
        document.getElementById("atm-data").innerHTML = '<p>Error fetching NASA data.</p>';
    }
}

// Function to render CO2 levels data (Example visualization)
function renderChart(data) {
    const ctx = document.getElementById('atm-visualization').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.timestamps,  // Assuming timestamps is part of the NASA data
            datasets: [{
                label: 'CO2 Levels (ppm)',
                data: data.co2_levels,  // Example, make sure this exists in the data
                borderColor: 'rgba(0, 123, 255, 0.6)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'CO2 (ppm)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to render noble gases data (Example visualization)
function renderNobleGasChart(data) {
    const ctx = document.getElementById('noble-gases-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.gases,  // Assuming 'gases' are part of the NASA data
            datasets: [{
                label: 'Concentration (ppm)',
                data: data.concentrations,  // Example, make sure this exists in the data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize the data fetching and chart rendering
fetchEarthData();
