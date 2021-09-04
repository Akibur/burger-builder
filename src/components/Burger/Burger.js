import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {


    //Create an array of all the ingredients in the burger
    let ingredients = [];
    for (const [k, v] of Object.entries(props.ingredients)) {
        console.log(k, v);
        if (v > 1) {
            let count = v;
            while (count !== 0) {
                ingredients.push(k);
                count--;
            }
        }

        if (v === 1) {
            ingredients.push(k);
        }
    }

    //Check if ingredients is availabe 
    let displayIngredients = null;
    if (ingredients.length > 0) {
        displayIngredients = ingredients.map((ingredient, key) => {
            return (<BurgerIngredients key={key} type={ingredient} />);
        });
    } else {
        displayIngredients = <h4>Please Add Ingredients to your Burger</h4>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {displayIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default Burger;