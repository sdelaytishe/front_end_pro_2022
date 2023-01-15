import React from 'react';
import { Outlet } from 'react-router-dom';
import UsersNavigation from "../components/UsersNavigation";
function UsersModules(props) {
    return (
        <div>
            <UsersNavigation />
            <Outlet />
        </div>
    );
}

export default UsersModules;