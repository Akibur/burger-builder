import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', typle: 'salad' },
    { label: 'Bacon', typle: 'bacon' },
    { label: 'Cheese', typle: 'cheese' },
    { label: 'Meat', typle: 'meat' },
];

const BuildControls = () => {
    return (
        <div className={classes.BuildControls}>
            {controls.map((crlt) => {
                return <BuildControl key={crlt.label} label={crlt.label} />;
            })}
        </div>
    );
};

export default BuildControls;
