import { Container } from '../common';

import MasterHeader from './MasterHeader/MasterHeaderContainer';
import MasterFooter from './MasterFooter/MasterFooterContainer';

const MasterContainer: React.FC = ({ children }) => {
    return (
        <div className="app">
            <MasterHeader />
            <main className="app-main">
                <Container>{children}</Container>
            </main>
            <MasterFooter />
        </div>
    );
};

export default MasterContainer;
