import React from 'react';
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";
import todosService from "../services/todosService";
import useTodos from "../hooks/useTodos";

function Todos() {

    const {todos, toggleTodo, deleteTodo,createTodo} = useTodos();

    return (
        <div className='container'>
            <TodosList todos={todos}
                       onToggle={toggleTodo}
                       onDelete={deleteTodo}
            />
            <TodoForm onCreate={createTodo} />
        </div>
    );
}

export default Todos;