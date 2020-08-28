import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing';
import Login from '../Login';
import Register from '../Register';
import Toast from '../Toast';
import Loading from '../Loading';
import Dashboard from '../Dashboard';
import CreateProfile from '../Profile/CreateUpdateProfile';
import Auth from '../Auth';
import Experience from '../Profile/Experience';
import Education from '../Profile/Education';
import Profiles from '../Profiles';
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
                    <Route exact path={routes.PROFILES} component={Profiles} />
                    <Auth>
                        <Route
                            exact
                            path={routes.DASHBOARD}
                            component={Dashboard}
                        />
                        <Route
                            exact
                            path={routes.CREATE_PROFILE}
                            component={CreateProfile}
                        />
                        <Route
                            exact
                            path={routes.EDIT_PROFILE}
                            component={CreateProfile}
                        />
                        <Route
                            exact
                            path={routes.ADD_EXPERIENCE}
                            component={Experience}
                        />
                        <Route
                            exact
                            path={routes.ADD_EDUCATION}
                            component={Education}
                        />
                    </Auth>
                </Switch>
            </section>
        </Fragment>
    );
};

export default App;
