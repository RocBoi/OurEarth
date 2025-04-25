// Function to render CO2 levels data (Example visualization)
function renderChart(data) {
    const ctx = document.getElementById('atm-visualization').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Line chart to visualize CO2 levels over time
        data: {
            labels: data.timestamps,  // Assuming 'timestamps' is part of the NASA data
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
        type: 'bar', // Bar chart to visualize noble gases concentration
        data: {
            labels: data.gases,  // Assuming 'gases' is part of the NASA data
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
function createCO2Chart(co2Levels) {
  const ctx = document.getElementById('atm-visualization').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: co2Levels.map(item => item.date),
      datasets: [{
        label: 'CO2 ppm',
        data: co2Levels.map(item => item.value),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false
      }]
    }
  });
}

function createNobleGasesChart(gases) {
  const ctx = document.getElementById('noble-gases-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: gases.map(g => g.gas),
      datasets: [{
        label: 'Concentration (%)',
        data: gases.map(g => g.concentration),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    }
  });
}
