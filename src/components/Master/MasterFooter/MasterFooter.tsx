import React from 'react';

import { Container } from '../../common';

import './MasterFooter.scss';

const MasterFooter: React.FC = () => {
    return (
        <footer className="app-footer">
            <Container>
                <a href="https://civsoc.net/mgrob/" target="_blank" rel="noopener noreferrer">
                    Проект Молодёжного Гражданского Общества
                </a>
            </Container>
        </footer>
    );
};

export default MasterFooter;
