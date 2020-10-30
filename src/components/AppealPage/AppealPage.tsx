import React from 'react';
import { Link } from 'react-router-dom';

import { AppealType } from '../../data/types';

import AppealPageForm from './AppealPageForm/AppealPageForm';

import './AppealPage.scss';

type PropsType = {
    org: 'edu' | 'police';
    AppealsSource: AppealType[];
    SelectedAppeal: AppealType | null;
    handleFormOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const AppealPage: React.FC<PropsType> = props => {
    const { org } = props;
    const { AppealsSource, SelectedAppeal } = props;
    const { handleFormOnSubmit } = props;

    return (
        <div className="appeal">
            <div className="appeal__head">
                <div className="appeal__head__h">Заявление</div>
                <ul className="appeal__head__list" data-empty="Заявлений нет">
                    {AppealsSource.map(Apeal => (
                        <li key={Apeal.id} data-selected={Apeal.id === SelectedAppeal?.id ? '' : null}>
                            <Link to={`/${org}/${Apeal.id}`}>{Apeal.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {SelectedAppeal !== null ? (
                <>
                    <AppealPageForm {...{ SelectedAppeal }} {...{ handleFormOnSubmit }} />
                    <div style={{ marginTop: 20, padding: 60 }}>где-то тут будут текст и кнопочки</div>
                </>
            ) : null}
        </div>
    );
};

export default AppealPage;
