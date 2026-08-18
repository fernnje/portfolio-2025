import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { injectSpeedInsights } from "@vercel/speed-insights";

gsap.registerPlugin(ScrollTrigger);

// Initialize Vercel Speed Insights
injectSpeedInsights();

createApp(App).mount("#app");
