import React from 'react';

import { AppealType } from '../../../data/types';

import './AppealPageForm.scss';

type PropsType = {
    SelectedAppeal: AppealType;
    handleFormOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleFormOnInput: (event: React.FormEvent<HTMLFormElement>) => void;
};

const AppealPageForm: React.FC<PropsType> = props => {
    const { SelectedAppeal } = props;
    const { handleFormOnSubmit, handleFormOnInput } = props;

    return (
        <div className="appeal__form">
            <div className="appeal__form__head">
                Выбран шаблон <q>{SelectedAppeal.title}</q>
            </div>
            <form onSubmit={handleFormOnSubmit} onInput={handleFormOnInput}>
                {Object.entries(SelectedAppeal.formFields).map(Field => (
                    <div key={Field[0]} className="appeal__form__item">
                        <div className="appeal__form__item__label">
                            <label htmlFor={Field[0]}>{Field[1].label}</label>
                        </div>
                        <div className="appeal__form__item__input" data-type={Field[1].type}>
                            {Field[1].type === 'text' ? (
                                <input type={Field[1].htmlType ?? 'text'} id={Field[0]} placeholder={Field[1].example} />
                            ) : null}
                            {Field[1].type === 'checkbox' ? <input type="checkbox" id={Field[0]} /> : null}
                        </div>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default AppealPageForm;
