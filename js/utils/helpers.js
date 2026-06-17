/* ==========================================================
   LIFEOS HELPERS
   ========================================================== */

/* ==========================================================
   GENERATE RANDOM ID
   ========================================================== */

export function generateId(prefix = "") {

    return `${prefix}${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 10)}`;

}

/* ==========================================================
   UUID
   ========================================================== */

export function uuid() {

    return crypto.randomUUID();

}

/* ==========================================================
   DEEP CLONE
   ========================================================== */

export function deepClone(value) {

    return structuredClone(value);

}

/* ==========================================================
   FORMAT DATE
   ========================================================== */

export function formatDate(

    date,

    locale = "en-US"

) {

    return new Date(date).toLocaleDateString(locale);

}

/* ==========================================================
   FORMAT TIME
   ========================================================== */

export function formatTime(

    date,

    locale = "en-US"

) {

    return new Date(date).toLocaleTimeString(locale);

}

/* ==========================================================
   FORMAT DATE TIME
   ========================================================== */

export function formatDateTime(

    date,

    locale = "en-US"

) {

    return new Date(date).toLocaleString(locale);

}

/* ==========================================================
   FORMAT CURRENCY
   ========================================================== */

export function formatCurrency(

    value,

    currency = "USD",

    locale = "en-US"

) {

    return new Intl.NumberFormat(

        locale,

        {

            style: "currency",

            currency

        }

    ).format(value);

}

/* ==========================================================
   FORMAT DURATION
   ========================================================== */

export function formatDuration(minutes) {

    const h = Math.floor(minutes / 60);

    const m = minutes % 60;

    if (h === 0) {

        return `${m} min`;

    }

    return `${h}h ${m}m`;

}

/* ==========================================================
   SUM BY
   ========================================================== */

export function sumBy(array, key) {

    return array.reduce(

        (sum, item) => sum + (Number(item[key]) || 0),

        0

    );

}

/* ==========================================================
   AVERAGE
   ========================================================== */

export function average(array) {

    if (!array.length) {

        return 0;

    }

    return array.reduce(

        (sum, value) => sum + value,

        0

    ) / array.length;

}

/* ==========================================================
   GROUP BY
   ========================================================== */

export function groupBy(array, key) {

    return array.reduce(

        (result, item) => {

            const group = item[key];

            if (!result[group]) {

                result[group] = [];

            }

            result[group].push(item);

            return result;

        },

        {}

    );

}

/* ==========================================================
   DEBOUNCE
   ========================================================== */

export function debounce(

    callback,

    delay = 300

) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(

            () => callback(...args),

            delay

        );

    };

}

/* ==========================================================
   THROTTLE
   ========================================================== */

export function throttle(

    callback,

    limit = 300

) {

    let waiting = false;

    return (...args) => {

        if (waiting) {

            return;

        }

        callback(...args);

        waiting = true;

        setTimeout(

            () => {

                waiting = false;

            },

            limit

        );

    };

}

/* ==========================================================
   SLEEP
   ========================================================== */

export function sleep(ms) {

    return new Promise(

        resolve => setTimeout(resolve, ms)

    );

}

/* ==========================================================
   RANDOM INTEGER
   ========================================================== */

export function randomInt(

    min,

    max

) {

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}

/* ==========================================================
   RANDOM ARRAY ITEM
   ========================================================== */

export function randomItem(array) {

    if (!array.length) {

        return null;

    }

    return array[

        Math.floor(

            Math.random() * array.length

        )

    ];

}

/* ==========================================================
   CLAMP
   ========================================================== */

export function clamp(

    value,

    min,

    max

) {

    return Math.min(

        Math.max(value, min),

        max

    );

}

/* ==========================================================
   PERCENTAGE
   ========================================================== */

export function percentage(

    current,

    total

) {

    if (total === 0) {

        return 0;

    }

    return (current / total) * 100;

}

/* ==========================================================
   DOWNLOAD JSON
   ========================================================== */

export function downloadJSON(

    filename,

    data

) {

    const blob = new Blob(

        [

            JSON.stringify(

                data,

                null,

                2

            )

        ],

        {

            type: "application/json"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = filename;

    a.click();

    URL.revokeObjectURL(url);

}

/* ==========================================================
   READ JSON FILE
   ========================================================== */

export function readJSONFile(file) {

    return new Promise(

        (resolve, reject) => {

            const reader = new FileReader();

            reader.onload = event => {

                try {

                    resolve(

                        JSON.parse(

                            event.target.result

                        )

                    );

                }

                catch (error) {

                    reject(error);

                }

            };

            reader.onerror = reject;

            reader.readAsText(file);

        }

    );

}