import React from 'react';
import { Link } from 'react-router-dom';

import { AppealType } from '../../data/types';

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
                {AppealsSource.length === 0 ? <div className="">Заявлений нет</div> : null}
                <ul className="appeal__head__list">
                    {AppealsSource.map(Apeal => (
                        <li key={Apeal.id} data-selected={Apeal.id === SelectedAppeal?.id ? '' : null}>
                            <Link to={`/${org}/${Apeal.id}`}>{Apeal.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {SelectedAppeal ? (
                <div className="appeal__form">
                    <form onSubmit={handleFormOnSubmit}>
                        {Object.entries(SelectedAppeal.formFields).map(Field => (
                            <div key={Field[0]}>
                                <div>
                                    <label htmlFor={Field[0]}>{Field[1].label}</label>
                                </div>
                                {Field[1].type === 'text' ? (
                                    <div>
                                        <input type="text" id={Field[0]} placeholder={Field[1].example} />
                                    </div>
                                ) : (
                                    ''
                                )}
                                {Field[1].type === 'checkbox' ? (
                                    <div>
                                        <input type="checkbox" id={Field[0]} />
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        ))}
                        <div>
                            <button type="submit">Получить заявление</button>
                        </div>
                    </form>
                </div>
            ) : null}
        </div>
    );
};

export default AppealPage;
