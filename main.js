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
