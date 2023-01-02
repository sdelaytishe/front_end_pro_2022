import api from "../../../api";
import {useState,useEffect} from 'react';
export default function usePhotos(albumId){
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if(albumId === null) return;

        api.get('photos?albumId='+albumId).then(({data}) =>
        setPhotos(data)
        );
    }, [albumId])
    return photos;
}