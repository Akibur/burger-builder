import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

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
        }
    };
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <h1>Burger Controls</h1>
            </Aux>

        );
    }
}

export default burgerBuilder;