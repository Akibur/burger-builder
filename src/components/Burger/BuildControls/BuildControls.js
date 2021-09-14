import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },



];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> <strong>Total Price $: {props.totalPrice.toFixed(2)}</strong> </p>
            {controls.map((crlt) => {
                return <BuildControl
                    key={crlt.label}
                    label={crlt.label}
                    ingredientAdded={() => props.ingredientAdded(crlt.type)}
                    ingredientRemoved={() => props.ingredientRemoved(crlt.type)}
                />;
            })}

            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}
            >Order Now</button>
        </div>
    );
};

export default BuildControls;
