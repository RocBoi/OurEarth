// Fetch atmospheric data and display it
async function fetchAirData() {
    try {
        // Replace with the actual API endpoint for your atmospheric data
        const response = await fetch('https://api.example.com/atmospheric-data'); // Update this with the real API endpoint
        const data = await response.json();

        // Display fetched data in the HTML
        document.getElementById("atm-data").innerText = `CO2 Levels: ${data.co2} ppm, Temperature: ${data.temperature}°C`;

        // Render the chart with fetched data
        renderChart(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById("atm-data").innerText = 'Error fetching data.';
    }
}

// Render the data into the chart
function renderChart(data) {
    const ctx = document.getElementById('atm-visualization').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.timestamps, // Assuming `timestamps` is an array of time points
            datasets: [{
                label: 'CO2 Levels (ppm)',
                data: data.co2_levels, // Assuming `co2_levels` is an array of CO2 data points
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

// Call the function to fetch and display data on page load
fetchAirData();

// Optional: Additional functions for noble gases or other visualizations
function fetchNobleGasData() {
    // Similar fetch logic for noble gases
    fetch('https://api.example.com/noble-gas-data')  // Replace with actual noble gas API
        .then(response => response.json())
        .then(data => {
            renderNobleGasChart(data);
        })
        .catch(error => {
            console.error('Error fetching noble gas data:', error);
        });
}

// Render noble gases data into a separate chart
function renderNobleGasChart(data) {
    const ctx = document.getElementById('noble-gases-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.gases, // Assuming `gases` is an array of noble gases names
            datasets: [{
                label: 'Concentration Levels (ppm)',
                data: data.concentration_levels, // Assuming `concentration_levels` is an array
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

// Call noble gas data function if required
fetchNobleGasData();
