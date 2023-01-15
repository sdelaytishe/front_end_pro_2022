import React from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {NavLink, useParams, useNavigate} from "react-router-dom";
import useUser from "../hooks/useUser";

function UserForm() {
    const {id} = useParams();
    const {user, changeUser, saveUser} = useUser(id);

    const navigate = useNavigate();

    function onInputChange(e){
        changeUser({[e.target.name] : e.target.value})
    }

    function onFormSubmit(e) {
        e.preventDefault();

        saveUser(user).then(() => {
            navigate('..');
        });
    }

    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField name={'name'}
                           label={'Name'}
                           value={user.name}
                           fullWidth
                            onChange={onInputChange}/>
                <TextField name={'surname'}
                           label={'Surname'}
                           value={user.surname}
                           fullWidth
                            onChange={onInputChange}/>
                <TextField name={'email'}
                           label={'Email'}
                           value={user.email}
                           fullWidth
                            onChange={onInputChange}/>
                <Button type={'submit'} color={'primary'} variant={'contained'}>Save</Button>
                <Button color={'error'} variant={'text'} component={NavLink} to={'..'}>Cancel</Button>
            </form>


        </Paper>
    );
}

export default UserForm;