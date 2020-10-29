import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../common';

import { ImageLogoFooter } from '../../../static/images';

import './MasterFooter.scss';

const MasterFooter: React.FC = () => {
    return (
        <footer className="app-footer">
            <Container>
                <div className="app-footer__attribution">
                    <div className="app-footer__attribution__logo">
                        <a href="https://civsoc.net" target="_blank" rel="noreferrer noopener">
                            <img src={ImageLogoFooter} alt="civsoc logo" />
                        </a>
                    </div>
                    <div className="app-footer__attribution__text">
                        <a href="https://civsoc.net/mgrob/" target="_blank" rel="noreferrer noopener">
                            <span>Молодёжное</span> <span>Гражданское</span> <span>Общество</span>
                        </a>
                    </div>
                </div>
                <div className="app-footer__links">
                    <div className="app-footer__links__section">
                        <p>Соцсети</p>
                        <ul>
                            <li>
                                <a href="https://t.me" target="_blank" rel="noreferrer noopener">
                                    telegram
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/studentfract" target="_blank" rel="noreferrer noopener">
                                    twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="app-footer__links__section">
                        <p>В образовательные организации</p>
                        <ul>
                            <li>
                                <Link to="/edu">раз</Link>
                            </li>
                            <li>
                                <Link to="/edu">два много текста</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="app-footer__links__section">
                        <p>В МВД</p>
                        <ul>
                            <li>
                                <Link to="/police">раз </Link>
                            </li>
                            <li>
                                <Link to="/police">два средне текста</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default MasterFooter;
