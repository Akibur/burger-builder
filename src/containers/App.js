import classes from './App.module.css';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';



function App() {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;