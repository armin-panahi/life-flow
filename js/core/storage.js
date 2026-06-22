/* ==========================================================
   LIFEOS STORAGE ENGINE
   ========================================================== */

class Storage {

    /* ======================================================
       GET
    ====================================================== */

    get(key, fallback = null) {

        try {

            const data = localStorage.getItem(key);

            if (!data) {

                return fallback;

            }

            return JSON.parse(data);

        } catch (error) {

            console.error(

                `[Storage] Failed to get "${key}"`,

                error

            );

            return fallback;

        }

    }

    /* ======================================================
       SET
    ====================================================== */

    set(key, value) {

        try {

            localStorage.setItem(

                key,

                JSON.stringify(value)

            );

            return true;

        } catch (error) {

            console.error(

                `[Storage] Failed to save "${key}"`,

                error

            );

            return false;

        }

    }

    /* ======================================================
       REMOVE
    ====================================================== */

    remove(key) {

        try {

            localStorage.removeItem(key);

            return true;

        } catch (error) {

            console.error(

                `[Storage] Failed to remove "${key}"`,

                error

            );

            return false;

        }

    }

    /* ======================================================
       CLEAR
    ====================================================== */

    clear() {

        try {

            localStorage.clear();

            return true;

        } catch (error) {

            console.error(

                "[Storage] Failed to clear storage",

                error

            );

            return false;

        }

    }

    /* ======================================================
       EXISTS
    ====================================================== */

    exists(key) {

        return localStorage.getItem(key) !== null;

    }

}

const storage = new Storage();

export default storage;