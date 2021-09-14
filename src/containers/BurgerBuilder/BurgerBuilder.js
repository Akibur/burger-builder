import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';



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
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false

    };

    componentDidMount() {
        axios.get('https://burger-builder-ebacf-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

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

        this.setState({ purchasable: sum > 0 });
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
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Akibur Rahman',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Bangladdesh'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post("orders.json", order)
            .then(res => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(err => {
                this.setState({ loading: false, purchasing: false });
            });

    };


    render() {

        // const disabledInfo = {
        //     ...this.state.ingredients
        // };
        // for (let key in disabledInfo) {
        //     disabledInfo[key] = disabledInfo[key] <= 0;
        // }


        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;



        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientsHandler}
                        ingredientRemoved={this.removeIngredientsHandler}
                        // disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        totalPrice={this.state.totalPrice} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>

        );
    }
}

export default burgerBuilder;