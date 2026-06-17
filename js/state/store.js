/* ==========================================================
   LIFEOS CENTRAL STORE
   ========================================================== */

import storage from "../core/storage.js";

import { STORAGE_KEYS } from "../constants.js";

import eventBus from "../core/eventBus.js";

import { EVENTS } from "../constants.js";

/* ==========================================================
   STORE CLASS
   ========================================================== */

class Store {

    constructor() {

        this.state = {

            settings: storage.get(

                STORAGE_KEYS.SETTINGS,

                {}

            ),

            user: storage.get(

                STORAGE_KEYS.USER,

                {}

            ),

            tasks: storage.get(

                STORAGE_KEYS.TASKS,

                []

            ),

            habits: storage.get(

                STORAGE_KEYS.HABITS,

                []

            ),

            finance: storage.get(

                STORAGE_KEYS.FINANCE,

                []

            ),

            goals: storage.get(

                STORAGE_KEYS.GOALS,

                []

            ),

            journal: storage.get(

                STORAGE_KEYS.JOURNAL,

                []

            ),

            calendar: storage.get(

                STORAGE_KEYS.CALENDAR,

                []

            ),

            achievements: storage.get(

                STORAGE_KEYS.ACHIEVEMENTS,

                []

            ),

            analytics: storage.get(

                STORAGE_KEYS.ANALYTICS,

                {}

            )

        };

    }

    /* ======================================================
       GET
    ====================================================== */

    get(key) {

        return this.state[key];

    }

    /* ======================================================
       SET
    ====================================================== */

    set(key, value) {

        this.state[key] = value;

        storage.set(key, value);

        eventBus.emit(

            EVENTS.STORAGE_CHANGED,

            {

                key,

                value

            }

        );

    }

    /* ======================================================
       UPDATE
    ====================================================== */

    update(key, updater) {

        const current = this.state[key];

        const next = updater(current);

        this.set(

            key,

            next

        );

    }

    /* ======================================================
       PUSH ITEM
    ====================================================== */

    push(key, item) {

        if (

            !Array.isArray(

                this.state[key]

            )

        ) {

            return;

        }

        this.state[key].push(item);

        storage.set(

            key,

            this.state[key]

        );

        eventBus.emit(

            EVENTS.STORAGE_CHANGED,

            {

                key,

                value: this.state[key]

            }

        );

    }

    /* ======================================================
       REMOVE BY ID
    ====================================================== */

    remove(key, id) {

        if (

            !Array.isArray(

                this.state[key]

            )

        ) {

            return;

        }

        this.state[key] =

            this.state[key].filter(

                item => item.id !== id

            );

        storage.set(

            key,

            this.state[key]

        );

        eventBus.emit(

            EVENTS.STORAGE_CHANGED,

            {

                key,

                value: this.state[key]

            }

        );

    }

    /* ======================================================
       FIND
    ====================================================== */

    find(key, id) {

        if (

            !Array.isArray(

                this.state[key]

            )

        ) {

            return null;

        }

        return this.state[key].find(

            item => item.id === id

        );

    }

    /* ======================================================
       RESET MODULE
    ====================================================== */

    reset(key) {

        this.state[key] = [];

        storage.set(

            key,

            []

        );

    }

    /* ======================================================
       RELOAD FROM STORAGE
    ====================================================== */

    reload(key) {

        this.state[key] =

            storage.get(

                key,

                this.state[key]

            );

    }

    /* ======================================================
       EXPORT STATE
    ====================================================== */

    export() {

        return structuredClone(

            this.state

        );

    }

    /* ======================================================
       IMPORT STATE
    ====================================================== */

    import(data) {

        this.state = {

            ...this.state,

            ...data

        };

        Object.entries(

            this.state

        ).forEach(

            ([key, value]) => {

                storage.set(

                    key,

                    value

                );

            }

        );

    }

}

/* ==========================================================
   SINGLETON
   ========================================================== */

const store = new Store();

export default store;