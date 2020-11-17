import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Desafio from '../pages/Desafio';

function Routes() {
    return <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/desafio" component={Desafio} />
    </Switch>
}  

export default Routes;