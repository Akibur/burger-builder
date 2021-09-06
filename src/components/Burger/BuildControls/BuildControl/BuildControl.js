
import React from 'react';
import classes from './BuildControl.module.css';

function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label} >
                {props.label}
            </div>
            <button className={classes.More} onClick={props.ingredientAdded} >More</button>
            <button className={classes.Less} onClick={props.ingredientRemoved}>Less</button>
        </div>
    );
}



export default BuildControl;

