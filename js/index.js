import { drawDeviceGraph } from "./graphs/device.js";
import { drawDwellingGraph } from "./graphs/dwelling.js";
import { drawGenGraph } from "./graphs/gen.js";

// call the graphs here
drawDeviceGraph();
drawDwellingGraph();
drawGenGraph();

const svg = d3.select("#slide-content");
