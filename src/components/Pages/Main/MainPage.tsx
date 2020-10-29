import React from 'react';

import './MainPage.scss';

const MainPage: React.FC = () => {
    return (
        <div className="page page--index">
            <div className="page--index__tagline">
                <span>Конструктор заявлений</span> — <span>новый проект</span> <span>фракции учащихся</span>{' '}
                <span>
                    <q>Гражданского общества</q>
                </span>
            </div>
            <div className="page--index__about">
                <p>
                    Мы регулярно сталкиваемся с нарушениями закона. Заблокированный запасной выход в торговом центре, нарушения техники безопасности
                    на уроке, коррупция в университете, и так далее.
                </p>
                <p>
                    Большинство из нас игнорирует эти нарушения, потому что никто не хочет заниматься бюрократией. Этот сайт поможет вам составлять
                    шаблонные заявления, чтобы вы не отвлекались и делали самое важное.
                </p>
            </div>
            <div className="page--index__examples">
                <p>Примеры заявлений:</p>
                <ul>
                    <li>
                        <a href="#">заявление 1 asd asd </a>
                    </li>
                    <li>
                        <a href="#">заявление 2 asdads da</a>
                    </li>
                    <li>
                        <a href="#">заявление 3 asd</a>
                    </li>
                    <li>
                        <a href="#">заявление 4</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MainPage;
