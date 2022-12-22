import React from 'react';
import TodosListItem from "./TodosListItem";

function TodosList({todos, onToggle, onDelete}) {
    return (
        <div className='row'>
            <div className='twelve columns'>
                {todos.map((item) => (
                    <TodosListItem
                        key={item.id}
                        todo={item}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                    ))}
            </div>
        </div>
    );
}

export default TodosList;