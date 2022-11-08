const DEFAULT_CONFIG = { pagination: false, collapseOthers: true };

class Accordion {
    static CLASSES = {
        ITEM: 'accordion-item',
        TITLE: 'accordion-title',
        ACTIVE: 'accordion-active',
    };

    static SELECTORS = {
        ITEM: '.accordion-item',
        ACTIVE: '.accordion-active',
    };

    #el = null;
    #config = null; // {collapseOthers: true}
    #currentIndex = null;

    constructor(el, config = {}) {
        this.#el = el;

        this.#config = {
            ...DEFAULT_CONFIG,
            ...config,
        };

        // this.#config = config || { collapseOthers: true };

        // this.#config = config ? config : { collapseOthers: true };

        // if (config) {
        //     this.#config = config;
        // } else {
        //     this.#config = { collapseOthers: true };
        // }

        this.#updateLayout();

        this.#bindEventListeners();
    }

    #updateLayout() {
        this.#el
            .querySelectorAll(Accordion.SELECTORS.ITEM)
            .forEach((item, index) => {
                item.dataset.index = index;
            });
    }

    #bindEventListeners() {
        this.#el.addEventListener('click', (e) => {
            if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
                const item = e.target.closest(Accordion.SELECTORS.ITEM);
                this.show(item.dataset.index);
                // this.toggle(item);
            }
        });
    }

    // toggle(el) {
    //     const isVisible = el.classList.contains(Accordion.CLASSES.ACTIVE);
    //     if (this.#config.collapseOthers) {
    //         this.#hideAll();
    //     }

    //     if (!isVisible) {
    //         el.classList.add(Accordion.CLASSES.ACTIVE);
    //     }
    // }

    show(index) {
        const isVisible = this.#currentIndex === index;
        if (isVisible) {
            this.#el.children[index].classList.remove(Accordion.CLASSES.ACTIVE);
        } else {
            if (this.#config.collapseOthers) {
                this.#hideAll();
            }
            this.#el.children[index].classList.add(Accordion.CLASSES.ACTIVE);
        }

        this.#currentIndex = index;
    }

    #hideAll() {
        const els = this.#el.querySelectorAll(Accordion.SELECTORS.ACTIVE);

        els.forEach((item) => item.classList.remove(Accordion.CLASSES.ACTIVE));
    }
}