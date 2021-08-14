import React from 'react'

import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';
import Header from './containers/Header';

function App() {
  return (
   <Router>
     <Header />
   <Switch>
      <Route path="/" exact component ={ProductList} />
      <Route path="/product/:productId" exact component={ProductDetail}  />
      <Route>404 Not Found !</Route>
   </Switch>
   </Router>
  );
}

export default App;
