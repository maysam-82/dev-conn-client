import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';
import Toast from '../Toast';
import Loading from '../Loading';
import { routes } from '../../routes';
import { loadUser } from '../../redux/actions/auth';
import { setAuthToken } from '../../services/api/fetchApi';
import { appStore } from '../../index';

const token = localStorage.token;
if (token) setAuthToken(token);

const App = () => {
    useEffect(() => {
        appStore.dispatch(loadUser());
    }, []);
    return (
        <Fragment>
            <Navbar />
            <Route exact path={routes.HOME} component={Landing} />
            <section className="container">
                <Loading />
                <Toast />
                <Switch>
                    <Route exact path={routes.REGISTER} component={Register} />
                    <Route exact path={routes.LOGIN} component={Login} />
                </Switch>
            </section>
        </Fragment>
    );
};

export default App;
