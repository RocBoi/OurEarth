const viewer = new Cesium.Viewer('cesiumContainer', {
  timeline: true,
  animation: true
});

const nobleGasLayers = {
  neon: null,
  argon: null,
  krypton: null,
  xenon: null,
  helium: null
};

function toggleLayer(gas) {
  if (nobleGasLayers[gas]) {
    viewer.imageryLayers.remove(nobleGasLayers[gas]);
    nobleGasLayers[gas] = null;
  } else {
    const layer = viewer.imageryLayers.addImageryProvider(
      new Cesium.IonImageryProvider({ assetId: 2 }) // Placeholder ID
    );
    nobleGasLayers[gas] = layer;
  }
}
async function fetchAirData(lat = 33.749, lon = -84.388) {
  const response = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone`);
  const data = await response.json();
  console.log("Air data:", data);
  
  // Example: Update UI or globe based on ozone (simulating noble gas proxy)
  const ozone = data.hourly.ozone[0];
  document.getElementById("realtime").textContent = `Ozone: ${ozone} μg/m³`;
}

fetchAirData();
setInterval(() => fetchAirData(), 300000); // 5 minutes
// Fetch air quality data from Open-Meteo
async function fetchAirData(lat = 33.749, lon = -84.388) {
  try {
    const response = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=ozone,carbon_monoxide,nitrogen_dioxide`);
    const data = await response.json();
    
    // Log data to console to verify it's being fetched correctly
    console.log("Fetched Air Quality Data:", data);
    
    // Example of processing and displaying ozone data (you can update this as needed)
    const ozone = data.hourly.ozone[0];
    document.getElementById("realtime").textContent = `Ozone: ${ozone} µg/m³`;

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data on load
fetchAirData();

// Optionally, update every 5 minutes
setInterval(() => fetchAirData(), 300000); // 5 minutes
