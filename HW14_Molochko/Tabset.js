class Tabset {
    static CLASSES = {
        CONTAINER: 'tabset-container',
        TITLES: 'tabset-titles',
        BODIES: 'tabset-bodies',
        TITLE: 'tabset-title',
        ITEM: 'tabset-item',
        ACTIVE: 'tabset-active',
    };

    static SELECTORS = {
        TITLE: '.tab-title',
        ITEM: '.tab',
    };

    #el = null;
    #titlesEl = null;
    #bodiesEl = null;

    constructor(el) {
        this.#el = el;

        this.#buildLayout();
        this.#bindEventListeners();
        this.show(0);
    }

    #buildLayout() {
        this.#el.classList.add(Tabset.CLASSES.CONTAINER);

        this.#buildTitles();
        this.#buildBodies();
    }

    #buildTitles() {
        this.#titlesEl = document.createElement('div');
        this.#titlesEl.classList.add(Tabset.CLASSES.TITLES);

        this.#el.append(this.#titlesEl);

        const titles = this.#el.querySelectorAll(Tabset.SELECTORS.TITLE);

        titles.forEach((item, index) => {
            item.classList.add(Tabset.CLASSES.TITLE);
            item.dataset.index = index;
            this.#titlesEl.append(item);
        });
    }
    #buildBodies() {
        this.#bodiesEl = document.createElement('div');
        this.#bodiesEl.classList.add(Tabset.CLASSES.BODIES);

        this.#el.append(this.#bodiesEl);

        const items = this.#el.querySelectorAll(Tabset.SELECTORS.ITEM);

        items.forEach((item) => {
            item.classList.add(Tabset.CLASSES.ITEM);
            this.#bodiesEl.append(item);
        });
    }

    #bindEventListeners() {
        this.#titlesEl.addEventListener('click', (e) => {
            if (e.target.classList.contains(Tabset.CLASSES.TITLE)) {
                const index = +e.target.dataset.index;

                this.show(index);
            }
        });
    }

    show(index) {
        this.#hideActive();
        this.#titlesEl.children[index].classList.add(Tabset.CLASSES.ACTIVE);
        this.#bodiesEl.children[index].classList.add(Tabset.CLASSES.ACTIVE);
    }

    #hideActive() {
        const titleEl = this.#titlesEl.querySelector(
            '.' + Tabset.CLASSES.ACTIVE
        );

        if (titleEl) {
            titleEl.classList.remove(Tabset.CLASSES.ACTIVE);
        }

        const bodyEl = this.#bodiesEl.querySelector(
            '.' + Tabset.CLASSES.ACTIVE
        );

        if (bodyEl) {
            bodyEl.classList.remove(Tabset.CLASSES.ACTIVE);
        }
    }
}