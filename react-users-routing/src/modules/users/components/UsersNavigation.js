import React from 'react';
import {Button, Paper} from "@mui/material";
import {NavLink} from "react-router-dom";

function UsersNavigation(props) {
    return (
       <Paper sx={{
           marginBottom: '10px',
       }}>
           <Button to={''}  component={NavLink}>
              List
           </Button>
           <Button to={'add'}  component={NavLink}>
               Add
           </Button>
       </Paper>
    );
}

export default UsersNavigation;