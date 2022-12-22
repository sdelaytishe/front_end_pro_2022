import React from 'react';

function NavigationLink({ path, label, currentPath, navigate }) {
    return (
        <a
            className={
                'button' + (currentPath === path ? ' button-primary' : '')
            }
            href="#"
            onClick={() => navigate(path)}
        >
            {label}
        </a>
    );
}

export default NavigationLink