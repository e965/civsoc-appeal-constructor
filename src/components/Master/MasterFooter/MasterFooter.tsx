import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../common';

import './MasterFooter.scss';

const MasterFooter: React.FC = () => {
    return (
        <footer className="app-footer">
            <Container>
                <div className="app-footer__links">
                    <a href="https://civsoc.net/mgrob/" target="_blank" rel="noopener noreferrer">
                        Проект Молодёжного Гражданского Общества
                    </a>{' '}
                    &middot;{' '}
                    <Link to="/about" style={{ whiteSpace: 'nowrap' }}>
                        О проекте
                    </Link>
                </div>
            </Container>
        </footer>
    );
};

export default MasterFooter;
