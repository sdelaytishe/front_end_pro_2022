import React from 'react';
import {Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button} from "@mui/material";
import useUsersList from "../hooks/useUsersList";
import {NavLink} from "react-router-dom";

function UsersList() {
    const {users, deleteUser} = useUsersList();


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.surname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button variant={'outlined'} component={NavLink} to={user.id}>Edit</Button>
                                <Button variant={'outlined'} color={'error'} onClick={() => deleteUser(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersList;