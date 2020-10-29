import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { EduApeals } from '../../data';

import MasterContainer from '../Master/MasterContainer';
import ErrorPage from '../ErrorPage/ErrorPageContainer';

import MainPage from '../Pages/Main/MainPage';

import EduPage from '../EduPage/EduPageContainer';

const AppSwitch: React.FC = () => {
    return (
        <MasterContainer>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/index" />
                </Route>
                <Route path="/index">
                    <MainPage />
                </Route>
                <Route path="/edu" exact>
                    <EduPage />
                </Route>
                {EduApeals.map(Apeal => (
                    <Route key={Apeal.id} path={`/edu/${Apeal.id}`}>
                        <EduPage appealID={Apeal.id} />
                    </Route>
                ))}
                <Route path="/police" exact>
                    <p>привет))</p>
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
