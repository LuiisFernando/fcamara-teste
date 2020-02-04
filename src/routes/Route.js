import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({ component: Component, ...rest }) {

    const Layout = DefaultLayout;

    return (
        <Route 
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}