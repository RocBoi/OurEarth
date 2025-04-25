<template>
  <div id="app">
    <h1>OurEarth Dashboard</h1>
    <div id="atm-data">
      <p>Loading atmospheric data...</p>
    </div>
    <canvas id="atm-visualization"></canvas>
    <canvas id="noble-gases-chart"></canvas>
  </div>
</template>

<script>
// Import the fetchEarthData function from the API module
import { fetchEarthData } from '../api/nasaAPI';
import { renderChart, renderNobleGasChart } from '../visualization/chartFunctions';

export default {
  data() {
    return {
      earthData: null,
    };
  },
  async created() {
    try {
      // Fetch the data
      this.earthData = await fetchEarthData();
      
      // Process and render the charts
      if (this.earthData) {
        renderChart(this.earthData);
        renderNobleGasChart(this.earthData);
      }
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  },
};
</script>

<style scoped>
/* Add styles specific to the dashboard */
#atm-data {
  margin-bottom: 20px;
}
canvas {
  width: 100%;
  height: 400px;
}
</style>
