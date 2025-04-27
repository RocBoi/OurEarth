import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// Basic Cesium viewer on the container div
const viewer = new Viewer('cesiumContainer', {
    terrainProvider: undefined, // Flat Earth (default). We can switch to real 3D terrain later!
});
