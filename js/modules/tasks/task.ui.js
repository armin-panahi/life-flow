/* ==========================================================
   LIFEOS TASK UI
   ========================================================== */

import modal from "../../components/modal.js";

import createTaskForm from "./taskForm.js";

import taskController from "./task.controller.js";

import createTaskCard from "./components/taskCard.js";

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

            console.warn(

                "[TaskUI] #tasks-container not found"

            );

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

        const tasks = taskController.getTasks();

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

                    case "toggle":

                        this.handleToggle(taskId);
                        break;

                    case "delete":

                        this.handleDelete(taskId);
                        break;

                    case "pin":

                        this.handlePin(taskId);
                        break;

                    case "edit":

                        this.handleEdit(taskId);
                        break;

                }

            }

        );

    }

    /* ======================================================
       TOGGLE COMPLETE
    ====================================================== */

    handleToggle(taskId) {

        taskController.toggleComplete(taskId);

        this.render();

    }

    /* ======================================================
       DELETE
    ====================================================== */

    handleDelete(taskId) {

        const confirmed = confirm(

            "Delete this task?"

        );

        if (!confirmed) {

            return;

        }

        taskController.deleteTask(taskId);

        this.render();

    }

    /* ======================================================
       PIN
    ====================================================== */

    handlePin(taskId) {

        const task =

            taskController.getTask(taskId);

        if (!task) {

            return;

        }

        if (task.pinned) {

            taskController.unpinTask(taskId);

        } else {

            taskController.pinTask(taskId);

        }

        this.render();

    }

    /* ======================================================
       EDIT
    ====================================================== */

    handleEdit(taskId) {

        console.log(

            "Edit Task:",

            taskId

        );

        /*
            Modal Integration
            Next Step
        */

    }

    /* ======================================================
       CREATE TASK
    ====================================================== */

    createTask(data) {

        taskController.createTask(data);

        this.render();

    }

    /* ======================================================
        GLOBAL EVENTS
    ====================================================== */

    bindGlobalEvents() {

        const addTaskButton = document.querySelector(

            "#add-task-btn"

        );

        if (!addTaskButton) {

            return;

        }

        addTaskButton.addEventListener(

            "click",

            () => {

                this.openCreateTaskModal();

            }

        );

    }

    /* ======================================================
        CREATE TASK MODAL
    ====================================================== */

    openCreateTaskModal() {

        modal.open({

            title: "Create New Task",

            content: createTaskForm()

        });

        this.bindTaskForm();

    }

    /* ======================================================
        TASK FORM
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

                const formData = new FormData(form);

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