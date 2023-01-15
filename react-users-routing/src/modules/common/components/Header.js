import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
       <AppBar position={"static"}>
           <Toolbar>
               <Typography variant={"h6"} flexGrow={1}>
                   Super App
               </Typography>

               <Button to={'/'} color={"error"} component={NavLink}>
                   Home
               </Button>
               <Button to={'/users'} color={"inherit"} component={NavLink}>Users</Button>
       </Toolbar>
       </AppBar>
    );
}

export default Header;