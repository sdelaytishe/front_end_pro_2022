import React from 'react';
import ListHeader from "../ListHeader/ListHeader";
import ListBody from "../ListBody/ListBody";

function List({contacts, onDelete, onEdit}) {
    return (
        <div>
            <ListHeader />
            <ListBody contacts={contacts} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    );
}

export default List;