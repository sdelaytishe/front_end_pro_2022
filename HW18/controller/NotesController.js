class NotesController {
    #collection = null;
    #boardView = null;
    #headerView = null;

    constructor($container) {
        this.#headerView = new HeaderView({
            onCreate: this.createNote,
        });
        $container.append(this.#headerView.el);

        this.#boardView = new BoardView({
            onDelete: this.deleteNote,
            onUpdate: this.updateNote,
        });
        $container.append(this.#boardView.$el);

        this.#collection = new NotesCollection();
        this.#collection.fetchList().then(() => {
            this.#boardView.renderList(this.#collection.list);
        });
    }

    deleteNote = (id) => {
        this.#collection.deleteNote(id).then(() => {
            this.#boardView.renderList(this.#collection.list);
        });
    };

    updateNote = (id, changes) => {
        this.#collection.updateNote(id, changes).then(() => {
            // this.#boardView.renderList(this.#collection.list);
        });
    };

    createNote = () => {
        this.#collection.createNote().then(() => {
            this.#boardView.renderList(this.#collection.list);
        });
    };
}