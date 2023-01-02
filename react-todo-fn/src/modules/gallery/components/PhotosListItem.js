import React from 'react';

function PhotosListItem({photo:{thumbnailUrl, title}}) {
    return (
        <img className={'three columns'} src={thumbnailUrl} alt={title} />
    );
}

export default PhotosListItem;