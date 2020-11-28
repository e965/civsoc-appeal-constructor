import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App/AppContainer';
import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
