import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MasterContainer from '../Master/MasterContainer';
import ErrorPage from '../ErrorPage/ErrorPageContainer';

const AppSwitch: React.FC = () => {
    return (
        <MasterContainer>
            <Switch>
                <Route path="/" exact>
                    <p>Привет!</p>
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
