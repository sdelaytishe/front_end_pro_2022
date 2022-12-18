import {CONTACT_URL} from "../config";

export function getList(){
        return fetch(CONTACT_URL).then((res) => res.json());
}

export function deleteItem(id) {
        return fetch(CONTACT_URL + id, {
            method: 'DELETE',
        }).then((res) => res.json());
}

export function createItem(item){
    return fetch(CONTACT_URL , {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function updateItem(item){
    return fetch(CONTACT_URL + item.id , {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}