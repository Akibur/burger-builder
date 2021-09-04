import React, { Component } from 'react';

import Aux from '../../hoc/Aux';


class burgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Aux>
                <h1>Burger Display</h1>
                <h1>Burger Controls</h1>
            </Aux>

        );
    }
}

export default burgerBuilder;