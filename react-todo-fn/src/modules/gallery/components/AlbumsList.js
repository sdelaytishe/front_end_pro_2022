import AlbumsListItem from "./AlbumsListItem";
import React from 'react';

function AlbumsList({ list, onOpen }) {
    return (
        <ul>
            {list.map(item => (
                <AlbumsListItem key={item.id} album={item} onOpen={onOpen} />
            ))}
        </ul>
    );
}

export default AlbumsList;