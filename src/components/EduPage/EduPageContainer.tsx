import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EduApeals } from '../../data';

import { AppealType } from '../../data/types';

type PropsType = {
    appealID?: string;
};

const EduPageContainer: React.FC<PropsType> = ({ appealID = '' }) => {
    const [SelectedAppeal, setSelectedAppeal] = useState<AppealType | null>(null);

    useEffect(() => {
        if (appealID !== '') {
            const Appeal = EduApeals.find(Appeal => Appeal.id === appealID);

            if (Appeal) {
                setSelectedAppeal(Appeal);
            }
        } else {
            setSelectedAppeal(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appealID]);

    const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget);
    };

    return SelectedAppeal ? (
        <div>
            <div>
                <Link to="/edu">← Вернуться назад</Link>
            </div>
            <br />
            <div>
                Выбран шаблон <q>{SelectedAppeal.title}</q>
            </div>
            <br />
            <div>
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
        </div>
    ) : (
        <div>
            <div>Выберите шаблон:</div>
            <br />
            <ul>
                {EduApeals.map(Apeal => (
                    <li key={Apeal.id}>
                        <Link to={`/edu/${Apeal.id}`}>{Apeal.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EduPageContainer;
