/* ==========================================================
   LIFE FLOW MODAL
   ========================================================== */

class Modal {

    constructor() {

        this.modal = null;

        this.overlay = null;

    }

    /* ======================================================
       CREATE
    ====================================================== */

    create() {

        if (document.querySelector(".modal-overlay")) {

            return;
        }

        const html = `

        <div class="modal-overlay">

            <div class="modal">

                <div class="modal__header">

                    <h2 class="modal__title">

                    </h2>

                    <button
                        class="modal__close"
                    >

                        ✕

                    </button>

                </div>

                <div class="modal__body">

                </div>

            </div>

        </div>

        `;

        document.body.insertAdjacentHTML(

            "beforeend",

            html

        );

        this.overlay = document.querySelector(

            ".modal-overlay"

        );

        this.modal = document.querySelector(

            ".modal"
        );

        this.bindEvents();

    }

    /* ======================================================
       OPEN
    ====================================================== */

    open({

        title = "",

        content = ""

    }) {

        this.create();

        this.overlay.classList.add(

            "active"

        );

        document.querySelector(

            ".modal__title"

        ).innerHTML = title;

        document.querySelector(

            ".modal__body"

        ).innerHTML = content;

    }

    /* ======================================================
       CLOSE
    ====================================================== */

    close() {

        if (!this.overlay) {

            return;
        }

        this.overlay.classList.remove(

            "active"

        );

    }

    /* ======================================================
       EVENTS
    ====================================================== */

    bindEvents() {

        this.overlay.addEventListener(

            "click",

            (e) => {

                if (

                    e.target.classList.contains(

                        "modal-overlay"

                    )

                ) {

                    this.close();

                }

            }

        );

        document

            .querySelector(

                ".modal__close"

            )

            .addEventListener(

                "click",

                () => {

                    this.close();

                }

            );

    }

}

const modal = new Modal();

export default modal;