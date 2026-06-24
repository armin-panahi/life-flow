/* ==========================================================
   LIFEOS DASHBOARD MODULE
========================================================== */

import { initDashboardChart } from "./chart.js";

import renderRecentTasks from "./recentTasks.js";

class Dashboard {

    init() {

        this.initializeCharts();

        this.initializeWidgets();

    }

    initializeCharts() {

        initDashboardChart();

    }

    initializeWidgets() {

        renderRecentTasks();

    }

}

const dashboard = new Dashboard();

export default dashboard;