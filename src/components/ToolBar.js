import React from 'react';

function ToolBar({ filters, selected, onSelectFilter }) {
    return (
        <div onClick={onSelectFilter} className="ToolBar">
            <p>{filters.map((filter) => (
                <button className={selected === filter ? "select" : null} key={filter} value={filter}>{filter}</button>
            ))}
            </p>
        </div>
    );
}

export default ToolBar;