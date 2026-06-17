/* ==========================================================
   LIFEOS DOM UTILITIES
   ========================================================== */

/* ==========================================================
   QUERY SELECTOR
   ========================================================== */

export const qs = (

    selector,

    scope = document

) => scope.querySelector(selector);

/* ==========================================================
   QUERY SELECTOR ALL
   ========================================================== */

export const qsa = (

    selector,

    scope = document

) => [...scope.querySelectorAll(selector)];

/* ==========================================================
   CREATE ELEMENT
   ========================================================== */

export function createElement(

    tag,

    options = {}

) {

    const element = document.createElement(tag);

    if (options.className) {

        element.className = options.className;

    }

    if (options.id) {

        element.id = options.id;

    }

    if (options.text) {

        element.textContent = options.text;

    }

    if (options.html) {

        element.innerHTML = options.html;

    }

    if (options.attributes) {

        Object.entries(

            options.attributes

        ).forEach(

            ([key, value]) => {

                element.setAttribute(

                    key,

                    value

                );

            }

        );

    }

    return element;

}

/* ==========================================================
   CLASS HELPERS
   ========================================================== */

export function addClass(

    element,

    ...classes

) {

    element.classList.add(...classes);

}

export function removeClass(

    element,

    ...classes

) {

    element.classList.remove(...classes);

}

export function toggleClass(

    element,

    className,

    force

) {

    element.classList.toggle(

        className,

        force

    );

}

export function hasClass(

    element,

    className

) {

    return element.classList.contains(

        className

    );

}

/* ==========================================================
   SHOW / HIDE
   ========================================================== */

export function show(

    element,

    display = ""

) {

    element.style.display = display;

}

export function hide(element) {

    element.style.display = "none";

}

/* ==========================================================
   TEXT / HTML
   ========================================================== */

export function setText(

    element,

    value

) {

    element.textContent = value;

}

export function setHTML(

    element,

    value

) {

    element.innerHTML = value;

}

/* ==========================================================
   ATTRIBUTES
   ========================================================== */

export function setAttr(

    element,

    name,

    value

) {

    element.setAttribute(

        name,

        value

    );

}

export function getAttr(

    element,

    name

) {

    return element.getAttribute(name);

}

export function removeAttr(

    element,

    name

) {

    element.removeAttribute(name);

}

/* ==========================================================
   EVENTS
   ========================================================== */

export function on(

    element,

    event,

    callback,

    options = false

) {

    element.addEventListener(

        event,

        callback,

        options

    );

}

export function off(

    element,

    event,

    callback

) {

    element.removeEventListener(

        event,

        callback

    );

}

/* ==========================================================
   EVENT DELEGATION
   ========================================================== */

export function delegate(

    parent,

    selector,

    event,

    handler

) {

    parent.addEventListener(

        event,

        e => {

            const target = e.target.closest(

                selector

            );

            if (!target) {

                return;

            }

            handler(

                e,

                target

            );

        }

    );

}

/* ==========================================================
   APPEND
   ========================================================== */

export function append(

    parent,

    ...children

) {

    parent.append(...children);

}

/* ==========================================================
   REMOVE ELEMENT
   ========================================================== */

export function remove(

    element

) {

    if (

        element &&

        element.parentNode

    ) {

        element.parentNode.removeChild(

            element

        );

    }

}

/* ==========================================================
   EMPTY
   ========================================================== */

export function empty(

    element

) {

    element.replaceChildren();

}

/* ==========================================================
   READY
   ========================================================== */

export function ready(callback) {

    if (

        document.readyState === "loading"

    ) {

        document.addEventListener(

            "DOMContentLoaded",

            callback

        );

    } else {

        callback();

    }

}