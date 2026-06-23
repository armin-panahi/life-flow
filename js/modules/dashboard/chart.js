/* ==========================================================
   LIFEOS DASHBOARD CHART
   ========================================================== */

export function initDashboardChart() {

    const canvas = document.querySelector(

        "#productivity-chart"

    );

    if (!canvas) {

        return;

    }

    new Chart(canvas, {

        type: "line",

        data: {

            labels: [

                "Mon",

                "Tue",

                "Wed",

                "Thu",

                "Fri",

                "Sat",

                "Sun"

            ],

            datasets: [

                {

                    label: "Productivity",

                    data: [

                        72,

                        81,

                        78,

                        89,

                        92,

                        84,

                        95

                    ],

                    tension: 0.4,

                    fill: true,

                    borderWidth: 3,

                    backgroundColor:

                        "rgba(99,102,241,.15)",

                    borderColor:

                        "#6366f1"

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                x: {

                    grid: {

                        display: false

                    }

                },

                y: {

                    beginAtZero: true,

                    max: 100

                }

            }

        }

    });

}