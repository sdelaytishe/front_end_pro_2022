class TodosCollection{
    #api = null;
    list = [];
    constructor() {
        console.log('collection init');
        this.#api = new RestAPI('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/');
    }
    fetchList(){
       return  this.#api.getList().then((data => (this.list = data)))
    }

    toggle(id) {
        const item = this.list.find(item => item.id === id);
        const updatedItem = {
            ...item,
            isDone: !item.isDone,
        };

       return  this.#api.update(updatedItem).then(() => {
            this.list = this.list.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            );
        });
    }

    delete(id) {
       return  this.#api.delete(id).then(() => {
            this.list = this.list.filter((item) => item.id !== id)
        })
    }

    create(data) {
        return this.#api.create(data).then((createTodo) => {
            this.list = [...this.list, createTodo]
        });
    }
}