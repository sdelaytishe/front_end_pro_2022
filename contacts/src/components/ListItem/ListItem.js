import React from 'react';

function ListItem({contact: {id, name, surname, email}, onDelete, onEdit }) {
    return (
        <div className={"row"}>
            <div className={"three columns"}>{name}</div>
            <div className={"three columns"}>{surname}</div>
            <div className={"three columns"}>{email}</div>
            <div className={"three columns"}>
                <button onClick={() => onDelete(id)}>Delete</button>
                <button onClick={() => onEdit(id)}>Edit</button>
            </div>
        </div>
    );
}

export default ListItem;