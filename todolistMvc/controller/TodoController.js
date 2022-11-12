class TodoController{
    #todoListView = null;
    #todosCollection = null;
    #formView = null;
    constructor(container) {

         this.#todoListView = new ToDoListView({
            onToggle: (id) =>this.toggle(id),
             onDelete: (id) => this.delete(id)
        });
        container.append(this.#todoListView.el);

        this.#formView = new FormView({
            onSave: (data) => this.create(data),
        });
        container.append(this.#formView.el);


        this.#todosCollection =new TodosCollection();
            this.#todosCollection
                .fetchList()
                .then(() => this.#todoListView.renderList(this.#todosCollection.list));
    }

    toggle(id) {
        this.#todosCollection
            .toggle(id)
            .then(() =>
            this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    delete(id) {
        this.#todosCollection
            .delete(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list))
    }

    create(data){
        this.#todosCollection
            .create(data)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list))
    }
}