import Chart from 'chart.js/auto';

// Function to render CO2 levels (line chart)
export function renderChart(data) {
    const ctx = document.getElementById('atm-visualization').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.timestamps,  // Assuming timestamps in the API response
            datasets: [{
                label: 'CO2 Levels (ppm)',
                data: data.co2_levels,  // Assuming co2_levels exists in the API response
                borderColor: 'rgba(0, 123, 255, 0.6)',
                fill: false,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Time' },
                },
                y: {
                    title: { display: true, text: 'CO2 (ppm)' },
                    beginAtZero: true,
                }
            }
        }
    });
}

// Function to render Noble gases data (bar chart)
export function renderNobleGasChart(data) {
    const ctx = document.getElementById('noble-gases-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.gases,  // Assuming gases is an array in the API response
            datasets: [{
                label: 'Concentration (ppm)',
                data: data.concentrations,  // Assuming concentrations exists in the API response
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
                  }
