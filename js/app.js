/* ==========================================================
   LIFEOS APPLICATION
========================================================== */

import sidebar from "./layout/sidebar.js";

import dashboard from "./modules/dashboard/dashboard.js";

import taskUI from "./modules/tasks/task.ui.js";

/* ==========================================================
   APP
========================================================== */

class App {

    init() {

        console.log(

            "%cLifeOS Started 🚀",

            "color:#6366f1;font-weight:bold;"

        );

        sidebar.init();

        dashboard.init();

        taskUI.init();

    }

}

const app = new App();

document.addEventListener(

    "DOMContentLoaded",

    () => {

        app.init();

    }

);