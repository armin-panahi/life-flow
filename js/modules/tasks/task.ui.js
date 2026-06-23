/* ==========================================================
   LIFEOS TASK UI
   ========================================================== */

import modal from "../../components/modal.js";

import taskService from "./task.service.js";

import createTaskForm from "./taskForm.js";

import createTaskCard from "./taskCard.js";

/* ==========================================================
   TASK UI
   ========================================================== */

class TaskUI {

    constructor() {

        this.container = null;

    }

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        this.container = document.querySelector(

            "#tasks-container"

        );

        if (!this.container) {

            return;

        }

        this.render();

        this.bindEvents();

        this.bindGlobalEvents();

    }

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        const tasks = taskService.getAll();

        if (!tasks.length) {

            this.container.innerHTML = `

                <div class="empty-state">

                    <h3>No Tasks Yet</h3>

                    <p>
                        Create your first task to get started.
                    </p>

                </div>

            `;

            return;

        }

        this.container.innerHTML = tasks

            .map(task => createTaskCard(task))

            .join("");

    }

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        this.container.addEventListener(

            "click",

            (event) => {

                const button = event.target.closest(

                    "[data-action]"
                );

                if (!button) {

                    return;

                }

                const card = event.target.closest(

                    "[data-task-id]"
                );

                if (!card) {

                    return;

                }

                const taskId =

                    card.dataset.taskId;

                const action =

                    button.dataset.action;

                switch (action) {

                    case "delete":

                        this.deleteTask(taskId);

                        break;

                }

            }

        );

    }

    /* ======================================================
       DELETE
    ====================================================== */

    deleteTask(taskId) {

        const confirmed = confirm(

            "Delete this task?"
        );

        if (!confirmed) {

            return;

        }

        taskService.delete(taskId);

        this.render();

    }

    /* ======================================================
       CREATE
    ====================================================== */

    createTask(task) {

        taskService.create(task);

        this.render();

    }

    /* ======================================================
       GLOBAL EVENTS
    ====================================================== */

    bindGlobalEvents() {

        const button = document.querySelector(

            "#add-task-btn"
        );

        if (!button) {

            return;

        }

        button.addEventListener(

            "click",

            () => {

                this.openCreateTaskModal();

            }

        );

    }

    /* ======================================================
       MODAL
    ====================================================== */

    openCreateTaskModal() {

        modal.open({

            title: "Create New Task",

            content: createTaskForm()

        });

        this.bindTaskForm();

    }

    /* ======================================================
       FORM
    ====================================================== */

    bindTaskForm() {

        const form = document.querySelector(

            "#task-form"
        );

        if (!form) {

            return;

        }

        form.addEventListener(

            "submit",

            (event) => {

                event.preventDefault();

                const formData =

                    new FormData(form);

                const task = {

                    title:

                        formData.get("title"),

                    description:

                        formData.get("description"),

                    priority:

                        formData.get("priority"),

                    category:

                        formData.get("category"),

                    dueDate:

                        formData.get("dueDate"),

                    estimatedMinutes:

                        Number(
                            formData.get(
                                "estimatedMinutes"
                            )
                        ),

                    color:

                        formData.get("color")

                };

                this.createTask(task);

                modal.close();

            }

        );

    }

}

const taskUI = new TaskUI();

export default taskUI;