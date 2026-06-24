/* ==========================================================
   LIFEOS TASK SERVICE
========================================================== */

import storage from "../../core/storage.js";

const STORAGE_KEY = "lifeos_tasks";

class TaskService {

    getAll() {

        return storage.get(
            STORAGE_KEY,
            []
        );

    }

    saveAll(tasks) {

        return storage.set(
            STORAGE_KEY,
            tasks
        );

    }

    getById(taskId) {

        return this.getAll().find(
            task => task.id === taskId
        );

    }

    create(task) {

        const tasks = this.getAll();

        const newTask = {

            id: crypto.randomUUID(),

            createdAt: Date.now(),

            completed: false,

            pinned: false,

            ...task

        };

        tasks.push(newTask);

        this.saveAll(tasks);

        return newTask;

    }

    update(taskId, updates) {

        const tasks = this.getAll();

        const updatedTasks = tasks.map(task =>

            task.id === taskId

                ? {
                    ...task,
                    ...updates
                }

                : task

        );

        this.saveAll(updatedTasks);

    }

    toggleComplete(taskId) {

        const task = this.getById(taskId);

        if (!task) {

            return;

        }

        this.update(taskId, {

            completed: !task.completed

        });

    }

    delete(taskId) {

        const tasks = this.getAll();

        const filteredTasks = tasks.filter(

            task => task.id !== taskId

        );

        this.saveAll(filteredTasks);

    }

    getRecent(limit = 5) {

        return this.getAll()

            .sort(
                (a, b) =>
                    b.createdAt - a.createdAt
            )

            .slice(0, limit);

    }

}

const taskService = new TaskService();

export default taskService;