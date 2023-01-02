import React, { useState, useEffect } from 'react';
import AlbumsList from "./AlbumsList";
import PhotosList from "./PhotosList";
import useGallery from '../hooks/useGallery';

function Gallery(props) {
    const {photos, albums, openAlbum} = useGallery();
    return (
        <div className={'row'}>
            <div className={'three columns'}>
                <AlbumsList list={albums} onOpen={openAlbum} />
            </div>
            <div className={'nine columns'}>
                <PhotosList list={photos} />
            </div>
        </div>
    );
}

export default Gallery;