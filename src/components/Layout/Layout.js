import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './Layout.module.css';

const layout = (props) => (

    <Aux>
        <p>Logo , Nav, Tool bar</p>
        <main className={classes.Content}>{props.children}</main>
    </Aux>

);

export default layout;
