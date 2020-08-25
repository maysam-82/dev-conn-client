import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';
import { routes } from '../../routes';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Route exact path={routes.HOME} component={Landing} />
            <section className="container">
                <Switch>
                    <Route exact path={routes.REGISTER} component={Register} />
                    <Route exact path={routes.LOGIN} component={Login} />
                </Switch>
            </section>
        </Fragment>
    );
};

export default App;
