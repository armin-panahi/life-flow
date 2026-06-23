/* ==========================================================
   LIFEOS TASK CARD
   ========================================================== */

export default function createTaskCard(task) {

    return `

        <article
            class="task-card"
            data-task-id="${task.id}"
        >

            <div
                class="task-card__accent"
                style="
                    background:${task.color || "#6366f1"}
                "
            ></div>

            <div class="task-card__content">

                <div class="task-card__header">

                    <div>

                        <h3
                            class="task-card__title"
                        >

                            ${task.title}

                        </h3>

                    </div>

                    <button
                        class="task-action"
                        data-action="delete"
                    >

                        <i
                            class="fa-solid fa-trash"
                        ></i>

                    </button>

                </div>

                <p
                    class="task-card__description"
                >

                    ${task.description || ""}

                </p>

                <div
                    class="task-card__meta"
                >

                    <span
                        class="task-chip"
                    >

                        ${task.priority}

                    </span>

                    <span
                        class="task-chip"
                    >

                        ${task.category || "General"}

                    </span>

                </div>

            </div>

        </article>

    `;

}