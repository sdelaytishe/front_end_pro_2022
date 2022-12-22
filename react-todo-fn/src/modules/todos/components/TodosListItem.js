import React from 'react';
import './TodoListItem.css'

function TodosListItem({todo: {id, title, isDone}, onToggle, onDelete}) {
    function onClickDelete(e) {
        e.stopPropagation();
        onDelete(id);
    }
    return (
        <div className={"u-full-width todo-item " + (isDone ? 'done' : '')}
        onClick={() => onToggle(id)}
        >
            {title}
            <span className="delete-btn"
                  onClick={onClickDelete}
            >
                X
            </span>
        </div>
    );
}

export default TodosListItem;