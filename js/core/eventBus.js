/* ==========================================================
   LIFEOS EVENT BUS
   ========================================================== */

class EventBus {

    constructor() {

        this.events = new Map();

    }

    /* ======================================================
       SUBSCRIBE
    ====================================================== */

    on(eventName, callback) {

        if (!this.events.has(eventName)) {

            this.events.set(eventName, []);

        }

        this.events.get(eventName).push(callback);

        return () => this.off(eventName, callback);

    }

    /* ======================================================
       SUBSCRIBE ONCE
    ====================================================== */

    once(eventName, callback) {

        const wrapper = (payload) => {

            callback(payload);

            this.off(eventName, wrapper);

        };

        this.on(eventName, wrapper);

    }

    /* ======================================================
       UNSUBSCRIBE
    ====================================================== */

    off(eventName, callback) {

        if (!this.events.has(eventName)) {

            return;

        }

        const listeners = this.events.get(eventName);

        const filtered = listeners.filter(

            listener => listener !== callback

        );

        this.events.set(eventName, filtered);

    }

    /* ======================================================
       EMIT EVENT
    ====================================================== */

    emit(eventName, payload = null) {

        if (!this.events.has(eventName)) {

            return;

        }

        this.events.get(eventName).forEach(listener => {

            try {

                listener(payload);

            }

            catch (error) {

                console.error(

                    `[EventBus] "${eventName}" failed:`,

                    error

                );

            }

        });

    }

    /* ======================================================
       CLEAR EVENT
    ====================================================== */

    clear(eventName) {

        this.events.delete(eventName);

    }

    /* ======================================================
       CLEAR ALL EVENTS
    ====================================================== */

    clearAll() {

        this.events.clear();

    }

    /* ======================================================
       GET LISTENER COUNT
    ====================================================== */

    listenerCount(eventName) {

        if (!this.events.has(eventName)) {

            return 0;

        }

        return this.events.get(eventName).length;

    }

    /* ======================================================
       CHECK EVENT EXISTS
    ====================================================== */

    has(eventName) {

        return this.events.has(eventName);

    }

}

/* ==========================================================
   SINGLETON INSTANCE
   ========================================================== */

const eventBus = new EventBus();

export default eventBus;