import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ErrorPage from '../ErrorPage/ErrorPageContainer';

const AppSwitch: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default AppSwitch;
