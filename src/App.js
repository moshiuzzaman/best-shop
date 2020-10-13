import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header'
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <>
    <Router>
      <Header></Header>
      
      <Switch>
      <Route path="/shop">
            <Shop></Shop> 
      </Route>
      <Route exact path="/">
            <Shop></Shop> 
      </Route>
        <Route path="*">
            <NoMatch></NoMatch>
        </Route>
        
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
