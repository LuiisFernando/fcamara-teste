import React from 'react'
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Cadastrar from '../pages/Cadastrar';

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/cadastrar" component={Cadastrar} />
        </Switch>
    )
}
