import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MasterContainer from '../Master/MasterContainer';
import ErrorPage from '../ErrorPage/ErrorPageContainer';

import MainPage from '../Pages/Main/MainPage';
import AboutPage from '../Pages/About/AboutPage';

const AppSwitch: React.FC = () => {
    return (
        <MasterContainer>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                {[404].map(ErrorID => (
                    <Route key={ErrorID} path={`/error-${ErrorID}`}>
                        <ErrorPage errorID={ErrorID} />
                    </Route>
                ))}
                <Route>
                    <Redirect to="/error-404" />
                </Route>
            </Switch>
        </MasterContainer>
    );
};

export default AppSwitch;
