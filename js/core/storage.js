/* ==========================================================
   LIFEOS STORAGE SERVICE
   ========================================================== */

import CONFIG from "../config.js";

class StorageService {

    constructor() {

        this.prefix = CONFIG.storage.prefix;

        this.version = CONFIG.storage.version;

    }

    /* ======================================================
       BUILD KEY
    ====================================================== */

    buildKey(key) {

        return `${this.prefix}${key}`;

    }

    /* ======================================================
       SET
    ====================================================== */

    set(key, value) {

        try {

            const payload = {

                version: this.version,

                updatedAt: Date.now(),

                data: value

            };

            localStorage.setItem(

                this.buildKey(key),

                JSON.stringify(payload)

            );

            return true;

        }

        catch (error) {

            console.error(error);

            return false;

        }

    }

    /* ======================================================
       GET
    ====================================================== */

    get(key, defaultValue = null) {

        try {

            const raw = localStorage.getItem(

                this.buildKey(key)

            );

            if (!raw) {

                return defaultValue;

            }

            return JSON.parse(raw).data;

        }

        catch {

            return defaultValue;

        }

    }

    /* ======================================================
       REMOVE
    ====================================================== */

    remove(key) {

        localStorage.removeItem(

            this.buildKey(key)

        );

    }

    /* ======================================================
       EXISTS
    ====================================================== */

    has(key) {

        return localStorage.getItem(

            this.buildKey(key)

        ) !== null;

    }

    /* ======================================================
       CLEAR APP STORAGE
    ====================================================== */

    clear() {

        const keys = [];

        for (

            let i = 0;

            i < localStorage.length;

            i++

        ) {

            const key = localStorage.key(i);

            if (

                key.startsWith(this.prefix)

            ) {

                keys.push(key);

            }

        }

        keys.forEach(

            key => localStorage.removeItem(key)

        );

    }

    /* ======================================================
       GET RAW PAYLOAD
    ====================================================== */

    getPayload(key) {

        const raw = localStorage.getItem(

            this.buildKey(key)

        );

        if (!raw) {

            return null;

        }

        return JSON.parse(raw);

    }

    /* ======================================================
       LAST UPDATE
    ====================================================== */

    lastUpdated(key) {

        const payload = this.getPayload(key);

        return payload

            ? payload.updatedAt

            : null;

    }

    /* ======================================================
       EXPORT ALL APP DATA
    ====================================================== */

    exportData() {

        const backup = {

            version: this.version,

            exportedAt: Date.now(),

            data: {}

        };

        for (

            let i = 0;

            i < localStorage.length;

            i++

        ) {

            const key = localStorage.key(i);

            if (

                key.startsWith(this.prefix)

            ) {

                backup.data[key] =

                    JSON.parse(

                        localStorage.getItem(key)

                    );

            }

        }

        return backup;

    }

    /* ======================================================
       IMPORT BACKUP
    ====================================================== */

    importData(backup) {

        try {

            if (

                !backup ||

                !backup.data

            ) {

                return false;

            }

            Object.entries(

                backup.data

            ).forEach(

                ([key, value]) => {

                    localStorage.setItem(

                        key,

                        JSON.stringify(value)

                    );

                }

            );

            return true;

        }

        catch (error) {

            console.error(error);

            return false;

        }

    }

    /* ======================================================
       STORAGE SIZE
    ====================================================== */

    size() {

        let bytes = 0;

        for (

            let key in localStorage

        ) {

            if (

                Object.prototype.hasOwnProperty.call(

                    localStorage,

                    key

                )

            ) {

                bytes +=

                    localStorage[key].length;

            }

        }

        return bytes;

    }

}

const storage = new StorageService();

export default storage;