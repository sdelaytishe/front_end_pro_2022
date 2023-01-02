import {useEffect, useState} from 'react';
import api from '../../../api';

export default function useAlbums(){

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        api.get('albums').then(({data}) => setAlbums(data));
    }, []);
    return albums;
}