import React from 'react';

function AlbumsListItem({album: {id, title}, onOpen}) {
    return (
        <li onClick={() => onOpen(id)}>{title}</li>
    );
}

export default AlbumsListItem;