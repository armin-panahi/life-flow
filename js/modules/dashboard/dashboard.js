/* ==========================================================
   LIFEOS DASHBOARD MODULE
   ========================================================== */

import { initDashboardChart } from "./chart.js";

class Dashboard {

    init() {

        this.initializeCharts();

    }

    initializeCharts() {

        initDashboardChart();

    }

}

const dashboard = new Dashboard();

export default dashboard;