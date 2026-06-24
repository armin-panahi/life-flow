/* ==========================================================
   LIFEOS APPLICATION
   ========================================================== */

import taskUI from "./modules/tasks/task.ui.js";

import dashboard from "./modules/dashboard/dashboard.js";

/* ==========================================================
   APP
   ========================================================== */

class App {

    init() {

        console.log(

            "%cLifeOS Started 🚀",

            "color:#6366f1;font-weight:bold;"

        );

        this.initializeModules();

    }

    initializeModules() {

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