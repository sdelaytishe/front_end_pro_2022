class ToDoListView{
    static CLASSES ={
        TODO_ITEM_CLASS: 'todo-item',
        DONE_ITEM_CLASS: 'done',
        DELETE_BTN_CLASS: 'delete-btn',
    }
    static todoListContainerTemplate = `
        <div class="row">
            <div class="twelve columns" id="list"></div>-->
        </div>`;

    static todoItemTemplate = `
            <div class="u-full-width todo-item {{doneClass}}" data-todo-id="{{id}}">
                {{title}}
            <span class="delete-btn">X</span>
            </div>`

    el = null;

    #config = null;

    static getTodoId(el) {
        return el.closest('.' + ToDoListView.CLASSES.TODO_ITEM_CLASS).dataset
            .todoId;
    }

    static generateTodoItemHtml(todo){
         return interpolate(ToDoListView.todoItemTemplate, todo)
             .replaceAll(
             '{{doneClass}}',
             todo.isDone ? ToDoListView.CLASSES.DONE_ITEM_CLASS : ''
         );
    }
    constructor(config) {
        console.log('to do list view init');
        this.#config = config;
        this.#initView();
    }
    #initView(){
       const row = htmlToElement(ToDoListView.todoListContainerTemplate);

        row.addEventListener("click", (e) => {

            if (
                e.target.classList.contains
                    (ToDoListView.CLASSES.DELETE_BTN_CLASS
                    )
            ) {
                const todoId = ToDoListView.getTodoId(e.target);
                this.deleteTodo(todoId);
            }
            if (e.target.classList.contains(
                ToDoListView.CLASSES.TODO_ITEM_CLASS
            )
            ) {
                const todoId = ToDoListView.getTodoId(e.target);
                this.toggleTodo(todoId);
            }
        })



        this.el = row;
    }
    renderList(list){
        this.el.children[0].innerHTML = list
            .map(ToDoListView.generateTodoItemHtml)
            .join('');
    }

    toggleTodo(id){
        this.#config.onToggle(id);
    }

    deleteTodo(id){
        this.#config.onDelete(id);
    }
}
