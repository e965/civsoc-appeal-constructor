import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '../../common';

import './MasterHeader.scss';

const MasterHeader: React.FC = () => {
    const NavigationData: { text: string; url: string }[] = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'О проекте',
            url: '/about',
        },
        {
            text: 'В образовательные организации',
            url: '/edu',
        },
        {
            text: 'В МВД',
            url: '/police',
        },
    ];

    return (
        <header className="app-header">
            <Container>
                <nav className="app-header__nav">
                    <ul className="app-header__nav__items">
                        {NavigationData.map(NavigationItem => (
                            <li key={NavigationItem.url} data-to={NavigationItem.url} className="app-header__nav__item">
                                <NavLink to={NavigationItem.url} exact>
                                    {NavigationItem.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default MasterHeader;
