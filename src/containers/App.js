import classes from './App.module.css';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import { Route, Switch } from 'react-router-dom';

import Checkout from './Checkout/Checkout';
import Orders from './Orders/Orders';




function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
