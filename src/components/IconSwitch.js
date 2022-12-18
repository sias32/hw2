import React from 'react';

function IconSwitch({ icon, onSwitch }) {

    return (
        <div className="IconSwitch">

            <button onClick={onSwitch} alt="Переключение списка">
                <span className="material-icons">
                    {icon}
                </span>
            </button>
        </div>
    );
}

export default IconSwitch;