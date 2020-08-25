import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developer Social Network</h1>
                    <p className="lead">
                        Create a developer profile/portfolio, share posts and
                        get help from other developers
                    </p>
                    <div className="buttons">
                        <Link to={routes.REGISTER} className="btn btn-primary">
                            Sign Up
                        </Link>
                        <Link to={routes.LOGIN} className="btn btn-light">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
