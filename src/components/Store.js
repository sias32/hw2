import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const list = "view_list";
const module = "view_module";

function Store({ products }) {
    const [icon, setIcon] = useState(list);

    const Switch = (events) => {
        if (icon === list) {
            setIcon((prevIcon) => (prevIcon = module));
        }
        if (icon === module) {
            setIcon((prevIcon) => (prevIcon = list));
        }
    }

    return (
        <div className="Store">
            <IconSwitch icon={icon} onSwitch={Switch} />
            {icon === list ? <ListView products={products}/> : <CardsView products={products}/>}
        </div>
    );
}

export default Store;