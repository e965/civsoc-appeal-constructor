import React from 'react';
import { Link } from 'react-router-dom';

import { AppealType } from '../../data/types';

import AppealPageForm from './AppealPageForm/AppealPageForm';
import AppealPageTemplate from './AppealPageTemplate/AppealPageTemplate';

import './AppealPage.scss';

type PropsType = {
    org: 'edu' | 'police';
    AppealsSource: AppealType[];
    SelectedAppeal: AppealType | null;
    FormData: { [id: string]: string | boolean };
    handleFormOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleFormOnInput: (event: React.FormEvent<HTMLFormElement>) => void;
    handePrint: () => void;
};

const AppealPage: React.FC<PropsType> = props => {
    const { org } = props;
    const { AppealsSource, SelectedAppeal, FormData } = props;
    const { handleFormOnSubmit, handleFormOnInput } = props;
    const { handePrint } = props;

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
                    <AppealPageForm {...{ SelectedAppeal }} {...{ handleFormOnSubmit, handleFormOnInput }} />
                    <AppealPageTemplate {...{ SelectedAppeal, FormData }} {...{ handePrint }} />
                </>
            ) : null}
        </div>
    );
};

export default AppealPage;
