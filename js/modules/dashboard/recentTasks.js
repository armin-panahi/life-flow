/* ==========================================================
   LIFEOS RECENT TASKS WIDGET
========================================================== */

import taskService from "../tasks/task.service.js";

export default function renderRecentTasks() {

    const dashboardGrid = document.querySelector(
        "#dashboard-grid"
    );

    if (!dashboardGrid) {

        return;

    }

    const tasks = taskService.getRecent(5);

    const widget = document.createElement("div");

    widget.className = "card widget";

    widget.innerHTML = `

        <div class="card-header">

            <h3 class="card-title">
                Recent Tasks
            </h3>

            <p class="card-subtitle">
                Latest created tasks
            </p>

        </div>

        <div class="card-body">

            ${
                tasks.length
                    ? `
                        <div class="widget-list">

                            ${tasks.map(task => `

                                <div class="widget-item">

                                    <div>

                                        <strong>
                                            ${task.title}
                                        </strong>

                                        <div class="text-muted">

                                            ${task.category || "General"}

                                        </div>

                                    </div>

                                    <div>

                                        ${
                                            task.completed
                                                ? "✅"
                                                : "⏳"
                                        }

                                    </div>

                                </div>

                            `).join("")}

                        </div>
                    `
                    : `
                        <div class="empty-state">

                            <p>
                                No tasks created yet.
                            </p>

                        </div>
                    `
            }

        </div>

    `;

    dashboardGrid.appendChild(widget);

}