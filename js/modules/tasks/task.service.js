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

    create(task) {

        const tasks = this.getAll();

        const newTask = {

            id: crypto.randomUUID(),

            createdAt: Date.now(),

            completed: false,

            ...task

        };

        tasks.push(newTask);

        this.saveAll(tasks);

        return newTask;

    }

    delete(taskId) {

        const tasks = this.getAll();

        const filteredTasks = tasks.filter(

            task => task.id !== taskId

        );

        this.saveAll(filteredTasks);

    }

}

const taskService = new TaskService();

export default taskService;