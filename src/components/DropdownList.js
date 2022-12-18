import React from 'react';

const menu = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out"
];

function DropDownList({ select, onSelect }) {

    return (
        <React.Fragment>
            <ul className="dropdown" onClick={onSelect}>
                {menu.map((item) => (
                    <li key={item} className={select === item ? "active" : null} ><a href="#">{item}</a></li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default DropDownList;