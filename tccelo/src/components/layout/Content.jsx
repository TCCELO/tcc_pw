import React from 'react';
import { Switch, Route } from 'react-router';
import Home from'../../views/contents/Home';
import About from'../../views/contents/About';
import NotFound from'../../views/contents/NotFound';

export default (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route exact path="/">    
            <Home/>
        </Route>
        <Route path="/Sobre">    
            <About/>
        </Route>
        <Route path="*">    
            <NotFound/>
        </Route>
      </Switch>
    </main>
  );
}  