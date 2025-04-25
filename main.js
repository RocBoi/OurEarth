require('dotenv').config(); // Load environment variables from .env

const token = process.env.NASA_API_TOKEN; // Use the token
fetch('data/atmospheric.json')
  .then(response => response.json())
  .then(data => {
    // Display data in the <p> inside #atm-data
    const dataSection = document.querySelector('#atm-data p');
    dataSection.textContent = JSON.stringify(data, null, 2);

    // Example: Pass CO2 data to chart
    if (data.co2_levels) {
      createCO2Chart(data.co2_levels);
    }

    // Example: Pass noble gas data to chart
    if (data.noble_gases) {
      createNobleGasesChart(data.noble_gases);
    }
  })
  .catch(error => {
    console.error('Error loading atmospheric data:', error);
    document.querySelector('#atm-data p').textContent = 'Error loading data.';
  });
// Function to fetch real-time atmospheric data from NASA API and display it
async function fetchEarthData() {
    const token = "your_token_here"; // Ensure this is securely stored (do not expose it in production code)

    const headers = {
        "Authorization": `Bearer ${token}`,
    };

    try {
        const response = await fetch('https://api.nasa.gov/earthdata/api/v1/data', {
            method: 'GET',
            headers: headers,
        });
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging line to check the fetched data

        // Displaying raw data in the HTML section
        document.getElementById("atm-data").innerHTML = `
            <p>Data from NASA: ${JSON.stringify(data)}</p>
        `;

        // Process and render specific data for visualization
        if (data.timestamps && data.co2_levels) {
            renderChart(data);
        }
        if (data.gases && data.concentrations) {
            renderNobleGasChart(data);
        }
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
            labels: data.gases,  // Assuming 'gases' is an array part of the NASA data
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
fetchEarthData(); // Call this function to fetch and display data when the page loads
