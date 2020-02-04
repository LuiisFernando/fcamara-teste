import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Cadastrar from '../pages/Cadastrar';

import api from '../services/api';

export default function Routes() {

    useEffect(() => {
        async function loadRotas() {
            const response = await api.get('rotas');

            console.log(response.data)
        }

        //loadRotas();
    }, []);

    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/cadastrar" component={Cadastrar} />
        </Switch>
    )
}
