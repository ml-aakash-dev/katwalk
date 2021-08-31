
import { Route, Switch } from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/ScrollToTopReact';
import DesignerDetail from './pages/DesignerDetail';
import Landing from './pages/Landing'
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import WhatsNew from './pages/WhatsNew';

function App() {
  return (
   <>
   <Switch>
     <Route exact path='/' component={Landing}/>
     <Route  path='/whats-new' component={WhatsNew}/>
     <Route  path='/designer-detail' component={DesignerDetail}/>
     <Route  path='/login' component={Login}/>
     <Route  path='/product_details' component={ProductDetails}/>
   </Switch>
  </>
  );
}

export default App;
