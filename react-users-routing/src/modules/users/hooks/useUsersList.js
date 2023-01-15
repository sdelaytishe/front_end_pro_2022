import { useState, useEffect} from "react";
import api from "../../../api";

export default function useUsersList(){
    const [users, setUsers] = useState([]);

    function fetchUsers(){
        return api.get('users').then(({data}) => setUsers(data))
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    
    function deleteUser(id){
        return api.delete('users/'+ id).then(fetchUsers);
    }



    return {
        users,
        fetchUsers,
        deleteUser,
    };
}