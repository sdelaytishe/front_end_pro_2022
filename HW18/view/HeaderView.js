class HeaderView {
    #config = null;
    el = null;

    static template = `
        <div class="row heading">
            <button class="button-primary">Add Note</button>
        </div>
    `;

    constructor(config) {
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.el = htmlToElement(HeaderView.template);
        this.el.querySelector('button').addEventListener('click', () => {
            this.#config.onCreate();
        });
    }
}