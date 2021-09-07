import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';



const INGREDIENT_PRICE = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: 0.6
};



class burgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false

    };

    updatePurshaseState(state) {

        const sum = Object.keys(state.ingredients)
            .map(
                (igKey) => {
                    return state.ingredients[igKey];
                }
            )
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientsHandler = (type) => {
        const updatedIngredients = {
            ...this.state

        };
        updatedIngredients.ingredients[type] = this.state.ingredients[type] + 1;
        updatedIngredients.totalPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        console.log(updatedIngredients);
        this.setState({ ...updatedIngredients });
        this.updatePurshaseState(updatedIngredients);

    };

    removeIngredientsHandler = (type) => {
        const updatedIngredients = {
            ...this.state

        };
        if (this.state.ingredients[type] === 0) {
            updatedIngredients.ingredients[type] = 0;
        } else {
            updatedIngredients.ingredients[type] = this.state.ingredients[type] - 1;
            updatedIngredients.totalPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        }

        console.log(updatedIngredients);
        this.setState({ ...updatedIngredients });
        this.updatePurshaseState(updatedIngredients);

    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {
        alert('You continue!');
    };


    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}

                />
            </Aux>

        );
    }
}

export default burgerBuilder;