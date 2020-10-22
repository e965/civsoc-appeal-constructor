import React from 'react';

import { Container } from '../../common';

import './MasterHeader.scss';

const MasterHeader: React.FC = () => {
    return (
        <header className="app-header">
            <Container>Конструктор обращений</Container>
        </header>
    );
};

export default MasterHeader;
