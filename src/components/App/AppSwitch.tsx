import { Switch, Route, Redirect } from 'react-router-dom';

import { EduApeals } from '../../data';

import MasterContainer from '../Master/MasterContainer';
import ErrorPage from '../ErrorPage/ErrorPageContainer';

import MainPage from '../Pages/Main/MainPage';

import AppealPage from '../AppealPage/AppealPageContainer';

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
                    <AppealPage org="edu" />
                </Route>
                {EduApeals.map(Apeal => (
                    <Route key={Apeal.id} path={`/edu/${Apeal.id}`} exact>
                        <AppealPage org="edu" appealID={Apeal.id} />
                    </Route>
                ))}
                <Route path="/police" exact>
                    <AppealPage org="police" />
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
