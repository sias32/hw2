import React, { useState } from 'react';
import DropDownList from "./DropdownList";

function DropDown() {
    const [listState, setList] = useState("open");
    const [select, setSelect] = useState();

    const onSelect = (event) => {
        setSelect((prevSelect) => (prevSelect = event.target.textContent));
    }

    const HandleClick = (event) => {
        if (listState === "open") {
            setList((prevState) => (prevState = ""));
            setSelect((prevSelect) => (prevSelect = ""));
        }
        else {
            setList((prevState) => (prevState = "open"));
        }
    }

    return (
        <div className={"dropdown-wrapper " + listState} >
            <button className="btn" onClick={HandleClick}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <DropDownList select={select} onSelect={onSelect} />
        </div>
    );
}

export default DropDown;