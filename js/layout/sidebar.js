/* ==========================================================
   LIFEOS SIDEBAR
========================================================== */

class Sidebar {

    constructor() {

        this.sidebar =
            document.querySelector("#sidebar");

        this.overlay =
            document.querySelector(
                "#sidebar-overlay"
            );

        this.toggleButton =
            document.querySelector(
                "#sidebar-toggle"
            );

    }

    init() {

        if (!this.sidebar) {

            return;

        }

        this.bindToggle();

        this.bindNavigation();

    }

    bindToggle() {

        if (!this.toggleButton) {

            return;

        }

        this.toggleButton.addEventListener(

            "click",

            () => {

                if (
                    window.innerWidth <= 992
                ) {

                    this.sidebar.classList.toggle(
                        "open"
                    );

                    this.overlay?.classList.toggle(
                        "active"
                    );

                    return;

                }

                this.sidebar.classList.toggle(
                    "collapsed"
                );

            }

        );

        this.overlay?.addEventListener(

            "click",

            () => {

                this.sidebar.classList.remove(
                    "open"
                );

                this.overlay.classList.remove(
                    "active"
                );

            }

        );

    }

    bindNavigation() {

        const links = document.querySelectorAll(

            ".sidebar-nav a"

        );

        links.forEach((link) => {

            link.addEventListener(

                "click",

                () => {

                    links.forEach((item) => {

                        item.classList.remove(
                            "active"
                        );

                    });

                    link.classList.add(
                        "active"
                    );

                }

            );

        });

    }

}

const sidebar = new Sidebar();

export default sidebar;