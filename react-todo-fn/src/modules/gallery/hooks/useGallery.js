import {useEffect, useState} from 'react';
import useAlbums from "./useAlbums";
import usePhotos from "./usePhotos";

export default function useGallery(){
    const [currentAlbum, setCurrentAlbum] = useState(null);
    const albums = useAlbums();
    const photos = usePhotos(currentAlbum);

    useEffect(() => {
        if(!albums.length) return;

        setCurrentAlbum(albums[0].id);

    }, [albums]);

return{
    albums,
    photos,
    openAlbum: setCurrentAlbum,
}
}